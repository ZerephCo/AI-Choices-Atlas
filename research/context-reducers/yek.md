---
name: yek
slug: yek
category: context-reducers
subtype: "6.2 repo/codebase packers"
repo: https://github.com/bodo-run/yek
site: null
maker: bodo-run
license_claimed: MIT
license_detected: MIT
stars: 2471
created: "2025-01"
language: Rust
maturity: Emerging
status: active
local: true
one_liner: "A fast Rust tool to serialize text-based files in a repository or directory for LLM consumption - git-aware, with chunking to a token budget. MIT."
tagline_quote: "A fast Rust based tool to serialize text-based files in a repository or directory for LLM consumption."
features:
  - "Fast Rust serialization of a repo/dir into LLM-ready text"
  - "Git-aware; respects .gitignore; priority/ordering by git history"
  - "Chunking (split output by token/byte budget)"
choose_when: "You want the fastest, git-aware packer with chunking on a large repo."
avoid_when: "You want a feature-rich packer (Repomix) or prompt templating (code2prompt)."
hands_on: docs-only
last_verified: "2026-07-20"
---
# yek — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Context reducers → 6.2 repo packer (speed-focused) |
| Repo | https://github.com/bodo-run/yek |
| Maker | **bodo-run** |
| License | **MIT** / MIT |
| ⭐ / created | 2,471 · 2025-01-11 · Rust · active |
| Interfaces | CLI (Rust) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"A fast Rust based tool to serialize text-based files in a repository or directory for LLM consumption." Speed-focused packer.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"A fast Rust based tool to serialize text-based files in a repository or directory for LLM consumption."*

## 3. Features
- **Fast** Rust serialization of a repo/dir into LLM-ready text.
- Git-aware; respects `.gitignore`; priority/ordering by git history.
- **Chunking** (split output by token/byte budget).

## 4. What it is NOT / limitations
- Lossless selection (not a compressor).
- CLI-only; fewer features than Repomix.

## 5. Roadmap
- **Was:** created Jan 2026; speed-focused packer.
- **Now (2026):** ⭐2.5k; MIT; fast serialization + chunking.
- **Ahead:** more features; integrations.

## 6. Positioning
- **yek** — the fastest, git-aware packer with chunking.
- vs Repomix (feature-rich), gitingest (URL), code2prompt (templating), files-to-prompt (minimal).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** run yek on a large repo; test chunking to a token budget.

## 8. Sources
- https://github.com/bodo-run/yek (README)

_Last updated: 2026-07-20 · Researcher: Claude_
