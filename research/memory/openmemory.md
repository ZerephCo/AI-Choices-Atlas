---
name: "OpenMemory"
slug: openmemory
category: memory
subtype: "4.2 Personal memory"
repo: https://github.com/CaviraOSS/OpenMemory
site: null
maker: "CaviraOSS"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 4449
created: "2025-10"
language: TypeScript
maturity: Established
status: active
local: true
one_liner: "Cognitive memory engine for LLMs — local, self-hosted; hierarchical decomposition + temporal awareness; native MCP; migrates from Mem0/Zep/Supermemory."
features:
  - "Hierarchical memory decomposition (layered structures, selective access)"
  - "Temporal awareness (time as first-class; auto timeline management)"
  - "Not a vector DB (self-hosted, Python + Node)"
  - "Native MCP server (Claude Desktop, Copilot, Codex, Antigravity, any MCP client)"
  - "Migration from Mem0, Zep, Supermemory, and more"
choose_when: "You want a local, MCP-native cognitive memory with hierarchical + temporal structure, especially to migrate off Mem0/Zep/Supermemory."
avoid_when: "You want the simplest vector SDK (Mem0) or a temporal graph (Graphiti)."
hands_on: docs-only
last_verified: "2026-08-19"
---
# OpenMemory (CaviraOSS) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.
> **⚠️ Disambiguation:** this is the **independent CaviraOSS/OpenMemory** project — NOT Mem0's built-in "OpenMemory" (a local MCP server inside the `mem0ai/mem0` repo; see `mem0.md`). Same name, different projects.

| | |
|---|---|
| Category / sub-type | Memory → personal/org (cognitive memory engine) |
| Repo | https://github.com/CaviraOSS/OpenMemory |
| Maker | **CaviraOSS** |
| License | Apache-2.0 / Apache-2.0 |
| ⭐ / created | 4,355 · 2025-10-19 (pushed 2026-06-27) |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
A **local persistent memory store / cognitive memory engine** for LLM applications (Claude Desktop, GitHub Copilot, Codex, Antigravity, etc.). Differentiated from flat vector memories by **hierarchical decomposition** + **temporal awareness**.

## 2. Architecture
- **Not a vector DB.** Self-hosted; **Python + Node**.
- **Hierarchical memory decomposition** — breaks memories into layered structures that can be selectively accessed.
- **Temporal awareness** — treats time as a first-class dimension; automatically manages timeline changes (e.g., when a "CEO" transitions from one person to another).

## 3. Features
- Hierarchical decomposition + temporal awareness.
- **Native MCP server** — any MCP-aware client can use it as a tool (Claude Desktop, Copilot, Codex, Antigravity).
- **Migration tool** — import memories from **Mem0, Zep, Supermemory**, and more.
- Local, self-hosted.

## 4. Local/offline & dependencies
Local self-host (Python + Node); needs an LLM.

## 5. Roadmap
- **Was:** built by **CaviraOSS** (Oct 2025) as a local cognitive memory engine.
- **Now (2026):** ⭐4.4k; native MCP; migration from Mem0/Zep/Supermemory; active.
- **Ahead:** cognitive-memory engine; broader client + migration coverage.

## 6. What it is NOT / limitations
- **Not Mem0's OpenMemory** (a distinct same-named feature inside `mem0ai/mem0`).
- Not a vector DB; not a task tracker.
- Name-collision with Mem0's OpenMemory (confusing); newer; self-host + LLM required.

## 7. Positioning
- **OpenMemory (CaviraOSS)** — hierarchical + temporal cognitive engine; migrate-in from competitors.
- vs Mem0 (vector SDK + its own OpenMemory feature), Graphiti (temporal *graph*), Cognee (graph ECL).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** self-host + MCP into Claude Desktop; try the migration tool.

## 9. Sources
- https://github.com/CaviraOSS/OpenMemory (README)
- https://fosterfletcher.com/ai-memory-infrastructure/ (Mem0 vs OpenMemory)

_Last updated: 2026-07-20 · Researcher: Claude_
