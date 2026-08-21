---
name: ralph-claude-code
slug: ralph-claude-code
category: loop-factories
subtype: "5.1 Ralph technique & loop runners"
repo: https://github.com/frankbria/ralph-claude-code
site: null
maker: frankbria
license_claimed: MIT
license_detected: MIT
stars: 9604
created: "2025-08"
language: Shell
maturity: Established
status: active
local: partial
one_liner: "A Claude-Code-specific Ralph loop with intelligent dual-condition exit detection, rate limiting, and a circuit breaker as safety brakes."
tagline_quote: "Autonomous AI development loop for Claude Code with intelligent exit detection."
features:
  - "Continuous autonomous Claude Code loop (Ralph technique)"
  - "Intelligent exit detection — dual-condition exit gate (stop when done)"
  - "Rate limiting + circuit breaker with advanced error detection"
  - "Shell-based; heavily tested (claims 784 tests)"
choose_when: "You want a Claude-Code-only Ralph loop with extensive stop/exit detection and circuit-breaker brakes."
avoid_when: "You need multi-agent backends (ralphy / Ralph TUI) or governance (§2)."
cross_links: ["§2"]
hands_on: docs-only
last_verified: "2026-08-19"
---
# ralph-claude-code — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Loop factories → 5.1 loop runner (Claude-Code-specific) |
| Repo | https://github.com/frankbria/ralph-claude-code |
| Maker | **frankbria** |
| License | **MIT** / MIT (open source) |
| ⭐ / created | 9,604 · 2025-08-27 · Shell · very active |
| Backends | Claude Code (only) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Autonomous AI development loop for Claude Code with intelligent exit detection." A Ralph loop purpose-built for Claude Code that adds real stop logic — it halts when the work is genuinely done, not just on an iteration cap.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Autonomous AI development loop for Claude Code with intelligent exit detection."*
- (Coverage): implements *"a dual-condition exit gate, rate limiting, and circuit breaker."*

## 3. Features
- Continuous autonomous Claude Code loop (Geoffrey Huntley's Ralph technique).
- **Intelligent exit detection** — dual-condition exit gate (stop when done).
- **Rate limiting** + **circuit breaker** with advanced error detection (safety brakes).
- Shell-based; heavily tested (claims 784 tests / 100% pass).

## 4. What it is NOT / limitations
- Not multi-agent (Claude Code only).
- Not governed/audit-grade (brakes ≠ independent attestation).
- A loop runner, not a multi-agent orchestrator.

## 5. Roadmap
- **Was:** created Aug 2025 as a Claude-Code-specific Ralph implementation.
- **Now (2026):** ⭐9.5k; MIT; exit detection + rate limiting + circuit breaker.
- **Ahead:** refinements to exit detection / brakes.

## 6. Positioning
- **ralph-claude-code** — a Claude-Code-only Ralph loop with extensive **stop/exit detection + circuit breaker** brakes.
- vs ralphy (multi-agent, no license), Ralph TUI (tracker-driven TUI), ralph-orchestrator (multi-backend, hats).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** run on a small PRD with Claude Code; observe the exit gate + circuit breaker.

## 8. Sources
- https://github.com/frankbria/ralph-claude-code (README, CLAUDE.md)

_Last updated: 2026-07-20 · Researcher: Claude_
