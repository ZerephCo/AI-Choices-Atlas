---
name: RepoPrompt CE
slug: repoprompt-ce
category: context-reducers
subtype: "6.2 repo/codebase packers"
repo: https://github.com/repoprompt/repoprompt-ce
site: https://repoprompt.com
maker: RepoPrompt
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 820
created: "2026-05"
language: Swift
maturity: Emerging
status: active
local: true
one_liner: "Free, open-source native macOS context-engineering app + agent orchestrator: assembles focused, reviewable context (files, CodeMaps, git diffs) within a token budget; MCP CLI. macOS 26+ only."
tagline_quote: "A free, open-source native macOS app and agent orchestrator for context engineering."
features:
  - "Context Builder - an agent explores the repo and curates context within a token budget"
  - "Dense, reviewable prompts: file trees + selected contents + line slices + CodeMaps + git diffs"
  - "Agent orchestration - run/coordinate CLI-backed coding agents with app-managed worktrees"
  - "MCP CLI / server for external tool connectivity"
choose_when: "You want an interactive, native-app context builder with CodeMaps, token budgeting, and agent orchestration."
avoid_when: "You are not on macOS 26+, or you want a headless cross-platform CLI packer (Repomix/gitingest)."
hands_on: docs-only
last_verified: "2026-07-20"
---
# RepoPrompt CE — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Context reducers → 6.2 context-engineering app (native macOS) |
| Repo | https://github.com/repoprompt/repoprompt-ce |
| Maker | **RepoPrompt** (community edition of the commercial RepoPrompt app) |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 820 · 2026-05 · Swift |
| Platform | **macOS 26+ only** |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Community edition of RepoPrompt: a native macOS context engineering app for AI coding agents, with an MCP CLI." A GUI to assemble focused, reviewable context (files, CodeMaps, structure, git diffs) and hand it to AI tools + CLI agents.

## 2. Quotes (verbatim, from docs — attributed)
- Definition: *"A free, open-source native macOS app and agent orchestrator for context engineering."*
- Assembly: *"Assembles focused, reviewable context from files, CodeMaps, repository structure, and Git diffs."*
- Context Builder: *"Let an agent explore the repository, identify relevant files, and curate context within a token budget."*
- Composition: *"Combine file trees, selected file contents, line slices, CodeMaps, and Git diffs."*

## 3. Features
- **Context Builder** — an agent explores the repo, identifies relevant files, and curates context within a **token budget**.
- Dense, reviewable prompts combining file trees + selected contents + **line slices** + **CodeMaps** + **git diffs**.
- **Agent orchestration** — run/coordinate CLI-backed coding agents from the native app, with app-managed **worktrees**.
- **MCP CLI / server** for external tool connectivity.

## 4. Relationship to paid RepoPrompt
- RepoPrompt CE is the **free, open-source community edition** of the commercial RepoPrompt app — a native macOS workspace for context engineering.

## 5. What it is NOT / limitations
- **macOS 26+ only** (no cross-platform) — unlike CLI packers (Repomix/gitingest run anywhere).
- A GUI context builder + orchestrator, not a headless CLI (though it has an MCP CLI).

## 6. Roadmap
- **Was:** created 2026-05 as the community edition of RepoPrompt.
- **Now (2026):** ⭐820; Apache-2.0; Context Builder + CodeMaps + git diffs + agent orchestration; Homebrew cask.
- **Ahead:** parity with the commercial app; more orchestration.

## 7. Positioning
- **RepoPrompt CE** — an interactive, native-app context builder (with CodeMaps + token budgeting + agent orchestration), vs headless CLI packers.
- vs Repomix (feature-rich CLI packer), code2prompt (templating), gitingest (URL), files-to-prompt (minimal), yek (fast).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** `brew tap repoprompt/repoprompt-ce` + `brew install --cask repoprompt-ce`; build context with CodeMaps + a git diff within a token budget; orchestrate a CLI agent.

## 9. Sources
- https://github.com/repoprompt/repoprompt-ce (README) · repoprompt.com

_Last updated: 2026-07-20 · Researcher: Claude_
