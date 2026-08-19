---
name: Tutti
slug: tutti
category: orchestrators
subtype: "2.2 Autonomous swarms & SDLC harnesses"
repo: https://github.com/nutthouse/tutti
site: https://tutti-ai.com
maker: nutthouse
license_claimed: MIT
license_detected: MIT
stars: 112
created: "2026-03"
language: Rust
maturity: Emerging
status: active
local: true
one_liner: "A typed, checkpointed workflow harness — 'Terraform-style agent operations for AI coding tools': intake, execute, review, gate, record, with a run ledger."
tagline_quote: "Terraform-style agent operations for AI coding tools"
features:
  - "Typed compositional workflows (tt run/verify); artifact pipeline; checkpoints + deterministic recovery"
  - "Agent management (spawn/terminate, git worktree isolation, diff/land/PR); schedules; hook chaining"
  - "Gate stage — required checks, resolved review threads, approval state, cost/policy limits"
  - "Observability (tt usage, watch mode) + factory-floor dashboard (:4040, SSE)"
  - "Rust CLI (~25 cmds) + REST API/SSE; runtimes: Claude Code, Codex, Aider, OpenClaw"
choose_when: "You want a Terraform-style, gated, resumable ops layer over multiple CLI agents with a real run ledger, and coordination (not model quality) is the bottleneck."
avoid_when: "Single-agent/small work, non-Rust/tmux environments, or you need the full advertised surface today (implementation trails the docs)."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Tutti — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → deterministic governed-run harness ("operations layer") |
| Repo / site | https://github.com/nutthouse/tutti · tutti-ai.com |
| Maker | **nutthouse** |
| License | MIT / MIT (README; note: some materials say Apache-2.0 — verify at HEAD) |
| ⭐ / created | 102 · 2026-03 · **v0.10.x** (May 2026) |
| Requires | Rust toolchain (`cargo install tutti`) · tmux · ≥1 AI coding CLI |
| Authority | outer controller (run ledger) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
*"Terraform-style agent operations for AI coding tools. Define your agent team, run repeatable workflows, track every artifact and gate."* An **operations layer** around agent work — not a generic agent framework.

## 2. Quotes (verbatim, from docs — attributed)
- Tagline: *"Terraform-style agent operations for AI coding tools."*
- Positioning: *"Not another generic agent framework. Tutti is the operations layer around agent work."*
- Recovery: *"Orchestration state machine + run ledger for deterministic recovery."*
- When not to: *"A single agent is often the better choice when the repo is small…"*

## 3. Architecture — typed compositional workflow
- **Workflow steps:** prompt · command · ensure_running · workflow (nested) · review · land — with explicit dependency graphs.
- **Artifact pipeline:** glob capture → named outputs → downstream injection via `{{output.name.path}}`.
- **Checkpoints:** `.tutti/state/workflow-checkpoints/<run_id>.json` → `tt run --resume <run_id>`.
- **State machine + run ledger** for deterministic recovery; policy gates before tool execution; **merge gate** on `land` (GitHub PR checks + resolved threads).
- Stages (IaC-style): **Intake → Execution → Review → Gate → Record.**

## 4. Features
Agent mgmt (spawn/terminate, **git worktree isolation**, session persistence, diff/land/PR) · automation (`tt run`/`tt verify`, schedules, hook chaining) · observability (`tt usage`, watch mode, run telemetry) · **factory-floor web dashboard (:4040)** with SSE + Agent Focus Mode · resilience (auth/rate-limit detection, retry/backoff, **profile rotation/fallback**) · opt-in permissions (command allowlist, Claude/Codex constrained mode) · tool packs (`tt doctor`) · handoff packets · multi-profile subscription/capacity/concurrency.

## 5. Runtimes & interfaces
- **Runtimes:** Claude Code (primary), Codex, Aider, OpenClaw (Gemini CLI + custom planned).
- **Intake:** GitHub / Linear / Jira / local queue / webhook. **Review:** CodeRabbit / human / CI.
- **Interfaces:** Rust CLI (~25 commands) · REST API (`/v1/*`) + SSE · web dashboard.

## 6. ⚠️ Corpus caveat
Doc 28 §13.3 flagged Tutti as having a **"smaller implementation/test corpus than [its] advertised surface"** — the roadmap marks many features planned/in-progress. Treat advertised capabilities as aspirational until verified in source.

## 7. Roadmap
- **Was:** started **March 2026** by nutthouse ("no stealth, rebrand, or rewrite"); Rust; on crates.io.
- **Now (2026):** ⭐102; v0.10.x; core CLI + adapters + artifact pipeline + dashboard + gates + issue-claim leases built.
- **Ahead (stated):** context-health monitoring; `tt run --direct`; pluggable intake/review adapters; provider failover/rotation; cost tracking/attribution; community phrase/arrangement sharing.

## 8. What it is NOT / limitations
- Not a generic agent framework; not a model-quality improver ("strongest when coordination is the bottleneck, not raw model quality").
- Not for tightly-coupled small tasks (a single agent is often better); work must split into clean lanes.
- Rust + tmux prerequisites; small/young (⭐102); implementation trails advertised surface.

## 9. Positioning
- **Tutti** — Terraform-style, gated, resumable ops layer over CLI agents with a run ledger.
- vs Bernstein (audit-grade determinism), MartinLoop (lighter governed run), Sortie (dispatcher), Open Multi-Agent (library).

## 10. Hands-on
`docs-only` (2026-07-20). **TODO:** `cargo install tutti`; define a 3-step workflow with a `land` gate; test `tt run --resume` + the dashboard.

## 11. Sources
- https://github.com/nutthouse/tutti (README) · tutti-ai.com
- ReviewedResearch.md / Doc 28 §13.3 (surface > implementation caveat)

_Last updated: 2026-07-20 · Researcher: Claude_
