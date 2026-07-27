---
name: "OPA (Open Policy Agent)"
slug: opa
category: security-ci
subtype: "15.4 policy engine (policy-as-code)"
repo: https://github.com/open-policy-agent/opa
site: https://openpolicyagent.org
maker: "Open Policy Agent (CNCF graduated)"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 12001
created: "2015-12"
language: Go
maturity: Prominent
status: active
local: true
one_liner: "General-purpose, CNCF-graduated policy engine: decouple policy decisions from code via Rego — authorization, admission control, CI/CD gates, and agent action governance."
tagline_quote: "Open Policy Agent (OPA) is an open source, general-purpose policy engine."
features:
  - "Rego policy language; unified policy across services"
  - "Use cases: Kubernetes admission control, API authorization, CI/CD gates, Terraform"
  - "Decision logging; REST + Go library + WASM; CNCF-graduated"
choose_when: "You want to enforce policy-as-code as a non-bypassable gate, including what agents may do."
avoid_when: "You need a scanner (Semgrep/Trivy/OSV/Gitleaks); OPA is a decision engine, not a scanner."
cross_links: ["§8"]
hands_on: docs-only
last_verified: "2026-07-20"
---
# OPA (Open Policy Agent) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`. Cross-links §8 Action governance.

| | |
|---|---|
| Category / sub-type | Security & CI gates → 15.4 policy engine (policy-as-code) |
| Repo / site | https://github.com/open-policy-agent/opa · openpolicyagent.org |
| Maker | **Open Policy Agent** (CNCF graduated) |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 12,001 · 2015-12 · Go |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Open Policy Agent (OPA) is an open source, general-purpose policy engine." Decouple policy decisions from code using the Rego language — authorization, admission control, CI/CD gates, and agent action governance.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Open Policy Agent (OPA) is an open source, general-purpose policy engine."*

## 3. Features
- **Rego** policy language; unified policy across services.
- Use cases: Kubernetes admission control, API authorization, CI/CD gates, Terraform.
- Decision logging; REST + Go library + **WASM**; CNCF-graduated.

## 4. Relevance to agents
- Increasingly used for **agent action governance** — "should this tool call be allowed?" — as a non-bypassable policy gate. Cross-links §8.

## 5. What it is NOT / limitations
- General-purpose (Rego has a learning curve); a decision engine, not a scanner.

## 6. Roadmap
- **Was:** 2015-12; CNCF graduated.
- **Now (2026):** ⭐12k; policy-as-code standard across the stack.
- **Ahead:** agent-authorization patterns; tooling.

## 7. Positioning
- **OPA** — the standard policy-as-code engine for non-bypassable gates (incl. what agents may do).
- vs Semgrep/Trivy/OSV/Gitleaks (scanners); §8 action-governance tools build on this pattern.

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** write a Rego policy; enforce it on a CI step or an agent tool-call decision.

## 9. Sources
- https://github.com/open-policy-agent/opa (README) · openpolicyagent.org

_Last updated: 2026-07-20 · Researcher: Claude_
