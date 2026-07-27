---
name: OpenAI Agents SDK
slug: openai-agents-sdk
category: agent-runtimes
subtype: "7.2 multi-agent crew/handoff framework"
repo: https://github.com/openai/openai-agents-python
site: https://openai.github.io/openai-agents-python
maker: OpenAI
license_claimed: MIT
license_detected: MIT
stars: 28034
created: "2025-03"
language: "Python (+JS)"
maturity: Prominent
status: active
local: true
one_liner: "Lightweight, provider-agnostic multi-agent framework (Agents + Handoffs + Guardrails + Sessions + Tracing); production successor to Swarm."
tagline_quote: "Lightweight yet powerful framework for building multi-agent workflows."
features:
  - "Agents — LLM + instructions + tools + guardrails + handoffs"
  - "Handoffs — delegate to another agent"
  - "Guardrails — input/output validation"
  - "Sessions — automatic conversation-history management (memory)"
  - "Tracing — built-in observability UI"
  - "Function tools + MCP + hosted tools; HITL; Realtime/voice; provider-agnostic (100+ LLMs)"
choose_when: "Choose for a minimal, provider-agnostic multi-agent framework with clean handoffs + built-in tracing."
avoid_when: "Avoid if you need durable graphs (LangGraph) or a full platform (Agno)."
hands_on: docs-only
last_verified: "2026-07-20"
---
# OpenAI Agents SDK — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Agent runtimes → 7.2 multi-agent crew/handoff framework |
| Repo | https://github.com/openai/openai-agents-python · openai.github.io/openai-agents-python |
| Maker | **OpenAI** |
| License | **MIT** / MIT |
| ⭐ / created | 28,034 · 2025-03 · Python (+ JS) · successor to Swarm |
| Models | OpenAI + 100+ LLMs (via LiteLLM / any-llm) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Lightweight yet powerful framework for building multi-agent workflows." OpenAI's production successor to the experimental Swarm — a few clean primitives, provider-agnostic.

## 2. Quotes (verbatim — attributed)
- Definition: *"Lightweight yet powerful framework for building multi-agent workflows."*
- Provider-agnostic: *"Supporting the OpenAI Responses and Chat Completions APIs, as well as 100+ other LLMs."*
- Guardrails: *"Configurable safety checks for input and output validation."*

## 3. Features (core primitives)
- **Agents** — LLM + instructions + tools + guardrails + handoffs.
- **Handoffs** — delegate to another agent.
- **Guardrails** — input/output validation.
- **Sessions** — automatic conversation-history management (memory).
- **Tracing** — built-in observability UI.
- Function tools + MCP + hosted tools; human-in-the-loop; **Realtime/voice** agents; provider-agnostic.

## 4. What it is NOT / limitations
- Not OpenAI-locked (100+ LLMs).
- Minimal by design (fewer batteries than Agno); not a durable graph runtime (lighter than LangGraph).

## 5. Roadmap
- **Was:** released Mar 2025 as the production successor to Swarm.
- **Now (2026):** ⭐28k; MIT; handoffs + tracing + voice.
- **Ahead:** deeper tools/voice; enterprise.

## 6. Positioning
- **OpenAI Agents SDK** — minimal, provider-agnostic multi-agent framework with clean handoffs + built-in tracing.
- vs LangGraph (durable graphs), CrewAI (role crews), Agno (full-stack platform), PydanticAI (type-safe).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** build 2 agents with a handoff + a guardrail; inspect the tracing UI; point at a non-OpenAI model via LiteLLM.

## 8. Sources
- https://github.com/openai/openai-agents-python (README) · openai.github.io/openai-agents-python

_Last updated: 2026-07-20 · Researcher: Claude_
