#!/usr/bin/env node
/**
 * Programmatically updates star counts, detects stale repos,
 * and checks for dead links in README.md
 */

const fs = require("fs");
const path = require("path");

const README_PATH = path.join(__dirname, "..", "README.md");
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const STALE_DAYS = 365;

const headers = {
  Accept: "application/vnd.github.v3+json",
  "User-Agent": "awesome-robotics-bot",
};
if (GITHUB_TOKEN) {
  headers.Authorization = `token ${GITHUB_TOKEN}`;
}

function formatStars(count) {
  if (count >= 1000) return Math.round(count / 1000) + "k";
  return String(count);
}

async function fetchRepoData(owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  try {
    const res = await fetch(url, { headers });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      stars: data.stargazers_count,
      pushed_at: data.pushed_at,
      archived: data.archived,
      description: data.description,
    };
  } catch {
    return null;
  }
}

async function checkUrl(url) {
  try {
    const res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      headers: { "User-Agent": "awesome-robotics-bot" },
      signal: AbortSignal.timeout(10000),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function main() {
  let readme = fs.readFileSync(README_PATH, "utf-8");

  // Extract all GitHub repo URLs from markdown links
  const githubLinkRegex =
    /\[([^\]]+)\]\((https:\/\/github\.com\/([^/)]+)\/([^/)]+))\)/g;
  const nonGithubLinkRegex =
    /\[([^\]]+)\]\((https?:\/\/(?!github\.com)[^\s)]+)\)/g;

  const repos = [];
  let match;
  while ((match = githubLinkRegex.exec(readme)) !== null) {
    repos.push({
      fullMatch: match[0],
      name: match[1],
      url: match[2],
      owner: match[3],
      repo: match[4],
    });
  }

  const nonGithubUrls = [];
  while ((match = nonGithubLinkRegex.exec(readme)) !== null) {
    nonGithubUrls.push({ name: match[1], url: match[2] });
  }

  // Deduplicate repos
  const seen = new Set();
  const uniqueRepos = repos.filter((r) => {
    const key = `${r.owner}/${r.repo}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  console.log(`Found ${uniqueRepos.length} unique GitHub repos`);
  console.log(`Found ${nonGithubUrls.length} non-GitHub URLs`);

  // Fetch all repo data (batched to avoid rate limits)
  const results = [];
  const BATCH_SIZE = 10;
  for (let i = 0; i < uniqueRepos.length; i += BATCH_SIZE) {
    const batch = uniqueRepos.slice(i, i + BATCH_SIZE);
    const batchResults = await Promise.all(
      batch.map(async (r) => {
        const data = await fetchRepoData(r.owner, r.repo);
        return { ...r, data };
      })
    );
    results.push(...batchResults);
    if (i + BATCH_SIZE < uniqueRepos.length) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  // Update star counts in README
  let changes = 0;
  const staleRepos = [];
  const deadRepos = [];

  for (const r of results) {
    if (!r.data) {
      deadRepos.push(`${r.owner}/${r.repo}`);
      continue;
    }

    const newStars = formatStars(r.data.stars);
    const pushedAt = new Date(r.data.pushed_at);
    const daysSincePush = (Date.now() - pushedAt.getTime()) / 86400000;

    if (daysSincePush > STALE_DAYS) {
      staleRepos.push({
        repo: `${r.owner}/${r.repo}`,
        lastPush: r.data.pushed_at.split("T")[0],
        days: Math.round(daysSincePush),
      });
    }

    // Update star count in table rows: | [Name](url) | STARSk |
    // Match the pattern where stars appear after the repo link in a table
    const escapedUrl = r.url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const starRegex = new RegExp(
      `(\\[${r.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\]\\(${escapedUrl}\\)\\s*\\|\\s*)([\\d,]+k?|\\d+)`,
      "g"
    );

    const newReadme = readme.replace(starRegex, (fullMatch, prefix, oldStars) => {
      if (oldStars !== newStars) {
        changes++;
        console.log(
          `  ${r.owner}/${r.repo}: ${oldStars} -> ${newStars} (${r.data.stars.toLocaleString()})`
        );
      }
      return prefix + newStars;
    });
    readme = newReadme;
  }

  // Check non-GitHub URLs for dead links
  console.log("\nChecking non-GitHub URLs for dead links...");
  const deadLinks = [];
  for (let i = 0; i < nonGithubUrls.length; i += 5) {
    const batch = nonGithubUrls.slice(i, i + 5);
    const checks = await Promise.all(
      batch.map(async (u) => {
        const alive = await checkUrl(u.url);
        if (!alive) deadLinks.push(u);
        return { ...u, alive };
      })
    );
  }

  // Write updated README
  fs.writeFileSync(README_PATH, readme);

  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    totalRepos: uniqueRepos.length,
    starCountsUpdated: changes,
    staleRepos,
    deadGithubRepos: deadRepos,
    deadLinks: deadLinks.map((l) => ({ name: l.name, url: l.url })),
  };

  console.log(`\n--- Report ---`);
  console.log(`Star counts updated: ${changes}`);
  console.log(`Stale repos (>${STALE_DAYS} days): ${staleRepos.length}`);
  staleRepos.forEach((r) =>
    console.log(`  ⚠️  ${r.repo} - last push ${r.lastPush} (${r.days} days ago)`)
  );
  console.log(`Dead GitHub repos: ${deadRepos.length}`);
  deadRepos.forEach((r) => console.log(`  💀 ${r}`));
  console.log(`Dead non-GitHub links: ${deadLinks.length}`);
  deadLinks.forEach((l) => console.log(`  💀 ${l.name}: ${l.url}`));

  // Write report JSON for the action to use
  fs.writeFileSync(
    path.join(__dirname, "..", "report.json"),
    JSON.stringify(report, null, 2)
  );

  // Set output for GitHub Actions
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(
      process.env.GITHUB_OUTPUT,
      `changes=${changes}\nstale=${staleRepos.length}\ndead=${deadRepos.length + deadLinks.length}\n`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
