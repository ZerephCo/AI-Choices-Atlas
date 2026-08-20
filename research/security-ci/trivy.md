---
name: Trivy
slug: trivy
category: security-ci
subtype: "15.2 all-in-one scanner"
repo: https://github.com/aquasecurity/trivy
site: https://trivy.dev
maker: "Aqua Security"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 37517
created: "2019-04"
language: Go
maturity: Prominent
status: active
local: true
one_liner: "All-in-one security scanner: vulnerabilities, misconfigurations, secrets, licenses, and SBOMs across containers, Kubernetes, filesystems, repos, and clouds."
tagline_quote: "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more."
features:
  - "Vulnerabilities (OS + language deps); IaC/misconfiguration; secrets; licenses"
  - "SBOM generation (SPDX/CycloneDX)"
  - "Targets: containers, Kubernetes, filesystems, repos, clouds"
  - "CI actions; broad ecosystem support"
choose_when: "You want broad security coverage in one tool (vulns + misconfig + secrets + SBOM)."
avoid_when: "You want a single precise dependency scanner (OSV) rather than a broad consolidator."
hands_on: docs-only
last_verified: "2026-08-20"
---
# Trivy — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Security & CI gates → 15.2 all-in-one scanner |
| Repo / site | https://github.com/aquasecurity/trivy · trivy.dev |
| Maker | **Aqua Security** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 37,517 · 2019-04 · Go |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more." The all-in-one security scanner.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more."*

## 3. Features
- **Vulnerabilities** (OS + language deps); **IaC/misconfiguration**; **secrets**; **licenses**; **SBOM** (SPDX/CycloneDX).
- Targets: containers, Kubernetes, filesystems, repos, clouds.
- CI actions; broad ecosystem support.

## 4. What it is NOT / limitations
- Broad by design — overlaps OSV (deps) + Gitleaks (secrets); Trivy is the consolidator.

## 5. Roadmap
- **Was:** 2019-04 (Aqua).
- **Now (2026):** ⭐38k; vulns + misconfig + secrets + SBOM across many targets.
- **Ahead:** more cloud/target coverage.

## 6. Positioning
- **Trivy** — broad coverage in one tool (vulns + misconfig + secrets + SBOM).
- vs OSV (precise deps), Semgrep (SAST), Gitleaks (secrets), OPA (policy).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** `trivy fs .` + `trivy image`; generate an SBOM; gate in CI.

## 8. Sources
- https://github.com/aquasecurity/trivy (README) · trivy.dev

_Last updated: 2026-08-20 · Researcher: Claude_
