---
name: Open Multi-Agent
slug: open-multi-agent
category: orchestrators
subtype: "2.2 Autonomous swarms & SDLC harnesses"
repo: https://github.com/open-multi-agent/open-multi-agent
site: https://open-multi-agent.com
maker: open-multi-agent
license_claimed: MIT
license_detected: MIT
stars: 6792
created: "2026-03"
language: TypeScript
maturity: Established
status: active
local: true
one_liner: "A TypeScript orchestration library where a coordinator plans a task DAG at runtime and runs it on any LLM, in your own environment — 'describe the goal, not the graph'."
tagline_quote: "Describe the goal, not the graph"
features:
  - "Runtime task DAG from a goal (runTeam); deterministic scheduler; inspectable graph"
  - "Plan preview / approve / freeze / replay + multi-agent consensus verification"
  - "Mix any model (cloud + local + Chinese providers) on one team; per-task routing"
  - "Built-in default-deny tools + custom defineTool; MCP; token budgets; checkpoint/resume"
  - "Local / offline / air-gapped with your own credentials; 3 runtime dependencies"
choose_when: "You want a library-level, air-gappable orchestrator with runtime planning, multi-model teams, and replay/consensus, embedded in a Node app."
avoid_when: "You want a UI/cockpit, a non-TS stack, or OS-level containment (shell/ACP tools run as host processes)."
cross_links: ["§7"]
hands_on: docs-only
last_verified: "2026-08-19"
---
# Open Multi-Agent — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → orchestration **library** (runtime task DAG) |
| Repo / site | https://github.com/open-multi-agent/open-multi-agent · open-multi-agent.com |
| License | MIT / MIT |
| ⭐ / created | 6,620 · 2026-03 (launched **2026-04-01**) |
| Architecture | TypeScript library (Node); coordinator → runtime task DAG → parallel exec → typed result; deterministic scheduler; **3 runtime dependencies** |
| Authority | caller-owned (no separate work-truth DB) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
A TypeScript orchestration framework where you **describe a goal, not a graph**: a coordinator plans the task DAG at runtime and runs it on any LLM, in your own environment.

## 2. Quotes (verbatim, from docs — attributed)
- Tagline: *"Describe the goal, not the graph."* / *"Multi-agent orchestration that runs in your own environment."*
- Architecture: *"A coordinator decomposes the request into a task DAG at runtime."*
- Control: *"Freeze and replay it, and verify with multi-agent consensus."*
- Providers: *"Mix any model: Cloud, local, and Chinese providers on one team."*
- Safety: *"Tools are default-deny and secrets auto-redacted."*
- Footprint: *"Three runtime dependencies keep it light enough for locked-down infrastructure."*
- Deployment: *"Local, offline, air-gapped, or your own servers, on your own credentials."*

## 3. Features
- **Runtime task DAG** from a goal (`runTeam(team, "Build a REST API")`); resolves deps; parallel independent tasks; synthesizes typed result; inspectable graph.
- **Plan preview / approve / freeze / replay** + **multi-agent consensus** verification.
- **Mix any model** (cloud + local Ollama + Chinese providers); coordinator routes each task to its assigned agent/model; fallback parser for local models emitting tool calls as text.
- Built-in tools (bash, file ops, grep); custom tools via `defineTool`; **MCP** support.
- Token budgets · retries · **context compaction** (token-aware) · checkpoint/resume · **Offline Run Viewer** dashboard.
- Execution modes: `runAgent` / `runTasks` / `runTeam`; OpenTelemetry via optional `@open-multi-agent/otel`.

## 4. ⚠️ Safety caveats (docs + corpus)
- Built-in tools are **default-deny**, secrets auto-redacted — BUT:
  - granted **shell + ACP tools are host processes** (host authority, not a sandbox);
  - **ACP auto-approves by default** unless overridden;
  - **missing usage tracking could bypass budget enforcement.**
- Runs in the user's own environment with user-controlled credentials.

## 5. Roadmap / status
- **Was:** launched **2026-04-01** (MIT) as a "describe the goal" runtime-DAG orchestrator.
- **Now (2026):** ⭐6.6k; production adoption (security-analysis platforms, PR-review agents, offline autonomous systems).
- **Ahead:** lightweight production harness layer for Node; provider/tool breadth.

## 6. What it is NOT / limitations
- Not graph-first (runtime coordination); not single-agent (*"Use an LLM toolkit alone when one agent call is enough"*).
- **TypeScript/Node only** (not language-agnostic).
- Dashboard is **offline-only** (cloud observability needs the OTel package).
- Shell/ACP host authority; ACP auto-approve + budget-bypass gaps must be configured.

## 7. Positioning
- **Open Multi-Agent** — library-level, air-gappable runtime-DAG orchestrator with multi-model teams + replay/consensus; embed in a Node app.
- vs AO/Agent Teams (UI cockpits), GasTown (swarm app), LangGraph/CrewAI (runtimes, §7).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** `runTeam()` a small goal with cloud+local model mix; freeze+replay; test default-deny tools + ACP approval override.

## 9. Sources
- https://github.com/open-multi-agent/open-multi-agent (README) · open-multi-agent.com
- ReviewedResearch.md (facts: MIT, ⭐6,620; safety caveats)

_Last updated: 2026-07-20 · Researcher: Claude_
