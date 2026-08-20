---
name: Context7
slug: context7
category: context-reducers
subtype: "6.3 just-in-time context providers"
repo: https://github.com/upstash/context7
site: https://context7.com
maker: Upstash
license_claimed: MIT
license_detected: MIT
stars: 60992
created: "2025-03"
language: TypeScript
maturity: Prominent
status: active
local: false
one_liner: "An MCP server that injects current, version-specific docs + code examples into your prompt on demand ('use context7') - fixing outdated/hallucinated APIs. Hosted; MIT."
tagline_quote: "Up-to-date code documentation for LLMs and AI code editors."
features:
  - "Version-specific, current docs + examples injected via MCP"
  - "Trigger with 'use context7'; resolves library IDs then queries live docs"
  - "Clients: Cursor, Claude Code, VS Code, OpenCode, Windsurf + 30+ MCP clients"
  - "Hosted (mcp.context7.com); free tier + API key for higher rate limits"
choose_when: "You want to stop the model hallucinating outdated APIs - inject current, version-correct docs on demand."
avoid_when: "Your issue is token size (use a compressor/packer) or you need fully-offline (no hosted service)."
hands_on: docs-only
last_verified: "2026-08-20"
---
# Context7 — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Context reducers → 6.3 just-in-time context provider |
| Repo / site | https://github.com/upstash/context7 · context7.com · mcp.context7.com |
| Maker | **Upstash** |
| License | **MIT** / MIT |
| ⭐ / created | 60,992 · 2025-03-26 · TypeScript · very active |
| Interface | MCP server (+ CLI/Skills); hosted; free tier + API key |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"Up-to-date code documentation for LLMs and AI code editors." An MCP server that injects **current, version-specific docs + code examples** into your prompt on demand — fixing outdated/hallucinated APIs.

## 2. Quotes (verbatim, from docs — attributed)
- How it works: *"Context7 fetches up-to-date code examples and documentation right into your LLM's context."*
- Problem: *"Code examples are outdated and based on year-old training data."*
- Problem: *"Hallucinated APIs that don't even exist."*

## 3. How it works
- Add **"use context7"** to your prompt.
- The MCP server resolves the library ID and queries live docs.
- Current, version-specific documentation appears in the context window.
- Two modes: CLI + Skills, or native MCP.

## 4. Features
- **Version-specific, current docs + examples** injected via MCP.
- Clients: Cursor, Claude Code, VS Code, OpenCode, Windsurf + 30+ MCP clients.
- Hosted (mcp.context7.com); free tier + API key for higher rate limits.

## 5. What it is NOT / limitations
- Not a compressor — it *adds* fresh context (fights staleness, not size); can add tokens.
- Hosted dependency (docs fetched from Context7's service).
- Coverage depends on indexed libraries.

## 6. Roadmap
- **Was:** launched by Upstash (Mar 2025); MCP-native docs provider.
- **Now (2026):** ⭐61k; MIT; 30+ clients; hosted + free tier; CLI/Skills + MCP.
- **Ahead:** broader library coverage; deeper editor integration.

## 7. Positioning
- **Context7** — the go-to JIT docs provider; stops models hallucinating outdated APIs.
- vs LLMLingua (compresses size), packers (pack your own repo). Complementary, not competing.

## 8. Hands-on
`docs-only` (2026-08-20). **TODO:** add the Context7 MCP server to Claude Code; prompt "use context7" for a versioned library; compare vs no-context7.

## 9. Sources
- https://github.com/upstash/context7 (README) · context7.com · mcp.context7.com

_Last updated: 2026-08-20 · Researcher: Claude_
