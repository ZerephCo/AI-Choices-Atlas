---
name: Semgrep
slug: semgrep
category: security-ci
subtype: "15.1 SAST (static analysis)"
repo: https://github.com/semgrep/semgrep
site: https://semgrep.dev
maker: "Semgrep (formerly r2c)"
license_claimed: LGPL-2.1
license_detected: LGPL-2.1
stars: 15959
created: "2019-12"
language: OCaml
maturity: Prominent
status: active
local: true
one_liner: "Lightweight static analysis for many languages — write rules that look like source code to find bug variants; fast, customizable SAST as a CI hard gate."
tagline_quote: "Lightweight static analysis for many languages. Find bug variants with patterns that look like source code."
features:
  - "Pattern-based SAST across 30+ languages; rules look like source code"
  - "Huge community rule registry (OWASP, CWE); autofix; SARIF output"
  - "CLI + CI/CD + pre-commit; custom rules"
  - "Semgrep platform (managed) adds Supply Chain + Secrets"
choose_when: "You want fast, customizable SAST as a CI hard gate on agent-written code."
avoid_when: "You only need dependency or secret scanning (use OSV/Trivy or Gitleaks)."
hands_on: docs-only
last_verified: "2026-07-20"
---
# Semgrep — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Security & CI gates → 15.1 SAST (static analysis) |
| Repo / site | https://github.com/semgrep/semgrep · semgrep.dev |
| Maker | **Semgrep** (formerly r2c) |
| License | **LGPL-2.1** / LGPL-2.1 |
| ⭐ / created | 15,959 · 2019-12 · OCaml |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Lightweight static analysis for many languages. Find bug variants with patterns that look like source code." A fast, customizable SAST gate.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Lightweight static analysis for many languages. Find bug variants with patterns that look like source code."*

## 3. Features
- Pattern-based **SAST** across 30+ languages; rules *"look like source code."*
- Huge community rule registry (OWASP, CWE); autofix; SARIF output.
- CLI + CI/CD + pre-commit; custom rules; Semgrep platform (managed, incl. Supply Chain + Secrets).

## 4. Relevance to AI code
- Catches agent-introduced vulns/anti-patterns as a **CI hard gate** on generated code.

## 5. What it is NOT / limitations
- SAST-focused (pair with OSV/Trivy for deps, Gitleaks for secrets).
- LGPL-2.1 core; some features are platform-only.

## 6. Roadmap
- **Was:** 2019-12 (r2c).
- **Now (2026):** ⭐16k; big rule registry; platform (Supply Chain/Secrets).
- **Ahead:** more rules; AI-code review.

## 7. Positioning
- **Semgrep** — fast, customizable SAST as a CI gate on agent-written code.
- vs OSV/Trivy (deps), Gitleaks (secrets), OPA (policy).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** run `semgrep --config auto` on a repo; add a custom rule; gate it in CI.

## 9. Sources
- https://github.com/semgrep/semgrep (README) · semgrep.dev

_Last updated: 2026-07-20 · Researcher: Claude_
