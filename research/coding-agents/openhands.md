---
name: OpenHands
slug: openhands
category: coding-agents
subtype: "1.3 Autonomous SWE agents"
repo: https://github.com/All-Hands-AI/OpenHands
site: https://openhands.dev
maker: All-Hands-AI
license_claimed: MIT
license_detected: NOASSERTION
stars: 81379
created: "2024-03"
language: Python
maturity: Prominent
status: active
local: partial
one_liner: "The leading open-source autonomous software-engineering platform (formerly OpenDevin), built on CodeAct, where agents run in a sandboxed runtime to browse, run shell, edit, and test."
tagline_quote: "OpenHands: AI-Driven Development."
features:
  - "CodeAct: code execution as the primary agent action space"
  - "Sandboxed Docker runtime (SSH, Jupyter, BrowserGym)"
  - "OpenHands Resolver: labeled GitHub issue -> autonomous PR"
  - "Software Agent SDK to build your own SWE agents"
  - "Surfaces: local/Docker/VMs, Cloud + Enterprise, CLI, GitHub Action"
  - "Any LLM via LiteLLM; MCP; ACP-compatible"
choose_when: "You want a fully open-source, self-hostable autonomous SWE agent (issue->PR) plus an SDK, the best open alternative to Devin."
avoid_when: "You want a lightweight editor plugin, or cannot provide a sandbox and the tokens autonomous runs consume."
hands_on: docs-only
last_verified: "2026-07-20"
---
# OpenHands — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → autonomous SWE agent + Software Agent SDK |
| Repo / site | https://github.com/All-Hands-AI/OpenHands · openhands.dev |
| Maker | **All-Hands-AI** (formerly the OpenDevin project) |
| License | **MIT** / GitHub-detected **NOASSERTION** — LICENSE file confirms *"The MIT License (MIT)"* (© 2025) |
| ⭐ / created | 81,379 · 2024-03-13 · Python · very active · $18.8M Series A |
| Model | any LLM via **LiteLLM** (Anthropic Claude recommended; local Ollama, Bedrock) |
| SWE-bench Verified | 53%+ (standard) · up to **72%** (Claude Sonnet 4.5 extended thinking) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"OpenHands: AI-Driven Development." The leading open-source autonomous software-engineering platform (formerly OpenDevin), built on the **CodeAct** paradigm — agents run in a sandboxed runtime where they browse, run shell, write/run tests, edit files, and call APIs, not just generate code. The best open alternative to Devin.

## 2. Quotes (verbatim, from docs — attributed)
- Repo: *"OpenHands: AI-Driven Development."*
- Deploy: *"Run agents locally, in Docker, on VMs, or anywhere you can run an agent server backend."*
- Safety: *"the agent will have full access to your filesystem!"* (run un-sandboxed at your own risk)
- Site tagline: *"The Open Platform for Cloud Coding Agents."*

## 3. Features
- **CodeAct** — code execution as the primary agent action space (write code that calls code, run shell, validate output).
- **Sandboxed Docker runtime** — isolated per session with SSH access, a Jupyter kernel, and a BrowserGym web-automation interface.
- **OpenHands Resolver** — label a GitHub issue → OpenHands spins up a sandbox, analyzes, edits code, runs tests, opens a PR (fully autonomous).
- **Software Agent SDK** — modular framework to build your own SWE agents.
- Surfaces: local / Docker / VMs, **OpenHands Cloud + Enterprise** (hosted); CLI + headless + GitHub Action.
- Any LLM via LiteLLM; MCP; ACP-compatible; integrations (Slack/GitHub/Linear/Notion).

## 4. Adoption
- Backed by $18.8M Series A; adopted by AMD, Apple, Google, Amazon, Netflix, NVIDIA, and others.

## 5. What it is NOT / limitations
- Not a lightweight editor plugin (a full autonomous agent + sandbox).
- Not safe un-sandboxed (full filesystem access; use Docker for isolation).
- Not model-locked.
- Autonomous runs consume lots of tokens; heavier setup than an editor plugin.
- Coding host that opens PRs but ≠ merge authority.

## 6. Roadmap
- **Was:** launched Mar 2024 as **OpenDevin** — open-source answer to Cognition's Devin; CodeAct; SWE-bench SOTA (open).
- **Now (2026):** rebranded OpenHands; ⭐81k; MIT; Software Agent SDK; Resolver; Cloud + Enterprise; $18.8M Series A; SWE-bench up to ~72% (Claude Sonnet 4.5).
- **Ahead:** SDK-driven agent platform; cloud/enterprise; broader automations.

## 7. Positioning
- **OpenHands** — fully open-source, self-hostable autonomous SWE agent (issue→PR) + SDK; the best open alternative to Devin.
- vs SWE-agent (research-grade autonomous agent), Devin (proprietary), Copilot Coding Agent (GitHub-hosted async).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** run via Docker; point at Claude; try the Resolver on a labeled GitHub issue; test the SDK.

## 9. Sources
- https://github.com/All-Hands-AI/OpenHands (README, LICENSE) · openhands.dev · CodeAct paper

_Last updated: 2026-07-20 · Researcher: Claude_
