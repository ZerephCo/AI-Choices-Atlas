---
name: Playwright
slug: playwright
category: qa-eval
subtype: "11.3 browser / UI test automation (+ agent browser control)"
repo: https://github.com/microsoft/playwright
site: https://playwright.dev
maker: Microsoft
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 94785
created: "2019-11"
language: TypeScript
maturity: Prominent
status: active
local: true
one_liner: "A framework for web testing and automation — cross-browser (Chromium/Firefox/WebKit) with one API; backbone of agent browser control (Playwright MCP)."
tagline_quote: "Playwright is a framework for Web Testing and Automation."
features:
  - "Cross-browser (Chromium/Firefox/WebKit); one API; auto-wait"
  - "Codegen; trace viewer; parallelization; CI-friendly; many language bindings"
  - "Playwright MCP — lets agents drive a real browser (agent tool)"
choose_when: "You want browser automation — testing agent-built web apps or giving an agent a real browser via MCP."
avoid_when: "You need an LLM eval tool (pair with promptfoo/DeepEval)."
hands_on: docs-only
last_verified: "2026-08-20"
---
# Playwright — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | QA/eval → 11.3 browser / UI test automation (+ agent browser control) |
| Repo / site | https://github.com/microsoft/playwright · playwright.dev |
| Maker | **Microsoft** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 94,785 · 2019-11 · TypeScript |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"Playwright is a framework for Web Testing and Automation." Cross-browser (Chromium/Firefox/WebKit) automation with one API — the backbone of agent browser control (Playwright MCP) and testing of agent-built UIs.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Playwright is a framework for Web Testing and Automation."*
- Repo desc: *"It allows testing Chromium, Firefox and WebKit with a single API."*

## 3. Features
- **Cross-browser** (Chromium/Firefox/WebKit); one API; auto-wait.
- Codegen; trace viewer; parallelization; CI-friendly; many language bindings.
- **Playwright MCP** — lets agents drive a real browser (agent tool).

## 4. What it is NOT / limitations
- Not an LLM eval tool (pair with promptfoo/DeepEval for that).
- Browser automation, not observability.

## 5. Roadmap
- **Was:** 2019-11 (Microsoft).
- **Now (2026):** ⭐95k; cross-browser + Playwright MCP for agents.
- **Ahead:** deeper MCP/agent integration.

## 6. Positioning
- **Playwright** — the standard for browser automation; used both to *test* agent-built web apps and to *give agents* a browser (MCP).
- vs promptfoo/DeepEval (LLM eval), Langfuse/Phoenix (observability).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** write a Playwright test for an agent-built page; try Playwright MCP to give an agent browser control.

## 8. Sources
- https://github.com/microsoft/playwright (README) · playwright.dev

_Last updated: 2026-08-20 · Researcher: Claude_
