---
name: Vibe Kanban
slug: vibe-kanban
category: orchestrators
subtype: "2.1 Cockpits & multiplexers"
repo: https://github.com/BloopAI/vibe-kanban
site: https://vibekanban.com
maker: Bloop (BloopAI)
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 27848
created: "2025-06"
language: Rust
maturity: Prominent
status: sunsetting
local: partial
one_liner: "The board + worktree + diff-review cockpit that pioneered the pattern; now sunsetting to a community-maintained, local-only OSS project."
tagline_quote: "Vibe Kanban is sunsetting."
features:
  - "Kanban issues to plan work; each workspace gives an agent a branch, terminal, and dev server"
  - "Inline diff review + comments; live browser preview (devtools); click-to-edit"
  - "PR create/merge; remote access (being removed in sunset transition)"
  - "Agents: Claude Code, Codex, Gemini CLI, Copilot, Amp, Cursor, OpenCode, Droid, CCR, Qwen"
  - "Rust backend + TypeScript/Node frontend; frozen ~2026-04-24"
choose_when: "You are already dependent and want to self-host the local OSS build, or to study the board+worktree pattern."
avoid_when: "New adoption — it is sunsetting, remote features are being removed, and there is no vendor support."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Vibe Kanban — Deep Research Reference  ⚰️ SUNSETTING

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → cockpit / multiplexer — **⚰️ sunsetting → community OSS** |
| Repo / site | https://github.com/BloopAI/vibe-kanban · vibekanban.com |
| Maker | **Bloop (BloopAI)** — company shut down Apr 2026 |
| License | Apache-2.0 / Apache-2.0 |
| ⭐ / created | 27,848 · 2025-06 · **frozen ~2026-04-24** |
| Stack | Rust (backend) + TypeScript/Node.js (frontend) |
| Status | **⚰️ Sunsetting** (README confirmed) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it was
A **kanban cockpit for orchestrating coding agents** — board + isolated git worktrees + diff review + live preview. Historically significant: launched June 2025 and **first to ship multi-agent support, diff commenting, live preview, click-to-edit, and remote access** — "one of the cleanest expressions" of the board+worktree pattern now everywhere.

## 2. Quotes (verbatim, from docs — attributed)
- **Sunset:** *"Vibe Kanban is sunsetting. Read the announcement."*
- Overview: *"Get 10X more out of Claude Code, Gemini CLI, Codex, Amp and other coding agents…"*
- Planning: *"Use kanban issues to plan work, either privately or with your team."*
- Workspace: *"Each workspace gives an agent a branch, a terminal, and a dev server."*
- Flow: *"Describe the work, review the diff, ship it."*

## 3. What it did
Kanban issues to plan work; per-agent workspace (branch + terminal + dev server); **inline diff review with comments**; browser **live preview** with devtools; click-to-edit; PR create/merge. Supported agents: Claude Code, Codex, Gemini CLI, GitHub Copilot, Amp, Cursor, OpenCode, Droid, CCR, Qwen Code.

## 4. ⚰️ Sunset status
- README: *"Vibe Kanban is sunsetting."* **Bloop announced shutdown April 10, 2026** ("the vast majority are free users and we couldn't find a business model").
- **The project is not going away:** it transitions to a **community-maintained OSS project (Apache-2.0)**; the repo stays online.
- **Remote services removed after ~30 days** → **fully local architecture** (remote kanban issues, comments, projects, organisations are removed).
- **No direct replacement** — self-host the local OSS build or await community forks.
- Doc 28 correctly disqualified it for *new* adoption (§12.5/13.3/14.3/19).

## 5. Choose / avoid
- **Avoid for new adoption** (sunsetting; remote features removed; no vendor).
- Reasonable only to **self-host the local OSS build** if already dependent, or to study the pattern.
- For active cockpits: **AgentWrapper AO** (Apache, worktree/PR-CI) or **Agent Teams AI** (AGPL, peer-team).

## 6. Roadmap
- **Was:** built by Bloop (June 2025); pioneered board+worktree+diff-review; ⭐27k.
- **Now (2026):** **sunsetting** — company shut down (Apr 2026); frozen repo; transitioning to community OSS + local-only.
- **Ahead:** community forks / self-host only; no company roadmap.

## 7. Sources
- https://github.com/BloopAI/vibe-kanban (README sunset notice) · https://www.vibekanban.com/blog/shutdown
- ReviewedResearch.md (sunset confirmed; frozen at `4deb7ec`)

_Last updated: 2026-07-20 · verdict: ⚰️ sunsetting · Researcher: Claude_
