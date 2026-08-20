---
name: Microsoft Agent Governance Toolkit
slug: microsoft-agent-governance-toolkit
category: action-governance
subtype: "8.1 enterprise governance toolkit"
repo: https://github.com/microsoft/agent-governance-toolkit
site: null
maker: Microsoft
license_claimed: MIT
license_detected: MIT
stars: 6052
created: "2026-03"
language: Python
maturity: Established
status: preview
local: true
one_liner: "Policy enforcement, zero-trust identity, execution sandboxing, and reliability engineering for autonomous AI agents. Covers 10/10 OWASP Agentic Top 10."
tagline_quote: "Policy enforcement, zero-trust identity, execution sandboxing, and reliability engineering for autonomous AI agents."
features:
  - "Policy enforcement on agent actions"
  - "Zero-trust identity for agents"
  - "Execution sandboxing (cross-links §10)"
  - "Reliability engineering; audit/conformance surfaces"
  - "Mapped to the OWASP Agentic Top 10 (10/10)"
choose_when: "You want a Microsoft-backed, OWASP-mapped reference/starting point for enterprise agent governance."
avoid_when: "You need a turnkey GA product rather than a public-preview toolkit/reference, or protection against individually-allowed actions composing into a dangerous sequence."
cross_links: ["§15", "§10"]
hands_on: docs-only
last_verified: "2026-08-20"
---
# Microsoft Agent Governance Toolkit — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`. Cross-links §15.4 OPA, §10 Sandboxes.

| | |
|---|---|
| Category / sub-type | Action governance → 8.1 enterprise governance toolkit |
| Repo | https://github.com/microsoft/agent-governance-toolkit |
| Maker | **Microsoft** (public preview) |
| License | **MIT** / MIT |
| ⭐ / created | 6,052 · 2026-03 · Python |
| Researched | 2026-08-20 · hands-on: **docs-only** · corpus-verified (Doc 28 §12.8) |

## 1. What it is
"Policy enforcement, zero-trust identity, execution sandboxing, and reliability engineering for autonomous AI agents. Covers 10/10 OWASP Agentic Top 10." Microsoft's reference implementation of enterprise agent-governance surfaces.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Policy enforcement, zero-trust identity, execution sandboxing, and reliability engineering for autonomous AI agents."*
- Repo desc: *"Covers 10/10 OWASP Agentic Top 10."*

## 3. Features
- **Policy enforcement** on agent actions.
- **Zero-trust identity** for agents.
- **Execution sandboxing** (cross-links §10).
- Reliability engineering; audit/conformance surfaces.
- Mapped to the **OWASP Agentic Top 10**.

## 4. ⚠️ Honest caveat (from its own docs / corpus)
- Individually-allowed actions can **compose into a dangerous sequence** — a fundamental limit of per-action governance. Sequence-level reasoning is still needed.

## 5. What it is NOT / limitations
- Public preview (not GA) → P0 comparative trial, not automatic adoption.
- A toolkit/reference, not a turnkey product.

## 6. Roadmap
- **Was:** created 2026-03 (Microsoft, public preview).
- **Now (2026):** ⭐6.1k; MIT; OWASP Agentic Top 10 coverage.
- **Ahead:** GA; sequence-level governance.

## 7. Positioning
- **Microsoft AGT** — Microsoft-backed, OWASP-mapped reference for enterprise agent governance.
- vs Cordum/Veto/OpenLeash (action firewalls/kernels), Agent Control (control plane), OPA (§15, general policy engine).

## 8. Hands-on
`docs-only` (2026-08-20). **TODO:** run the toolkit against a sample agent; map policies to OWASP Agentic Top 10; test a compose-into-unsafe sequence.

## 9. Sources
- https://github.com/microsoft/agent-governance-toolkit (README) · ReviewedResearch.md §12.8

_Last updated: 2026-08-20 · Researcher: Claude_
