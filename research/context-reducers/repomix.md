---
name: Repomix
slug: repomix
category: context-reducers
subtype: "6.2 repo/codebase packers"
repo: https://github.com/yamadashy/repomix
site: https://repomix.com
maker: yamadashy
license_claimed: MIT
license_detected: MIT
stars: 27963
created: "2024-07"
language: TypeScript
maturity: Prominent
status: active
local: true
one_liner: "Packs your entire repository into a single AI-friendly file - the feature-rich packer with Tree-sitter compression, Secretlint security, token counting, and an MCP server. MIT."
tagline_quote: "Repomix packs your entire repository into a single, AI-friendly file"
features:
  - "Token counting per file + whole repo (context-limit awareness)"
  - "Tree-sitter code compression - extracts functions/classes/interfaces, cutting tokens"
  - "Include/ignore globs; respects .gitignore / .ignore / .repomixignore"
  - "Secretlint security check - blocks API keys/passwords"
  - "Outputs XML / Markdown / JSON / Plain Text; remote-repo packing"
  - "MCP server; many interfaces (CLI/web/VS Code/browser/Docker)"
choose_when: "You want the most feature-rich packer - compression + security scanning + token counting + MCP."
avoid_when: "You want zero-install from a URL (gitingest) or a minimal Unix-pipe packer (files-to-prompt)."
hands_on: docs-only
last_verified: "2026-08-20"
---
# Repomix — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Context reducers → 6.2 repo/codebase packer (feature-rich flagship) |
| Repo / site | https://github.com/yamadashy/repomix · repomix.com |
| Maker | **yamadashy** |
| License | **MIT** / MIT |
| ⭐ / created | 27,963 · 2024-07-13 · TypeScript · very active |
| Interfaces | CLI/npx · web (repomix.com) · VS Code ext · browser ext · MCP server · Docker |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"Repomix packs your entire repository into a single, AI-friendly file" — perfect for feeding a codebase to LLMs (Claude, ChatGPT, Gemini, …). The most feature-rich packer.

## 2. Quotes (verbatim, from docs — attributed)
- Value: *"Pack your codebase into AI-friendly formats."*
- Config: *"Automatically respects your `.gitignore`, `.ignore`, and `.repomixignore` files."*
- Security: *"Incorporates Secretlint… to detect and prevent inclusion of sensitive information."*

## 3. Features
- **Token counting** per file + whole repo (context-limit awareness).
- **Code compression** via **Tree-sitter** — extracts essential elements (functions/classes/interfaces), cutting tokens while preserving structure.
- **Include/ignore globs**; respects `.gitignore` / `.ignore` / `.repomixignore`.
- **Security check** (Secretlint) — blocks API keys/passwords.
- **Output formats**: XML (default), Markdown, JSON, Plain Text.
- **Remote repo** packing; **MCP server**; many interfaces (CLI/web/VS Code/browser/Docker).

## 4. What it is NOT / limitations
- Not a lossy compressor (it's lossless *selection* + optional Tree-sitter structural compression).
- Big repos can still exceed budget → use globs + token counting.
- Packs a snapshot (not live/JIT like Context7).
- File processors (new in 2026) run arbitrary commands from the config — default-deny: *"Enabled only for local CLI runs"*, disabled for library API / MCP / hosted; review untrusted repos' configs first (re-verified 2026-08-20).

## 5. Roadmap
- **Was:** created Jul 2024; grew into the leading repo packer.
- **Now (2026):** ⭐28k; MIT; Tree-sitter compression + Secretlint + MCP + many interfaces.
- **Ahead:** deeper compression; more integrations.

## 6. Positioning
- **Repomix** — the feature-rich packer (compression + security + token counting + MCP).
- vs gitingest (URL, zero-install), code2prompt (templating), files-to-prompt (minimal), yek (speed).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** `npx repomix@latest` on a repo; try Tree-sitter compression + token counts; wire the MCP server into Claude Code.

## 8. Sources
- https://github.com/yamadashy/repomix (README) · repomix.com

_Last updated: 2026-08-20 · Researcher: Claude_
