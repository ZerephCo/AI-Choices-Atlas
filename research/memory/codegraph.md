---
name: "codegraph"
slug: codegraph
category: memory
subtype: "4.1 Project / task memory"
repo: https://github.com/colbymchenry/codegraph
site: null
maker: "colbymchenry"
license_claimed: MIT
license_detected: MIT
stars: 67073
created: "2026-01"
language: C
maturity: Prominent
status: active
local: true
one_liner: "Pre-indexed code knowledge graph served to agents via MCP — auto-syncs on code changes; fewer tokens, fewer tool calls, 100% local."
tagline_quote: "fewer tokens, fewer tool calls, 100% local"
features:
  - "Local SQLite graph (tree-sitter + FTS5); auto-sync on edits (FSEvents/inotify, ~2s debounce)"
  - "Single codegraph_explore MCP tool returns structural context + call flows + blast-radius"
  - "20+ languages; framework-aware routing (17 frameworks); cross-language bridging"
  - "100% local, no API keys; deterministic (resolves call edges) vs grep/RAG"
  - "8 agents: Claude Code, Cursor, Codex CLI, opencode, Hermes, Gemini CLI, Antigravity, Kiro"
choose_when: "You want to give agents fast, local, deterministic codebase understanding that cuts tokens + tool-calls."
avoid_when: "You need conversation memory (claude-mem/magic-context) or a monorepo's index is too large to keep hot."
cross_links: ["§6", "§16.2", "§9"]
hands_on: docs-only
last_verified: "2026-08-19"
---
# codegraph — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`. Cross-links §6 Context reducers, §16.2 token reduction, §9 (code-graph gates).

| | |
|---|---|
| Category / sub-type | Memory → 4.1 project/task (codebase knowledge graph) |
| Repo | https://github.com/colbymchenry/codegraph |
| Maker | **colbymchenry** |
| License | **MIT** / MIT |
| ⭐ / created | 61,125 · 2026-01 · TypeScript · v1.0 (signed/attested builds; npm provenance) |
| Backends/agents | Claude Code · Cursor · Codex CLI · opencode · Hermes Agent · Gemini CLI · Antigravity IDE · Kiro |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Pre-indexed code knowledge graph, auto syncs on code changes… fewer tokens, fewer tool calls, 100% local." A pre-built, deterministic code graph served to agents via MCP, replacing slow grep crawls with one structural query.

## 2. Quotes (verbatim, from docs — attributed)
- One-call context: *"One tool call returns entry points, related symbols, and code snippets — no slow file-by-file exploration."*
- Store: *"Everything goes into a local SQLite database with FTS5 full-text search."*
- Value: *"Surgical context · fewer tool calls · faster answers · 100% local."*
- Repo desc: *"fewer tokens, fewer tool calls, 100% local."*

## 3. How it works
- Indexes the codebase into a **local SQLite graph** using **tree-sitter** parsing (FTS5 full-text search).
- Watches the filesystem natively (**FSEvents/inotify**) with debounced **auto-sync** (default 2s).
- Resolves cross-file references, call paths (incl. dynamic dispatch), and framework routing.
- A single MCP tool (`codegraph_explore`) returns verbatim source grouped by file + call flows + blast-radius summaries.

## 4. Features
- **100% local** — no data leaves the machine; **no API keys**.
- **Auto-sync** on edits (configurable debounce).
- **MCP server** — one `codegraph_explore` call returns structural context.
- **20+ languages** (TS, Python, Go, Rust, Java, C#, Swift, Kotlin, …); **framework-aware routing** (17 frameworks).
- **Cross-language bridging** (Swift↔ObjC, React Native bridge, Expo modules, native events).
- Benchmark (7 real codebases): **58% fewer tool calls, 22% faster, ~zero file reads** vs baseline agent.

## 5. How it differs
- vs **grep/find**: deterministic pre-built graph, one call (not slow multi-call assembly).
- vs **embeddings/RAG**: precise (resolves call edges), no external APIs, not lossy.

## 6. What it is NOT / limitations
- A codebase structural index/memory, not conversation/session memory (see claude-mem, magic-context).
- Per-repo; local SQLite (RAM/disk for large monorepos).

## 7. Roadmap
- **Was:** created 2026-01.
- **Now (2026):** ⭐61k; MIT; v1.0; 8 agents; 20+ langs; auto-sync graph.
- **Ahead:** more languages/frameworks; deeper cross-language.

## 8. Positioning
- **codegraph** — a pre-indexed, auto-syncing code knowledge graph that cuts tokens + tool-calls (strong context-reducer + codebase memory).
- vs codebase-memory-mcp (in-memory KG, 15 tools), semble (chunk search), token-savior (§16.2), grep (baseline).

## 9. Hands-on
`docs-only` (2026-07-20). **TODO:** `npm i -g @colbymchenry/codegraph`; `codegraph init` a repo; wire the MCP server into Claude Code; compare tool-call counts vs grep.

## 10. Sources
- https://github.com/colbymchenry/codegraph (README, install.sh)

_Last updated: 2026-07-20 · Researcher: Claude_
