<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 15. Security & CI hard gates

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *what stops bad code from merging, no matter what the agent says?*

**Golden rule:** These must be hard gates the agent cannot override — wire them into required CI checks + branch protection, not into the agent's own toolbelt (where it could skip them). They catch what AI-generated code slips in: vulns (Semgrep/OSV/Trivy), secrets (Gitleaks), and disallowed actions (OPA). Overlap is fine and healthy — defense in depth.

## Sub-types
- **15.1 SAST (code scanning)** — find bug/security patterns in source
- **15.2 Dependency / vuln + SBOM** — find known CVEs + generate SBOMs
- **15.3 Secret scanning** — block committed secrets
- **15.4 Policy engines** — policy-as-code: authorize/deny (incl. agent actions)

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [Semgrep](#semgrep) | 15.1 SAST (static analysis) | LGPL-2.1 | 15,959 | Prominent | 🟢 Active | ✅ | docs-only | Lightweight static analysis for many languages — write rules that look like source code to find bug variants; fast, customizable SAST as a CI hard gate. |
| [Trivy](#trivy) | 15.2 all-in-one scanner | Apache-2.0 | 36,991 | Prominent | 🟢 Active | ✅ | docs-only | All-in-one security scanner: vulnerabilities, misconfigurations, secrets, licenses, and SBOMs across containers, Kubernetes, filesystems, repos, and clouds. |
| [OSV-Scanner](#osv-scanner) | 15.2 dependency / vulnerability scanner | Apache-2.0 | 10,674 | Prominent | 🟢 Active | ✅ | docs-only | Vulnerability scanner written in Go using the open OSV.dev database — precise, open-data dependency scanning across many ecosystems, with guided remediation. |
| [Gitleaks](#gitleaks) | 15.3 secret scanner | MIT | 28,211 | Prominent | 🟢 Active | ✅ | docs-only | The standard secret scanner — detects hardcoded secrets (API keys, tokens, passwords) in code, git history, and diffs; runs as a pre-commit hook + CI gate. |
| [OPA (Open Policy Agent)](#opa) | 15.4 policy engine (policy-as-code) | Apache-2.0 | 12,001 | Prominent | 🟢 Active | ✅ | docs-only | General-purpose, CNCF-graduated policy engine: decouple policy decisions from code via Rego — authorization, admission control, CI/CD gates, and agent action governance. |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [Semgrep](#semgrep) | You want fast, customizable SAST as a CI hard gate on agent-written code. | You only need dependency or secret scanning (use OSV/Trivy or Gitleaks). |
| [Trivy](#trivy) | You want broad security coverage in one tool (vulns + misconfig + secrets + SBOM). | You want a single precise dependency scanner (OSV) rather than a broad consolidator. |
| [OSV-Scanner](#osv-scanner) | You want precise, open-data dependency vulnerability scanning as a CI gate. | You need SAST, secrets, or all-in-one breadth (use Semgrep, Gitleaks, or Trivy). |
| [Gitleaks](#gitleaks) | You want to block committed secrets (esp. from agent-generated code) as a pre-commit/CI gate. | You need vuln or misconfiguration scanning (pair with Semgrep or Trivy). |
| [OPA (Open Policy Agent)](#opa) | You want to enforce policy-as-code as a non-bypassable gate, including what agents may do. | You need a scanner (Semgrep/Trivy/OSV/Gitleaks); OPA is a decision engine, not a scanner. |

## Tools

<a id="semgrep"></a>
### Semgrep

**🟢 Active** — Lightweight static analysis for many languages — write rules that look like source code to find bug variants; fast, customizable SAST as a CI hard gate.

| | |
|---|---|
| Repo | https://github.com/semgrep/semgrep |
| Maker | Semgrep (formerly r2c) |
| Sub-type | 15.1 SAST (static analysis) |
| License | LGPL-2.1 |
| Maturity | Prominent · ⭐15,959 · created 2019-12 · OCaml |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Lightweight static analysis for many languages. Find bug variants with patterns that look like source code."*

**Features**
- Pattern-based SAST across 30+ languages; rules look like source code
- Huge community rule registry (OWASP, CWE); autofix; SARIF output
- CLI + CI/CD + pre-commit; custom rules
- Semgrep platform (managed) adds Supply Chain + Secrets

**Choose it when** — You want fast, customizable SAST as a CI hard gate on agent-written code.

**Avoid when** — You only need dependency or secret scanning (use OSV/Trivy or Gitleaks).

📄 **Deep research:** [`research/security-ci/semgrep.md`](../research/security-ci/semgrep.md)

---

<a id="trivy"></a>
### Trivy

**🟢 Active** — All-in-one security scanner: vulnerabilities, misconfigurations, secrets, licenses, and SBOMs across containers, Kubernetes, filesystems, repos, and clouds.

| | |
|---|---|
| Repo | https://github.com/aquasecurity/trivy |
| Maker | Aqua Security |
| Sub-type | 15.2 all-in-one scanner |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐36,991 · created 2019-04 · Go |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more."*

**Features**
- Vulnerabilities (OS + language deps); IaC/misconfiguration; secrets; licenses
- SBOM generation (SPDX/CycloneDX)
- Targets: containers, Kubernetes, filesystems, repos, clouds
- CI actions; broad ecosystem support

**Choose it when** — You want broad security coverage in one tool (vulns + misconfig + secrets + SBOM).

**Avoid when** — You want a single precise dependency scanner (OSV) rather than a broad consolidator.

📄 **Deep research:** [`research/security-ci/trivy.md`](../research/security-ci/trivy.md)

---

<a id="osv-scanner"></a>
### OSV-Scanner

**🟢 Active** — Vulnerability scanner written in Go using the open OSV.dev database — precise, open-data dependency scanning across many ecosystems, with guided remediation.

| | |
|---|---|
| Repo | https://github.com/google/osv-scanner |
| Maker | Google |
| Sub-type | 15.2 dependency / vulnerability scanner |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐10,674 · created 2022-11 · Go |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Vulnerability scanner written in Go which uses the data provided by https://osv.dev."*

**Features**
- OSV.dev-backed dependency scanning (precise, unified vuln format)
- Many ecosystems (npm, PyPI, Go, Maven, …); lockfile + SBOM + container scanning
- Guided remediation (osv-scanner fix); low false positives; CI action

**Choose it when** — You want precise, open-data dependency vulnerability scanning as a CI gate.

**Avoid when** — You need SAST, secrets, or all-in-one breadth (use Semgrep, Gitleaks, or Trivy).

📄 **Deep research:** [`research/security-ci/osv-scanner.md`](../research/security-ci/osv-scanner.md)

---

<a id="gitleaks"></a>
### Gitleaks

**🟢 Active** — The standard secret scanner — detects hardcoded secrets (API keys, tokens, passwords) in code, git history, and diffs; runs as a pre-commit hook + CI gate.

| | |
|---|---|
| Repo | https://github.com/gitleaks/gitleaks |
| Maker | Gitleaks |
| Sub-type | 15.3 secret scanner |
| License | MIT |
| Maturity | Prominent · ⭐28,211 · created 2018-01 · Go |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Find secrets with Gitleaks 🔑."*

**Features**
- Scan git history, diffs, and directories for secrets (API keys, tokens, passwords)
- Regex + entropy detection rules; custom + baseline (allowlist) rules
- Pre-commit hook + CI action; SARIF output

**Choose it when** — You want to block committed secrets (esp. from agent-generated code) as a pre-commit/CI gate.

**Avoid when** — You need vuln or misconfiguration scanning (pair with Semgrep or Trivy).

📄 **Deep research:** [`research/security-ci/gitleaks.md`](../research/security-ci/gitleaks.md)

---

<a id="opa"></a>
### OPA (Open Policy Agent)

**🟢 Active** — General-purpose, CNCF-graduated policy engine: decouple policy decisions from code via Rego — authorization, admission control, CI/CD gates, and agent action governance.

| | |
|---|---|
| Repo | https://github.com/open-policy-agent/opa |
| Maker | Open Policy Agent (CNCF graduated) |
| Sub-type | 15.4 policy engine (policy-as-code) |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐12,001 · created 2015-12 · Go |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Open Policy Agent (OPA) is an open source, general-purpose policy engine."*

**Features**
- Rego policy language; unified policy across services
- Use cases: Kubernetes admission control, API authorization, CI/CD gates, Terraform
- Decision logging; REST + Go library + WASM; CNCF-graduated

**Choose it when** — You want to enforce policy-as-code as a non-bypassable gate, including what agents may do.

**Avoid when** — You need a scanner (Semgrep/Trivy/OSV/Gitleaks); OPA is a decision engine, not a scanner.

**Related sections:** [§8](08-action-governance.md)

📄 **Deep research:** [`research/security-ci/opa.md`](../research/security-ci/opa.md)

---

_Part of [AI-Choices-Atlas](https://github.com/ZerephCo/AI-Choices-Atlas), stewarded by Zereph · content dedicated to the public domain under [CC0 1.0](../LICENSE) — reuse freely, no credit required._
