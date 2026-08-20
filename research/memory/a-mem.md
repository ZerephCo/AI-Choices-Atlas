---
name: "A-MEM"
slug: a-mem
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/agiresearch/A-mem
site: null
maker: "agiresearch"
license_claimed: MIT
license_detected: MIT
stars: 1151
created: "2025-02"
language: Python
maturity: Established
status: caution
local: partial
one_liner: "Zettelkasten-inspired agentic memory — note-based memory that dynamically links notes and evolves older ones as new memories arrive."
features:
  - "Note creation with structured attributes (contextual descriptions, keywords, tags)"
  - "Dynamic linking — connects new notes to relevant historical ones"
  - "Memory evolution — new memories update old notes' representations/links"
  - "Zettelkasten structure + agent-driven decisions; evaluated on 6 foundation models"
choose_when: "You want to experiment with self-evolving, note-linked (Zettelkasten) memory or borrow its memory-evolution mechanism."
avoid_when: "You need production (research-grade, slowing cadence) — use Mem0/Cognee/Zep instead."
hands_on: docs-only
last_verified: "2026-08-19"
---
# A-MEM — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → org/semantic (note-linked agentic memory; research) |
| Repo / paper | https://github.com/agiresearch/A-mem · arXiv:2502.12110 (v7) |
| Maker | **agiresearch** (academic) |
| License | MIT / MIT |
| ⭐ / created | 1,116 · 2025-02-25 · **last push 2025-12-12 (slowing)** |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
A **Zettelkasten-inspired, note-based agentic memory** for LLM agents that dynamically links notes and **evolves** historical note attributes as new memories arrive ("memory evolution"). Research project with a published paper.

## 2. How it works
- **Note creation:** each new memory → a structured note with contextual descriptions, keywords, tags.
- **Dynamic linking:** analyzes historical memories to find relevant connections and establishes links where meaningful similarity exists.
- **Memory evolution:** integrating a new memory can **update the contextual representations + attributes of existing notes** — the network continuously refines its understanding.
- **Design:** combines Zettelkasten structured organization with agent-driven decision-making.

## 3. Features
- Structured notes (context / keywords / tags).
- Dynamic note linking.
- **Memory evolution** (self-updating historical notes).
- Evaluated on **6 foundation models**.

## 4. Local/offline & dependencies
Needs an LLM (note generation, linking, evolution). Local storage.

## 5. Roadmap
- **Was:** research from **agiresearch**; paper "A-MEM: Agentic Memory for LLM Agents" (arXiv:2502.12110); repo Feb 2025.
- **Now (2026):** ⭐1.1k; **last push Dec 2025** (cadence slowing); influential reference for Zettelkasten + memory-evolution ideas (cited by later work: MOSS, REAL).
- **Ahead:** research-driven; idea propagation more than product roadmap.

## 6. Benchmarks (+ caveats)
Reported improvement over SOTA baselines across 6 foundation models (paper). Directional.

## 7. What it is NOT / limitations
- Not a production service (research implementation).
- Not a task tracker; not zero-LLM.
- Cadence slowing (last push Dec 2025); production hardening unclear.

## 8. Positioning
- **A-MEM** — self-evolving, note-linked (Zettelkasten) memory; a research idea more than a product.
- vs Cognee/Graphiti (graph), Mem0 (production SDK), MemoryOS (OS-tiered).

## 9. Hands-on
`docs-only` (2026-07-20). **TODO:** run the repo example; inspect the note-linking + evolution logic.

## 10. Sources
- https://github.com/agiresearch/A-mem (README) · https://arxiv.org/abs/2502.12110 · https://openreview.net/forum?id=FiM0M8gcct

_Last updated: 2026-07-20 · Researcher: Claude_
