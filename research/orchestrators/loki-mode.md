---
name: Loki Mode
slug: loki-mode
category: orchestrators
subtype: "2.2 Autonomous swarms & SDLC harnesses"
repo: https://github.com/asklokesh/loki-mode
site: null
maker: asklokesh
license_claimed: "BUSL-1.1"
license_detected: NOASSERTION
stars: 1046
created: "2025-12"
language: Shell
maturity: Established
status: active
local: true
one_liner: "'The spec-driven autonomous builder with verified completion' — spec to deployed app with evidence receipts (facts vs AI assessments), 8+ quality gates, and drift detection."
tagline_quote: "The spec-driven autonomous builder with verified completion"
features:
  - "Evidence receipts (facts vs assessments) + loki proof; spec-locking + drift detection"
  - "8+ quality gates: static analysis, tests, blind 3-reviewer council, Devil's Advocate, mutation…"
  - "41 agent roles / 8 domains; parallel review council; loki grill pre-build interrogation"
  - "3-tier memory + ChromaDB; AI test-gen; multi-provider auto-failover + mid-flight model switch"
  - "Generates Dockerfiles/CI/CD but never auto-deploys; MCP server (34 tools); enterprise (TLS/OIDC/RBAC)"
choose_when: "You want spec-driven autonomous builds with rigorous, honest evidence receipts + drift/gates on Claude Code, and BUSL-1.1 is acceptable."
avoid_when: "You need an OSI license, non-Claude parallelism, auto-deploy, or you'd over-trust the broad claims."
cross_links: ["§9"]
hands_on: docs-only
last_verified: "2026-08-19"
---
# Loki Mode — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → spec-driven autonomous SDLC harness |
| Repo / site | https://github.com/asklokesh/loki-mode · Docker `asklokesh/loki-mode` |
| Maker | **asklokesh** (autonomi.dev) |
| License | **BUSL-1.1** / NOASSERTION — source-available; **converts to Apache-2.0 on 2030-03-19**; commercial otherwise (founder@autonomi.dev) |
| ⭐ / created | 1,046 · 2025-12 · **v7.121.x** |
| Authority | outer controller + verification (evidence receipts) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"The spec-driven autonomous builder with verified completion." A multi-agent autonomous SDLC framework that takes any spec to a deployed product and **verifies completion with evidence** (quality gates + a completion council), not just a "done" claim ("Loki does not lie").

## 2. Quotes (verbatim, from docs — attributed)
- Definition: *"The spec-driven autonomous builder with verified completion."*
- Trust: *"The receipt proves the completion claim is backed by deterministic evidence."*
- Evidence separation: *"Facts—deterministic, non-LLM, and re-derivable by anyone; Assessments—AI judgments labeled explicitly."*
- Inconclusive: *"A check that cannot be established is reported as inconclusive, never false."*
- Provider: *"Claude Code is the primary, fully supported provider and the one Loki is built for."*

## 3. Architecture
- **Spec-driven:** input PRD / GitHub issue / OpenAPI-YAML / brief / Jira → normalized unified spec → **RARV(-C)** loop (Reason–Act–Reflect–Verify). Auto-detects complexity → composes agent roles.
- **41 agent roles / 8 domains** (Engineering, Ops, Business, Data, Product, Growth, Review, Orchestration); git-worktree streams; parallel review council (Claude Code).
- **Evidence Receipts:** separate facts (git diff, test/build exit codes) from AI assessments; verdicts VERIFIED / VERIFIED-WITH-GAPS / NOT-VERIFIED; `loki proof verify` re-checks tamper (integrity hash) + drift (repo vs base SHA).
- **Drift:** `loki spec` → `spec.lock` + `drift-report.json`; `loki verify` SPEC_DRIFT finding w/ CI exit codes (0/1/2).

## 4. Features
- **8+ quality gates:** static analysis · tests · blind 3-reviewer council · anti-sycophancy Devil's Advocate · mock-integrity · test-mutation · doc-coverage · Magic-Modules debate (README 8; wiki 11).
- `loki grill` pre-build Devil's-Advocate interrogation; 3-tier memory (episodic/semantic/procedural) + ChromaDB; AI test-gen (8 langs); multi-provider **auto-failover + mid-flight model switch**; `--max-budget-usd`.
- **Deploy:** generates Dockerfiles/CI-CD + **prints the exact deploy command — never auto-deploys, never runs cloud CLI or git push.**
- Enterprise (TLS/OIDC/RBAC/OTEL/audit); **MCP server (34 tools)**; Proven-PR (receipt in PR body + optional `loki: verified-completion` check-run); `loki modernize heal` (legacy).

## 5. Providers
Claude Code (Tier 1, E2E-verified, primary, 10+ parallel) · Cline (T2, exp) · Codex (T3, exp) · Aider (T3, exp) · Gemini (DEPRECATED v7.5.18). Non-Claude = sequential fallback.

## 6. Interfaces & install
CLI (`loki start/plan/verify/proof/review/test/analyze/memory/enterprise`) · dashboard (localhost:57374 + Live App Preview) · MCP server · Docker. Install: Bun (recommended), npm, Homebrew, Docker.

## 7. What it is NOT / ⚠️ caveats
- Not fully "autonomous" — no cloud/payment/external access without creds; human oversight for deploy/keys/critical decisions.
- Not an auto-deployer; not a perfection claim ("done" = deterministic gates, not bug-free).
- Non-Claude providers sequential/experimental; Gemini deprecated; dashboard single-machine (no clustering).
- **⚠️ BUSL-1.1 = source-available, not OSI** — free for personal/internal/academic/non-commercial; commercial needs a license (or wait for 2030 Apache conversion).
- Doc 28: "broad unverified claims" — verify the gates yourself.

## 8. Roadmap
- **Was:** built by asklokesh (Dec 2025) as a spec-driven verified-completion SDLC framework (BUSL-1.1).
- **Now (2026):** ⭐1,023; v7.121.x; Phase 5 dual Bash/Bun runtime; 5 providers; MCP; enterprise.
- **Ahead:** Phase 6 (Bun-only, sunset Bash); browser SAML login; Claude Fable 5 tier (blocked — Fable not at API yet, collapses to Opus).

## 9. Positioning
- **Loki Mode** — spec-driven autonomous builds with rigorous, honest evidence receipts + drift/gates; Claude-Code-centric; BUSL.
- vs Bernstein (audit-grade, Apache), Tutti (ops layer), GasTown (swarm); Runcap/dxkit (proof-gates).

## 10. Hands-on
`docs-only` (2026-07-20). **TODO:** `loki start` a small PRD; inspect the Evidence Receipt (facts vs assessments); trigger a spec drift; test an inconclusive gate.

## 11. Sources
- https://github.com/asklokesh/loki-mode (README, wiki, skills/providers.md) · Docker Hub
- ReviewedResearch.md / Doc 28 §13.3, §14.6 (BUSL + broad-claims caveat)

_Last updated: 2026-07-20 · Researcher: Claude_
