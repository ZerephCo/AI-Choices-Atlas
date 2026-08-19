---
name: MartinLoop
slug: martinloop
category: orchestrators
subtype: "2.2 Autonomous swarms & SDLC harnesses"
repo: https://github.com/Keesan12/martin-loop
site: https://martinloop.com
maker: Keesan12
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 44
created: "2026-04"
language: TypeScript
maturity: Preview
status: active
local: true
one_liner: "A governed-run layer — a Ralph loop with brakes — that gives AI coding agents budgets, stop conditions, rollback rules, and signed receipts: task contract, caps, verify, rollback."
tagline_quote: "Gives AI coding agents budgets, stop conditions, rollback rules, and receipts"
features:
  - "Hard budget caps (USD/token/iteration) — stop the next attempt before a configured limit"
  - "Verifier gates (--verify); policy enforcement (unsafe commands, risky paths, secret-like inputs)"
  - "Rollback-aware rules (no silent unsafe changes); JSONL run records + evidence summaries"
  - "Local HMAC-signed receipts (verified/tamper_detected/unsigned) + JSON/Markdown proof-cards"
  - "13-class failure taxonomy; MCP; agents: Claude CLI, Codex, Gemini, direct/OpenAI-compatible"
choose_when: "You want to put brakes on autonomous Ralph-style loops with budget caps, verifier gates, rollback, and inspectable receipts — a lighter alternative to Bernstein."
avoid_when: "You need independent (not local-HMAC) attestation, a non-Node stack, or audit-grade determinism."
cross_links: ["§9"]
hands_on: docs-only
last_verified: "2026-08-19"
---
# MartinLoop — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → governed-run harness (lightweight; "Ralph loop with brakes") |
| Repo / site | https://github.com/Keesan12/martin-loop · martinloop.com |
| Maker | **Keesan12** (open-core: Apache core + commercial tiers) |
| License | Apache-2.0 / Apache-2.0 (core) |
| ⭐ / created | 39 · 2026-04 · **v0.4.5** (MCP 0.3.7) |
| Requires | Node.js 20+ |
| Authority | outer controller (task contract + receipts) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
A governance/control layer that makes AI coding agents safe to scale: "assign work, cap spend, enforce policy, verify output, roll back failures, learn from loops, and prove ROI." *"Built from thousands of agent runs where the problem was not intelligence—it was uncontrolled execution."*

## 2. Quotes (verbatim, from docs — attributed)
- Definition: *"MartinLoop gives AI coding agents budgets, stop conditions, rollback rules, and receipts."*
- Philosophy: *"Built from thousands of agent runs where the problem was not intelligence—it was uncontrolled execution."*
- Braked loop: *"keeps useful part of loop, then adds brakes: stop before budget overspend."*
- Persistence: *"Each loop record is locally signed (HMAC, per-runs-root key)…"*

## 3. Architecture (layers)
- **Task Contract:** objective, verifier plan, repo root, allowed/denied paths, acceptance criteria, workspace, project, budget.
- **Policy & Budget:** defaults from `martin.config.yaml`; CLI overrides; **preflight blocks attempts exceeding policy**.
- **Agent Adapters:** Claude CLI, Codex CLI, Gemini CLI, direct-provider, verifier-only.
- **Safety & Verification:** scope checks, verifier-command validation, prompt integrity, grounding.
- **Persistence:** JSONL run records + evidence summaries + repo-backed artifacts; **local HMAC signing per runs-root key**; integrity verdict `verified` / `tamper_detected` / `unsigned`.

## 4. Features
Hard **USD/token/iteration budget caps** · verifier gates (`--verify`, e.g. `npm test`) · policy enforcement (unsafe commands, risky paths, secret-like inputs) · **13-class failure taxonomy** · run receipts (stop reason, verifier evidence, budget posture) · **rollback-aware rules** · local proof receipts (JSON + Markdown + proof-card images) · MCP integration · audit records · compact run summaries · **MartinLoop Arcade** (terminal Space Invaders during long runs).

## 5. Supported agents & interfaces
Claude CLI · Codex CLI · Gemini CLI · direct-provider · OpenAI-compatible · verifier-only. Interfaces: CLI (`npx martin-loop`), SDK (`npm i martin-loop`), MCP (`@martinloop/mcp`), config `martin.config.yaml`.

## 6. ⚠️ What it is NOT / corpus caveats
- **Local HMAC signing is NOT independent third-party attestation.**
- **Cannot prevent modifications to run records before signing is first applied.**
- **Preflight checks may not bind objective/verifier across all code paths** (per corpus).
- Node 20+ only; young/small (⭐39); open-core (some features commercial); NVIDIA Inception ≠ endorsement.
- Doc 28 §14.5/§19: "local HMAC is not independent attestation; preflight freshness may not bind objective/verifier."

## 7. Roadmap
- **Was:** built by Keesan12 (2026-04) as a governed "Ralph-loop-with-brakes" control layer; open-core.
- **Now (2026):** ⭐39; v0.4.5; Apache core + commercial tiers.
- **Ahead:** no published roadmap; learn-from-loops + ROI-proof direction.

## 8. Positioning
- **MartinLoop** — lightweight braked-loop governance (budget caps, verifier, rollback, HMAC receipts).
- vs Bernstein (heavier audit-grade determinism), Tutti (ops layer), Runcap/dxkit (proof-gates), the raw Ralph loop (no brakes).

## 9. Hands-on
`docs-only` (2026-07-20). **TODO:** `npx martin-loop` a loop with a USD cap + `--verify`; force an overspend + verifier fail; inspect the signed receipt + rollback evidence.

## 10. Sources
- https://github.com/Keesan12/martin-loop (README, docs) · martinloop.com
- ReviewedResearch.md / Doc 28 §13.3, §14.5, §19 (HMAC/preflight caveats)

_Last updated: 2026-07-20 · Researcher: Claude_
