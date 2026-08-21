---
name: Zed
slug: zed
category: coding-agents
subtype: "1.2 IDE / editor agents"
repo: https://github.com/zed-industries/zed
site: https://zed.dev
maker: Zed Industries
license_claimed: "GPL-3.0-or-later + Apache-2.0 + AGPL-3.0"
license_detected: NOASSERTION
stars: 88866
created: "2021-02"
language: Rust
maturity: Prominent
status: active
local: partial
one_liner: "A GPU-accelerated, Rust-built multiplayer code editor with native AI: an Agent Panel for agentic editing and the Agent Client Protocol (ACP) to plug in external agents."
tagline_quote: "Code at the speed of thought."
features:
  - "GPU-accelerated Rust editor; Tree-sitter-native; terminal + LSP"
  - "Agent Panel: agentic editing with tool use + streaming"
  - "ACP / External Agents: plug in Claude Code, Gemini CLI, etc."
  - "Edit Prediction (Zeta model); Inline Assistant"
  - "Multiplayer real-time collaboration"
  - "Model-agnostic (any provider + local Ollama + Zed hosted)"
choose_when: "You want the fastest native editor with first-class collaboration and open agent interop (ACP) to plug in any agent instead of one vendor's UI."
avoid_when: "You need a VS Code-compatible extension ecosystem, a web version, or must avoid a GPL/AGPL copyleft aggregate license."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Zed — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → native code editor (Rust) + AI Agent Panel / ACP host |
| Repo / site | https://github.com/zed-industries/zed · zed.dev |
| Maker | **Zed Industries** (Nathan Sobo et al. — creators of Atom & Tree-sitter) |
| License | **GPL-3.0-or-later (primary) + Apache-2.0 + AGPL-3.0** / GitHub-detected **NOASSERTION** (copyleft aggregate; not permissive) |
| ⭐ / created | 88,866 · 2021-02-20 · Rust · very active (open-sourced Jan 2024) |
| Model | any provider (Anthropic / OpenAI / Google / **Ollama local**) + Zed hosted (Zed Pro); External Agents own model selection |
| Interfaces | native desktop (macOS / Linux / Windows) — **Web not yet available** |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Code at the speed of thought." A GPU-accelerated, Rust-built, multiplayer code editor from the creators of Atom and Tree-sitter, with native AI: an **Agent Panel** for agentic editing and the **Agent Client Protocol (ACP)** for plugging in external agents.

## 2. Quotes (verbatim, from docs — attributed)
- Tagline (repo): *"Code at the speed of thought."*
- Definition: *"high-performance, multiplayer code editor from the creators of Atom and Tree-sitter."*
- License: *"licensed primarily under GPL-3.0-or-later, with Apache-2.0 components."*
- Platforms: *"Available on macOS, Linux, and Windows; Web not yet available."*

## 3. Features
- **Blazing-fast GPU-accelerated editor** (Rust); Tree-sitter-native; integrated terminal + LSP.
- **Agent Panel** — agentic editing with tool use + streaming responses.
- **ACP / External Agents** — an open JSON-RPC 2.0 standard (like LSP, but for AI agents) that lets any editor connect to any agent; plug in **Claude Code, Gemini CLI**, etc. Zed hosts the thread; the external agent owns its runtime/auth/model/tools.
- **Edit Prediction** (Zeta open model); Inline Assistant.
- **Multiplayer** real-time collaboration (channels, shared projects).
- Model-agnostic (any provider + local Ollama + Zed hosted).

## 4. ACP — a standard, not just a feature
- **Agent Client Protocol (ACP)** was introduced by Zed; **Zed + JetBrains co-launched the ACP Registry (Jan 2026)**; by mid-2026 dozens of agents + a growing list of editors (JetBrains, Zed, Neovim, Emacs) implement it. (Cross-refs the atlas Protocols category.)

## 5. What it is NOT / limitations
- Not a VS Code fork (built from scratch in Rust) → smaller extension ecosystem.
- Not model-locked; AI is BYO-provider (or Zed Pro).
- Not web-based yet (native only).
- License is a **GPL/AGPL copyleft aggregate** (matters for some orgs); GitHub reports NOASSERTION.
- Coding host ≠ merge authority.

## 6. Roadmap
- **Was:** started 2021 by Zed Industries (ex-Atom) as a from-scratch Rust editor for speed + collaboration; open-sourced Jan 2024.
- **Now (2026):** ⭐87k; native AI (Agent Panel, ACP, Edit Prediction); co-created **ACP** interop standard + Registry with JetBrains; multi-provider + hosted models.
- **Ahead:** ACP ecosystem growth; Web version tracked; deeper agentic editing.

## 7. Positioning
- **Zed** — fastest native editor + first-class collaboration + **open agent interop (ACP)**; plug in any agent rather than being locked to one vendor's UI.
- vs Cursor/VS Code (Electron), Cline/Roo (VS Code extensions), terminal agents (Claude Code/Codex, which can run *inside* Zed via ACP).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** install; try Agent Panel with a provider; add Claude Code / Gemini CLI as an ACP External Agent; test Edit Prediction + multiplayer.

## 9. Sources
- https://github.com/zed-industries/zed (README) · zed.dev/acp · zed.dev/docs/ai/external-agents · blog.jetbrains.com (ACP interop)

_Last updated: 2026-07-20 · Researcher: Claude_
