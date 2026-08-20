---
name: "ByteRover CLI (formerly Cipher)"
slug: cipher
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/campfirein/byterover-cli
site: https://byterover.dev
maker: "Byterover"
license_claimed: "Elastic-2.0"
license_detected: NOASSERTION
stars: 4942
created: "2025-06"
language: TypeScript
maturity: Established
status: active
local: partial
one_liner: "Memory layer for coding agents, formerly Cipher — rename to ByteRover CLI now complete: an interactive REPL CLI with dual System-1/System-2 memory, cross-IDE via MCP, team-shareable. Elastic 2.0."
tagline_quote: "Interactive REPL CLI for AI-powered context memory"
features:
  - "Dual memory: System 1 (concepts/logic/history) + System 2 (reasoning steps)"
  - "Interactive REPL CLI (npm byterover-cli); rename from Cipher completed at the repo level"
  - "Cross-IDE via MCP: Cursor, Windsurf, Claude Code/Desktop, Gemini CLI, Kiro, VS Code, Roo, Cline, …"
  - "Context tree; cloud sync; real-time team sharing"
  - "Configurable LLM + embeddings; vector DB (Qdrant, Milvus)"
choose_when: "You want to give coding agents persistent, cross-IDE, team-shareable memory of concepts + reasoning (MCP)."
avoid_when: "You need general (non-coding) memory (Mem0), or an OSI license (Elastic 2.0 is source-available, not OSI)."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Cipher (→ ByteRover CLI) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → project/task + team (coding-agent memory) |
| Repo | **`campfirein/byterover-cli`** (rename from `campfirein/cipher` complete; old URL redirects) |
| Maker | **Byterover** (byterover.dev · docs.byterover.dev) |
| License | **Elastic 2.0** per the README badge (source-available, non-OSI → GitHub detects NOASSERTION) |
| npm | `byterover-cli` (successor to `@byterover/cipher`) |
| ⭐ / created | 4,942 · 2025-06-19 (pushed 2026-06-25; re-verified 2026-08-19) |
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
- **Now (2026-08):** ⭐4.9k; rename **complete** — repo is `campfirein/byterover-cli`, README titled "ByteRover CLI" (*"Interactive REPL CLI for AI-powered context memory"*), npm `byterover-cli`, license stated **Elastic 2.0**; broad MCP/IDE compatibility; team sharing + cloud sync; repo quiet since 2026-06-25.
- **Ahead:** portable coding-memory platform (ByteRover); more IDE/agent coverage.

## 7. What it is NOT / limitations
- Not general conversation memory (coding-focused).
- Not a task tracker.
- **License Elastic 2.0** — source-available, not OSI (GitHub shows NOASSERTION); needs vector DB + LLM/embeddings.

## 8. Positioning
- **Cipher/ByteRover** — cross-IDE coding-agent memory (concepts + reasoning), team-shareable.
- vs codebase-memory-mcp (code *structure* graph), claude-mem (session compression), Mem0 (general), GBrain (org markdown).

## 9. Hands-on
`docs-only` (2026-07-20). **TODO:** `npm i -g @byterover/cipher` + MCP into an IDE; inspect the dual-memory + context-tree.

## 10. Sources
- https://github.com/campfirein/byterover-cli (README, license badge; `campfirein/cipher` redirects) · https://byterover.dev/ · docs.byterover.dev

_Last updated: 2026-08-19 · Researcher: Claude_
