---
name: Qwen Code
slug: qwen-code
category: coding-agents
subtype: "1.1 CLI coding agents"
repo: https://github.com/QwenLM/qwen-code
site: null
maker: QwenLM (Alibaba)
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 27184
created: "2025-06"
language: TypeScript
maturity: Prominent
status: active
local: partial
one_liner: "QwenLM's open-source terminal coding agent, forked from Gemini CLI and tuned for Qwen3-Coder but multi-provider (OpenAI/Anthropic/Gemini/local)."
tagline_quote: "An open-source AI coding agent that lives in your terminal."
features:
  - "Interactive TUI + headless mode (qwen -p)"
  - "Multi-provider: OpenAI / Anthropic / Gemini / Qwen + local Ollama/vLLM"
  - "Qwen3-Coder-optimized; 256K-1M token context"
  - "MCP, sandbox, git worktrees"
  - "npm install (@qwen-code/qwen-code; Node.js 22+)"
choose_when: "You want a Gemini-CLI-lineage terminal agent tuned for Qwen3-Coder but usable with any OpenAI-compatible or local model."
avoid_when: "You need a free-OAuth path (discontinued 2026-04-15) or want to avoid Node.js 22+."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Qwen Code — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → CLI coding agent |
| Repo / npm | https://github.com/QwenLM/qwen-code · `@qwen-code/qwen-code` |
| Maker | **QwenLM (Alibaba)** |
| License | **Apache-2.0** / Apache-2.0 (open source) |
| ⭐ / created | 26,144 · 2025-06-26 · TypeScript · very active |
| Origin | **fork of Google Gemini CLI v0.8.2**, then independent development |
| Model | **Qwen3-Coder** flagship (480B-A35B; 256K native / ~1M extrapolated) + **multi-provider** (OpenAI / Anthropic / Gemini / any OpenAI-compatible / local Ollama·vLLM) |
| Auth | ⚠️ **Qwen OAuth free quota discontinued 2026-04-15** → now API keys / coding-plan subscriptions; multi-provider via `/auth` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"An open-source AI coding agent that lives in your terminal." QwenLM's terminal coding agent, originally adapted from Gemini CLI and tuned for Qwen3-Coder — but model-agnostic in practice (OpenAI-compatible), so usable as a front end for almost any model.

## 2. Quotes (verbatim, from docs — attributed)
- Definition: *"An open-source AI coding agent that lives in your terminal."*
- Origin: *"Originally based on Google Gemini CLI v0.8.2."*
- Compatibility: *"Supports OpenAI, Anthropic, Gemini, and Qwen APIs."*
- Philosophy: *"Open-source, inside and out — framework and Qwen models are open-source."*

## 3. Features (conservative — official repo)
- Interactive terminal UI (slash commands, file references) + headless/scriptable mode (`qwen -p "..."`).
- **Multi-provider**: OpenAI / Anthropic / Gemini / Qwen APIs + any third-party provider or **local model (Ollama / vLLM)**.
- Qwen3-Coder-optimized parser/tool support; 256K–1M token context.
- MCP, sandbox, git worktrees.
- npm install (`@qwen-code/qwen-code`; Node.js 22+).

> ⚠️ Note: some third-party README forks (e.g. `therealtimex/qwen-code-cli`) advertise extra features (auto-memory, agent teams, IM bots, Java SDK, `/loop` `/bugfix`). Those are **fork-specific**, not confirmed in the official QwenLM repo — excluded here.

## 4. Free tier & auth
- **Qwen OAuth free quota discontinued April 15, 2026** — before that, signing in with a Qwen account granted a free request quota; that path is gone.
- Now: API keys (DashScope / OpenAI-compatible) or coding-plan subscriptions; the CLI itself stays free & open-source — the cost is model access.

## 5. What it is NOT / limitations
- Not a single-model tool (multi-provider) — but tuned for Qwen3-Coder.
- No longer a free-OAuth path (discontinued 2026-04-15).
- Requires Node.js 22+.
- Coding host ≠ merge authority.

## 6. Roadmap
- **Was:** forked from Gemini CLI v0.8.2 (2025) by QwenLM; tuned for Qwen3-Coder; free Qwen OAuth quota.
- **Now (2026):** ⭐26k; independent development; multi-provider; ⚠️ free OAuth quota ended (2026-04-15) → API keys/plans; Qwen3-Coder reported ~69.6% SWE-bench.
- **Ahead:** community-driven iteration; Qwen model + CLI tooling co-evolution.

## 7. Positioning
- **Qwen Code** — Gemini-CLI-lineage terminal agent, tuned for Qwen3-Coder, but genuinely multi-provider incl. local models.
- vs Gemini CLI (Google, free tier, Search grounding), Codex CLI (GPT, kernel sandbox), Claude Code (Claude, paid), Aider/OpenCode (OSS, multi-model).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** `npm i -g @qwen-code/qwen-code`; wire an OpenAI-compatible endpoint (or local Ollama/vLLM); test git-worktree + MCP.

## 9. Sources
- https://github.com/QwenLM/qwen-code (README) · qwenlm.github.io/qwen-code-docs (auth) · morphllm.com, infoworld.com (reviews)

_Last updated: 2026-07-20 · Researcher: Claude_
