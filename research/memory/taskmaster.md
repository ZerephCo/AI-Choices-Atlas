---
name: "Taskmaster"
slug: taskmaster
category: memory
subtype: "4.1 Project / task memory"
repo: https://github.com/eyaltoledano/claude-task-master
site: null
maker: "eyaltoledano + RalphEcom (Hamster)"
license_claimed: "MIT + Commons Clause"
license_detected: NOASSERTION
stars: 28001
created: "2025-03"
language: JavaScript
maturity: Prominent
status: active
local: partial
one_liner: "AI-powered PRD-driven task manager — decomposes a requirements doc into a dependency-aware task list you drive from your editor (Cursor/Claude Code)."
features:
  - "PRD parsing → task generation (.taskmaster/docs/prd.txt); file-based tasks.json, no DB"
  - "Task/subtask CRUD + status + dependencies; tag-based workstreams"
  - "Complexity/impact analysis + reports; task expansion; research mode"
  - "Multi-model with main/research/fallback roles + fallback logic"
  - "CLI · MCP · editors (Cursor/Windsurf/VS Code/Claude Code/…); Claude Code CLI needs no key"
choose_when: "You want PRD-first planning where an AI decomposes requirements into tracked tasks inside your editor."
avoid_when: "You need a durable multi-agent graph DB with git sync (Beads), fully offline/no-LLM operation, or the right to resell/host it (Commons Clause)."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Taskmaster (Task Master) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → **project/task** (PRD-driven planning + task state) |
| Repo | https://github.com/eyaltoledano/claude-task-master |
| Maker | @eyaltoledano + @RalphEcom · hosted under **Hamster** (tryhamster.com) |
| License | **MIT + Commons Clause** / NOASSERTION (⚠️ no selling / no hosted-service) |
| ⭐ / created | 27,870 · 2025-03 |
| Authority | canonical (owns the project's task state) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
An AI-powered **task-management system for AI-driven development** that drops into Cursor, Windsurf, VS Code, Claude Code, Lovable, Roo, and others. Core idea: turn a **PRD (Product Requirements Document) into a structured, dependency-aware task list** you drive from your editor.

## 2. Core workflow
1. **PRD parsing** — input a PRD (`.taskmaster/docs/prd.txt`); it decomposes into structured tasks. ("The more detailed the PRD, the better the generated tasks.")
2. **Task expansion** — expand tasks into subtasks.
3. **Complexity analysis** — generates complexity/impact reports.
4. **Research mode** — fetches fresh info contextually bound to the project.

## 3. Features
- Task CRUD + status; subtask management + **dependencies**; tag-based workstreams (backlog/in-progress/done).
- PRD parsing → task generation; complexity/impact analysis; task expansion.
- Research with project context; loop automation command; team collaboration.
- **Multi-model** with **main / research / fallback** roles + fallback logic.
- Tool-loading optimization: core (7) / standard (15) / all (36) tools.

## 4. Architecture & storage
**File-based**: `.taskmaster/` directory with `tasks.json` as primary state; tasks organized by tags. Config in `.cursor/mcp.json`, `.env`, or editor config. **No database.**

## 5. Interfaces
- **CLI:** `task-master init`, `parse-prd`, `list`, etc.
- **MCP server:** real-time editor access.
- **Editors:** Cursor, Windsurf, VS Code, Q Developer CLI, Claude Code, Lovable, Roo; chat-pane commands.

## 6. LLM providers & keys
Anthropic, OpenAI, Gemini, Perplexity, xAI, OpenRouter, Mistral, Groq, Azure OpenAI, Ollama. **≥1 API key required** for AI features — **except via the Claude Code CLI, which needs no key**. Users set main/research/fallback models.

## 7. Roadmap
- **Was:** created 2025-03 by @eyaltoledano (+ @RalphEcom) as "claude-task-master," a PRD-driven task manager for Cursor/AI editors; hosted under Hamster.
- **Now (2026):** ⭐27.9k; broad editor + MCP integration; added **Claude Code (keyless)** support + tool-loading optimization; listed across MCP marketplaces.
- **Ahead:** no formal public roadmap (CHANGELOG-tracked); deeper editor/marketplace integration.

## 8. What it is NOT / limitations
- Not an IDE/editor; not a durable DB (file-based `tasks.json`; no persistence without init).
- Not offline-first (needs an LLM key, except via Claude Code).
- **Cannot be resold or hosted as a service** (Commons Clause).
- Editor-centric; no native web UI.

## 9. Positioning vs Beads
- **Taskmaster** — PRD-first decomposition, file-based (`tasks.json`), editor/MCP-integrated, **needs an LLM** to generate tasks; Commons Clause.
- **Beads** — Dolt-backed graph, canonical, git-sync, agent-optimized, **no LLM for core**, MIT.

## 10. Hands-on
`docs-only` (2026-07-20). **TODO:** `task-master init` + `parse-prd` smoke (needs a key or Claude Code CLI); inspect `tasks.json` schema + the 36-tool MCP set.

## 11. Sources
- https://github.com/eyaltoledano/claude-task-master (README, tutorial)
- https://github.com/eyaltoledano/claude-task-master/blob/main/docs/tutorial.md

_Last updated: 2026-07-20 · Researcher: Claude_
