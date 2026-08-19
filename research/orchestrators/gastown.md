---
name: GasTown
slug: gastown
category: orchestrators
subtype: "2.2 Autonomous swarms & SDLC harnesses"
repo: https://github.com/gastownhall/gastown
site: https://yegge.ai/gastown
maker: Steve Yegge
license_claimed: MIT
license_detected: MIT
stars: 17668
created: "2025-12"
language: Go
maturity: Prominent
status: active
local: true
one_liner: "Steve Yegge's Beads-native multi-agent 'Dark Factory' — worker agents run in git-worktree hooks; a Refinery merge queue + 3-tier watchdog keep a terminal swarm running autonomously."
tagline_quote: "polecats never push directly to main"
features:
  - "Polecats (worker agents) + Convoys (bundled beads) with autonomous stall/skip logic"
  - "Refinery — Bors-style bisecting merge queue (batch/verify/merge/isolate failures)"
  - "3-tier Watchdog — Witness (per-rig), Deacon (cross-rig), Dogs (infra) with escalation"
  - "Scheduler capacity governor; gt feed TUI, web dashboard, gt seance recovery"
  - "Beads/Dolt work-truth ledger; Wasteland federation; OpenTelemetry; TOML Molecules"
choose_when: "You need a genuinely large, autonomous terminal swarm on Linux/WSL where Beads-native work truth, a real merge queue, and watchdog recovery justify the operational weight."
avoid_when: "Small repos, Windows-native (needs WSL), or you don't want Beads/Dolt coupling."
cross_links: ["§4"]
hands_on: docs-only
last_verified: "2026-08-19"
---
# GasTown — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`. Pairs with `research/memory/beads.md` (its work-truth layer).

| | |
|---|---|
| Category / sub-type | Orchestrators → autonomous swarm / SDLC harness (Beads-native terminal swarm) |
| Repo / site | https://github.com/gastownhall/gastown (**formerly `steveyegge/gastown`**) · yegge.ai/gastown |
| Maker | **Steve Yegge** (also author of **Beads**) |
| License | MIT / MIT |
| ⭐ / created | 17,104 · 2025-12 · **v1.2.x** (v1.0 Apr 2026 → v1.2.1/.2 Jun–Jul 2026) |
| Platforms | Linux (`go install` + Dolt) · macOS (`brew install gastown`) · **Windows via WSL** (tmux); Docker Compose all-platforms |
| Requires | Beads `bd` **0.57.0+** · Dolt · tmux 3.0+ · Go 1.26.2+ |
| Authority | outer controller (Beads-coupled work truth) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
Steve Yegge's toolkit to run his own coding-agent work, **open-sourced Jan 1 2026** — an early "**Dark Factory**" where agents work together autonomously in the background. Kubernetes-shaped: *"Polecats are workers, refineries serialize merges, a witness watches each rig, a mayor coordinates across rigs."*

## 2. Architecture
- **Beads/Dolt** — git-backed work ledger; bead IDs = prefix + 5-char (e.g. `gt-abc12`).
- **Polecats** — worker agents (persistent identity, ephemeral sessions).
- **Hooks** — git-worktree persistent storage (survives crashes/restarts).
- **Scheduler** — capacity governor (`scheduler.max_polecats`) to avoid rate-limit exhaustion.
- **Watchdog (3-tier)** — Witness (per-rig lifecycle) · Deacon (cross-rig supervisor) · Dogs (infra).
- **Convoys** — bundle multiple beads; `mountain` label → autonomous stall detection + smart skip for epic-scale.
- **Refinery** — Bors-style bisecting merge queue (batch/verify/merge or isolate failures).
- Coordination roles: **Mayor** (cross-rig), Overseer; escalation P0/P1/P2 → Deacon → Mayor → Overseer.

## 3. Features
Multi-agent coordination (Polecats) · real-time monitoring (`gt feed` TUI + problems view) · web dashboard · session discovery/recovery (`gt seance`) · **Wasteland** federated work network (shared "wanted board" via DoltHub) · OpenTelemetry + structured logging · workflow templates (**Molecules** with TOML formulas) · shell completions.

## 4. Supported agents
Claude Code (default), GitHub Copilot, Codex, Gemini, Cursor, Kiro, + custom presets (Auggie, Amp, OpenCode, Pi, OMP).

## 5. Quotes (verbatim, from the README — attributed)
- Overview: *"Multi-agent orchestration system for Claude Code, GitHub Copilot, and other AI agents with persistent work tracking."*
- Hooks: *"Git worktree-based persistent storage for agent work. Survives crashes and restarts."*
- Watchdog: *"Witness monitors polecats, detects stuck agents, triggers recovery, manages session cleanup."*
- Refinery: *"Bors-style bisecting queue — polecats never push directly to main."*
- The Mayor: *"Start here — just tell the Mayor what you want to accomplish."*
- Beads Integration: *"Bead IDs use a prefix + 5-character alphanumeric format (e.g., gt-abc12…)."*
- (Yegge on Beads: "like adderall for your coding agent"; GasTown as a "Dark Factory".)

## 6. What it is NOT / limitations
- **Not a sandbox** — *"Worktrees are persistent git directories, not isolated containers."*
- **Beads dependency** — requires `bd` 0.57.0+ and Dolt; operational complexity increases with scale.
- **Operational weight** — tmux 3.0+, SQLite, ICU4C dev headers; Docker Compose recommended.
- **Workflow specificity** — Molecules require TOML; not for ad-hoc agent orchestration.
- Windows is effectively WSL (tmux).

## 7. Roadmap
- **Was:** Yegge's personal agent toolkit → open-sourced Jan 1 2026; moved `steveyegge/gastown` → **`gastownhall/gastown`**.
- **Now (2026):** ⭐17k; v1.0 (Apr) → v1.2.x (Jun–Jul); **Wasteland** federation (Mar 2026); a **hosted cloud version from Kilo**.
- **Ahead:** no formal public roadmap; the autonomous "Dark Factory" direction (Beads + GasTown ecosystem).

## 8. Positioning
- **GasTown** — the deepest **Beads-native** terminal swarm with a real merge queue + watchdog recovery; heavy but powerful; Linux/WSL.
- vs AgentWrapper AO (lighter desktop cockpit), Open Multi-Agent (library DAG), Bernstein (deterministic harness). Corpus verdict: "GasTown only for a real large-swarm need."

## 9. Hands-on
`docs-only` (2026-07-20). **TODO:** WSL/Linux install (`bd` + Dolt + tmux); run a small convoy of 2 polecats; watch a Refinery merge + Witness recovery.

## 10. Sources
- https://github.com/gastownhall/gastown (README, CHANGELOG) · yegge.ai/gastown · steve-yegge.medium.com (Gas Town posts)
- ReviewedResearch.md (facts: MIT, ⭐17,104, redirect from steveyegge/gastown)

_Last updated: 2026-07-20 · Researcher: Claude_
