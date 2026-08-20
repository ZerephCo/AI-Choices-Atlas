---
name: LangGraph
slug: langgraph
category: agent-runtimes
subtype: "7.1 graph / stateful workflow runtime"
repo: https://github.com/langchain-ai/langgraph
site: https://langchain-ai.github.io/langgraph
maker: LangChain
license_claimed: MIT
license_detected: MIT
stars: 40061
created: "2023-08"
language: "Python (+JS)"
maturity: Prominent
status: active
local: true
one_liner: "Low-level orchestration framework for long-running, stateful agents modeled as a graph of nodes/edges, with durable execution + checkpointing."
tagline_quote: "Low-level orchestration framework for building, managing, and deploying long-running, stateful agents."
features:
  - "Graph architecture (nodes/edges) — explicit, inspectable control flow"
  - "Durable execution + checkpointing (resume from the exact point after a failure)"
  - "Human-in-the-loop (inspect/modify state mid-run)"
  - "Short-term working + long-term persistent memory"
  - "Observability via LangSmith; standalone or LangChain-integrated"
  - "Production users: Klarna, Replit, Elastic"
choose_when: "Choose for complex, stateful, long-running workflows needing explicit control + durability + HITL."
avoid_when: "Avoid for quick role-based prototypes (CrewAI) or if you want a high-level abstraction."
hands_on: docs-only
last_verified: "2026-08-20"
---
# LangGraph — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Agent runtimes → 7.1 graph / stateful workflow runtime |
| Repo / site | https://github.com/langchain-ai/langgraph · langchain-ai.github.io/langgraph |
| Maker | **LangChain** |
| License | **MIT** / MIT |
| ⭐ / created | 40,061 · 2023-08 · Python (+ JS) · very active |
| Models | any (LangChain-compatible) |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"Low-level orchestration framework for building, managing, and deploying long-running, stateful agents." Agents are modeled as a **graph** of nodes (steps) and edges (control flow), with durable execution.

## 2. Quotes (verbatim — attributed)
- Definition: *"Low-level orchestration framework for building, managing, and deploying long-running, stateful agents."*
- Durability: *"Build agents that persist through failures and can run for extended periods."*
- Standalone: *"LangGraph can be used standalone, it also integrates seamlessly with any LangChain product."*

## 3. Features
- **Graph** architecture (nodes/edges) — explicit, inspectable control flow.
- **Durable execution** + checkpointing (resume from the exact point after a failure).
- **Human-in-the-loop** (inspect/modify state mid-run).
- Short-term working + long-term persistent **memory**.
- **Observability** via LangSmith; standalone or LangChain-integrated.
- Production users: Klarna, Replit, Elastic.

## 4. What it is NOT / limitations
- Low-level/explicit (more code than high-level role frameworks).
- Not tied to LangChain (standalone-capable) — but pairs best with LangSmith for observability.
- LangGraph Platform (hosted) is separate.

## 5. Roadmap
- **Was:** created 2023-08 by LangChain as the stateful-graph runtime.
- **Now (2026):** ⭐40k; durable execution; production adoption; JS + Python.
- **Ahead:** deeper durability + platform.

## 6. Positioning
- **LangGraph** — the low-level, durable, stateful graph runtime for complex long-running agents.
- vs CrewAI (high-level role crews), PydanticAI (type-safe), AutoGen (conversation), ADK (Google graph runtime).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** build a StateGraph with a checkpointer; kill mid-run to test durable resume; add a human-in-the-loop interrupt.

## 8. Sources
- https://github.com/langchain-ai/langgraph (README) · langchain-ai.github.io/langgraph

_Last updated: 2026-08-20 · Researcher: Claude_
