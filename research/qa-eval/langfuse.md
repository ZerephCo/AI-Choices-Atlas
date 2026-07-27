---
name: Langfuse
slug: langfuse
category: qa-eval
subtype: "11.2 observability + evals platform"
repo: https://github.com/langfuse/langfuse
site: https://langfuse.com
maker: "Langfuse (YC W23)"
license_claimed: MIT
license_detected: NOASSERTION
stars: 31496
created: "2023-05"
language: TypeScript
maturity: Prominent
status: active
local: partial
one_liner: "Open source AI engineering platform: LLM evals, observability, metrics, prompt management, playground, datasets. Self-host or cloud."
tagline_quote: "Open source AI engineering platform: LLM evals, observability, metrics, prompt management, playground, datasets."
features:
  - "Tracing/observability — OpenTelemetry + LangChain, OpenAI SDK, LiteLLM integrations"
  - "Prompt management (versioned); evals (LLM-as-judge, human, custom)"
  - "Metrics + cost tracking; datasets; playground"
  - "Self-host or cloud"
choose_when: "You want a full observability + prompt-management + evals platform you can self-host."
avoid_when: "You want a pure CI eval CLI (promptfoo) or a code-metric framework (DeepEval)."
hands_on: docs-only
last_verified: "2026-07-20"
---
# Langfuse — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | QA/eval → 11.2 observability + evals platform |
| Repo / site | https://github.com/langfuse/langfuse · langfuse.com |
| Maker | **Langfuse** (YC W23) |
| License | **MIT core** / GitHub-detected **NOASSERTION** (enterprise edition) |
| ⭐ / created | 31,496 · 2023-05 · TypeScript |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Open source AI engineering platform: LLM evals, observability, metrics, prompt management, playground, datasets." Trace, evaluate, and manage prompts for LLM/agent apps; self-host or cloud.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Open source AI engineering platform: LLM evals, observability, metrics, prompt management, playground, datasets."*

## 3. Features
- **Tracing/observability** — OpenTelemetry + LangChain, OpenAI SDK, LiteLLM integrations.
- **Prompt management** (versioned); **evals** (LLM-as-judge, human, custom).
- Metrics + **cost tracking**; datasets; playground.
- Self-host or cloud.

## 4. What it is NOT / limitations
- License split — MIT core + enterprise edition → GitHub NOASSERTION.
- A platform (heavier than a CLI eval like promptfoo).

## 5. Roadmap
- **Was:** 2023-05 (YC W23).
- **Now (2026):** ⭐31k; full observability + prompt-mgmt + evals.
- **Ahead:** deeper agent observability; more integrations.

## 6. Positioning
- **Langfuse** — the self-hostable observability + prompt-management + evals platform.
- vs Phoenix (OTel-native, Elastic License), promptfoo/DeepEval (eval-only), Playwright (browser).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** self-host Langfuse; instrument an agent via OTel; version a prompt + run an eval.

## 8. Sources
- https://github.com/langfuse/langfuse (README) · langfuse.com

_Last updated: 2026-07-20 · Researcher: Claude_
