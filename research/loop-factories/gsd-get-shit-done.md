---
name: "GSD (Get Shit Done)"
slug: gsd-get-shit-done
category: loop-factories
subtype: "5.2 Autonomy-loop protocols"
repo: https://github.com/open-gsd/gsd-core
site: null
maker: "Open GSD (community) — originally TÂCHES (Lex Christopherson)"
license_claimed: MIT
license_detected: MIT
stars: 8456
created: "2025-12"
language: JavaScript
maturity: Established
status: active
local: partial
one_liner: "Spec-driven autonomy system running each atomic task in a fresh 200K-context sub-agent with disk-persisted state; continues as community GSD Core (multi-CLI) — the archived original holds 64.7k★."
tagline_quote: "Git. Ship. Done."
features:
  - "Chain of slash-command phases, ideally each in a fresh context window"
  - "Atomic tasks → fresh agent instance per task; main session stays lean (30-40% context)"
  - "Disk-persisted state (text files) → new sessions resume"
  - "/gsd-autonomous for hands-off phase advancement (pairs with /loop)"
  - "GSD Core is multi-CLI: Claude Code, OpenCode, Codex, Copilot, Cursor, Windsurf, … (npm @opengsd/gsd-core)"
choose_when: "You want spec-driven, long-horizon autonomy on Claude Code and other agent CLIs (via community GSD Core) with disciplined fresh-context sub-agents and disk state."
avoid_when: "You want a minimal raw loop (ralph-*) or a runnable multi-agent platform (Ruflo); avoid the archived original for new work."
cross_links: ["§1"]
hands_on: docs-only
last_verified: "2026-08-19"
---
# GSD (Get Shit Done) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Loop factories → 5.2 autonomy-loop / spec-driven system (Claude Code) |
| Repo (canonical, community) | https://github.com/open-gsd/gsd-core — **active** ("GSD Core"; renamed from `open-gsd/get-shit-done-redux`, old URL redirects) |
| Repo (original) | https://github.com/gsd-build/get-shit-done — **archived**; its README now says the project *"continues as GSD Core"* |
| Maker | **Open GSD** (community) — originally **TÂCHES (Lex Christopherson)**, unreachable since 2026-05 |
| License | **MIT** / MIT (both repos) |
| ⭐ / created | GSD Core 8,456 · repo created 2026-05-22 (pushed 2026-08-19) · original 64,671 · 2025-12-14 (archived, frozen 2026-05-31) |
| Backends | multi-CLI: Claude Code, OpenCode, Antigravity CLI, Kimi CLI, Kilo, Codex, Copilot, Cursor, Windsurf, … |
| Researched | 2026-08-19 · hands-on: **docs-only** |

## 1. What it is
"A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES." Breaks a project into small tasks, each executed in a fresh 200K-token context window by specialized sub-agents, with disk-persisted state — so agents can run autonomously for a long time without losing the big picture.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"a light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code."*
- Archive notice: *"This repository is no longer the active home for GSD development."*
- (Coverage): *"The project now continues as GSD Core in the Open GSD repository."*

## 3. How it works
- Chain of **slash-command phases**; ideally each phase runs in a fresh context window.
- Breaks work into **atomic tasks**; each task gets a fresh Claude instance with a clean 200K context via specialized sub-agents.
- Main session stays lean (30–40% context); **all project state persisted to disk as text files** → new sessions resume.
- **`/gsd-autonomous`** advances through phases without manual intervention (pairs with `/loop`).

## 4. ⚠️ Status (VERIFIED, re-checked 2026-08-19)
- Original `gsd-build/get-shit-done` is **archived**; in May 2026 maintainer TÂCHES became unreachable and deleted social accounts. Its README now redirects: *"This repository is no longer the active home for GSD development"* → GSD Core.
- Community continuation launched **2026-05-22** as `open-gsd/get-shit-done-redux`, since **renamed `open-gsd/gsd-core`** ("GSD Core — *Git. Ship. Done.*"); MIT; ⭐8,456; very active (pushed 2026-08-19); npm **`@opengsd/gsd-core`**.
- Scope broadened beyond Claude Code: GSD Core targets **Claude Code, OpenCode, Antigravity CLI, Kimi CLI, Kilo, Codex, Copilot, Cursor, Windsurf, and more**.
- Derivatives: **Buildomator** (gsd-plugin, native Claude Code plugin), get-shit-done-multi (multi-CLI fork), gsd-opencode.

## 5. What it is NOT / limitations
- Not a runnable binary (a prompt/spec system for Claude Code).
- Original repo archived → use the community redux for updates.
- Spec/phase overhead for tiny tasks.
- More a spec-driven process system than a raw loop (overlaps Process packs).

## 6. Roadmap
- **Was:** built by TÂCHES (Dec 2025); exploded to ~64k⭐; spec-driven + fresh-context sub-agents.
- **Now (2026-08):** original archived (maintainer vanished May 2026); community continuation renamed **GSD Core** (`open-gsd/gsd-core`, ⭐8.4k, multi-CLI, npm `@opengsd/gsd-core`); Buildomator + multi-CLI forks.
- **Ahead:** community-driven (Open GSD); plugin packaging; broader CLI coverage.

## 7. Positioning
- **GSD** — the flagship spec-driven autonomy system for Claude Code (fresh-context sub-agents + disk state + `/gsd-autonomous`).
- vs Buildomator (its plugin evolution), Ruflo (swarm meta-harness), ralph-* (raw loops), Kiro (§1, spec-driven IDE).

## 8. Hands-on
`docs-only` (2026-08-19). **TODO:** install **GSD Core** (`npm i -g @opengsd/gsd-core`); run a spec → phases → `/gsd-autonomous` on a small feature.

## 9. Sources
- https://github.com/open-gsd/gsd-core (active canonical; `open-gsd/get-shit-done-redux` redirects) · https://github.com/gsd-build/get-shit-done (archived original + redirect notice) · augmentcode.com, dev.to (guides)

_Last updated: 2026-08-19 · Researcher: Claude_
