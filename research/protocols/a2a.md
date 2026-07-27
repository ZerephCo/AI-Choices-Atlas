---
name: A2A
slug: a2a
category: protocols
subtype: "14.2 agent ↔ agent"
repo: https://github.com/a2aproject/A2A
site: https://a2a-protocol.org
maker: "Google → Linux Foundation"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 24908
created: "2025-03"
language: null
maturity: Prominent
status: active
local: null   # N/A - a specification; implementations decide
one_liner: "An open protocol for agent-to-agent communication between opaque agents that don't share internals; from Google, donated to the Linux Foundation."
tagline_quote: "An open protocol enabling communication and interoperability between opaque agentic applications."
features:
  - "Agent Cards for capability/discovery metadata"
  - "tasks / messages / artifacts as exchange units"
  - "HTTP / JSON-RPC + SSE streaming transport"
  - "opaque-agent interop (no shared memory or tools)"
  - "Linux Foundation governance; 50+ launch partners"
choose_when: "You need agents from different vendors or frameworks to discover and delegate to each other."
avoid_when: "You need agent-to-tools connectivity (use MCP) or a UI protocol (use AG-UI)."
hands_on: docs-only
last_verified: "2026-07-20"
---
# A2A (Agent2Agent) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Protocols → 14.2 agent ↔ agent |
| Repo / site | https://github.com/a2aproject/A2A · a2a-protocol.org |
| Maker | **Google** → donated to the **Linux Foundation** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 24,908 · 2025-03 · **v1.0** |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Agent2Agent (A2A) is an open protocol enabling communication and interoperability between opaque agentic applications." Agent ↔ agent — lets agents from different vendors/frameworks discover and delegate to each other.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Agent2Agent (A2A) is an open protocol enabling communication and interoperability between opaque agentic applications."*

## 3. Concepts
- **Agent Cards** — capability/discovery metadata an agent publishes.
- **Tasks / Messages / Artifacts** — the units agents exchange.
- Transport: HTTP / JSON-RPC + SSE streaming.
- **Opaque-agent interop** — agents cooperate without sharing internals, memory, or tools.

## 4. Governance
- Introduced by Google (Apr 2025) with 50+ launch partners; donated to the **Linux Foundation** (neutral stewardship).

## 5. What it is NOT / limitations
- Not agent↔tools (that's MCP); not a UI protocol (AG-UI); an interop layer, not a framework.

## 6. Roadmap
- **Was:** Google (Apr 2025) → Linux Foundation.
- **Now (2026):** ⭐24k; v1.0; broad partner support.
- **Ahead:** LF-driven; more implementations.

## 7. Positioning
- **A2A** — the agent↔agent quadrant: MCP (tools) · **A2A (agents)** · ACP (editors) · AG-UI (users).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** publish an Agent Card; exchange a task between two agents over A2A.

## 9. Sources
- https://github.com/a2aproject/A2A · a2a-protocol.org

_Last updated: 2026-07-20 · Researcher: Claude_
