---
name: gitingest
slug: gitingest
category: context-reducers
subtype: "6.2 repo/codebase packers"
repo: https://github.com/cyclotruc/gitingest
site: https://gitingest.com
maker: cyclotruc
license_claimed: MIT
license_detected: MIT
stars: 15203
created: "2024-11"
language: Python
maturity: Prominent
status: active
local: true
one_liner: "Replace 'hub' with 'ingest' in any GitHub URL to get a prompt-friendly extract of a codebase - the zero-install repo digest; also a CLI + Python package. MIT."
tagline_quote: "Replace 'hub' with 'ingest' in any GitHub URL to get a prompt-friendly extract of a codebase."
features:
  - "URL trick: github.com/... becomes gitingest.com/... returning a prompt-friendly digest"
  - "Digest = summary + directory tree + file contents"
  - "Also a CLI and Python package for scripting/self-host"
  - "Token/size stats; include/exclude patterns"
choose_when: "You want the fastest zero-install path from a public GitHub URL to an LLM-ready digest."
avoid_when: "You need a feature-rich local packer (Repomix) or private-repo packing without self-hosting."
hands_on: docs-only
last_verified: "2026-07-20"
---
# gitingest — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Context reducers → 6.2 repo packer (URL-based, zero-install) |
| Repo / site | https://github.com/cyclotruc/gitingest · gitingest.com |
| Maker | **cyclotruc** |
| License | **MIT** / MIT |
| ⭐ / created | 15,203 · 2024-11-29 · Python · very active |
| Interfaces | web (URL trick) · CLI · Python package |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Replace 'hub' with 'ingest' in any GitHub URL to get a prompt-friendly extract of a codebase." The zero-install way to turn a repo into an LLM-ready digest.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Replace 'hub' with 'ingest' in any GitHub URL to get a prompt-friendly extract of a codebase."*

## 3. Features
- **URL trick**: `github.com/...` → `gitingest.com/...` returns a prompt-friendly digest (summary + directory tree + file contents).
- Also a **CLI** and **Python package** for scripting/self-host.
- Token/size stats; include/exclude patterns.

## 4. What it is NOT / limitations
- Lossless selection (not a compressor); big repos can exceed budget.
- Public web service for the URL trick (self-host via package for private repos).

## 5. Roadmap
- **Was:** created Nov 2024; popularized the URL-swap digest.
- **Now (2026):** ⭐15k; MIT; web + CLI + package.
- **Ahead:** more filters; private-repo workflows.

## 6. Positioning
- **gitingest** — the fastest zero-install path from a public GitHub URL to an LLM-ready digest.
- vs Repomix (feature-rich), code2prompt (templating), files-to-prompt (minimal), yek (speed).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** swap hub→ingest on a public repo URL; then `pip install gitingest` for a private repo.

## 8. Sources
- https://github.com/cyclotruc/gitingest (README) · gitingest.com

_Last updated: 2026-07-20 · Researcher: Claude_
