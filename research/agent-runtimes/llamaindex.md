---
name: LlamaIndex
slug: llamaindex
category: agent-runtimes
subtype: "7.2 Data / RAG & agent framework"
repo: https://github.com/run-llama/llama_index
site: https://www.llamaindex.ai
maker: LlamaIndex (run-llama)
license_claimed: MIT
license_detected: MIT
stars: 51749
created: "2022-11"
language: Python
maturity: Prominent
status: active
local: true
one_liner: "Widely-used open-source data/RAG framework for LLM apps — ingest, index, and retrieve over your data, with agent workflows on top. Connector-rich (LlamaHub); provider- and store-agnostic. MIT."
tagline_quote: "LlamaIndex is the leading document agent and OCR platform."
features:
  - "Ingest + index your data (docs, DBs, APIs); retrieval/RAG pipelines"
  - "Agent workflows (function-calling, ReAct, multi-agent) over your data"
  - "Hundreds of connectors (LlamaHub); provider- and vector-store-agnostic"
  - "OSS core is MIT/free; optional commercial LlamaCloud for hosted parsing"
choose_when: "You're building a retrieval/RAG-heavy app or a data agent and want a mature, connector-rich framework."
avoid_when: "You want a lightweight agent-orchestration runtime (LangGraph/CrewAI) without the data/RAG surface."
cross_links: ["§7", "§4", "§6"]
hands_on: docs-only
last_verified: "2026-08-20"
---
# LlamaIndex — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Agent runtimes → data / RAG framework with agent workflows |
| Repo / site | https://github.com/run-llama/llama_index · https://www.llamaindex.ai |
| Maker | **LlamaIndex (run-llama)** |
| License | **MIT** / MIT (OSS core) |
| ⭐ / created | **51,749** ⭐ · created 2022-11 · Python · active |
| Access | **Free** — MIT open-source core; optional paid LlamaCloud for hosted document parsing |
| Runs local | **✅** provider- and store-agnostic (local models/stores possible) |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
A mature, **connector-rich open-source framework for data-centric LLM apps**: ingest and index your data (documents, DBs, APIs), build **retrieval/RAG** pipelines, and layer **agent workflows** (function-calling, ReAct, multi-agent) over them. The OSS core (`llama_index`, MIT) is free; the company also offers commercial hosted document parsing (LlamaCloud).

## 2. Quotes (verbatim — attributed)
- Repo description: *"LlamaIndex is the leading document agent and OCR platform."*

## 3. Features
- **Data ingestion + indexing**; retrieval/RAG pipelines.
- **Agent workflows** over your data (function-calling, ReAct, multi-agent).
- **LlamaHub** — hundreds of connectors; provider/vector-store agnostic.
- **MIT** OSS core; optional paid hosted parsing.

## 4. Choose / avoid
- **Choose it when** you're building a retrieval/RAG-heavy app or data agent and want a mature, connector-rich framework.
- **Avoid when** you want a lightweight agent-orchestration runtime (LangGraph/CrewAI) without the RAG surface.
- Related: overlaps memory/retrieval (§4) and context assembly (§6).

## 5. Sources
- https://github.com/run-llama/llama_index (GitHub API: 51,749 ⭐, MIT, Python, created 2022-11) · https://www.llamaindex.ai
- Discovery add (2026-07-26); satisfies the free/no-credit-card standard (MIT OSS core).

_Last verified: 2026-08-20 · verdict: 🟢 active · Researcher: Claude_
