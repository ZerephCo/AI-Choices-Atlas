---
name: "codebase-memory-mcp"
slug: codebase-memory-mcp
category: memory
subtype: "4.1 Project / task memory"
repo: https://github.com/DeusData/codebase-memory-mcp
site: https://deusdata.github.io/codebase-memory-mcp
maker: "DeusData"
license_claimed: MIT
license_detected: MIT
stars: 39548
created: "2026-02"
language: C
maturity: Prominent
status: active
local: true
one_liner: "Code-intelligence MCP server — indexes a codebase into a persistent knowledge graph (functions/classes/call-chains); 158 languages, sub-ms, local, no keys."
features:
  - "Knowledge graph of functions, classes, call chains, HTTP routes, cross-service links"
  - "Two-layer parse: tree-sitter (158 langs) + Hybrid LSP semantic types (major langs)"
  - "Semantic vector search via nomic-embed-code embeddings compiled into the binary (768-dim int8)"
  - "RAM-first indexing (LZ4, in-memory SQLite); sub-ms queries"
  - "15 MCP tools; 43 client surfaces; single static C binary; no Docker/keys; 100% local"
choose_when: "You want to give coding agents fast, local, token-cheap understanding of codebase structure (call graphs, routes) with zero setup/keys."
avoid_when: "You need conversation/session memory (claude-mem) or a task graph (Beads) — this indexes code, not chats."
cross_links: ["§6"]
hands_on: docs-only
last_verified: "2026-08-19"
---
# codebase-memory-mcp — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → project/task (**codebase-structure** memory / code intelligence) |
| Repo / docs | https://github.com/DeusData/codebase-memory-mcp · deusdata.github.io/codebase-memory-mcp |
| Maker | **DeusData** |
| License | MIT / MIT |
| ⭐ / created | 33,032 · 2026-02-24 (pushed 2026-07-19 — very active) |
| Authority | `suggestive` (retrieval/indexing) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
A high-performance **code-intelligence MCP server** that indexes any codebase into a **persistent knowledge graph** so AI coding agents answer structural questions with ~10–120× fewer tokens. 158 languages, sub-ms queries, single static binary, zero dependencies, no API keys, 100% local.

## 2. Architecture — two-layer parse → knowledge graph
- **Layer 1:** fast syntactic **tree-sitter AST** pass for every one of **158 languages**.
- **Layer 2:** **Hybrid LSP semantic type resolution** for major families (Python, TS/JS/JSX/TSX, PHP, C#, Go, C, C++, Java, Kotlin, Rust, Perl) — refines `CALLS`, `USAGE`, `RESOLVED_CALLS` edges with type info.
- Output: a **knowledge graph** of functions, classes, call chains, HTTP routes, cross-service links.
- **RAM-first indexing** (LZ4 compression, in-memory SQLite, single dump at end); indexes an average repo in **milliseconds**; queries in **sub-ms**.

## 3. Semantic search
Semantic vector search across the whole graph — find code by meaning, not name (a search for `send` surfaces `publish`/`emit`/`dispatch`). Powered by **nomic-embed-code embeddings compiled directly into the binary** (768-dim, int8) → no external embedding API.

## 4. Features
- Persistent code knowledge graph (functions/classes/call-chains/routes/cross-service).
- **15 MCP tools**; plug-and-play across **43 client surfaces**.
- Local semantic + structural search; sub-ms queries.
- **Single static C binary** (macOS/Linux/Windows); no Docker, no runtime, no API keys.
- **100% local, no telemetry** — code/queries never leave the machine.

## 5. Interfaces
MCP (15 tools); 43 automatic/conditional client surfaces (coding agents/IDEs). Install: download binary + run install.

## 6. Local/offline & dependencies
Fully local; **no API keys**, no Docker, no runtime; embeddings compiled into the binary. Zero external dependencies.

## 7. Roadmap
- **Was:** built by **DeusData** (Feb 2026) as a high-performance code-intelligence MCP server; academic research backing.
- **Now (2026):** ⭐33k; 158 languages; local nomic-embed-code embeddings; frequent releases.
- **Ahead:** more languages / LSP coverage; broader client surfaces.

## 8. Benchmarks (+ caveats)
Across **31 real-world repos**: 83% answer quality, **10× fewer tokens**, 2.1× fewer tool calls vs file-by-file exploration (~120× fewer tokens for structural questions). Vendor-reported — directional.

## 9. What it is NOT / limitations
- Not conversation/session memory — it's **codebase-structure** memory (code intelligence).
- Not a task tracker; not an LLM (retrieval/indexing layer).
- Hybrid-LSP depth limited to the major language families (others get tree-sitter only).
- Benchmarks vendor-sourced.

## 10. Positioning
- **codebase-memory-mcp** — indexes *code structure* as memory (call graphs, routes) for token-cheap agent understanding; overlaps **Context reducers** (huge token savings).
- vs claude-mem (conversation/session memory), Beads (task graph), Mem0/Cognee (general/knowledge memory).

## 11. Hands-on
`docs-only` (2026-07-20). **TODO:** download binary + index a repo; try the 15 MCP tools + semantic code search; measure token savings.

## 12. Sources
- https://github.com/DeusData/codebase-memory-mcp (README) · https://deusdata.github.io/codebase-memory-mcp/

_Last updated: 2026-07-20 · Researcher: Claude_
