---
name: Goose
slug: goose
category: coding-agents
subtype: "1.1 CLI coding agents"
repo: https://github.com/aaif-goose/goose
site: https://goose-docs.ai
maker: "Agentic AI Foundation (AAIF, Linux Foundation) — originally Block"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 52984
created: "2024-08"
language: Rust
maturity: Prominent
status: active
local: partial
one_liner: "Open-source, on-machine AI agent (AAIF / Linux Foundation, originally Block) for code and general workflows — install, execute, edit, and test with any LLM, via desktop app, CLI, and API."
tagline_quote: "your native open source AI agent — desktop app, CLI, and API"
features:
  - "General-purpose: code plus research, writing, automation, data analysis"
  - "MCP-first: 70+ extensions"
  - "15+ LLM providers incl. local (Ollama); ACP to reuse Claude/ChatGPT/Gemini subscriptions"
  - "Three surfaces: desktop app + CLI + API"
  - "Recipes for workflow automation; custom distribution"
  - "Built in Rust; repo now under the AAIF org (aaif-goose/goose)"
choose_when: "You want a local, MCP-first, multi-provider agent that executes/tests/automates beyond code, with a desktop GUI plus CLI and neutral foundation governance."
avoid_when: "You want a narrowly scoped, suggestion-only assistant or IDE-native inline completion (§1.2), or you can't grant an agent broad authority to install, execute, and edit on your machine."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Goose — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → CLI + desktop AI agent (code + workflows) |
| Repo / site | https://github.com/aaif-goose/goose (**moved from `block/goose`**) · goose-docs.ai |
| Maker | **AAIF (Linux Foundation)** — created by **Block** (formerly Square), donated to AAIF |
| License | **Apache-2.0** / Apache-2.0 (open source) |
| ⭐ / created | 52,984 · 2024-08-23 · Rust · very active (re-verified 2026-08-19) |
| Model | **15+ providers** — Anthropic, OpenAI, Google, **Ollama (local)**, OpenRouter, Azure, AWS Bedrock, … |
| Interfaces | **desktop app + CLI + API** (macOS / Linux / Windows) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
Per the repo, *"your native open source AI agent — desktop app, CLI, and API"* — a general-purpose, on-machine agent for code and broader workflows (research, writing, automation, data analysis). Created by Block; now stewarded by the AAIF at the Linux Foundation.

## 2. Quotes (verbatim, from docs — attributed)
- Definition (repo, 2026-08): *"your native open source AI agent — desktop app, CLI, and API"*
- Scope (repo): *"Not just for code — use it for research, writing, automation, data analysis"*
- Providers: *"goose works with 15+ providers — Anthropic, OpenAI, Google, Ollama, OpenRouter, Azure, Bedrock…"*
- Extensions: *"Connect to 70+ extensions via the Model Context Protocol open standard."*
- Governance: *"goose is part of the Agentic AI Foundation (AAIF) at the Linux Foundation."*

## 3. Features
- **Beyond code suggestions** — install deps, execute commands, edit files, run tests (end-to-end task automation).
- **MCP-first** — 70+ extensions via the Model Context Protocol.
- **15+ LLM providers** incl. **local (Ollama)**; ACP to reuse existing subscriptions.
- **Three surfaces**: native desktop app + full CLI + API.
- Workflow automation (recipes); custom distribution (rebrand/preconfigure for your org).
- Built in **Rust** for performance/portability.

## 4. Governance
- Built by **Block** (formerly Square); donated to the **Agentic AI Foundation (AAIF) at the Linux Foundation** → neutral, vendor-independent stewardship.

## 5. What it is NOT / limitations
- Not Block-locked (model-agnostic, 15+ providers).
- Not only-coding (general task agent — research/writing/data too).
- Not cloud-only (runs locally on your machine).
- Coding host ≠ merge authority.

## 6. Roadmap
- **Was:** created by Block (2024-08); Rust-built; MCP-first extensible agent.
- **Now (2026-08):** ⭐53k; Apache-2.0; desktop+CLI+API; 70+ MCP extensions; 15+ providers; repo transferred to the AAIF org (`aaif-goose/goose`); docs at goose-docs.ai; positioning broadened to a general-purpose agent ("Not just for code").
- **Ahead:** AAIF community governance; broader extension ecosystem.

## 7. Positioning
- **Goose** — local, MCP-first, multi-provider agent that goes beyond code (executes/tests/automates), with desktop GUI + CLI + API + neutral foundation governance.
- vs Aider (git-native pair-prog), Codex CLI (GPT, kernel sandbox), Gemini CLI (Google), OpenCode (OSS multi-model).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** install desktop app + CLI; wire an MCP extension; run with a local Ollama model.

## 9. Sources
- https://github.com/aaif-goose/goose (README; `block/goose` redirects here) · goose-docs.ai (docs) · aaif.io

_Last updated: 2026-08-19 · Researcher: Claude_
