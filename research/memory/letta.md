---
name: "Letta"
slug: letta
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/letta-ai/letta-code
site: https://letta.com
maker: "Letta"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 3055
created: "2023-10"
language: TypeScript
maturity: Established
status: active
local: true
one_liner: "Framework for stateful agents with persistent, self-improving memory (editable memory blocks) plus background sleep-time compute; formerly MemGPT."
features:
  - "Memory blocks: main context · recall storage · archival storage; agent self-edits (human/persona)"
  - "Sleep-time compute: background agent refines memory during idle time"
  - "Agent Development Environment (ADE) inspects context window, memory blocks, tool calls"
  - "Letta Code — model-agnostic agent harness with persistent memory; local subprocess mode"
  - "Letta Code CLI · TS Agent SDK · desktop app · Slack; Postgres in server mode"
choose_when: "You want the agent and its memory as one managed, stateful system."
avoid_when: "You only need a memory layer under an existing orchestrator (over-couples you to Letta's runtime)."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Letta (formerly MemGPT) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → organizational/semantic — but really a **stateful-agent framework** |
| Repo (canonical) | https://github.com/letta-ai/letta-code — **current source** (agent harness, terminal UI, App Server, channels, desktop/web runtime) |
| Landing / history | `letta-ai/letta` (24,303⭐) — *"now serves as a landing page"*; retired V1 server preserved on its `archive` branch |
| Site / docs | letta.com · letta.com/blog |
| Former name | **MemGPT** (2023 UC-Berkeley research) |
| License | Apache-2.0 / Apache-2.0 (GitHub now machine-detects it — re-verified 2026-08-19) |
| Language / interfaces | Node.js 22.19+ (Letta Code CLI); TS Agent SDK; Postgres (server mode) |
| ⭐ / created | letta-code **3,055** · repo created 2025-10-25 · TypeScript · Apache-2.0 · very active — project origin 2023-10 as MemGPT; landing repo holds 24,303⭐ (re-verified 2026-08-19) |
| Authority | `suggestive` (memory) — but owns the agent runtime |
| Researched | 2026-08-19 · hands-on: **docs-only** |

## 1. What it is
Framework for **stateful agents with persistent, self-improving memory**. Memory is a first-class, agent-editable component. Model-agnostic. Deployment: local / self-hosted / cloud. Adopting Letta means adopting its agent model — it is not a drop-in memory library.

## 2. Memory architecture — "memory blocks"
OS-inspired hierarchy (from the MemGPT "LLM as OS" paradigm):
- **Main context** — in-context working memory the model sees.
- **Recall storage** — searchable conversation history.
- **Archival storage** — long-term store.
- **Labeled blocks** the agent **self-edits in its normal loop** — classically `human` (facts about the user) + `persona` (agent self-concept), extensible.

## 3. Sleep-time compute (differentiator)
A background ("sleep-time") agent reorganizes/refines memory during idle periods, **asynchronously**. Because it's not latency-sensitive, it can use a larger/slower model (e.g., chat on `gpt-4o-mini`, sleep-time refinement on `gpt-4`/Claude Sonnet) — improving both response time and memory quality vs MemGPT's single bundled agent.

## 4. Features
- Self-editing memory · skills · subagents · tool calling · model-agnostic.
- **Agent Development Environment (ADE)** — visual inspector into each agent's context window, memory blocks, and tool calls (Letta Cloud).
- **Letta Code** — model-agnostic agent *harness* with persistent memory (`npm i -g @letta-ai/letta-code`); local mode spawns as a subprocess (no external key needed for local).
- Interfaces: Letta Code CLI · TS Agent SDK (`@letta-ai/letta-agent-sdk`) · desktop app · Slack · self-hosted App Server.

## 5. Local/offline & dependencies
Local execution supported (SDK spawns Letta Code as a subprocess); Node 22.19+. Cloud backend needs a Letta API key; local backend does not. Server mode uses Postgres.

## 6. Roadmap
- **Was:** **MemGPT** (2023, UC-Berkeley — "LLMs as operating systems," memory paging) → company/product **Letta** (founded by the MemGPT authors). The old `letta-ai/letta` repo is now a **landing page** (V1 server retired to its `archive` branch); current source lives in **`letta-ai/letta-code`**.
- **Now (2026):** pivot to **Letta Code** (model-agnostic harness); ADE observability; sleep-time compute shipped; agent loop rearchitected (lessons from ReAct, MemGPT, Claude Code — see "Rearchitecting Letta's Agent Loop" + "Letta's Next Phase" blogs).
- **Ahead (stated):** memory shifting from DB-edit tools → **generalized computer-use over git-backed files ("MemFS" / context repositories)**; stronger sleep-time compute; **server-side sleep-time agents → client-side subagent system**.

## 7. What it is NOT / limitations
- Not a lightweight memory add-on — it's a whole agent framework.
- The `letta-ai/letta` repo is a **landing page** (retired V1 server on its `archive` branch); V1 SDKs deprecated → don't build new work on V1 surfaces; use `letta-ai/letta-code`.
- Concrete DB/memory internals sparse in public README (Postgres in server mode); the "framework vs component" ambiguity is the main adoption risk.

## 8. Hands-on
`docs-only` (2026-08-19). **TODO:** clone `letta-ai/letta-code` + inspect the memory-block and sleep-time implementation for a code-level pass (license needs no further check — Apache-2.0 is machine-detected at HEAD).

## 9. Sources
- https://github.com/letta-ai/letta-code (current source) · https://github.com/letta-ai/letta (landing README + `archive` branch)
- https://www.letta.com/blog/memory-blocks/ · /sleep-time-compute/ · /letta-v1-agent/ · /our-next-phase/
- https://www.letta.com/blog/agent-memory/
- MemGPT paper (2023, UC-Berkeley)

_Last updated: 2026-08-19 · Researcher: Claude_
