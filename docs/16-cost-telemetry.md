<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 16. Cost / spend telemetry

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *how much is all this actually costing — and can you cut it?*

**Golden rule:** Telemetry (CodeBurn/ccusage) tells you what you spent; reduction (token-savior, plus §6 context reducers + §4 memory) changes what you'll spend. On subscription plans, "cost" is really token/rate-limit budget — track it to avoid surprise throttling, not just dollars.

## Sub-types
- **16.1 Spend telemetry** — track token usage + cost across tools/sessions
- **16.2 Token reduction (cost optimization)** — cut token spend structurally

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [ccusage](#ccusage) | 16.1 spend telemetry | MIT / NOASSERTION | 18,054 | Prominent | 🟢 Active | ✅ | docs-only | The popular, zero-config usage + cost analyzer for local agent logs — Claude Code first, now also Codex, OpenCode, Amp, Droid, Goose, Pi and more; live monitoring (npx ccusage). |
| [CodeBurn](#codeburn) | 16.1 spend telemetry | MIT | 9,557 | Established | 🟢 Active | ✅ | docs-only | Free, local tool to track AI coding token usage and cost across ~40 tools and agents (README: 41; repo description: 37), by model, project, and task, plus waste-finding optimization (npx codeburn). |
| [token-savior](#token-savior) | 16.2 token reduction (cost optimization) | MIT | 1,121 | Established | 🟢 Active | ✅ | docs-only | An MCP server that cuts token spend via structural code navigation + persistent memory (−77% active tokens, self-reported). |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [ccusage](#ccusage) | You want fast, local cost/usage insight from your agents' own logs — Claude Code first (esp. subscription plans), with per-source views for Codex/OpenCode/Amp/Goose and more. | You want one unified cross-tool dashboard with waste-finding/optimization (CodeBurn) or token reduction (token-savior). |
| [CodeBurn](#codeburn) | You want total AI-coding spend across all your tools in one local dashboard. | You only use Claude Code (ccusage) or want token reduction (token-savior). |
| [token-savior](#token-savior) | You want to cut token cost on large codebases via structural nav + memory. | You want spend tracking (CodeBurn/ccusage) rather than reduction. |

## Tools

<a id="ccusage"></a>
### ccusage

**🟢 Active** — The popular, zero-config usage + cost analyzer for local agent logs — Claude Code first, now also Codex, OpenCode, Amp, Droid, Goose, Pi and more; live monitoring (npx ccusage).

| | |
|---|---|
| Repo | https://github.com/ccusage/ccusage |
| Maker | ryoppippi |
| Sub-type | 16.1 spend telemetry |
| License | MIT / NOASSERTION |
| Maturity | Prominent · ⭐18,054 · created 2025-05 · Rust |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"npx ccusage"*

**Features**
- daily / session / project / model cost + usage breakdowns
- live monitor; 5-hour-window (blocks) view
- parses local agent logs (local-first): Claude Code plus Codex, OpenCode, Amp, Droid, Codebuff, Hermes, pi-agent, Goose via per-source subcommands

**Choose it when** — You want fast, local cost/usage insight from your agents' own logs — Claude Code first (esp. subscription plans), with per-source views for Codex/OpenCode/Amp/Goose and more.

**Avoid when** — You want one unified cross-tool dashboard with waste-finding/optimization (CodeBurn) or token reduction (token-savior).

📄 **Deep research:** [`research/cost-telemetry/ccusage.md`](../research/cost-telemetry/ccusage.md)

---

<a id="codeburn"></a>
### CodeBurn

**🟢 Active** — Free, local tool to track AI coding token usage and cost across ~40 tools and agents (README: 41; repo description: 37), by model, project, and task, plus waste-finding optimization (npx codeburn).

| | |
|---|---|
| Repo | https://github.com/getagentseal/codeburn |
| Maker | AgentSeal |
| Sub-type | 16.1 spend telemetry |
| License | MIT |
| Maturity | Established · ⭐9,557 · created 2026-04 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Free, local tool to track AI coding token usage and cost across 37 tools"*

**Features**
- ~40 tools/agents — README claims 41, live repo description says 37 (both read 2026-08-20); Claude Code, Cursor, Codex, Gemini, …
- cost + tokens by model / project / task
- codeburn optimize: ranked waste findings with A–F setup grade; --apply fixes config-class findings (backed up + journaled; act undo restores)
- local (no data leaves); free; npx codeburn

**Choose it when** — You want total AI-coding spend across all your tools in one local dashboard.

**Avoid when** — You only use Claude Code (ccusage) or want token reduction (token-savior).

**Related sections:** [§12](12-model-routing.md)

📄 **Deep research:** [`research/cost-telemetry/codeburn.md`](../research/cost-telemetry/codeburn.md)

---

<a id="token-savior"></a>
### token-savior

**🟢 Active** — An MCP server that cuts token spend via structural code navigation + persistent memory (−77% active tokens, self-reported).

| | |
|---|---|
| Repo | https://github.com/Mibayy/token-savior |
| Maker | Mibayy |
| Sub-type | 16.2 token reduction (cost optimization) |
| License | MIT |
| Maturity | Established · ⭐1,121 · created 2026-03 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"-77% active tokens, -76% wall time, 0 losses across 96 tasks on Claude Opus 4.7"*

**Features**
- MCP server: structural code navigation (vs re-reading files)
- persistent memory; big token/time reductions (self-reported)
- works with any MCP client

**Choose it when** — You want to cut token cost on large codebases via structural nav + memory.

**Avoid when** — You want spend tracking (CodeBurn/ccusage) rather than reduction.

**Related sections:** [§6](06-context-reducers.md) · [§4](04-memory.md)

📄 **Deep research:** [`research/cost-telemetry/token-savior.md`](../research/cost-telemetry/token-savior.md)

---

_Part of [AI-Choices-Atlas](https://github.com/ZerephCo/AI-Choices-Atlas), stewarded by Zereph · content dedicated to the public domain under [CC0 1.0](../LICENSE) — reuse freely, no credit required._
