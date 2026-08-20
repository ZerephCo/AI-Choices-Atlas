---
name: "GBrain"
slug: gbrain
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/garrytan/gbrain
site: null
maker: "Garry Tan"
license_claimed: MIT
license_detected: MIT
stars: 28743
created: "2026-04"
language: TypeScript
maturity: Prominent
status: active
local: partial
one_liner: "Self-hosted institutional memory — a git-versioned markdown brain repo + Postgres/pgvector index with a self-wiring typed-edge graph and cited answers."
features:
  - "Markdown brain-repo (git; diffable) synced to PGLite (<=50K pages) or Postgres 17 + pgvector"
  - "Self-wiring typed-edge graph extracted on write with zero LLM calls (+31.4 P@5)"
  - "Hybrid retrieval: HNSW vectors + BM25 + reciprocal-rank fusion; search vs think (cited)"
  - "Nightly 'dream' cycle: dedup, citation-fixing, salience, contradiction detection"
  - "CLI · MCP (stdio/HTTP + OAuth2.1); 30+ MCP tools; 43 skills"
choose_when: "You want operator-owned, auditable, version-controlled org/personal memory with citation discipline + MCP access."
avoid_when: "You need a plug-in SDK for a different framework, can't run Postgres at scale, or need >50K pages."
hands_on: docs-only
last_verified: "2026-08-19"
---
# GBrain — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → organizational / institutional (also personal) |
| Repo | https://github.com/garrytan/gbrain (default branch **`master`**) |
| Maker | **Garry Tan** — President & CEO, Y Combinator; built as his production agent brain |
| License | MIT / MIT |
| Runtime / install | Bun (`bun install -g github:garrytan/gbrain`) |
| Version | v0.41.x series |
| ⭐ / created | 26,622 · 2026-04 |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** (full `master` README read in depth) |

## 1. What it is
A knowledge-synthesis / institutional-memory layer: the agent's brain is a **git-versioned markdown repo** the operator owns, indexed into Postgres for search. Transforms raw pages into synthesized answers **with citations + gap analysis** across 100K+ pages. Production brain behind Garry Tan's OpenClaw + Hermes agents (146,646 pages · 24,585 people · 5,339 companies · 66 crons).

## 2. Architecture & storage
- **Primary store:** markdown files in a git "brain repo" — diffable, branchable, version-controlled, human-readable (vs opaque DB state).
- **DB layer:** **PGLite** (Postgres 17 via WASM, zero-config) for personal brains ≤~50K pages, or **full Postgres + pgvector** for shared/large. Repo synced into DB for retrieval; **git deletions → soft-deletes** in DB.
- **Contract-first:** a `BrainEngine` interface defines **~47 operations**; both PGLite and Postgres engines implement it, so CLI and MCP behave identically across deployments.

## 3. Retrieval
- Hybrid: **HNSW vectors (pgvector) + BM25 keyword + reciprocal-rank fusion**.
- **Self-wiring knowledge graph:** typed edges (`attended`, `works_at`, `invested_in`, …) extracted on **every write** — **zero LLM calls**. Reported **+31.4 P@5** over vector-only RAG.
- Two query modes: **`search`** (raw retrieval) and **`think`** (synthesized answers with explicit source citations).

## 4. Features
**Ingestion & capture:** `gbrain capture` (file/stdin), webhook ingest, mobile inbox (iOS Shortcuts, AirDrop, Drafts), **voice via Twilio + OpenAI Realtime** (phone calls → brain pages), email/calendar webhook handlers, third-party skillpacks (Granola, Linear, OCR).
**Enrichment:** auto-linking (typed edges) on write; **nightly "dream" cycle** — dedup, **citation fixing**, salience scoring, contradiction detection, cross-modal consistency check using **three frontier models**; entity extraction + timeline creation; signal detection (ideas, entities, time-sensitive todos).
**Multi-user / federated:** company/team brain with login-scoped access ("each person gets their own slice"); **zero information-leak** across reads (tested); **OAuth 2.1** + admin dashboard; federated brains with per-source mounting.
**Citation & quality:** all synthesized answers include source pages; **gap analysis** (what the brain doesn't know); contradiction detection; **NamedThingBench** eval; LongMemEval support.
**Cron & automation:** 24/7 idle enrichment; Postgres-native job queue (**"Minions"**, BullMQ-shape); durable sub-agents surviving crashes (two-phase persistence); shell jobs with audit + cascading timeouts; rate leases for outbound provider calls.
**Schema evolution (v0.40.7+):** agents evolve page types / relationships / fact-extraction rules via **14 `gbrain schema` verbs** + atomic MCP ops.

## 5. Interfaces & agent consumption
- **MCP:** stdio (`gbrain serve`) for local subprocess; HTTP (`gbrain serve --http`) with OAuth 2.1 + admin dashboard for remote agents. **30+ MCP tools** (search, synthesis, graph traversal, ingestion, brain ops).
- **Clients:** Claude Desktop/Code, Codex, Cursor, Perplexity, ChatGPT, Claude Cowork (team plan), Windsurf.
- **CLI verbs:** `query`, `think`, `search`, `capture`, `import`, `sync`, `schema`, job/cron management, `doctor`, `search --explain/diagnose`.
- **Agent bootstrap:** `INSTALL_FOR_AGENTS.md` lets agents self-install; two-command setup for Claude Code/Codex (zero server); single-command remote-brain connect with token auth.
- **43 curated markdown skills.**

## 6. Setup & dependencies
- **Local personal (~30 min):** `gbrain init --pglite` (DB in ~2s, no Docker/server); needs an embedding-provider key (OpenAI, ZeroEntropy, Voyage, Gemini… 16 providers); git repo auto-initialized.
- **Production/team:** Postgres 17+ with pgvector (Supabase or self-hosted); OAuth; optional reranker (ZeroEntropy default, or local llama-server).
- **Note:** PGLite has a macOS 26.x compatibility fix — use native Homebrew Postgres + pgvector there.

## 7. Roadmap
- **Was:** built by Garry Tan (YC) to run his own agents; open-sourced as an opinionated **OpenClaw/Hermes** agent brain.
- **Now (2026, v0.41.x):** very active. Recent: v0.41.37 (tag reconciliation add-only, schema-pack regex-backtracking detection, Windows migration fix); v0.41.27 (batch-retry self-heal on DB connection loss); v0.41.21/.19/.13 (judge-truncation + pricing-lookup fixes, bulk-write retry, per-source cron sync). v0.40.7 introduced **agent-driven schema evolution**.
- **Ahead (documented):** connect-existing-agents tutorials (Claude Code, Cursor, OpenClaw, Hermes); VC dealflow setup (founder scorecards, meeting prep); vault migration guides (Notion, Obsidian); **codebase-as-queryable-brain** indexing.

## 8. What it is NOT / limitations
- Not a drop-in memory SDK for arbitrary stacks — opinionated, OpenClaw/Hermes-oriented.
- Not zero-ops at scale (needs Postgres); not a work/task tracker.
- **PGLite:** single-writer (live MCP contends with big syncs); ~50K-page practical ceiling.
- Brain only sees data through **defined ingestion sources** — pages changed outside monitored channels stay invisible until explicit re-import.
- Auto-linking extracts only **explicit** wikilink/typed-edge markup — implicit entity mentions aren't auto-extracted.
- Full-text language must match a Postgres `pg_ts_config` (English default); custom langs need unaccent+stemmer setup.
- Single-maintainer origin (bus-factor) despite high star count.

## 9. Hands-on
`docs-only` (2026-07-20) — full `master` README read in depth (raw `main` 404'd because default branch is `master`). Not yet cloned/run. **TODO:** clone + inspect `BrainEngine` contract, dream-cycle, and MCP-tool implementations; attempt `gbrain init --pglite` smoke.

## 10. Sources
- https://github.com/garrytan/gbrain/blob/master/README.md (read in depth, 2026-07-20)
- https://github.com/garrytan/gbrain/blob/master/docs/guides/brain-vs-memory.md
- https://vectorize.io/articles/what-is-gbrain · https://vectorize.io/articles/gbrain-review
- https://www.marktechpost.com/2026/05/22/ (implement-GBrain tutorial)

_Last updated: 2026-07-20 · Researcher: Claude_
