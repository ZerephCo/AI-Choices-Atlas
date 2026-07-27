<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 8. Action governance & policy

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *should this agent be allowed to do this — right now, before it runs?*

**Golden rule:** Governance decides before execution (deny/allow/escalate) — but Microsoft's own toolkit warns individually-allowed actions can compose into a dangerous sequence, so per-action gating is not safety. Combine with sandboxes (§10), CI gates (§15), and human approval. Watch licenses (Cordum is BSL-1.1, non-OSI).

## Sub-types
- **8.1 Enterprise governance toolkits** — broad policy/identity/sandbox/audit surfaces
- **8.2 Action firewalls / authorization kernels** — intercept + decide on each tool call (pre-exec)
- **8.3 Runtime control planes** — central deny/steer/warn/log/allow at scale

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [Microsoft Agent Governance Toolkit](#microsoft-agent-governance-toolkit) | 8.1 enterprise governance toolkit | MIT | 4,867 | Emerging (preview) | 🟢 Active | ✅ | docs-only | Policy enforcement, zero-trust identity, execution sandboxing, and reliability engineering for autonomous AI agents. Covers 10/10 OWASP Agentic Top 10. |
| [Cordum](#cordum) | 8.2 action firewall | BSL-1.1 / NOASSERTION | 491 | Emerging | 🟢 Active | ✅ | docs-only | The action firewall for AI agents. Enforce policy and human approval before risky tool calls, shell commands, workflows, and production changes, with auditable evidence. |
| [Veto](#veto) | 8.2 authorization kernel | Apache-2.0 | 14 | Preview | 🟢 Active | ✅ | docs-only | The authorization kernel for AI agents. Block, allow, or escalate agent tool calls with YAML rules — deterministic-first, LLM fallback. |
| [OpenLeash](#openleash) | 8.2 authorization sidecar | Apache-2.0 | 14 | Preview | 🟢 Active | ✅ | docs-only | An open-source authorization layer where owners set policies, agents ask before acting, and counterparties can verify the agent was authorized. |
| [Agent Control](#agent-control) | 8.3 runtime control plane | Apache-2.0 | 279 | Emerging | 🟢 Active | ✅ | docs-only | Centralized agent control plane for governing runtime agent behavior at scale — a central evaluator returning deny/steer/warn/log/allow decisions. |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [Microsoft Agent Governance Toolkit](#microsoft-agent-governance-toolkit) | You want a Microsoft-backed, OWASP-mapped reference/starting point for enterprise agent governance. | You need a turnkey GA product rather than a public-preview toolkit/reference, or protection against individually-allowed actions composing into a dangerous sequence. |
| [Cordum](#cordum) | You want a pre-execution action firewall with human approval and auditable evidence in front of an agent's shell/tool calls. | BSL-1.1 (source-available, non-OSI) licensing is a blocker, or you need a mature, proven control plane. |
| [Veto](#veto) | You want a simple, deterministic-first authorization kernel (YAML + LLM fallback) to embed in an agent. | You need a full control plane or firewall, or a proven tool — this is a very early kernel (⭐14, Preview). |
| [OpenLeash](#openleash) | You need verifiable, signed authorization proofs so third parties can check an agent was allowed to act. | You need a proven, battle-tested layer — it is very early (⭐14, Preview) and still needs a bypass/outage trial. |
| [Agent Control](#agent-control) | You want a centralized policy service (deny/steer/warn/log/allow) governing many agents at runtime. | You need proven hardening — its network/auth defaults still need hostile testing and it is emerging (⭐279). |

## Tools

<a id="microsoft-agent-governance-toolkit"></a>
### Microsoft Agent Governance Toolkit

**🟢 Active** — Policy enforcement, zero-trust identity, execution sandboxing, and reliability engineering for autonomous AI agents. Covers 10/10 OWASP Agentic Top 10.

| | |
|---|---|
| Repo | https://github.com/microsoft/agent-governance-toolkit |
| Maker | Microsoft |
| Sub-type | 8.1 enterprise governance toolkit |
| License | MIT |
| Maturity | Emerging (preview) · ⭐4,867 · created 2026-03 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Policy enforcement, zero-trust identity, execution sandboxing, and reliability engineering for autonomous AI agents."*

**Features**
- Policy enforcement on agent actions
- Zero-trust identity for agents
- Execution sandboxing (cross-links §10)
- Reliability engineering; audit/conformance surfaces
- Mapped to the OWASP Agentic Top 10 (10/10)

**Choose it when** — You want a Microsoft-backed, OWASP-mapped reference/starting point for enterprise agent governance.

**Avoid when** — You need a turnkey GA product rather than a public-preview toolkit/reference, or protection against individually-allowed actions composing into a dangerous sequence.

**Related sections:** [§15](15-security-ci.md) · [§10](10-sandboxes.md)

📄 **Deep research:** [`research/action-governance/microsoft-agent-governance-toolkit.md`](../research/action-governance/microsoft-agent-governance-toolkit.md)

---

<a id="cordum"></a>
### Cordum

**🟢 Active** — The action firewall for AI agents. Enforce policy and human approval before risky tool calls, shell commands, workflows, and production changes, with auditable evidence.

| | |
|---|---|
| Repo | https://github.com/cordum-io/cordum |
| Maker | Cordum |
| Sub-type | 8.2 action firewall |
| License | BSL-1.1 / NOASSERTION |
| Maturity | Emerging · ⭐491 · created 2026-01 · Go |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"The action firewall for AI agents."*

**Features**
- Pre-execution policy enforcement + human approval on risky actions
- Covers tool calls, shell commands, workflows, production changes
- Auditable evidence; central Go control plane

**Choose it when** — You want a pre-execution action firewall with human approval and auditable evidence in front of an agent's shell/tool calls.

**Avoid when** — BSL-1.1 (source-available, non-OSI) licensing is a blocker, or you need a mature, proven control plane.

📄 **Deep research:** [`research/action-governance/cordum.md`](../research/action-governance/cordum.md)

---

<a id="veto"></a>
### Veto

**🟢 Active** — The authorization kernel for AI agents. Block, allow, or escalate agent tool calls with YAML rules — deterministic-first, LLM fallback.

| | |
|---|---|
| Repo | https://github.com/PlawIO/veto |
| Maker | PlawIO |
| Sub-type | 8.2 authorization kernel |
| License | Apache-2.0 |
| Maturity | Preview · ⭐14 · created 2026-01 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"The authorization kernel for AI agents."*

**Features**
- Per-tool-call decisions: block / allow / escalate
- YAML rules (deterministic-first); LLM fallback for ambiguous cases
- Lightweight, embeddable in an agent

**Choose it when** — You want a simple, deterministic-first authorization kernel (YAML + LLM fallback) to embed in an agent.

**Avoid when** — You need a full control plane or firewall, or a proven tool — this is a very early kernel (⭐14, Preview).

📄 **Deep research:** [`research/action-governance/veto.md`](../research/action-governance/veto.md)

---

<a id="openleash"></a>
### OpenLeash

**🟢 Active** — An open-source authorization layer where owners set policies, agents ask before acting, and counterparties can verify the agent was authorized.

| | |
|---|---|
| Repo | https://github.com/openleash/openleash |
| Maker | OpenLeash |
| Sub-type | 8.2 authorization sidecar |
| License | Apache-2.0 |
| Maturity | Preview · ⭐14 · created 2026-02 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"where owners set policies, agents ask before acting, and counterparties can verify the agent was authorized."*

**Features**
- Local authorization sidecar; owners set YAML policy; agents ask before acting (HITL)
- Signed action proofs (PASETO / Ed25519) so counterparties can verify authorization
- Append-only audit log; SDKs + MCP

**Choose it when** — You need verifiable, signed authorization proofs so third parties can check an agent was allowed to act.

**Avoid when** — You need a proven, battle-tested layer — it is very early (⭐14, Preview) and still needs a bypass/outage trial.

📄 **Deep research:** [`research/action-governance/openleash.md`](../research/action-governance/openleash.md)

---

<a id="agent-control"></a>
### Agent Control

**🟢 Active** — Centralized agent control plane for governing runtime agent behavior at scale — a central evaluator returning deny/steer/warn/log/allow decisions.

| | |
|---|---|
| Repo | https://github.com/agentcontrol/agent-control |
| Maker | Agent Control |
| Sub-type | 8.3 runtime control plane |
| License | Apache-2.0 |
| Maturity | Emerging · ⭐279 · created 2026-01 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Centralized agent control plane for governing runtime agent behavior at scale."*

**Features**
- Central evaluator/policy service; deny / steer / warn / log / allow decisions
- Decorators / SDK integration; decision logging
- Configurable + extensible; positioned production-ready

**Choose it when** — You want a centralized policy service (deny/steer/warn/log/allow) governing many agents at runtime.

**Avoid when** — You need proven hardening — its network/auth defaults still need hostile testing and it is emerging (⭐279).

**Related sections:** [§15](15-security-ci.md)

📄 **Deep research:** [`research/action-governance/agent-control.md`](../research/action-governance/agent-control.md)

---

_Part of [AI-Choices-Atlas](https://github.com/Khubaeb/AI-Choices-Atlas) by Khubaeb · licensed under [CC BY 4.0](../LICENSE) — reuse and adapt freely, with credit._
