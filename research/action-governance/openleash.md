---
name: OpenLeash
slug: openleash
category: action-governance
subtype: "8.2 authorization sidecar"
repo: https://github.com/openleash/openleash
site: null
maker: OpenLeash
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 14
created: "2026-02"
language: TypeScript
maturity: Preview
status: active
local: true
one_liner: "An open-source authorization layer where owners set policies, agents ask before acting, and counterparties can verify the agent was authorized."
tagline_quote: "where owners set policies, agents ask before acting, and counterparties can verify the agent was authorized."
features:
  - "Local authorization sidecar; owners set YAML policy; agents ask before acting (HITL)"
  - "Signed action proofs (PASETO / Ed25519) so counterparties can verify authorization"
  - "Append-only audit log; SDKs + MCP"
choose_when: "You need verifiable, signed authorization proofs so third parties can check an agent was allowed to act."
avoid_when: "You need a proven, battle-tested layer — it is very early (⭐14, Preview) and still needs a bypass/outage trial."
hands_on: docs-only
last_verified: "2026-07-20"
---
# OpenLeash — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Action governance → 8.2 authorization sidecar (verifiable proofs) |
| Repo | https://github.com/openleash/openleash |
| Maker | **OpenLeash** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 14 · 2026-02 · TypeScript |
| Researched | 2026-07-20 · hands-on: **docs-only** · corpus-verified (Doc 28 §12.8 — "leading inspected sidecar"; 664 tests passed) |

## 1. What it is
"An open-source authorization layer where owners set policies, agents ask before acting, and counterparties can verify the agent was authorized." A local sidecar with signed, verifiable action proofs.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"where owners set policies, agents ask before acting, and counterparties can verify the agent was authorized."*

## 3. Features
- Local **authorization sidecar**; owners set **YAML policy**; agents ask before acting (**HITL**).
- **Signed action proofs** (PASETO / Ed25519) → counterparties can **verify** authorization.
- Append-only audit log; SDKs + **MCP**.

## 4. What it is NOT / limitations
- Very early (⭐14) — Preview; bypass/outage trial still required (corpus).

## 5. Roadmap
- **Was:** created 2026-02.
- **Now (2026):** ⭐14; signed-proof authorization sidecar (corpus: 664 tests passed).
- **Ahead:** hardening; adoption.

## 6. Positioning
- **OpenLeash** — distinctive for **verifiable, signed authorization proofs** (third parties can check an agent was allowed).
- vs Veto (YAML kernel), Cordum (firewall), Agent Control (control plane), Microsoft AGT (toolkit).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** set an owner policy; have an agent request an action; verify the signed proof as a counterparty.

## 8. Sources
- https://github.com/openleash/openleash (README) · ReviewedResearch.md §12.8

_Last updated: 2026-07-20 · Researcher: Claude_
