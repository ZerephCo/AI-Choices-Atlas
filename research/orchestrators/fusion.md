---
name: Fusion
slug: fusion
category: orchestrators
subtype: "2.2 Autonomous swarms & SDLC harnesses"
repo: https://github.com/Runfusion/Fusion
site: https://runfusion.ai
maker: Runfusion
license_claimed: MIT
license_detected: MIT
stars: 1135
created: "2026-04"
language: TypeScript
maturity: Established
status: preview
local: true
one_liner: "'Your Software Factory' — describe what you want and a team of AI agents plans, builds, reviews, and ships it across a 24/7 multi-node mesh with visual gates."
tagline_quote: "Your Software Factory"
features:
  - "Missions hierarchy (Mission to Task) + autopilot + validation contracts"
  - "Visual Workflow Editor + built-in workflows (Coding, Quick-fix, Review-heavy, Stepwise…)"
  - "Gates/policy: oversight levels (off/observe/steer/autonomous), approval gates, quality gates"
  - "440+ agents across 16 prebuilt companies (Paperclip companies.sh); mailbox + chat rooms"
  - "Command Center (11 analytics views); multi-node mesh; PostgreSQL; Desktop/Mobile/Web/CLI (fn)"
choose_when: "You want to experiment with a broad, mobile-capable, multi-node software factory with rich missions and a strong observability Command Center, accepting preview-grade reliability."
avoid_when: "You need established authority/safety guarantees (it relies on human oversight, not enforcement) or proven completion metrics."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Fusion — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → software-factory workflow / control plane (swarm) |
| Repo / site | https://github.com/Runfusion/Fusion · runfusion.ai · npm `@runfusion/fusion` |
| Maker | **Runfusion** |
| License | MIT / MIT |
| ⭐ / created | 1,135 · 2026-04 · "early preview, shipping weekly" |
| Storage | **PostgreSQL** (embedded zero-config; SQLite migration; multi-project) |
| Authority | outer controller (but authority semantics not established — see caveats) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Your Software Factory — build faster and better with multi-node agents that work 24/7." A swarm of AI agents that specify/plan/execute/review every task across isolated git worktrees, with a Command Center watching every token, agent, and dollar.

## 2. Quotes (verbatim, from docs — attributed)
- Headline: *"Describe what you want—a team of AI agents plans, builds, reviews, and ships it."*
- Headline: *"An assembly line for code that runs across tasks, agents, missions, git, files."*
- Multi-node: *"Laptop, Mac mini, Linux server, cloud VM, phone—every node is a peer."*
- Agent companies: *"Import a team. Run it autonomously for weeks. 440+ agents across 16 companies."*
- Workflow: *"Plan → Review → Execute → Review cycle for each task step."*

## 3. Architecture
- **Pipeline:** Planning → Todo → In Progress (plan/review/execute/review per step) → In Review → Done.
- **Visual Workflow Editor:** custom columns, typed settings, per-step parse/execute/review graph nodes; built-ins (Coding, Quick-fix, Review-heavy, Stepwise, Compound Engineering).
- **Distributed 24/7:** multi-node mesh (laptop/server/cloud/phone peers) with live state sync; worktree-isolated parallel tasks (`fusion/{task-id}` branches).

## 4. Features
- **Missions** hierarchy (Mission→Milestone→Slice→Feature→Task) + autopilot + validation contracts.
- **Gates/policy:** planner oversight levels (`off`/`observe`/`steer`/`autonomous`); typed triage thresholds; approval gates; auto-merge controls; pre-merge (blocking) + post-merge (informational) quality gates; opt-in Browser Verification.
- **440+ agents / 16 prebuilt "companies"** (Paperclip `companies.sh` standard); inter-agent mailbox + chat rooms + heartbeat.
- **Command Center:** 11 analytics views (tokens/cost/autonomy/per-agent output/model mix/anomaly detection); CSV/OpenTelemetry export.
- Models: dual-scope (global+project); 5 lanes (Executor/Planning/Validator/Merger/Title). Research runs (web/GitHub/local-docs/LLM synthesis). Plugins: Hermes, Paperclip, OpenClaw (experimental).

## 5. Interfaces & platforms
Desktop (Electron: macOS/Windows/Linux) · **Mobile** (iOS/Android via Capacitor + PWA) · Web · CLI (`fn` binary + npm) · Express REST API.

## 6. ⚠️ What it is NOT / corpus caveats
Doc 28: *"Authority semantics and behavioral reliability not established."* Specifically:
- **No programmatic guarantee** agents refuse unsafe ops / enforce hard policy — relies on **human oversight**, not enforcement.
- **No published metrics** on planning accuracy, hallucination, or completion rates.
- Merge/PR + destructive actions require explicit human confirmation.
- **Experimental runtimes** (Hermes/Paperclip/OpenClaw plugins; APIs may shift between minor releases).

## 7. Roadmap
- **Was:** built by Runfusion (2026-04) as an open-source multi-node software factory.
- **Now (2026):** ⭐987; "early preview, shipping weekly"; 440+ agents; Command Center; mobile.
- **Ahead:** no published roadmap (weekly shipping).

## 8. Positioning
- **Fusion** — broad, mobile-capable, multi-node software factory + strong observability; preview-grade reliability.
- vs Paperclip (company plane; Fusion imports its `companies.sh`), GasTown (Beads swarm), Agent Teams AI (orgs), Tutti/Bernstein (harnesses).

## 9. Hands-on
`docs-only` (2026-07-20). **TODO:** install (`fn` CLI / Electron); import a company; run a mission with gates; watch the Command Center; test a merge gate + human confirm.

## 10. Sources
- https://github.com/Runfusion/Fusion (README, docs) · runfusion.ai
- ReviewedResearch.md / Doc 28 §13.3 (authority/reliability-not-established caveat)

_Last updated: 2026-07-20 · Researcher: Claude_
