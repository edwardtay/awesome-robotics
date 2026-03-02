# Awesome Robotics Dashboard — Cloudflare Worker

Live dashboard at `awesome-robotics.YOUR_SUBDOMAIN.workers.dev`

## Setup

1. Install deps:
   ```bash
   cd worker && npm install
   ```

2. Create a KV namespace:
   ```bash
   wrangler kv namespace create CACHE
   wrangler kv namespace create CACHE --preview
   ```

3. Update `wrangler.toml` with the KV namespace IDs from step 2.

4. (Optional) Add a GitHub token for higher rate limits:
   ```bash
   wrangler secret put GITHUB_TOKEN
   ```

5. Deploy:
   ```bash
   npm run deploy
   ```

## Endpoints

| Path | Description |
|------|-------------|
| `/` | HTML dashboard with live stats |
| `/api/data` | JSON API with all repo data |
| `/api/refresh` | Force refresh cached data |

## Cron (auto-refresh)

Add to `wrangler.toml` to auto-refresh hourly:

```toml
[triggers]
crons = ["0 * * * *"]
```

## Features

- Real-time star counts from GitHub API
- Star velocity tracking (gain since last update)
- Stale repo detection (>1 year since last push)
- Dead link detection
- Dark mode UI with responsive design
- KV-cached with configurable TTL
