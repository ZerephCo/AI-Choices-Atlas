<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 1. Coding agents & hosts

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *which agent/host actually writes the code? — the foundational pick; everything else composes around it*

**Golden rule:** the coding host negotiates capabilities (shell / patch / Git / MCP / subagents / headless); it does NOT own merge-eligibility — CI/branch rules + human review stay outside it. Proprietary hosts are integrations, not redistributed dependencies: review their data/telemetry/retention separately from a repo license.

## Sub-types
- **1.1 CLI coding agents** — terminal-first agents
- **1.2 IDE / editor agents** — editor-integrated
- **1.3 Autonomous SWE agents** — benchmark/issue-solving

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [OpenCode](#opencode) | 1.1 CLI coding agents | MIT | 199,022 | Prominent | 🟢 Active | 🟡 partial | docs-only | A fully open-source (MIT), provider-agnostic coding agent built for the terminal, with a client/server design and 75+ providers via models.dev. |
| [Claude Code](#claude-code) | 1.1 CLI coding agents | Proprietary | 141,964 | Prominent | 🟢 Active | ☁️ hosted | run | A terminal-first agentic coding tool that maps and explains your codebase, edits code, runs tests, and handles Git/GitHub/GitLab workflows via natural language. |
| [Codex CLI](#codex-cli) | 1.1 CLI coding agents | Apache-2.0 | 106,787 | Prominent | 🟢 Active | 🟡 partial | docs-only | OpenAI's open-source, Rust-built terminal-native coding agent that runs in your shell with two-layer sandboxing and kernel-level OS sandboxing. |
| [Gemini CLI](#gemini-cli) | 1.1 CLI coding agents | Apache-2.0 | 106,569 | Prominent | 🟢 Active | 🟡 partial | docs-only | An open-source terminal AI agent that brings Gemini into your shell, with a ReAct loop, built-in Google Search grounding, 1M context, and MCP Extensions. |
| [Goose](#goose) | 1.1 CLI coding agents | Apache-2.0 | 52,984 | Prominent | 🟢 Active | 🟡 partial | docs-only | Open-source, on-machine AI agent (AAIF / Linux Foundation, originally Block) for code and general workflows — install, execute, edit, and test with any LLM, via desktop app, CLI, and API. |
| [Aider](#aider) | 1.1 CLI coding agents | Apache-2.0 | 48,324 | Prominent | 🟢 Active | 🟡 partial | docs-only | One of the earliest AI coding CLIs: git-native pair-programming in your terminal with a whole-repo map and any LLM via LiteLLM. |
| [Qwen Code](#qwen-code) | 1.1 CLI coding agents | Apache-2.0 | 27,184 | Prominent | 🟢 Active | 🟡 partial | docs-only | QwenLM's open-source terminal coding agent, forked from Gemini CLI and tuned for Qwen3-Coder but multi-provider (OpenAI/Anthropic/Gemini/local). |
| [Amp](#amp) | 1.1 CLI coding agents | Proprietary | — | Established | 🟢 Active | ☁️ hosted | docs-only | Sourcegraph's agentic coding tool (CLI + VS Code) whose free tier launched ad-supported (2025-10) and is now ad-free with rate limits, plus paid subscription / pay-as-you-go usage (orbs, credits). |
| [Zed](#zed) | 1.2 IDE / editor agents | GPL-3.0-or-later + Apache-2.0 + AGPL-3.0 / NOASSERTION | 88,866 | Prominent | 🟢 Active | 🟡 partial | docs-only | A GPU-accelerated, Rust-built multiplayer code editor with native AI: an Agent Panel for agentic editing and the Agent Client Protocol (ACP) to plug in external agents. |
| [Cline](#cline) | 1.2 IDE / editor agents | Apache-2.0 | 66,458 | Prominent | 🟢 Active | 🟡 partial | docs-only | An open-source, BYOK autonomous coding agent in your IDE and terminal with Plan/Act modes and human approval on every action. |
| [Continue](#continue) | 1.2 IDE / editor agents | Apache-2.0 | 35,534 | Prominent | 🟢 Active | ✅ | docs-only | Open-source coding agent as a VS Code / JetBrains extension and a CLI — bring your own models (fully local via Ollama, or any cloud), fully customizable. Apache-2.0. |
| [Void](#void) | 1.2 IDE / editor agents | Apache-2.0 | 28,833 | Prominent | ⚰️ Defunct | ✅ | docs-only | Open-source VS Code fork positioned as a free Cursor/Copilot alternative with BYO/local models. Notable (~29k★) but ⚰️ repository archived (read-only). |
| [Roo Code](#roo-code) | 1.2 IDE / editor agents | Apache-2.0 | 24,330 | Prominent | ⚰️ Defunct | 🟡 partial | docs-only | An open-source VS Code coding agent (now defunct — shut down 2026-05-15, repo archived) that began as a Cline fork and differentiated with customizable Modes: Code, Architect, Ask, Debug, Custom. |
| [Kiro](#kiro) | 1.2 IDE / editor agents | Proprietary | 4,195 | Established | 🟢 Active | ☁️ hosted | docs-only | AWS's proprietary agentic IDE (Code OSS base) that makes specs the unit of work (requirements -> design -> tasks) with agent hooks and steering files. |
| [Cursor](#cursor) | 1.2 IDE / editor agents | Proprietary | — | Prominent | 🟢 Active | ☁️ hosted | docs-only | An AI-first commercial code editor built on the VS Code codebase, with agent mode, Tab autocomplete, Composer multi-file edits, and cloud/background agents. |
| [GitHub Copilot](#github-copilot) | 1.2 IDE / editor agents | Proprietary | — | Prominent | 🟢 Active | ☁️ hosted | docs-only | GitHub's proprietary AI coding assistant across the SDLC, from inline completion to autonomous PRs, with synchronous Agent Mode and asynchronous Coding Agent. |
| [Windsurf](#windsurf) | 1.2 IDE / editor agents | Proprietary | — | Prominent | 🟢 Active | ☁️ hosted | docs-only | Proprietary AI-native IDE (VS Code–based) with the Cascade agent; formerly Codeium, acquired by Cognition (2025-07) and rebranded Devin Desktop (2026-06). Current lineup includes a Free plan. |
| [OpenHands](#openhands) | 1.3 Autonomous SWE agents | MIT | 84,462 | Prominent | 🟢 Active | 🟡 partial | docs-only | Open-source autonomous SWE platform (ex-OpenDevin); its main repo now ships Agent Canvas (beta) — a self-hosted control center running the OpenHands agent or any ACP agent on local-to-cloud backends. |
| [SWE-agent](#swe-agent) | 1.3 Autonomous SWE agents | MIT | 20,080 | Prominent | 🟢 Active | 🟡 partial | docs-only | The research-grade autonomous agent from the SWE-bench team that takes a GitHub issue and fixes it with your LM of choice, via a configurable Agent-Computer Interface. |
| [DeepCode](#deepcode) | 1.3 Autonomous SWE agents | MIT | 16,373 | Prominent | 🟢 Active | ✅ | docs-only | Open multi-agent coding framework (HKU) that turns high-level inputs into production-ready code — Paper2Code, Text2Web, Text2Backend — with CodeRAG, sandboxing, MCP tools, and BYO LLM. |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [OpenCode](#opencode) | You want an MIT, provider-agnostic, client/server terminal agent with built-in LSP and MCP and no vendor lock-in. | You prefer a single-binary monolith or a GUI-only tool. |
| [Claude Code](#claude-code) | You want a powerful terminal-first agent with strong codebase understanding and rich extensibility (hooks/skills/subagents/MCP), and a proprietary Claude-only paid tool is acceptable. | You need open-source, model-agnosticism, or a free/offline option. |
| [Codex CLI](#codex-cli) | You want an open-source, terminal-native GPT agent with the strongest built-in OS-level sandbox. | You need model-agnosticism or an IDE plugin (it is GPT-only and terminal-native). |
| [Gemini CLI](#gemini-cli) | You want a free, open-source terminal agent with built-in web-search grounding, huge context, and an Extensions ecosystem. | You need model-agnosticism or must avoid a Google account and free-tier rate limits. |
| [Goose](#goose) | You want a local, MCP-first, multi-provider agent that executes/tests/automates beyond code, with a desktop GUI plus CLI and neutral foundation governance. | You want a narrowly scoped, suggestion-only assistant or IDE-native inline completion (§1.2), or you can't grant an agent broad authority to install, execute, and edit on your machine. |
| [Aider](#aider) | You want a git-native, model-agnostic terminal pair-programmer with strong repo-mapping and fine edit control, great with local models. | You want a fully autonomous SWE agent or an IDE/GUI rather than a human-in-the-loop terminal tool. |
| [Qwen Code](#qwen-code) | You want a Gemini-CLI-lineage terminal agent tuned for Qwen3-Coder but usable with any OpenAI-compatible or local model. | You need a free-OAuth path (discontinued 2026-04-15) or want to avoid Node.js 22+. |
| [Amp](#amp) | You want a capable agent with a genuinely free (now ad-free) tier for interactive editor/CLI use. | You need guaranteed throughput beyond free rate limits, contractual data-handling terms you have verified, or a fully open/local tool. |
| [Zed](#zed) | You want the fastest native editor with first-class collaboration and open agent interop (ACP) to plug in any agent instead of one vendor's UI. | You need a VS Code-compatible extension ecosystem, a web version, or must avoid a GPL/AGPL copyleft aggregate license. |
| [Cline](#cline) | You want an open-source, transparent, BYOK editor agent with approval over every action, to avoid markup/lock-in and use local models. | You want a hosted/managed service or a fully autonomous agent without approval gating. |
| [Continue](#continue) | You want a free, open-source, model-agnostic assistant that can run fully local (Ollama) inside your existing IDE. | You want a turnkey proprietary IDE (Cursor/Windsurf) or a terminal-first agent (§1.1). |
| [Void](#void) | Only to study or self-host the frozen code — the repo is archived. | New adoption — archived; use active open Continue, or free-tier Cursor/Windsurf (§1.2). |
| [Roo Code](#roo-code) | Only if maintaining an existing Roo Code setup; for new work use Cline or the ZooCode community fork. | Not safe for new adoption: the VS Code extension shut down 2026-05-15 and the repo is archived; migrate to ZooCode or Cline. |
| [Kiro](#kiro) | You want spec-driven, structured agentic engineering in a VS Code-like IDE, especially for AWS/Bedrock shops or Amazon Q Developer migrations. | You need open-source or BYOK, or want lightweight autocomplete without spec overhead for tiny tasks. |
| [Cursor](#cursor) | You want a polished, AI-first commercial IDE with best-in-class Tab, agent mode, cloud agents, and PR review, and metered proprietary pricing is acceptable. | You need open-source, want to avoid credit-metered pricing, or cannot send code to Cursor's cloud infrastructure. |
| [GitHub Copilot](#github-copilot) | You want the most platform-integrated assistant (GitHub + VS Code/JetBrains) with completion, Agent Mode, async issue->PR, multi-model, and enterprise governance. | You need open-source, or want to avoid usage-based AI-credit billing for heavy agent use. |
| [Windsurf](#windsurf) | You want the polished proprietary agentic-IDE lineage now continued as Devin Desktop, and Cognition's current free-plan terms fit your use. | You need fully-open/local tooling (Continue), heavy daily use beyond free credits, or verified-stable pricing (terms shifted after the Cognition acquisition). |
| [OpenHands](#openhands) | You want a fully open-source, self-hostable stack to run and automate autonomous coding agents (OpenHands or any ACP agent) across your own backends. | You want a lightweight editor plugin, or cannot provide a sandbox and the tokens autonomous runs consume. |
| [SWE-agent](#swe-agent) | You want a research-grade, fully configurable, minimal autonomous SWE agent (the reference agent for SWE-bench) for evaluation, research, or CTF. | You want a polished product or IDE rather than a research tool. |
| [DeepCode](#deepcode) | You want an open, research-grade autonomous pipeline that turns papers/specs/descriptions into working web or backend code. | You want an interactive editor/CLI coding assistant (§1.1/1.2), not an autonomous spec→code generator. |

## Tools

<a id="opencode"></a>
### OpenCode

**🟢 Active** — A fully open-source (MIT), provider-agnostic coding agent built for the terminal, with a client/server design and 75+ providers via models.dev.

| | |
|---|---|
| Repo | https://github.com/anomalyco/opencode |
| Maker | Anomaly (formerly SST) |
| Sub-type | 1.1 CLI coding agents |
| License | MIT |
| Maturity | Prominent · ⭐199,022 · created 2025-04 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"AI coding agent, built for the terminal."*

**Features**
- Client/server: background server + multiple frontends
- Multi-client: TUI, desktop, web, VS Code extension
- Provider-agnostic via Vercel AI SDK + models.dev (75+ providers)
- Built-in LSP client (diagnostics, type info, symbols)
- First-class MCP (stdio + HTTP/SSE, OAuth)
- build / plan agents; themeable TUI; cross-platform

**Choose it when** — You want an MIT, provider-agnostic, client/server terminal agent with built-in LSP and MCP and no vendor lock-in.

**Avoid when** — You prefer a single-binary monolith or a GUI-only tool.

📄 **Deep research:** [`research/coding-agents/opencode.md`](../research/coding-agents/opencode.md)

---

<a id="claude-code"></a>
### Claude Code

**🟢 Active** — A terminal-first agentic coding tool that maps and explains your codebase, edits code, runs tests, and handles Git/GitHub/GitLab workflows via natural language.

| | |
|---|---|
| Repo | https://github.com/anthropics/claude-code |
| Maker | Anthropic |
| Sub-type | 1.1 CLI coding agents |
| License | Proprietary |
| Maturity | Prominent · ⭐141,964 · created 2025-02 |
| Runs local | ☁️ hosted |
| Hands-on | run |

> *"an agentic coding tool that lives in your terminal, understands your codebase"*

**Features**
- Agentic codebase mapping/search (no manual context selection)
- Git/GitHub/GitLab workflow: issue -> code -> tests -> PR
- Subagents with isolated context windows; hooks; skills
- Plugins + MCP for external tools
- Multi-surface: terminal, VS Code, JetBrains, Slack, web, desktop, iOS
- Headless/CI mode; Claude Agent SDK

**Choose it when** — You want a powerful terminal-first agent with strong codebase understanding and rich extensibility (hooks/skills/subagents/MCP), and a proprietary Claude-only paid tool is acceptable.

**Avoid when** — You need open-source, model-agnosticism, or a free/offline option.

📄 **Deep research:** [`research/coding-agents/claude-code.md`](../research/coding-agents/claude-code.md)

---

<a id="codex-cli"></a>
### Codex CLI

**🟢 Active** — OpenAI's open-source, Rust-built terminal-native coding agent that runs in your shell with two-layer sandboxing and kernel-level OS sandboxing.

| | |
|---|---|
| Repo | https://github.com/openai/codex |
| Maker | OpenAI |
| Sub-type | 1.1 CLI coding agents |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐106,787 · created 2025-04 · Rust |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Lightweight coding agent that runs in your terminal."*

**Features**
- MCP with parallel tool calls (~2x faster)
- Two-layer security: sandbox modes + approval policy
- Kernel-level OS sandboxing (Seatbelt / Landlock / seccomp)
- GPT-5.x, 272K default context (up to 1M); AGENTS.md config
- Install via npm, brew, or prebuilt binaries

**Choose it when** — You want an open-source, terminal-native GPT agent with the strongest built-in OS-level sandbox.

**Avoid when** — You need model-agnosticism or an IDE plugin (it is GPT-only and terminal-native).

📄 **Deep research:** [`research/coding-agents/codex-cli.md`](../research/coding-agents/codex-cli.md)

---

<a id="gemini-cli"></a>
### Gemini CLI

**🟢 Active** — An open-source terminal AI agent that brings Gemini into your shell, with a ReAct loop, built-in Google Search grounding, 1M context, and MCP Extensions.

| | |
|---|---|
| Repo | https://github.com/google-gemini/gemini-cli |
| Maker | Google |
| Sub-type | 1.1 CLI coding agents |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐106,569 · created 2025-04 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"open-source AI agent that brings the power of Gemini directly into your terminal"*

**Features**
- ReAct loop + built-in tools (Search grounding, file ops, shell, web fetch)
- 1M token context (Gemini 3); multimodal input
- MCP + Extensions ecosystem (Figma, Stripe, Snyk, Firebase, ...)
- GitHub integration (@gemini-cli PR reviews) + GitHub Action; VS Code companion
- Free tier: 60 req/min + 1,000 req/day with a Google account
- Headless/scripting (JSON); GEMINI.md context; sandboxing

**Choose it when** — You want a free, open-source terminal agent with built-in web-search grounding, huge context, and an Extensions ecosystem.

**Avoid when** — You need model-agnosticism or must avoid a Google account and free-tier rate limits.

📄 **Deep research:** [`research/coding-agents/gemini-cli.md`](../research/coding-agents/gemini-cli.md)

---

<a id="goose"></a>
### Goose

**🟢 Active** — Open-source, on-machine AI agent (AAIF / Linux Foundation, originally Block) for code and general workflows — install, execute, edit, and test with any LLM, via desktop app, CLI, and API.

| | |
|---|---|
| Repo | https://github.com/aaif-goose/goose |
| Maker | Agentic AI Foundation (AAIF, Linux Foundation) — originally Block |
| Sub-type | 1.1 CLI coding agents |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐52,984 · created 2024-08 · Rust |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"your native open source AI agent — desktop app, CLI, and API"*

**Features**
- General-purpose: code plus research, writing, automation, data analysis
- MCP-first: 70+ extensions
- 15+ LLM providers incl. local (Ollama); ACP to reuse Claude/ChatGPT/Gemini subscriptions
- Three surfaces: desktop app + CLI + API
- Recipes for workflow automation; custom distribution
- Built in Rust; repo now under the AAIF org (aaif-goose/goose)

**Choose it when** — You want a local, MCP-first, multi-provider agent that executes/tests/automates beyond code, with a desktop GUI plus CLI and neutral foundation governance.

**Avoid when** — You want a narrowly scoped, suggestion-only assistant or IDE-native inline completion (§1.2), or you can't grant an agent broad authority to install, execute, and edit on your machine.

📄 **Deep research:** [`research/coding-agents/goose.md`](../research/coding-agents/goose.md)

---

<a id="aider"></a>
### Aider

**🟢 Active** — One of the earliest AI coding CLIs: git-native pair-programming in your terminal with a whole-repo map and any LLM via LiteLLM.

| | |
|---|---|
| Repo | https://github.com/Aider-AI/aider |
| Maker | Aider-AI (Paul Gauthier + community) |
| Sub-type | 1.1 CLI coding agents |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐48,324 · created 2023-05 · Python |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"AI pair programming in your terminal."*

**Features**
- Git-native: auto-commits with sensible messages; easy undo
- Repo map of the whole codebase for large projects
- Multi-file edits; diff + whole-file edit formats
- Model-agnostic via LiteLLM (Claude/GPT/DeepSeek/Gemini/local)
- 100+ languages; voice-to-code; watch mode; auto lint + test
- Aider polyglot leaderboard (model coding benchmark)

**Choose it when** — You want a git-native, model-agnostic terminal pair-programmer with strong repo-mapping and fine edit control, great with local models.

**Avoid when** — You want a fully autonomous SWE agent or an IDE/GUI rather than a human-in-the-loop terminal tool.

📄 **Deep research:** [`research/coding-agents/aider.md`](../research/coding-agents/aider.md)

---

<a id="qwen-code"></a>
### Qwen Code

**🟢 Active** — QwenLM's open-source terminal coding agent, forked from Gemini CLI and tuned for Qwen3-Coder but multi-provider (OpenAI/Anthropic/Gemini/local).

| | |
|---|---|
| Repo | https://github.com/QwenLM/qwen-code |
| Maker | QwenLM (Alibaba) |
| Sub-type | 1.1 CLI coding agents |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐27,184 · created 2025-06 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"An open-source AI coding agent that lives in your terminal."*

**Features**
- Interactive TUI + headless mode (qwen -p)
- Multi-provider: OpenAI / Anthropic / Gemini / Qwen + local Ollama/vLLM
- Qwen3-Coder-optimized; 256K-1M token context
- MCP, sandbox, git worktrees
- npm install (@qwen-code/qwen-code; Node.js 22+)

**Choose it when** — You want a Gemini-CLI-lineage terminal agent tuned for Qwen3-Coder but usable with any OpenAI-compatible or local model.

**Avoid when** — You need a free-OAuth path (discontinued 2026-04-15) or want to avoid Node.js 22+.

📄 **Deep research:** [`research/coding-agents/qwen-code.md`](../research/coding-agents/qwen-code.md)

---

<a id="amp"></a>
### Amp

**🟢 Active** — Sourcegraph's agentic coding tool (CLI + VS Code) whose free tier launched ad-supported (2025-10) and is now ad-free with rate limits, plus paid subscription / pay-as-you-go usage (orbs, credits).

| | |
|---|---|
| Repo | https://ampcode.com |
| Maker | Sourcegraph |
| Sub-type | 1.1 CLI coding agents |
| License | Proprietary |
| Maturity | Established · created 2025 |
| Runs local | ☁️ hosted |
| Hands-on | docs-only |

> *"An AI coding agent built by Sourcegraph."*

**Features**
- CLI + VS Code extension; agentic multi-step coding
- Amp Free: launched ad-supported 2025-10-15, since made ad-free; 'There are some rate limits'
- Thread sharing; orbs (hosted agent sandboxes); realtime voice control (Puck)
- Paid: monthly subscription includes agent + orbs usage; pay-as-you-go credits

**Choose it when** — You want a capable agent with a genuinely free (now ad-free) tier for interactive editor/CLI use.

**Avoid when** — You need guaranteed throughput beyond free rate limits, contractual data-handling terms you have verified, or a fully open/local tool.

**Related sections:** [§1](01-coding-agents.md)

📄 **Deep research:** [`research/coding-agents/amp.md`](../research/coding-agents/amp.md)

---

<a id="zed"></a>
### Zed

**🟢 Active** — A GPU-accelerated, Rust-built multiplayer code editor with native AI: an Agent Panel for agentic editing and the Agent Client Protocol (ACP) to plug in external agents.

| | |
|---|---|
| Repo | https://github.com/zed-industries/zed |
| Maker | Zed Industries |
| Sub-type | 1.2 IDE / editor agents |
| License | GPL-3.0-or-later + Apache-2.0 + AGPL-3.0 / NOASSERTION |
| Maturity | Prominent · ⭐88,866 · created 2021-02 · Rust |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Code at the speed of thought."*

**Features**
- GPU-accelerated Rust editor; Tree-sitter-native; terminal + LSP
- Agent Panel: agentic editing with tool use + streaming
- ACP / External Agents: plug in Claude Code, Gemini CLI, etc.
- Edit Prediction (Zeta model); Inline Assistant
- Multiplayer real-time collaboration
- Model-agnostic (any provider + local Ollama + Zed hosted)

**Choose it when** — You want the fastest native editor with first-class collaboration and open agent interop (ACP) to plug in any agent instead of one vendor's UI.

**Avoid when** — You need a VS Code-compatible extension ecosystem, a web version, or must avoid a GPL/AGPL copyleft aggregate license.

📄 **Deep research:** [`research/coding-agents/zed.md`](../research/coding-agents/zed.md)

---

<a id="cline"></a>
### Cline

**🟢 Active** — An open-source, BYOK autonomous coding agent in your IDE and terminal with Plan/Act modes and human approval on every action.

| | |
|---|---|
| Repo | https://github.com/cline/cline |
| Maker | Cline Bot Inc. |
| Sub-type | 1.2 IDE / editor agents |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐66,458 · created 2024-07 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"The open source coding agent in your IDE and terminal."*

**Features**
- Plan/Act modes; approval-gated by default
- Multi-file edits with diff review + checkpoints/undo
- Terminal execution with real-time output monitoring
- Browser automation (computer use)
- MCP + custom tools via SDK; .clinerules config
- BYOK across 200+ models incl. local (Ollama, LM Studio)

**Choose it when** — You want an open-source, transparent, BYOK editor agent with approval over every action, to avoid markup/lock-in and use local models.

**Avoid when** — You want a hosted/managed service or a fully autonomous agent without approval gating.

📄 **Deep research:** [`research/coding-agents/cline.md`](../research/coding-agents/cline.md)

---

<a id="continue"></a>
### Continue

**🟢 Active** — Open-source coding agent as a VS Code / JetBrains extension and a CLI — bring your own models (fully local via Ollama, or any cloud), fully customizable. Apache-2.0.

| | |
|---|---|
| Repo | https://github.com/continuedev/continue |
| Maker | Continue |
| Sub-type | 1.2 IDE / editor agents |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐35,534 · created 2023-05 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Pioneering open-source coding agent."*

**Features**
- VS Code + JetBrains extensions and a CLI from one config
- BYO models — fully local (Ollama / LM Studio) or any cloud provider
- Autocomplete, chat, edit, and agent modes
- Customizable rules/context; Apache-2.0, free

**Choose it when** — You want a free, open-source, model-agnostic assistant that can run fully local (Ollama) inside your existing IDE.

**Avoid when** — You want a turnkey proprietary IDE (Cursor/Windsurf) or a terminal-first agent (§1.1).

**Related sections:** [§1](01-coding-agents.md) · [§12](12-model-routing.md)

📄 **Deep research:** [`research/coding-agents/continue.md`](../research/coding-agents/continue.md)

---

<a id="void"></a>
### Void

**⚰️ Defunct** — Open-source VS Code fork positioned as a free Cursor/Copilot alternative with BYO/local models. Notable (~29k★) but ⚰️ repository archived (read-only).

| | |
|---|---|
| Repo | https://github.com/voideditor/void |
| Maker | Void (Glass Devtools) |
| Sub-type | 1.2 IDE / editor agents |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐28,833 · created 2024-09 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

**Features**
- VS Code fork with AI chat, edit, and agent features
- BYO / local models (Ollama, etc.) — no mandatory proprietary backend
- Free, open-source (Apache-2.0)
- ⚰️ repository archived (read-only)

**Choose it when** — Only to study or self-host the frozen code — the repo is archived.

**Avoid when** — New adoption — archived; use active open Continue, or free-tier Cursor/Windsurf (§1.2).

**Related sections:** [§1](01-coding-agents.md)

📄 **Deep research:** [`research/coding-agents/void.md`](../research/coding-agents/void.md)

---

<a id="roo-code"></a>
### Roo Code

**⚰️ Defunct** — An open-source VS Code coding agent (now defunct — shut down 2026-05-15, repo archived) that began as a Cline fork and differentiated with customizable Modes: Code, Architect, Ask, Debug, Custom.

| | |
|---|---|
| Repo | https://github.com/RooCodeInc/Roo-Code |
| Maker | Roo Code, Inc. |
| Sub-type | 1.2 IDE / editor agents |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐24,330 · created 2024-10 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Your AI-Powered Dev Team, Right in Your Editor."*

**Features**
- Custom Modes: Code / Architect / Ask / Debug + user-defined
- MCP server support; browser + terminal
- @-mention context; code actions; custom instructions
- BYOK across any provider incl. local

**Choose it when** — Only if maintaining an existing Roo Code setup; for new work use Cline or the ZooCode community fork.

**Avoid when** — Not safe for new adoption: the VS Code extension shut down 2026-05-15 and the repo is archived; migrate to ZooCode or Cline.

📄 **Deep research:** [`research/coding-agents/roo-code.md`](../research/coding-agents/roo-code.md)

---

<a id="kiro"></a>
### Kiro

**🟢 Active** — AWS's proprietary agentic IDE (Code OSS base) that makes specs the unit of work (requirements -> design -> tasks) with agent hooks and steering files.

| | |
|---|---|
| Repo | https://github.com/kirodotdev/Kiro |
| Maker | AWS (Amazon) |
| Sub-type | 1.2 IDE / editor agents |
| License | Proprietary |
| Maturity | Established · ⭐4,195 · created 2025-06 |
| Runs local | ☁️ hosted |
| Hands-on | docs-only |

> *"Move beyond AI coding to agentic engineering."*

**Features**
- Spec-driven development: requirements -> design -> tasks
- Agent Hooks: run agent actions on events (save/commit)
- Steering files encode project conventions
- MCP support; supervised + autopilot modes
- Bedrock model routing (Claude Sonnet 4.5 / Opus 4.8 / Nova)
- Code OSS base (VS Code-familiar)

**Choose it when** — You want spec-driven, structured agentic engineering in a VS Code-like IDE, especially for AWS/Bedrock shops or Amazon Q Developer migrations.

**Avoid when** — You need open-source or BYOK, or want lightweight autocomplete without spec overhead for tiny tasks.

📄 **Deep research:** [`research/coding-agents/kiro.md`](../research/coding-agents/kiro.md)

---

<a id="cursor"></a>
### Cursor

**🟢 Active** — An AI-first commercial code editor built on the VS Code codebase, with agent mode, Tab autocomplete, Composer multi-file edits, and cloud/background agents.

| | |
|---|---|
| Repo | https://cursor.com |
| Maker | Anysphere |
| Sub-type | 1.2 IDE / editor agents |
| License | Proprietary |
| Maturity | Prominent · created 2023 |
| Runs local | ☁️ hosted |
| Hands-on | docs-only |

> *"Cursor is your coding agent for building ambitious software."*

**Features**
- Agent mode: reads codebase, edits files, runs commands, iterates
- Manual/Composer: surgical multi-file edits with diff review
- Tab: low-latency AI autocomplete (Sonic model)
- Background + Cloud Agents (isolated cloud VMs, multi-repo parallel)
- BugBot AI code review on every PR
- MCP; codebase indexing + @-symbol context; Rules

**Choose it when** — You want a polished, AI-first commercial IDE with best-in-class Tab, agent mode, cloud agents, and PR review, and metered proprietary pricing is acceptable.

**Avoid when** — You need open-source, want to avoid credit-metered pricing, or cannot send code to Cursor's cloud infrastructure.

📄 **Deep research:** [`research/coding-agents/cursor.md`](../research/coding-agents/cursor.md)

---

<a id="github-copilot"></a>
### GitHub Copilot

**🟢 Active** — GitHub's proprietary AI coding assistant across the SDLC, from inline completion to autonomous PRs, with synchronous Agent Mode and asynchronous Coding Agent.

| | |
|---|---|
| Repo | https://github.com/features/copilot |
| Maker | GitHub (Microsoft) |
| Sub-type | 1.2 IDE / editor agents |
| License | Proprietary |
| Maturity | Prominent · created 2021 |
| Runs local | ☁️ hosted |
| Hands-on | docs-only |

> *"Your AI accelerator for every workflow, from the editor to the enterprise."*

**Features**
- Code completion + next-edit suggestions (no credits)
- Copilot Chat (IDE + github.com)
- Agent Mode (synchronous): edits, runs commands, fixes tests
- Coding Agent (asynchronous): assign an issue -> ready PR
- Code review; MCP + Registry; Copilot Spaces
- Multi-model picker (Claude/GPT/Gemini); IP indemnity

**Choose it when** — You want the most platform-integrated assistant (GitHub + VS Code/JetBrains) with completion, Agent Mode, async issue->PR, multi-model, and enterprise governance.

**Avoid when** — You need open-source, or want to avoid usage-based AI-credit billing for heavy agent use.

📄 **Deep research:** [`research/coding-agents/github-copilot.md`](../research/coding-agents/github-copilot.md)

---

<a id="windsurf"></a>
### Windsurf

**🟢 Active** — Proprietary AI-native IDE (VS Code–based) with the Cascade agent; formerly Codeium, acquired by Cognition (2025-07) and rebranded Devin Desktop (2026-06). Current lineup includes a Free plan.

| | |
|---|---|
| Repo | https://devin.ai/desktop |
| Maker | Cognition (acquired Windsurf 2025-07; formerly Codeium) |
| Sub-type | 1.2 IDE / editor agents |
| License | Proprietary |
| Maturity | Prominent · created 2024 |
| Runs local | ☁️ hosted |
| Hands-on | docs-only |

> *"The next generation of Windsurf, built around Devin Cloud, the Agent Command Center"*

**Features**
- AI-native IDE (VS Code fork) with the 'Cascade' agent (multi-file edits, terminal, tools)
- Rebranded Devin Desktop (2026-06); windsurf.com now redirects to devin.ai; Linux package renamed windsurf → devin-desktop
- Free plan in Cognition's 2026-04 self-serve lineup (Free/Pro/Max/Teams/Enterprise); free signup per docs
- ⚠️ exact free-plan contents and no-credit-card status unverified 2026-08-19 (pricing page bot-gated); prior terms were unlimited Tab + ~25 credits/mo

**Choose it when** — You want the polished proprietary agentic-IDE lineage now continued as Devin Desktop, and Cognition's current free-plan terms fit your use.

**Avoid when** — You need fully-open/local tooling (Continue), heavy daily use beyond free credits, or verified-stable pricing (terms shifted after the Cognition acquisition).

**Related sections:** [§1](01-coding-agents.md)

📄 **Deep research:** [`research/coding-agents/windsurf.md`](../research/coding-agents/windsurf.md)

---

<a id="openhands"></a>
### OpenHands

**🟢 Active** — Open-source autonomous SWE platform (ex-OpenDevin); its main repo now ships Agent Canvas (beta) — a self-hosted control center running the OpenHands agent or any ACP agent on local-to-cloud backends.

| | |
|---|---|
| Repo | https://github.com/OpenHands/OpenHands |
| Maker | OpenHands (formerly All Hands AI) |
| Sub-type | 1.3 Autonomous SWE agents |
| License | MIT |
| Maturity | Prominent · ⭐84,462 · created 2024-03 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"OpenHands: AI-Driven Development."*

**Features**
- Agent Canvas (beta): self-hosted developer control center for coding agents + automations
- Runs OpenHands, Claude Code, Codex, Gemini, or any ACP-compatible agent
- Agent backends: local (no sandbox), Docker sandbox, VMs, OpenHands Cloud/Enterprise
- Automations: scheduled/webhook workflows integrating Slack, GitHub, Linear, Notion
- OpenHands V1 agent + SDK now in the separate software-agent-sdk repo (CodeAct lineage)
- Any LLM; npm @openhands/agent-canvas; CLI binary in OpenHands-CLI

**Choose it when** — You want a fully open-source, self-hostable stack to run and automate autonomous coding agents (OpenHands or any ACP agent) across your own backends.

**Avoid when** — You want a lightweight editor plugin, or cannot provide a sandbox and the tokens autonomous runs consume.

📄 **Deep research:** [`research/coding-agents/openhands.md`](../research/coding-agents/openhands.md)

---

<a id="swe-agent"></a>
### SWE-agent

**🟢 Active** — The research-grade autonomous agent from the SWE-bench team that takes a GitHub issue and fixes it with your LM of choice, via a configurable Agent-Computer Interface.

| | |
|---|---|
| Repo | https://github.com/SWE-agent/SWE-agent |
| Maker | Princeton University + Stanford |
| Sub-type | 1.3 Autonomous SWE agents |
| License | MIT |
| Maturity | Prominent · ⭐20,080 · created 2024-04 · Python |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"leaves maximal agency to the LM."*

**Features**
- Fix GitHub issues autonomously with any LM, in a sandbox
- Agent-Computer Interface (ACI): YAML-configured commands + feedback
- mini-SWE-agent: 65% SWE-bench Verified in 100 lines
- EnIGMA: offensive-security (CTF / vuln discovery) mode
- Fully documented + configurable; SWE-bench integration

**Choose it when** — You want a research-grade, fully configurable, minimal autonomous SWE agent (the reference agent for SWE-bench) for evaluation, research, or CTF.

**Avoid when** — You want a polished product or IDE rather than a research tool.

📄 **Deep research:** [`research/coding-agents/swe-agent.md`](../research/coding-agents/swe-agent.md)

---

<a id="deepcode"></a>
### DeepCode

**🟢 Active** — Open multi-agent coding framework (HKU) that turns high-level inputs into production-ready code — Paper2Code, Text2Web, Text2Backend — with CodeRAG, sandboxing, MCP tools, and BYO LLM.

| | |
|---|---|
| Repo | https://github.com/HKUDS/DeepCode |
| Maker | HKUDS (HKU Data Intelligence Lab) |
| Sub-type | 1.3 Autonomous SWE agents |
| License | MIT |
| Maturity | Prominent · ⭐16,373 · created 2025-05 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Where AI Agents Transform Ideas into Production-Ready Code."*

**Features**
- Three workflows: Paper2Code, Text2Web, Text2Backend
- Multi-agent pipeline: intent/parse → plan → code-reference mining → index → generate → test/QA
- CodeRAG retrieval; MCP tool integration; integrated sandboxing + permission controls
- Interactive CLI + web UI; persistent sessions with memory
- BYO LLM: OpenAI, Anthropic, Gemini, OpenAI-compatible (OpenRouter, Poe, DashScope)

**Choose it when** — You want an open, research-grade autonomous pipeline that turns papers/specs/descriptions into working web or backend code.

**Avoid when** — You want an interactive editor/CLI coding assistant (§1.1/1.2), not an autonomous spec→code generator.

**Related sections:** [§7](07-agent-runtimes.md) · [§14](14-protocols.md)

📄 **Deep research:** [`research/coding-agents/deepcode.md`](../research/coding-agents/deepcode.md)

---

_Part of [AI-Choices-Atlas](https://github.com/ZerephCo/AI-Choices-Atlas), stewarded by Zereph · content dedicated to the public domain under [CC0 1.0](../LICENSE) — reuse freely, no credit required._
