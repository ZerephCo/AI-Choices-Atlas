<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 12. Model routing / gateways

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *how do agents reach many models cheaply and reliably?*

**Golden rule:** Separate unification (one API over many providers — LiteLLM/OpenRouter/Portkey) from routing (which model per request — RouteLLM/claude-code-router). They compose: e.g. claude-code-router → OpenRouter → many providers. Watch data flow: hosted gateways see your prompts (review data policies); self-hosted keeps them in your infra.

## Sub-types
- **12.1 Self-hosted AI gateways** — one OpenAI-compatible endpoint over many providers, self-hosted
- **12.2 Hosted unified APIs** — a hosted, zero-ops unified model API
- **12.3 Cost/quality routers** — route each query to a cheap or strong model by difficulty
- **12.4 Agent model routers** — route a coding agent across models per scenario

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [LiteLLM](#litellm) | 12.1 self-hosted AI gateway | MIT / NOASSERTION | 54,088 | Prominent | 🟢 Active | ✅ | docs-only | The dominant open-source AI gateway: call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging — Rust core + Python SDK. |
| [Portkey Gateway](#portkey-gateway) | 12.1 self-hosted AI gateway | MIT | 12,478 | Prominent | 🟢 Active | ✅ | docs-only | A blazing-fast OSS AI gateway with integrated guardrails: route to 1,600+ LLMs and 50+ guardrails through one OpenAI-compatible API, edge-deployable. |
| [OpenRouter](#openrouter) | 12.2 hosted unified API | Proprietary | — | commercial | 🟢 Active | ☁️ hosted | docs-only | A hosted, commercial gateway giving one OpenAI-compatible API to 400+ models across 70+ providers, with automatic provider routing and fallbacks; pay-per-use. |
| [RouteLLM](#routellm) | 12.3 cost/quality router | Apache-2.0 | 5,220 | Established | 🟢 Active | ✅ | docs-only | A framework for serving and evaluating LLM routers that routes each query to a strong or weak model by predicted difficulty — save cost without compromising quality (LMSYS). |
| [claude-code-router](#claude-code-router) | 12.4 agent model router | MIT | 35,942 | Prominent | 🟢 Active | ✅ | docs-only | A local control plane that routes a coding agent (especially Claude Code) across models per scenario — including running Claude Code on non-Anthropic models. |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [LiteLLM](#litellm) | You want to unify 100+ providers behind one self-hosted OpenAI-compatible endpoint with cost/limits/fallbacks. | You want fully-hosted no-ops (OpenRouter) or pure cost/quality routing (RouteLLM). |
| [Portkey Gateway](#portkey-gateway) | You want a guardrails-first OSS gateway (routing + 50+ guardrails in one), edge-deployable. | You want the largest OSS gateway ecosystem (LiteLLM) or hosted-only (OpenRouter). |
| [OpenRouter](#openrouter) | You want zero-ops access to every model through one key with automatic fallbacks — great for experimentation + redundancy. | You need self-hosting / data-residency (LiteLLM) or a free-first tier. |
| [RouteLLM](#routellm) | You want to cut cost by sending easy queries to cheap models + hard ones to strong models, with a principled threshold + eval. | You just need provider unification (LiteLLM/OpenRouter) — pair them instead. |
| [claude-code-router](#claude-code-router) | You want to run Claude Code (or other agents) on the model of your choice, routed by scenario (cheap/local for background, strong for hard steps). | You need a general server gateway (LiteLLM/OpenRouter) rather than an agent-focused control plane. |

## Tools

<a id="litellm"></a>
### LiteLLM

**🟢 Active** — The dominant open-source AI gateway: call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging — Rust core + Python SDK.

| | |
|---|---|
| Repo | https://github.com/BerriAI/litellm |
| Maker | BerriAI |
| Sub-type | 12.1 self-hosted AI gateway |
| License | MIT / NOASSERTION |
| Maturity | Prominent · ⭐54,088 · created 2023-07 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging."*

**Features**
- 100+ providers via one OpenAI-compatible interface (SDK and proxy server)
- Cost tracking + budgets; load balancing + fallbacks; virtual keys
- Guardrails; logging / observability
- LiteLLM Proxy/Gateway (self-host) + Python SDK; Rust core (fast)

**Choose it when** — You want to unify 100+ providers behind one self-hosted OpenAI-compatible endpoint with cost/limits/fallbacks.

**Avoid when** — You want fully-hosted no-ops (OpenRouter) or pure cost/quality routing (RouteLLM).

📄 **Deep research:** [`research/model-routing/litellm.md`](../research/model-routing/litellm.md)

---

<a id="portkey-gateway"></a>
### Portkey Gateway

**🟢 Active** — A blazing-fast OSS AI gateway with integrated guardrails: route to 1,600+ LLMs and 50+ guardrails through one OpenAI-compatible API, edge-deployable.

| | |
|---|---|
| Repo | https://github.com/Portkey-AI/gateway |
| Maker | Portkey AI |
| Sub-type | 12.1 self-hosted AI gateway |
| License | MIT |
| Maturity | Prominent · ⭐12,478 · created 2023-08 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"A blazing fast AI Gateway with integrated guardrails. Route to 1,600+ LLMs, 50+ AI Guardrails with 1 fast & friendly API."*

**Features**
- 1,600+ LLMs behind one OpenAI-compatible API
- 50+ integrated guardrails (input/output checks)
- Load balancing / fallbacks / retries; caching; observability
- Edge-deployable (fast, TypeScript); hosted Portkey platform option

**Choose it when** — You want a guardrails-first OSS gateway (routing + 50+ guardrails in one), edge-deployable.

**Avoid when** — You want the largest OSS gateway ecosystem (LiteLLM) or hosted-only (OpenRouter).

📄 **Deep research:** [`research/model-routing/portkey-gateway.md`](../research/model-routing/portkey-gateway.md)

---

<a id="openrouter"></a>
### OpenRouter

**🟢 Active** — A hosted, commercial gateway giving one OpenAI-compatible API to 400+ models across 70+ providers, with automatic provider routing and fallbacks; pay-per-use.

| | |
|---|---|
| Repo | https://openrouter.ai |
| Maker | OpenRouter |
| Sub-type | 12.2 hosted unified API |
| License | Proprietary |
| Maturity | commercial |
| Runs local | ☁️ hosted |
| Hands-on | docs-only |

> *"The Unified Interface For LLMs."*

**Features**
- 400+ models / 70+ providers behind one OpenAI-compatible API
- Automatic provider routing + fallbacks (uptime)
- Pay-per-use credits (no subscription); some free-tier models
- Distributed low-latency infra; custom data policies

**Choose it when** — You want zero-ops access to every model through one key with automatic fallbacks — great for experimentation + redundancy.

**Avoid when** — You need self-hosting / data-residency (LiteLLM) or a free-first tier.

📄 **Deep research:** [`research/model-routing/openrouter.md`](../research/model-routing/openrouter.md)

---

<a id="routellm"></a>
### RouteLLM

**🟢 Active** — A framework for serving and evaluating LLM routers that routes each query to a strong or weak model by predicted difficulty — save cost without compromising quality (LMSYS).

| | |
|---|---|
| Repo | https://github.com/lm-sys/RouteLLM |
| Maker | LMSYS |
| Sub-type | 12.3 cost/quality router |
| License | Apache-2.0 |
| Maturity | Established · ⭐5,220 · created 2024-06 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"A framework for serving and evaluating LLM routers - save LLM costs without compromising quality."*

**Features**
- Trained routers (matrix factorization, BERT, causal-LLM classifiers)
- OpenAI-compatible drop-in server (route between a strong + weak model)
- Evaluation framework (benchmarks routing quality vs cost)
- Configurable cost/quality threshold; ~85% cost cut at ~95% GPT-4 quality (MT-Bench)

**Choose it when** — You want to cut cost by sending easy queries to cheap models + hard ones to strong models, with a principled threshold + eval.

**Avoid when** — You just need provider unification (LiteLLM/OpenRouter) — pair them instead.

📄 **Deep research:** [`research/model-routing/routellm.md`](../research/model-routing/routellm.md)

---

<a id="claude-code-router"></a>
### claude-code-router

**🟢 Active** — A local control plane that routes a coding agent (especially Claude Code) across models per scenario — including running Claude Code on non-Anthropic models.

| | |
|---|---|
| Repo | https://github.com/musistudio/claude-code-router |
| Maker | musistudio |
| Sub-type | 12.4 agent model router |
| License | MIT |
| Maturity | Prominent · ⭐35,942 · created 2025-02 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"One local control plane for every AI agent: route across models, fuse new capabilities, orchestrate tools, and stay fully in control."*

**Features**
- Route Claude Code / agents across providers/models (OpenRouter, DeepSeek, Ollama, Gemini, …)
- Per-scenario routing — background / thinking / long-context / web-search each map to a chosen model
- Transformers adapt request/response formats between providers
- Local control plane; plugin capabilities

**Choose it when** — You want to run Claude Code (or other agents) on the model of your choice, routed by scenario (cheap/local for background, strong for hard steps).

**Avoid when** — You need a general server gateway (LiteLLM/OpenRouter) rather than an agent-focused control plane.

**Related sections:** [§1](01-coding-agents.md)

📄 **Deep research:** [`research/model-routing/claude-code-router.md`](../research/model-routing/claude-code-router.md)

---

_Part of [AI-Choices-Atlas](https://github.com/Khubaeb/AI-Choices-Atlas) by Khubaeb · licensed under [CC BY 4.0](../LICENSE) — reuse and adapt freely, with credit._
