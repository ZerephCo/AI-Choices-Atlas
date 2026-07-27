---
name: "Ralph TUI"
slug: ralph-tui
category: loop-factories
subtype: "5.1 Ralph technique & loop runners"
repo: https://github.com/subsy/ralph-tui
site: https://ralph-tui.com
maker: subsy
license_claimed: MIT
license_detected: MIT
stars: 2405
created: "2026-01"
language: TypeScript
maturity: Established
status: active
local: partial
one_liner: "A terminal-UI Ralph runner that connects an AI coding agent to a task tracker (prd.json or Beads) and works the backlog task-by-task across 7 backends."
tagline_quote: "Terminal UI for orchestrating AI coding agents to work through task lists autonomously."
features:
  - "Tracker-driven loop — prd.json or Beads (git-backed deps); highest-priority selection"
  - "Multi-agent: Claude Code, OpenCode, Factory Droid, Cursor CLI, Gemini CLI, Codex, Kiro CLI"
  - "Real-time TUI (keyboard) + headless; session persistence (pause/resume across crashes)"
  - "Sandbox execution (bwrap / sandbox-exec); iteration limits; remote instances; plugins + themes"
choose_when: "You want a visible, tracker-driven Ralph loop that chews through a backlog (especially with Beads) across many agents, with sandboxing and pause/resume."
avoid_when: "You want a headless minimal loop (ralph-claude-code) or governance (§2)."
cross_links: ["§4.1", "§2"]
hands_on: docs-only
last_verified: "2026-07-20"
---
# Ralph TUI — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Loop factories → 5.1 loop runner (TUI, tracker-driven) |
| Repo / site | https://github.com/subsy/ralph-tui · ralph-tui.com |
| Maker | **subsy** |
| License | **MIT** / MIT (open source) |
| ⭐ / created | 2,405 · 2026-01-11 · TypeScript · very active |
| Backends | Claude Code · OpenCode · Factory Droid · Cursor CLI · Gemini CLI · Codex · Kiro CLI |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Terminal UI for orchestrating AI coding agents to work through task lists autonomously." A TUI Ralph runner that connects an agent to a **task tracker** and works the backlog task-by-task with intelligent selection.

## 2. Quotes (verbatim, from docs — attributed)
- Definition: *"Terminal UI for orchestrating AI coding agents to work through task lists autonomously."*
- Flow: *"Ralph selects the highest-priority task, builds a prompt, executes your AI agent, detects completion."*
- Backends: *"Claude Code, OpenCode, Factory Droid, Cursor CLI, Gemini CLI, Codex, Kiro CLI."*

## 3. Features
- **Tracker-driven** loop — `prd.json` or **Beads** (git-backed dependency tasks) → cross-links §4.1 Beads.
- **Intelligent selection** — picks the highest-priority task each iteration.
- **Multi-agent** — Claude Code, OpenCode, Factory Droid, Cursor CLI, Gemini CLI, Codex, Kiro CLI.
- Real-time **TUI** (keyboard control) + headless mode; **session persistence** (pause/resume across crashes).
- **Sandbox execution** (bwrap on Linux, sandbox-exec on macOS); iteration limits (`--iterations`).
- Multi-machine remote instance management; plugin/skill system; custom themes.

## 4. What it is NOT / limitations
- Not governed/audit-grade (brakes = sandbox + iteration caps, not attestation).
- A task-loop runner, not a multi-agent swarm.
- Emerging (young project).

## 5. Roadmap
- **Was:** created Jan 2026; TUI + tracker-driven Ralph loop.
- **Now (2026):** ⭐2.4k; MIT; 7 agent backends; Beads + prd.json; sandbox mode; remote instances.
- **Ahead:** plugin ecosystem; more trackers/agents.

## 6. Positioning
- **Ralph TUI** — the visible, tracker-driven Ralph runner; best when you want to chew through a backlog (esp. **Beads**) across many agents with sandboxing + pause/resume.
- vs ralph-claude-code (headless, Claude-only), ralphy (viral bash, no license), ralph-orchestrator (hats + backpressure).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** point it at a Beads DB (or prd.json); run Claude Code through the backlog in sandbox mode; test pause/resume.

## 8. Sources
- https://github.com/subsy/ralph-tui (README) · ralph-tui.com/docs

_Last updated: 2026-07-20 · Researcher: Claude_
