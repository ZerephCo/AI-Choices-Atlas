---
name: "MemPalace"
slug: mempalace
category: memory
subtype: "4.1 Project / task memory"
repo: https://github.com/MemPalace/mempalace
site: https://mempalaceofficial.com
maker: "MemPalace"
license_claimed: MIT
license_detected: MIT
stars: 57490
created: "2026-04"
language: Python
maturity: Prominent
status: active
local: true
one_liner: "Local memory-palace system (method of loci) — verbatim storage in wings/rooms/closets/drawers, a symbolic AAAK index (~170-token startup), temporal KG; fully offline."
tagline_quote: "The best-benchmarked open-source AI memory system."
features:
  - "Memory-palace hierarchy: Wings (entity) → Rooms (time) → Closets (topic) → Drawers (verbatim)"
  - "Verbatim storage (no summarize/extract) + semantic search"
  - "Temporal entity-relationship KG (validity windows) on local SQLite"
  - "AAAK ~30x symbolic index compression; startup ~170 tokens (L0+L1)"
  - "36 MCP tools; per-agent wings + diaries; fully offline (zero API)"
choose_when: "You want local, offline, verbatim long-term memory with tiny startup cost, temporal KG, and multi-agent diaries via MCP."
avoid_when: "You want extraction/summarized facts (Mem0) or a managed cloud service."
hands_on: docs-only
last_verified: "2026-07-20"
---
# MemPalace — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → general agent memory (personal + org) — **memory-palace** architecture |
| Repo / docs | https://github.com/MemPalace/mempalace · mempalaceofficial.com (**⚠️ beware impostor domains — reported malware on look-alikes**) |
| License | MIT / MIT |
| ⭐ / created | 57,490 · 2026-04-05 (pushed 2026-07-17 — very active) |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
A **local, offline long-term memory system** built on the ancient **memory-palace / method-of-loci** technique. "The best-benchmarked open-source AI memory system." Stores conversation history **verbatim** and retrieves by semantic search, with a compact symbolic index that keeps startup cost tiny (~170 tokens).

## 2. Architecture — the palace
Hierarchical, entity-first:
- **Wings** — a broad region keyed to a real entity (a person by name, a project by codename, a life domain).
- **Rooms** — discrete units of time inside a wing (one per day or per session).
- **Closets** — group related drawers by topic/thread inside a room.
- **Drawers** — a single chunk of **verbatim content** (exact words, untouched).
Scoped search (walk to the right wing/room) instead of scanning a flat corpus.

## 3. Storage, index & retrieval
- **Verbatim storage** — does **not** summarize, extract, or paraphrase (opposite of extraction-based memories like Mem0).
- **Temporal entity-relationship knowledge graph** with validity windows (add / query / invalidate / timeline), backed by **local SQLite**.
- **AAAK** — a dense symbolic dialect the index is written in, that an LLM can scan at a glance ("thousands of entries, one pass, exact drawer located"); **~30× compression**.
- Semantic search over drawers.

## 4. Low wake-up cost
Memory divided into **four layers**, loaded incrementally; **startup loads only L0 + L1 ≈ 170 tokens**.

## 5. Multi-agent
Each specialist agent gets its **own wing + diary**; discoverable at runtime via `mempalace_list_agents` — no system-prompt bloat.

## 6. Interfaces & install
- **36 MCP tools** (palace reads/writes, knowledge-graph ops, cross-wing navigation, drawer management, agent diaries).
- CLI. Recommended install: `uv tool install mempalace` (isolated env). **Only use the official repo/domain.**

## 7. Local/offline & dependencies
**Fully offline, zero API calls.** Local SQLite; pluggable backend. No external LLM required for storage/retrieval mechanics (an agent still uses its own LLM to read results).

## 8. Roadmap
- **Was:** launched 2026-04 as the method-of-loci "best-benchmarked open-source AI memory system."
- **Now (2026):** ⭐57.5k; 96.6% LongMemEval; AAAK compression; 36 MCP tools; fully offline.
- **Ahead:** pluggable backends; broader agent integration.

## 9. Benchmarks (+ caveats)
Self-reported: **96.6% LongMemEval** (R@5 raw); **~170-token** startup; **30×** index compression. Among the stronger benchmark claims in the space — but self-reported → directional.

## 10. What it is NOT / limitations
- Not an extraction/summarization memory (keeps **verbatim** — storage grows with raw content).
- Not cloud/hosted (local-first, zero API).
- Not a task tracker.
- Young (2026-04); benchmarks self-reported; **impostor-domain/malware warning** — verify the source repo/domain.

## 11. Positioning vs peers
- **MemPalace** — verbatim, offline, method-of-loci hierarchy + temporal KG + tiny startup; multi-agent diaries.
- vs Mem0 (extraction), Graphiti (temporal graph, needs DB+LLM), Cognee (graph ECL), claude-mem (session compression).

## 12. Hands-on
`docs-only` (2026-07-20). **TODO:** `uv tool install mempalace` in an isolated env; try the 36 MCP tools + AAAK index + a wing/room/drawer round-trip.

## 13. Sources
- https://github.com/MemPalace/mempalace (README) · mempalaceofficial.com
- https://recca0120.github.io/en/2026/04/08/mempalace-ai-memory-system/

_Last updated: 2026-07-20 · Researcher: Claude_
