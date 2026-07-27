---
name: code2prompt
slug: code2prompt
category: context-reducers
subtype: "6.2 repo/codebase packers"
repo: https://github.com/mufeedvh/code2prompt
site: null
maker: mufeedvh
license_claimed: MIT
license_detected: MIT
stars: 7486
created: "2024-03"
language: Rust
maturity: Established
status: active
local: true
one_liner: "Convert your codebase into a single LLM prompt with source tree, Handlebars prompt templating, and token counting - a fast Rust CLI + SDK. MIT."
tagline_quote: "convert your codebase into a single LLM prompt with source tree, prompt templating, and token counting."
features:
  - "Source tree + file contents into one prompt"
  - "Prompt templating (Handlebars) - customize output structure/instructions"
  - "Token counting; glob include/exclude; .gitignore respect"
  - "Fast (Rust); usable as a library/SDK"
choose_when: "You want customizable prompt templating (Handlebars) over a packed codebase."
avoid_when: "You want a hosted web service (gitingest) or the richest feature set + MCP (Repomix)."
hands_on: docs-only
last_verified: "2026-07-20"
---
# code2prompt — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Context reducers → 6.2 repo packer (templating) |
| Repo | https://github.com/mufeedvh/code2prompt |
| Maker | **mufeedvh** |
| License | **MIT** / MIT |
| ⭐ / created | 7,486 · 2024-03-09 · Rust · very active |
| Interfaces | CLI (Rust) · SDK/library |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"A CLI tool to convert your codebase into a single LLM prompt with source tree, prompt templating, and token counting."

## 2. Quotes (verbatim — attributed)
- Repo desc: *"convert your codebase into a single LLM prompt with source tree, prompt templating, and token counting."*

## 3. Features
- **Source tree** + file contents into one prompt.
- **Prompt templating** (Handlebars) — customize the output structure/instructions.
- **Token counting**; glob include/exclude; `.gitignore` respect.
- Fast (Rust); usable as a library/SDK.

## 4. What it is NOT / limitations
- Lossless selection (not a compressor).
- CLI-first (no hosted web service).
- Big repos can exceed budget → filter.

## 5. Roadmap
- **Was:** created Mar 2024; popular templating packer.
- **Now (2026):** ⭐7.5k; MIT; templating + token counting; SDK.
- **Ahead:** more templates; integrations.

## 6. Positioning
- **code2prompt** — the packer for **customizable prompt templating** over a codebase.
- vs Repomix (feature-rich + MCP), gitingest (URL), files-to-prompt (minimal), yek (speed).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** run code2prompt with a custom Handlebars template; check token counts.

## 8. Sources
- https://github.com/mufeedvh/code2prompt (README)

_Last updated: 2026-07-20 · Researcher: Claude_
