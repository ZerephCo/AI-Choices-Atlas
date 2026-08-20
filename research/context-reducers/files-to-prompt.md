---
name: files-to-prompt
slug: files-to-prompt
category: context-reducers
subtype: "6.2 repo/codebase packers"
repo: https://github.com/simonw/files-to-prompt
site: null
maker: Simon Willison
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 2776
created: "2024-03"
language: Python
maturity: Established
status: active
local: true
one_liner: "Concatenate a directory full of files into a single prompt for LLMs - a minimal, composable Unix-style packer (Claude-XML/Markdown output) that pairs with the llm CLI. Apache-2.0."
tagline_quote: "Concatenate a directory full of files into a single prompt for use with LLMs."
features:
  - "Concatenate files/dirs into one prompt; respects .gitignore"
  - "Claude-XML and Markdown output modes (--cxml, line numbers)"
  - "Minimal + composable (pipe into llm and other tools)"
choose_when: "You want a minimal, composable packer that fits a Unix pipeline with the llm CLI."
avoid_when: "You need Tree-sitter compression, an MCP server, or a security scan (use Repomix)."
hands_on: docs-only
last_verified: "2026-08-20"
---
# files-to-prompt — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Context reducers → 6.2 dir packer (minimal) |
| Repo | https://github.com/simonw/files-to-prompt |
| Maker | **Simon Willison** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 2,776 · 2024-03-22 · Python · active |
| Interfaces | CLI (Python) |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"Concatenate a directory full of files into a single prompt for use with LLMs." A minimal, composable Unix-style packer from Simon Willison (pairs with his `llm` CLI).

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Concatenate a directory full of files into a single prompt for use with LLMs."*

## 3. Features
- Concatenate files/dirs into one prompt; respects `.gitignore`.
- **Claude-XML** and Markdown output modes; `--cxml`, line numbers.
- Minimal + composable (pipe into `llm`, other tools).

## 4. What it is NOT / limitations
- Minimal by design (no Tree-sitter compression, no MCP, no security scan).
- Quiet repo: no pushes since 2025-02 (stable, feature-complete CLI; not archived — re-verified 2026-08-20).
- Lossless selection; big dirs can exceed budget → filter.

## 5. Roadmap
- **Was:** created Mar 2024 by Simon Willison (llm ecosystem).
- **Now (2026):** ⭐2.8k; Apache-2.0; Claude-XML/Markdown output.
- **Ahead:** small, stable Unix tool; llm-ecosystem integration.

## 6. Positioning
- **files-to-prompt** — the minimal, composable packer; great in a Unix pipeline with `llm`.
- vs Repomix (feature-rich), gitingest (URL), code2prompt (templating), yek (speed).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** `files-to-prompt . --cxml | llm -m claude ...` on a small dir.

## 8. Sources
- https://github.com/simonw/files-to-prompt (README) · simonwillison.net

_Last updated: 2026-08-20 · Researcher: Claude_
