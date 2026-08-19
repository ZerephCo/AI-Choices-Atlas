---
name: Bernstein
slug: bernstein
category: orchestrators
subtype: "2.2 Autonomous swarms & SDLC harnesses"
repo: https://github.com/sipyourdrink-ltd/bernstein
site: https://bernstein.run
maker: Sip Your Drink Ltd
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 931
created: "2026-03"
language: Python
maturity: Emerging
status: active
local: true
one_liner: "Audit-grade deterministic orchestration for 40+ CLI coding agents: a plain-Python scheduler (no LLM in the loop), signed lineage, byte-identical replay, HMAC audit chain, air-gap."
tagline_quote: "The orchestrator your compliance team will sign off on"
features:
  - "Deterministic scheduler + byte-identical replay (replay --verify names the first divergent step)"
  - "Per-artifact Merkle lineage (HMAC-tagged) + RFC-2104 HMAC audit chain; signed agent cards"
  - "Cost-aware scheduling (USD ceilings, hash-pinned price table); tournament runs"
  - "40+ adapters (Claude Code, Codex, Gemini, Cursor, Aider, Goose, OpenHands…) + generic --prompt"
  - "Headless CI (JSON) mode; SPIFFE identity; air-gap install profile (deny outbound by default)"
choose_when: "Audit-grade determinism, compliance, and air-gap are the priority (regulated/on-prem) and you drive CLI coding agents."
avoid_when: "Single-agent/small work, non-coding tasks, you need vendor support, or you'd wrongly treat its receipts as proof of correctness (integrity is not correctness; verify the completion gate)."
cross_links: ["§9"]
hands_on: docs-only
last_verified: "2026-08-19"
---
# Bernstein — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → deterministic governed-run harness (audit-grade) |
| Repo / site | https://github.com/sipyourdrink-ltd/bernstein (**formerly `chernistry/bernstein`**) · bernstein.run · PyPI `bernstein` |
| Maker | **Sip Your Drink Ltd** (solo-maintained) |
| License | Apache-2.0 / Apache-2.0 |
| ⭐ / created | 706 · 2026-03 |
| Platforms | Linux · macOS · **Windows (PowerShell)** |
| Authority | outer controller (audit/lineage) — but integrity ≠ correctness |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Audit-grade multi-agent orchestration for CLI coding agents (Claude Code, Codex, Gemini CLI, +40 more). HMAC-chained audit log, signed agent cards, per-artefact lineage, air-gap deploy. **The orchestrator your compliance team will sign off on.**"

## 2. Quotes (verbatim, from docs — attributed)
- *"deterministic orchestrator for CLI coding agents … scheduling is plain Python — no LLM in the coordination loop."*
- *"replay yesterday's plan, get yesterday's task graph."*
- *"HMAC-SHA256 audit chain per RFC 2104, one record per scheduling decision."*
- *"air-gap install profile included … deny outbound by default."*
- *"per-artefact lineage records every adapter file write … one Merkle-chained, HMAC-tagged entry."*

## 3. Architecture
- **Plain-Python scheduler** (zero LLM in coordination loop) dispatches agents to **isolated git worktrees**.
- **Reproducibility:** always-on Merkle-chained replay journal; `bernstein replay <run_id> --verify` recomputes head + names the first divergent step.
- **Lineage:** per-artifact Merkle-chained lineage spine (`.sdd/lineage/<run_id>/spine.jsonl`, HMAC-tagged); run identity = chain head hash.
- **Audit:** optional RFC-2104 HMAC-SHA256 chain (`--audit` / `BERNSTEIN_AUDIT=1`); one record per scheduling decision; tamper-evident.
- **Air-gap:** signed wheelhouse + `--profile airgap` deny-by-default; no outbound network in the loop.
- **Cost:** USD ceilings per task/run/day enforced before dispatch against a **hash-pinned price table** (no network lookup in the loop) — "every budget decision is a pure function of (price table, spend ledger, caps)."

## 4. Features (partial — surface is very large)
Signed agent cards (Ed25519/JWS) · C2PA 2.2 content credentials · tamper-evident memory (append-only HMAC chains) · compaction receipts · signed OTel span projection · verifiable spending mandates · journal-anchored subagent delegation · stateless MCP core · attested PR-review receipts · verifiable governance (RBAC/budgets) · audited webhook node · stall-escalation receipts · intent capsules w/ drift detection · input contracts w/ signed refusal receipts · typed activity boundary (coding/research/browser/data/ops) · A2A node w/ signed capability cards · verification evidence bundles · **tournament runs** (parallel attempts + deterministic selection) · spec→task-graph pipeline w/ requirement-hash lineage · durable work ledger (crash-safe resume) · detached run service (submit/disconnect/reattach) · **SPIFFE-compatible workload identity** · local model routing (Ollama, LM Studio).

## 5. Supported agents & interfaces
**40+ adapters:** Claude Code, Codex CLI, OpenAI Agents SDK v2, Copilot CLI, Gemini CLI, Cursor, Devin Terminal, Aider, Cody, Continue, Goose, Junie, AWS Q, Ollama, OpenHands, Open Interpreter, gptme, Plandex, AIChat, Letta Code, + generic `--prompt`. Interfaces: CLI (primary), web UI/TUI, `--headless` CI (JSON). Install: pip/pipx/uv/Homebrew/dnf-copr/Docker/npm.

## 6. What it is NOT / limitations
- Not for single-agent or non-coding tasks; **not SaaS** (on-prem only); not a vendor with SLA (solo OSS, GitHub issues).
- Not emergent collaboration — "deterministic scheduler is a hard wall on stochastic agent coordination."
- **"Cryptographic integrity ≠ correctness"** — signed lineage proves *what happened*, not *that it was right*.
- **Non-Claude adapters degrade gracefully but lack in-process gate hooks** (no blocking verification inside session).

## 7. ⚠️ Corpus finding (PolyWright E3 source adjudication)
Inspection of `completion_gate.py` found it **fail-opens after the Janitor accepts, ignores required-producer failure for task outcome, and no-ops with no producers; only Claude adapters have blocking hooks.** → cannot be treated as a universal authoritative evidence gate without configuration + behavioral proof. (See `ReviewedResearch.md` / Doc 28 §14.5, §19.)

## 8. Roadmap
- **Was:** built by Sip Your Drink Ltd (2026-03); repo moved `chernistry/bernstein` → `sipyourdrink-ltd/bernstein`.
- **Now (2026):** ⭐706; 40+ adapters; audit/lineage/replay/air-gap; solo-maintained, steady incremental.
- **Ahead (implied):** modality expansion (data/ops agents), deeper SPIFFE, governance dashboards, air-gap hardening; no public roadmap.

## 9. Positioning
- **Bernstein** — audit-grade deterministic harness for regulated/on-prem CLI-agent work; the compliance-focused option.
- vs MartinLoop (lighter governed run), GasTown (Beads swarm), Open Multi-Agent (library); Runcap/dxkit for proof-gates.

## 10. Hands-on
`docs-only` (2026-07-20). **TODO:** `pip install bernstein`; run a 2-agent task; `replay --verify`; inspect HMAC audit chain; test `completion_gate` on a producer failure.

## 11. Sources
- https://github.com/sipyourdrink-ltd/bernstein (README) · bernstein.run · PyPI
- ReviewedResearch.md / Doc 28 §14.5, §19 (completion_gate fail-open finding)

_Last updated: 2026-07-20 · Researcher: Claude_
