---
name: Agent Teams AI
slug: agent-teams-ai
category: orchestrators
subtype: "2.1 Cockpits & multiplexers"
repo: https://github.com/777genius/agent-teams-ai
site: https://agentteams.live
maker: 777genius
license_claimed: AGPL-3.0
license_detected: AGPL-3.0
stars: 1625
created: "2026-02"
language: TypeScript
maturity: Established
status: active
local: true
one_liner: "A free desktop cockpit where agent teams message each other, review each other's work, and run on a live kanban with budgets and nested org structure."
tagline_quote: "You're the boss, agents are your team"
features:
  - "Peer-to-peer agent messaging (DMs, shared tasks, @mentions) on a live 5-column kanban"
  - "Hunk-level code review (accept/reject/comment) + agent-to-agent review workflow"
  - "Budgets: token/cost tracking, monthly caps + 80/100% alerts, hard caps, auto-resume"
  - "Autonomy levels (fully autonomous to per-action approval); nested departments/squads org map"
  - "Built-in PTY terminal + code editor; MCP; 200+ models, 75+ providers; no cloud backend"
choose_when: "Peer-team messaging, kanban, budgets, and org structure are the point, and AGPL is acceptable."
avoid_when: "AGPL is a blocker, you need OS containment (worktree is not a sandbox), or you want a headless/CLI-first flow."
hands_on: docs-only
last_verified: "2026-07-20"
---
# Agent Teams AI — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → cockpit (peer-team / kanban / budgets) |
| Repo / site | https://github.com/777genius/agent-teams-ai · agentteams.live · docs.agentteams.live |
| Maker | **777genius** |
| License | **AGPL-3.0** / AGPL-3.0 |
| ⭐ / created | 1,625 · 2026-02 · **v2.9.x** (advanced from v2.7.0 in ~a week — very fast) |
| Platforms | macOS (ARM/Intel) · Windows (.exe) · Linux (AppImage/deb/rpm/pacman) |
| Authority | outer controller (app-local task truth) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"**You're the boss, agents are your team.**" A free desktop cockpit where AI agent teams handle tasks autonomously, **message each other, and review each other's work**, while you watch a live kanban and give high-level commands. "Build your AI company with multiple teams."

## 2. Architecture
- **Stack:** Electron 40, React 19, TypeScript 5, Tailwind, Zustand.
- **Data:** local app + runtime/session data; reads Claude Code data from `~/.claude/`; **app-local task database**.
- **Runtime:** process backend (tmux debug mode); IPC validates IDs/paths/payloads; read-only discovery of `~/.claude/` + app-owned state.
- **Isolation:** optional **git-worktree** per teammate (⚠️ not an OS sandbox); branch-strategy config.

## 3. Features
**Team/collab:** peer-to-peer messaging (DMs, shared tasks, comments); cross-team `@team` mentions; live **5-column kanban**; role-based team assembly.
**Work mgmt:** task creation + file attachments; linked/dependent tasks + blockers; per-task logs/messages/history; solo mode.
**Code review:** **hunk-level accept/reject/comment** (Cursor-like) + diff view; agent-to-agent review visibility.
**Budgets/tokens:** input/output/cache/reasoning breakdown; monthly token + estimated-cost budgets with **80%/100% alerts**; hard caps for scheduled runs; **auto-resume after rate limits**; per-agent/team analytics.
**Autonomy/control:** flexible autonomy (fully autonomous ↔ per-action approvals); direct-message course-correction; teammate diagnostics/restart; nudge system.
**Infra:** built-in **PTY terminal** + **code editor** (Git support); live process section (CPU/RAM); MCP integration (mcp-server folder for plugins); post-compact context recovery.
**Org/oversight:** **nested org structure** (departments/squads); live org map (status/progress/dependencies); deep session analysis (tool calls/bash); notifications; 29 UI languages; zero-setup (free model, no auth).

## 4. Supported agents
Claude Code, Codex, OpenCode, Cursor, SuperGrok, GitHub Copilot, Z.AI, MiniMax, Kiro, Kimi — **200+ models, 75+ providers**, free models with no auth. Auto-detects Claude Code/Codex/OpenCode; others via UI with subscriptions/keys.

## 5. Interfaces & platforms
Desktop (primary; Win/Mac/Linux). Limited web dashboard (local/trusted-network only; **no built-in auth** — don't expose publicly). Integrated PTY workspace.

## 6. Telemetry / sandbox
**No cloud backend**; code is **not uploaded**. Reads local runtime/session data for UI only. External AI runtimes talk to their own providers under those providers' terms. Path-traversal + sensitive-config targets blocked; IPC validates boundaries.

## 7. Roadmap
- **Was:** created by **777genius** (Feb 2026) as a local "AI company" cockpit.
- **Now (2026):** ⭐1.6k; **v2.9.x** (v2.7.0 → v2.9.1 in ~a week); no-cloud desktop; org/budget/terminal features verified in source (2026-07-11).
- **Ahead (stated):** 24/7 autonomous cloud teams; automatic account switching; **planning mode + visual drag-drop pipeline editor**; remote SSH agent execution; generic ACP runtime; command palette; custom kanban columns; messenger integrations; SDK.

## 8. What it is NOT / limitations
- Not a single-agent chat (multi-agent team coordination).
- No cloud storage/sync of code; **AGPL-3.0** (copyleft — legal review for embedding/SaaS).
- Web dashboard has **no built-in auth** (reverse-proxy required).
- **Worktree ≠ sandbox**; app-local task truth (avoid a second tracker).

## 9. Positioning
- **Agent Teams AI** — peer-team messaging + kanban + budgets + org structure; AGPL; no-cloud.
- vs **AgentWrapper AO** (Apache, worktree/PR/CI-loop cockpit), GasTown (Beads-native terminal swarm), Paperclip (company plane).

## 10. Hands-on
`docs-only` (2026-07-20). **TODO:** install desktop app (free model, no auth); assemble a 2-agent team; test messaging + budgets + hunk review.

## 11. Sources
- https://github.com/777genius/agent-teams-ai (README, docs) · agentteams.live
- ReviewedResearch.md (facts: AGPL-3.0, ⭐1,625) · repo's own gastown-paperclip comparison doc

_Last updated: 2026-07-20 · Researcher: Claude_
