---
name: Gemini CLI
slug: gemini-cli
category: coding-agents
subtype: "1.1 CLI coding agents"
repo: https://github.com/google-gemini/gemini-cli
site: https://geminicli.com
maker: Google
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 106569
created: "2025-04"
language: TypeScript
maturity: Prominent
status: active
local: partial
one_liner: "An open-source terminal AI agent that brings Gemini into your shell, with a ReAct loop, built-in Google Search grounding, 1M context, and MCP Extensions."
tagline_quote: "open-source AI agent that brings the power of Gemini directly into your terminal"
features:
  - "ReAct loop + built-in tools (Search grounding, file ops, shell, web fetch)"
  - "1M token context (Gemini 3); multimodal input"
  - "MCP + Extensions ecosystem (Figma, Stripe, Snyk, Firebase, ...)"
  - "GitHub integration (@gemini-cli PR reviews) + GitHub Action; VS Code companion"
  - "Free tier: 60 req/min + 1,000 req/day with a Google account"
  - "Headless/scripting (JSON); GEMINI.md context; sandboxing"
choose_when: "You want a free, open-source terminal agent with built-in web-search grounding, huge context, and an Extensions ecosystem."
avoid_when: "You need model-agnosticism or must avoid a Google account and free-tier rate limits."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Gemini CLI — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → CLI coding agent |
| Repo / site | https://github.com/google-gemini/gemini-cli · geminicli.com |
| Maker | **Google** |
| License | **Apache-2.0** / Apache-2.0 (open source) |
| ⭐ / created | 106,076 · 2025-04 (launched Jul 2025) · very active |
| Model | Gemini 3 (1M token context); Google |
| Auth / free tier | **personal Google account: 60 req/min + 1,000 req/day free (no key)**; API key; Vertex AI (enterprise) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"An open-source AI agent that brings the power of Gemini directly into your terminal." Terminal-based access to Google's Gemini models with built-in tools + MCP extensibility.

## 2. Quotes (verbatim, from docs — attributed)
- Definition: *"open-source AI agent that brings the power of Gemini directly into your terminal."*
- Free tier: *"60 requests/min and 1,000 requests/day with personal Google account."*
- ReAct: *"uses a reason and act (ReAct) loop with your built-in tools and local or remote MCP servers."*
- Built-in tools: *"Google Search grounding, file operations, shell commands, web fetching."*

## 3. Features
- **ReAct loop** + built-in tools (**Google Search grounding**, file ops, shell, web fetch).
- **1M token context** (Gemini 3); multimodal input (PDFs/images/sketches).
- **MCP + Extensions** — extensions bundle MCP servers + context files + custom commands (ecosystem: Figma, Stripe, Elastic, Postman, Snyk + Google's Cloud Run / Firebase).
- GitHub integration (`@gemini-cli` PR reviews, issue triage) + GitHub Action; VS Code companion.
- Headless/scripting (JSON / stream-JSON output); conversation checkpointing; sandboxing + trusted folders; `GEMINI.md` context; enterprise deployment.

## 4. Free tier & auth
- **Personal Google account (OAuth):** 60 req/min + 1,000 req/day free; Gemini 3; 1M context; no API key.
- **Gemini API key:** 1,000 req/day; usage-based billing available.
- **Vertex AI:** enterprise (higher limits, compliance).

## 5. What it is NOT / limitations
- Not model-agnostic (Gemini/Google); not a GUI (terminal-first).
- Free tier has rate/quota limits (60/min, 1,000/day); Google account required.
- Coding host ≠ merge authority.

## 6. Roadmap
- **Was:** launched by Google (Jul 2025) as an open-source terminal AI agent (originally Gemini 2.5 Pro).
- **Now (2026):** ⭐106k; Apache-2.0; Gemini 3 + 1M context; free tier; Extensions ecosystem; weekly preview/stable + nightly.
- **Ahead:** public roadmap (GitHub project 11); deeper Extensions + Google Cloud integration.

## 7. Positioning
- **Gemini CLI** — free, open-source terminal agent with built-in web-search grounding + huge context + Extensions ecosystem.
- vs Claude Code (Claude, paid, proprietary), Codex CLI (GPT, OSS, kernel sandbox), Qwen Code (free, OSS), Aider/OpenCode.

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** install + sign in with a Google account (free tier); test Search grounding + a `GEMINI.md`; add an MCP Extension.

## 9. Sources
- https://github.com/google-gemini/gemini-cli (README) · geminicli.com · blog.google (launch)

_Last updated: 2026-07-20 · Researcher: Claude_
