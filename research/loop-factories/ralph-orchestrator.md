---
name: ralph-orchestrator
slug: ralph-orchestrator
category: loop-factories
subtype: "5.1 Ralph technique & loop runners"
repo: https://github.com/mikeyobrien/ralph-orchestrator
site: null
maker: mikeyobrien
license_claimed: MIT
license_detected: MIT
stars: 3067
created: "2025-09"
language: Rust
maturity: Established
status: active
local: partial
one_liner: "A hat-based, guard-railed Ralph runner in Rust that loops an agent until LOOP_COMPLETE; 8 backends, backpressure gates (tests/lint/typecheck), and cost/iteration caps."
tagline_quote: "A hat-based orchestration framework that keeps AI agents in a loop until the task is done."
features:
  - "Hat system — specialized personas coordinating through events"
  - "Backpressure gates that reject incomplete work (tests, lint, typecheck)"
  - "Multi-backend: Claude Code, Codex, Gemini CLI, Kiro, Forge, Amp, Copilot CLI, OpenCode"
  - "Persistent .ralph/specs state; LOOP_COMPLETE token + iteration + cost caps"
  - "Web dashboard (alpha); RObot Telegram HITL; workspace-scoped MCP"
choose_when: "You want a real, multi-backend Ralph runner with built-in stop conditions (LOOP_COMPLETE plus iteration/cost caps) and backpressure gates."
avoid_when: "You need audit-grade governance/attestation (use §2 Bernstein) or a fully hands-off managed service."
cross_links: ["§2"]
hands_on: docs-only
last_verified: "2026-07-20"
---
# ralph-orchestrator — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Loop factories → 5.1 loop runner (improved Ralph implementation) |
| Repo | https://github.com/mikeyobrien/ralph-orchestrator |
| Maker | **mikeyobrien** |
| License | **MIT** / MIT (open source) |
| ⭐ / created | 3,067 · 2025-09-07 · Rust · very active |
| Backends | Claude Code · Codex · Gemini CLI · Kiro · Forge · Amp · Copilot CLI · OpenCode |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"A hat-based orchestration framework that keeps AI agents in a loop until the task is done." An improved, guard-railed implementation of the Ralph Wiggum technique in Rust — it iterates an agent until it emits `LOOP_COMPLETE` or hits the iteration limit.

## 2. Quotes (verbatim, from docs — attributed)
- Headline: *"A hat-based orchestration framework that keeps AI agents in a loop until the task is done."*
- Stop: *"Ralph iterates until it outputs `LOOP_COMPLETE` or hits the iteration limit."*
- Hats: *"Specialized personas coordinating through events."*
- Backpressure: *"Gates that reject incomplete work (tests, lint, typecheck)."*
- HITL: *"Agents can ask questions and block until answered; humans can send proactive guidance anytime."*

## 3. Features
- **Hat system** — specialized personas (code-assist / debug / research / review / pdd-to-code-assist) coordinating through events.
- **Backpressure gates** — reject incomplete work (tests, lint, typecheck enforcement).
- **Multi-backend** — Claude Code, Codex, Gemini CLI, Kiro, Forge, Amp, Copilot CLI, OpenCode.
- **Persistent layer** — memories, tasks, planning sessions retained across runs (`.ralph/specs/`).
- **Stop conditions** — `LOOP_COMPLETE` token + configurable iteration ceiling + cost limits.
- **Web dashboard (Alpha)** — Rust RPC API + Node.js frontend to monitor/manage loops.
- **RObot** — Telegram-based human-in-the-loop mid-loop.
- MCP (workspace-scoped); `ralph init/plan/run` workflow.

## 4. Differentiation from a plain bash Ralph loop
- Structured hats + enforced backpressure gates + persistent state + multi-backend abstraction + integrated HITL (Telegram) vs a naive shell loop re-prompting the same agent.

## 5. What it is NOT / limitations
- Not a plain bash loop; not a single-shot assistant.
- Dashboard in Alpha (breaking changes expected); Homebrew unavailable (npm/Cargo/Releases).
- Workspace-scoped MCP (one server per repo).
- Node.js/Rust required.
- Has **some** brakes (caps/gates) but not audit-grade governance/attestation (see §2 Bernstein/MartinLoop).

## 6. Roadmap
- **Was:** created Sep 2025 as an improved Ralph implementation (Rust).
- **Now (2026):** ⭐3k; MIT; hats + backpressure + 8 backends; dashboard (alpha) + Telegram HITL.
- **Ahead:** dashboard stabilization; more backends; Homebrew.

## 7. Positioning
- **ralph-orchestrator** — the leading real Ralph *runner*: multi-backend, with LOOP_COMPLETE + caps + backpressure gates.
- vs how-to-ralph-wiggum (the method), MartinLoop/Bernstein (§2, governed/audit-grade), ralph-claude-code/ralphy (lighter).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** `ralph init --backend claude`; `ralph plan "..."`; `ralph run` a small task; watch backpressure gates + cost cap.

## 9. Sources
- https://github.com/mikeyobrien/ralph-orchestrator (README, LICENSE)

_Last updated: 2026-07-20 · Researcher: Claude_
