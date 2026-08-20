---
name: Runcap
slug: runcap
category: proof-gates
subtype: "9.1 merge-eligibility gate"
repo: https://github.com/kirder24-code/ai-agent-manager
site: null
maker: kirder24
license_claimed: MIT
license_detected: MIT
stars: 10
created: "2026-05"
language: JavaScript
maturity: Preview
status: active
local: true
one_liner: "Local-first control layer for AI coding agents: caps routed spend, constrains mission scope, and requires CI replay before an AI-generated PR earns merge eligibility."
tagline_quote: "require CI replay before an AI-generated PR earns merge eligibility."
features:
  - "Spend caps (routed cost) + mission-scope constraints"
  - "CI replay on a clean base → merge-eligibility verdict"
  - "Local-first; human verdict semantics"
choose_when: "You want merge-eligibility earned by evidence (CI replay), not asserted by the agent."
avoid_when: "Very early (⭐10, Preview); corpus noted a docs/code path mismatch to verify."
cross_links: ["§2", "§16"]
hands_on: docs-only
last_verified: "2026-08-20"
---
# Runcap — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`. Cross-links §2 Bernstein/MartinLoop, §16 cost.

| | |
|---|---|
| Category / sub-type | Proof-of-done → 9.1 merge-eligibility / readiness gate |
| Repo | https://github.com/kirder24-code/ai-agent-manager |
| Maker | **kirder24** |
| License | **MIT** / MIT |
| ⭐ / created | 10 · 2026-05 · JavaScript |
| Researched | 2026-08-20 · hands-on: **docs-only** · corpus-verified (Doc 28 §12.8/§19) |

## 1. What it is
"Local-first control layer for AI coding agents. Cap routed spend, constrain mission scope, and require CI replay before an AI-generated PR earns merge eligibility." Operationalizes "the agent proposes; CI/rules decide merge."

## 2. Quotes (verbatim — attributed)
- Repo desc: *"require CI replay before an AI-generated PR earns merge eligibility."*
- Repo desc: *"Cap routed spend, constrain mission scope…"*

## 3. Features
- **Spend caps** (routed cost) + **mission-scope** constraints.
- **CI replay on a clean base** → merge-eligibility verdict.
- Local-first; human verdict semantics.

## 4. What it is NOT / limitations
- Very early (⭐10, Preview).
- Corpus noted a docs/code path mismatch — verify current alignment.

## 5. Roadmap
- **Was:** 2026-05.
- **Now (2026):** ⭐10; spend + scope + CI-replay merge gate.
- **Ahead:** hardening; docs/code alignment.

## 6. Positioning
- **Runcap** — make merge-eligibility **earned by evidence** (CI replay), not asserted by the agent.
- vs dxkit (deterministic stop-gate), ProofRail (evidence schema), Bernstein/MartinLoop (§2, governed-run evidence).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** gate an AI-generated PR behind CI replay on a clean base; set a spend cap.

## 8. Sources
- https://github.com/kirder24-code/ai-agent-manager (README) · ReviewedResearch.md §12.8/§19

_Last updated: 2026-08-20 · Researcher: Claude_
