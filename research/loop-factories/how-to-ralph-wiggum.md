---
name: how-to-ralph-wiggum
slug: how-to-ralph-wiggum
category: loop-factories
subtype: "5.1 Ralph technique & loop runners"
repo: https://github.com/ghuntley/how-to-ralph-wiggum
site: https://ghuntley.com/ralph
maker: "Geoffrey Huntley"
license_claimed: null
license_detected: none
stars: 1722
created: "2026-01"
language: HTML
maturity: Established
status: active
local: partial
one_liner: "The canonical Ralph Wiggum technique by its inventor Geoffrey Huntley: a bash while-loop that keeps restarting an agent, with a persistent plan file as shared disk state."
tagline_quote: "the loop is the hero, not the model."
features:
  - "The canonical loop pattern: bash while loop, plan file, deterministic file loads"
  - "IMPLEMENTATION_PLAN.md as durable shared state between iterations"
  - "Agent-agnostic; the loop is the hero, not the model"
  - "Methodology + examples (not a packaged CLI)"
choose_when: "You want to understand and hand-roll the minimal Ralph loop (a bash loop plus a plan file) before reaching for a real runner."
avoid_when: "You need a maintained tool or to reuse the repo content (no license); use ralph-orchestrator for a real runner or MartinLoop (§2) for brakes."
cross_links: ["§2"]
hands_on: docs-only
last_verified: "2026-07-20"
---
# how-to-ralph-wiggum (the Ralph Wiggum technique) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Loop factories → 5.1 methodology / reference (the canonical Ralph technique) |
| Repo / site | https://github.com/ghuntley/how-to-ralph-wiggum · ghuntley.com/ralph |
| Maker | **Geoffrey Huntley** (inventor of the technique) |
| License | ⚠️ **none declared** — reuse/redistribution rights NOT granted |
| ⭐ / created | 1,722 · 2026-01-10 · HTML |
| Backends | agent-agnostic (any CLI agent run in a loop) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
The reference write-up of the **Ralph Wiggum technique** from its inventor, Geoffrey Huntley. Run an agent in a `while true` bash loop; each iteration deterministically loads the same files and reads/writes a persistent plan file as shared state, so the agent figures out the next step from disk.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"The Ralph Wiggum Technique—the AI development methodology that reduces software costs…"*
- (Coverage) mechanic: *"a dumb bash loop that keeps restarting the agent."*
- (Coverage) philosophy: *"the loop is the hero, not the model."*

## 3. How it works
- **Bash `while` loop** re-runs the agent each iteration (no sophisticated orchestration).
- Each iteration deterministically loads: `PROMPT.md` + `AGENTS.md` + `specs/*`.
- **`IMPLEMENTATION_PLAN.md` persists on disk** as shared state between otherwise-isolated iterations; the agent reads current state from disk and updates it.
- The agent decides the next step by reading the plan file each time.

## 4. Provenance / significance
- Coined by Geoffrey Huntley (mid-2025, ghuntley.com/ralph); codified as `how-to-ralph-wiggum` (Jan 2026).
- Famous proof: **CURSED** — a full programming language built almost entirely by AI over ~3 months of autonomous Ralph operation.
- Spawned an ecosystem of runners (ralph-orchestrator, ralph-claude-code, Ralph TUI, ralphy) and governed variants (MartinLoop = "Ralph-with-brakes", §2).

## 5. What it is NOT / limitations
- Not a product/CLI (a methodology + reference).
- **No brakes** — runs until a completion condition, iteration cap, or budget runs out.
- **No license declared** → do not reuse/redistribute the repo contents without permission.
- Cost can balloon (unbounded loop).

## 6. Roadmap
- **Was:** Huntley coined "Ralph" (mid-2025); demonstrated with CURSED.
- **Now (2026):** codified (Jan 2026); ⭐1.7k; widely referenced.
- **Ahead:** the pattern is the durable artifact; runners + governed variants build on it.

## 7. Positioning
- **how-to-ralph-wiggum** — the canonical minimal technique; understand it, then use a real runner (ralph-orchestrator) or a governed harness (MartinLoop/Bernstein, §2) for production.

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** try the pattern — a `while` loop over Claude Code with a PROMPT.md + IMPLEMENTATION_PLAN.md on a toy task; watch cost.

## 9. Sources
- https://github.com/ghuntley/how-to-ralph-wiggum · https://ghuntley.com/ralph · zerosync.co (technical deep dive) · linearb.io (Dev Interrupted interview)

_Last updated: 2026-07-20 · Researcher: Claude_
