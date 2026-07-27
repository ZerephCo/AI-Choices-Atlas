---
name: dxkit
slug: dxkit
category: proof-gates
subtype: "9.1 deterministic stop-gate"
repo: https://github.com/vyuh-labs/dxkit
site: null
maker: vyuh-labs
license_claimed: MIT
license_detected: MIT
stars: 7
created: "2026-04"
language: TypeScript
maturity: Preview
status: active
local: true
one_liner: "Deterministic stop-gate + code-graph context for AI coding agents: blocks only net-new findings, locally, with no model in the gate."
tagline_quote: "blocks only net-new findings and gives the loop a structural map of the codebase, locally, with no model in the gate."
features:
  - "Deterministic stop-gate — no model in the gate (not an LLM judge)"
  - "Net-new-findings only — baseline-aware; fails on regressions, not pre-existing debt"
  - "Code-graph structural map fed to the agent loop"
  - "Local; brownfield focus"
choose_when: "You want a deterministic, no-LLM readiness gate that only fails on regressions (great for brownfield)."
avoid_when: "Very early (⭐7, Preview); a gate + context tool, not a full harness."
hands_on: docs-only
last_verified: "2026-07-20"
---
# dxkit — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Proof-of-done → 9.1 deterministic stop-gate |
| Repo | https://github.com/vyuh-labs/dxkit |
| Maker | **vyuh-labs** |
| License | **MIT** / MIT |
| ⭐ / created | 7 · 2026-04 · TypeScript |
| Researched | 2026-07-20 · hands-on: **docs-only** · corpus-verified (Doc 28 §12.8/§19) |

## 1. What it is
"Deterministic Stop-gate and code-graph context for AI coding agents: blocks only net-new findings and gives the loop a structural map of the codebase, locally, with no model in the gate." Targets brownfield codebases.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"blocks only net-new findings and gives the loop a structural map of the codebase, locally, with no model in the gate."*

## 3. Features
- **Deterministic stop-gate** — **no model in the gate** (not an LLM judge).
- **Net-new-findings only** — baseline-aware; fails on regressions, not pre-existing debt.
- **Code-graph** structural map fed to the agent loop.
- Local; brownfield focus.

## 4. What it is NOT / limitations
- Very early (⭐7, Preview).
- A gate + context tool, not a full harness.

## 5. Roadmap
- **Was:** 2026-04.
- **Now (2026):** ⭐7; deterministic net-new stop-gate + code-graph.
- **Ahead:** hardening; adoption.

## 6. Positioning
- **dxkit** — a deterministic, no-LLM readiness gate that only fails on regressions (great for brownfield).
- vs Runcap (CI-replay merge gate), ProofRail (evidence schema), CodeSteward (agentic PR review).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** run dxkit as a stop-gate on a brownfield repo; confirm it ignores pre-existing findings.

## 8. Sources
- https://github.com/vyuh-labs/dxkit (README) · ReviewedResearch.md §12.8/§19

_Last updated: 2026-07-20 · Researcher: Claude_
