---
name: GitHub Copilot
slug: github-copilot
category: coding-agents
subtype: "1.2 IDE / editor agents"
repo: null
site: https://github.com/features/copilot
maker: GitHub (Microsoft)
license_claimed: Proprietary
license_detected: Proprietary
stars: null
created: "2021"
language: null
maturity: Prominent
status: active
local: false
one_liner: "GitHub's proprietary AI coding assistant across the SDLC, from inline completion to autonomous PRs, with synchronous Agent Mode and asynchronous Coding Agent."
tagline_quote: "Your AI accelerator for every workflow, from the editor to the enterprise."
features:
  - "Code completion + next-edit suggestions (no credits)"
  - "Copilot Chat (IDE + github.com)"
  - "Agent Mode (synchronous): edits, runs commands, fixes tests"
  - "Coding Agent (asynchronous): assign an issue -> ready PR"
  - "Code review; MCP + Registry; Copilot Spaces"
  - "Multi-model picker (Claude/GPT/Gemini); IP indemnity"
choose_when: "You want the most platform-integrated assistant (GitHub + VS Code/JetBrains) with completion, Agent Mode, async issue->PR, multi-model, and enterprise governance."
avoid_when: "You need open-source, or want to avoid usage-based AI-credit billing for heavy agent use."
hands_on: docs-only
last_verified: "2026-07-20"
---
# GitHub Copilot — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → IDE + platform agent (multi-surface) |
| Site / maker | https://github.com/features/copilot · **GitHub (Microsoft)** |
| License | **Proprietary** (closed source) |
| Launched | 2021 (first mainstream AI pair programmer); Agent Mode GA Mar 2026 |
| Model | multi-model picker — Claude (Sonnet 4.6 / Opus 4.8), GPT-5.x, Gemini 3.1 Pro |
| Pricing | Free $0 · Pro $10 · Pro+ $39 · Business $19 · Enterprise $39 (+GHE Cloud); **usage-based AI-credits since Jun 1, 2026** |
| Surfaces | VS Code · Visual Studio · JetBrains · Neovim · Xcode · Eclipse · github.com · GitHub CLI · GitHub Mobile |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Your AI accelerator for every workflow, from the editor to the enterprise." GitHub's AI coding assistant across the SDLC — from inline completion to autonomous PRs — with two agent systems (synchronous Agent Mode + asynchronous Coding Agent).

## 2. Quotes (verbatim, from docs — attributed)
- Positioning: *"Your AI accelerator for every workflow, from the editor to the enterprise."*
- Philosophy: *"The product is called 'Copilot' not 'Autopilot'."*
- IP: *"GitHub does not claim ownership of any suggestion."*
- Pricing: *"Code completions and next edit suggestions don't use credits."*

## 3. Features
- **Code completion** (inline) + next-edit suggestions (don't use credits).
- **Copilot Chat** (IDE + github.com).
- **Agent Mode** — synchronous: edits files, runs commands, fixes failing tests, iterates (GA on VS Code + JetBrains, Mar 2026).
- **Coding Agent** — asynchronous: assign a GitHub issue → come back to a ready PR (Pro/Pro+/Business/Enterprise); runs in Actions/CI.
- **Code review** (PR analysis); **MCP** + MCP Registry; **Copilot Spaces** (knowledge bases from docs/repos).
- Multi-model picker (Claude/GPT/Gemini); deep github.com + Actions integration.
- IP: duplication filter + indemnity; "does not claim ownership of any suggestion."

## 4. Pricing note
- Moved to **usage-based AI-credits billing on June 1, 2026** (1 credit = $0.01); agentic features consume actual compute credits; completions/next-edit stay free of credits.

## 5. What it is NOT / limitations
- Not open-source (proprietary).
- Not model-locked anymore (multi-model picker).
- Not "Autopilot" — needs human oversight and review.
- Not free for heavy agent use (usage-based credits); Enterprise needs GHE Cloud.
- Coding host that CAN open PRs but ≠ merge authority (CI/review still gate).

## 6. Roadmap
- **Was:** launched 2021 as the first mainstream AI pair programmer (inline completion, GPT-Codex).
- **Now (2026):** multi-model picker; Agent Mode GA (Mar 2026) + async Coding Agent; MCP + Registry; Copilot Spaces; usage-based billing (Jun 1, 2026); multi-surface incl. github.com.
- **Ahead:** deeper autonomous coding agent + enterprise governance (agent control plane, audit).

## 7. Positioning
- **GitHub Copilot** — the most **platform-integrated** assistant (GitHub + VS Code/JetBrains): completion + Agent Mode + async issue→PR Coding Agent, multi-model, enterprise governance/indemnity.
- vs Cursor (standalone IDE), Cline/Roo (OSS extensions), Zed (native editor), terminal agents (Claude Code/Codex).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** enable in VS Code; try Agent Mode; assign an issue to the Coding Agent → review the PR; test the model picker.

## 9. Sources
- https://github.com/features/copilot · docs.github.com/copilot · github.blog (agent mode, usage-based billing)

_Last updated: 2026-07-20 · Researcher: Claude_
