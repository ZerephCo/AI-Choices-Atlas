---
name: Emdash
slug: emdash
category: orchestrators
subtype: "2.1 Cockpits & multiplexers"
repo: https://github.com/generalaction/emdash
site: https://emdash.ai
maker: General Action (YC W26)
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 5442
created: "2025-08"
language: TypeScript
maturity: Established
status: active
local: partial
one_liner: "Open-source desktop cockpit that runs many coding agents in parallel across isolated git worktrees, with browser preview, diff/PR review, scheduled automation, and remote SSH exec."
tagline_quote: "Open-source agentic development environment."
features:
  - "Run 25+ agents (Claude Code, Codex, Cursor, Amp, Antigravity, …) in parallel"
  - "Each agent isolated in its own git worktree/branch + terminal + conversation"
  - "Built-in browser for app previews; integrated diff/PR review + CI monitoring"
  - "Scheduled automation (recurring bug sweeps, release prep)"
  - "Remote SSH execution on dev servers / cloud VMs; desktop app (mac/win/linux)"
choose_when: "You want a graphical, open-source desktop cockpit for parallel agents with preview, review, and scheduling built in."
avoid_when: "You want a minimal terminal tool (see Claude Squad) or must avoid a desktop-app dependency."
cross_links: ["§1", "§10"]
hands_on: docs-only
last_verified: "2026-08-19"
---
# Emdash — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → 2.1 cockpit / multiplexer (desktop GUI, worktrees) |
| Repo / site | https://github.com/generalaction/emdash · https://emdash.ai |
| Maker | **General Action** (YC W26) |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | **5,270** ⭐ · 543 forks · created 2025-08 · TypeScript · active (pushed 2026-07-25) |
| Runs local | **🟡 partial** — desktop app, but offers remote SSH execution on dev servers / cloud VMs; agents call their cloud providers |
| Researched | 2026-07-26 · hands-on: **docs-only** |

## 1. What it is
An **open-source desktop "agentic development environment"** — a graphical cockpit that runs **multiple coding agents in parallel**, each in its own **isolated git worktree** (branch + terminal + conversation), with a built-in **browser preview**, **diff/PR review + CI monitoring**, and **scheduled automation**. Backed by General Action (YC W26).

## 2. Quotes (verbatim — attributed)
- Site: *"Open-source agentic development environment."*
- Site: *"Run multiple coding agents in parallel. Use any provider."*

## 3. Features
- **Parallel agents** across separate worktrees (isolated branches/terminals/conversations).
- **25+ agents/providers** — Claude Code, Codex, Cursor, Amp, Antigravity, and more.
- **Built-in browser** for app previews; **diff/PR review** + CI monitoring.
- **Scheduled automation** (recurring bug sweeps, release prep).
- **Remote SSH execution** on dev servers or cloud VMs; **desktop app** (macOS/Windows/Linux).

## 4. Choose / avoid
- **Choose it when** you want a graphical, open-source cockpit for parallel agents with preview/review/scheduling built in.
- **Avoid when** you prefer a minimal terminal multiplexer (Claude Squad) or can't take a desktop-app dependency.
- Related: drives the coding agents in §1; its remote SSH / cloud-VM execution touches §10 (sandboxes / remote exec).

## 5. Roadmap / status
- **Now:** active daily development (created 2025-08, ~5.3k ⭐, TypeScript, Apache-2.0, YC W26).

## 6. Sources
- https://github.com/generalaction/emdash (GitHub API: 5,270 ⭐, Apache-2.0, TypeScript, created 2025-08, pushed 2026-07-25)
- https://emdash.ai (site — tagline, feature list)
- InitialResearch.md (corpus cockpit-multiplexer discovery list; not previously carded)

_Last verified: 2026-07-26 · verdict: 🟢 active · Researcher: Claude_
