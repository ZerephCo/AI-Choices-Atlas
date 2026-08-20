---
name: Agno
slug: agno
category: agent-runtimes
subtype: "7.3 full-stack platform framework"
repo: https://github.com/agno-agi/agno
site: https://agno.com
maker: "Agno (formerly Phidata)"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 41795
created: "2022-05"
language: Python
maturity: Prominent
status: active
local: true
one_liner: "Full-stack framework + AgentOS runtime + web UI control plane to build, run, and manage agent platforms — own your agent stack."
tagline_quote: "Build, run, and manage agent platforms."
features:
  - "AgentOS runtime; Production API (50+ endpoints, SSE + WebSocket)"
  - "Storage for sessions, memory, knowledge, traces; Context Providers"
  - "100+ integrations; agentic RAG; human-approval workflows"
  - "Observability (OpenTelemetry); JWT-RBAC + multi-tenant isolation"
  - "Interfaces: Slack, Telegram, Discord, AG-UI; multi-cloud deploy"
choose_when: "Choose for a full-stack, self-owned agent platform (runtime + API + control plane + memory) ready for production."
avoid_when: "Avoid if you want a minimal library (OpenAI Agents SDK) or graph-first control (LangGraph)."
hands_on: docs-only
last_verified: "2026-08-20"
---
# Agno — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Agent runtimes → 7.3 full-stack platform framework |
| Repo / site | https://github.com/agno-agi/agno · agno.com |
| Maker | **Agno** (formerly **Phidata**) |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 41,795 · 2022-05 (as Phidata) · Python |
| Models | model-agnostic |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
A full-stack framework and runtime for agent platforms: an SDK to build agents, an **AgentOS** runtime to run them as a service, and a web UI control plane to manage the platform — with a focus on owning your stack.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Build, run, and manage agent platforms."*
- README: *"Build agents, run them as a service, manage your platform using a web UI."*
- README: *"Agno allows you to own your agent stack."*

## 3. Features
- **AgentOS** runtime; **Production API** (50+ endpoints, SSE + WebSocket).
- **Storage** for sessions, memory, knowledge, traces; **Context Providers** for live data.
- 100+ integrations; agentic RAG; human-approval workflows.
- **Observability** (OpenTelemetry); **JWT-RBAC** + multi-tenant isolation.
- Interfaces: Slack, Telegram, Discord, AG-UI; scheduling + background jobs.
- Multi-cloud deploy (Docker, Railway, AWS, GCP, Azure, Fly, Render, Modal, Helm); fast instantiation / low memory.

## 4. What it is NOT / limitations
- Heavier/full-stack (not a micro-framework).
- Formerly Phidata (renamed) — check older references.

## 5. Roadmap
- **Was:** Phidata (2022) → renamed **Agno**.
- **Now (2026):** ⭐42k; AgentOS + full platform (API, storage, RBAC, observability).
- **Ahead:** control-plane depth; more integrations.

## 6. Positioning
- **Agno** — a full-stack, self-owned agent platform (runtime + API + control plane + memory) ready for production.
- vs OpenAI Agents SDK (minimal library), LangGraph (graph control), PydanticAI (type-safe), CrewAI (role crews).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** build an agent + run AgentOS; hit the production API (SSE); open the control-plane UI.

## 8. Sources
- https://github.com/agno-agi/agno (README) · agno.com

_Last updated: 2026-08-20 · Researcher: Claude_
