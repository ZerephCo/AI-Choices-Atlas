<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 7. Agent runtimes / frameworks

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *what do you build a durable agent on? — the libraries/runtimes that give you state, control flow, multi-agent patterns, tools, and memory (distinct from §1 coding hosts, which are agents; these are what you build your own on)*

**Golden rule:** pick by control level + state model, not star count. Graph runtimes (LangGraph/ADK) give explicit, durable control (more code, more power). Crew/conversation frameworks (CrewAI/AutoGen/Agents SDK) trade control for speed-to-prototype. Type-safe/full-stack (PydanticAI/Agno) optimize production ergonomics. Watch lifecycle: AutoGen is in maintenance mode (→ Microsoft Agent Framework). These are libraries you host — review each as a dependency (license, telemetry).

## Sub-types
- **7.1 Graph / stateful workflow runtimes** — explicit graphs/state machines; durable, long-running
- **7.2 Multi-agent crew / conversation frameworks** — agents that collaborate via roles or conversation
- **7.3 Type-safe & full-stack platform frameworks** — production ergonomics: types, memory, runtime, control plane

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [LangGraph](#langgraph) | 7.1 graph / stateful workflow runtime | MIT | 37,668 | Prominent | 🟢 Active | ✅ | docs-only | Low-level orchestration framework for long-running, stateful agents modeled as a graph of nodes/edges, with durable execution + checkpointing. |
| [Google ADK](#google-adk) | 7.1 graph / stateful workflow runtime (Google) | Apache-2.0 | 20,781 | Prominent | 🟢 Active | ✅ | docs-only | Open-source, code-first Python toolkit to build, evaluate, and deploy agents; a graph-based Workflow Runtime + a Task API for agent-to-agent delegation. |
| [LlamaIndex](#llamaindex) | 7.2 Data / RAG & agent framework | MIT | 51,108 | Prominent | 🟢 Active | ✅ | docs-only | Widely-used open-source data/RAG framework for LLM apps — ingest, index, and retrieve over your data, with agent workflows on top. Connector-rich (LlamaHub); provider- and store-agnostic. MIT. |
| [AutoGen](#autogen) | 7.2 multi-agent conversation framework | MIT / CC-BY-4.0 | 59,838 | Prominent | ⚠️ Maintenance | ✅ | docs-only | Event-driven multi-agent conversation framework (Core / AgentChat / Extensions + Studio). Maintenance mode; successor is Microsoft Agent Framework. |
| [MetaGPT](#metagpt) | 7.2 Multi-agent crew / conversation frameworks | MIT | 69,513 | Prominent | 🟢 Active | ✅ | docs-only | Multi-agent framework that assigns SOP-driven software roles (PM, architect, engineer, QA) to turn a one-line brief into a small project — the 'first AI software company.' |
| [ChatDev](#chatdev) | 7.2 Multi-agent crew / conversation frameworks | Apache-2.0 | 33,822 | Prominent | 🟢 Active | ✅ | docs-only | A virtual software company of LLM agents (CEO, CTO, programmer, tester) that collaborate through a chat-driven SDLC to build small applications. Influential research framework. |
| [Langroid](#langroid) | 7.2 Multi-agent crew / conversation frameworks | MIT | 4,086 | Established | 🟢 Active | ✅ | docs-only | Lightweight Python framework for building LLM apps from cooperating agents that message each other, use tools/functions, and share vector-store memory. A principled multi-agent model. |
| [LazyLLM](#lazyllm) | 7.2 Multi-agent crew / conversation frameworks | Apache-2.0 | 3,855 | Established | 🟢 Active | ✅ | docs-only | Low-code Python framework for building multi-agent LLM applications — compose data flows from prototype to deployment with minimal boilerplate. |
| [OpenAI Agents SDK](#openai-agents-sdk) | 7.2 multi-agent crew/handoff framework | MIT | 28,034 | Prominent | 🟢 Active | ✅ | docs-only | Lightweight, provider-agnostic multi-agent framework (Agents + Handoffs + Guardrails + Sessions + Tracing); production successor to Swarm. |
| [CrewAI](#crewai) | 7.2 role/crew multi-agent framework | MIT | 55,831 | Prominent | 🟢 Active | ✅ | docs-only | Framework for orchestrating role-playing, autonomous AI agents as a crew (role/goal/backstory) that collaborate; adds Flows for event-driven control. |
| [DSPy](#dspy) | 7.3 Declarative / self-optimizing LM framework | MIT | 36,385 | Prominent | 🟢 Active | ✅ | docs-only | Stanford's framework for 'programming, not prompting' LMs — compose typed signatures + modules into pipelines, then auto-optimize prompts/weights with optimizers. Supports RAG and agent loops. |
| [Agno](#agno) | 7.3 full-stack platform framework | Apache-2.0 | 41,302 | Prominent | 🟢 Active | ✅ | docs-only | Full-stack framework + AgentOS runtime + web UI control plane to build, run, and manage agent platforms — own your agent stack. |
| [PydanticAI](#pydantic-ai) | 7.3 type-safe agent framework | MIT | 18,667 | Prominent | 🟢 Active | ✅ | docs-only | Type-safe agent framework from the Pydantic team: Pydantic-validated structured outputs, dependency injection, durable execution, and Logfire observability. |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [LangGraph](#langgraph) | Choose for complex, stateful, long-running workflows needing explicit control + durability + HITL. | Avoid for quick role-based prototypes (CrewAI) or if you want a high-level abstraction. |
| [Google ADK](#google-adk) | Choose for code-first, evaluable, deployable agents, especially on Google Cloud/Gemini/Vertex, with explicit graph workflows. | Avoid if you want a non-Google-leaning framework or the biggest community (LangGraph/CrewAI). |
| [LlamaIndex](#llamaindex) | You're building a retrieval/RAG-heavy app or a data agent and want a mature, connector-rich framework. | You want a lightweight agent-orchestration runtime (LangGraph/CrewAI) without the data/RAG surface. |
| [AutoGen](#autogen) | Choose only if already invested or for AutoGen Studio/research; new projects should start on Microsoft Agent Framework. | Avoid for greenfield long-term — succeeded by Microsoft Agent Framework (MAF). |
| [MetaGPT](#metagpt) | You want to prototype SOP/role-based multi-agent software generation, or study the canonical 'AI software company' pattern. | You need explicit, durable control flow (use a graph runtime, §7.1) or production type-safety (§7.3). |
| [ChatDev](#chatdev) | You want to explore/extend chat-driven multi-agent software collaboration, or study the research pattern. | You need reliable production control flow or type-safety — it's a research-leaning framework, not a durable runtime. |
| [Langroid](#langroid) | You want a clean, message-passing multi-agent programming model without a heavy framework. | You need explicit durable graphs/state machines (§7.1) or a full type-safe platform (§7.3). |
| [LazyLLM](#lazyllm) | You want a low-code, data-flow way to assemble and deploy multi-agent LLM apps quickly. | You want explicit durable graphs/state (§7.1) or strict type-safety (§7.3). |
| [OpenAI Agents SDK](#openai-agents-sdk) | Choose for a minimal, provider-agnostic multi-agent framework with clean handoffs + built-in tracing. | Avoid if you need durable graphs (LangGraph) or a full platform (Agno). |
| [CrewAI](#crewai) | Choose for fast, intuitive multi-agent setups where a team of roles fits. | Avoid if you need low-level durable state machines (LangGraph) or type-safety (PydanticAI). |
| [DSPy](#dspy) | You want to systematically build and optimize LM pipelines/agents instead of hand-tuning prompts. | You want a graph/state runtime (LangGraph, §7.1) or a role-based multi-agent crew framework (§7.2). |
| [Agno](#agno) | Choose for a full-stack, self-owned agent platform (runtime + API + control plane + memory) ready for production. | Avoid if you want a minimal library (OpenAI Agents SDK) or graph-first control (LangGraph). |
| [PydanticAI](#pydantic-ai) | Choose for production-grade, type-safe agents where validated outputs + DI + observability matter (Pydantic/FastAPI shops). | Avoid if you want role-crew simplicity (CrewAI) or a graph-first model (LangGraph). |

## Tools

<a id="langgraph"></a>
### LangGraph

**🟢 Active** — Low-level orchestration framework for long-running, stateful agents modeled as a graph of nodes/edges, with durable execution + checkpointing.

| | |
|---|---|
| Repo | https://github.com/langchain-ai/langgraph |
| Maker | LangChain |
| Sub-type | 7.1 graph / stateful workflow runtime |
| License | MIT |
| Maturity | Prominent · ⭐37,668 · created 2023-08 · Python (+JS) |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Low-level orchestration framework for building, managing, and deploying long-running, stateful agents."*

**Features**
- Graph architecture (nodes/edges) — explicit, inspectable control flow
- Durable execution + checkpointing (resume from the exact point after a failure)
- Human-in-the-loop (inspect/modify state mid-run)
- Short-term working + long-term persistent memory
- Observability via LangSmith; standalone or LangChain-integrated
- Production users: Klarna, Replit, Elastic

**Choose it when** — Choose for complex, stateful, long-running workflows needing explicit control + durability + HITL.

**Avoid when** — Avoid for quick role-based prototypes (CrewAI) or if you want a high-level abstraction.

📄 **Deep research:** [`research/agent-runtimes/langgraph.md`](../research/agent-runtimes/langgraph.md)

---

<a id="google-adk"></a>
### Google ADK

**🟢 Active** — Open-source, code-first Python toolkit to build, evaluate, and deploy agents; a graph-based Workflow Runtime + a Task API for agent-to-agent delegation.

| | |
|---|---|
| Repo | https://github.com/google/adk-python |
| Maker | Google |
| Sub-type | 7.1 graph / stateful workflow runtime (Google) |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐20,781 · created 2025-04 · Python (+Java) |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"An open-source, code-first Python framework for building, evaluating, and deploying sophisticated AI agents."*

**Features**
- Workflow Runtime — graph engine: routing, fan-out/fan-in, loops, retry, state, HITL
- Task API — structured agent-to-agent (A2A) delegation
- Two core classes: Agent (instructions/tools) + Workflow (graph orchestration)
- Rich tool ecosystem; built-in evaluation
- Deploy to Vertex AI / Agent Engine; model-agnostic (Gemini-optimized)

**Choose it when** — Choose for code-first, evaluable, deployable agents, especially on Google Cloud/Gemini/Vertex, with explicit graph workflows.

**Avoid when** — Avoid if you want a non-Google-leaning framework or the biggest community (LangGraph/CrewAI).

📄 **Deep research:** [`research/agent-runtimes/google-adk.md`](../research/agent-runtimes/google-adk.md)

---

<a id="llamaindex"></a>
### LlamaIndex

**🟢 Active** — Widely-used open-source data/RAG framework for LLM apps — ingest, index, and retrieve over your data, with agent workflows on top. Connector-rich (LlamaHub); provider- and store-agnostic. MIT.

| | |
|---|---|
| Repo | https://github.com/run-llama/llama_index |
| Maker | LlamaIndex (run-llama) |
| Sub-type | 7.2 Data / RAG & agent framework |
| License | MIT |
| Maturity | Prominent · ⭐51,108 · created 2022-11 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"LlamaIndex is the leading document agent and OCR platform."*

**Features**
- Ingest + index your data (docs, DBs, APIs); retrieval/RAG pipelines
- Agent workflows (function-calling, ReAct, multi-agent) over your data
- Hundreds of connectors (LlamaHub); provider- and vector-store-agnostic
- OSS core is MIT/free; optional commercial LlamaCloud for hosted parsing

**Choose it when** — You're building a retrieval/RAG-heavy app or a data agent and want a mature, connector-rich framework.

**Avoid when** — You want a lightweight agent-orchestration runtime (LangGraph/CrewAI) without the data/RAG surface.

**Related sections:** [§7](07-agent-runtimes.md) · [§4](04-memory.md) · [§6](06-context-reducers.md)

📄 **Deep research:** [`research/agent-runtimes/llamaindex.md`](../research/agent-runtimes/llamaindex.md)

---

<a id="autogen"></a>
### AutoGen

**⚠️ Maintenance** — Event-driven multi-agent conversation framework (Core / AgentChat / Extensions + Studio). Maintenance mode; successor is Microsoft Agent Framework.

| | |
|---|---|
| Repo | https://github.com/microsoft/autogen |
| Maker | Microsoft |
| Sub-type | 7.2 multi-agent conversation framework |
| License | MIT / CC-BY-4.0 |
| Maturity | Prominent · ⭐59,838 · created 2023-08 · Python (+.NET) |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"AutoGen is now in maintenance mode. It will not receive new features."*

**Features**
- Core API — message passing, event-driven agents, local/distributed runtime
- AgentChat API — high-level, opinionated API for rapid prototyping
- Extensions API — LLM clients (OpenAI, Azure), code execution
- AutoGen Studio (no-code GUI) + AutoGen Bench
- Multi-agent conversation patterns; human-in-the-loop; MCP

**Choose it when** — Choose only if already invested or for AutoGen Studio/research; new projects should start on Microsoft Agent Framework.

**Avoid when** — Avoid for greenfield long-term — succeeded by Microsoft Agent Framework (MAF).

📄 **Deep research:** [`research/agent-runtimes/autogen.md`](../research/agent-runtimes/autogen.md)

---

<a id="metagpt"></a>
### MetaGPT

**🟢 Active** — Multi-agent framework that assigns SOP-driven software roles (PM, architect, engineer, QA) to turn a one-line brief into a small project — the 'first AI software company.'

| | |
|---|---|
| Repo | https://github.com/FoundationAgents/MetaGPT |
| Maker | FoundationAgents (DeepWisdom) |
| Sub-type | 7.2 Multi-agent crew / conversation frameworks |
| License | MIT |
| Maturity | Prominent · ⭐69,513 · created 2023-06 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programming."*

**Features**
- Role-based agents follow encoded SOPs (product → design → code → test)
- Turns a one-line requirement into docs, design, and code
- One of the most-starred agent frameworks (~70k★)
- Python library you host; MIT

**Choose it when** — You want to prototype SOP/role-based multi-agent software generation, or study the canonical 'AI software company' pattern.

**Avoid when** — You need explicit, durable control flow (use a graph runtime, §7.1) or production type-safety (§7.3).

**Related sections:** [§7](07-agent-runtimes.md) · [§1](01-coding-agents.md)

📄 **Deep research:** [`research/agent-runtimes/metagpt.md`](../research/agent-runtimes/metagpt.md)

---

<a id="chatdev"></a>
### ChatDev

**🟢 Active** — A virtual software company of LLM agents (CEO, CTO, programmer, tester) that collaborate through a chat-driven SDLC to build small applications. Influential research framework.

| | |
|---|---|
| Repo | https://github.com/OpenBMB/ChatDev |
| Maker | OpenBMB (Tsinghua NLP) |
| Sub-type | 7.2 Multi-agent crew / conversation frameworks |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐33,822 · created 2023-08 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"ChatDev 2.0: Dev All through LLM-powered Multi-Agent Collaboration."*

**Features**
- Role agents (CEO/CTO/dev/reviewer/tester) collaborate via structured chat
- Chat-powered SDLC: design → code → test → docs
- Well-known research framework (~34k★)
- Python library; Apache-2.0

**Choose it when** — You want to explore/extend chat-driven multi-agent software collaboration, or study the research pattern.

**Avoid when** — You need reliable production control flow or type-safety — it's a research-leaning framework, not a durable runtime.

**Related sections:** [§7](07-agent-runtimes.md) · [§1](01-coding-agents.md)

📄 **Deep research:** [`research/agent-runtimes/chatdev.md`](../research/agent-runtimes/chatdev.md)

---

<a id="langroid"></a>
### Langroid

**🟢 Active** — Lightweight Python framework for building LLM apps from cooperating agents that message each other, use tools/functions, and share vector-store memory. A principled multi-agent model.

| | |
|---|---|
| Repo | https://github.com/langroid/langroid |
| Maker | Langroid |
| Sub-type | 7.2 Multi-agent crew / conversation frameworks |
| License | MIT |
| Maturity | Established · ⭐4,086 · created 2023-04 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Harness LLMs with Multi-Agent Programming."*

**Features**
- Agents communicate by messages; delegate sub-tasks to other agents
- Tools/function-calling + retrieval (vector-store) built in
- Provider-agnostic (many LLM backends)
- Python library; MIT

**Choose it when** — You want a clean, message-passing multi-agent programming model without a heavy framework.

**Avoid when** — You need explicit durable graphs/state machines (§7.1) or a full type-safe platform (§7.3).

**Related sections:** [§7](07-agent-runtimes.md) · [§4](04-memory.md)

📄 **Deep research:** [`research/agent-runtimes/langroid.md`](../research/agent-runtimes/langroid.md)

---

<a id="lazyllm"></a>
### LazyLLM

**🟢 Active** — Low-code Python framework for building multi-agent LLM applications — compose data flows from prototype to deployment with minimal boilerplate.

| | |
|---|---|
| Repo | https://github.com/LazyAGI/LazyLLM |
| Maker | LazyAGI (SenseTime lineage) |
| Sub-type | 7.2 Multi-agent crew / conversation frameworks |
| License | Apache-2.0 |
| Maturity | Established · ⭐3,855 · created 2024-06 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Easiest and laziest way for building multi-agent LLMs applications."*

**Features**
- Data-flow composition of multi-agent pipelines
- Prototype-to-deploy with one-line model/RAG/tool wiring
- Low-code / minimal-boilerplate philosophy
- Python library; Apache-2.0

**Choose it when** — You want a low-code, data-flow way to assemble and deploy multi-agent LLM apps quickly.

**Avoid when** — You want explicit durable graphs/state (§7.1) or strict type-safety (§7.3).

**Related sections:** [§7](07-agent-runtimes.md)

📄 **Deep research:** [`research/agent-runtimes/lazyllm.md`](../research/agent-runtimes/lazyllm.md)

---

<a id="openai-agents-sdk"></a>
### OpenAI Agents SDK

**🟢 Active** — Lightweight, provider-agnostic multi-agent framework (Agents + Handoffs + Guardrails + Sessions + Tracing); production successor to Swarm.

| | |
|---|---|
| Repo | https://github.com/openai/openai-agents-python |
| Maker | OpenAI |
| Sub-type | 7.2 multi-agent crew/handoff framework |
| License | MIT |
| Maturity | Prominent · ⭐28,034 · created 2025-03 · Python (+JS) |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Lightweight yet powerful framework for building multi-agent workflows."*

**Features**
- Agents — LLM + instructions + tools + guardrails + handoffs
- Handoffs — delegate to another agent
- Guardrails — input/output validation
- Sessions — automatic conversation-history management (memory)
- Tracing — built-in observability UI
- Function tools + MCP + hosted tools; HITL; Realtime/voice; provider-agnostic (100+ LLMs)

**Choose it when** — Choose for a minimal, provider-agnostic multi-agent framework with clean handoffs + built-in tracing.

**Avoid when** — Avoid if you need durable graphs (LangGraph) or a full platform (Agno).

📄 **Deep research:** [`research/agent-runtimes/openai-agents-sdk.md`](../research/agent-runtimes/openai-agents-sdk.md)

---

<a id="crewai"></a>
### CrewAI

**🟢 Active** — Framework for orchestrating role-playing, autonomous AI agents as a crew (role/goal/backstory) that collaborate; adds Flows for event-driven control.

| | |
|---|---|
| Repo | https://github.com/crewAIInc/crewAI |
| Maker | CrewAI, Inc. |
| Sub-type | 7.2 role/crew multi-agent framework |
| License | MIT |
| Maturity | Prominent · ⭐55,831 · created 2023-10 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Framework for orchestrating role-playing, autonomous AI agents."*

**Features**
- Crews — role/goal/backstory agents (sequential or hierarchical process)
- Flows — event-driven, fine-grained orchestration
- Any model via LiteLLM; tools; memory
- Standalone (no LangChain dependency)
- Large community; CrewAI enterprise/AMP platform

**Choose it when** — Choose for fast, intuitive multi-agent setups where a team of roles fits.

**Avoid when** — Avoid if you need low-level durable state machines (LangGraph) or type-safety (PydanticAI).

📄 **Deep research:** [`research/agent-runtimes/crewai.md`](../research/agent-runtimes/crewai.md)

---

<a id="dspy"></a>
### DSPy

**🟢 Active** — Stanford's framework for 'programming, not prompting' LMs — compose typed signatures + modules into pipelines, then auto-optimize prompts/weights with optimizers. Supports RAG and agent loops.

| | |
|---|---|
| Repo | https://github.com/stanfordnlp/dspy |
| Maker | Stanford NLP |
| Sub-type | 7.3 Declarative / self-optimizing LM framework |
| License | MIT |
| Maturity | Prominent · ⭐36,385 · created 2023-01 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Programming—not prompting—Foundation Models."*

**Features**
- Signatures (typed I/O), Modules (reusable components), Optimizers (auto-tune prompts/weights)
- Self-improving pipelines with assertions/constraints
- Build classifiers → RAG → multi-stage programs → agent loops
- Provider-agnostic; MIT; from Stanford NLP

**Choose it when** — You want to systematically build and optimize LM pipelines/agents instead of hand-tuning prompts.

**Avoid when** — You want a graph/state runtime (LangGraph, §7.1) or a role-based multi-agent crew framework (§7.2).

**Related sections:** [§7](07-agent-runtimes.md) · [§11](11-qa-eval.md)

📄 **Deep research:** [`research/agent-runtimes/dspy.md`](../research/agent-runtimes/dspy.md)

---

<a id="agno"></a>
### Agno

**🟢 Active** — Full-stack framework + AgentOS runtime + web UI control plane to build, run, and manage agent platforms — own your agent stack.

| | |
|---|---|
| Repo | https://github.com/agno-agi/agno |
| Maker | Agno (formerly Phidata) |
| Sub-type | 7.3 full-stack platform framework |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐41,302 · created 2022-05 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Build, run, and manage agent platforms."*

**Features**
- AgentOS runtime; Production API (50+ endpoints, SSE + WebSocket)
- Storage for sessions, memory, knowledge, traces; Context Providers
- 100+ integrations; agentic RAG; human-approval workflows
- Observability (OpenTelemetry); JWT-RBAC + multi-tenant isolation
- Interfaces: Slack, Telegram, Discord, AG-UI; multi-cloud deploy

**Choose it when** — Choose for a full-stack, self-owned agent platform (runtime + API + control plane + memory) ready for production.

**Avoid when** — Avoid if you want a minimal library (OpenAI Agents SDK) or graph-first control (LangGraph).

📄 **Deep research:** [`research/agent-runtimes/agno.md`](../research/agent-runtimes/agno.md)

---

<a id="pydantic-ai"></a>
### PydanticAI

**🟢 Active** — Type-safe agent framework from the Pydantic team: Pydantic-validated structured outputs, dependency injection, durable execution, and Logfire observability.

| | |
|---|---|
| Repo | https://github.com/pydantic/pydantic-ai |
| Maker | Pydantic |
| Sub-type | 7.3 type-safe agent framework |
| License | MIT |
| Maturity | Prominent · ⭐18,667 · created 2024-06 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"AI Agent Framework, the Pydantic way."*

**Features**
- Type-safe design; Pydantic-validated structured outputs
- Dependency injection (typed deps for tools/prompts)
- Model-agnostic providers; tools + MCP
- pydantic-graph (graph support); durable execution (Temporal/DBOS/Prefect)
- First-class Pydantic Logfire observability

**Choose it when** — Choose for production-grade, type-safe agents where validated outputs + DI + observability matter (Pydantic/FastAPI shops).

**Avoid when** — Avoid if you want role-crew simplicity (CrewAI) or a graph-first model (LangGraph).

📄 **Deep research:** [`research/agent-runtimes/pydantic-ai.md`](../research/agent-runtimes/pydantic-ai.md)

---

_Part of [AI-Choices-Atlas](https://github.com/Khubaeb/AI-Choices-Atlas) by Khubaeb · licensed under [CC BY 4.0](../LICENSE) — reuse and adapt freely, with credit._
