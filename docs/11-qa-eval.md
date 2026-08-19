<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 11. QA · evaluation · observability

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *is the agent actually any good, and what did it do?*

**Golden rule:** Separate offline eval (does it pass on a dataset before shipping — promptfoo/DeepEval) from online observability (what happened in production — Langfuse/Phoenix). You need both. Watch licenses here: several are source-available/enterprise-split (Langfuse EE, Phoenix Elastic License) — fine to use, but not OSI-permissive. promptfoo's red-teaming cross-links §15 Security; Playwright doubles as an agent tool (browser control).

## Sub-types
- **11.1 LLM/agent evaluation** — test prompts/agents/RAGs against metrics (+ red-team)
- **11.2 Observability / tracing** — trace runs, manage prompts, track cost
- **11.3 Browser / UI test automation** — drive/test web UIs (also agent browser control)

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [DeepEval](#deepeval) | 11.1 LLM evaluation framework | Apache-2.0 | 16,967 | Prominent | 🟢 Active | ✅ | docs-only | The LLM Evaluation Framework — a Pytest-like framework to unit-test LLM outputs against 40+ research-backed metrics, locally or in CI. |
| [promptfoo](#promptfoo) | 11.1 LLM/agent evaluation + red-teaming | MIT | 23,438 | Prominent | 🟢 Active | ✅ | docs-only | Developer-first declarative eval + red-team tool: test prompts, agents, and RAGs across models with CLI + CI/CD gating; used by OpenAI and Anthropic. |
| [Helicone](#helicone) | 11.2 observability + cost (proxy) | Apache-2.0 | 5,996 | Established | 🟢 Active | 🟡 partial | docs-only | Open-source LLM observability platform — add one line (a proxy) to log, monitor, evaluate, cache, and cut cost across LLM calls. Self-host, or a free hosted tier. |
| [Arize Phoenix](#arize-phoenix) | 11.2 observability + evals | Elastic License 2.0 / NOASSERTION | 10,641 | Prominent | 🟢 Active | 🟡 partial | docs-only | AI Observability & Evaluation — OpenTelemetry-based (OpenInference) tracing of LLM/agent apps plus built-in evals; run locally or via Arize. |
| [Langfuse](#langfuse) | 11.2 observability + evals platform | MIT / NOASSERTION | 31,496 | Prominent | 🟢 Active | 🟡 partial | docs-only | Open source AI engineering platform: LLM evals, observability, metrics, prompt management, playground, datasets. Self-host or cloud. |
| [Playwright](#playwright) | 11.3 browser / UI test automation (+ agent browser control) | Apache-2.0 | 93,162 | Prominent | 🟢 Active | ✅ | docs-only | A framework for web testing and automation — cross-browser (Chromium/Firefox/WebKit) with one API; backbone of agent browser control (Playwright MCP). |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [DeepEval](#deepeval) | You want code-first, metric-rich LLM evals in a Python/Pytest workflow. | You prefer declarative YAML (promptfoo) or a tracing-first platform (Langfuse). |
| [promptfoo](#promptfoo) | You want CI-gated prompt/agent evals plus AI red-teaming with a simple declarative config. | You want a hosted observability platform (Langfuse). |
| [Helicone](#helicone) | You want quick, low-friction LLM observability + cost tracking you can self-host or use free. | You want deep offline eval frameworks (§11.1) or tracing tightly coupled to one agent framework. |
| [Arize Phoenix](#arize-phoenix) | You want OTel-native, notebook-friendly tracing + evals, strong for RAG/agent debugging. | You need OSI-permissive licensing or a fully-managed platform. |
| [Langfuse](#langfuse) | You want a full observability + prompt-management + evals platform you can self-host. | You want a pure CI eval CLI (promptfoo) or a code-metric framework (DeepEval). |
| [Playwright](#playwright) | You want browser automation — testing agent-built web apps or giving an agent a real browser via MCP. | You need an LLM eval tool (pair with promptfoo/DeepEval). |

## Tools

<a id="deepeval"></a>
### DeepEval

**🟢 Active** — The LLM Evaluation Framework — a Pytest-like framework to unit-test LLM outputs against 40+ research-backed metrics, locally or in CI.

| | |
|---|---|
| Repo | https://github.com/confident-ai/deepeval |
| Maker | Confident AI |
| Sub-type | 11.1 LLM evaluation framework |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐16,967 · created 2023-08 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"The LLM Evaluation Framework."*

**Features**
- Pytest-like test cases for LLM apps
- 40+ research-backed metrics (G-Eval, faithfulness, answer relevancy, hallucination, RAGAS, bias, toxicity)
- Datasets/benchmarks; component-level evals; DeepTeam red-teaming
- Self-host or the Confident AI platform

**Choose it when** — You want code-first, metric-rich LLM evals in a Python/Pytest workflow.

**Avoid when** — You prefer declarative YAML (promptfoo) or a tracing-first platform (Langfuse).

📄 **Deep research:** [`research/qa-eval/deepeval.md`](../research/qa-eval/deepeval.md)

---

<a id="promptfoo"></a>
### promptfoo

**🟢 Active** — Developer-first declarative eval + red-team tool: test prompts, agents, and RAGs across models with CLI + CI/CD gating; used by OpenAI and Anthropic.

| | |
|---|---|
| Repo | https://github.com/promptfoo/promptfoo |
| Maker | promptfoo |
| Sub-type | 11.1 LLM/agent evaluation + red-teaming |
| License | MIT |
| Maturity | Prominent · ⭐23,438 · created 2023-04 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Test your prompts, agents, and RAGs."*

**Features**
- Declarative YAML test configs; side-by-side model comparison (GPT/Claude/Gemini/DeepSeek)
- Assertions/metrics; CLI + CI/CD gating
- Red-teaming / pentesting / vulnerability scanning (OWASP LLM)
- Local-first (data stays local); 20+ providers

**Choose it when** — You want CI-gated prompt/agent evals plus AI red-teaming with a simple declarative config.

**Avoid when** — You want a hosted observability platform (Langfuse).

**Related sections:** [§15](15-security-ci.md)

📄 **Deep research:** [`research/qa-eval/promptfoo.md`](../research/qa-eval/promptfoo.md)

---

<a id="helicone"></a>
### Helicone

**🟢 Active** — Open-source LLM observability platform — add one line (a proxy) to log, monitor, evaluate, cache, and cut cost across LLM calls. Self-host, or a free hosted tier.

| | |
|---|---|
| Repo | https://github.com/Helicone/helicone |
| Maker | Helicone |
| Sub-type | 11.2 observability + cost (proxy) |
| License | Apache-2.0 |
| Maturity | Established · ⭐5,996 · created 2023-01 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Open source LLM observability platform."*

**Features**
- One-line proxy integration logs all LLM requests/responses
- Cost, latency, and usage dashboards; caching; rate-limiting
- Evals, prompt management, sessions/traces for agents
- Self-host (Apache-2.0) or hosted free tier

**Choose it when** — You want quick, low-friction LLM observability + cost tracking you can self-host or use free.

**Avoid when** — You want deep offline eval frameworks (§11.1) or tracing tightly coupled to one agent framework.

**Related sections:** [§11](11-qa-eval.md) · [§16](16-cost-telemetry.md)

📄 **Deep research:** [`research/qa-eval/helicone.md`](../research/qa-eval/helicone.md)

---

<a id="arize-phoenix"></a>
### Arize Phoenix

**🟢 Active** — AI Observability & Evaluation — OpenTelemetry-based (OpenInference) tracing of LLM/agent apps plus built-in evals; run locally or via Arize.

| | |
|---|---|
| Repo | https://github.com/Arize-ai/phoenix |
| Maker | Arize AI |
| Sub-type | 11.2 observability + evals |
| License | Elastic License 2.0 / NOASSERTION |
| Maturity | Prominent · ⭐10,641 · created 2022-11 · Python |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"AI Observability & Evaluation."*

**Features**
- OTel / OpenInference tracing of LLM/agent apps
- Built-in LLM evals (hallucination, relevance, etc.)
- Experiments + datasets; embeddings/retrieval analysis (great for RAG/agent debugging)
- Notebook/self-host or the Arize platform

**Choose it when** — You want OTel-native, notebook-friendly tracing + evals, strong for RAG/agent debugging.

**Avoid when** — You need OSI-permissive licensing or a fully-managed platform.

📄 **Deep research:** [`research/qa-eval/arize-phoenix.md`](../research/qa-eval/arize-phoenix.md)

---

<a id="langfuse"></a>
### Langfuse

**🟢 Active** — Open source AI engineering platform: LLM evals, observability, metrics, prompt management, playground, datasets. Self-host or cloud.

| | |
|---|---|
| Repo | https://github.com/langfuse/langfuse |
| Maker | Langfuse (YC W23) |
| Sub-type | 11.2 observability + evals platform |
| License | MIT / NOASSERTION |
| Maturity | Prominent · ⭐31,496 · created 2023-05 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Open source AI engineering platform: LLM evals, observability, metrics, prompt management, playground, datasets."*

**Features**
- Tracing/observability — OpenTelemetry + LangChain, OpenAI SDK, LiteLLM integrations
- Prompt management (versioned); evals (LLM-as-judge, human, custom)
- Metrics + cost tracking; datasets; playground
- Self-host or cloud

**Choose it when** — You want a full observability + prompt-management + evals platform you can self-host.

**Avoid when** — You want a pure CI eval CLI (promptfoo) or a code-metric framework (DeepEval).

📄 **Deep research:** [`research/qa-eval/langfuse.md`](../research/qa-eval/langfuse.md)

---

<a id="playwright"></a>
### Playwright

**🟢 Active** — A framework for web testing and automation — cross-browser (Chromium/Firefox/WebKit) with one API; backbone of agent browser control (Playwright MCP).

| | |
|---|---|
| Repo | https://github.com/microsoft/playwright |
| Maker | Microsoft |
| Sub-type | 11.3 browser / UI test automation (+ agent browser control) |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐93,162 · created 2019-11 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Playwright is a framework for Web Testing and Automation."*

**Features**
- Cross-browser (Chromium/Firefox/WebKit); one API; auto-wait
- Codegen; trace viewer; parallelization; CI-friendly; many language bindings
- Playwright MCP — lets agents drive a real browser (agent tool)

**Choose it when** — You want browser automation — testing agent-built web apps or giving an agent a real browser via MCP.

**Avoid when** — You need an LLM eval tool (pair with promptfoo/DeepEval).

📄 **Deep research:** [`research/qa-eval/playwright.md`](../research/qa-eval/playwright.md)

---

_Part of [AI-Choices-Atlas](https://github.com/ZerephCo/AI-Choices-Atlas), stewarded by Zereph · content dedicated to the public domain under [CC0 1.0](../LICENSE) — reuse freely, no credit required._
