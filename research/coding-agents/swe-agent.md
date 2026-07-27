---
name: SWE-agent
slug: swe-agent
category: coding-agents
subtype: "1.3 Autonomous SWE agents"
repo: https://github.com/SWE-agent/SWE-agent
site: https://swe-agent.com
maker: Princeton University + Stanford
license_claimed: MIT
license_detected: MIT
stars: 19865
created: "2024-04"
language: Python
maturity: Prominent
status: active
local: partial
one_liner: "The research-grade autonomous agent from the SWE-bench team that takes a GitHub issue and fixes it with your LM of choice, via a configurable Agent-Computer Interface."
tagline_quote: "leaves maximal agency to the LM."
features:
  - "Fix GitHub issues autonomously with any LM, in a sandbox"
  - "Agent-Computer Interface (ACI): YAML-configured commands + feedback"
  - "mini-SWE-agent: 65% SWE-bench Verified in 100 lines"
  - "EnIGMA: offensive-security (CTF / vuln discovery) mode"
  - "Fully documented + configurable; SWE-bench integration"
choose_when: "You want a research-grade, fully configurable, minimal autonomous SWE agent (the reference agent for SWE-bench) for evaluation, research, or CTF."
avoid_when: "You want a polished product or IDE rather than a research tool."
hands_on: docs-only
last_verified: "2026-07-20"
---
# SWE-agent — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → autonomous SWE agent (research-grade) |
| Repo / site | https://github.com/SWE-agent/SWE-agent · swe-agent.com |
| Maker | **Princeton University + Stanford** (the SWE-bench team) — NeurIPS 2024 |
| License | **MIT** / MIT (open source) |
| ⭐ / created | 19,865 · 2024-04-02 · Python · very active |
| Model | any LM of choice (GPT-4o, Claude Sonnet, …) |
| Benchmarks | SWE-agent 1.0 + Claude 3.7 = open-source SoTA on SWE-bench (Feb 2025); **mini-SWE-agent = 65% SWE-bench Verified in 100 lines** |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"SWE-agent takes a GitHub issue and tries to automatically fix it, using your LM of choice." The research-grade autonomous agent from the **SWE-bench team** (Princeton/Stanford). Its key contribution is the **Agent-Computer Interface (ACI)** — designing the commands + feedback the LM sees so it can act autonomously.

## 2. Quotes (verbatim, from docs — attributed)
- Repo: *"SWE-agent takes a GitHub issue and tries to automatically fix it, using your LM of choice."*
- Design: *"leaves maximal agency to the LM."*
- Mini variant: *"Achieves 65% on SWE-bench verified in 100 lines of python."*
- Performance: *"State of the art on SWE-bench among open-source projects."*
- Origin: *"Started at Princeton University by John Yang, Carlos E. Jimenez… Ofir Press."*

## 3. Features
- **Fix GitHub issues** autonomously with any LM, in a sandbox.
- **Agent-Computer Interface (ACI)** — a single YAML-configured interface that "leaves maximal agency to the LM" (the paper's core idea).
- **mini-SWE-agent** — a 100-line Python variant that hits 65% SWE-bench Verified (radically simple baseline).
- **EnIGMA** — offensive cybersecurity mode (CTF / vuln discovery); also competitive coding.
- Fully documented + configurable (research reproducibility); SWE-bench integration.

## 4. Provenance & significance
- Same team that created **SWE-bench** (the standard coding-agent benchmark) — so SWE-agent is the reference agent for that benchmark. NeurIPS 2024 paper.

## 5. What it is NOT / limitations
- Not a polished product/IDE (a research tool).
- Not a "completed general-purpose software engineer."
- EnIGMA still on v0.7 (pending 1.0).
- Dual-use: EnIGMA is an offensive-security mode — supported by the project for CTF/research.
- Opens fixes but ≠ merge authority.

## 6. Roadmap
- **Was:** created Apr 2024 by Princeton/Stanford (SWE-bench team); introduced ACI; NeurIPS 2024; open-source SWE-bench SoTA.
- **Now (2026):** ⭐19.8k; MIT; SWE-agent 1.0; **mini-SWE-agent** (100 lines, 65%); EnIGMA security mode; any LM.
- **Ahead:** ACI research; simpler/stronger agents; EnIGMA 1.0.

## 7. Positioning
- **SWE-agent** — research-grade, fully configurable, minimal autonomous SWE agent; the reference agent for SWE-bench; great for evaluation/research + CTF (EnIGMA).
- vs OpenHands (product-grade open platform + SDK), Devin (proprietary), Copilot Coding Agent (GitHub-hosted async).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** run on a SWE-bench task with Claude; try mini-SWE-agent (100 lines); inspect the ACI YAML config.

## 9. Sources
- https://github.com/SWE-agent/SWE-agent (README) · swe-agent.com · SWE-agent / SWE-bench papers (NeurIPS 2024)

_Last updated: 2026-07-20 · Researcher: Claude_
