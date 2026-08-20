---
name: token-savior
slug: token-savior
category: cost-telemetry
subtype: "16.2 token reduction (cost optimization)"
repo: https://github.com/Mibayy/token-savior
site: null
maker: Mibayy
license_claimed: MIT
license_detected: MIT
stars: 1121
created: "2026-03"
language: Python
maturity: Established
status: active
local: true
one_liner: "An MCP server that cuts token spend via structural code navigation + persistent memory (−77% active tokens, self-reported)."
tagline_quote: "-77% active tokens, -76% wall time, 0 losses across 96 tasks on Claude Opus 4.7"
features:
  - "MCP server: structural code navigation (vs re-reading files)"
  - "persistent memory; big token/time reductions (self-reported)"
  - "works with any MCP client"
choose_when: "You want to cut token cost on large codebases via structural nav + memory."
avoid_when: "You want spend tracking (CodeBurn/ccusage) rather than reduction."
cross_links: ["§6", "§4"]
hands_on: docs-only
last_verified: "2026-08-20"
---
# token-savior — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.
> Overlaps §6 Context reducers + §4 Memory — placed here for its cost-reduction framing.

| | |
|---|---|
| Category / sub-type | Cost telemetry → 16.2 token reduction (cost optimization) |
| Repo | https://github.com/Mibayy/token-savior |
| Maker | **Mibayy** |
| License | **MIT** / MIT |
| ⭐ / created | 1,121 · 2026-03 · Python |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"The MCP server that turns Claude into the only coding agent hitting 100% on a real benchmark. -77% active tokens, -76% wall time, 0 losses across 96 tasks on Claude Opus 4.7. Structural code navigation + persistent memory." An MCP server that cuts token spend.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"-77% active tokens, -76% wall time, 0 losses across 96 tasks on Claude Opus 4.7."*
- Repo desc: *"Structural code navigation + persistent memory. Works with every MCP client."*

## 3. Features
- **MCP server** for structural code navigation (vs re-reading files).
- **Persistent memory**; big token/time reductions (reported −77% tokens / −76% wall time).
- Works with any MCP client.

## 4. What it is NOT / limitations
- Reduction/optimization, not telemetry (CodeBurn/ccusage) — overlaps §6/§4.
- Benchmark claims are self-reported.

## 5. Roadmap
- **Was:** 2026-03.
- **Now (2026):** ⭐1.1k; MCP structural nav + memory for token savings.
- **Ahead:** broader adoption.

## 6. Positioning
- **token-savior** — cut token cost via structural nav + memory (an optimization, not just tracking).
- vs CodeBurn/ccusage (telemetry), §6 packers/compressors, §4 memory. Complementary.

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** add the MCP server to Claude Code on a large repo; measure token/time reduction.

## 8. Sources
- https://github.com/Mibayy/token-savior (README)

_Last updated: 2026-08-20 · Researcher: Claude_
