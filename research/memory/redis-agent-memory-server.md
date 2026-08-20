---
name: "Redis Agent Memory Server"
slug: redis-agent-memory-server
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/redis/agent-memory-server
site: https://redis.github.io/agent-memory-server
maker: "Redis"
license_claimed: "Redis Source Available (RSALv2/SSPLv1)"
license_detected: NOASSERTION
stars: 307
created: "2025-03"
language: Python
maturity: Emerging
status: active
local: partial
one_liner: "Official Redis reference agent-memory server — two-tier working + long-term memory, REST + MCP, Redis-backed semantic search, auto extract/dedup/forget."
features:
  - "Two-tier: working (session, TTL) + long-term (facts + vectors, semantic retrieval)"
  - "Auto-promotion: extracts important info working→long-term in background; dedup"
  - "Search: semantic + keyword + hybrid with filtering"
  - "REST · MCP (FastMCP) · Python client; backends Redis (default), Pinecone, Chroma, Postgres"
  - "Auth: OAuth2/JWT, token, or disabled; background forgetting + compaction"
choose_when: "You already run Redis and want an official two-tier memory server with REST/MCP and lifecycle management."
avoid_when: "You need an OSI license (this is Redis source-available) or a fully offline/no-LLM setup."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Redis Agent Memory Server — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → org/semantic (server-based agent memory) |
| Repo / docs | https://github.com/redis/agent-memory-server · redis.github.io/agent-memory-server |
| Maker | **Redis** (official) |
| License | **Redis source-available** (RSALv2 / SSPLv1) / GitHub: **NOASSERTION** (⚠️ not OSI; service restrictions) |
| ⭐ / created | 295 · 2025-03-14 (pushed 2026-07-16) |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
An **official Redis reference implementation** for agent memory: two-tier working + long-term memory with **REST and MCP** interfaces, configurable extraction strategies, and Redis-backed semantic search.

## 2. Architecture — two-tier
- **Working (session) memory:** active conversation state, session history, session metadata; **configurable TTL**.
- **Long-term memory:** extracted facts + learned patterns as **text + vector embeddings** for semantic retrieval.
- **Auto-promotion:** as events are written to working memory, important info is **automatically extracted and promoted to long-term in the background**; deduplicated.

## 3. Features
- **Search:** semantic + keyword + hybrid, with advanced filtering.
- **Auto extract / organize / deduplicate** memories from interactions.
- **Interfaces:** REST API · **MCP server (FastMCP)** · Python client. Model-agnostic (OpenAI, Anthropic, …).
- **Backends:** Redis (default), Pinecone, Chroma, PostgreSQL, more.
- **Auth:** OAuth2/JWT, token-based, or disabled (dev). Background async processing.
- **Lifecycle management:** automatic background **forgetting**, memory **compaction**, server-controlled cleanup (prevents unbounded growth).

## 4. MCP tools
`set_working_memory` · `search_long_term_memory` (semantic/keyword/hybrid + filters) · `edit_long_term_memory`.

## 5. Local/offline & dependencies
Self-host (Redis); needs an LLM/embeddings provider for extraction + semantic retrieval.

## 6. Roadmap
- **Was:** started by **Redis** (Mar 2025) as an open reference implementation for agent memory on Redis.
- **Now (2026):** ⭐295; two-tier memory; REST + MCP; multi-backend; active.
- **Ahead:** official Redis agent-memory offering; deeper Redis integration.

## 7. What it is NOT / limitations
- **Not OSI-open-source** — Redis **source-available** license (RSALv2/SSPLv1); restrictions on offering it as a competing managed service.
- Not a task tracker; not zero-LLM (extraction needs a model).
- Younger/smaller (⭐295) despite official Redis backing.

## 8. Positioning
- **Redis Agent Memory Server** — official, Redis-native two-tier working+long-term memory with lifecycle mgmt; REST/MCP; source-available.
- vs Mem0/Cognee/Zep (OSI-licensed alternatives), Letta (framework).

## 9. Hands-on
`docs-only` (2026-07-20). **TODO:** self-host + Redis smoke; try MCP tools (`set_working_memory` / `search_long_term_memory`).

## 10. Sources
- https://github.com/redis/agent-memory-server (README, docs) · redis.github.io/agent-memory-server · redis.io/agent-memory/

_Last updated: 2026-07-20 · Researcher: Claude_
