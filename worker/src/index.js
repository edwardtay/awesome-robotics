/**
 * Awesome Robotics — Live Dashboard
 * Cloudflare Worker that serves a real-time dashboard with star counts,
 * trending repos, staleness detection, and dead link checks.
 */

const GITHUB_API = "https://api.github.com";
const README_URL =
  "https://raw.githubusercontent.com/edwardtay/awesome-robotics/main/README.md";
const CACHE_KEY = "awesome-robotics-data";
const HISTORY_KEY_PREFIX = "stars-history:";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/data") {
      return handleApiData(env);
    }

    if (url.pathname === "/api/refresh") {
      return handleRefresh(env);
    }

    return handleDashboard(env);
  },

  async scheduled(event, env) {
    await refreshData(env);
  },
};

// ---------- Data Layer ----------

async function refreshData(env) {
  const readme = await fetch(README_URL).then((r) => r.text());
  const repos = parseReadme(readme);

  // Fetch star counts from GitHub API
  const headers = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "awesome-robotics-dashboard",
  };
  if (env.GITHUB_TOKEN) {
    headers.Authorization = `token ${env.GITHUB_TOKEN}`;
  }

  const enriched = [];
  // Batch fetch in groups of 10
  for (let i = 0; i < repos.length; i += 10) {
    const batch = repos.slice(i, i + 10);
    const results = await Promise.all(
      batch.map(async (repo) => {
        if (!repo.github) return repo;
        try {
          const res = await fetch(
            `${GITHUB_API}/repos/${repo.owner}/${repo.repo}`,
            { headers }
          );
          if (!res.ok) return { ...repo, error: res.status };
          const data = await res.json();
          return {
            ...repo,
            stars: data.stargazers_count,
            forks: data.forks_count,
            open_issues: data.open_issues_count,
            pushed_at: data.pushed_at,
            archived: data.archived,
            language: data.language,
            description: data.description,
            license: data.license?.spdx_id,
          };
        } catch (e) {
          return { ...repo, error: e.message };
        }
      })
    );
    enriched.push(...results);
  }

  // Calculate velocity (stars gained since last check)
  const previousData = await getCachedData(env);
  const previousMap = {};
  if (previousData?.repos) {
    previousData.repos.forEach((r) => {
      if (r.owner && r.repo) previousMap[`${r.owner}/${r.repo}`] = r.stars;
    });
  }

  for (const repo of enriched) {
    if (!repo.github || !repo.stars) continue;
    const key = `${repo.owner}/${repo.repo}`;
    const prev = previousMap[key];
    repo.velocity = prev ? repo.stars - prev : 0;

    // Staleness
    if (repo.pushed_at) {
      const days = (Date.now() - new Date(repo.pushed_at).getTime()) / 86400000;
      repo.daysSincePush = Math.round(days);
      repo.stale = days > 365;
    }
  }

  // Save history snapshot
  const today = new Date().toISOString().split("T")[0];
  const historySnapshot = {};
  enriched.forEach((r) => {
    if (r.owner && r.repo && r.stars) {
      historySnapshot[`${r.owner}/${r.repo}`] = r.stars;
    }
  });
  if (env.CACHE) {
    await env.CACHE.put(
      HISTORY_KEY_PREFIX + today,
      JSON.stringify(historySnapshot),
      { expirationTtl: 90 * 86400 }
    );
  }

  const payload = {
    repos: enriched,
    lastUpdated: new Date().toISOString(),
    totalStars: enriched.reduce((sum, r) => sum + (r.stars || 0), 0),
    totalRepos: enriched.length,
  };

  if (env.CACHE) {
    await env.CACHE.put(CACHE_KEY, JSON.stringify(payload), {
      expirationTtl: parseInt(env.CACHE_TTL || "3600"),
    });
  }

  return payload;
}

async function getCachedData(env) {
  if (!env.CACHE) return null;
  const cached = await env.CACHE.get(CACHE_KEY);
  return cached ? JSON.parse(cached) : null;
}

function parseReadme(markdown) {
  const repos = [];
  let currentSection = "";

  const lines = markdown.split("\n");
  for (const line of lines) {
    const sectionMatch = line.match(/^##\s+(?:[\p{Emoji}\uFE0F]*\s*)?(.+)/u);
    if (sectionMatch) {
      currentSection = sectionMatch[1].trim();
      continue;
    }

    // Match table rows with GitHub links
    const githubMatch = line.match(
      /\|\s*\[([^\]]+)\]\((https:\/\/github\.com\/([^/)]+)\/([^/)]+))\)/
    );
    if (githubMatch) {
      repos.push({
        name: githubMatch[1],
        url: githubMatch[2],
        owner: githubMatch[3],
        repo: githubMatch[4],
        section: currentSection,
        github: true,
      });
      continue;
    }

    // Match non-GitHub links in tables
    const linkMatch = line.match(
      /\|\s*\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/
    );
    if (linkMatch && !linkMatch[2].includes("github.com")) {
      repos.push({
        name: linkMatch[1],
        url: linkMatch[2],
        section: currentSection,
        github: false,
      });
    }
  }

  return repos;
}

// ---------- Route Handlers ----------

async function handleApiData(env) {
  let data = await getCachedData(env);
  if (!data) {
    data = await refreshData(env);
  }
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=600",
    },
  });
}

async function handleRefresh(env) {
  const data = await refreshData(env);
  return new Response(JSON.stringify({ ok: true, repos: data.totalRepos }), {
    headers: { "Content-Type": "application/json" },
  });
}

async function handleDashboard(env) {
  let data = await getCachedData(env);
  if (!data) {
    data = await refreshData(env);
  }

  const html = renderDashboard(data);
  return new Response(html, {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
  });
}

// ---------- Dashboard UI ----------

function renderDashboard(data) {
  const sections = {};
  const trending = [];
  const stale = [];
  const dead = [];

  for (const repo of data.repos) {
    if (!sections[repo.section]) sections[repo.section] = [];
    sections[repo.section].push(repo);
    if (repo.velocity > 100) trending.push(repo);
    if (repo.stale) stale.push(repo);
    if (repo.error) dead.push(repo);
  }

  trending.sort((a, b) => (b.velocity || 0) - (a.velocity || 0));

  const sectionRows = Object.entries(sections)
    .map(
      ([name, repos]) => `
      <div class="section">
        <h2>${esc(name)}</h2>
        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>Stars</th>
              <th>Velocity</th>
              <th>Language</th>
              <th>Last Push</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${repos
              .sort((a, b) => (b.stars || 0) - (a.stars || 0))
              .map(
                (r) => `
              <tr class="${r.stale ? "stale" : ""} ${r.archived ? "archived" : ""} ${r.error ? "dead" : ""}">
                <td><a href="${esc(r.url)}" target="_blank">${esc(r.name)}</a></td>
                <td class="num">${r.stars ? formatNum(r.stars) : "-"}</td>
                <td class="num ${(r.velocity || 0) > 0 ? "up" : ""}">${r.velocity ? "+" + formatNum(r.velocity) : "-"}</td>
                <td>${esc(r.language || "-")}</td>
                <td>${r.pushed_at ? r.pushed_at.split("T")[0] : "-"}</td>
                <td>${statusBadge(r)}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Awesome Robotics Dashboard</title>
  <style>
    :root {
      --bg: #0d1117; --surface: #161b22; --border: #30363d;
      --text: #e6edf3; --text2: #8b949e; --accent: #58a6ff;
      --green: #3fb950; --yellow: #d29922; --red: #f85149;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: var(--bg); color: var(--text); line-height: 1.5;
      padding: 2rem; max-width: 1200px; margin: 0 auto;
    }
    header { margin-bottom: 2rem; }
    header h1 { font-size: 1.8rem; margin-bottom: 0.5rem; }
    header p { color: var(--text2); }
    .stats {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1rem; margin-bottom: 2rem;
    }
    .stat-card {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 8px; padding: 1rem;
    }
    .stat-card .label { color: var(--text2); font-size: 0.85rem; }
    .stat-card .value { font-size: 1.5rem; font-weight: 600; }
    .trending {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 8px; padding: 1rem; margin-bottom: 2rem;
    }
    .trending h2 { font-size: 1.1rem; margin-bottom: 0.5rem; }
    .trending-item {
      display: inline-flex; align-items: center; gap: 0.5rem;
      background: #1a2332; border-radius: 6px; padding: 0.3rem 0.7rem;
      margin: 0.25rem; font-size: 0.85rem;
    }
    .trending-item .vel { color: var(--green); font-weight: 600; }
    .alerts {
      background: #2d1b1b; border: 1px solid #f8514933;
      border-radius: 8px; padding: 1rem; margin-bottom: 2rem;
    }
    .alerts.ok { background: #1b2d1b; border-color: #3fb95033; }
    .alerts h2 { font-size: 1.1rem; margin-bottom: 0.5rem; }
    .alerts ul { list-style: none; padding: 0; }
    .alerts li { font-size: 0.85rem; padding: 0.2rem 0; color: var(--text2); }
    .section { margin-bottom: 2rem; }
    .section h2 {
      font-size: 1.2rem; margin-bottom: 0.75rem;
      padding-bottom: 0.5rem; border-bottom: 1px solid var(--border);
    }
    table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
    th {
      text-align: left; padding: 0.5rem; color: var(--text2);
      font-weight: 500; border-bottom: 1px solid var(--border);
    }
    td { padding: 0.5rem; border-bottom: 1px solid var(--border); }
    tr:hover { background: #1c2128; }
    tr.stale td { opacity: 0.7; }
    tr.dead td { opacity: 0.5; text-decoration: line-through; }
    .num { text-align: right; font-variant-numeric: tabular-nums; }
    .up { color: var(--green); }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }
    .badge {
      font-size: 0.7rem; padding: 0.15rem 0.4rem; border-radius: 4px;
      font-weight: 500; display: inline-block;
    }
    .badge.active { background: #238636; color: #fff; }
    .badge.stale { background: #9e6a03; color: #fff; }
    .badge.archived { background: #da3633; color: #fff; }
    .badge.dead { background: #f85149; color: #fff; }
    .badge.commercial { background: #1f6feb; color: #fff; }
    footer {
      margin-top: 3rem; padding-top: 1rem;
      border-top: 1px solid var(--border);
      color: var(--text2); font-size: 0.85rem;
      display: flex; justify-content: space-between;
    }
    @media (max-width: 768px) {
      body { padding: 1rem; }
      .stats { grid-template-columns: repeat(2, 1fr); }
      table { font-size: 0.8rem; }
      th:nth-child(4), td:nth-child(4),
      th:nth-child(5), td:nth-child(5) { display: none; }
    }
  </style>
</head>
<body>
  <header>
    <h1>🤖 Awesome Robotics Dashboard</h1>
    <p>Live stats for <a href="https://github.com/edwardtay/awesome-robotics">edwardtay/awesome-robotics</a></p>
  </header>

  <div class="stats">
    <div class="stat-card">
      <div class="label">Total Tools</div>
      <div class="value">${data.totalRepos}</div>
    </div>
    <div class="stat-card">
      <div class="label">Combined Stars</div>
      <div class="value">${formatNum(data.totalStars)}</div>
    </div>
    <div class="stat-card">
      <div class="label">Sections</div>
      <div class="value">${Object.keys(sections).length}</div>
    </div>
    <div class="stat-card">
      <div class="label">Last Updated</div>
      <div class="value" style="font-size:1rem">${data.lastUpdated ? new Date(data.lastUpdated).toLocaleDateString() : "never"}</div>
    </div>
  </div>

  ${
    trending.length > 0
      ? `<div class="trending">
    <h2>🔥 Trending (stars gained since last update)</h2>
    ${trending
      .slice(0, 10)
      .map(
        (r) =>
          `<span class="trending-item"><a href="${esc(r.url)}">${esc(r.name)}</a> <span class="vel">+${formatNum(r.velocity)}</span></span>`
      )
      .join("")}
  </div>`
      : ""
  }

  ${
    stale.length > 0 || dead.length > 0
      ? `<div class="alerts">
    <h2>⚠️ Health Alerts</h2>
    <ul>
      ${stale.map((r) => `<li>🟡 <strong>${esc(r.name)}</strong> — last push ${r.pushed_at ? r.pushed_at.split("T")[0] : "unknown"} (${r.daysSincePush} days ago)</li>`).join("")}
      ${dead.map((r) => `<li>🔴 <strong>${esc(r.name)}</strong> — ${r.error === 404 ? "repo not found" : "error " + r.error}</li>`).join("")}
    </ul>
  </div>`
      : `<div class="alerts ok"><h2>✅ All tools healthy</h2></div>`
  }

  ${sectionRows}

  <footer>
    <span>Powered by Cloudflare Workers</span>
    <span>Data cached for ${Math.round((parseInt(data.lastUpdated ? "3600" : "0") || 3600) / 60)} min</span>
  </footer>
</body>
</html>`;
}

function formatNum(n) {
  if (!n) return "0";
  if (n >= 1000) return Math.round(n / 1000) + "k";
  return String(n);
}

function statusBadge(repo) {
  if (repo.error) return '<span class="badge dead">dead</span>';
  if (repo.archived) return '<span class="badge archived">archived</span>';
  if (!repo.github) return '<span class="badge commercial">commercial</span>';
  if (repo.stale) return '<span class="badge stale">stale</span>';
  return '<span class="badge active">active</span>';
}

function esc(s) {
  if (!s) return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
