---
name: "Mem0"
slug: mem0
category: memory
subtype: "4.2 Personal memory"
repo: https://github.com/mem0ai/mem0
site: https://mem0.ai
maker: "mem0ai (Taranjeet Singh & Deshraj Yadav)"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 63603
created: "2023-06"
language: Python
maturity: Prominent
status: active
local: partial
one_liner: "Universal memory layer giving agents user/session/agent-level recall + personalization; add-only fact extraction with multi-signal retrieval."
features:
  - "Two-phase API: add (extract facts) → search (retrieve before next call); add-only"
  - "Four scopes: conversation · session · user · organizational"
  - "Retrieval fuses semantic · keyword · entity-boost · temporal signals"
  - "17+ vector backends (Qdrant default); many LLM/embedding providers; rerankers"
  - "OpenMemory local-first MCP server; editor plugins (Claude Code, Cursor, Codex, …)"
  - "Memory expiration + 'dream' consolidation (merge dupes, drop stale)"
choose_when: "You want personal/assistant recall across sessions with minimal setup (pip install mem0ai + a key)."
avoid_when: "You need fully offline operation, or would conflate its memory with work truth."
hands_on: inspected
last_verified: "2026-08-19"
---
# Mem0 — Deep Research Reference

> Full research backing the atlas card. Provenance + update basis. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → personal (primary); also session/agent/org-scoped |
| Repo | https://github.com/mem0ai/mem0 |
| Site / docs | mem0.ai · docs.mem0.ai |
| Former name | **Embedchain** (RAG framework) |
| License | Apache-2.0 (claimed) / Apache-2.0 (GitHub-detected + hands-on confirmed) |
| Language / package | Python (`mem0ai` v2.0.12) + TypeScript (`mem0ai/oss`, TS SDK v3.1.0) |
| ⭐ / created | 61,238 · 2023-06 |
| Backing | $24M raised Oct 2025 (Y Combinator, Peak XV, Basis Set) |
| Authority | `suggestive` (never source of work truth) |
| Researched | 2026-07-20 · hands-on: **inspected** (shallow clone) |

## 1. What it is
A memory layer that sits between the app and the model. `add` extracts durable facts from conversation turns; `search` retrieves relevant ones before the next model call. The app decides which returned memories to inject. Goal: stop replaying full transcripts; give the model only relevant memories.

## 2. Architecture & storage
Three stores, each for a different lookup pattern:
- **SQL database** — facts + metadata; the *source of truth* for each memory.
- **Vector database** — embeddings for semantic similarity (default **Qdrant**; SQLAlchemy for metadata).
- **Entity / graph store** — entities + relationships (optional; enables relationship-aware retrieval).

Extraction pipeline: context lookup (avoid dupes) → LLM fact extraction → dedup + embed → optional entity linking. **Add-only**: new facts don't silently overwrite old ones (`"I moved from Austin to Seattle"` stores the new fact; use explicit `update`/`delete` to change). `infer=False` stores raw content verbatim.

## 3. Memory layers (scopes)
| Layer | Lifetime | Best for |
|---|---|---|
| Conversation | single response | tool/CoT detail within a turn |
| Session | minutes–hours | multi-step flows (onboarding, debugging) |
| User | weeks–forever | personalization, account state |
| Organizational | configured globally | shared FAQs, catalogs, policies |

Scoped by `user_id`, `agent_id`, `run_id`, metadata. Classic mapping: short-term (conversation history, working memory, attention) vs long-term (factual, episodic, semantic).

## 4. Retrieval (4 fused signals)
| Signal | What | Best for |
|---|---|---|
| Semantic | vector similarity | conceptual questions |
| Keyword | term match | names, IDs, exact lookups |
| Entity | boosts entity-linked memories | person/project/account questions |
| Temporal | time metadata vs query's temporal intent | "when did…", recency, current state |

Platform fuses these in the managed service; OSS depends on configured vector store + optional reranker + graph store. Rerankers: Cohere, ZeroEntropy, cross-encoder, LLM-based.

## 5. Features
- 17+ vector backends (Qdrant default; Pinecone, Weaviate, Milvus, Chroma, MongoDB, Elasticsearch, OpenSearch, Databricks, AWS Neptune Analytics, S3 Vectors, Azure MySQL, Vertex AI, Turbopuffer, Upstash, Valkey, Cassandra, Baidu Mochow).
- Many LLM/embedding providers; **lazy imports** — `mem0ai/oss` pulls no provider SDK until first use.
- **Memory expiration** (`expiration_date`; `showExpired` on read).
- **"Dream" consolidation** (in editor plugins): merge duplicates, drop stale/sensitive, rewrite vague memories.
- **OpenMemory** — local-first, MCP-compatible memory server; works with Claude Desktop, Cursor, Windsurf, VS Code; local storage + dashboard.
- Editor plugins w/ auto-capture: Claude Code, Cursor, Codex, Antigravity (Google), OpenCode, Pi Agent, OpenClaw. Scopes project/session/global; secret redaction; git-root `app_id`.

## 6. Interfaces
Python SDK · TypeScript SDK · self-host REST server (Docker: `server/` with `docker-compose.yaml`, `auth.py`, `rate_limit.py`, alembic migrations, dashboard) · CLI · MCP (via OpenMemory) · editor plugins.

## 7. Deployment tiers
1. **OSS library** — self-managed, core SDK, no dashboard.
2. **Self-hosted server** — open-source Docker, dashboard/auth/API keys.
3. **Cloud platform** — proprietary optimizations; Starter → **Growth ($79/mo)** → Pro.

## 8. Local/offline & dependencies
Library/server run locally, but **no bundled models** → needs external LLM + embeddings (default OpenAI; reranker default `gpt-4o-mini`; Ollama supported). Self-hosted auth needs config (`AUTH_DISABLED=true` for local dev).

## 9. Roadmap
- **Was:** started as **Embedchain** (June 2023 — open-source RAG framework, 2M+ downloads) by Taranjeet Singh & Deshraj Yadav → **renamed to Mem0 in July 2024**. Trigger: their viral (India) meditation app, where users kept saying "the app doesn't remember me." "Mem" = memory, "0" = zero-friction.
- **Now (2026):** Apr-2026 **new token-efficient algorithm** (single-pass hierarchical extraction + multi-signal retrieval): **+29.6 temporal, +23.1 multi-hop** vs the old algorithm. TS↔Python SDK parity push (TS v3.1.0 added 26 providers, reranking, zero-dep imports). v3 API (`/v3/memories/*`). OpenMemory local-first + plugin ecosystem.
- **Ahead:** stated vision of memory as a first-class **agentic** architectural layer of AGI; continued algorithm/benchmark work; provider expansion.

## 10. Benchmarks / performance (+ caveats)
- LoCoMo **92.5**, LongMemEval **94.4** (published).
- OSS users get "**directionally similar**," not identical, gains vs the managed platform.

## 11. What it is NOT / limitations
- Not offline out of the box (external LLM/embeddings required).
- Not a task tracker / source of *work* truth.
- Not a temporal-graph-first store (that's Graphiti's niche; Mem0's graph is optional).
- Add-only accretes stale facts without curation (mitigated by "dream"/consolidation + explicit delete).
- Retrievable by design → don't store unredacted secrets/PII.

## 12. Hands-on (inspected, 2026-07-20)
Shallow-cloned to scratchpad (never committed): **38 MB / 1,803 files**. Confirmed Apache-2.0 LICENSE, `mem0ai` **v2.0.12**, deps `qdrant-client>=1.12 / openai>=1.90 / sqlalchemy>=2.0 / pydantic>=2.7`, **default vector store `qdrant`** (`mem0/vector_stores/configs.py`), reranker default `gpt-4o-mini`. Ships `server/` (Docker), `openmemory/`, `mem0-ts/`, `cli/`, `skills/`, `integrations/`. Not executed (needs an LLM key); self-host path is real and Dockerized.

## 13. Sources
- https://github.com/mem0ai/mem0 (README, `pyproject.toml`, `docs/`) — cloned 2026-07-20
- docs.mem0.ai: `core-concepts/how-it-works`, `core-concepts/memory-types`, `changelog/highlights`
- https://x.com/taranjeetio/status/1811789999257587785 (Embedchain→Mem0 rename)
- https://techcrunch.com/2025/10/28/ (mem0 raises $24M)
- https://mem0.ai/blog/state-of-ai-agent-memory-2026 (Apr-2026 algorithm)

_Last updated: 2026-07-20 · Researcher: Claude_
