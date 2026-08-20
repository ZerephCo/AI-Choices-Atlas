---
name: Agent Control
slug: agent-control
category: action-governance
subtype: "8.3 runtime control plane"
repo: https://github.com/agentcontrol/agent-control
site: null
maker: Agent Control
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 295
created: "2026-01"
language: Python
maturity: Emerging
status: active
local: true
one_liner: "Centralized agent control plane for governing runtime agent behavior at scale — a central evaluator returning deny/steer/warn/log/allow decisions."
tagline_quote: "Centralized agent control plane for governing runtime agent behavior at scale."
features:
  - "Central evaluator/policy service; deny / steer / warn / log / allow decisions"
  - "Decorators / SDK integration; decision logging"
  - "Configurable + extensible; positioned production-ready"
choose_when: "You want a centralized policy service (deny/steer/warn/log/allow) governing many agents at runtime."
avoid_when: "You need proven hardening — its network/auth defaults still need hostile testing and it is emerging (⭐295)."
cross_links: ["§15"]
hands_on: docs-only
last_verified: "2026-08-20"
---
# Agent Control — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Action governance → 8.3 runtime control plane |
| Repo | https://github.com/agentcontrol/agent-control |
| Maker | **Agent Control** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 295 · 2026-01 · Python |
| Researched | 2026-08-20 · hands-on: **docs-only** · corpus-verified (Doc 28 §12.8) |

## 1. What it is
"Centralized agent control plane for governing runtime agent behavior at scale. Configurable, extensible, and production-ready." A central evaluator/policy service returning deny/steer/warn/log/allow decisions.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Centralized agent control plane for governing runtime agent behavior at scale."*

## 3. Features
- Central evaluator/policy service; **deny / steer / warn / log / allow** decisions.
- Decorators / SDK integration; decision logging.
- Configurable + extensible; positioned production-ready.

## 4. What it is NOT / limitations
- Corpus caveat: network/auth defaults need hostile testing.
- Emerging (⭐295).

## 5. Roadmap
- **Was:** created 2026-01.
- **Now (2026):** ⭐295; deny/steer/warn/log/allow control plane.
- **Ahead:** hardening; scale.

## 6. Positioning
- **Agent Control** — a centralized policy service (deny/steer/warn/log/allow) across many agents.
- vs Cordum/Veto/OpenLeash (firewalls/kernels/sidecars), Microsoft AGT (toolkit), OPA (§15, general engine).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** wire an agent's actions through Agent Control; test steer/warn/deny; review decision logs.

## 8. Sources
- https://github.com/agentcontrol/agent-control (README) · ReviewedResearch.md §12.8

_Last updated: 2026-08-20 · Researcher: Claude_
