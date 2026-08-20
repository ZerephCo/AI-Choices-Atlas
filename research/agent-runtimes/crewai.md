---
name: CrewAI
slug: crewai
category: agent-runtimes
subtype: "7.2 role/crew multi-agent framework"
repo: https://github.com/crewAIInc/crewAI
site: https://crewai.com
maker: "CrewAI, Inc."
license_claimed: MIT
license_detected: MIT
stars: 57350
created: "2023-10"
language: Python
maturity: Prominent
status: active
local: true
one_liner: "Framework for orchestrating role-playing, autonomous AI agents as a crew (role/goal/backstory) that collaborate; adds Flows for event-driven control."
tagline_quote: "Framework for orchestrating role-playing, autonomous AI agents."
features:
  - "Crews — role/goal/backstory agents (sequential or hierarchical process)"
  - "Flows — event-driven, fine-grained orchestration"
  - "Any model via LiteLLM; tools; memory"
  - "Standalone (no LangChain dependency)"
  - "Large community; CrewAI enterprise/AMP platform"
choose_when: "Choose for fast, intuitive multi-agent setups where a team of roles fits."
avoid_when: "Avoid if you need low-level durable state machines (LangGraph) or type-safety (PydanticAI)."
hands_on: docs-only
last_verified: "2026-08-20"
---
# CrewAI — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Agent runtimes → 7.2 role/crew multi-agent framework |
| Repo / site | https://github.com/crewAIInc/crewAI · crewai.com |
| Maker | **CrewAI, Inc.** |
| License | **MIT** / MIT |
| ⭐ / created | 57,350 · 2023-10 · Python · very active |
| Models | any (LiteLLM) |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"Framework for orchestrating role-playing, autonomous AI agents." Build a **crew** of role-based agents (role + goal + backstory) that collaborate on complex tasks; add **Flows** for event-driven precision. Built from scratch, independent of LangChain.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Framework for orchestrating role-playing, autonomous AI agents."*
- Repo desc: *"By fostering collaborative intelligence, CrewAI empowers agents to work together seamlessly."*

## 3. Features
- **Crews** — role/goal/backstory agents collaborating (sequential or hierarchical process).
- **Flows** — event-driven, fine-grained orchestration.
- Any model via LiteLLM; tools; memory; **standalone** (no LangChain dependency).
- Large community; CrewAI enterprise/AMP platform.

## 4. What it is NOT / limitations
- Higher-level role abstraction (not low-level graph control like LangGraph).
- OSS core + separate enterprise platform.

## 5. Roadmap
- **Was:** created 2023-10 (role-playing crews).
- **Now (2026):** ⭐57k; Crews + Flows; standalone.
- **Ahead:** enterprise platform; Flows depth.

## 6. Positioning
- **CrewAI** — the intuitive "team of roles" multi-agent framework; fast to prototype.
- vs LangGraph (low-level durable graph), PydanticAI (type-safe), AutoGen (conversation), Agno (full-stack platform).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** build a 3-role crew (sequential); then a Flow for event-driven control.

## 8. Sources
- https://github.com/crewAIInc/crewAI (README) · crewai.com

_Last updated: 2026-08-20 · Researcher: Claude_
