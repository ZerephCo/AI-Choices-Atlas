---
name: ccusage
slug: ccusage
category: cost-telemetry
subtype: "16.1 spend telemetry"
repo: https://github.com/ryoppippi/ccusage
site: null
maker: ryoppippi
license_claimed: MIT
license_detected: NOASSERTION
stars: 17326
created: "2025-05"
language: Rust
maturity: Prominent
status: active
local: true
one_liner: "The popular, zero-config Claude Code usage + cost analyzer (parses local logs); live monitoring (npx ccusage)."
tagline_quote: "npx ccusage"
features:
  - "daily / session / project / model cost + usage breakdowns"
  - "live monitor; 5-hour-window (blocks) view"
  - "parses local Claude Code logs (local-first); npx"
choose_when: "You want fast, local Claude Code cost/usage insight (esp. on subscription plans)."
avoid_when: "You need cross-tool tracking (CodeBurn) or token reduction (token-savior)."
cross_links: []
hands_on: docs-only
last_verified: "2026-07-20"
---
# ccusage — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Cost telemetry → 16.1 spend telemetry (Claude Code) |
| Repo | https://github.com/ryoppippi/ccusage |
| Maker | **ryoppippi** |
| License | **MIT** / GitHub-detected NOASSERTION |
| ⭐ / created | 17,326 · 2025-05 · Rust |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"npx ccusage" — the popular, zero-config Claude Code usage analyzer. Parses your local Claude Code JSONL logs to report token usage + cost by day/session/project/model, including live monitoring.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"npx ccusage."*

## 3. Features
- Daily / session / project / model **cost + usage** breakdowns.
- **Live monitor**; 5-hour-window ("blocks") view.
- Parses **local logs** (local-first); `npx`.

## 4. What it is NOT / limitations
- Claude-Code-focused (CodeBurn is cross-tool).
- Telemetry, not reduction (token-savior) or a gateway (§12).

## 5. Roadmap
- **Was:** 2025-05.
- **Now (2026):** ⭐17k; local Claude Code cost/usage analyzer.
- **Ahead:** more views; integrations.

## 6. Positioning
- **ccusage** — fast, local Claude Code cost/usage insight (esp. on subscription plans).
- vs CodeBurn (cross-tool), token-savior (reduces spend).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** `npx ccusage`; review daily/session cost; run the live monitor.

## 8. Sources
- https://github.com/ryoppippi/ccusage (README)

_Last updated: 2026-07-20 · Researcher: Claude_
