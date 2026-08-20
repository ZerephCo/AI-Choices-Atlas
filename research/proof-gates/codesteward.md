---
name: CodeSteward
slug: codesteward
category: proof-gates
subtype: "9.3 PR-gate agentic code review"
repo: https://github.com/Codesteward/codesteward
site: null
maker: CodeSteward
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 36
created: "2026-07"
language: TypeScript
maturity: Preview
status: active
local: true
one_liner: "Self-hosted agentic code review with structural graph intelligence — a PR gate + branch stewardship that gates agent-generated (and human) PRs."
tagline_quote: "Agentic code review with structural graph intelligence — PR gate + branch stewardship. Self-hosted."
features:
  - "Agentic PR review with structural code-graph / taint evidence"
  - "PR gate + branch stewardship"
  - "Self-hosted"
choose_when: "You want graph-aware agentic PR review as a gate / evidence provider."
avoid_when: "Emerging (⭐36); an evidence provider more than a broad governance suite."
cross_links: ["§2"]
hands_on: docs-only
last_verified: "2026-08-20"
---
# CodeSteward — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Proof-of-done → 9.3 PR-gate agentic code review |
| Repo | https://github.com/Codesteward/codesteward |
| Maker | **CodeSteward** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 36 · 2026-07 · TypeScript |
| Researched | 2026-08-20 · hands-on: **docs-only** · corpus-verified (Doc 28 §12.8) |

## 1. What it is
"Agentic code review with structural graph intelligence — PR gate + branch stewardship. Self-hosted." A graph-aware PR reviewer that gates agent-generated (and human) PRs.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Agentic code review with structural graph intelligence — PR gate + branch stewardship. Self-hosted."*

## 3. Features
- **Agentic PR review** with **structural code-graph / taint** evidence.
- **PR gate** + branch stewardship.
- Self-hosted.

## 4. What it is NOT / limitations
- Emerging (⭐36).
- Corpus: supports code-graph/taint **evidence** more than broad governance → best as an evidence provider.

## 5. Roadmap
- **Was:** 2026-07.
- **Now (2026):** ⭐36; graph-aware agentic PR gate.
- **Ahead:** hardening; adoption.

## 6. Positioning
- **CodeSteward** — graph-aware agentic PR review as a gate / evidence provider.
- vs Runcap/dxkit (deterministic gates), ProofRail (schema), Bernstein/MartinLoop (§2, run evidence).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** self-host; gate a PR through CodeSteward; inspect the code-graph/taint evidence.

## 8. Sources
- https://github.com/Codesteward/codesteward (README) · ReviewedResearch.md §12.8

_Last updated: 2026-08-20 · Researcher: Claude_
