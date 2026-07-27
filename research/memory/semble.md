---
name: "semble"
slug: semble
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/MinishLab/semble
site: null
maker: "MinishLab"
license_claimed: MIT
license_detected: MIT
stars: 5654
created: "2026-04"
language: Python
maturity: Established
status: active
local: true
one_liner: "CPU-only code search for agents — static Model2Vec embeddings + BM25 + RRF; ~98% fewer tokens than grep+read; MCP; no GPU/keys."
tagline_quote: "Fast and Accurate Code Search for Agents. Uses ~98% fewer tokens than grep+read."
features:
  - "Static Model2Vec embeddings (CPU-only) + BM25 + Reciprocal Rank Fusion"
  - "tree-sitter code-aware chunking"
  - "~98% fewer tokens than grep+read; NDCG@10 0.854; index ~250ms, queries ~1.5ms"
  - "MCP (Claude Code, Cursor, Codex, OpenCode) + bash/AGENTS.md + Python API"
  - "No external deps — no GPU, API keys, or services"
choose_when: "You want fast, local, key-free code search in coding agents with big token savings (context-reducer)."
avoid_when: "You need a full code knowledge graph (call chains/routes → codebase-memory-mcp) or conversation memory (claude-mem)."
cross_links: ["§6"]
hands_on: docs-only
last_verified: "2026-07-20"
---
# semble — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → project/task (codebase code-search memory) · also a **context-reducer** |
| Repo | https://github.com/MinishLab/semble |
| Maker | **MinishLab** (also makes **Model2Vec** — fast static embeddings) |
| License | MIT / MIT |
| ⭐ / created | 5,654 · 2026-04-06 (pushed 2026-07-17) |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Fast and Accurate **Code Search** for Agents. Uses ~98% fewer tokens than grep+read." A fast, **CPU-only** code-search library for AI coding agents: combines static **Model2Vec** embeddings + **BM25** lexical search + **Reciprocal Rank Fusion** for semantic code search.

## 2. How it works
- Splits each file into **code-aware chunks** using **tree-sitter**.
- Scores each query against chunks with **static Model2Vec embeddings** (semantic) + **BM25** (lexical), fused via **Reciprocal Rank Fusion (RRF)**.

## 3. Performance
- Index a full repo in **~250 ms**; queries in **~1.5 ms**; **NDCG@10 = 0.854**.
- **~98% fewer tokens** than grep+read.

## 4. Features
- Static Model2Vec embeddings (CPU-only) + BM25 + RRF.
- tree-sitter code-aware chunking.
- **MCP server** (Claude Code, Cursor, Codex, OpenCode) + bash/AGENTS.md + **Python API**.
- **No external dependencies** — no GPU, API keys, or external services.

## 5. Local/offline & dependencies
Fully local, **CPU-only**; no GPU / API keys / services. (Model2Vec static embeddings; numpy-class footprint.)

## 6. Roadmap
- **Was:** built by **MinishLab** (Apr 2026) — the team behind **Model2Vec** (up-to-50× smaller, up-to-500× faster CPU embeddings); semble applies Model2Vec to code search.
- **Now (2026):** ⭐5.7k; MCP + Python; CPU-only; active.
- **Ahead:** more agent integrations; leverages Model2Vec advances.

## 7. What it is NOT / limitations
- Not conversation/session memory (code search).
- Not a full code *knowledge graph* (chunk-search, not call-graph/routes like codebase-memory-mcp).
- Chunk-level; younger.

## 8. Positioning
- **semble** — CPU-only, key-free code *search* (Model2Vec + BM25 + RRF); great token-saver / context-reducer.
- vs **codebase-memory-mcp** (structural knowledge graph: call chains/routes), grep/ripgrep (baseline), claude-mem (session memory).

## 9. Hands-on
`docs-only` (2026-07-20). **TODO:** index a repo (~250 ms) + MCP into Claude Code; compare token use vs grep.

## 10. Sources
- https://github.com/MinishLab/semble (README) · https://github.com/MinishLab/model2vec

_Last updated: 2026-07-20 · Researcher: Claude_
