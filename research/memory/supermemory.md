---
name: "Supermemory"
slug: supermemory
category: memory
subtype: "4.2 Personal memory"
repo: https://github.com/supermemoryai/supermemory
site: https://supermemory.ai
maker: "supermemoryai"
license_claimed: MIT
license_detected: MIT
stars: 28957
created: "2024-02"
language: TypeScript
maturity: Prominent
status: active
local: true
one_liner: "The Memory API for the AI era — a fast, scalable memory+context engine + app (RAG + memory + profiles + connectors), runnable fully local/air-gapped."
tagline_quote: "The Memory API for the AI era"
features:
  - "Memory Engine: fact extraction · update tracking · contradiction resolution · auto-forget"
  - "Hybrid Search: RAG + Memory in a single query; static + dynamic user profiles"
  - "OAuth connectors: Google Drive · Gmail · Notion · GitHub (real-time sync)"
  - "File processing: PDFs, images, videos, code → searchable chunks"
  - "Memory API + SDKs · MCP server · web app · browser ext · Raycast"
choose_when: "You want a turnkey memory API/app with personal-data connectors, unified RAG+memory, and optional air-gapped self-host."
avoid_when: "You only need a tiny embeddable lib, or want a temporal graph (Zep/Graphiti) or SQL-native store (Memori)."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Supermemory — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → personal (+ memory API / app) |
| Repo | https://github.com/supermemoryai/supermemory |
| Site / docs | supermemory.ai · supermemory.ai/docs |
| License | MIT / MIT |
| ⭐ / created | 28,957 · 2024-02-27 (pushed 2026-07-20 — very active) |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"The **Memory API for the AI era**" — a fast, scalable memory + context **engine and app**. Solves the "goldfish memory" problem: auto-extracts facts from conversations, builds evolving user profiles, resolves contradictions, auto-forgets expired info, and serves relevant context on demand through **one API that fuses RAG + memory**.

## 2. Architecture
- **Backend API:** Hono + **PostgreSQL + Drizzle ORM**, deployed as serverless functions; handles memory storage, search, user profiles.
- **Clients:** Web app (Next.js on Cloudflare), browser extension (WXT), Raycast extension, **MCP server**.
- Multi-provider AI: OpenAI, Anthropic, Google, Cerebras.
- OAuth-based connectors to external services.

## 3. Features
- **Memory Engine:** fact extraction · update tracking · **contradiction resolution** (supersession — "I moved to SF" supersedes "I live in NYC") · auto-forget expired.
- **User Profiles:** static facts + dynamic context.
- **Hybrid Search:** RAG + Memory in a single query.
- **Connectors (OAuth real-time sync):** Google Drive, Gmail, Notion, GitHub.
- **File processing:** PDFs, images, videos, code → searchable chunks.
- One API to add memory + RAG + profiles + connectors to agents/apps.

## 4. Interfaces
Memory API + SDKs · **MCP server** · web app · browser extension · Raycast extension.

## 5. Local/offline & deployment
Can run **fully locally**; deploy **on-prem, your cloud, or fully air-gapped** with the same API + SLAs; self-host on bare metal or Kubernetes; **zero data leaves your perimeter**. Needs an LLM provider + Postgres.

## 6. Roadmap
- **Was:** started 2024-02 as a personal "second brain" memory tool.
- **Now (2026):** evolved into "the Memory API for the AI era" (engine + app + SDKs + connectors); ⭐28.5k; daily commits; strong LongMemEval numbers; air-gapped/on-prem deploy.
- **Ahead:** memory-API platform; more connectors; enterprise SLAs.

## 7. Benchmarks (+ caveats)
Vendor-reported: **LongMemEval 95% Recall@15** using only ~720 tokens of context (**99.4% context reduction**); **sub-400ms** latency. Category recall: Knowledge Updates 99%, Assistant 100%, User 97%, Multi-session 93%, Temporal 91%, Preference 90%. Treat as directional (vendor).

## 8. What it is NOT / limitations
- Not just a vector store — it unifies RAG + memory + profiles + connectors.
- Not a work/task tracker; not zero-LLM.
- Broad surface (engine + app + connectors) = more to run/operate.
- Benchmarks are vendor-sourced.

## 9. Positioning vs peers
- **Supermemory** — turnkey memory **API + app** with personal-data connectors + unified RAG/memory; air-gapped self-host.
- vs Mem0 (SDK/library), Memori (SQL-native), Cognee/Graphiti (graph/temporal), LangMem (LangGraph).

## 10. Hands-on
`docs-only` (2026-07-20). **TODO:** self-host smoke (Postgres + LLM key); try the MCP server + a connector.

## 11. Sources
- https://github.com/supermemoryai/supermemory (README) · https://supermemory.ai/docs/intro
- https://deepwiki.com/supermemoryai/supermemory (architecture/API)

_Last updated: 2026-07-20 · Researcher: Claude_
