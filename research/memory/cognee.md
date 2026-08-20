---
name: "Cognee"
slug: cognee
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/topoteretes/cognee
site: null
maker: "topoteretes"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 30118
created: "2023-08"
language: Python
maturity: Prominent
status: active
local: true
one_liner: "Open-source graph-native memory platform — an ECL (Extract→Cognify→Load) pipeline that turns data into a self-improving knowledge graph + vectors."
features:
  - "ECL pipeline: add (ingest) → cognify (extract) → memify (enrich); 14 retrieval modes"
  - "Auto-routing vector+graph hybrid; session-aware recall; cross-agent sharing"
  - "Pluggable backends: graph (Neo4j/Kuzu/Postgres) + vector (6+); Cognee 1.0 unifies on Postgres"
  - "Governance: tenant isolation · audit trails · OTEL observability"
  - "Python/TS/Rust SDK · CLI+UI · MCP · LangGraph · Claude Code/OpenClaw plugins"
choose_when: "You need multi-hop / deep-knowledge connection where structured graph recall matters, with pluggable storage + MCP."
avoid_when: "You want the simplest personal-recall SDK (Mem0), a temporal-compliance focus (Zep/Graphiti), or can't run any graph/LLM."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Cognee — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → organizational / semantic (**graph-native**) |
| Repo | https://github.com/topoteretes/cognee |
| Maker | **topoteretes** (GitHub org); active Discord + r/AIMemory community |
| License | Apache-2.0 *(GitHub facts confirmed in-session — see §Facts)* |
| Language | Python 3.10–3.14 (also Rust + TS clients) |
| ⭐ / created | **28,535** · 2023-08-16 (active — pushed 2026-07-19) |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
Open-source AI **memory platform** giving agents persistent long-term memory across sessions via a **self-hosted knowledge-graph engine**. Positioned as an *active, self-improving* memory layer (not a passive store or plain RAG library): combines vector embeddings + graph reasoning + cognitive-science-grounded **ontology generation**.

## 2. Architecture — the ECL pipeline
**Extract → Cognify → Load**, exposed as four core async ops:
- `remember` / **add** — ingest & build graph
- `recall` — query (auto-routes vector + graph)
- `forget` — delete
- `improve` / **memify** — enrichment + feedback loop
Separates **ingestion** (add) from **knowledge construction** (cognify) from **memory refinement** (memify). **14 retrieval modes**.

## 3. Backends (pluggable)
- **Graph:** Neo4j · Kuzu (local) · Postgres native graph backend
- **Vector:** pgvector · LanceDB · Qdrant · ChromaDB · Weaviate · Milvus
- **Sessions:** Redis · SQL session-cache · Postgres
- **Local (no external services):** SQLite · LanceDB · Kuzu (embedded)
- **Default (Cognee 1.0):** Postgres consolidates all layers — graph + embeddings + metadata + sessions in one DB

## 4. Features
- Multi-format ingestion → unified company knowledge base
- Search auto-routing (vector + graph hybrid) · session-aware recall
- Persistent long-term (graph) + fast session cache + **cross-agent sharing**
- Governance: user/tenant isolation · audit trails · OTEL observability
- Cognitive grounding: ontology generation tied to domain context
- Multimodal (labeled; not detailed in docs)

## 5. Interfaces
- **Python SDK:** `pip install cognee`; async `remember/recall/forget/improve`
- **CLI:** `cognee-cli` with local **UI** (`-ui` flag)
- **MCP server:** HTTP/SSE/stdio, port 8001
- **Rust client** (`cognee-rs`) · **TS client** (`@cognee/cognee-ts`)
- **Cloud API:** `await cognee.serve(url=…, api_key=…)`
- Integrations: **Claude Code plugin · OpenClaw plugin · native LangGraph + MCP**

## 6. Local/offline & dependencies
Local-first: SQLite + LanceDB + Kuzu, Python 3.10–3.14, **no external services**. **Only hard requirement:** `LLM_API_KEY`. Graph + vector search run fully offline once data is ingested; **LLM calls require API access** (no offline-LLM path documented). Docker needed for `cognee-cli -ui` / MCP server compose stack. 1-click deploy configs: Cognee Cloud, Modal, Railway, Fly.io, Render, Daytona, Islo.

## 7. Roadmap
- **Was:** built by topoteretes; grounded in peer-reviewed research — *"Optimizing the Interface Between Knowledge Graphs and LLMs for Complex Reasoning"* (Markovic et al., 2025, **arXiv:2505.24478**).
- **Now (2026):** **Cognee 1.0** — unified memory layer on Postgres (graph + vector + sessions + metadata in one DB). Production maturity: **1M+ pipelines/month**, deployments at **Bayer, University of Wyoming, Knowunity**, ~500× pipeline-volume growth in a year.
- **Ahead:** no explicit public roadmap list; direction = deeper graph-native reasoning, more retrieval modes, managed Cognee Cloud.

## 8. Benchmarks (+ caveats)
- **BEAM** long-context: 0.79 @100K tokens; 0.67 @10M tokens (beats prior SOTA).
- **HotPotQA 0.93** (multi-hop).
- Context: structured recall (Cognee, Graphiti) beats chunk-based (Mem0) on multi-hop; **Mem0 removed its own graph** after its paper showed the graph variant lost on single/multi-hop recall, ran 3× slower, cost 2× tokens. (Vendor/comparison sources — treat as directional.)

## 9. What it is NOT / limitations
- Not a standalone LLM (depends on external LLM API; no offline LLM).
- Not just a RAG library (persistent graph reasoning + ontology).
- Docker required for CLI UI mode (not pure Python).
- Multimodal advertised but under-documented.
- Many pluggable backends = more setup/ops decisions than a single-store tool.

## 10. Positioning vs peers
- **Cognee** — multi-hop / deep-knowledge connection (research, medical, legal, enterprise RAG); HotPotQA 0.93; 14 retrieval modes.
- **Graphiti/Zep** — temporal fact tracking + enterprise compliance (SOC 2/HIPAA/GDPR), dual-timeline.
- **Mem0** — widest SDK/framework integration, simplest personal recall (chunk-based).

## 11. Hands-on
`docs-only` (2026-07-20). **TODO:** clone + inspect the ECL pipeline (`add/cognify/memify`), retrieval-mode implementations, and MCP server; try local `pip install cognee` + SQLite/Kuzu smoke (only needs an LLM key).

## 12. Sources
- https://github.com/topoteretes/cognee (README)
- https://arxiv.org/abs/2505.24478 (Markovic et al., 2025)
- https://www.cognee.ai/blog/deep-dives/knowledge-graph-memory-benchmarks
- https://codepointer.substack.com/p/agent-memory-systems-and-knowledge (Letta/Mem0/Graphiti/Cognee comparison)

## Facts (GitHub API, 2026-07-20)
Apache-2.0 · ⭐ **28,535** · created 2023-08-16 · pushed 2026-07-19 · not archived · not a fork.

_Last updated: 2026-07-20 · Researcher: Claude_
