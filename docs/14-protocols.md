<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 14. Protocols & adapters

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *how do agents, tools, editors, and UIs interoperate without bespoke glue?*

**Golden rule:** These compose into one stack — MCP (tools) + A2A (agents) + ACP (editors) + AG-UI (users). They're standards, not products: adopt the ones your layer needs. Watch the ACP name collision — "Agent Client Protocol" (Zed, editor↔agent) vs "Agent Communication Protocol" (IBM/BeeAI, agent↔agent, since merged into A2A).

## Sub-types
- **14.1 Agent ↔ tools/data** — an agent to tools, data, prompts (MCP)
- **14.2 Agent ↔ agent** — agents from different vendors/frameworks (A2A)
- **14.3 Agent ↔ editor/client** — any editor/IDE to any agent (ACP)
- **14.4 Agent ↔ user/frontend** — an agent backend to a UI (AG-UI)

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [MCP](#mcp) | 14.1 agent ↔ tools/data | NOASSERTION | 8,638 | Established | 🟢 Active | N/A | run | An open-source standard for connecting AI applications to external systems — the 'USB-C for AI'; agent to tools, data, and prompts. |
| [A2A](#a2a) | 14.2 agent ↔ agent | Apache-2.0 | 24,908 | Prominent | 🟢 Active | N/A | docs-only | An open protocol for agent-to-agent communication between opaque agents that don't share internals; from Google, donated to the Linux Foundation. |
| [ACP](#acp) | 14.3 agent ↔ editor/client | Apache-2.0 | 3,701 | Established | 🟢 Active | N/A | docs-only | Zed's open JSON-RPC standard to connect any editor or IDE to any agent — the 'LSP for AI agents'. |
| [AG-UI](#ag-ui) | 14.4 agent ↔ user/frontend | MIT | 14,815 | Prominent | 🟢 Active | N/A | docs-only | CopilotKit's event-streaming protocol (HTTP/WebSocket, ~16 event types) connecting an agentic backend to a user-facing frontend for real-time, stateful UI. |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [MCP](#mcp) | You want the default way to give any agent access to tools and data. | You need agent-to-agent interop (use A2A) or a UI protocol (use AG-UI). |
| [A2A](#a2a) | You need agents from different vendors or frameworks to discover and delegate to each other. | You need agent-to-tools connectivity (use MCP) or a UI protocol (use AG-UI). |
| [ACP](#acp) | You want a coding agent pluggable into any ACP editor (or vice versa). | You need agent-to-tools (MCP) or agent-to-agent (A2A) connectivity. |
| [AG-UI](#ag-ui) | You need to connect an agentic backend to a user-facing frontend with real-time streaming. | You need agent-to-tools (MCP) or agent-to-agent (A2A) connectivity. |

## Tools

<a id="mcp"></a>
### MCP

**🟢 Active** — An open-source standard for connecting AI applications to external systems — the 'USB-C for AI'; agent to tools, data, and prompts.

| | |
|---|---|
| Repo | https://github.com/modelcontextprotocol/modelcontextprotocol |
| Maker | Anthropic |
| Sub-type | 14.1 agent ↔ tools/data |
| License | NOASSERTION |
| Maturity | Established · ⭐8,638 · created 2024-09 |
| Runs local | N/A |
| Hands-on | run |

> *"Think of MCP like a USB-C port for AI applications."*

**Features**
- 3 primitives: tools (actions), resources (data), prompts (workflows)
- client-server; stdio + Streamable HTTP transports
- SDKs in many languages; thousands of community servers
- universal adoption (Claude, ChatGPT/OpenAI, Google, Microsoft, VS Code, Cursor, Zed)

**Choose it when** — You want the default way to give any agent access to tools and data.

**Avoid when** — You need agent-to-agent interop (use A2A) or a UI protocol (use AG-UI).

📄 **Deep research:** [`research/protocols/mcp.md`](../research/protocols/mcp.md)

---

<a id="a2a"></a>
### A2A

**🟢 Active** — An open protocol for agent-to-agent communication between opaque agents that don't share internals; from Google, donated to the Linux Foundation.

| | |
|---|---|
| Repo | https://github.com/a2aproject/A2A |
| Maker | Google → Linux Foundation |
| Sub-type | 14.2 agent ↔ agent |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐24,908 · created 2025-03 |
| Runs local | N/A |
| Hands-on | docs-only |

> *"An open protocol enabling communication and interoperability between opaque agentic applications."*

**Features**
- Agent Cards for capability/discovery metadata
- tasks / messages / artifacts as exchange units
- HTTP / JSON-RPC + SSE streaming transport
- opaque-agent interop (no shared memory or tools)
- Linux Foundation governance; 50+ launch partners

**Choose it when** — You need agents from different vendors or frameworks to discover and delegate to each other.

**Avoid when** — You need agent-to-tools connectivity (use MCP) or a UI protocol (use AG-UI).

📄 **Deep research:** [`research/protocols/a2a.md`](../research/protocols/a2a.md)

---

<a id="acp"></a>
### ACP

**🟢 Active** — Zed's open JSON-RPC standard to connect any editor or IDE to any agent — the 'LSP for AI agents'.

| | |
|---|---|
| Repo | https://github.com/zed-industries/agent-client-protocol |
| Maker | Zed Industries |
| Sub-type | 14.3 agent ↔ editor/client |
| License | Apache-2.0 |
| Maturity | Established · ⭐3,701 · created 2025-06 · Rust |
| Runs local | N/A |
| Hands-on | docs-only |

> *"A protocol for connecting any editor to any agent."*

**Features**
- JSON-RPC editor-to-agent decoupling
- external agent owns its runtime, auth, model, and tools
- ACP Registry (directory), co-launched with JetBrains
- multi-editor implementations (Zed, JetBrains, Neovim, Emacs)

**Choose it when** — You want a coding agent pluggable into any ACP editor (or vice versa).

**Avoid when** — You need agent-to-tools (MCP) or agent-to-agent (A2A) connectivity.

**Related sections:** [§1.2](01-coding-agents.md)

📄 **Deep research:** [`research/protocols/acp.md`](../research/protocols/acp.md)

---

<a id="ag-ui"></a>
### AG-UI

**🟢 Active** — CopilotKit's event-streaming protocol (HTTP/WebSocket, ~16 event types) connecting an agentic backend to a user-facing frontend for real-time, stateful UI.

| | |
|---|---|
| Repo | https://github.com/ag-ui-protocol/ag-ui |
| Maker | CopilotKit |
| Sub-type | 14.4 agent ↔ user/frontend |
| License | MIT |
| Maturity | Prominent · ⭐14,815 · created 2025-05 · TypeScript |
| Runs local | N/A |
| Hands-on | docs-only |

> *"open, lightweight, event-based protocol that standardizes how AI agents connect to user-facing applications."*

**Features**
- ~16 structured event types
- HTTP/WebSocket event streaming
- multi-turn, stateful, bidirectional UI
- framework support (LangGraph, CrewAI, MS Agent Framework, Google ADK, Mastra, PydanticAI, Agno, LlamaIndex, AG2)

**Choose it when** — You need to connect an agentic backend to a user-facing frontend with real-time streaming.

**Avoid when** — You need agent-to-tools (MCP) or agent-to-agent (A2A) connectivity.

📄 **Deep research:** [`research/protocols/ag-ui.md`](../research/protocols/ag-ui.md)

---

_Part of [AI-Choices-Atlas](https://github.com/ZerephCo/AI-Choices-Atlas), stewarded by Zereph · content dedicated to the public domain under [CC0 1.0](../LICENSE) — reuse freely, no credit required._
