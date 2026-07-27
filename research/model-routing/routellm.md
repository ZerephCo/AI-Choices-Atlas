---
name: RouteLLM
slug: routellm
category: model-routing
subtype: "12.3 cost/quality router"
repo: https://github.com/lm-sys/RouteLLM
site: null
maker: LMSYS
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 5220
created: "2024-06"
language: Python
maturity: Established
status: active
local: true
one_liner: "A framework for serving and evaluating LLM routers that routes each query to a strong or weak model by predicted difficulty — save cost without compromising quality (LMSYS)."
tagline_quote: "A framework for serving and evaluating LLM routers - save LLM costs without compromising quality."
features:
  - "Trained routers (matrix factorization, BERT, causal-LLM classifiers)"
  - "OpenAI-compatible drop-in server (route between a strong + weak model)"
  - "Evaluation framework (benchmarks routing quality vs cost)"
  - "Configurable cost/quality threshold; ~85% cost cut at ~95% GPT-4 quality (MT-Bench)"
choose_when: "You want to cut cost by sending easy queries to cheap models + hard ones to strong models, with a principled threshold + eval."
avoid_when: "You just need provider unification (LiteLLM/OpenRouter) — pair them instead."
hands_on: docs-only
last_verified: "2026-07-20"
---
# RouteLLM — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Model routing → 12.3 cost/quality router |
| Repo | https://github.com/lm-sys/RouteLLM |
| Maker | **LMSYS** (the Chatbot Arena team) |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 5,220 · 2024-06 · Python |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"A framework for serving and evaluating LLM routers — save LLM costs without compromising quality." Routes each query to a strong or weak model based on predicted difficulty.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"A framework for serving and evaluating LLM routers - save LLM costs without compromising quality."*

## 3. Features
- **Trained routers** (matrix factorization, BERT, causal-LLM classifiers).
- **OpenAI-compatible drop-in server** (route between a strong + weak model).
- **Evaluation framework** (benchmarks routing quality vs cost).
- Configurable cost/quality threshold; reported ~85% cost reduction at ~95% GPT-4 quality on MT-Bench.

## 4. What it is NOT / limitations
- Not a full multi-provider gateway (a routing layer) — pair with LiteLLM/OpenRouter.
- Research-grade framework.

## 5. Roadmap
- **Was:** created 2024-06 by LMSYS.
- **Now (2026):** ⭐5.2k; Apache-2.0; trained routers + eval.
- **Ahead:** better routers; integrations.

## 6. Positioning
- **RouteLLM** — principled cost/quality routing (easy→cheap, hard→strong) with an eval harness.
- vs LiteLLM/OpenRouter (provider unification), Portkey (gateway), claude-code-router (agent router). Complementary.

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** run the drop-in server with a strong+weak pair; tune the threshold; run the eval.

## 8. Sources
- https://github.com/lm-sys/RouteLLM (README) · LMSYS blog

_Last updated: 2026-07-20 · Researcher: Claude_
