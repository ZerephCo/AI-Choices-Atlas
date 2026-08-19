---
name: Agent Orchestrator (AO)
slug: agentwrapper-ao
category: orchestrators
subtype: "2.1 Cockpits & multiplexers"
repo: https://github.com/Untrivial-ai/agent-orchestrator
site: https://aoagents.dev
maker: "Untrivial.ai (formerly AgentWrapper, ex-Composio)"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 9631
created: "2026-02"
language: Go
maturity: Established
status: active
local: partial
one_liner: "An agentic IDE that supervises parallel coding agents in isolated git worktrees, with automatic CI-fail / review / merge-conflict routing back to the right agent. Now under Untrivial.ai (ex-AgentWrapper)."
tagline_quote: "Plan, run, and supervise coding agents from one place."
features:
  - "Parallel agent sessions from one project; isolated git worktrees (no file/branch/PR mixing)"
  - "Automatic CI-failure routing + review feedback loop + merge-conflict routing"
  - "Live terminal control, PR-state awareness, in-app browser preview for UI work"
  - "23 worker adapters (Claude Code, Codex, Cursor, Aider, OpenCode, Copilot, Goose, Cline…)"
  - "Desktop app (Electron + Go daemon); legacy CLI frozen at npm 0.10.0"
choose_when: "You want Windows-friendly, Apache-licensed parallel coding with strong PR/CI/review/conflict loops and the widest agent support."
avoid_when: "You need OS-level containment (worktree is not a sandbox), a peer-team/messaging UX, or zero telemetry without a rebuild."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Agent Orchestrator (AO) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → cockpit / multiplexer (worktree + terminal + PR/CI) |
| Repo | https://github.com/Untrivial-ai/agent-orchestrator (**formerly `AgentWrapper/agent-orchestrator`, originally `ComposioHQ/agent-orchestrator`**) · docs: aoagents.dev |
| License | Apache-2.0 / Apache-2.0 |
| ⭐ / created | 9,631 · 2026-02 (very active; re-verified 2026-08-19) |
| Platforms | macOS (ARM + Intel) · Windows · Linux |
| Authority | outer controller (one per run) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
An **"Agentic IDE"** / meta-harness that supervises **parallel AI coding agents in isolated workspaces**, with automatic feedback loops from CI failures, review comments, and merge conflicts. Gives terminal-based agents (Claude Code, Codex, Cursor, …) a shared cockpit where sessions, terminals, branches, PRs, and feedback are supervised from one place.

## 2. Architecture
- **Stack:** Electron frontend + **Go backend daemon**.
- **Isolation:** each agent session runs in a **separate git worktree** (⚠️ a worktree is not a security sandbox).
- **Runtime:** live terminal access per session; local daemon watches session state, terminal activity, PRs, CI, review feedback.
- **Loop:** "Add a project → Start sessions → Create isolated git worktrees → Launch coding agent → Watch state/terminal/PRs/CI → Show status and send follow-up instructions."

## 3. Features
- Parallel agent session management from one project.
- Isolated workspaces (no file/branch/PR mixing).
- **Automatic CI-failure routing** back to the correct agent.
- **Review feedback loop** with reviewer-agent runs.
- **Merge-conflict handling/routing.**
- In-app **browser preview** for UI work; PR state awareness; review-status inspection/action routing.
- Live terminal control + session summaries.

## 4. Supported agents (23 worker adapters)
Claude Code, Codex, Aider, OpenCode, Grok, Droid, Amp, Agy, Crush, Cursor, Qwen, Copilot, Goose, Auggie, Continue, Devin, Cline, Kimi, Kiro, KiloCode, Vibe, Pi, AutoHand. **Reviewer agents:** Claude Code, Codex, OpenCode.

## 5. Interfaces & platforms
Desktop app (primary control surface). Legacy CLI **frozen** at npm `0.10.0` (no longer recommended). macOS/Windows/Linux.

## 6. Telemetry / privacy
Electron renderer sends **anonymous usage events to PostHog**; session recording enabled with "local paths and local URLs redacted before transmission." Disable by setting `VITE_AO_POSTHOG_KEY` to empty before building.

## 7. Roadmap
- **Was:** `ComposioHQ/agent-orchestrator` → `AgentWrapper/agent-orchestrator`.
- **Now (2026-08):** transferred again to **`Untrivial-ai/agent-orchestrator`** (org "Untrivial.ai"; brand now plain "Agent Orchestrator", X @aoagents, docs aoagents.dev); ⭐9.6k; desktop build preferred; active (frequent releases).
- **Ahead:** desktop-first; in-flight work per STATUS.md.

## 8. What it is NOT / limitations
- **Not** a replacement for agents ("agents still do the coding").
- **Not a sandbox** — worktree isolation only; inherits host permissions.
- Requires terminal-based agent CLIs; legacy npm CLI frozen; desktop preferred.
- Telemetry on by default (redacted; disablable).

## 9. Positioning
- **Agent Orchestrator (AO)** — permissive (Apache-2.0), worktree/terminal/PR/CI cockpit with the widest worker-adapter list; strong for PR/CI/review loops.
- vs Agent Teams AI (peer-team/kanban/messaging cockpit, AGPL), GasTown (Beads-native terminal swarm), Vibe Kanban (sunsetting).

## 10. Hands-on
`docs-only` (2026-07-20). **TODO:** install desktop app; run 2 parallel Claude Code sessions on a repo; observe CI-fail routing + worktree isolation.

## 11. Sources
- https://github.com/Untrivial-ai/agent-orchestrator (README; `AgentWrapper/agent-orchestrator` redirects) · aoagents.dev/docs
- ReviewedResearch.md (history: Apache-2.0, redirect from ComposioHQ)

_Last updated: 2026-08-19 · Researcher: Claude_
