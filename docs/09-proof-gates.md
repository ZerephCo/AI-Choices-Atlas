<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 9. Proof-of-done / readiness gates

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *is the agent's work actually done — provably — and did it earn the right to merge?*

**Golden rule:** Prefer deterministic gates (dxkit's no-model gate, Runcap's CI replay) over LLM-judge gates for the merge decision — an LLM asked "is this done?" can be convinced; a CI replay on a clean base cannot. Gate on net-new regressions, not pre-existing debt (dxkit), or agents can never touch legacy code.

## Sub-types
- **9.1 Merge-eligibility / readiness gates** — require evidence (CI replay, no regressions) before merge
- **9.2 Evidence / conformance frameworks** — schema to prove agent-control properties
- **9.3 PR-gate agentic code review** — graph-aware review as a merge gate

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [dxkit](#dxkit) | 9.1 deterministic stop-gate | MIT | 10 | Preview | 🟢 Active | ✅ | docs-only | Deterministic stop-gate + code-graph context for AI coding agents: blocks only net-new findings, locally, with no model in the gate. |
| [Runcap](#runcap) | 9.1 merge-eligibility gate | MIT | 10 | Preview | 🟢 Active | ✅ | docs-only | Local-first control layer for AI coding agents: caps routed spend, constrains mission scope, and requires CI replay before an AI-generated PR earns merge eligibility. |
| [ProofRail](#proofrail) | 9.2 evidence / conformance framework | Apache-2.0 | 0 | Preview | 🟢 Active | ✅ | docs-only | Vendor-neutral conformance and evidence framework for AI agent actuation control — proving protected actions are declared, mediated, bypass-tested, stoppable, and auditable. |
| [CodeSteward](#codesteward) | 9.3 PR-gate agentic code review | Apache-2.0 | 36 | Preview | 🟢 Active | ✅ | docs-only | Self-hosted agentic code review with structural graph intelligence — a PR gate + branch stewardship that gates agent-generated (and human) PRs. |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [dxkit](#dxkit) | You want a deterministic, no-LLM readiness gate that only fails on regressions (great for brownfield). | Very early (⭐10, Preview); a gate + context tool, not a full harness. |
| [Runcap](#runcap) | You want merge-eligibility earned by evidence (CI replay), not asserted by the agent. | Very early (⭐10, Preview); corpus noted a docs/code path mismatch to verify. |
| [ProofRail](#proofrail) | You want to crosswalk or borrow an evidence schema for proving agent-control properties. | Experimental (⭐0); an evidence/reliance schema, not a policy gateway. |
| [CodeSteward](#codesteward) | You want graph-aware agentic PR review as a gate / evidence provider. | Emerging (⭐36); an evidence provider more than a broad governance suite. |

## Tools

<a id="dxkit"></a>
### dxkit

**🟢 Active** — Deterministic stop-gate + code-graph context for AI coding agents: blocks only net-new findings, locally, with no model in the gate.

| | |
|---|---|
| Repo | https://github.com/vyuh-labs/dxkit |
| Maker | vyuh-labs |
| Sub-type | 9.1 deterministic stop-gate |
| License | MIT |
| Maturity | Preview · ⭐10 · created 2026-04 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"blocks only net-new findings and gives the loop a structural map of the codebase, locally, with no model in the gate."*

**Features**
- Deterministic stop-gate — no model in the gate (not an LLM judge)
- Net-new-findings only — baseline-aware; fails on regressions, not pre-existing debt
- Code-graph structural map fed to the agent loop
- Local; brownfield focus

**Choose it when** — You want a deterministic, no-LLM readiness gate that only fails on regressions (great for brownfield).

**Avoid when** — Very early (⭐10, Preview); a gate + context tool, not a full harness.

📄 **Deep research:** [`research/proof-gates/dxkit.md`](../research/proof-gates/dxkit.md)

---

<a id="runcap"></a>
### Runcap

**🟢 Active** — Local-first control layer for AI coding agents: caps routed spend, constrains mission scope, and requires CI replay before an AI-generated PR earns merge eligibility.

| | |
|---|---|
| Repo | https://github.com/kirder24-code/ai-agent-manager |
| Maker | kirder24 |
| Sub-type | 9.1 merge-eligibility gate |
| License | MIT |
| Maturity | Preview · ⭐10 · created 2026-05 · JavaScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"require CI replay before an AI-generated PR earns merge eligibility."*

**Features**
- Spend caps (routed cost) + mission-scope constraints
- CI replay on a clean base → merge-eligibility verdict
- Local-first; human verdict semantics

**Choose it when** — You want merge-eligibility earned by evidence (CI replay), not asserted by the agent.

**Avoid when** — Very early (⭐10, Preview); corpus noted a docs/code path mismatch to verify.

**Related sections:** [§2](02-orchestrators.md) · [§16](16-cost-telemetry.md)

📄 **Deep research:** [`research/proof-gates/runcap.md`](../research/proof-gates/runcap.md)

---

<a id="proofrail"></a>
### ProofRail

**🟢 Active** — Vendor-neutral conformance and evidence framework for AI agent actuation control — proving protected actions are declared, mediated, bypass-tested, stoppable, and auditable.

| | |
|---|---|
| Repo | https://github.com/ProofRail/proofrail |
| Maker | ProofRail |
| Sub-type | 9.2 evidence / conformance framework |
| License | Apache-2.0 |
| Maturity | Preview · ⭐0 · created 2026-06 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"a vendor-neutral conformance and evidence framework for AI agent actuation control."*

**Features**
- Conformance schema for agent-control evidence (native or vendor components)
- Properties: declared · mediated · bypass-tested · stoppable · auditable · performance-measured
- Vendor-neutral crosswalk

**Choose it when** — You want to crosswalk or borrow an evidence schema for proving agent-control properties.

**Avoid when** — Experimental (⭐0); an evidence/reliance schema, not a policy gateway.

**Related sections:** [§8](08-action-governance.md)

📄 **Deep research:** [`research/proof-gates/proofrail.md`](../research/proof-gates/proofrail.md)

---

<a id="codesteward"></a>
### CodeSteward

**🟢 Active** — Self-hosted agentic code review with structural graph intelligence — a PR gate + branch stewardship that gates agent-generated (and human) PRs.

| | |
|---|---|
| Repo | https://github.com/Codesteward/codesteward |
| Maker | CodeSteward |
| Sub-type | 9.3 PR-gate agentic code review |
| License | Apache-2.0 |
| Maturity | Preview · ⭐36 · created 2026-07 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Agentic code review with structural graph intelligence — PR gate + branch stewardship. Self-hosted."*

**Features**
- Agentic PR review with structural code-graph / taint evidence
- PR gate + branch stewardship
- Self-hosted

**Choose it when** — You want graph-aware agentic PR review as a gate / evidence provider.

**Avoid when** — Emerging (⭐36); an evidence provider more than a broad governance suite.

**Related sections:** [§2](02-orchestrators.md)

📄 **Deep research:** [`research/proof-gates/codesteward.md`](../research/proof-gates/codesteward.md)

---

_Part of [AI-Choices-Atlas](https://github.com/ZerephCo/AI-Choices-Atlas), stewarded by Zereph · content dedicated to the public domain under [CC0 1.0](../LICENSE) — reuse freely, no credit required._
