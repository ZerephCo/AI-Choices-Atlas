---
name: Nelson
slug: nelson
category: loop-factories
subtype: "5.2 Autonomy-loop protocols"
repo: https://github.com/Aspegio/nelson
site: null
maker: Aspegio
license_claimed: MIT
license_detected: MIT
stars: 403
created: "2026-02"
language: Python
maturity: Emerging
status: active
local: partial
one_liner: "An autonomy protocol layer for Claude Code with 11 named Royal-Navy-style damage-control procedures for stuck agents, context exhaustion, and budget overruns."
tagline_quote: "Organisation for Claude Code inspired by time-tested Royal Navy operating procedures."
features:
  - "11 named damage-control procedures (stuck agents, context exhaustion, budget overruns, mission abort)"
  - "Aligns with Claude Code's /goal Stop hook (keeps a session going until a completion condition)"
  - "Built for long autonomous / headless / scheduled runs"
choose_when: "You want to add structured failure-handling (brakes plus recovery) to long autonomous Claude Code runs."
avoid_when: "You want a runner (ralph-*) or non-Claude backends."
cross_links: ["§2"]
hands_on: docs-only
last_verified: "2026-07-20"
---
# Nelson — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Loop factories → 5.2 autonomy protocol (damage-control for long runs) |
| Repo | https://github.com/Aspegio/nelson |
| Maker | **Aspegio** |
| License | **MIT** / MIT |
| ⭐ / created | 403 · 2026-02-09 · Python |
| Backends | Claude Code |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Organisation for Claude Code inspired by time-tested Royal Navy operating procedures." A protocol layer with **eleven named damage-control procedures** that keep long autonomous/headless/scheduled runs on track — protocols, not improvisation.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Organisation for Claude Code inspired by time-tested Royal Navy operating procedures."*
- (Coverage): procedures for *"stuck agents, context exhaustion, faulty output, budget overruns… mission abort."*

## 3. Features
- **11 named damage-control procedures** for common failure modes (stuck agents, context exhaustion, faulty output, budget overruns, automated alarms, mission abort).
- Aligns with Claude Code's **`/goal`** (session-scoped Stop hook that keeps a session going until a completion condition is met).
- Built for long autonomous / headless / scheduled runs.

## 4. What it is NOT / limitations
- Not a runner (a protocol/organisation layer for Claude Code).
- Claude-Code-specific; emerging.

## 5. Roadmap
- **Was:** created Feb 2026 (Royal-Navy-procedures metaphor).
- **Now (2026):** ⭐403; MIT; `/goal` alignment; 11 procedures.
- **Ahead:** more procedures; adoption.

## 6. Positioning
- **Nelson** — structured failure-handling / "brakes + recovery" for long autonomous Claude Code runs.
- vs ralph-* (raw runners), MartinLoop/Bernstein (§2, governed), GSD (spec-driven).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** wire Nelson into a headless `/goal` run; trigger a failure and watch a damage-control procedure.

## 8. Sources
- https://github.com/Aspegio/nelson (README)

_Last updated: 2026-07-20 · Researcher: Claude_
