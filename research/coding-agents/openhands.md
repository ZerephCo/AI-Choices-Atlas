---
name: OpenHands
slug: openhands
category: coding-agents
subtype: "1.3 Autonomous SWE agents"
repo: https://github.com/OpenHands/OpenHands
site: https://openhands.dev
maker: "OpenHands (formerly All Hands AI)"
license_claimed: MIT
license_detected: MIT
stars: 84462
created: "2024-03"
language: TypeScript
maturity: Prominent
status: active
local: partial
one_liner: "Open-source autonomous SWE platform (ex-OpenDevin); its main repo now ships Agent Canvas (beta) — a self-hosted control center running the OpenHands agent or any ACP agent on local-to-cloud backends."
tagline_quote: "OpenHands: AI-Driven Development."
features:
  - "Agent Canvas (beta): self-hosted developer control center for coding agents + automations"
  - "Runs OpenHands, Claude Code, Codex, Gemini, or any ACP-compatible agent"
  - "Agent backends: local (no sandbox), Docker sandbox, VMs, OpenHands Cloud/Enterprise"
  - "Automations: scheduled/webhook workflows integrating Slack, GitHub, Linear, Notion"
  - "OpenHands V1 agent + SDK now in the separate software-agent-sdk repo (CodeAct lineage)"
  - "Any LLM; npm @openhands/agent-canvas; CLI binary in OpenHands-CLI"
choose_when: "You want a fully open-source, self-hostable stack to run and automate autonomous coding agents (OpenHands or any ACP agent) across your own backends."
avoid_when: "You want a lightweight editor plugin, or cannot provide a sandbox and the tokens autonomous runs consume."
hands_on: docs-only
last_verified: "2026-08-19"
---
# OpenHands — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → autonomous SWE agent + Software Agent SDK |
| Repo / site | https://github.com/OpenHands/OpenHands (**org renamed from `All-Hands-AI`**) · openhands.dev |
| Maker | **OpenHands** (formerly All Hands AI; originally the OpenDevin project) |
| License | **MIT** / MIT (GitHub now machine-detects MIT; was NOASSERTION in 2026-07) |
| ⭐ / created | 84,462 · 2024-03-13 · TypeScript (main repo; agent SDK is Python) · very active · $18.8M Series A |
| Model | any LLM via **LiteLLM** (Anthropic Claude recommended; local Ollama, Bedrock) |
| SWE-bench Verified | 53%+ (standard) · up to **72%** (Claude Sonnet 4.5 extended thinking) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"OpenHands: AI-Driven Development." An open-source autonomous software-engineering platform (formerly OpenDevin), built on the **CodeAct** paradigm — agents run in a sandboxed runtime where they browse, run shell, write/run tests, edit files, and call APIs, not just generate code. An open, self-hostable alternative to hosted agents such as Devin.

**2026-08-19 update — Agent Canvas pivot.** The main repo now presents **Agent Canvas** (status: **beta**): *"The self-hosted developer control center for coding agents and automations"* that can *"Run OpenHands, Claude Code, Codex, Gemini, or any ACP-compatible agent"* across local, remote, and cloud backends. The OpenHands V1 agent and SDK moved to the separate **`OpenHands/software-agent-sdk`** repo (with `benchmarks` and `OpenHands-CLI` alongside); the org itself renamed from `All-Hands-AI` to `OpenHands`. Install: `npm install -g @openhands/agent-canvas`. Un-sandboxed local runs still warn: *"the agent will have full access to your filesystem!"*

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
- **Now (2026-08):** ⭐84k; org renamed `All-Hands-AI` → `OpenHands`; main repo pivoted to **Agent Canvas** (beta control center; TypeScript); agent + SDK split into `software-agent-sdk` (~1k⭐); MIT machine-detected; Cloud + Enterprise; automations (Slack/GitHub/Linear).
- **Ahead:** Agent Canvas GA; SDK-driven agent platform; broader automations and skins.

## 7. Positioning
- **OpenHands** — fully open-source, self-hostable autonomous SWE agent (issue→PR) + SDK; an open alternative to hosted agents such as Devin.
- vs SWE-agent (research-grade autonomous agent), Devin (proprietary), Copilot Coding Agent (GitHub-hosted async).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** run via Docker; point at Claude; try the Resolver on a labeled GitHub issue; test the SDK.

## 9. Sources
- https://github.com/OpenHands/OpenHands (README, LICENSE; `All-Hands-AI/OpenHands` redirects) · https://github.com/OpenHands/software-agent-sdk · openhands.dev · CodeAct paper

_Last updated: 2026-08-19 · Researcher: Claude_
