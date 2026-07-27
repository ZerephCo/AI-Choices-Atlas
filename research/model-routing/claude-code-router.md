---
name: claude-code-router
slug: claude-code-router
category: model-routing
subtype: "12.4 agent model router"
repo: https://github.com/musistudio/claude-code-router
site: null
maker: musistudio
license_claimed: MIT
license_detected: MIT
stars: 35942
created: "2025-02"
language: TypeScript
maturity: Prominent
status: active
local: true
one_liner: "A local control plane that routes a coding agent (especially Claude Code) across models per scenario — including running Claude Code on non-Anthropic models."
tagline_quote: "One local control plane for every AI agent: route across models, fuse new capabilities, orchestrate tools, and stay fully in control."
features:
  - "Route Claude Code / agents across providers/models (OpenRouter, DeepSeek, Ollama, Gemini, …)"
  - "Per-scenario routing — background / thinking / long-context / web-search each map to a chosen model"
  - "Transformers adapt request/response formats between providers"
  - "Local control plane; plugin capabilities"
choose_when: "You want to run Claude Code (or other agents) on the model of your choice, routed by scenario (cheap/local for background, strong for hard steps)."
avoid_when: "You need a general server gateway (LiteLLM/OpenRouter) rather than an agent-focused control plane."
cross_links: ["§1"]
hands_on: docs-only
last_verified: "2026-07-20"
---
# claude-code-router — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.
> Cross-links §1 Coding agents (routes Claude Code across models).

| | |
|---|---|
| Category / sub-type | Model routing → 12.4 agent model router (local control plane) |
| Repo | https://github.com/musistudio/claude-code-router |
| Maker | **musistudio** |
| License | **MIT** / MIT |
| ⭐ / created | 35,942 · 2025-02 · TypeScript · very active |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"One local control plane for every AI agent: route across models, fuse new capabilities, orchestrate tools, and stay fully in control." Sits between a coding agent (especially Claude Code) and models, routing requests by scenario — including running Claude Code on non-Anthropic models.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"One local control plane for every AI agent: route across models, fuse new capabilities, orchestrate tools, and stay fully in control."*

## 3. Features
- Route Claude Code / agents across providers/models (OpenRouter, DeepSeek, Ollama, Gemini, …).
- **Per-scenario routing** — background / thinking / long-context / web-search each map to a chosen model.
- **Transformers** adapt request/response formats between providers.
- Local control plane; plugin capabilities.

## 4. What it is NOT / limitations
- Not a general server gateway (agent-focused control plane).
- Relies on the agent's request format.

## 5. Roadmap
- **Was:** created Feb 2025 to run Claude Code on other models.
- **Now (2026):** ⭐35.9k; MIT; per-scenario routing + transformers; broad model support.
- **Ahead:** more agents/models; capability fusion.

## 6. Positioning
- **claude-code-router** — run Claude Code (or other agents) on the model of your choice, routed by scenario (cheap/local for background, strong for hard steps).
- vs LiteLLM/OpenRouter (generic gateways), RouteLLM (cost/quality routing). Complementary — often points at OpenRouter/Ollama under the hood.

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** route Claude Code's background tasks to a local Ollama model + hard steps to a strong model; verify per-scenario config.

## 8. Sources
- https://github.com/musistudio/claude-code-router (README)

_Last updated: 2026-07-20 · Researcher: Claude_
