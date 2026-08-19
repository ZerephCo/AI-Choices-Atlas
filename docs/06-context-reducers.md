<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 6. Context reducers

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *how do you fit the most useful signal into a limited context window? — compress prompts, pack codebases, or inject just-in-time docs so the model sees what matters and not the noise.*

**Golden rule:** context reducers trade completeness for signal density. Compressors (LLMLingua) are lossy — they can drop something load-bearing, so validate on your task. Packers (Repomix/gitingest) are lossless selection (you choose files) but can still blow the budget on big repos → use include/ignore + token counting. JIT providers (Context7) fight staleness, not size. Pair with Memory (§4) for durable recall and codebase-memory (§4.1) for structure.

## Sub-types
- **6.1 Prompt compressors** — shrink an existing prompt/context by dropping low-information tokens (lossy)
- **6.2 Repo/codebase packers** — pack a repo/dir into a single compact, LLM-ready file (lossless selection)
- **6.3 Just-in-time context providers** — fetch fresh, version-specific docs into the prompt on demand

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [LLMLingua](#llmlingua) | 6.1 prompt compressors | MIT | 6,452 | Established | 🟢 Active | ✅ | docs-only | Microsoft prompt-compression toolkit: a small LM removes non-essential tokens, compressing prompts + KV-cache up to 20x with minimal loss (LLMLingua / LongLLMLingua / LLMLingua-2). |
| [Repomix](#repomix) | 6.2 repo/codebase packers | MIT | 27,253 | Prominent | 🟢 Active | ✅ | docs-only | Packs your entire repository into a single AI-friendly file - the feature-rich packer with Tree-sitter compression, Secretlint security, token counting, and an MCP server. MIT. |
| [gitingest](#gitingest) | 6.2 repo/codebase packers | MIT | 15,203 | Prominent | 🟢 Active | ✅ | docs-only | Replace 'hub' with 'ingest' in any GitHub URL to get a prompt-friendly extract of a codebase - the zero-install repo digest; also a CLI + Python package. MIT. |
| [code2prompt](#code2prompt) | 6.2 repo/codebase packers | MIT | 7,486 | Established | 🟢 Active | ✅ | docs-only | Convert your codebase into a single LLM prompt with source tree, Handlebars prompt templating, and token counting - a fast Rust CLI + SDK. MIT. |
| [files-to-prompt](#files-to-prompt) | 6.2 repo/codebase packers | Apache-2.0 | 2,760 | Emerging | 🟢 Active | ✅ | docs-only | Concatenate a directory full of files into a single prompt for LLMs - a minimal, composable Unix-style packer (Claude-XML/Markdown output) that pairs with the llm CLI. Apache-2.0. |
| [yek](#yek) | 6.2 repo/codebase packers | MIT | 2,471 | Emerging | 🟢 Active | ✅ | docs-only | A fast Rust tool to serialize text-based files in a repository or directory for LLM consumption - git-aware, with chunking to a token budget. MIT. |
| [RepoPrompt CE](#repoprompt-ce) | 6.2 repo/codebase packers | Apache-2.0 | 820 | Emerging | 🟢 Active | ✅ | docs-only | Free, open-source native macOS context-engineering app + agent orchestrator: assembles focused, reviewable context (files, CodeMaps, git diffs) within a token budget; MCP CLI. macOS 26+ only. |
| [Context7](#context7) | 6.3 just-in-time context providers | MIT | 59,466 | Prominent | 🟢 Active | ☁️ hosted | docs-only | An MCP server that injects current, version-specific docs + code examples into your prompt on demand ('use context7') - fixing outdated/hallucinated APIs. Hosted; MIT. |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [LLMLingua](#llmlingua) | You want to cut token cost/latency on long prompts, RAG contexts, or CoT where some redundancy is safe to drop. | Every token is load-bearing (exact code, legal text), or you want lossless selection (use a packer). |
| [Repomix](#repomix) | You want the most feature-rich packer - compression + security scanning + token counting + MCP. | You want zero-install from a URL (gitingest) or a minimal Unix-pipe packer (files-to-prompt). |
| [gitingest](#gitingest) | You want the fastest zero-install path from a public GitHub URL to an LLM-ready digest. | You need a feature-rich local packer (Repomix) or private-repo packing without self-hosting. |
| [code2prompt](#code2prompt) | You want customizable prompt templating (Handlebars) over a packed codebase. | You want a hosted web service (gitingest) or the richest feature set + MCP (Repomix). |
| [files-to-prompt](#files-to-prompt) | You want a minimal, composable packer that fits a Unix pipeline with the llm CLI. | You need Tree-sitter compression, an MCP server, or a security scan (use Repomix). |
| [yek](#yek) | You want the fastest, git-aware packer with chunking on a large repo. | You want a feature-rich packer (Repomix) or prompt templating (code2prompt). |
| [RepoPrompt CE](#repoprompt-ce) | You want an interactive, native-app context builder with CodeMaps, token budgeting, and agent orchestration. | You are not on macOS 26+, or you want a headless cross-platform CLI packer (Repomix/gitingest). |
| [Context7](#context7) | You want to stop the model hallucinating outdated APIs - inject current, version-correct docs on demand. | Your issue is token size (use a compressor/packer) or you need fully-offline (no hosted service). |

## Tools

<a id="llmlingua"></a>
### LLMLingua

**🟢 Active** — Microsoft prompt-compression toolkit: a small LM removes non-essential tokens, compressing prompts + KV-cache up to 20x with minimal loss (LLMLingua / LongLLMLingua / LLMLingua-2).

| | |
|---|---|
| Repo | https://github.com/microsoft/LLMLingua |
| Maker | Microsoft |
| Sub-type | 6.1 prompt compressors |
| License | MIT |
| Maturity | Established · ⭐6,452 · created 2023-07 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"identify and remove non-essential tokens in prompts."*

**Features**
- Up to 20x prompt compression with minimal performance loss
- LongLLMLingua — fixes lost-in-the-middle for long context (+21.4% RAG at 1/4 tokens)
- LLMLingua-2 — task-agnostic, GPT-4-distilled, 3-6x faster
- KV-cache compression (inference speed-up)
- Use cases: RAG, long-context, chain-of-thought, code, meetings

**Choose it when** — You want to cut token cost/latency on long prompts, RAG contexts, or CoT where some redundancy is safe to drop.

**Avoid when** — Every token is load-bearing (exact code, legal text), or you want lossless selection (use a packer).

📄 **Deep research:** [`research/context-reducers/llmlingua.md`](../research/context-reducers/llmlingua.md)

---

<a id="repomix"></a>
### Repomix

**🟢 Active** — Packs your entire repository into a single AI-friendly file - the feature-rich packer with Tree-sitter compression, Secretlint security, token counting, and an MCP server. MIT.

| | |
|---|---|
| Repo | https://github.com/yamadashy/repomix |
| Maker | yamadashy |
| Sub-type | 6.2 repo/codebase packers |
| License | MIT |
| Maturity | Prominent · ⭐27,253 · created 2024-07 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Repomix packs your entire repository into a single, AI-friendly file"*

**Features**
- Token counting per file + whole repo (context-limit awareness)
- Tree-sitter code compression - extracts functions/classes/interfaces, cutting tokens
- Include/ignore globs; respects .gitignore / .ignore / .repomixignore
- Secretlint security check - blocks API keys/passwords
- Outputs XML / Markdown / JSON / Plain Text; remote-repo packing
- MCP server; many interfaces (CLI/web/VS Code/browser/Docker)

**Choose it when** — You want the most feature-rich packer - compression + security scanning + token counting + MCP.

**Avoid when** — You want zero-install from a URL (gitingest) or a minimal Unix-pipe packer (files-to-prompt).

📄 **Deep research:** [`research/context-reducers/repomix.md`](../research/context-reducers/repomix.md)

---

<a id="gitingest"></a>
### gitingest

**🟢 Active** — Replace 'hub' with 'ingest' in any GitHub URL to get a prompt-friendly extract of a codebase - the zero-install repo digest; also a CLI + Python package. MIT.

| | |
|---|---|
| Repo | https://github.com/cyclotruc/gitingest |
| Maker | cyclotruc |
| Sub-type | 6.2 repo/codebase packers |
| License | MIT |
| Maturity | Prominent · ⭐15,203 · created 2024-11 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Replace 'hub' with 'ingest' in any GitHub URL to get a prompt-friendly extract of a codebase."*

**Features**
- URL trick: github.com/... becomes gitingest.com/... returning a prompt-friendly digest
- Digest = summary + directory tree + file contents
- Also a CLI and Python package for scripting/self-host
- Token/size stats; include/exclude patterns

**Choose it when** — You want the fastest zero-install path from a public GitHub URL to an LLM-ready digest.

**Avoid when** — You need a feature-rich local packer (Repomix) or private-repo packing without self-hosting.

📄 **Deep research:** [`research/context-reducers/gitingest.md`](../research/context-reducers/gitingest.md)

---

<a id="code2prompt"></a>
### code2prompt

**🟢 Active** — Convert your codebase into a single LLM prompt with source tree, Handlebars prompt templating, and token counting - a fast Rust CLI + SDK. MIT.

| | |
|---|---|
| Repo | https://github.com/mufeedvh/code2prompt |
| Maker | mufeedvh |
| Sub-type | 6.2 repo/codebase packers |
| License | MIT |
| Maturity | Established · ⭐7,486 · created 2024-03 · Rust |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"convert your codebase into a single LLM prompt with source tree, prompt templating, and token counting."*

**Features**
- Source tree + file contents into one prompt
- Prompt templating (Handlebars) - customize output structure/instructions
- Token counting; glob include/exclude; .gitignore respect
- Fast (Rust); usable as a library/SDK

**Choose it when** — You want customizable prompt templating (Handlebars) over a packed codebase.

**Avoid when** — You want a hosted web service (gitingest) or the richest feature set + MCP (Repomix).

📄 **Deep research:** [`research/context-reducers/code2prompt.md`](../research/context-reducers/code2prompt.md)

---

<a id="files-to-prompt"></a>
### files-to-prompt

**🟢 Active** — Concatenate a directory full of files into a single prompt for LLMs - a minimal, composable Unix-style packer (Claude-XML/Markdown output) that pairs with the llm CLI. Apache-2.0.

| | |
|---|---|
| Repo | https://github.com/simonw/files-to-prompt |
| Maker | Simon Willison |
| Sub-type | 6.2 repo/codebase packers |
| License | Apache-2.0 |
| Maturity | Emerging · ⭐2,760 · created 2024-03 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Concatenate a directory full of files into a single prompt for use with LLMs."*

**Features**
- Concatenate files/dirs into one prompt; respects .gitignore
- Claude-XML and Markdown output modes (--cxml, line numbers)
- Minimal + composable (pipe into llm and other tools)

**Choose it when** — You want a minimal, composable packer that fits a Unix pipeline with the llm CLI.

**Avoid when** — You need Tree-sitter compression, an MCP server, or a security scan (use Repomix).

📄 **Deep research:** [`research/context-reducers/files-to-prompt.md`](../research/context-reducers/files-to-prompt.md)

---

<a id="yek"></a>
### yek

**🟢 Active** — A fast Rust tool to serialize text-based files in a repository or directory for LLM consumption - git-aware, with chunking to a token budget. MIT.

| | |
|---|---|
| Repo | https://github.com/bodo-run/yek |
| Maker | bodo-run |
| Sub-type | 6.2 repo/codebase packers |
| License | MIT |
| Maturity | Emerging · ⭐2,471 · created 2025-01 · Rust |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"A fast Rust based tool to serialize text-based files in a repository or directory for LLM consumption."*

**Features**
- Fast Rust serialization of a repo/dir into LLM-ready text
- Git-aware; respects .gitignore; priority/ordering by git history
- Chunking (split output by token/byte budget)

**Choose it when** — You want the fastest, git-aware packer with chunking on a large repo.

**Avoid when** — You want a feature-rich packer (Repomix) or prompt templating (code2prompt).

📄 **Deep research:** [`research/context-reducers/yek.md`](../research/context-reducers/yek.md)

---

<a id="repoprompt-ce"></a>
### RepoPrompt CE

**🟢 Active** — Free, open-source native macOS context-engineering app + agent orchestrator: assembles focused, reviewable context (files, CodeMaps, git diffs) within a token budget; MCP CLI. macOS 26+ only.

| | |
|---|---|
| Repo | https://github.com/repoprompt/repoprompt-ce |
| Maker | RepoPrompt |
| Sub-type | 6.2 repo/codebase packers |
| License | Apache-2.0 |
| Maturity | Emerging · ⭐820 · created 2026-05 · Swift |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"A free, open-source native macOS app and agent orchestrator for context engineering."*

**Features**
- Context Builder - an agent explores the repo and curates context within a token budget
- Dense, reviewable prompts: file trees + selected contents + line slices + CodeMaps + git diffs
- Agent orchestration - run/coordinate CLI-backed coding agents with app-managed worktrees
- MCP CLI / server for external tool connectivity

**Choose it when** — You want an interactive, native-app context builder with CodeMaps, token budgeting, and agent orchestration.

**Avoid when** — You are not on macOS 26+, or you want a headless cross-platform CLI packer (Repomix/gitingest).

📄 **Deep research:** [`research/context-reducers/repoprompt-ce.md`](../research/context-reducers/repoprompt-ce.md)

---

<a id="context7"></a>
### Context7

**🟢 Active** — An MCP server that injects current, version-specific docs + code examples into your prompt on demand ('use context7') - fixing outdated/hallucinated APIs. Hosted; MIT.

| | |
|---|---|
| Repo | https://github.com/upstash/context7 |
| Maker | Upstash |
| Sub-type | 6.3 just-in-time context providers |
| License | MIT |
| Maturity | Prominent · ⭐59,466 · created 2025-03 · TypeScript |
| Runs local | ☁️ hosted |
| Hands-on | docs-only |

> *"Up-to-date code documentation for LLMs and AI code editors."*

**Features**
- Version-specific, current docs + examples injected via MCP
- Trigger with 'use context7'; resolves library IDs then queries live docs
- Clients: Cursor, Claude Code, VS Code, OpenCode, Windsurf + 30+ MCP clients
- Hosted (mcp.context7.com); free tier + API key for higher rate limits

**Choose it when** — You want to stop the model hallucinating outdated APIs - inject current, version-correct docs on demand.

**Avoid when** — Your issue is token size (use a compressor/packer) or you need fully-offline (no hosted service).

📄 **Deep research:** [`research/context-reducers/context7.md`](../research/context-reducers/context7.md)

---

_Part of [AI-Choices-Atlas](https://github.com/ZerephCo/AI-Choices-Atlas), stewarded by Zereph · content dedicated to the public domain under [CC0 1.0](../LICENSE) — reuse freely, no credit required._
