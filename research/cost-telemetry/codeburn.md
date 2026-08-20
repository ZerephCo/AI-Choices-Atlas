---
name: CodeBurn
slug: codeburn
category: cost-telemetry
subtype: "16.1 spend telemetry"
repo: https://github.com/getagentseal/codeburn
site: null
maker: AgentSeal
license_claimed: MIT
license_detected: MIT
stars: 9557
created: "2026-04"
language: TypeScript
maturity: Established
status: active
local: true
one_liner: "Free, local tool to track AI coding token usage and cost across ~40 tools and agents (README: 41; repo description: 37), by model, project, and task, plus waste-finding optimization (npx codeburn)."
tagline_quote: "Free, local tool to track AI coding token usage and cost across 37 tools"
features:
  - "~40 tools/agents — README claims 41, live repo description says 37 (both read 2026-08-20); Claude Code, Cursor, Codex, Gemini, …"
  - "cost + tokens by model / project / task"
  - "codeburn optimize: ranked waste findings with A–F setup grade; --apply fixes config-class findings (backed up + journaled; act undo restores)"
  - "local (no data leaves); free; npx codeburn"
choose_when: "You want total AI-coding spend across all your tools in one local dashboard."
avoid_when: "You only use Claude Code (ccusage) or want token reduction (token-savior)."
cross_links: ["§12"]
hands_on: docs-only
last_verified: "2026-08-20"
---
# CodeBurn — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Cost telemetry → 16.1 spend telemetry (cross-tool) |
| Repo | https://github.com/getagentseal/codeburn (**org renamed from `AgentSeal/codeburn`**; old URL redirects — re-verified 2026-08-20) |
| Maker | **AgentSeal** (org login now `getagentseal`) |
| License | **MIT** / MIT |
| ⭐ / created | 9,557 · 2026-04 · TypeScript |
| Researched | 2026-08-20 · hands-on: **docs-only** · corpus-noted (Doc 28) |

## 1. What it is
Per its README (2026-08-20): a *"free, open-source, local-first tool that tracks AI coding token usage and cost across 41 tools"* and agents (Claude Code, Cursor, Codex, Gemini and more), by model, project, and task. The cross-tool AI-coding spend dashboard, now with a waste-finding optimizer. `npx codeburn`. (The live repo *description* still says **37** tools — the counts disagree; both recorded below.)

## 2. Quotes (verbatim — attributed, both read 2026-08-20)
- README claim: *"tracks AI coding token usage and cost across 41 tools"*
- Live repo description (lagging the README): *"Free, local tool to track AI coding token usage and cost across 37 tools"*

## 3. Features
- **~40 tools/agents** (README: 41; repo description: 37) — Claude Code, Cursor, Codex, Gemini, …
- Cost + tokens broken down by **model / project / task**.
- **`codeburn optimize`** (2026): ranked waste findings (token/$ savings + ready-to-paste fixes) rolled into an A–F setup health grade; **`--apply`** fixes config-class findings with every change backed up and journaled; **`codeburn act list` / `act undo <id>`** shows history and restores originals.
- **Local** (no data leaves); free; `npx codeburn`.

## 4. What it is NOT / limitations
- Telemetry (tracks spend), not reduction (see token-savior) or a gateway (§12).

## 5. Roadmap
- **Was:** 2026-04 as `AgentSeal/codeburn`.
- **Now (2026-08):** ⭐9.6k; org renamed **`getagentseal`**; cross-tool cost telemetry + the `optimize`/`act` waste-finding/apply/undo loop; README claims 41 tools while the repo description says 37.
- **Ahead:** more tools; reporting.

## 6. Positioning
- **CodeBurn** — total AI-coding spend across all your tools in one local dashboard.
- vs ccusage (Claude-Code-only), token-savior (reduces spend), gateways (§12, per-request cost).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** `npx codeburn`; review spend by model/project across tools.

## 8. Sources
- https://github.com/getagentseal/codeburn (README + live description; `AgentSeal/codeburn` redirects)

_Last updated: 2026-08-20 · Researcher: Claude_
