---
name: "magic-context"
slug: magic-context
category: memory
subtype: "4.1 Project / task memory"
repo: https://github.com/cortexkit/magic-context
site: https://docs.cortexkit.io/magic-context
maker: "CortexKit"
license_claimed: MIT
license_detected: MIT
stars: 1799
created: "2026-03"
language: TypeScript
maturity: Established
status: active
local: true
one_liner: "The hippocampus for coding agents (CortexKit) — self-managing session memory with no compaction pauses and no forgetting across restarts."
tagline_quote: "Unbounded context. Memory that manages itself. One session, for life."
features:
  - "Capture: a Historian compresses history into tiered compartments + extracts durable knowledge"
  - "Consolidate: optional 'dreamer' verifies memories against the codebase during idle, merges dupes"
  - "Recall: cache-stable injection each turn + semantic search over memories/history/git"
  - "Cross-session and cross-harness memory pooling (shared store); temporal gap markers"
  - "OpenCode · Pi (>=0.74.0); desktop app; npx @cortexkit/magic-context setup"
choose_when: "You want compaction-free, self-managing long-session memory ('one session for life') on OpenCode/Pi."
avoid_when: "Your harness isn't supported yet, or you need codebase structure (codegraph) rather than session memory."
cross_links: ["§6", "§4.2"]
hands_on: docs-only
last_verified: "2026-08-19"
---
# magic-context (CortexKit) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`. Cross-links §6 Context reducers, §4.2 personal memory.

| | |
|---|---|
| Category / sub-type | Memory → 4.1 project/task (self-managing session memory) |
| Repo / docs | https://github.com/cortexkit/magic-context · docs.cortexkit.io/magic-context |
| Maker | **CortexKit** |
| License | **MIT** / MIT |
| ⭐ / created | 1,799 · 2026-03 · TypeScript |
| Clients | **OpenCode** · **Pi** (≥0.74.0) — shared DB across harnesses; desktop app |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"The hippocampus for coding agents, part of CortexKit. Unbounded context. Memory that manages itself. One session, for life." A self-managing memory layer that keeps a coding-agent session running with no compaction pauses and no forgetting across restarts.

## 2. Quotes (verbatim, from docs — attributed)
- Definition: *"The hippocampus for coding agents, part of CortexKit."*
- Tagline: *"Unbounded context. Memory that manages itself. One session, for life."*
- Promise: *"Your agent never stops to manage its context and never forgets."*
- Consolidation: *"Verify memories against the current codebase (paths, configs, patterns) and fix/remove stale facts."*

## 3. How it works (Capture · Consolidate · Recall)
- **Capture** — a **Historian** continuously compresses session history into tiered compartments and extracts durable knowledge (decisions, constraints, conventions) into project memory automatically.
- **Consolidate** — an optional **dreamer** agent runs during idle time to verify memories against the codebase, merge duplicates, and maintain docs.
- **Recall** — relevant memories + compressed history inject **cache-stably** each turn; agents can search across memories, conversation history, and git commits.

## 4. Features
- Cache-stable, deterministic decay rendering of old history (engineered around provider prompt caching — "pays for itself instead of re-billing your prefix").
- Cross-session **and cross-harness** memory pooling (shared store).
- Semantic search across memories, history, and git commits; temporal awareness (gap markers).
- Desktop app for memory browsing + diagnostics.
- Install: `npx @cortexkit/magic-context@latest setup` (auto-detects harnesses, disables built-in compaction).

## 5. CortexKit ecosystem
- A modular "brain": **Magic Context** (memory/hippocampus) · **AFT** (perception/sensorimotor) · **Alfonso** (planning/prefrontal) — one shared store pools memories across tools.

## 6. What it is NOT / limitations
- Session/agent memory (not a codebase structural graph — see codegraph/codebase-memory-mcp).
- Currently OpenCode + Pi harnesses (not yet broad MCP-client coverage).

## 7. Roadmap
- **Was:** created 2026-03.
- **Now (2026):** ⭐1.4k; MIT; Capture/Consolidate/Recall; OpenCode + Pi; desktop app.
- **Ahead:** more harnesses; the wider CortexKit brain (AFT, Alfonso).

## 8. Positioning
- **magic-context** — self-managing, compaction-free session memory ("one session for life") for coding agents.
- vs claude-mem (session memory, Claude Code hooks), codebase-memory-mcp/codegraph (code structure), Mem0 (personal).

## 9. Hands-on
`docs-only` (2026-07-20). **TODO:** `npx @cortexkit/magic-context setup` on OpenCode/Pi; run a long session; verify no compaction pauses + cross-session recall.

## 10. Sources
- https://github.com/cortexkit/magic-context (README) · docs.cortexkit.io/magic-context

_Last updated: 2026-07-20 · Researcher: Claude_
