---
name: "agentmemory"
slug: agentmemory
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: null
site: https://pypi.org/project/agentmemory/
maker: "Moon (shawmakesmagic) / AutonomousResearchGroup"
license_claimed: "MIT (PyPI-era, unverifiable)"
license_detected: none
stars: null
created: "2023"
language: Python
maturity: Defunct
status: defunct
local: partial
one_liner: "Early (2023) easy agent-memory package (ChromaDB/Postgres) by Moon — now defunct on GitHub; PyPI frozen at v0.4.8 (Oct 2023)."
tagline_quote: "Easy-to-use memory for agents, document search, knowledge graphing and more"
features:
  - "ChromaDB (default local) + PostgreSQL backends"
  - "Semantic search + metadata filtering/tagging"
  - "DBScan clustering of memories by similarity"
  - "Epoch-based event logging; import/export"
choose_when: "Nothing — defunct and unmaintained (repo gone); use Mem0/Cognee/Memori/Supermemory instead."
avoid_when: "Any new work — the GitHub repo is gone and PyPI is frozen at Oct 2023."
hands_on: docs-only
last_verified: "2026-07-20"
---
# agentmemory — Deep Research Reference  ⚠️ LEGACY / DEFUNCT

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → org/semantic (simple vector memory) — **legacy** |
| Repo | `github.com/AutonomousResearchGroup/agentmemory` — **⚠️ NOT FOUND** (repo removed/moved as of 2026-07-20); the `elizaOS/agentmemory` mirror is also gone |
| PyPI | `agentmemory` **v0.4.8 (2023-10-15)** — no releases since |
| Author | **Moon (shawmakesmagic)** — later founded **ai16z / elizaOS** |
| License | unverifiable (repo gone; PyPI-era MIT) |
| Status | **⚠️ Defunct / legacy** |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** (repo not found) |

## 1. What it is (was)
An early (2023), easy-to-use agent memory library: "Easy-to-use memory for agents, document search, knowledge graphing and more." Popular in the first wave of agent frameworks; its author went on to build elizaOS.

## 2. Architecture / backends
- **ChromaDB** (default, local) + **PostgreSQL** (via `CLIENT_TYPE=POSTGRES` + `POSTGRES_CONNECTION_STRING`).
- Cloud deploy via Supabase (historical).

## 3. Features (historical)
- Memory create/search/update/delete; document search.
- Semantic search (embeddings) + metadata filtering/tagging.
- **DBScan clustering** of memories by similarity.
- **Epoch-based event logging**; import/export for persistence.

## 4. Status & roadmap
- **Was:** built by **Moon (shawmakesmagic)** under AutonomousResearchGroup (2023); a well-known early agent-memory lib.
- **Now (2026):** **GitHub repo not found** (removed/moved); PyPI frozen at **v0.4.8 (Oct 2023)**; author moved to **ai16z / elizaOS**.
- **Ahead:** none — effectively dead.

## 5. What it is NOT / limitations
- **Defunct** — GitHub repo not found; PyPI unmaintained since Oct 2023.
- Not suitable for new work; superseded by Mem0, Cognee, Memori, Supermemory, and elizaOS's own memory.

## 6. Hands-on
`docs-only` (2026-07-20) — repo not found; facts from PyPI + cached listings.

## 7. Sources
- https://pypi.org/project/agentmemory/ (v0.4.8, 2023-10-15)
- (GitHub `AutonomousResearchGroup/agentmemory` — 404 as of 2026-07-20)

_Last updated: 2026-07-20 · Researcher: Claude_
