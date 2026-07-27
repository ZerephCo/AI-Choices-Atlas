---
name: ACP
slug: acp
category: protocols
subtype: "14.3 agent ↔ editor/client"
repo: https://github.com/zed-industries/agent-client-protocol
site: https://agentclientprotocol.com
maker: "Zed Industries"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 3701
created: "2025-06"
language: Rust
maturity: Established
status: active
local: null   # N/A - a specification; implementations decide
one_liner: "Zed's open JSON-RPC standard to connect any editor or IDE to any agent — the 'LSP for AI agents'."
tagline_quote: "A protocol for connecting any editor to any agent."
features:
  - "JSON-RPC editor-to-agent decoupling"
  - "external agent owns its runtime, auth, model, and tools"
  - "ACP Registry (directory), co-launched with JetBrains"
  - "multi-editor implementations (Zed, JetBrains, Neovim, Emacs)"
choose_when: "You want a coding agent pluggable into any ACP editor (or vice versa)."
avoid_when: "You need agent-to-tools (MCP) or agent-to-agent (A2A) connectivity."
cross_links: ["§1.2"]
hands_on: docs-only
last_verified: "2026-07-20"
---
# ACP (Agent Client Protocol) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`. See also Zed (§1.2).

| | |
|---|---|
| Category / sub-type | Protocols → 14.3 agent ↔ editor / client |
| Repo / site | https://github.com/zed-industries/agent-client-protocol · agentclientprotocol.com |
| Maker | **Zed Industries** (+ JetBrains ACP Registry) |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 3,701 · 2025-06 · Rust |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"A protocol for connecting any editor to any agent." The "LSP for AI agents" — a JSON-RPC standard so any editor/IDE can drive any agent (Claude Code, Gemini CLI, …).

## 2. Quotes (verbatim — attributed)
- Repo desc: *"A protocol for connecting any editor to any agent."*

## 3. How it works
- JSON-RPC protocol; the editor hosts the agent thread in its UI; the external agent owns its runtime, auth, model, and tools.
- **Zed + JetBrains co-launched the ACP Registry** (Jan 2026); implemented by Zed, JetBrains, Neovim, Emacs.

## 4. ⚠️ Naming collision (important)
- "ACP" also refers to IBM/BeeAI's **Agent Communication Protocol** (a different, agent↔agent effort that **merged into A2A** under the Linux Foundation).
- **This card = Agent Client Protocol (Zed)** — the editor↔agent standard.

## 5. What it is NOT / limitations
- Not agent↔tools (MCP) or agent↔agent (A2A); the editor-integration layer.

## 6. Roadmap
- **Was:** Zed (Jun 2025).
- **Now (2026):** ⭐3.7k; ACP Registry (with JetBrains); multi-editor.
- **Ahead:** more editors/agents.

## 7. Positioning
- **ACP** — the agent↔editor quadrant: MCP (tools) · A2A (agents) · **ACP (editors)** · AG-UI (users).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** add Claude Code / Gemini CLI as an ACP External Agent in Zed; inspect the JSON-RPC thread.

## 9. Sources
- https://github.com/zed-industries/agent-client-protocol · agentclientprotocol.com · zed.dev/acp

_Last updated: 2026-07-20 · Researcher: Claude_
