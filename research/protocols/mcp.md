---
name: MCP
slug: mcp
category: protocols
subtype: "14.1 agent ↔ tools/data"
repo: https://github.com/modelcontextprotocol/modelcontextprotocol
site: https://modelcontextprotocol.io
maker: Anthropic
license_claimed: NOASSERTION
license_detected: NOASSERTION
stars: 8638
created: "2024-09"
language: null
maturity: Established
status: active
local: null   # N/A - a specification; implementations decide
one_liner: "An open-source standard for connecting AI applications to external systems — the 'USB-C for AI'; agent to tools, data, and prompts."
tagline_quote: "Think of MCP like a USB-C port for AI applications."
features:
  - "3 primitives: tools (actions), resources (data), prompts (workflows)"
  - "client-server; stdio + Streamable HTTP transports"
  - "SDKs in many languages; thousands of community servers"
  - "universal adoption (Claude, ChatGPT/OpenAI, Google, Microsoft, VS Code, Cursor, Zed)"
choose_when: "You want the default way to give any agent access to tools and data."
avoid_when: "You need agent-to-agent interop (use A2A) or a UI protocol (use AG-UI)."
hands_on: run
last_verified: "2026-07-20"
---
# MCP (Model Context Protocol) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Protocols → 14.1 agent ↔ tools / data / prompts |
| Repo / site | https://github.com/modelcontextprotocol/modelcontextprotocol · modelcontextprotocol.io |
| Maker | **Anthropic** (open standard) |
| License | GitHub-detected **NOASSERTION** (MIT code + spec docs) |
| ⭐ / created | spec repo 8,638 · 2024-09 (announced Nov 2024) · spec version **2025-11-25** |
| Adopters | universal (Claude, ChatGPT/OpenAI, Google, Microsoft, VS Code, Cursor, Zed) |
| Researched | 2026-07-20 · hands-on: **run** (this atlas used MCP tools incl. Beads MCP) |

## 1. What it is
"MCP (Model Context Protocol) is an open-source standard for connecting AI applications to external systems." The "USB-C for AI" — agent ↔ tools, data, and prompts.

## 2. Quotes (verbatim, from docs — attributed)
- Definition: *"MCP (Model Context Protocol) is an open-source standard for connecting AI applications to external systems."*
- Analogy: *"Think of MCP like a USB-C port for AI applications."*
- Build-once: *"making it easy to build once and integrate everywhere."*

## 3. Architecture & primitives
- **Client-server**: a host app runs MCP **clients** that connect to MCP **servers**.
- Three primitives: **tools** (actions), **resources** (data), **prompts** (workflows).
- Transports: **stdio** + **Streamable HTTP**; SDKs in many languages.

## 4. Adoption
- Universal: Claude, ChatGPT/OpenAI, Google, Microsoft, VS Code, Cursor, Zed, and thousands of community servers.

## 5. What it is NOT / limitations
- Not agent↔agent (that's A2A); not a UI protocol (AG-UI); not a runtime — a connectivity standard.

## 6. Roadmap
- **Was:** announced by Anthropic (Nov 2024).
- **Now (2026):** the de-facto tool-connectivity standard; spec 2025-11-25; adopted by OpenAI/Google/Microsoft.
- **Ahead:** registry, MCP apps, auth/elicitation.

## 7. Positioning
- **MCP** — the tools/data quadrant of the interop stack: MCP (tools) · A2A (agents) · ACP (editors) · AG-UI (users).

## 8. Hands-on
`run` (2026-07-20) — this atlas was built in Claude Code using MCP tools (including the Beads MCP).

## 9. Sources
- https://modelcontextprotocol.io/introduction · https://github.com/modelcontextprotocol/modelcontextprotocol

_Last updated: 2026-07-20 · Researcher: Claude_
