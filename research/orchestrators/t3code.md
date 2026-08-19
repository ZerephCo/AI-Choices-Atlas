---
name: T3 Code
slug: t3code
category: orchestrators
subtype: "2.1 Cockpits & multiplexers"
repo: https://github.com/pingdotgg/t3code
site: https://t3.codes
maker: Ping (pingdotgg) — Theo Browne
license_claimed: MIT
license_detected: MIT
stars: 19444
created: "2026-02"
language: TypeScript
maturity: Prominent
status: active
local: partial
one_liner: "Open-source desktop/CLI cockpit that runs several coding agents (Claude Code, Codex, Cursor, OpenCode, Grok) in one workspace, bring-your-own-subscription. From Ping (Theo); early (v0.0.x)."
tagline_quote: "The open-source control plane for coding agents."
features:
  - "One GUI + CLI (npx t3@latest) over Claude Code, Codex, Cursor, OpenCode, Grok (more planned)"
  - "Bring-your-own-subscription — no token reselling; switch models mid-thread"
  - "One-button commit + PR with auto-generated title/body"
  - "Cross-platform desktop app (macOS/Windows/Linux) + remote access; auto server updates"
  - "Fully open-source (MIT) and forkable"
choose_when: "You want one open-source cockpit to drive several coding-agent providers with your own subscriptions, in one workspace."
avoid_when: "You need mature/stable software — it's pre-1.0 (v0.0.x, expect bugs, docs still forming) — or you only use one agent CLI directly."
cross_links: ["§1", "§12"]
hands_on: docs-only
last_verified: "2026-08-19"
---
# T3 Code — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → 2.1 cockpit / multiplexer (control plane for coding agents) |
| Repo / site | https://github.com/pingdotgg/t3code · https://t3.codes |
| Maker | **Ping (pingdotgg)** — Theo Browne's company |
| License | **MIT** / MIT |
| ⭐ / created | **14,827** ⭐ · 3,255 forks · created 2026-02 · TypeScript · pushed 2026-07-25 (active) |
| Release | **v0.0.28** (2026-06-29) — early / pre-1.0 |
| Runs local | **🟡 partial** — local desktop app + CLI, but drives cloud agent providers (your code goes to them); optional remote access |
| Researched | 2026-07-25 · hands-on: **docs-only** |

## 1. What it is
An **open-source cockpit / control plane for coding agents**: one desktop app (and a `npx t3@latest` CLI) that lets you drive several agent providers — **Claude Code, Codex, Cursor, OpenCode, Grok** (more planned) — from a single workspace instead of switching between separate tools. **Bring-your-own-subscription** (it does not resell tokens), switch models mid-thread, and ship with a one-button commit + PR. Cross-platform (macOS / Windows / Linux). Very popular fast (≈15k ⭐ within months) but explicitly **early** — the makers note expected bugs and still-forming public docs.

## 2. Quotes (verbatim — attributed)
- Site (t3.codes): *"The open-source control plane for coding agents."*
- Docs: *"A minimal web GUI for coding agents."*

## 3. Features
- **Unified interface** over Codex, Claude, Cursor, OpenCode, Grok — one workspace, no tool-switching.
- **CLI + desktop app** (`npx t3@latest`; downloadable builds for macOS/Windows/Linux).
- **Bring-your-own-subscription** — authenticate your own provider accounts; no token reselling.
- **Switch models mid-thread**; multiple agent threads in one workspace.
- **One-button commit + PR** with auto-generated title/body.
- **Remote access** + automatic server updates; fully open-source (MIT), forkable.

## 4. Choose / avoid
- **Choose it when** you want a single open-source cockpit over multiple agent providers, using your own subscriptions.
- **Avoid when** you need mature, stable tooling (it is pre-1.0, v0.0.x, expect rough edges and thin docs), or you only ever use one agent CLI directly.
- Related active cockpits: **AgentWrapper AO**, **Agent Teams AI** (§2.1); it wraps the coding agents in §1 and lets you switch models (§12).

## 5. Roadmap / status
- **Now (2026):** actively developed (daily pushes), latest **v0.0.28**; large early community (~15k ⭐). Status **🟢 active** but **pre-1.0** — treat as preview-quality software with a prominent following.
- **Ahead:** more providers planned; docs still being written.

## 6. Sources
- https://github.com/pingdotgg/t3code (GitHub API: 14,827 ⭐, MIT, TypeScript, created 2026-02-08, pushed 2026-07-25, release v0.0.28)
- https://t3.codes (product site — tagline, feature list)
- InitialResearch.md (corpus: listed under §2 "outer control planes" / cockpit-multiplexer discovery lists; not previously carded)

_Last verified: 2026-07-25 · verdict: 🟢 active (pre-1.0) · Researcher: Claude_
