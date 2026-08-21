---
name: "Beads"
slug: beads
category: memory
subtype: "4.1 Project / task memory"
repo: https://github.com/gastownhall/beads
site: https://beads.gascity.com
maker: "Steve Yegge"
license_claimed: MIT
license_detected: MIT
stars: 26445
created: "2025-10"
language: Go
maturity: Prominent
status: active
local: true
one_liner: "A Dolt-backed distributed graph issue tracker giving coding agents persistent, dependency-aware task memory — a memory upgrade for your coding agent."
tagline_quote: "A memory upgrade for your coding agent"
features:
  - "Dolt-backed versioned SQL: embedded (single-writer) or server (concurrent); JSONL export is interchange, not a backup"
  - "Dependency graph with hash IDs (bd-a1b2) — collision-proof across agents/branches; Epic→Task→Sub-task"
  - "auto-ready detection (bd ready) + atomic claim; blocks/related-to/duplicates/supersedes/replies-to"
  - "bd remember persistent insights injected via bd prime; semantic memory-decay compaction"
  - "CLI · JSON · MCP (Claude/Copilot); fully offline, works without git (stealth mode)"
choose_when: "You want canonical, dependency-aware task/work memory for one or many coding agents, with git-backed sync and offline operation."
avoid_when: "You only need semantic recall (use Mem0/Graphiti) — Beads owns work truth, not general knowledge."
hands_on: run
last_verified: "2026-08-19"
---
# Beads (bd) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → **project/task** (canonical work truth) |
| Repo / docs | https://github.com/gastownhall/beads (formerly `steveyegge/beads`) · beads.gascity.com |
| Maker | **Steve Yegge** (ex-Google/Amazon); core memory layer of **GasTown** |
| License | MIT / MIT |
| Language | Go · macOS / Linux / Windows / FreeBSD |
| ⭐ / created | 26,445 · 2025-10 · **v1.0.x** (installed here: **v1.0.4**) |
| Authority | **canonical** (owns work truth — unlike suggestive semantic memory) |
| Researched | 2026-07-20 · hands-on: **run** (used live this session) |

## 1. What it is
"A memory upgrade for your coding agent" — a distributed, git-backed **graph issue tracker powered by Dolt** that gives coding agents persistent, dependency-aware task memory. Replaces messy markdown TODO plans with a dependency graph agents can query, claim, and update across sessions and branches. (Yegge: "a 4-dimensional graph-based git-backed fairy-dusted issue-tracker database.")

## 2. Architecture
- **Backend:** **Dolt** (a version-controlled SQL database). Embedded mode `.beads/embeddeddolt/` (single writer, in-process) or server mode `.beads/dolt/` (external `dolt sql-server`, concurrent writers).
- **Export:** `.beads/issues.jsonl` is an interchange/viewer format — **not authoritative, not a backup** (Dolt is the truth).
- **Data model:** dependency graph; **hash-based IDs** (`bd-a1b2`) prevent merge collisions across agents/branches; hierarchy Epic → Task → Sub-task (`bd-a3f8.1.1`); cell-level merge + native branching via Dolt.
- **Sync:** cross-machine via `bd dolt push/pull` against git remotes.

## 3. Features
- **Issue types:** tasks, threaded messages, epics (with sub-hierarchies).
- **Dependencies:** blocks · related-to · duplicates · supersedes · replies-to; **auto-ready detection**.
- **Ready-work:** `bd ready` surfaces unblocked tasks; atomic claim mechanism.
- **Memory/KV:** `bd remember` stores persistent insights; injected via `bd prime`.
- **Compaction:** semantic "**memory decay**" summarizes old closed tasks to preserve context window.
- **Git integration (optional):** hooks, repo discovery, identity; **stealth / git-free** modes; works with non-git VCS (Sapling, Jujutsu, Piper).
- **Federation:** contributor (forked repos) vs maintainer (write access) modes.
- **Messaging:** threads, ephemeral lifecycle, mail delegation.

## 4. Interfaces
CLI (primary) · agent-optimized **JSON output** (`--json`) · **MCP** (Claude, GitHub Copilot) · JSONL export. Install via Brew / npm / go install / script.

## 5. Local/offline
Fully offline-capable; **works without git** (`bd init --stealth`, `BEADS_DIR`); suitable for monorepos, CI/CD, ephemeral testing. No external LLM required for core (compaction summaries may use one).

## 6. Roadmap
- **Was:** created by **Steve Yegge** (Oct 2025) — "a drop-in cognitive upgrade for your coding agent." Repo moved `steveyegge/beads` → `gastownhall/beads`. Went 0.x → 1.0 by mid-2026.
- **Now (2026):** v1.0.x; actively maintained (Brew/npm/PyPI); **core memory layer of GasTown** (Yegge's agent-orchestration environment).
- **Ahead:** enhanced multi-agent orchestration; improved conflict resolution; deeper Claude Code / agent-framework integration.

## 7. What it is NOT / limitations
- **Not version control** (task/issue tracking, not source-code management).
- **Not markdown-based** (explicitly replaces TODO/markdown plans).
- **Single-writer in embedded mode** — server mode required for true concurrent writers.
- **Export ≠ backup** — JSONL is interchange; Dolt is authoritative.
- **Upgrade care** — schema migrations need coordinated binary updates in remote-backed setups (`bd export --all` first; one clone runs `bd migrate && bd dolt push`, others `bd bootstrap`).

## 8. Hands-on — `run` (2026-07-20, used live this session; v1.0.4 embedded Dolt)
- `bd init -p aca --non-interactive` → created `.beads/` (embedded Dolt), installed git hooks, generated `AGENTS.md` + `CLAUDE.md` + `.claude/settings.json` (SessionStart/PreCompact hooks), and **auto-committed** beads files.
- Created an epic + child (`aca-2t5` → `aca-2t5.1`) and a task (`aca-b31`) with **hash IDs**; hierarchy shown in `bd list` as a tree.
- `bd comment <id> --actor Claude` → attributed comments (used for the whole atlas work log).
- `bd update --status in_progress`; statuses: open / in_progress / blocked / deferred / closed / pinned / hooked.
- **Auto-export** to `.beads/issues.jsonl` (throttled ~60s) + a **pre-commit hook** re-export ("Exported N issues").
- `bd doctor` prints "not yet supported in embedded mode" (expected); `bd export`, `bd status`, `bd show --json` all work.
- Everything matched the documented behavior.

## 9. Sources
- https://github.com/gastownhall/beads (README, FAQ) · https://beads.gascity.com/
- https://x.com/Steve_Yegge/status/1977645937225822664 (launch)
- Direct hands-on this session (v1.0.4).

_Last updated: 2026-07-20 · Researcher: Claude_
