<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 5. Loop factories

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *how do you make an agent keep going until the job is actually done? — the keep-going-until-done runners built on the Ralph Wiggum technique*

**Golden rule:** A loop factory is only as safe as its stop condition + guardrails. A pure Ralph loop ("a dumb bash loop that keeps restarting the agent") has no brakes — it runs until a completion token, an iteration cap, or your budget runs out. Governed loop harnesses (caps + verifier gates + rollback) live in §2 Orchestrators (MartinLoop = "Ralph-with-brakes", Loki Mode). §5 is the raw technique + runners; pair it with a proof-gate for production.

## Sub-types
- **5.1 Ralph technique & loop runners** — the canonical bash-loop method + CLI runners that restart an agent until done
- **5.2 Autonomy-loop protocols** — prompt/protocol harnesses that instruct an agent to self-continue

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [ralph-claude-code](#ralph-claude-code) | 5.1 Ralph technique & loop runners | MIT | 9,555 | Established | 🟢 Active | 🟡 partial | docs-only | A Claude-Code-specific Ralph loop with intelligent dual-condition exit detection, rate limiting, and a circuit breaker as safety brakes. |
| [ralph-orchestrator](#ralph-orchestrator) | 5.1 Ralph technique & loop runners | MIT | 3,067 | Established | 🟢 Active | 🟡 partial | docs-only | A hat-based, guard-railed Ralph runner in Rust that loops an agent until LOOP_COMPLETE; 8 backends, backpressure gates (tests/lint/typecheck), and cost/iteration caps. |
| [ralphy](#ralphy) | 5.1 Ralph technique & loop runners | none | 2,932 | Established | 🟢 Active | 🟡 partial | docs-only | A viral multi-agent Ralph bash script that runs Claude Code, Codex, OpenCode, Cursor, Qwen, or Droid in a loop until your PRD is complete. |
| [Ralph TUI](#ralph-tui) | 5.1 Ralph technique & loop runners | MIT | 2,405 | Established | 🟢 Active | 🟡 partial | docs-only | A terminal-UI Ralph runner that connects an AI coding agent to a task tracker (prd.json or Beads) and works the backlog task-by-task across 7 backends. |
| [how-to-ralph-wiggum](#how-to-ralph-wiggum) | 5.1 Ralph technique & loop runners | none | 1,722 | Established | 🟢 Active | 🟡 partial | docs-only | The canonical Ralph Wiggum technique by its inventor Geoffrey Huntley: a bash while-loop that keeps restarting an agent, with a persistent plan file as shared disk state. |
| [Oh My OpenAgent](#oh-my-openagent) | 5.2 Autonomy-loop protocols | NOASSERTION | 66,222 | Prominent | 🟢 Active | 🟡 partial | docs-only | A token-efficient agent harness for complex codebases that wraps Codex and OpenCode; the coding agent for tokenmaxxers (= LazyCodex, same repo). |
| [Ruflo / claude-flow](#ruflo-claude-flow) | 5.2 Autonomy-loop protocols | MIT | 65,243 | Prominent | 🟢 Active | 🟡 partial | docs-only | A large agent meta-harness for deploying multi-player agent swarms and coordinating autonomous workflows, with adaptive memory, self-learning, and RAG integration. |
| [GSD (Get Shit Done)](#gsd-get-shit-done) | 5.2 Autonomy-loop protocols | MIT | 64,779 | Prominent | 🟢 Active | 🟡 partial | docs-only | A spec-driven autonomy system for Claude Code that runs each atomic task in a fresh 200K-context sub-agent with disk-persisted state; original archived, community redux active. |
| [Nelson](#nelson) | 5.2 Autonomy-loop protocols | MIT | 403 | Emerging | 🟢 Active | 🟡 partial | docs-only | An autonomy protocol layer for Claude Code with 11 named Royal-Navy-style damage-control procedures for stuck agents, context exhaustion, and budget overruns. |
| [sdd-riper](#sdd-riper) | 5.2 Autonomy-loop protocols | none | 307 | Emerging | 🟢 Active | 🟡 partial | docs-only | A lightweight human-steered harness that lets strong models explore while humans steer via minimal specs, checkpoints, approval, validation, and reverse sync. |
| [Kiln](#kiln) | 5.2 Autonomy-loop protocols | MIT | 218 | Emerging | 🟢 Active | 🟡 partial | docs-only | A native Claude Code plugin for multi-model orchestration: persistent teams per step, ordered messaging, tracked iterations, and crash-proof state. |
| [Buildomator](#buildomator) | 5.2 Autonomy-loop protocols | none | 76 | Preview | 🟢 Active | 🟡 partial | docs-only | A Claude-Code-native evolution of GSD: a plan/execute/verify workflow with MCP-backed state, atomic commits, drift detection, and ~92% lower per-turn token overhead. |
| [Megingjord](#megingjord-harness) | 5.2 Autonomy-loop protocols | NOASSERTION | 0 | Preview | 🟢 Active | 🟡 partial | docs-only | An AI agent governance harness with a baton workflow, fleet LLM routing (Ollama/Claude/OpenRouter), and CI gates across Copilot, Claude Code, and Codex. |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [ralph-claude-code](#ralph-claude-code) | You want a Claude-Code-only Ralph loop with the best-developed stop/exit detection and circuit-breaker brakes. | You need multi-agent backends (ralphy / Ralph TUI) or governance (§2). |
| [ralph-orchestrator](#ralph-orchestrator) | You want a real, multi-backend Ralph runner with built-in stop conditions (LOOP_COMPLETE plus iteration/cost caps) and backpressure gates. | You need audit-grade governance/attestation (use §2 Bernstein) or a fully hands-off managed service. |
| [ralphy](#ralphy) | You want a simple, multi-agent Ralph script to run any of several agents against a PRD. | You need a license (none declared), strong brakes, or governance. |
| [Ralph TUI](#ralph-tui) | You want a visible, tracker-driven Ralph loop that chews through a backlog (especially with Beads) across many agents, with sandboxing and pause/resume. | You want a headless minimal loop (ralph-claude-code) or governance (§2). |
| [how-to-ralph-wiggum](#how-to-ralph-wiggum) | You want to understand and hand-roll the minimal Ralph loop (a bash loop plus a plan file) before reaching for a real runner. | You need a maintained tool or to reuse the repo content (no license); use ralph-orchestrator for a real runner or MartinLoop (§2) for brakes. |
| [Oh My OpenAgent](#oh-my-openagent) | You want a token-efficient harness over Codex/OpenCode on large codebases. | You are Claude-native (use GSD) or want a minimal loop (ralph-*). |
| [Ruflo / claude-flow](#ruflo-claude-flow) | You want a feature-rich swarm meta-harness (memory + RAG + many integrations) driving autonomous workflows. | You want a minimal loop (ralph-*) or audit-grade governance (§2 Bernstein). |
| [GSD (Get Shit Done)](#gsd-get-shit-done) | You want spec-driven, long-horizon autonomy on Claude Code (via the community redux) with disciplined fresh-context sub-agents and disk state. | You want a minimal raw loop (ralph-*) or a runnable multi-agent platform (Ruflo); avoid the archived original for new work. |
| [Nelson](#nelson) | You want to add structured failure-handling (brakes plus recovery) to long autonomous Claude Code runs. | You want a runner (ralph-*) or non-Claude backends. |
| [sdd-riper](#sdd-riper) | You want human-in-the-loop checkpoints and approval over strong coding agents. | You want hands-off autonomy (GSD) or need a license. |
| [Kiln](#kiln) | You want a crash-proof multi-agent pipeline inside Claude Code. | You want a bigger swarm harness (Ruflo) or a raw loop (ralph-*). |
| [Buildomator](#buildomator) | You want a GSD-style workflow that adds a real verify gate, drift detection, and big token savings on Claude Code. | You need production reliance now (Preview, no license); use GSD redux for a larger community. |
| [Megingjord](#megingjord-harness) | You want to experiment with governance and fleet routing across multiple agents. | You need production reliability (Preview; no clear license). |

## Tools

<a id="ralph-claude-code"></a>
### ralph-claude-code

**🟢 Active** — A Claude-Code-specific Ralph loop with intelligent dual-condition exit detection, rate limiting, and a circuit breaker as safety brakes.

| | |
|---|---|
| Repo | https://github.com/frankbria/ralph-claude-code |
| Maker | frankbria |
| Sub-type | 5.1 Ralph technique & loop runners |
| License | MIT |
| Maturity | Established · ⭐9,555 · created 2025-08 · Shell |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Autonomous AI development loop for Claude Code with intelligent exit detection."*

**Features**
- Continuous autonomous Claude Code loop (Ralph technique)
- Intelligent exit detection — dual-condition exit gate (stop when done)
- Rate limiting + circuit breaker with advanced error detection
- Shell-based; heavily tested (claims 784 tests)

**Choose it when** — You want a Claude-Code-only Ralph loop with the best-developed stop/exit detection and circuit-breaker brakes.

**Avoid when** — You need multi-agent backends (ralphy / Ralph TUI) or governance (§2).

**Related sections:** [§2](02-orchestrators.md)

📄 **Deep research:** [`research/loop-factories/ralph-claude-code.md`](../research/loop-factories/ralph-claude-code.md)

---

<a id="ralph-orchestrator"></a>
### ralph-orchestrator

**🟢 Active** — A hat-based, guard-railed Ralph runner in Rust that loops an agent until LOOP_COMPLETE; 8 backends, backpressure gates (tests/lint/typecheck), and cost/iteration caps.

| | |
|---|---|
| Repo | https://github.com/mikeyobrien/ralph-orchestrator |
| Maker | mikeyobrien |
| Sub-type | 5.1 Ralph technique & loop runners |
| License | MIT |
| Maturity | Established · ⭐3,067 · created 2025-09 · Rust |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"A hat-based orchestration framework that keeps AI agents in a loop until the task is done."*

**Features**
- Hat system — specialized personas coordinating through events
- Backpressure gates that reject incomplete work (tests, lint, typecheck)
- Multi-backend: Claude Code, Codex, Gemini CLI, Kiro, Forge, Amp, Copilot CLI, OpenCode
- Persistent .ralph/specs state; LOOP_COMPLETE token + iteration + cost caps
- Web dashboard (alpha); RObot Telegram HITL; workspace-scoped MCP

**Choose it when** — You want a real, multi-backend Ralph runner with built-in stop conditions (LOOP_COMPLETE plus iteration/cost caps) and backpressure gates.

**Avoid when** — You need audit-grade governance/attestation (use §2 Bernstein) or a fully hands-off managed service.

**Related sections:** [§2](02-orchestrators.md)

📄 **Deep research:** [`research/loop-factories/ralph-orchestrator.md`](../research/loop-factories/ralph-orchestrator.md)

---

<a id="ralphy"></a>
### ralphy

**🟢 Active** — A viral multi-agent Ralph bash script that runs Claude Code, Codex, OpenCode, Cursor, Qwen, or Droid in a loop until your PRD is complete.

| | |
|---|---|
| Repo | https://github.com/michaelshimeles/ralphy |
| Maker | michaelshimeles |
| Sub-type | 5.1 Ralph technique & loop runners |
| License | none |
| Maturity | Established · ⭐2,932 · created 2026-01 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"an autonomous bash script that runs Claude Code, Codex, OpenCode, Cursor agent, Qwen & Droid in a loop until your PRD is complete."*

**Features**
- Multi-agent out of the box: Claude Code, Codex, OpenCode, Cursor agent, Qwen, Droid
- Loops until the PRD is complete; bash-script simplicity with TypeScript tooling
- Personal-turned-viral (1K stars in 3 days)

**Choose it when** — You want a simple, multi-agent Ralph script to run any of several agents against a PRD.

**Avoid when** — You need a license (none declared), strong brakes, or governance.

**Related sections:** [§2](02-orchestrators.md)

📄 **Deep research:** [`research/loop-factories/ralphy.md`](../research/loop-factories/ralphy.md)

---

<a id="ralph-tui"></a>
### Ralph TUI

**🟢 Active** — A terminal-UI Ralph runner that connects an AI coding agent to a task tracker (prd.json or Beads) and works the backlog task-by-task across 7 backends.

| | |
|---|---|
| Repo | https://github.com/subsy/ralph-tui |
| Maker | subsy |
| Sub-type | 5.1 Ralph technique & loop runners |
| License | MIT |
| Maturity | Established · ⭐2,405 · created 2026-01 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Terminal UI for orchestrating AI coding agents to work through task lists autonomously."*

**Features**
- Tracker-driven loop — prd.json or Beads (git-backed deps); highest-priority selection
- Multi-agent: Claude Code, OpenCode, Factory Droid, Cursor CLI, Gemini CLI, Codex, Kiro CLI
- Real-time TUI (keyboard) + headless; session persistence (pause/resume across crashes)
- Sandbox execution (bwrap / sandbox-exec); iteration limits; remote instances; plugins + themes

**Choose it when** — You want a visible, tracker-driven Ralph loop that chews through a backlog (especially with Beads) across many agents, with sandboxing and pause/resume.

**Avoid when** — You want a headless minimal loop (ralph-claude-code) or governance (§2).

**Related sections:** [§4.1](04-memory.md) · [§2](02-orchestrators.md)

📄 **Deep research:** [`research/loop-factories/ralph-tui.md`](../research/loop-factories/ralph-tui.md)

---

<a id="how-to-ralph-wiggum"></a>
### how-to-ralph-wiggum

**🟢 Active** — The canonical Ralph Wiggum technique by its inventor Geoffrey Huntley: a bash while-loop that keeps restarting an agent, with a persistent plan file as shared disk state.

| | |
|---|---|
| Repo | https://github.com/ghuntley/how-to-ralph-wiggum |
| Maker | Geoffrey Huntley |
| Sub-type | 5.1 Ralph technique & loop runners |
| License | none |
| Maturity | Established · ⭐1,722 · created 2026-01 · HTML |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"the loop is the hero, not the model."*

**Features**
- The canonical loop pattern: bash while loop, plan file, deterministic file loads
- IMPLEMENTATION_PLAN.md as durable shared state between iterations
- Agent-agnostic; the loop is the hero, not the model
- Methodology + examples (not a packaged CLI)

**Choose it when** — You want to understand and hand-roll the minimal Ralph loop (a bash loop plus a plan file) before reaching for a real runner.

**Avoid when** — You need a maintained tool or to reuse the repo content (no license); use ralph-orchestrator for a real runner or MartinLoop (§2) for brakes.

**Related sections:** [§2](02-orchestrators.md)

📄 **Deep research:** [`research/loop-factories/how-to-ralph-wiggum.md`](../research/loop-factories/how-to-ralph-wiggum.md)

---

<a id="oh-my-openagent"></a>
### Oh My OpenAgent

**🟢 Active** — A token-efficient agent harness for complex codebases that wraps Codex and OpenCode; the coding agent for tokenmaxxers (= LazyCodex, same repo).

| | |
|---|---|
| Repo | https://github.com/code-yeongyu/oh-my-openagent |
| Maker | code-yeongyu |
| Sub-type | 5.2 Autonomy-loop protocols |
| License | NOASSERTION |
| Maturity | Prominent · ⭐66,222 · created 2025-12 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"The coding agent for tokenmaxxers; the one and only agent harness for complex codebases."*

**Features**
- Token-efficient (tokenmaxxers) context harness for complex codebases
- Wraps Codex and OpenCode as backends
- omo = Oh My OpenAgent; lazycodex is the same project's alias

**Choose it when** — You want a token-efficient harness over Codex/OpenCode on large codebases.

**Avoid when** — You are Claude-native (use GSD) or want a minimal loop (ralph-*).

📄 **Deep research:** [`research/loop-factories/oh-my-openagent.md`](../research/loop-factories/oh-my-openagent.md)

---

<a id="ruflo-claude-flow"></a>
### Ruflo / claude-flow

**🟢 Active** — A large agent meta-harness for deploying multi-player agent swarms and coordinating autonomous workflows, with adaptive memory, self-learning, and RAG integration.

| | |
|---|---|
| Repo | https://github.com/ruvnet/ruflo |
| Maker | ruvnet |
| Sub-type | 5.2 Autonomy-loop protocols |
| License | MIT |
| Maturity | Prominent · ⭐65,243 · created 2025-06 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"The leading agent meta-harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows…"*

**Features**
- Multi-player swarms + autonomous workflow coordination (meta-harness)
- Adaptive memory + self-learning intelligence; RAG integration
- Native Claude Code / Codex / Hermes + many integrations
- Conversational AI system building

**Choose it when** — You want a feature-rich swarm meta-harness (memory + RAG + many integrations) driving autonomous workflows.

**Avoid when** — You want a minimal loop (ralph-*) or audit-grade governance (§2 Bernstein).

**Related sections:** [§2](02-orchestrators.md)

📄 **Deep research:** [`research/loop-factories/ruflo-claude-flow.md`](../research/loop-factories/ruflo-claude-flow.md)

---

<a id="gsd-get-shit-done"></a>
### GSD (Get Shit Done)

**🟢 Active** — A spec-driven autonomy system for Claude Code that runs each atomic task in a fresh 200K-context sub-agent with disk-persisted state; original archived, community redux active.

| | |
|---|---|
| Repo | https://github.com/gsd-build/get-shit-done |
| Maker | TÂCHES (Lex Christopherson) |
| Sub-type | 5.2 Autonomy-loop protocols |
| License | MIT |
| Maturity | Prominent · ⭐64,779 · created 2025-12 · JavaScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"a light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code."*

**Features**
- Chain of slash-command phases, ideally each in a fresh context window
- Atomic tasks → fresh Claude instance per task; main session stays lean (30-40% context)
- Disk-persisted state (text files) → new sessions resume
- /gsd-autonomous for hands-off phase advancement (pairs with /loop)

**Choose it when** — You want spec-driven, long-horizon autonomy on Claude Code (via the community redux) with disciplined fresh-context sub-agents and disk state.

**Avoid when** — You want a minimal raw loop (ralph-*) or a runnable multi-agent platform (Ruflo); avoid the archived original for new work.

**Related sections:** [§1](01-coding-agents.md)

📄 **Deep research:** [`research/loop-factories/gsd-get-shit-done.md`](../research/loop-factories/gsd-get-shit-done.md)

---

<a id="nelson"></a>
### Nelson

**🟢 Active** — An autonomy protocol layer for Claude Code with 11 named Royal-Navy-style damage-control procedures for stuck agents, context exhaustion, and budget overruns.

| | |
|---|---|
| Repo | https://github.com/Aspegio/nelson |
| Maker | Aspegio |
| Sub-type | 5.2 Autonomy-loop protocols |
| License | MIT |
| Maturity | Emerging · ⭐403 · created 2026-02 · Python |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Organisation for Claude Code inspired by time-tested Royal Navy operating procedures."*

**Features**
- 11 named damage-control procedures (stuck agents, context exhaustion, budget overruns, mission abort)
- Aligns with Claude Code's /goal Stop hook (keeps a session going until a completion condition)
- Built for long autonomous / headless / scheduled runs

**Choose it when** — You want to add structured failure-handling (brakes plus recovery) to long autonomous Claude Code runs.

**Avoid when** — You want a runner (ralph-*) or non-Claude backends.

**Related sections:** [§2](02-orchestrators.md)

📄 **Deep research:** [`research/loop-factories/nelson.md`](../research/loop-factories/nelson.md)

---

<a id="sdd-riper"></a>
### sdd-riper

**🟢 Active** — A lightweight human-steered harness that lets strong models explore while humans steer via minimal specs, checkpoints, approval, validation, and reverse sync.

| | |
|---|---|
| Repo | https://github.com/huisezhiyin/sdd-riper |
| Maker | huisezhiyin |
| Sub-type | 5.2 Autonomy-loop protocols |
| License | none |
| Maturity | Emerging · ⭐307 · created 2026-02 · Python |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"let strong models explore while humans steer with minimal specs, checkpoints, approval, validation, and reverse sync."*

**Features**
- Minimal specs + checkpoints (recover/resume)
- Approval + validation gates; reverse sync back to specs
- Context-first; observable, recoverable, reviewable

**Choose it when** — You want human-in-the-loop checkpoints and approval over strong coding agents.

**Avoid when** — You want hands-off autonomy (GSD) or need a license.

📄 **Deep research:** [`research/loop-factories/sdd-riper.md`](../research/loop-factories/sdd-riper.md)

---

<a id="kiln"></a>
### Kiln

**🟢 Active** — A native Claude Code plugin for multi-model orchestration: persistent teams per step, ordered messaging, tracked iterations, and crash-proof state.

| | |
|---|---|
| Repo | https://github.com/Fredasterehub/kiln |
| Maker | Fredasterehub |
| Sub-type | 5.2 Autonomy-loop protocols |
| License | MIT |
| Maturity | Emerging · ⭐218 · created 2026-02 · JavaScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Multi-model AI orchestration workflow for Claude Code."*

**Features**
- Persistent teams per step; ordered inter-agent messaging
- Tracked iterations; runtime enforcement; crash-proof state
- 34 agents / 2 commands / 2 composable skills (native Claude Code plugin)

**Choose it when** — You want a crash-proof multi-agent pipeline inside Claude Code.

**Avoid when** — You want a bigger swarm harness (Ruflo) or a raw loop (ralph-*).

**Related sections:** [§2](02-orchestrators.md)

📄 **Deep research:** [`research/loop-factories/kiln.md`](../research/loop-factories/kiln.md)

---

<a id="buildomator"></a>
### Buildomator

**🟢 Active** — A Claude-Code-native evolution of GSD: a plan/execute/verify workflow with MCP-backed state, atomic commits, drift detection, and ~92% lower per-turn token overhead.

| | |
|---|---|
| Repo | https://github.com/buildomator/buildomator |
| Maker | jnuyens |
| Sub-type | 5.2 Autonomy-loop protocols |
| License | none |
| Maturity | Preview · ⭐76 · created 2026-04 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"A structured plan/execute/verify coding workflow for Claude Code."*

**Features**
- Plan → execute → verify workflow (a verify gate, rare among loop tools)
- MCP-backed project state; atomic commits; cross-session memory
- Convention + drift-detection safeguards; ~92% lower per-turn token overhead vs GSD

**Choose it when** — You want a GSD-style workflow that adds a real verify gate, drift detection, and big token savings on Claude Code.

**Avoid when** — You need production reliance now (Preview, no license); use GSD redux for a larger community.

**Related sections:** [§2](02-orchestrators.md)

📄 **Deep research:** [`research/loop-factories/buildomator.md`](../research/loop-factories/buildomator.md)

---

<a id="megingjord-harness"></a>
### Megingjord

**🟢 Active** — An AI agent governance harness with a baton workflow, fleet LLM routing (Ollama/Claude/OpenRouter), and CI gates across Copilot, Claude Code, and Codex.

| | |
|---|---|
| Repo | https://github.com/chf3198/megingjord-harness |
| Maker | chf3198 |
| Sub-type | 5.2 Autonomy-loop protocols |
| License | NOASSERTION |
| Maturity | Preview · ⭐0 · created 2026-04 · JavaScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"AI agent governance harness: baton workflow, fleet LLM routing (Ollama/Claude/OpenRouter), and CI gates for Copilot, Claude Code, and Codex."*

**Features**
- Baton workflow (hand-off between steps/agents)
- Fleet LLM routing — Ollama / Claude / OpenRouter
- CI gates across Copilot / Claude Code / Codex
- Skills, hooks, agents, runtime scripts

**Choose it when** — You want to experiment with governance and fleet routing across multiple agents.

**Avoid when** — You need production reliability (Preview; no clear license).

**Related sections:** [§2](02-orchestrators.md)

📄 **Deep research:** [`research/loop-factories/megingjord-harness.md`](../research/loop-factories/megingjord-harness.md)

---

_Part of [AI-Choices-Atlas](https://github.com/Khubaeb/AI-Choices-Atlas) by Khubaeb · licensed under [CC BY 4.0](../LICENSE) — reuse and adapt freely, with credit._
