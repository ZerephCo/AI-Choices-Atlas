---
name: Claude Code
slug: claude-code
category: coding-agents
subtype: "1.1 CLI coding agents"
repo: https://github.com/anthropics/claude-code
site: https://claude.com/product/claude-code
maker: Anthropic
license_claimed: Proprietary
license_detected: Proprietary
stars: 141964
created: "2025-02"
language: null
maturity: Prominent
status: active
local: false
one_liner: "A terminal-first agentic coding tool that maps and explains your codebase, edits code, runs tests, and handles Git/GitHub/GitLab workflows via natural language."
tagline_quote: "an agentic coding tool that lives in your terminal, understands your codebase"
features:
  - "Agentic codebase mapping/search (no manual context selection)"
  - "Git/GitHub/GitLab workflow: issue -> code -> tests -> PR"
  - "Subagents with isolated context windows; hooks; skills"
  - "Plugins + MCP for external tools"
  - "Multi-surface: terminal, VS Code, JetBrains, Slack, web, desktop, iOS"
  - "Headless/CI mode; Claude Agent SDK"
choose_when: "You want a powerful terminal-first agent with strong codebase understanding and rich extensibility (hooks/skills/subagents/MCP), and a proprietary Claude-only paid tool is acceptable."
avoid_when: "You need open-source, model-agnosticism, or a free/offline option."
hands_on: run
last_verified: "2026-08-19"
---
# Claude Code — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.
> **Transparency:** this atlas is authored by Claude running inside Claude Code. The card sticks to verifiable facts + Anthropic's own docs; treat the `run` hands-on note accordingly.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → CLI coding agent (multi-surface) |
| Repo / site | https://github.com/anthropics/claude-code (issues/docs/plugins) · claude.com/product/claude-code |
| Maker | **Anthropic** |
| License | **Proprietary** (repo license unset; CLI is closed-source) |
| ⭐ / created | 138,404 · 2025-02 (very active) |
| Model | Claude (Opus / Sonnet / Haiku) — Anthropic account or API key |
| Authority | coding host (does NOT own merge-eligibility) |
| Researched | 2026-07-20 · hands-on: **run** (this atlas was built in it) |

## 1. What it is
"Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows — all through natural language commands." A full coding **agent**, not an autocomplete.

## 2. Quotes (verbatim, from docs — attributed)
- Definition (repo): *"an agentic coding tool that lives in your terminal, understands your codebase…"*
- Architecture: *"memory, hooks, skills, subagents, plugins, and MCP are organized into distinct layers."*
- Subagents: *"specialized instances with their own context windows where verbose work stays isolated."*
- Hooks: *"Hooks are used to enforce a rule with code."*

## 3. Architecture — layered agentic system
"Each layer changes what the model can see or do": **memory** (CLAUDE.md/AGENTS.md) · **hooks** (deterministic rule enforcement) · **skills** (`SKILL.md` under `.claude/skills/`, `/name` + autonomous invocation) · **subagents** (isolated context windows) · **plugins** · **MCP** (external tools).

## 4. Features
- Agentic **codebase mapping/search** (no manual context file selection).
- Git/GitHub/GitLab workflow: read issue → write code → run tests → open PR, from the terminal.
- **Subagents** (own context windows) · **hooks** · **skills** · **plugins** · **MCP**.
- Multi-surface: terminal · VS Code · JetBrains · Slack · web · desktop app · iOS.
- Headless/CI mode; **Claude Agent SDK** for building on it.

## 5. License / cost
Proprietary Anthropic product; needs a subscription or API key. The public repo hosts issues, docs, and plugins — the CLI itself is closed-source (no SPDX license).

## 6. What it is NOT / limitations
- Not open-source; not free; not model-agnostic (Claude-only).
- Coding host ≠ merge authority — CI/branch rules + human review stay outside it.

## 7. Roadmap
- **Was:** launched by Anthropic (Feb 2025) as a terminal agentic coding tool.
- **Now (2026):** ⭐138k; layered extensibility; multi-surface (IDEs, Slack, web, desktop, iOS); Agent SDK.
- **Ahead:** deeper multi-surface + Agent SDK ecosystem; Anthropic-driven (no public OSS roadmap).

## 8. Positioning
- **Claude Code** — powerful proprietary terminal-first agent; strong codebase understanding + rich extensibility (hooks/skills/subagents/MCP); Claude-only, paid.
- vs Codex CLI (OpenAI), gemini-cli (Google, OSS), Aider/OpenCode (OSS CLI), Cursor/Cline (IDE).

## 9. Hands-on
`run` (2026-07-20) — this entire atlas was built using Claude Code (Opus 4.8): agentic file edit/search, MCP tools (incl. the Beads MCP), and hooks were exercised throughout. Verifiable behavior; card facts sourced from Anthropic docs.

## 10. Sources
- https://github.com/anthropics/claude-code (README) · https://claude.com/product/claude-code · docs.claude.com

_Last updated: 2026-07-20 · Researcher: Claude_
