---
name: "GSD (Get Shit Done)"
slug: gsd-get-shit-done
category: loop-factories
subtype: "5.2 Autonomy-loop protocols"
repo: https://github.com/gsd-build/get-shit-done
site: https://github.com/open-gsd/get-shit-done-redux
maker: "TÂCHES (Lex Christopherson)"
license_claimed: MIT
license_detected: MIT
stars: 64779
created: "2025-12"
language: JavaScript
maturity: Prominent
status: active
local: partial
one_liner: "A spec-driven autonomy system for Claude Code that runs each atomic task in a fresh 200K-context sub-agent with disk-persisted state; original archived, community redux active."
tagline_quote: "a light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code."
features:
  - "Chain of slash-command phases, ideally each in a fresh context window"
  - "Atomic tasks → fresh Claude instance per task; main session stays lean (30-40% context)"
  - "Disk-persisted state (text files) → new sessions resume"
  - "/gsd-autonomous for hands-off phase advancement (pairs with /loop)"
choose_when: "You want spec-driven, long-horizon autonomy on Claude Code (via the community redux) with disciplined fresh-context sub-agents and disk state."
avoid_when: "You want a minimal raw loop (ralph-*) or a runnable multi-agent platform (Ruflo); avoid the archived original for new work."
cross_links: ["§1"]
hands_on: docs-only
last_verified: "2026-07-20"
---
# GSD (Get Shit Done) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Loop factories → 5.2 autonomy-loop / spec-driven system (Claude Code) |
| Repo (original) | https://github.com/gsd-build/get-shit-done — **archived 2026** |
| Repo (community continuation) | https://github.com/open-gsd/get-shit-done-redux — **active** (GSD Core) |
| Maker | **TÂCHES (Lex Christopherson)** → community (open-gsd) after maintainer went unreachable |
| License | **MIT** / MIT (both) |
| ⭐ / created | original 64,779 · 2025-12-14 (archived, pushed 2026-05-31) · redux 6,867 · 2026-05-22 (active) |
| Backends | Claude Code (multi-CLI via forks: get-shit-done-multi, gsd-opencode) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

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

## 4. ⚠️ Status (VERIFIED)
- Original `gsd-build/get-shit-done` is **archived**; in May 2026 maintainer TÂCHES became unreachable and deleted social accounts.
- Community continuation launched **2026-05-22** at **open-gsd/get-shit-done-redux** (same MIT code, actively maintained — pushed 2026-07-20).
- Derivatives: **Buildomator** (gsd-plugin, native Claude Code plugin), get-shit-done-multi (multi-CLI fork), gsd-opencode.

## 5. What it is NOT / limitations
- Not a runnable binary (a prompt/spec system for Claude Code).
- Original repo archived → use the community redux for updates.
- Spec/phase overhead for tiny tasks.
- More a spec-driven process system than a raw loop (overlaps Process packs).

## 6. Roadmap
- **Was:** built by TÂCHES (Dec 2025); exploded to ~64k⭐; spec-driven + fresh-context sub-agents.
- **Now (2026):** original archived (maintainer vanished May 2026); community **redux** (open-gsd) active; Buildomator + multi-CLI forks.
- **Ahead:** community-driven (open-gsd); plugin packaging.

## 7. Positioning
- **GSD** — the flagship spec-driven autonomy system for Claude Code (fresh-context sub-agents + disk state + `/gsd-autonomous`).
- vs Buildomator (its plugin evolution), Ruflo (swarm meta-harness), ralph-* (raw loops), Kiro (§1, spec-driven IDE).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** install the community **redux** (open-gsd/get-shit-done-redux); run a spec → phases → `/gsd-autonomous` on a small feature.

## 9. Sources
- https://github.com/gsd-build/get-shit-done (archived) · https://github.com/open-gsd/get-shit-done-redux (active) · augmentcode.com, dev.to (guides)

_Last updated: 2026-07-20 · Researcher: Claude_
