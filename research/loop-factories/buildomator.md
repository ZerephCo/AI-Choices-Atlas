---
name: Buildomator
slug: buildomator
category: loop-factories
subtype: "5.2 Autonomy-loop protocols"
repo: https://github.com/buildomator/buildomator
site: null
maker: jnuyens
license_claimed: null
license_detected: none
stars: 76
created: "2026-04"
language: TypeScript
maturity: Preview
status: active
local: partial
one_liner: "A Claude-Code-native evolution of GSD: a plan/execute/verify workflow with MCP-backed state, atomic commits, drift detection, and ~92% lower per-turn token overhead."
tagline_quote: "A structured plan/execute/verify coding workflow for Claude Code."
features:
  - "Plan → execute → verify workflow (a verify gate, rare among loop tools)"
  - "MCP-backed project state; atomic commits; cross-session memory"
  - "Convention + drift-detection safeguards; ~92% lower per-turn token overhead vs GSD"
choose_when: "You want a GSD-style workflow that adds a real verify gate, drift detection, and big token savings on Claude Code."
avoid_when: "You need production reliance now (Preview, no license); use GSD redux for a larger community."
cross_links: ["§2"]
hands_on: docs-only
last_verified: "2026-07-20"
---
# Buildomator (gsd-plugin) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Loop factories → 5.2 plan/execute/verify workflow (Claude Code plugin; GSD evolution) |
| Repo | https://github.com/buildomator/buildomator (= `jnuyens/gsd-plugin`, same repo) |
| Maker | **jnuyens** |
| License | ⚠️ **none declared** (verify reuse rights) |
| ⭐ / created | 76 · 2026-04-06 · TypeScript · active |
| Backends | Claude Code |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"A structured plan/execute/verify coding workflow for Claude Code… a Claude Code-native evolution of GSD (Get Shit Done)." Adds MCP-backed project state, atomic commits, cross-session memory, and drift-detection safeguards, cutting per-turn token overhead by ~92%.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"A structured plan/execute/verify coding workflow for Claude Code."*
- Repo desc: *"A Claude Code-native evolution of GSD (Get Shit Done), VibeDrift, and so much more."*
- Repo desc: *"~92% lower per-turn token overhead… native convention + drift-detection safeguards."*

## 3. Features
- **Plan → execute → verify** workflow (verify gate).
- **MCP-backed project state**; atomic commits; cross-session memory.
- **Convention + drift-detection** safeguards.
- ~92% lower per-turn token overhead vs GSD.

## 4. What it is NOT / limitations
- Small/emerging (⭐76 → Preview tier).
- ⚠️ No license declared (verify reuse).
- Claude Code-only.

## 5. Roadmap
- **Was:** created Apr 2026 as a Claude-Code-native evolution of GSD.
- **Now (2026):** ⭐76; plan/execute/verify + MCP state + drift detection; ~92% token savings.
- **Ahead:** maturity; possible upstream integration with GSD/redux.

## 6. Positioning
- **Buildomator** — GSD's performance-optimized, plan/execute/**verify** plugin for Claude Code (adds a verify gate + drift detection).
- vs GSD (the origin), ralph-* (raw loops), MartinLoop/Bernstein (§2, governed).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** install the Claude Code plugin; run plan→execute→verify on a small feature; check drift detection.

## 8. Sources
- https://github.com/buildomator/buildomator (= jnuyens/gsd-plugin) README

_Last updated: 2026-07-20 · Researcher: Claude_
