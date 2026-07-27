---
name: OSV-Scanner
slug: osv-scanner
category: security-ci
subtype: "15.2 dependency / vulnerability scanner"
repo: https://github.com/google/osv-scanner
site: https://osv.dev
maker: Google
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 10674
created: "2022-11"
language: Go
maturity: Prominent
status: active
local: true
one_liner: "Vulnerability scanner written in Go using the open OSV.dev database — precise, open-data dependency scanning across many ecosystems, with guided remediation."
tagline_quote: "Vulnerability scanner written in Go which uses the data provided by https://osv.dev."
features:
  - "OSV.dev-backed dependency scanning (precise, unified vuln format)"
  - "Many ecosystems (npm, PyPI, Go, Maven, …); lockfile + SBOM + container scanning"
  - "Guided remediation (osv-scanner fix); low false positives; CI action"
choose_when: "You want precise, open-data dependency vulnerability scanning as a CI gate."
avoid_when: "You need SAST, secrets, or all-in-one breadth (use Semgrep, Gitleaks, or Trivy)."
hands_on: docs-only
last_verified: "2026-07-20"
---
# OSV-Scanner — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Security & CI gates → 15.2 dependency / vulnerability scanner |
| Repo / site | https://github.com/google/osv-scanner · osv.dev |
| Maker | **Google** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 10,674 · 2022-11 · Go |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Vulnerability scanner written in Go which uses the data provided by osv.dev." The reference client for the open OSV vulnerability database.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Vulnerability scanner written in Go which uses the data provided by https://osv.dev."*

## 3. Features
- **OSV.dev-backed** dependency scanning (precise, unified vuln format).
- Many ecosystems (npm, PyPI, Go, Maven, …); lockfile + SBOM + container scanning.
- **Guided remediation** (`osv-scanner fix`); low false positives; CI action.

## 4. What it is NOT / limitations
- Dependency-vuln focused (pair with Semgrep for SAST, Gitleaks for secrets, Trivy for breadth).

## 5. Roadmap
- **Was:** 2022-11 (Google).
- **Now (2026):** ⭐10k; OSV.dev client; guided fix.
- **Ahead:** more ecosystems; remediation.

## 6. Positioning
- **OSV-Scanner** — precise, open-data dependency scanning as a CI gate.
- vs Trivy (all-in-one), Semgrep (SAST), Gitleaks (secrets).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** `osv-scanner` a lockfile; try guided fix; gate it in CI.

## 8. Sources
- https://github.com/google/osv-scanner (README) · osv.dev

_Last updated: 2026-07-20 · Researcher: Claude_
