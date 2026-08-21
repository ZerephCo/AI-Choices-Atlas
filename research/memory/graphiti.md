---
name: "Graphiti"
slug: graphiti
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/getzep/graphiti
site: https://getzep.com
maker: "Zep"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 30090
created: "2024-08"
language: Python
maturity: Prominent
status: active
local: false
one_liner: "Framework for temporal knowledge graphs for agents — tracks when facts became and ceased to be true, with hybrid retrieval and full provenance."
features:
  - "Bi-temporal model: event time + ingestion time per edge; contradictions invalidated, not deleted"
  - "Hybrid retrieval: semantic + BM25 + graph traversal with graph-distance reranking"
  - "Custom + learned ontology (Pydantic); episodes = provenance"
  - "Backends: Neo4j · FalkorDB · Amazon Neptune · Kuzu (deprecated)"
  - "Python SDK (graphiti-core) · MCP server · FastAPI REST"
choose_when: "Temporal validity matters (facts that change over time) and you already run a graph DB."
avoid_when: "You need a quick single-user cache, or can't operate Neo4j/FalkorDB."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Graphiti — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → organizational / semantic (temporal) |
| Repo | https://github.com/getzep/graphiti |
| Site / docs | getzep.com · neo4j.com/blog (feature writeups) |
| Maker | **Zep** (Graphiti = the OSS engine under Zep's commercial platform) |
| License | Apache-2.0 / Apache-2.0 |
| Language / package | Python (`graphiti-core`), Python 3.10+ (3.12+ for embedded FalkorDB Lite) |
| ⭐ / created | 30,090 · 2024-08 |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
Framework for building/querying **temporal knowledge graphs** for agents. Turns conversations, business data, and documents into a temporal context graph — entities, relationships, and the timeline they live on. Ingests "episodes" incrementally, preserving historical validity of facts.

## 2. Architecture & storage
Bi-temporal knowledge graph:
- **Nodes** = entities; **edges** = facts/relationships as triplets (Entity→Relationship→Entity) with **validity windows**; **episodes** = raw provenance.
- **Two time axes per edge:** *event time* (true in the real world) + *ingestion time* (when Zep learned it). Contradicting facts are **marked invalid, not deleted** → full history preserved.
- Custom ontology (Pydantic-defined entity/edge types) **and** learned ontology emerging from data.
- Community detection + group management for organizing related data.

**Backends:** Neo4j 5.26+ · FalkorDB 1.1.2+ · Amazon Neptune (+ OpenSearch Serverless) · Kuzu 0.11.2 **(deprecated — upstream unmaintained)**.

## 3. Retrieval
Hybrid: semantic (embeddings) + keyword (BM25) + graph traversal, with **graph-distance reranking** and predefined **search recipes**. Optional full-text via BM25 or Amazon OpenSearch.

## 4. Features
- Incremental construction (episodes integrate without batch recompute).
- Provenance: every derived fact traces to source episodes.
- Automatic fact invalidation on contradiction.
- **MCP server**: episode add/retrieve/delete, entity/relationship handling, semantic+hybrid search, graph maintenance.
- **FastAPI REST** service.
- Concurrency defaulted to ~10 to avoid provider 429s (tunable).

## 5. Providers
- **LLMs:** OpenAI (default), Anthropic, Gemini, Groq, Azure, OpenAI-compatible (Ollama, vLLM, llama.cpp, LM Studio, DeepSeek, Together, OpenRouter).
- **Embedders:** OpenAI, Azure, Gemini, Voyage, local (OpenAI-compatible).
- Works best with LLMs supporting **structured output** — others may cause schema/ingestion failures.

## 6. Local/offline & dependencies
**Not offline**: needs a running graph DB (Neo4j/FalkorDB) + an LLM + embeddings provider. Minimal example ≈ `pip install graphiti-core` + Dockered Neo4j + `OPENAI_API_KEY` (~10–15 min).

## 7. Roadmap
- **Was:** built by **Zep**; design anchored by the paper *"Zep: A Temporal Knowledge Graph Architecture for Agent Memory"* (arXiv:2501.13956, Jan 2025), reporting Zep beating MemGPT on the Deep Memory Retrieval (DMR) benchmark **94.8% vs 93.4%**. Zep itself began as an LLM memory server and evolved to a temporal-graph architecture.
- **Now (2026):** MCP server recently added; v0.17.0 added custom-DB driver config; **Kuzu deprecated**; Zep Cloud and OSS Graphiti have diverged into different feature sets.
- **Ahead:** no public roadmap doc — direction is set by Zep's commercial **Context Graph Engine** (managed, sub-200ms at scale). Treat OSS Graphiti as the *engine*, Zep as the *hosted product*.

## 8. Performance (+ caveats)
- Typically **sub-second** hybrid retrieval self-hosted; Zep-managed **sub-200ms at scale**.
- Faster than GraphRAG (seconds→tens) because hybrid search isn't LLM-dependent at query time.
- Self-hosted performance "depends on your setup."

## 9. What it is NOT / limitations
- **Not GraphRAG** (evolving agent memory, not static doc summarization).
- Not batch-only; not turnkey (you build user/conversation mgmt + retrieval tuning).
- Not offline; not the whole product (OSS engine under Zep).
- Requires structured-output LLMs; low default concurrency; Kuzu path deprecated.

## 10. Hands-on
`docs-only` (2026-07-20) — README + quickstart + Neo4j/Zep writeups reviewed. Not cloned/run (needs a graph DB + key). **TODO:** clone + inspect `graphiti-core` config + MCP server code for a code-level pass.

## 11. Sources
- https://github.com/getzep/graphiti (README)
- https://arxiv.org/abs/2501.13956 (Zep paper)
- https://www.getzep.com/platform/graphiti/ · https://neo4j.com/blog/developer/graphiti-knowledge-graph-memory/
- https://www.falkordb.com/blog/building-temporal-knowledge-graphs-graphiti/

_Last updated: 2026-07-20 · Researcher: Claude_
