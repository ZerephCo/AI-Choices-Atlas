---
name: "LangMem"
slug: langmem
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/langchain-ai/langmem
site: null
maker: "LangChain"
license_claimed: MIT
license_detected: MIT
stars: 1568
created: "2025-01"
language: Python
maturity: Established
status: active
local: false
one_liner: "LangChain's SDK for agent long-term memory — semantic, episodic, and procedural memory over LangGraph's store, with prompt optimization."
features:
  - "3 memory types: semantic · episodic · procedural (saved as prompt instructions)"
  - "2 pathways: hot-path (agent-managed tools) + background (auto extract/consolidate)"
  - "Memory tools: create_manage_memory_tool, create_search_memory_tool"
  - "Storage-agnostic over LangGraph BaseStore; InMemory or AsyncPostgres"
  - "Prompt optimization / refinement (the procedural mechanism)"
choose_when: "You're already on LangGraph and want native long-term memory with a procedural/prompt-optimization angle."
avoid_when: "You want a framework-agnostic memory service (Mem0), a temporal graph (Zep/Graphiti), or production without wiring a Postgres store."
hands_on: docs-only
last_verified: "2026-07-20"
---
# LangMem — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → organizational/semantic + personal — **LangGraph-native** |
| Repo | https://github.com/langchain-ai/langmem |
| Maker | **LangChain** (part of the LangGraph platform) |
| License | MIT *(GitHub facts confirmed in-session — see §Facts)* |
| Package | `pip install -U langmem`; latest PyPI 0.0.30 (Oct 2025) → still **0.x / early** |
| Adoption | ~746K monthly PyPI downloads, 5M+ total; repo active (commits mid-2026) |
| ⭐ / created | **1,568** · 2025-01-21 (active — pushed 2026-07-15) |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
LangChain's SDK for **agent long-term memory** — helps agents *learn and adapt over time* via memory extraction, consolidation, and **prompt optimization**. Core API is storage-agnostic but integrates natively with LangGraph's long-term memory store.

## 2. Memory types (human-cognition model)
- **Semantic** — facts, user preferences, conceptual relationships (personalization).
- **Episodic** — memories of specific past interactions/experiences.
- **Procedural** — *how* to do tasks; **LangMem's distinctive focus** — saves learned procedures as **updated instructions in the agent's prompt** (procedural memory otherwise lives across model weights + agent code + prompt).

## 3. Pathways
- **Hot-path** — the agent actively manages memory *during* a conversation via memory tools.
- **Background** — a background memory manager **automatically extracts, consolidates, and updates** knowledge between turns.

## 4. Architecture & storage
Operates as a layer **above LangGraph's storage abstraction**:
- Uses LangGraph's **`BaseStore`** interface for persistence; "functional primitives you can use with any storage system."
- Stores: **InMemoryStore** (ephemeral, lost on restart) or **AsyncPostgresStore** (production).
- Embedding-based retrieval (e.g. `openai:text-embedding-3-small`).

## 5. Features
- Core memory API for any backend.
- **Memory tools** agents invoke: `create_manage_memory_tool`, `create_search_memory_tool`.
- **Background memory manager** — automatic knowledge consolidation.
- **Prompt refinement / optimization** (procedural-memory mechanism).
- Long-term persistence across restarts (with a DB-backed store).

## 6. Interfaces / usage
Python SDK, two patterns:
- **Functional** — explicit memory tools the agent calls.
- **Stateful** — integrated into `create_react_agent` with automatic management ("just chat normally").

## 7. Local/offline & dependencies
Needs an LLM provider key + embeddings (external). InMemoryStore runs locally but embeddings are external. **No full offline mode.** Production needs a DB-backed store (Postgres).

## 8. Roadmap / status
- **Was/Now:** launched by LangChain as the long-term-memory SDK atop LangGraph checkpointers/stores; LangChain 1.0 docs still position it as *the* long-term memory option. Still **0.x** (PyPI 0.0.30, Oct 2025) despite heavy download adoption.
- **Ahead:** no formal public roadmap; direction tracks the LangChain/LangGraph platform.

## 9. What it is NOT / limitations
- Not a standalone store — it's a memory *layer* over LangGraph's `BaseStore` (couples you to that ecosystem for the native path).
- InMemoryStore is **not production-safe** (lost on restart).
- Docs are thin on multi-agent sharing, conflict resolution, privacy/governance, and cost; **the agent decides what to store** (no explicit data governance).
- No offline-LLM path; still early (0.x).

## 10. Positioning vs peers
- **LangMem** — best fit **inside a LangGraph app**; unique **procedural-memory / prompt-optimization** angle; storage-agnostic core.
- vs Mem0 (framework-agnostic SDK, widest integration), Graphiti/Zep (temporal graph), Cognee (graph-native ECL).

## 11. Hands-on
`docs-only` (2026-07-20). **TODO:** `pip install langmem` + a LangGraph `create_react_agent` smoke with InMemoryStore (needs LLM key); inspect the background manager + prompt-optimizer code.

## 12. Sources
- https://github.com/langchain-ai/langmem (README)
- https://www.langchain.com/blog/langmem-sdk-launch
- https://langchain-ai.github.io/langmem/concepts/conceptual_guide/
- https://docs.langchain.com/oss/python/concepts/memory

## Facts (GitHub API, 2026-07-20)
MIT · ⭐ **1,568** · created 2025-01-21 · pushed 2026-07-15 · not archived. (Note: only ~1.5k ⭐ vs ~746K PyPI downloads/mo — consumed as a library, rarely starred.)

_Last updated: 2026-07-20 · Researcher: Claude_
