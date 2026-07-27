---
name: AutoGen
slug: autogen
category: agent-runtimes
subtype: "7.2 multi-agent conversation framework"
repo: https://github.com/microsoft/autogen
site: https://microsoft.github.io/autogen
maker: Microsoft
license_claimed: MIT
license_detected: CC-BY-4.0
stars: 59838
created: "2023-08"
language: "Python (+.NET)"
maturity: Prominent
status: maintenance
local: true
one_liner: "Event-driven multi-agent conversation framework (Core / AgentChat / Extensions + Studio). Maintenance mode; successor is Microsoft Agent Framework."
tagline_quote: "AutoGen is now in maintenance mode. It will not receive new features."
features:
  - "Core API — message passing, event-driven agents, local/distributed runtime"
  - "AgentChat API — high-level, opinionated API for rapid prototyping"
  - "Extensions API — LLM clients (OpenAI, Azure), code execution"
  - "AutoGen Studio (no-code GUI) + AutoGen Bench"
  - "Multi-agent conversation patterns; human-in-the-loop; MCP"
choose_when: "Choose only if already invested or for AutoGen Studio/research; new projects should start on Microsoft Agent Framework."
avoid_when: "Avoid for greenfield long-term — succeeded by Microsoft Agent Framework (MAF)."
hands_on: docs-only
last_verified: "2026-07-20"
---
# AutoGen — Deep Research Reference  ⚠️ MAINTENANCE MODE

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Agent runtimes → 7.2 multi-agent conversation framework — **⚠️ maintenance mode** |
| Repo | https://github.com/microsoft/autogen · microsoft.github.io/autogen |
| Maker | **Microsoft** (Research) |
| License | **code MIT** / GitHub-detected **CC-BY-4.0** (docs license on the repo) |
| ⭐ / created | 59,838 · 2023-08 · Python (+ .NET) |
| Status | ⚠️ **Maintenance mode** — no new features; successor = **Microsoft Agent Framework (MAF)** |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"A programming framework for agentic AI." Microsoft's framework for **multi-agent AI applications** where specialized agents converse to solve tasks — layered into Core, AgentChat, and Extensions, with AutoGen Studio (no-code) and Bench.

## 2. Quotes (verbatim — attributed)
- Definition: *"AutoGen is a framework for creating multi-agent AI applications that can act autonomously."*
- Core: *"Core API implements message passing, event-driven agents, and local and distributed runtime."*
- ⚠️ Status: *"AutoGen is now in maintenance mode. It will not receive new features."*

## 3. Architecture & features
- **Core API** — message passing, event-driven agents, local/distributed runtime.
- **AgentChat API** — high-level, opinionated API for rapid prototyping.
- **Extensions API** — LLM clients (OpenAI, Azure), code execution.
- **AutoGen Studio** (no-code GUI) + **AutoGen Bench**.
- Multi-agent conversation patterns; human-in-the-loop; MCP.

## 4. ⚠️ Status (VERIFIED)
- README: *"AutoGen is now in maintenance mode. It will not receive new features."*
- Successor: **Microsoft Agent Framework (MAF)** — the enterprise convergence of AutoGen + Semantic Kernel. New users should start with MAF; existing users can migrate.
- License nuance: code is MIT, but the repo's GitHub-detected license is **CC-BY-4.0** (documentation license).

## 5. What it is NOT / limitations
- Not actively feature-developed (maintenance mode) — migrate to MAF for greenfield.
- License is a code-MIT / docs-CC-BY-4.0 split.

## 6. Roadmap
- **Was:** created 2023-08 (Microsoft Research); v0.4 layered redesign.
- **Now (2026):** ⭐59k; ⚠️ maintenance mode.
- **Ahead:** succeeded by **Microsoft Agent Framework (MAF)**.

## 7. Positioning
- **AutoGen** — historically the leading conversational multi-agent framework; now maintenance-only.
- For greenfield: **Microsoft Agent Framework** (MAF), or LangGraph/CrewAI/PydanticAI.

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** try AutoGen Studio for a quick no-code multi-agent chat; but plan new work on MAF.

## 9. Sources
- https://github.com/microsoft/autogen (README) · microsoft.github.io/autogen · Microsoft Agent Framework docs

_Last updated: 2026-07-20 · verdict: ⚠️ maintenance mode · Researcher: Claude_
