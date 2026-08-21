---
name: "Memori"
slug: memori
category: memory
subtype: "4.2 Personal memory"
repo: https://github.com/MemoriLabs/Memori
site: https://memorilabs.ai
maker: "Memori Labs (org MemoriLabs; formerly under GibsonAI branding)"
license_claimed: "open-source (claimed)"
license_detected: NOASSERTION
stars: 16154
created: "2025-07"
language: Python
maturity: Prominent
status: active
local: partial
one_liner: "SQL-native memory engine — persistent agent memory in standard SQL (SQLite/Postgres/MySQL), no vector DB, portable and queryable."
features:
  - "SQL-native (SQLite/Postgres/MySQL); no vector store; SQLite export = zero lock-in"
  - "Two modes: Conscious Ingest (start injection + 6h pattern analysis) + Auto Ingest (per-query)"
  - "Universal recording → Pydantic entity extraction + categorization → context injection"
  - "LLM-agnostic; enterprise deploy (cloud/single-tenant/VPC/on-prem)"
choose_when: "You want to store memory in the SQL database you already run (portability, queryability, cost) with structured recall."
avoid_when: "You need strong semantic-similarity/graph retrieval, or a clean OSS license today (NOASSERTION)."
hands_on: docs-only
last_verified: "2026-08-21"
---
# Memori — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → personal + production/org (**SQL-native**) |
| Repo | https://github.com/MemoriLabs/Memori (**formerly `GibsonAI/memori`** — relocated) |
| Maker | **GibsonAI** (database-AI company) → MemoriLabs |
| License | claims open-source / **NOASSERTION** (no clean SPDX at HEAD — ⚠️ verify terms) |
| ⭐ / created | 16,154 · 2025-07-24 (pushed 2026-08-19 — re-verified 2026-08-21) |
| Authority | `suggestive` |
| Researched | 2026-08-21 · hands-on: **docs-only** |

## 1. What it is
An **SQL-native memory engine** for LLMs/agents: persistent, structured memory stored in a **standard SQL database** (SQLite / PostgreSQL / MySQL) instead of a vector DB. LLM-agnostic; turns agent execution + conversation into structured, queryable, portable state for production systems.

## 2. Architecture — the SQL-native bet
Pipeline: **universal recording** (auto-capture all LLM conversations) → **Pydantic-based entity extraction + categorization** (a "Memory Agent") → **structured storage** in SQLite/Postgres/MySQL → **context injection** of relevant memories into future prompts.
Deliberately **no vector store / no proprietary embeddings** — uses structured entity extraction + relationship mapping + SQL-based retrieval for transparent, portable, queryable memory. Horizontally scalable via ordinary SQL.

## 3. Two operating modes
- **Conscious Ingest** — one-shot injection of essential memories at conversation start, with **background pattern analysis every 6 hours** (mimics human short-term working memory).
- **Auto Ingest** — dynamically retrieves additional relevant memories per query.

## 4. Features
- SQL-native (SQLite/Postgres/MySQL); data portable + queryable; export to SQLite (zero vendor lock-in).
- Structured entity extraction (Pydantic) + relationship mapping.
- LLM-agnostic universal recording + context injection.
- Enterprise deploy: managed cloud / single-tenant cloud / VPC / on-premises; works with existing data infra ("no rip-and-replace").

## 5. Interfaces
Python; automatic conversation recording + memory injection into the LLM call path.

## 6. Local/offline & dependencies
SQLite runs fully local; **entity extraction still needs an LLM**. So "offline" = local SQL, but LLM calls require a provider.

## 7. Roadmap
- **Was:** released by **GibsonAI** (~Sep 2025) as an open-source SQL-native memory engine; repo later relocated to **MemoriLabs/Memori**.
- **Now (2026):** ⭐15.6k; enterprise deploy modes; active community OSS effort (see Discussion #103 "Join the Memori OSS Journey").
- **Ahead:** community-built memory engine; deeper enterprise data-infrastructure integration.

## 8. Claims / benchmarks (+ caveats)
Vendor-reported: **80–90% cost reduction** vs vector-DB solutions; claims to **outperform Zep, LangMem, Mem0**; ~67% smaller prompt vs Zep; ~20× lower context cost vs full-context prompting. **Treat as vendor-reported / directional** — not independently verified here.

## 9. What it is NOT / limitations
- **Not** a vector/graph memory — SQL-only trades semantic-similarity breadth for structure/portability/cost.
- Not zero-LLM (extraction needs an LLM).
- **License unresolved** — GitHub detects NOASSERTION despite "open-source" positioning; verify actual terms before reuse.
- Superiority benchmarks are vendor-sourced.

## 10. Positioning vs peers
- **Memori** — SQL-native, portable/queryable, cost-focused, enterprise-deployable; structured (not semantic-vector) recall.
- vs Mem0 (vector), Cognee/Graphiti (graph), LangMem (LangGraph), Supermemory.

## 11. Hands-on
`docs-only` (2026-08-21). **TODO:** `pip install` + SQLite smoke (needs LLM key); **verify LICENSE terms**; inspect the Memory-Agent extraction + injection code.

## 12. Sources
- https://github.com/MemoriLabs/Memori (README) · https://memorilabs.ai (official homepage per repo metadata) · https://memorilabs.ai/docs (official docs) · https://memorilabs.ai/docs/memori-byodb/ (direct SQL-native/BYODB doc — verified HTTP 200, 2026-08-21; supersedes the legacy GibsonAI hosts)
- https://www.marktechpost.com/2025/09/08/gibsonai-releases-memori-... (launch)
- https://github.com/GibsonAI/memori/discussions/103 (OSS journey)

_Last updated: 2026-08-21 · Researcher: Claude_
