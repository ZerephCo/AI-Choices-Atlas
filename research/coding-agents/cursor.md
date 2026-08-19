---
name: Cursor
slug: cursor
category: coding-agents
subtype: "1.2 IDE / editor agents"
repo: null
site: https://cursor.com
maker: Anysphere
license_claimed: Proprietary
license_detected: Proprietary
stars: null
created: "2023"
language: null
maturity: Prominent
status: active
local: false
one_liner: "An AI-first commercial code editor built on the VS Code codebase, with agent mode, Tab autocomplete, Composer multi-file edits, and cloud/background agents."
tagline_quote: "Cursor is your coding agent for building ambitious software."
features:
  - "Agent mode: reads codebase, edits files, runs commands, iterates"
  - "Manual/Composer: surgical multi-file edits with diff review"
  - "Tab: low-latency AI autocomplete (Sonic model)"
  - "Background + Cloud Agents (isolated cloud VMs, multi-repo parallel)"
  - "BugBot AI code review on every PR"
  - "MCP; codebase indexing + @-symbol context; Rules"
choose_when: "You want a polished, AI-first commercial IDE with best-in-class Tab, agent mode, cloud agents, and PR review, and metered proprietary pricing is acceptable."
avoid_when: "You need open-source, want to avoid credit-metered pricing, or cannot send code to Cursor's cloud infrastructure."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Cursor — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → IDE / editor agent (VS Code fork) |
| Site / maker | https://cursor.com · **Anysphere** |
| License | **Proprietary** (closed source; built on the open-source VS Code codebase) |
| Adoption | 1M+ developers · ~360,000 paying customers · in 64% of the Fortune 500 |
| Version | **Cursor 3.5** (launched 2026-05-20) |
| Model | multi-model picker — Claude 4.x, GPT-5.x, Gemini 2.x, Grok 4 + **Cursor's own** Composer-1 (multi-file) & Sonic (Tab) |
| Pricing | Free · Pro $20 · Pro+ $60 · Ultra $200 · Business · Enterprise (credit/usage-metered) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Cursor is your coding agent for building ambitious software." An AI-first editor built on the open-source VS Code codebase — extensions/keybindings/themes transfer in two clicks — but with AI as first-class, not bolted-on.

## 2. Quotes (verbatim, from cursor.com — attributed)
- Positioning: *"Cursor is your coding agent for building ambitious software."*
- Agents: *"Agents turn ideas into code."*
- Hand-off: *"Accelerate development by handing off tasks to Cursor, while you focus on making decisions."*
- Autonomy: *"Works autonomously, runs in parallel."*

## 3. Features
- **Agent mode** (headline) — reads codebase, edits files, runs terminal commands, iterates until done or a guardrail.
- **Manual / Composer** — surgical multi-file edits with diff review (propose changes, no command execution).
- **Tab** — AI autocomplete via Cursor's own low-latency model (Sonic).
- **Background Agents** — run in cloud sandboxes while you work; **Cloud Agents** (3.5) — isolated cloud VMs with full terminal/browser/desktop, multi-repo parallel, async report to IDE.
- **BugBot** — AI code review on every pull request.
- **MCP** — connect databases, observability, internal tools.
- Codebase indexing + `@`-symbol context; Rules.

## 4. Models & pricing
- Multi-model picker: Claude 4.x, GPT-5.x, Gemini 2.x, Grok 4 + Cursor's own Composer-1 / Sonic.
- Credit-based metering: your plan gives credits equal to the dollar amount; frontier models cost more (Opus > Sonnet).

## 5. What it is NOT / limitations
- Not open-source (proprietary; VS Code fork but the AI + app are closed).
- Not free for heavy use (credit-metered; frontier-model use burns credits fast).
- Cloud/Background agents send code to Cursor's infrastructure.
- Coding host ≠ merge authority.

## 6. Roadmap
- **Was:** launched by Anysphere as an AI-first VS Code fork (Tab + chat + Composer).
- **Now (2026):** Cursor 3.5 (May 2026) — Agent mode headline; Cloud/Background agents; BugBot; MCP; own models (Composer-1, Sonic); 1M+ devs, ~360k paying.
- **Ahead:** more autonomous cloud agents; own model family; enterprise depth.

## 7. Positioning
- **Cursor** — polished, AI-first commercial IDE (VS Code-familiar) with best-in-class Tab + agent mode + cloud agents + PR review; multi-model but pushes its own models; proprietary + metered.
- vs Cline/Roo Code (open-source VS Code extensions), Zed (Rust editor), GitHub Copilot (Microsoft), Claude Code/Codex (terminal).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** install; try Agent vs Manual; wire an MCP server; test a Background/Cloud agent + BugBot on a PR.

## 9. Sources
- https://cursor.com · cursor.com/docs · deployhq.com/guides/cursor · digitalapplied.com (Cursor 3 review)

_Last updated: 2026-07-20 · Researcher: Claude_
