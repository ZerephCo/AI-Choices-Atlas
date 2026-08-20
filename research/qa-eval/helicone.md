---
name: Helicone
slug: helicone
category: qa-eval
subtype: "11.2 observability + cost (proxy)"
repo: https://github.com/Helicone/helicone
site: https://www.helicone.ai
maker: Helicone
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 6085
created: "2023-01"
language: TypeScript
maturity: Established
status: active
local: partial
one_liner: "Open-source AI Gateway + LLM observability platform — one line (a proxy) to log, monitor, evaluate, cache, route with automatic fallbacks, and cut cost. Self-host, or a free hosted tier."
tagline_quote: "Open source LLM observability platform."
features:
  - "One-line proxy integration logs all LLM requests/responses"
  - "Cost, latency, and usage dashboards; caching; rate-limiting"
  - "Evals, prompt management, sessions/traces for agents"
  - "Self-host (Apache-2.0) or hosted free tier"
choose_when: "You want quick, low-friction LLM observability + cost tracking you can self-host or use free."
avoid_when: "You want deep offline eval frameworks (§11.1) or tracing tightly coupled to one agent framework."
cross_links: ["§11", "§16"]
hands_on: docs-only
last_verified: "2026-08-20"
---
# Helicone — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | QA · eval · observability → 11.2 observability + cost (proxy) |
| Repo / site | https://github.com/Helicone/helicone · https://www.helicone.ai |
| Maker | **Helicone** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | **6,085** ⭐ · created 2023-01 · TypeScript · active |
| Access | **Free** — Apache-2.0 self-host, or a free hosted tier |
| Runs local | **🟡 partial** — fully self-hostable; hosted cloud optional |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
An **open-source LLM observability platform**. Route calls through its **proxy** (one line of config) to log every request/response, then get dashboards for **cost, latency, and usage**, plus **caching, rate-limiting, evals, prompt management, and session/agent traces**. Self-host it (Apache-2.0) or use the free hosted tier.

## 2. Quotes (verbatim — attributed)
- Repo: *"Open source LLM observability platform."*

## 3. Features
- **One-line proxy** logging of all LLM traffic.
- **Cost / latency / usage** dashboards; **caching**; rate-limiting.
- **Evals**, prompt management, agent **sessions/traces**.
- **Self-host** (Apache-2.0) or **free hosted** tier.

## 4. Choose / avoid
- **Choose it when** you want fast, low-friction observability + cost tracking, self-hosted or free.
- **Avoid when** you want deep offline eval frameworks (§11.1) or framework-native tracing.
- Related: overlaps cost telemetry (§16); sits alongside Langfuse / Arize Phoenix (§11.2).

## 5. Sources
- https://github.com/Helicone/helicone (GitHub API: 6,085 ⭐, Apache-2.0, TypeScript, created 2023-01) · https://www.helicone.ai
- Discovery add (2026-07-26); satisfies the free/no-credit-card standard (Apache-2.0 self-host + free tier).

_Last verified: 2026-08-20 · verdict: 🟢 active · Researcher: Claude_
