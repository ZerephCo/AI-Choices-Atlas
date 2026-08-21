---
name: "MemoryOS"
slug: memoryos
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/BAI-LAB/MemoryOS
site: null
maker: "BAI-LAB"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 1556
created: "2025-05"
language: Python
maturity: Established
status: active
local: partial
one_liner: "Academic memory operating system for personalized agents — OS-inspired 3-tier hierarchy (short/mid/long-term) with FIFO + paging updates. EMNLP 2025 Oral."
features:
  - "Three-tier hierarchy: short-term / mid-term / long-term personal memory"
  - "Four modules: Memory Storage · Updating · Retrieval · Generation"
  - "OS-inspired updates: dialogue-chain FIFO (short→mid); segmented paging (mid→long)"
  - "Playground platform; peer-reviewed (EMNLP 2025 Oral)"
choose_when: "You want to experiment with an OS-tiered personalized memory grounded in a peer-reviewed design."
avoid_when: "You need a hardened production service (Mem0/Zep/Supermemory) — this is research-grade."
hands_on: docs-only
last_verified: "2026-08-19"
---
# MemoryOS — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → personalized agent memory (research; OS-tiered) |
| Repo / paper | https://github.com/BAI-LAB/MemoryOS · arXiv:2506.06326 |
| Maker | **BAI-LAB** (academic) |
| License | Apache-2.0 / Apache-2.0 |
| ⭐ / created | 1,556 · 2025-05-30 (pushed 2026-07-07) |
| Publication | **EMNLP 2025 Oral** ("Memory OS of AI Agent") |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
A **hierarchical "memory operating system"** for personalized AI agents — a peer-reviewed design (EMNLP 2025 Oral) that manages an agent's memory across OS-like tiers to keep long-conversation coherence and personalization.

## 2. Architecture
- **Three storage tiers:** short-term · mid-term · long-term personal memory.
- **Four modules:** Memory Storage · Updating · Retrieval · Generation.
- **OS-inspired dynamic updates:**
  - short→mid: dialogue-chain-based **FIFO**.
  - mid→long: **segmented page organization** strategy.

## 3. Features
- Tiered personalized memory (short/mid/long).
- Storage/Updating/Retrieval/Generation modules.
- **Playground** platform (open-sourced 2025-09-11).
- Peer-reviewed (EMNLP 2025 main conference).

## 4. Local/offline & dependencies
Local storage; needs an LLM provider for generation/updates.

## 5. Roadmap
- **Was:** research from **BAI-LAB**; paper "Memory OS of AI Agent" (arXiv:2506.06326), **EMNLP 2025 Oral**; repo May 2025; Playground open-sourced Sept 2025.
- **Now (2026):** ⭐1.5k; active; reference implementation of the OS-tiered memory idea.
- **Ahead:** research-driven; broader adoption/integration.

## 6. Benchmarks (+ caveats)
LoCoMo — **+49.11% F1, +46.18% BLEU-1** over baselines on GPT-4o-mini (from the paper). Peer-reviewed, but paper-specific setup — directional for production.

## 7. What it is NOT / limitations
- Not a production/enterprise product (research implementation).
- Not a task tracker; not zero-LLM.
- Research-grade maturity (~1.5k⭐); production hardening/support unclear.

## 8. Positioning
- **MemoryOS** — OS-tiered (short/mid/long) personalized memory, peer-reviewed design.
- vs Letta (also OS/MemGPT-inspired, full framework), Mem0 (production SDK), Cognee (graph), A-MEM.

## 9. Hands-on
`docs-only` (2026-07-20). **TODO:** run the repo example + Playground; inspect the FIFO/paging update code.

## 10. Sources
- https://github.com/BAI-LAB/MemoryOS (README) · https://arxiv.org/abs/2506.06326 · https://bai-lab.github.io/MemoryOS/docs

_Last updated: 2026-07-20 · Researcher: Claude_
