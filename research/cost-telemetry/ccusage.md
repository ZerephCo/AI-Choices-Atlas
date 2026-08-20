---
name: ccusage
slug: ccusage
category: cost-telemetry
subtype: "16.1 spend telemetry"
repo: https://github.com/ccusage/ccusage
site: null
maker: ryoppippi
license_claimed: MIT
license_detected: NOASSERTION
stars: 18054
created: "2025-05"
language: Rust
maturity: Prominent
status: active
local: true
one_liner: "The popular, zero-config usage + cost analyzer for local agent logs — Claude Code first, now also Codex, OpenCode, Amp, Droid, Goose, Pi and more; live monitoring (npx ccusage)."
tagline_quote: "npx ccusage"
features:
  - "daily / session / project / model cost + usage breakdowns"
  - "live monitor; 5-hour-window (blocks) view"
  - "parses local agent logs (local-first): Claude Code plus Codex, OpenCode, Amp, Droid, Codebuff, Hermes, pi-agent, Goose via per-source subcommands"
choose_when: "You want fast, local cost/usage insight from your agents' own logs — Claude Code first (esp. subscription plans), with per-source views for Codex/OpenCode/Amp/Goose and more."
avoid_when: "You want one unified cross-tool dashboard with waste-finding/optimization (CodeBurn) or token reduction (token-savior)."
cross_links: []
hands_on: docs-only
last_verified: "2026-08-20"
---
# ccusage — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Cost telemetry → 16.1 spend telemetry (multi-agent local logs, Claude-first) |
| Repo | https://github.com/ccusage/ccusage (**moved from `ryoppippi/ccusage`**; old URL redirects — re-verified 2026-08-20) |
| Maker | **ryoppippi** (author; repo now under the dedicated `ccusage` org) |
| License | **MIT** / GitHub-detected NOASSERTION |
| ⭐ / created | 18,054 · 2025-05 · Rust |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"npx ccusage" — the popular, zero-config usage + cost analyzer for local agent logs. Born as the Claude Code analyzer and still Claude-first, it now reads many agents' local logs through per-source subcommands (`ccusage claude|codex|opencode|amp|droid|codebuff|hermes|pi|goose daily`), reporting tokens + cost by day/session/project/model with live monitoring.

## 2. Quotes (verbatim — attributed)
- Repo desc (2026-08-20): *"npx ccusage"*

## 3. Features
- Daily / session / project / model **cost + usage** breakdowns.
- **Live monitor**; 5-hour-window ("blocks") view (Claude Code billing windows).
- **Multi-source local-log parsing** (2026): Claude Code, Codex, OpenCode, Amp, Droid, Codebuff, Hermes Agent, pi-agent, Goose — one focused subcommand per source; local-first; `npx`/`bunx`.

## 4. What it is NOT / limitations
- Per-source log analyzers, Claude-first — not a single unified cross-tool dashboard with waste-finding/optimization (that's CodeBurn's shape).
- Telemetry, not reduction (token-savior) or a gateway (§12).

## 5. Roadmap
- **Was:** 2025-05 as `ryoppippi/ccusage`, the Claude Code cost analyzer.
- **Now (2026-08):** ⭐18k; repo transferred to the **`ccusage` org**; expanded from Claude-only to **multi-agent local-log analysis** (9+ sources incl. Codex, OpenCode, Amp, Goose, Pi).
- **Ahead:** more sources; more views.

## 6. Positioning
- **ccusage** — fast, local, per-source cost/usage insight from agents' own logs; strongest for Claude Code (esp. subscription plans).
- vs CodeBurn (one cross-tool dashboard + optimization advice), token-savior (reduces spend).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** `npx ccusage`; review daily/session cost; run the live monitor; try a non-Claude source (`ccusage codex daily`).

## 8. Sources
- https://github.com/ccusage/ccusage (README; `ryoppippi/ccusage` redirects)

_Last updated: 2026-08-20 · Researcher: Claude_
