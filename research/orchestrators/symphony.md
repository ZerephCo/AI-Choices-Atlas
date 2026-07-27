---
name: Symphony
slug: symphony
category: orchestrators
subtype: "2.3 Issue/backlog dispatchers"
repo: https://github.com/openai/symphony
site: null
maker: OpenAI
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 26049
created: "2026-02"
language: Elixir
maturity: Prominent
status: preview
local: partial
one_liner: "OpenAI's open-source spec (+ Elixir reference impl) for Codex orchestration that 'turns project work into isolated, autonomous implementation runs' driven off a Linear board."
tagline_quote: "turns project work into isolated, autonomous implementation runs"
features:
  - "Spec-first: SPEC.md defines the contract; Elixir reference impl provided (any language can implement)"
  - "Linear as state store — adapter fetches active/terminal issues + reconciles (no separate DB)"
  - "Proof of work: CI status, PR review feedback, complexity analysis, walkthrough videos"
  - "Continuous per-issue agents; human review; safer Codex defaults (sandbox approval, rule checking)"
choose_when: "You already run Linear + Codex and want issue-driven autonomous runs with proof-of-work, in a trusted environment."
avoid_when: "You don't use Linear/Codex, need a durable orchestration DB, or need production hardening (it's a preview/spec)."
hands_on: docs-only
last_verified: "2026-07-20"
---
# Symphony — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → issue/backlog dispatcher (spec + reference impl) |
| Repo / site | https://github.com/openai/symphony · openai.com (announcement) |
| Maker | **OpenAI** |
| License | Apache-2.0 / Apache-2.0 |
| ⭐ / created | 26,049 · 2026-02 · active (pushed ~2026-07-18) |
| Architecture | **SPEC.md** + **Elixir** reference implementation; **Linear IS the state store**; **Codex** as the coding agent |
| Authority | Linear = state store (reconstructs from tracker, no separate durable DB) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
OpenAI's **open-source spec for Codex orchestration**: turns a project-management board (Linear) into a control plane for coding agents. Primarily a **spec** (`SPEC.md`) with an Elixir reference implementation.

## 2. Quotes (verbatim, from docs — attributed)
- *"Symphony turns project work into isolated, autonomous implementation runs, allowing teams to manage work instead of supervising coding agents."*
- *"Every open task gets an agent, agents run continuously, and humans review the results."*
- *"agents complete the tasks and provide proof of work: CI status, PR review feedback, complexity analysis, and walkthrough videos."*
- *"Linear IS the state store for Symphony's orchestration state."*
- *"Symphony is a low-key engineering preview for testing in trusted environments."*
- *"works best in codebases that have adopted harness engineering."*

## 3. Architecture
- **Spec-first:** `SPEC.md` defines the contract; anyone can implement it. OpenAI provides an **Elixir** reference impl ("Codex built the Elixir implementation in one shot") — Elixir chosen for concurrency/supervision primitives.
- **Linear adapter (3 ops):** fetch candidate issues (active states) · fetch terminal-state issues (startup cleanup) · fetch current states for reconciliation. → state lives in Linear, not a separate DB.
- Reference impl defaults to **safer Codex settings** (sandbox approval required, rule checking) — "not mandated," the reference's choice.

## 4. Proof of work
Agents provide **CI status, PR review feedback, complexity analysis, and walkthrough videos**; when accepted, they **land the PR safely**.

## 5. Setup posture
"Low-key engineering preview for testing in **trusted environments**." Every implementation "must define and document its trust boundary." Best with "harness engineering" practices.

## 6. Roadmap / status
- **Was:** OpenAI released Symphony (2026) as an open-source Codex-orchestration spec; SPEC extracted, Codex implemented it in Elixir.
- **Now (2026):** ⭐26k; active; spec + Elixir reference impl; Linear/Codex.
- **Ahead:** spec-driven (others implement); no formal product roadmap (engineering preview).

## 7. What it is NOT / limitations
- Not a turnkey product — a **spec + reference implementation**.
- **Trusted environments only** (define your own trust boundary).
- **Linear + Codex-centric**; state reconstructed from the tracker (no durable orchestration DB).
- Assumes harness-engineering maturity.

## 8. Positioning
- **Symphony** — issue-driven, proof-of-work orchestration for **Linear + Codex** shops; spec + Elixir reference.
- vs Sortie (tracker-agnostic dispatcher), Beads/GasTown (Beads-native), a plain CI-driven flow.

## 9. Hands-on
`docs-only` (2026-07-20). **TODO:** stand up the Elixir reference impl against a test Linear + Codex; observe issue → run → proof-of-work → PR.

## 10. Sources
- https://github.com/openai/symphony (README, SPEC.md, elixir/README.md) · https://openai.com/index/open-source-codex-orchestration-symphony/
- ReviewedResearch.md (facts: Apache-2.0, ⭐26,049)

_Last updated: 2026-07-20 · Researcher: Claude_
