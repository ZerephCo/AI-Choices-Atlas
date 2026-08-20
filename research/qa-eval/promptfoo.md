---
name: promptfoo
slug: promptfoo
category: qa-eval
subtype: "11.1 LLM/agent evaluation + red-teaming"
repo: https://github.com/promptfoo/promptfoo
site: https://promptfoo.dev
maker: promptfoo
license_claimed: MIT
license_detected: MIT
stars: 24396
created: "2023-04"
language: TypeScript
maturity: Prominent
status: active
local: true
one_liner: "Developer-first declarative eval + red-team tool: test prompts, agents, and RAGs across models with CLI + CI/CD gating; used by OpenAI and Anthropic."
tagline_quote: "Test your prompts, agents, and RAGs."
features:
  - "Declarative YAML test configs; side-by-side model comparison (GPT/Claude/Gemini/DeepSeek)"
  - "Assertions/metrics; CLI + CI/CD gating"
  - "Red-teaming / pentesting / vulnerability scanning (OWASP LLM)"
  - "Local-first (data stays local); 20+ providers"
choose_when: "You want CI-gated prompt/agent evals plus AI red-teaming with a simple declarative config."
avoid_when: "You want a hosted observability platform (Langfuse)."
cross_links: ["§15"]
hands_on: docs-only
last_verified: "2026-08-20"
---
# promptfoo — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | QA/eval → 11.1 LLM/agent evaluation + red-teaming |
| Repo / site | https://github.com/promptfoo/promptfoo · promptfoo.dev |
| Maker | **promptfoo** |
| License | **MIT** / MIT |
| ⭐ / created | 24,396 · 2023-04 · TypeScript · used by OpenAI & Anthropic |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI." A developer-first, declarative eval + red-team tool with CLI + CI/CD. Cross-links §15 Security.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Test your prompts, agents, and RAGs."*
- Repo desc: *"Simple declarative configs with command line and CI/CD integration. Used by OpenAI and Anthropic."*

## 3. Features
- **Declarative** YAML test configs; side-by-side model comparison (GPT/Claude/Gemini/DeepSeek/…).
- Assertions/metrics; CLI + **CI/CD** gating.
- **Red-teaming / pentesting / vulnerability scanning** (OWASP LLM).
- Local-first (data stays local); 20+ providers.

## 4. What it is NOT / limitations
- A test/eval + red-team tool, not a hosted observability platform (Langfuse).

## 5. Roadmap
- **Was:** 2023-04.
- **Now (2026):** ⭐24k; MIT; evals + red-teaming; used by OpenAI/Anthropic.
- **Ahead:** more red-team plugins; agent evals.

## 6. Positioning
- **promptfoo** — CI-gated prompt/agent evals + AI red-teaming with simple declarative configs.
- vs DeepEval (Pytest-metric framework), Langfuse/Phoenix (observability), Playwright (browser).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** write a promptfooconfig.yaml comparing 2 models; add assertions; run a red-team scan in CI.

## 8. Sources
- https://github.com/promptfoo/promptfoo (README) · promptfoo.dev

_Last updated: 2026-08-20 · Researcher: Claude_
