---
name: AG-UI
slug: ag-ui
category: protocols
subtype: "14.4 agent ↔ user/frontend"
repo: https://github.com/ag-ui-protocol/ag-ui
site: https://docs.ag-ui.com
maker: CopilotKit
license_claimed: MIT
license_detected: MIT
stars: 14815
created: "2025-05"
language: TypeScript
maturity: Prominent
status: active
local: null   # N/A - a specification; implementations decide
one_liner: "CopilotKit's event-streaming protocol (HTTP/WebSocket, ~16 event types) connecting an agentic backend to a user-facing frontend for real-time, stateful UI."
tagline_quote: "open, lightweight, event-based protocol that standardizes how AI agents connect to user-facing applications."
features:
  - "~16 structured event types"
  - "HTTP/WebSocket event streaming"
  - "multi-turn, stateful, bidirectional UI"
  - "framework support (LangGraph, CrewAI, MS Agent Framework, Google ADK, Mastra, PydanticAI, Agno, LlamaIndex, AG2)"
choose_when: "You need to connect an agentic backend to a user-facing frontend with real-time streaming."
avoid_when: "You need agent-to-tools (MCP) or agent-to-agent (A2A) connectivity."
hands_on: docs-only
last_verified: "2026-07-20"
---
# AG-UI (Agent-User Interaction Protocol) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Protocols → 14.4 agent ↔ user / frontend |
| Repo / site | https://github.com/ag-ui-protocol/ag-ui · docs.ag-ui.com |
| Maker | **CopilotKit** (with LangGraph, CrewAI) |
| License | **MIT** / MIT |
| ⭐ / created | 14,815 · 2025-05 · TypeScript |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"AG-UI: the Agent-User Interaction Protocol. Bring Agents into Frontend Applications." An event-based protocol connecting an agentic backend to a user-facing frontend.

## 2. Quotes (verbatim, from docs — attributed)
- Definition: *"open, lightweight, event-based protocol that standardizes how AI agents connect to user-facing applications."*
- Scope: *"connects an agentic frontend to any agentic backend."*

## 3. How it works
- **Event-streaming** protocol over HTTP/WebSocket; ~16 structured event types.
- Multi-turn, stateful, bidirectional — streams agent state, UI intents, and user actions between backend agents and the app.
- Replaces request/response with real-time interactive UI.

## 4. Complement to MCP & A2A
- **MCP** = agent ↔ tools/data · **A2A** = agent ↔ agent · **AG-UI** = agent ↔ user/frontend.
- Framework support: LangGraph, CrewAI, Microsoft Agent Framework, Google ADK, AWS Strands/Bedrock AgentCore, Mastra, PydanticAI, Agno, LlamaIndex, AG2.

## 5. What it is NOT / limitations
- Not agent↔tools (MCP) or agent↔agent (A2A); the human-facing UI layer.

## 6. Roadmap
- **Was:** CopilotKit (May 2025, with LangGraph/CrewAI).
- **Now (2026):** ⭐14k; broad framework support.
- **Ahead:** more framework adapters; richer UI events.

## 7. Positioning
- **AG-UI** — the agent↔user quadrant: MCP (tools) · A2A (agents) · ACP (editors) · **AG-UI (users)**.

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** wire a LangGraph/CrewAI agent to a frontend via AG-UI; stream state + a HITL event.

## 9. Sources
- https://github.com/ag-ui-protocol/ag-ui · docs.ag-ui.com

_Last updated: 2026-07-20 · Researcher: Claude_
