---
name: Codex CLI
slug: codex-cli
category: coding-agents
subtype: "1.1 CLI coding agents"
repo: https://github.com/openai/codex
site: null
maker: OpenAI
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 106787
created: "2025-04"
language: Rust
maturity: Prominent
status: active
local: partial
one_liner: "OpenAI's open-source, Rust-built terminal-native coding agent that runs in your shell with two-layer sandboxing and kernel-level OS sandboxing."
tagline_quote: "Lightweight coding agent that runs in your terminal."
features:
  - "MCP with parallel tool calls (~2x faster)"
  - "Two-layer security: sandbox modes + approval policy"
  - "Kernel-level OS sandboxing (Seatbelt / Landlock / seccomp)"
  - "GPT-5.x, 272K default context (up to 1M); AGENTS.md config"
  - "Install via npm, brew, or prebuilt binaries"
choose_when: "You want an open-source, terminal-native GPT agent with the strongest built-in OS-level sandbox."
avoid_when: "You need model-agnosticism or an IDE plugin (it is GPT-only and terminal-native)."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Codex CLI — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → CLI coding agent |
| Repo | https://github.com/openai/codex |
| Maker | **OpenAI** |
| License | **Apache-2.0** / Apache-2.0 (open source) |
| ⭐ / created | 99,895 · 2025-04 · **v0.120.x** (very active) |
| Language | **Rust** (~95%; `codex-rs`) — rewritten from Node/TS in late 2025 |
| Model | GPT-5.x (272K default context, up to 1M); OpenAI |
| Auth | ChatGPT Plus/Pro/Business/Edu/Enterprise sign-in (no separate key) or API key |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Lightweight coding agent that runs in your terminal." OpenAI's open-source, Rust-built terminal-native coding agent — runs in your shell, no browser or IDE plugin required (`codex` to start).

## 2. Quotes (verbatim — attributed)
- Repo description: *"Lightweight coding agent that runs in your terminal."*
- (Docs) terminal-native: "Runs directly in your shell. No browser, no IDE plugin required."
- (Coverage) security: "the only major AI coding agent that enforces security at the kernel level rather than through application-layer hooks."

## 3. Standout: security by construction
Two **independent** layers + **OS-level sandboxing**:
- **Sandbox mode:** `read-only` / `workspace-write` / `danger-full-access` — controls *what it can do*.
- **Approval policy:** `suggest` / `auto-edit` / `on-request` / `never` — controls *when it asks*.
- **Kernel-level OS sandboxing:** Apple **Seatbelt** (macOS), **Landlock/seccomp** (Linux).

## 4. Features
- **MCP** server support with **parallel tool calls** (`supports_parallel_tool_calls`; ~2× faster in tested scenarios: 58s serial → 31s parallel).
- GPT-5.x, 272K default context (configurable to 1M); `AGENTS.md` project config.
- Install: `npm i -g @openai/codex` · `brew install --cask codex` · binaries (macOS ARM/x86, Linux x86/arm64).

## 5. What it is NOT / limitations
- Not model-agnostic (GPT-5.x/OpenAI only); models proprietary even though the CLI is open-source.
- Not an IDE plugin (terminal-native).
- Coding host ≠ merge authority.

## 6. Roadmap
- **Was:** released by OpenAI (Apr 2025) as a Node/TS terminal agent; **rewritten in Rust** late 2025 (`codex-rs`).
- **Now (2026):** ⭐99.9k; Apache-2.0; v0.120.x; kernel sandboxing; MCP parallel tools; ChatGPT-plan auth.
- **Ahead:** OpenAI-driven; deeper sandbox/MCP; the open-source counterweight to Claude Code.

## 7. Positioning
- **Codex CLI** — open-source (Apache), Rust, terminal-native; **strongest built-in OS-level sandbox**; GPT-only.
- vs Claude Code (Claude, proprietary), gemini-cli (Google, OSS), Aider/OpenCode (OSS), Qwen Code.

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** `npm i -g @openai/codex`; run `read-only` then `workspace-write`; verify Seatbelt/Landlock sandboxing; wire an MCP server with parallel calls.

## 9. Sources
- https://github.com/openai/codex (README, AGENTS.md) · OpenAI docs
- Coverage: augmentcode.com, agent-safehouse.dev (sandbox analysis)

_Last updated: 2026-07-20 · Researcher: Claude_
