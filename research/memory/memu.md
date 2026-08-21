---
name: "memU"
slug: memu
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/NevaMind-AI/memU
site: https://memu.pro
maker: "NevaMind AI"
license_claimed: NOASSERTION
license_detected: NOASSERTION
stars: 14326
created: "2025-07"
language: Python
maturity: Prominent
status: active
local: partial
one_liner: "Cross-agent personal memory for 24/7 proactive agents — a self-organizing markdown file system with intent capture and ~10x token reduction; embeddings-only."
tagline_quote: "Personal memory across agents"
features:
  - "Self-organizing file system: resources (raw) → memory items (typed notes) → categories"
  - "Markdown-native; embeddings are the only model calls (no LLM extraction)"
  - "Proactive intent capture; ~10x token reduction (~1/10 context)"
  - "Multimodal ingestion (conversations, documents, images)"
  - "Cross-agent: all hosts share one store + embedding space (~/.memu/config.env)"
choose_when: "You run 24/7 proactive agents wanting cheap (embeddings-only), markdown-native, cross-agent memory with intent capture."
avoid_when: "You need a clean OSI license today (NOASSERTION) or heavy structured/graph extraction (Cognee/Graphiti)."
hands_on: docs-only
last_verified: "2026-08-21"
---
# memU — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → personal (cross-agent) |
| Repo | https://github.com/NevaMind-AI/memU (the separate `memU-server` wrapper repo now 404s — removed or made private; re-checked 2026-08-21) |
| Maker | **NevaMind AI** |
| License | **NOASSERTION** (⚠️ no clean SPDX — verify terms) |
| ⭐ / created | 14,326 · 2025-07-29 (pushed 2026-08-20 — very active; re-verified 2026-08-21) |
| Authority | `suggestive` |
| Researched | 2026-08-21 · hands-on: **docs-only** |

## 1. What it is
"**Personal memory across agents**" — a compact (~500-line) **memory harness for 24/7 proactive AI agents** (openclaw-style). Structured storage + intent capture + ~10× token reduction, designed for long-running/always-online use while keeping token cost low.

## 2. Memory organization — self-organizing file system
- **Resources** — raw files an agent ingests.
- **Memory items** — typed, structured notes extracted from sources.
- **Categories** — folders that group related memories.
Navigable, self-organizing; agents write what's worth keeping as **Markdown**.

## 3. How it works
memU stores it, embeds it, and retrieves ranked context in a **single call** — **embeddings are the only model calls it makes** (no separate LLM extraction step). Cuts context to ~1/10 of comparable usage.

## 4. Features
- **Proactive intent capture** — continuously understands user intent; the agent can anticipate/act without an explicit command.
- **~10× token reduction** (~1/10 context).
- **Multimodal ingestion** — conversations, documents, images → structured memory.
- **Cross-agent memory** — all hosts share one store + one embedding space via `~/.memu/config.env`; what one host learns, another retrieves.
- `memU-server` backend wrapper (its separate repo now 404s — removed or private as of 2026-08-21; server workflows are folded into the main repo docs).

## 5. Local/offline & dependencies
Local markdown files; the only external model calls are **embeddings**. No heavy LLM extraction.

## 6. Roadmap
- **Was:** built by **NevaMind AI** (Jul 2025) as a compact memory framework for proactive/always-on agents (openclaw/moltbot/clawdbot).
- **Now (2026-08):** ⭐14k; very active; self-organizing FS memory; cross-agent; multimodal (the former separate memU-server repo is gone — 404, re-checked 2026-08-21).
- **Ahead:** proactive-agent memory infrastructure; broader host integration.

## 7. What it is NOT / limitations
- Not an LLM-heavy extraction pipeline (embeddings-only by design → less structured than graph memories).
- Not a task tracker.
- **License unresolved** (NOASSERTION) — verify before reuse.

## 8. Positioning
- **memU** — markdown-native, embeddings-only, cross-agent personal memory for proactive/always-on agents; cheap + simple.
- vs Mem0 (LLM extraction), Cognee/Graphiti (graph), GBrain (markdown but Postgres-indexed + richer), Supermemory.

## 9. Hands-on
`docs-only` (2026-08-21). **TODO:** run the framework (+ server mode); inspect the resources/items/categories FS + `config.env` cross-agent store.

## 10. Sources
- https://github.com/NevaMind-AI/memU (README, incl. its current self-hosted/server documentation) · https://memu.pro (official homepage per repo metadata, verified HTTP 200 2026-08-21)
- Former separate `memU-server` repo: unavailable (gh api 404, 2026-08-21) — removed or made private; whether it was merged upstream is unconfirmed. Server-mode usage is documented in the main repo today.

_Last updated: 2026-08-21 · Researcher: Claude_
