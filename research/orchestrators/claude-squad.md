---
name: Claude Squad
slug: claude-squad
category: orchestrators
subtype: "2.1 Cockpits & multiplexers"
repo: https://github.com/smtg-ai/claude-squad
site: https://smtg-ai.github.io/claude-squad/
maker: smtg-ai
license_claimed: AGPL-3.0
license_detected: AGPL-3.0
stars: 8181
created: "2025-03"
language: Go
maturity: Established
status: active
local: true
one_liner: "Terminal cockpit (tmux + git worktrees) to run and supervise several coding agents — Claude Code, Codex, Aider — each isolated in its own workspace, reviewed before you ship."
tagline_quote: "Manage multiple AI agents like Claude Code, Codex, and Aider."
features:
  - "Supervise multiple terminal agents from one UI (tmux-based)"
  - "Each task isolated in its own git workspace/branch"
  - "Review an agent's work before applying/shipping changes"
  - "Agents: Claude Code, Codex, Aider (any terminal agent)"
  - "Local install via Homebrew / shell script; needs tmux + GitHub CLI"
choose_when: "You live in the terminal and want a lightweight, local multiplexer to run several coding agents in parallel worktrees."
avoid_when: "You want a graphical desktop cockpit, or AGPL-3.0's copyleft is a problem for your use."
cross_links: ["§1"]
hands_on: docs-only
last_verified: "2026-07-26"
---
# Claude Squad — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → 2.1 cockpit / multiplexer (terminal, tmux + worktrees) |
| Repo / site | https://github.com/smtg-ai/claude-squad · https://smtg-ai.github.io/claude-squad/ |
| Maker | **smtg-ai** |
| License | **AGPL-3.0** / AGPL-3.0 (strong copyleft) |
| ⭐ / created | **8,181** ⭐ · 591 forks · created 2025-03 · Go · active (pushed 2026-06) |
| Runs local | **✅** local terminal app (tmux + GitHub CLI); agents themselves call their cloud providers |
| Researched | 2026-07-26 · hands-on: **docs-only** |

## 1. What it is
A **terminal cockpit for managing multiple AI coding agents at once**. It uses `tmux` and **isolated git worktrees** so each agent gets its own workspace/branch, and you supervise them from a single UI, reviewing changes before applying them. A lightweight, terminal-native take on the board+worktree pattern.

## 2. Quotes (verbatim — attributed)
- Repo: *"Manage multiple AI terminal agents like Claude Code, Codex, OpenCode, and Amp."*
- Site: *"Manage multiple AI agents like Claude Code, Codex, and Aider. 10x your productivity."*

## 3. Features
- **One UI over many terminal agents** (Claude Code, Codex, Aider, …).
- **Isolated git workspace per task** (separate branch/worktree).
- **Review-before-ship** — inspect an agent's diff before applying.
- **Local**, installed via Homebrew or a shell script; depends on **tmux** + **GitHub CLI**.

## 4. Choose / avoid
- **Choose it when** you're terminal-first and want a small, local multiplexer for parallel agents in worktrees.
- **Avoid when** you want a graphical desktop cockpit (see T3 Code, Emdash), or AGPL-3.0 copyleft is unacceptable.
- Related: it drives the coding agents in §1; compare with terminal-vs-GUI cockpits T3 Code / cmux / Emdash (§2.1).

## 5. Roadmap / status
- **Now:** active (created 2025-03, ~8.2k ⭐, Go); established terminal cockpit.

## 6. Sources
- https://github.com/smtg-ai/claude-squad (GitHub API: 8,181 ⭐, AGPL-3.0, Go, created 2025-03)
- https://smtg-ai.github.io/claude-squad/ (site — tagline, features)
- InitialResearch.md (corpus cockpit-multiplexer discovery list; not previously carded)

_Last verified: 2026-07-26 · verdict: 🟢 active · Researcher: Claude_
