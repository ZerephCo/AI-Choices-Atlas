---
name: Google ADK
slug: google-adk
category: agent-runtimes
subtype: "7.1 graph / stateful workflow runtime (Google)"
repo: https://github.com/google/adk-python
site: https://google.github.io/adk-docs
maker: Google
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 20781
created: "2025-04"
language: "Python (+Java)"
maturity: Prominent
status: active
local: true
one_liner: "Open-source, code-first Python toolkit to build, evaluate, and deploy agents; a graph-based Workflow Runtime + a Task API for agent-to-agent delegation."
tagline_quote: "An open-source, code-first Python framework for building, evaluating, and deploying sophisticated AI agents."
features:
  - "Workflow Runtime — graph engine: routing, fan-out/fan-in, loops, retry, state, HITL"
  - "Task API — structured agent-to-agent (A2A) delegation"
  - "Two core classes: Agent (instructions/tools) + Workflow (graph orchestration)"
  - "Rich tool ecosystem; built-in evaluation"
  - "Deploy to Vertex AI / Agent Engine; model-agnostic (Gemini-optimized)"
choose_when: "Choose for code-first, evaluable, deployable agents, especially on Google Cloud/Gemini/Vertex, with explicit graph workflows."
avoid_when: "Avoid if you want a non-Google-leaning framework or the biggest community (LangGraph/CrewAI)."
hands_on: docs-only
last_verified: "2026-07-20"
---
# Google ADK (Agent Development Kit) — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Agent runtimes → 7.1 graph / stateful workflow runtime (Google) |
| Repo | https://github.com/google/adk-python · google.github.io/adk-docs |
| Maker | **Google** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 20,781 · 2025-04 · Python (+ Java ADK) |
| Models | any (optimized for Gemini); deployment-agnostic (fast path to Vertex AI / Agent Engine) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"An open-source, code-first Python toolkit for building, evaluating, and deploying sophisticated AI agents." A graph-based **Workflow Runtime** plus a **Task API** for agent-to-agent delegation, model- and deployment-agnostic.

## 2. Quotes (verbatim — attributed)
- Definition: *"An open-source, code-first Python framework for building, evaluating, and deploying sophisticated AI agents."*
- Runtime: *"Workflow Runtime: A graph-based execution engine for composing deterministic execution flows."*
- License: *"This project is licensed under the Apache 2.0 License."*

## 3. Features
- **Workflow Runtime** — graph-based engine: routing, fan-out/fan-in, loops, retry, state, human-in-the-loop.
- **Task API** — structured agent-to-agent delegation (multi-turn, mixed patterns).
- Two core classes: `Agent` (instructions/tools/behavior) + `Workflow` (graph orchestration).
- Rich tool ecosystem; built-in **evaluation**; deploy to Vertex AI / Agent Engine.
- Model-agnostic (Gemini-optimized).

## 4. What it is NOT / limitations
- Not Gemini-locked (model-agnostic) but Google-ecosystem-optimized.
- Younger (2025); Python 3.10+.

## 5. Roadmap
- **Was:** launched Apr 2025 by Google.
- **Now (2026):** ⭐20k; ADK 2.0; graph runtime + Task API + eval.
- **Ahead:** deeper Vertex/Agent Engine; multi-language (Java ADK).

## 6. Positioning
- **Google ADK** — code-first, evaluable, deployable agents with explicit graph workflows; best on Google Cloud/Gemini/Vertex.
- vs LangGraph (community graph runtime), CrewAI (role crews), OpenAI Agents SDK (handoffs).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** `pip install google-adk`; build an `Agent` + `Workflow` graph; run the evaluator; deploy to Agent Engine.

## 8. Sources
- https://github.com/google/adk-python (README) · google.github.io/adk-docs

_Last updated: 2026-07-20 · Researcher: Claude_
