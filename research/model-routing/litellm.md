---
name: LiteLLM
slug: litellm
category: model-routing
subtype: "12.1 self-hosted AI gateway"
repo: https://github.com/BerriAI/litellm
site: https://litellm.ai
maker: BerriAI
license_claimed: MIT
license_detected: NOASSERTION
stars: 56810
created: "2023-07"
language: Python
maturity: Prominent
status: active
local: true
one_liner: "The dominant open-source AI gateway: call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging — Rust core + Python SDK."
tagline_quote: "Call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging."
features:
  - "100+ providers via one OpenAI-compatible interface (SDK and proxy server)"
  - "Cost tracking + budgets; load balancing + fallbacks; virtual keys"
  - "Guardrails; logging / observability"
  - "LiteLLM Proxy/Gateway (self-host) + Python SDK; Rust core (fast)"
choose_when: "You want to unify 100+ providers behind one self-hosted OpenAI-compatible endpoint with cost/limits/fallbacks."
avoid_when: "You want fully-hosted no-ops (OpenRouter) or pure cost/quality routing (RouteLLM)."
hands_on: docs-only
last_verified: "2026-08-20"
---
# LiteLLM — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Model routing → 12.1 self-hosted AI gateway |
| Repo / site | https://github.com/BerriAI/litellm · litellm.ai |
| Maker | **BerriAI** |
| License | **MIT** (core) / GitHub-detected **NOASSERTION** (enterprise dir has a separate license) |
| ⭐ / created | 56,810 · 2023-07 · Python SDK + **Rust core** · very active |
| Providers | 100+ (Bedrock, Azure, OpenAI, Anthropic, VertexAI, vLLM, Nvidia NIM, …) |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"The fastest, litest AI Gateway. Rust core with Python SDK. Call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging." The dominant open-source gateway; the multi-provider backbone under many agent tools.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging."*

## 3. Features
- **100+ providers** via a single OpenAI-compatible interface (SDK **and** proxy server).
- **Cost tracking** + budgets; **load balancing** + fallbacks; **guardrails**; logging/observability; virtual keys.
- **LiteLLM Proxy/Gateway** (self-host) + Python SDK; Rust core (fast).

## 4. What it is NOT / limitations
- License split — MIT core + enterprise features under a separate license → GitHub reports NOASSERTION.
- A gateway, not a model.

## 5. Roadmap
- **Was:** created 2023-07 (BerriAI).
- **Now (2026):** ⭐57k; Rust core; the standard OSS gateway.
- **Ahead:** enterprise features; more providers.

## 6. Positioning
- **LiteLLM** — the default OSS gateway: unify 100+ providers behind one OpenAI-compatible endpoint you self-host.
- vs OpenRouter (hosted), Portkey (guardrails-first OSS gateway), RouteLLM (cost/quality routing), claude-code-router (agent-focused).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** run LiteLLM Proxy with 2 providers + a fallback + a budget; call it in OpenAI format.

## 8. Sources
- https://github.com/BerriAI/litellm (README) · litellm.ai

_Last updated: 2026-08-20 · Researcher: Claude_
