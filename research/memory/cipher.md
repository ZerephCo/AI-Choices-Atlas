---
name: "Cipher"
slug: cipher
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/campfirein/cipher
site: https://byterover.dev
maker: "Byterover"
license_claimed: NOASSERTION
license_detected: NOASSERTION
stars: 4925
created: "2025-06"
language: TypeScript
maturity: Established
status: active
local: partial
one_liner: "Open-source memory layer for coding agents — dual System-1/System-2 memory, cross-IDE via MCP, team-shareable; renamed to ByteRover CLI (brv)."
features:
  - "Dual memory: System 1 (concepts/logic/history) + System 2 (reasoning steps)"
  - "Auto-generate coding memories that scale with the codebase"
  - "Cross-IDE via MCP: Cursor, Windsurf, Claude Code/Desktop, Gemini CLI, Kiro, VS Code, Roo, Cline, …"
  - "Context tree; cloud sync; real-time team sharing"
  - "Configurable LLM + embeddings; vector DB (Qdrant, Milvus)"
choose_when: "You want to give coding agents persistent, cross-IDE, team-shareable memory of concepts + reasoning (MCP)."
avoid_when: "You need general (non-coding) memory (Mem0), or a clean OSI license today (NOASSERTION)."
hands_on: docs-only
last_verified: "2026-07-20"
---
# Cipher (→ ByteRover CLI) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → project/task + team (coding-agent memory) |
| Repo | `github.com/campfirein/cipher` → **`campfirein/byterover-cli`** (renamed to **ByteRover CLI / brv**) |
| Maker | **Byterover** (byterover.dev) |
| License | **NOASSERTION** (⚠️ verify terms) |
| npm | `@byterover/cipher` |
| ⭐ / created | 4,925 · 2025-06-19 (pushed 2026-06-25) |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
An open-source **memory layer specifically for coding agents** (originally **Cipher**, now **ByteRover CLI / `brv`**): gives AI coding agents persistent, structured memory that follows you across IDEs and teammates via MCP.

## 2. Architecture — dual memory layer
- **System 1** — high-level: programming concepts, business logic, past interactions.
- **System 2** — detailed: the model's **reasoning steps** while generating code.
- Configurable LLM + embedding providers; stored in a **vector DB (Qdrant, Milvus)**.
- Project knowledge curated into a **context tree**, syncable to cloud + shared across tools/teams.

## 3. Features
- Auto-generate coding memories that **scale with the codebase**.
- **Cross-IDE via MCP:** Cursor, Windsurf, Claude Code/Desktop, Gemini CLI, AWS Kiro, VS Code, Roo Code, Cline, Trae, Amp Code, Warp, Kimi K2.
- **Team sharing** of coding memories in real time; cloud sync; context switching.

## 4. Interfaces & install
MCP server; `npm install -g @byterover/cipher`; Docker (`docker-compose up`); Smithery install for Claude Desktop.

## 5. Local/offline & dependencies
Self-host + vector DB (Qdrant/Milvus); needs LLM + embeddings; cloud sync optional.

## 6. Roadmap
- **Was:** built by **Byterover** (Jun 2025) as **Cipher**, a coding-agent memory layer.
- **Now (2026):** ⭐4.9k; **renamed to ByteRover CLI (brv)**; broad MCP/IDE compatibility; team sharing + cloud sync.
- **Ahead:** portable coding-memory platform (ByteRover); more IDE/agent coverage.

## 7. What it is NOT / limitations
- Not general conversation memory (coding-focused).
- Not a task tracker.
- **License NOASSERTION** (verify); rebranding to ByteRover in progress; needs vector DB + LLM/embeddings.

## 8. Positioning
- **Cipher/ByteRover** — cross-IDE coding-agent memory (concepts + reasoning), team-shareable.
- vs codebase-memory-mcp (code *structure* graph), claude-mem (session compression), Mem0 (general), GBrain (org markdown).

## 9. Hands-on
`docs-only` (2026-07-20). **TODO:** `npm i -g @byterover/cipher` + MCP into an IDE; inspect the dual-memory + context-tree.

## 10. Sources
- https://github.com/campfirein/cipher (→ byterover-cli) · https://byterover.dev/ · https://www.npmjs.com/package/@byterover/cipher

_Last updated: 2026-07-20 · Researcher: Claude_
