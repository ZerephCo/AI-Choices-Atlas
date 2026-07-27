---
name: OpenCode
slug: opencode
category: coding-agents
subtype: "1.1 CLI coding agents"
repo: https://github.com/sst/opencode
site: https://opencode.ai
maker: SST
license_claimed: MIT
license_detected: MIT
stars: 187683
created: "2025-04"
language: TypeScript
maturity: Prominent
status: active
local: partial
one_liner: "A fully open-source (MIT), provider-agnostic coding agent built for the terminal, with a client/server design and 75+ providers via models.dev."
tagline_quote: "AI coding agent, built for the terminal."
features:
  - "Client/server: background server + multiple frontends"
  - "Multi-client: TUI, desktop, web, VS Code extension"
  - "Provider-agnostic via Vercel AI SDK + models.dev (75+ providers)"
  - "Built-in LSP client (diagnostics, type info, symbols)"
  - "First-class MCP (stdio + HTTP/SSE, OAuth)"
  - "build / plan agents; themeable TUI; cross-platform"
choose_when: "You want an MIT, provider-agnostic, client/server terminal agent with built-in LSP and MCP and no vendor lock-in."
avoid_when: "You prefer a single-binary monolith or a GUI-only tool."
hands_on: docs-only
last_verified: "2026-07-20"
---
# OpenCode — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → CLI coding agent (client/server, terminal-first) |
| Repo / site | https://github.com/sst/opencode · opencode.ai |
| Maker | **SST** (Dax Raad et al.) |
| License | **MIT** / MIT (open source) |
| ⭐ / created | 187,683 · 2025-04-30 · TypeScript · very active (exceptionally high star count) |
| Model | **provider-agnostic** — Vercel AI SDK + models.dev → **75+ providers** (Anthropic, OpenAI, Google, GitHub Copilot, local, …) |
| Interfaces | terminal **TUI** · Electron desktop app · web client · VS Code extension (all drive one backend) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"AI coding agent, built for the terminal." A fully open-source (MIT), **provider-agnostic** coding agent with a **client/server** design — a background server handles model comms + session state (SQLite), and multiple frontends (TUI, desktop, web, VS Code) connect to it.

## 2. Quotes (verbatim, from docs — attributed)
- Repo description: *"The open source coding agent."*
- Tagline (repo/site): *"AI coding agent, built for the terminal."*
- Plan agent: *"Denies file edits by default; asks permission before running bash commands."*

## 3. Architecture & features
- **Client/server** — background server (model comms + SQLite session state); frontends connect to it (drive remotely).
- **Multi-client** — terminal TUI, Electron desktop app, web client, VS Code extension all drive the same backend.
- **Provider-agnostic** — Vercel AI SDK + **models.dev** metadata → **75+ providers**, no hardcoded integrations.
- **Built-in LSP client** — real-time diagnostics, type info, symbol resolution.
- **First-class MCP** — stdio + HTTP/SSE transports, OAuth.
- **build / plan** agents (Tab-switch): build = full access; plan = read-only (denies edits, asks before bash). "general" subagent for multi-step tasks.
- Themeable TUI; cross-platform (macOS/Windows/Linux).

## 4. Differentiation
- vs **Claude Code**: fully open source, provider-agnostic, terminal-focused (Claude Code is proprietary + Claude-only).

## 5. Lineage (for accuracy)
- The `opencode` name has a fork history: the original work (Kujtim Hoxha) and **SST**'s stewardship converged on **sst/opencode** as canonical; the original author's line continued separately (charmbracelet/crush). This card covers **sst/opencode**.

## 6. What it is NOT / limitations
- Not model-locked (provider-agnostic).
- Not a single-binary monolith (client/server adds a moving part).
- Not GUI-only (terminal-first; desktop/web exist, desktop app beta).
- Coding host ≠ merge authority.

## 7. Roadmap
- **Was:** started 2025-04; stewarded by SST; grew explosively.
- **Now (2026):** ⭐187k (one of the most-starred coding agents); MIT; client/server; 75+ providers via models.dev; LSP; MCP; multi-client.
- **Ahead:** multi-client ecosystem (web/desktop/VS Code); provider-agnostic model routing.

## 8. Positioning
- **OpenCode** — MIT, provider-agnostic, client/server terminal agent with built-in LSP + MCP; strongest "no vendor lock-in" story.
- vs Claude Code (proprietary, Claude-only), Codex CLI (GPT), Gemini CLI (Google), Aider (git-native), Goose (MCP-first, desktop+CLI).

## 9. Hands-on
`docs-only` (2026-07-20). **TODO:** install TUI; point at a non-Anthropic provider via models.dev; try plan vs build agents; connect an MCP server.

## 10. Sources
- https://github.com/sst/opencode (README) · opencode.ai · deepwiki.com/sst/opencode · pulsemcp.com (MCP client)

_Last updated: 2026-07-20 · Researcher: Claude_
