---
name: Aider
slug: aider
category: coding-agents
subtype: "1.1 CLI coding agents"
repo: https://github.com/Aider-AI/aider
site: https://aider.chat
maker: Aider-AI (Paul Gauthier + community)
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 47533
created: "2023-05"
language: Python
maturity: Prominent
status: active
local: partial
one_liner: "One of the earliest AI coding CLIs: git-native pair-programming in your terminal with a whole-repo map and any LLM via LiteLLM."
tagline_quote: "AI pair programming in your terminal."
features:
  - "Git-native: auto-commits with sensible messages; easy undo"
  - "Repo map of the whole codebase for large projects"
  - "Multi-file edits; diff + whole-file edit formats"
  - "Model-agnostic via LiteLLM (Claude/GPT/DeepSeek/Gemini/local)"
  - "100+ languages; voice-to-code; watch mode; auto lint + test"
  - "Aider polyglot leaderboard (model coding benchmark)"
choose_when: "You want a git-native, model-agnostic terminal pair-programmer with strong repo-mapping and fine edit control, great with local models."
avoid_when: "You want a fully autonomous SWE agent or an IDE/GUI rather than a human-in-the-loop terminal tool."
hands_on: docs-only
last_verified: "2026-07-20"
---
# Aider — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → CLI coding agent (pair-programming) |
| Repo / site | https://github.com/Aider-AI/aider · aider.chat |
| Maker | **Aider-AI** (Paul Gauthier + community) |
| License | **Apache-2.0** / Apache-2.0 (open source) |
| ⭐ / created | 47,533 · 2023-05-09 · Python · very active |
| Model | **any LLM via LiteLLM** — Claude, GPT/o1/o3, DeepSeek, Gemini, + local models |
| Auth | API key per provider (anthropic / openai / deepseek / …); any LiteLLM-compatible provider |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"AI pair programming in your terminal." One of the earliest and most-established AI coding CLIs — pair-program with an LLM to start new projects or build on an existing codebase, with **git-native** editing.

## 2. Quotes (verbatim, from docs — attributed)
- Definition: *"AI pair programming in your terminal."*
- Git: *"Aider automatically commits changes with sensible commit messages."*
- Repo map: *"Makes a map of your entire codebase, which helps it work well in larger projects."*
- Models: *"Can connect to almost any LLM, including local models."*

## 3. Features
- **Git-native**: auto-commits with sensible messages; easy undo; diff review baked in.
- **Repo map** — builds a map of the whole codebase to work well on large projects.
- Multi-file edits; **diff + whole-file** edit formats.
- **Model-agnostic via LiteLLM** — Claude, GPT/o1/o3, DeepSeek, Gemini, + local models.
- 100+ languages; images & web pages as context; **voice-to-code**; **watch mode** (drive from any IDE via `# ai` comments); auto lint + test; copy/paste to web chat.
- Well-known **Aider polyglot leaderboard** (model coding benchmark).

## 4. Notable
- *"88% of new code in Aider's last release written by Aider itself."*
- 6.8M+ pip installs; ~15B tokens/week; top-20 OpenRouter app.

## 5. What it is NOT / limitations
- Not an IDE/GUI (terminal-first; watch mode bridges IDEs).
- Not tied to one model/vendor.
- Pair-programming (human-in-the-loop), not a fully autonomous SWE agent.
- Coding host ≠ merge authority.

## 6. Roadmap
- **Was:** created 2023-05 by Paul Gauthier — pioneered repo-map + auto-commit + structured edit formats; famous leaderboard.
- **Now (2026):** ⭐47.5k; Apache-2.0; multi-model (LiteLLM); watch mode; ~88% self-written; huge install base.
- **Ahead:** community-driven (Aider-AI org); edit-format + benchmark leadership.

## 7. Positioning
- **Aider** — git-native, model-agnostic terminal pair-programmer; strongest repo-map + fine edit control; great with local models.
- vs Codex CLI (GPT, kernel sandbox), Gemini CLI (Google, free tier), Qwen Code (Qwen-tuned), Claude Code (Claude, paid), OpenCode/Goose (OSS).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** `python -m pip install aider-chat`; test repo-map on a large repo; try watch mode + a local model.

## 9. Sources
- https://github.com/Aider-AI/aider (README) · aider.chat (docs, leaderboard)

_Last updated: 2026-07-20 · Researcher: Claude_
