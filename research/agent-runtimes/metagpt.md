---
name: MetaGPT
slug: metagpt
category: agent-runtimes
subtype: "7.2 Multi-agent crew / conversation frameworks"
repo: https://github.com/FoundationAgents/MetaGPT
site: https://docs.deepwisdom.ai/
maker: FoundationAgents (DeepWisdom)
license_claimed: MIT
license_detected: MIT
stars: 69513
created: "2023-06"
language: Python
maturity: Prominent
status: active
local: true
one_liner: "Multi-agent framework that assigns SOP-driven software roles (PM, architect, engineer, QA) to turn a one-line brief into a small project — the 'first AI software company.'"
tagline_quote: "The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programming."
features:
  - "Role-based agents follow encoded SOPs (product → design → code → test)"
  - "Turns a one-line requirement into docs, design, and code"
  - "One of the most-starred agent frameworks (~70k★)"
  - "Python library you host; MIT"
choose_when: "You want to prototype SOP/role-based multi-agent software generation, or study the canonical 'AI software company' pattern."
avoid_when: "You need explicit, durable control flow (use a graph runtime, §7.1) or production type-safety (§7.3)."
cross_links: ["§7", "§1"]
hands_on: docs-only
last_verified: "2026-07-26"
---
# MetaGPT — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Agent runtimes → 7.2 multi-agent / role-based framework |
| Repo | https://github.com/FoundationAgents/MetaGPT |
| Maker | **FoundationAgents (DeepWisdom)** |
| License | **MIT** / MIT |
| ⭐ / created | **69,513** ⭐ · created 2023-06 · Python · active |
| Runs local | **✅** Python library you host (agents call their model providers) |
| Researched | 2026-07-26 · hands-on: **docs-only** |

## 1. What it is
A **role-based multi-agent framework**: it encodes software-team **SOPs** and assigns roles (product manager, architect, engineer, QA) so a one-line requirement flows through docs → design → code → tests. Framed as the **"first AI software company"** and among the most-starred agent frameworks in existence (~70k ⭐).

## 2. Quotes (verbatim — attributed)
- Repo description: *"The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programming."*

## 3. Features
- **SOP-encoded roles** collaborate through a simulated software process.
- **Requirement → artifacts** (PRD, design, code, tests).
- **Very large ecosystem** (~70k ⭐, active).
- **Python** library, MIT-licensed, self-hosted.

## 4. Choose / avoid
- **Choose it when** you want SOP/role-based multi-agent generation or to study the canonical pattern.
- **Avoid when** you need explicit durable control flow (graph runtimes, §7.1) or production type-safety (§7.3).
- Compare with the other §7 frameworks (CrewAI, AutoGen, ChatDev); it builds on the coding models behind §1.

## 5. Sources
- https://github.com/FoundationAgents/MetaGPT (GitHub API: 69,513 ⭐, MIT, Python, created 2023-06)
- InitialResearch.md (corpus "Runtimes/frameworks" list; not previously carded)

_Last verified: 2026-07-26 · verdict: 🟢 active · Researcher: Claude_
