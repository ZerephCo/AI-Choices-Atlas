---
name: Cline
slug: cline
category: coding-agents
subtype: "1.2 IDE / editor agents"
repo: https://github.com/cline/cline
site: https://cline.bot
maker: Cline Bot Inc.
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 64827
created: "2024-07"
language: TypeScript
maturity: Prominent
status: active
local: partial
one_liner: "An open-source, BYOK autonomous coding agent in your IDE and terminal with Plan/Act modes and human approval on every action."
tagline_quote: "The open source coding agent in your IDE and terminal."
features:
  - "Plan/Act modes; approval-gated by default"
  - "Multi-file edits with diff review + checkpoints/undo"
  - "Terminal execution with real-time output monitoring"
  - "Browser automation (computer use)"
  - "MCP + custom tools via SDK; .clinerules config"
  - "BYOK across 200+ models incl. local (Ollama, LM Studio)"
choose_when: "You want an open-source, transparent, BYOK editor agent with approval over every action, to avoid markup/lock-in and use local models."
avoid_when: "You want a hosted/managed service or a fully autonomous agent without approval gating."
hands_on: docs-only
last_verified: "2026-07-20"
---
# Cline — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → IDE / editor agent (VS Code + JetBrains extension) + SDK/CLI |
| Repo / site | https://github.com/cline/cline · cline.bot |
| Maker | **Cline Bot Inc.** |
| License | **Apache-2.0** / Apache-2.0 (open source) |
| ⭐ / created | 64,827 · 2024-07-06 (originally "Claude Dev") · TypeScript · very active |
| Model | **BYOK** — Anthropic, OpenAI, Gemini, Bedrock, Azure, Vertex, OpenRouter (200+), Groq, Cerebras + **local (Ollama, LM Studio)**; any OpenAI-compatible; plus Cline provider |
| Surfaces | VS Code · JetBrains · CLI (TUI + headless) · SDK |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"The open source coding agent in your IDE and terminal." An open-source autonomous coding agent with **Plan/Act** modes and human approval on every action — the transparent, bring-your-own-key counterpart to Cursor.

## 2. Quotes (verbatim, from docs — attributed)
- Tagline: *"The open source coding agent in your IDE and terminal."*
- Diff review: *"Every edit shows up as a diff you can review, modify, or revert."*
- Approval: *"Every file edit and terminal command requires your approval, so you stay in control."*
- BYOK: *"Cline is not locked to a single AI provider. Use whichever model fits your workflow."*

## 3. Features
- **Plan/Act modes**; approval-gated (or auto-approve) — every edit + command requires approval by default.
- Multi-file edits with **diff review** + **checkpoints/undo**.
- **Terminal execution** with real-time output monitoring; linter/compiler error monitoring.
- **Browser automation** (computer use).
- **MCP** integration + custom tool creation via SDK; `.clinerules` project config.
- **BYOK** across 200+ models incl. local (Ollama, LM Studio).
- Multi-surface: VS Code · JetBrains · CLI · SDK; headless CI/CD (JSON). Newer: multi-agent teams, scheduled agents, chat connectors.

## 4. How it differs
- Open-source (Apache-2.0) + transparent codebase; **BYOK → no vendor markup / no lock-in**; self-hostable.
- vs Cursor: Cline is the open-source, model-neutral editor agent (Cursor is proprietary + metered).

## 5. What it is NOT / limitations
- Not model-locked (BYOK).
- Not a hosted/managed service (self-host, own keys).
- Not fully autonomous by default (approval-gated).
- Coding host ≠ merge authority.

## 6. Roadmap
- **Was:** created 2024-07 (originally "Claude Dev") as an open-source VS Code autonomous agent; pioneered Plan/Act + approval gating + MCP.
- **Now (2026):** ⭐64.8k; Apache-2.0 (Cline Bot Inc.); BYOK 200+ models; multi-surface (VS Code/JetBrains/CLI/SDK); MCP; checkpoints.
- **Ahead:** SDK-driven agent platform (teams, scheduled agents); broader surfaces.

## 7. Positioning
- **Cline** — open-source, transparent, BYOK editor agent with approval over every action; great to avoid markup/lock-in and use local models.
- vs Cursor (proprietary IDE), Roo Code (a Cline fork), GitHub Copilot (Microsoft), Zed (Rust editor).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** install VS Code extension; try Plan then Act; wire an MCP server; point at a local Ollama model.

## 9. Sources
- https://github.com/cline/cline (README) · cline.bot (docs)

_Last updated: 2026-07-20 · Researcher: Claude_
