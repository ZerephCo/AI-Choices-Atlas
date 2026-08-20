---
name: Gitleaks
slug: gitleaks
category: security-ci
subtype: "15.3 secret scanner"
repo: https://github.com/gitleaks/gitleaks
site: https://gitleaks.io
maker: Gitleaks
license_claimed: MIT
license_detected: MIT
stars: 28851
created: "2018-01"
language: Go
maturity: Prominent
status: maintenance
local: true
one_liner: "The standard secret scanner — detects hardcoded secrets in code, git history, and diffs; pre-commit + CI gate. ⚠️ Now feature-complete per its maintainer: security patches only; focus shifting to Betterleaks."
tagline_quote: "Find secrets with Gitleaks 🔑."
features:
  - "Scan git history, diffs, and directories for secrets (API keys, tokens, passwords)"
  - "Regex + entropy detection rules; custom + baseline (allowlist) rules"
  - "Pre-commit hook + CI action; SARIF output"
choose_when: "You want to block committed secrets (esp. from agent-generated code) as a pre-commit/CI gate."
avoid_when: "You need vuln or misconfiguration scanning (pair with Semgrep or Trivy)."
hands_on: docs-only
last_verified: "2026-08-20"
---
# Gitleaks — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Security & CI gates → 15.3 secret scanner |
| Repo / site | https://github.com/gitleaks/gitleaks · gitleaks.io |
| Maker | **Gitleaks** |
| License | **MIT** / MIT |
| ⭐ / created | 28,851 · 2018-01 · Go |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"Find secrets with Gitleaks." The standard secret scanner — detects hardcoded secrets in code, git history, and diffs.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Find secrets with Gitleaks 🔑."*

## 3. Features
- Scan git **history**, diffs, and directories for secrets (API keys, tokens, passwords).
- **Regex + entropy** detection rules; custom + baseline (allowlist) rules.
- **Pre-commit hook** + CI action; SARIF output.

## 4. Relevance to AI code
- Blocks secrets an agent might commit — as a **pre-commit / CI hard gate**.

## 5. What it is NOT / limitations
- Secrets-only (pair with Semgrep/Trivy for vulns/misconfig).

## 6. Roadmap
- **Was:** 2018-01.
- **Now (2026-08):** ⭐29k; ⚠️ README WARNING: *"Gitleaks is feature complete."* — no new features, *"security patches only"*; maintainer focus shifting to **betterleaks/betterleaks**. Still the standard, stable secret-scan gate.
- **Ahead:** more rules; accuracy.

## 7. Positioning
- **Gitleaks** — block committed secrets (esp. from agent-generated code) as a pre-commit/CI gate.
- vs Semgrep (SAST), OSV/Trivy (deps/vulns), OPA (policy).

## 8. Hands-on
`docs-only` (2026-08-20). **TODO:** `gitleaks detect`; add the pre-commit hook; gate in CI with a baseline.

## 9. Sources
- https://github.com/gitleaks/gitleaks (README) · gitleaks.io

_Last updated: 2026-08-20 · Researcher: Claude_
