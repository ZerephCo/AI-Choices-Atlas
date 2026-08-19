<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 2. Orchestrators · cockpits · swarms

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *how do you run and coordinate one or many coding agents?*

**Golden rule:** exactly one outer controller per run; a worktree is NOT a sandbox; CI/branch rules + human release authority stay outside every cockpit. Judge these on outcome/coordination savings, not agent count or board movement.

## Sub-types
- **2.1 Cockpits & multiplexers** — visible, human-supervised control of parallel agents (worktrees, terminals, PR/CI)
- **2.2 Autonomous swarms & SDLC harnesses** — multi-agent pipelines that run with less supervision
- **2.3 Issue/backlog dispatchers** — turn tracker tickets into agent runs
- **2.4 Company/team control planes** — org-level goals, budgets, agents, approvals

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [Vibe Kanban](#vibe-kanban) | 2.1 Cockpits & multiplexers | Apache-2.0 | 27,848 | Prominent | ⚰️ Sunsetting | 🟡 partial | docs-only | The board + worktree + diff-review cockpit that pioneered the pattern; now sunsetting to a community-maintained, local-only OSS project. |
| [cmux](#cmux) | 2.1 Cockpits & multiplexers | NOASSERTION | 26,225 | Prominent | 🟢 Active | ✅ | docs-only | Ghostty-based macOS terminal built for AI coding agents — vertical tabs, notifications, programmability — to run and organize many agents at once. Huge traction, but ⚠️ non-standard license and macOS-only. |
| [T3 Code](#t3code) | 2.1 Cockpits & multiplexers | MIT | 19,444 | Prominent | 🟢 Active | 🟡 partial | docs-only | Open-source desktop/CLI cockpit that runs several coding agents (Claude Code, Codex, Cursor, OpenCode, Grok) in one workspace, bring-your-own-subscription. From Ping (Theo); early (v0.0.x). |
| [Agent Orchestrator (AO)](#agentwrapper-ao) | 2.1 Cockpits & multiplexers | Apache-2.0 | 9,631 | Established | 🟢 Active | 🟡 partial | docs-only | An agentic IDE that supervises parallel coding agents in isolated git worktrees, with automatic CI-fail / review / merge-conflict routing back to the right agent. Now under Untrivial.ai (ex-AgentWrapper). |
| [Claude Squad](#claude-squad) | 2.1 Cockpits & multiplexers | AGPL-3.0 | 8,338 | Established | 🟢 Active | ✅ | docs-only | Terminal cockpit (tmux + git worktrees) to run and supervise several coding agents — Claude Code, Codex, Aider — each isolated in its own workspace, reviewed before you ship. |
| [1code](#1code) | 2.1 Cockpits & multiplexers | Apache-2.0 | 5,610 | Established | ⚰️ Defunct | 🟡 partial | docs-only | Orchestration layer / cockpit to run several coding agents (Claude Code, Codex) from one place. Notable (~5.6k★) but ⚰️ archived — read-only, no longer developed. |
| [Emdash](#emdash) | 2.1 Cockpits & multiplexers | Apache-2.0 | 5,442 | Established | 🟢 Active | 🟡 partial | docs-only | Open-source desktop cockpit that runs many coding agents in parallel across isolated git worktrees, with browser preview, diff/PR review, scheduled automation, and remote SSH exec. |
| [CodexMonitor](#codexmonitor) | 2.1 Cockpits & multiplexers | MIT | 4,239 | Established | 🟢 Active | ✅ | docs-only | App to watch and manage your Codex / coding-agent sessions — live status, activity, and notifications across runs. By Thomas Ricouard (Dimillian, of Ice Cubes). |
| [Agent of Empires](#agent-of-empires) | 2.1 Cockpits & multiplexers | MIT | 3,099 | Established | 🟢 Active | ✅ | docs-only | TUI + Web cockpit to run and manage many coding agents (Claude Code, OpenCode, Codex CLI, Gemini CLI, Copilot CLI, Factory Droid, Mistral Vibe, Pi.dev) — including from mobile. |
| [Agent Teams AI](#agent-teams-ai) | 2.1 Cockpits & multiplexers | AGPL-3.0 | 1,947 | Established | 🟢 Active | ✅ | docs-only | A free desktop cockpit where agent teams message each other, review each other's work, and run on a live kanban with budgets and nested org structure. |
| [GasTown](#gastown) | 2.2 Autonomous swarms & SDLC harnesses | MIT | 17,668 | Prominent | 🟢 Active | ✅ | docs-only | Steve Yegge's Beads-native multi-agent 'Dark Factory' — worker agents run in git-worktree hooks; a Refinery merge queue + 3-tier watchdog keep a terminal swarm running autonomously. |
| [Open Multi-Agent](#open-multi-agent) | 2.2 Autonomous swarms & SDLC harnesses | MIT | 6,792 | Established | 🟢 Active | ✅ | docs-only | A TypeScript orchestration library where a coordinator plans a task DAG at runtime and runs it on any LLM, in your own environment — 'describe the goal, not the graph'. |
| [Fusion](#fusion) | 2.2 Autonomous swarms & SDLC harnesses | MIT | 1,135 | Established | 🧪 Preview | ✅ | docs-only | 'Your Software Factory' — describe what you want and a team of AI agents plans, builds, reviews, and ships it across a 24/7 multi-node mesh with visual gates. |
| [Loki Mode](#loki-mode) | 2.2 Autonomous swarms & SDLC harnesses | BUSL-1.1 / NOASSERTION | 1,046 | Established | 🟢 Active | ✅ | docs-only | 'The spec-driven autonomous builder with verified completion' — spec to deployed app with evidence receipts (facts vs AI assessments), 8+ quality gates, and drift detection. |
| [Bernstein](#bernstein) | 2.2 Autonomous swarms & SDLC harnesses | Apache-2.0 | 931 | Emerging | 🟢 Active | ✅ | docs-only | Audit-grade deterministic orchestration for 40+ CLI coding agents: a plain-Python scheduler (no LLM in the loop), signed lineage, byte-identical replay, HMAC audit chain, air-gap. |
| [Tutti](#tutti) | 2.2 Autonomous swarms & SDLC harnesses | MIT | 112 | Emerging | 🟢 Active | ✅ | docs-only | A typed, checkpointed workflow harness — 'Terraform-style agent operations for AI coding tools': intake, execute, review, gate, record, with a run ledger. |
| [MartinLoop](#martinloop) | 2.2 Autonomous swarms & SDLC harnesses | Apache-2.0 | 44 | Preview | 🟢 Active | ✅ | docs-only | A governed-run layer — a Ralph loop with brakes — that gives AI coding agents budgets, stop conditions, rollback rules, and signed receipts: task contract, caps, verify, rollback. |
| [Symphony](#symphony) | 2.3 Issue/backlog dispatchers | Apache-2.0 | 26,753 | Prominent | 🧪 Preview | 🟡 partial | docs-only | OpenAI's open-source spec (+ Elixir reference impl) for Codex orchestration that 'turns project work into isolated, autonomous implementation runs' driven off a Linear board. |
| [Sortie](#sortie) | 2.3 Issue/backlog dispatchers | Apache-2.0 | 127 | Emerging | 🟢 Active | ✅ | docs-only | 'Turn tracker tickets into autonomous agent sessions. Agent-agnostic, tracker-agnostic. Run in parallel.' — a single-Go-binary orchestration daemon with retries + reconciliation. |
| [Paperclip](#paperclip) | 2.4 Company/team control planes | MIT | 78,839 | Prominent | 🟢 Active | 🟡 partial | docs-only | 'The app people use to manage AI agents for work' — an open-source company control plane (org charts, goals, budgets, approvals, audit). 'If OpenClaw is an employee, Paperclip is the company.' |
| [AgentsMesh](#agentsmesh) | 2.4 Company/team control planes | NOASSERTION | 2,322 | Established | 🟢 Active | ✅ | docs-only | Self-hosted 'agent workforce' control plane: run a hundred coding agents across your own machines and schedule, isolate, and steer them from one console. ⚠️ non-standard license. |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [Vibe Kanban](#vibe-kanban) | You are already dependent and want to self-host the local OSS build, or to study the board+worktree pattern. | New adoption — it is sunsetting, remote features are being removed, and there is no vendor support. |
| [cmux](#cmux) | You're on macOS and want a fast, native terminal designed around running and organizing many coding-agent sessions. | You're not on macOS, or you need clear reuse rights — the license is non-standard (NOASSERTION); check the repo's terms first. |
| [T3 Code](#t3code) | You want one open-source cockpit to drive several coding-agent providers with your own subscriptions, in one workspace. | You need mature/stable software — it's pre-1.0 (v0.0.x, expect bugs, docs still forming) — or you only use one agent CLI directly. |
| [Agent Orchestrator (AO)](#agentwrapper-ao) | You want Windows-friendly, Apache-licensed parallel coding with strong PR/CI/review/conflict loops and the widest agent support. | You need OS-level containment (worktree is not a sandbox), a peer-team/messaging UX, or zero telemetry without a rebuild. |
| [Claude Squad](#claude-squad) | You live in the terminal and want a lightweight, local multiplexer to run several coding agents in parallel worktrees. | You want a graphical desktop cockpit, or AGPL-3.0's copyleft is a problem for your use. |
| [1code](#1code) | Only to study the pattern or self-host the frozen code — it is archived. | New adoption — the repo is archived (no maintenance, no support). Use an active cockpit (T3 Code, Emdash, Claude Squad). |
| [Emdash](#emdash) | You want a graphical, open-source desktop cockpit for parallel agents with preview, review, and scheduling built in. | You want a minimal terminal tool (see Claude Squad) or must avoid a desktop-app dependency. |
| [CodexMonitor](#codexmonitor) | You run agents (esp. Codex) and want a dedicated dashboard to watch their status/activity and get notified. | You want a full cockpit that also launches/routes work (T3 Code, Emdash) rather than a focused monitor. |
| [Agent of Empires](#agent-of-empires) | You want one cockpit (terminal or browser) over many coding agents, with mobile access to sessions. | You want a native desktop app (T3 Code/cmux) or a minimal single-agent workflow. |
| [Agent Teams AI](#agent-teams-ai) | Peer-team messaging, kanban, budgets, and org structure are the point, and AGPL is acceptable. | AGPL is a blocker, you need OS containment (worktree is not a sandbox), or you want a headless/CLI-first flow. |
| [GasTown](#gastown) | You need a genuinely large, autonomous terminal swarm on Linux/WSL where Beads-native work truth, a real merge queue, and watchdog recovery justify the operational weight. | Small repos, Windows-native (needs WSL), or you don't want Beads/Dolt coupling. |
| [Open Multi-Agent](#open-multi-agent) | You want a library-level, air-gappable orchestrator with runtime planning, multi-model teams, and replay/consensus, embedded in a Node app. | You want a UI/cockpit, a non-TS stack, or OS-level containment (shell/ACP tools run as host processes). |
| [Fusion](#fusion) | You want to experiment with a broad, mobile-capable, multi-node software factory with rich missions and a strong observability Command Center, accepting preview-grade reliability. | You need established authority/safety guarantees (it relies on human oversight, not enforcement) or proven completion metrics. |
| [Loki Mode](#loki-mode) | You want spec-driven autonomous builds with rigorous, honest evidence receipts + drift/gates on Claude Code, and BUSL-1.1 is acceptable. | You need an OSI license, non-Claude parallelism, auto-deploy, or you'd over-trust the broad claims. |
| [Bernstein](#bernstein) | Audit-grade determinism, compliance, and air-gap are the priority (regulated/on-prem) and you drive CLI coding agents. | Single-agent/small work, non-coding tasks, you need vendor support, or you'd wrongly treat its receipts as proof of correctness (integrity is not correctness; verify the completion gate). |
| [Tutti](#tutti) | You want a Terraform-style, gated, resumable ops layer over multiple CLI agents with a real run ledger, and coordination (not model quality) is the bottleneck. | Single-agent/small work, non-Rust/tmux environments, or you need the full advertised surface today (implementation trails the docs). |
| [MartinLoop](#martinloop) | You want to put brakes on autonomous Ralph-style loops with budget caps, verifier gates, rollback, and inspectable receipts — a lighter alternative to Bernstein. | You need independent (not local-HMAC) attestation, a non-Node stack, or audit-grade determinism. |
| [Symphony](#symphony) | You already run Linear + Codex and want issue-driven autonomous runs with proof-of-work, in a trusted environment. | You don't use Linear/Codex, need a durable orchestration DB, or need production hardening (it's a preview/spec). |
| [Sortie](#sortie) | You want tracker-agnostic, parallel ticket-to-agent automation with retries/reconciliation and a light single-binary footprint (incl. Windows). | You need the sandbox provided (it expects external containment), a UI cockpit, or agent-quality improvement (it doesn't do that). |
| [Paperclip](#paperclip) | The real problem is org-level governance — many agents, budgets, approvals, and audit across companies. | A single repo / small team (breadth is overkill), or you expect code review / merge gating (it explicitly doesn't do that). |
| [AgentsMesh](#agentsmesh) | You want to operate a fleet of coding agents across your own hardware from a single console. | You need a single-developer cockpit (T3 Code, Claude Squad), or you require clear OSI reuse rights (license is NOASSERTION). |

## Tools

<a id="vibe-kanban"></a>
### Vibe Kanban

**⚰️ Sunsetting** — The board + worktree + diff-review cockpit that pioneered the pattern; now sunsetting to a community-maintained, local-only OSS project.

| | |
|---|---|
| Repo | https://github.com/BloopAI/vibe-kanban |
| Maker | Bloop (BloopAI) |
| Sub-type | 2.1 Cockpits & multiplexers |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐27,848 · created 2025-06 · Rust |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Vibe Kanban is sunsetting."*

**Features**
- Kanban issues to plan work; each workspace gives an agent a branch, terminal, and dev server
- Inline diff review + comments; live browser preview (devtools); click-to-edit
- PR create/merge; remote access (being removed in sunset transition)
- Agents: Claude Code, Codex, Gemini CLI, Copilot, Amp, Cursor, OpenCode, Droid, CCR, Qwen
- Rust backend + TypeScript/Node frontend; frozen ~2026-04-24

**Choose it when** — You are already dependent and want to self-host the local OSS build, or to study the board+worktree pattern.

**Avoid when** — New adoption — it is sunsetting, remote features are being removed, and there is no vendor support.

📄 **Deep research:** [`research/orchestrators/vibe-kanban.md`](../research/orchestrators/vibe-kanban.md)

---

<a id="cmux"></a>
### cmux

**🟢 Active** — Ghostty-based macOS terminal built for AI coding agents — vertical tabs, notifications, programmability — to run and organize many agents at once. Huge traction, but ⚠️ non-standard license and macOS-only.

| | |
|---|---|
| Repo | https://github.com/manaflow-ai/cmux |
| Maker | Manaflow (manaflow-ai) |
| Sub-type | 2.1 Cockpits & multiplexers |
| License | NOASSERTION |
| Maturity | Prominent · ⭐26,225 · created 2026-01 · Swift |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Open source Ghostty-based macOS terminal with vertical tabs and notifications for AI coding agents."*

**Features**
- Ghostty-based macOS terminal purpose-built for coding agents
- Vertical tabs + notifications to run/organize many agent sessions
- Built for multitasking, organization, and programmability
- macOS only (Swift/native app)

**Choose it when** — You're on macOS and want a fast, native terminal designed around running and organizing many coding-agent sessions.

**Avoid when** — You're not on macOS, or you need clear reuse rights — the license is non-standard (NOASSERTION); check the repo's terms first.

**Related sections:** [§1](01-coding-agents.md)

📄 **Deep research:** [`research/orchestrators/cmux.md`](../research/orchestrators/cmux.md)

---

<a id="t3code"></a>
### T3 Code

**🟢 Active** — Open-source desktop/CLI cockpit that runs several coding agents (Claude Code, Codex, Cursor, OpenCode, Grok) in one workspace, bring-your-own-subscription. From Ping (Theo); early (v0.0.x).

| | |
|---|---|
| Repo | https://github.com/pingdotgg/t3code |
| Maker | Ping (pingdotgg) — Theo Browne |
| Sub-type | 2.1 Cockpits & multiplexers |
| License | MIT |
| Maturity | Prominent · ⭐19,444 · created 2026-02 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"The open-source control plane for coding agents."*

**Features**
- One GUI + CLI (npx t3@latest) over Claude Code, Codex, Cursor, OpenCode, Grok (more planned)
- Bring-your-own-subscription — no token reselling; switch models mid-thread
- One-button commit + PR with auto-generated title/body
- Cross-platform desktop app (macOS/Windows/Linux) + remote access; auto server updates
- Fully open-source (MIT) and forkable

**Choose it when** — You want one open-source cockpit to drive several coding-agent providers with your own subscriptions, in one workspace.

**Avoid when** — You need mature/stable software — it's pre-1.0 (v0.0.x, expect bugs, docs still forming) — or you only use one agent CLI directly.

**Related sections:** [§1](01-coding-agents.md) · [§12](12-model-routing.md)

📄 **Deep research:** [`research/orchestrators/t3code.md`](../research/orchestrators/t3code.md)

---

<a id="agentwrapper-ao"></a>
### Agent Orchestrator (AO)

**🟢 Active** — An agentic IDE that supervises parallel coding agents in isolated git worktrees, with automatic CI-fail / review / merge-conflict routing back to the right agent. Now under Untrivial.ai (ex-AgentWrapper).

| | |
|---|---|
| Repo | https://github.com/Untrivial-ai/agent-orchestrator |
| Maker | Untrivial.ai (formerly AgentWrapper, ex-Composio) |
| Sub-type | 2.1 Cockpits & multiplexers |
| License | Apache-2.0 |
| Maturity | Established · ⭐9,631 · created 2026-02 · Go |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Plan, run, and supervise coding agents from one place."*

**Features**
- Parallel agent sessions from one project; isolated git worktrees (no file/branch/PR mixing)
- Automatic CI-failure routing + review feedback loop + merge-conflict routing
- Live terminal control, PR-state awareness, in-app browser preview for UI work
- 23 worker adapters (Claude Code, Codex, Cursor, Aider, OpenCode, Copilot, Goose, Cline…)
- Desktop app (Electron + Go daemon); legacy CLI frozen at npm 0.10.0

**Choose it when** — You want Windows-friendly, Apache-licensed parallel coding with strong PR/CI/review/conflict loops and the widest agent support.

**Avoid when** — You need OS-level containment (worktree is not a sandbox), a peer-team/messaging UX, or zero telemetry without a rebuild.

📄 **Deep research:** [`research/orchestrators/agentwrapper-ao.md`](../research/orchestrators/agentwrapper-ao.md)

---

<a id="claude-squad"></a>
### Claude Squad

**🟢 Active** — Terminal cockpit (tmux + git worktrees) to run and supervise several coding agents — Claude Code, Codex, Aider — each isolated in its own workspace, reviewed before you ship.

| | |
|---|---|
| Repo | https://github.com/smtg-ai/claude-squad |
| Maker | smtg-ai |
| Sub-type | 2.1 Cockpits & multiplexers |
| License | AGPL-3.0 |
| Maturity | Established · ⭐8,338 · created 2025-03 · Go |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Manage multiple AI agents like Claude Code, Codex, and Aider."*

**Features**
- Supervise multiple terminal agents from one UI (tmux-based)
- Each task isolated in its own git workspace/branch
- Review an agent's work before applying/shipping changes
- Agents: Claude Code, Codex, Aider (any terminal agent)
- Local install via Homebrew / shell script; needs tmux + GitHub CLI

**Choose it when** — You live in the terminal and want a lightweight, local multiplexer to run several coding agents in parallel worktrees.

**Avoid when** — You want a graphical desktop cockpit, or AGPL-3.0's copyleft is a problem for your use.

**Related sections:** [§1](01-coding-agents.md)

📄 **Deep research:** [`research/orchestrators/claude-squad.md`](../research/orchestrators/claude-squad.md)

---

<a id="1code"></a>
### 1code

**⚰️ Defunct** — Orchestration layer / cockpit to run several coding agents (Claude Code, Codex) from one place. Notable (~5.6k★) but ⚰️ archived — read-only, no longer developed.

| | |
|---|---|
| Repo | https://github.com/21st-dev/1code |
| Maker | 21st.dev |
| Sub-type | 2.1 Cockpits & multiplexers |
| License | Apache-2.0 |
| Maturity | Established · ⭐5,610 · created 2026-01 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Orchestration layer for coding agents (Claude Code, Codex)."*

**Features**
- Single cockpit over multiple coding agents (Claude Code, Codex)
- Orchestration layer to launch/route work across agents
- TypeScript app; repo now archived (read-only)

**Choose it when** — Only to study the pattern or self-host the frozen code — it is archived.

**Avoid when** — New adoption — the repo is archived (no maintenance, no support). Use an active cockpit (T3 Code, Emdash, Claude Squad).

**Related sections:** [§1](01-coding-agents.md)

📄 **Deep research:** [`research/orchestrators/1code.md`](../research/orchestrators/1code.md)

---

<a id="emdash"></a>
### Emdash

**🟢 Active** — Open-source desktop cockpit that runs many coding agents in parallel across isolated git worktrees, with browser preview, diff/PR review, scheduled automation, and remote SSH exec.

| | |
|---|---|
| Repo | https://github.com/generalaction/emdash |
| Maker | General Action (YC W26) |
| Sub-type | 2.1 Cockpits & multiplexers |
| License | Apache-2.0 |
| Maturity | Established · ⭐5,442 · created 2025-08 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Open-source agentic development environment."*

**Features**
- Run 25+ agents (Claude Code, Codex, Cursor, Amp, Antigravity, …) in parallel
- Each agent isolated in its own git worktree/branch + terminal + conversation
- Built-in browser for app previews; integrated diff/PR review + CI monitoring
- Scheduled automation (recurring bug sweeps, release prep)
- Remote SSH execution on dev servers / cloud VMs; desktop app (mac/win/linux)

**Choose it when** — You want a graphical, open-source desktop cockpit for parallel agents with preview, review, and scheduling built in.

**Avoid when** — You want a minimal terminal tool (see Claude Squad) or must avoid a desktop-app dependency.

**Related sections:** [§1](01-coding-agents.md) · [§10](10-sandboxes.md)

📄 **Deep research:** [`research/orchestrators/emdash.md`](../research/orchestrators/emdash.md)

---

<a id="codexmonitor"></a>
### CodexMonitor

**🟢 Active** — App to watch and manage your Codex / coding-agent sessions — live status, activity, and notifications across runs. By Thomas Ricouard (Dimillian, of Ice Cubes).

| | |
|---|---|
| Repo | https://github.com/Dimillian/CodexMonitor |
| Maker | Thomas Ricouard (Dimillian) |
| Sub-type | 2.1 Cockpits & multiplexers |
| License | MIT |
| Maturity | Established · ⭐4,239 · created 2026-01 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"An app to monitor the (Codex) situation."*

**Features**
- Monitor multiple Codex / coding-agent sessions at a glance
- Live status, activity, and notifications for agent runs
- From Thomas Ricouard (Dimillian); TypeScript, MIT

**Choose it when** — You run agents (esp. Codex) and want a dedicated dashboard to watch their status/activity and get notified.

**Avoid when** — You want a full cockpit that also launches/routes work (T3 Code, Emdash) rather than a focused monitor.

**Related sections:** [§1](01-coding-agents.md)

📄 **Deep research:** [`research/orchestrators/codexmonitor.md`](../research/orchestrators/codexmonitor.md)

---

<a id="agent-of-empires"></a>
### Agent of Empires

**🟢 Active** — TUI + Web cockpit to run and manage many coding agents (Claude Code, OpenCode, Codex CLI, Gemini CLI, Copilot CLI, Factory Droid, Mistral Vibe, Pi.dev) — including from mobile.

| | |
|---|---|
| Repo | https://github.com/agent-of-empires/agent-of-empires |
| Maker | Agent of Empires |
| Sub-type | 2.1 Cockpits & multiplexers |
| License | MIT |
| Maturity | Established · ⭐3,099 · created 2026-01 · Rust |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Manage multiple Claude Code, OpenCode agents from either TUI or Web for easy access on mobile."*

**Features**
- Both a TUI and a Web UI over the same agents
- Mobile-friendly web access to running agents
- Broad agent support: Claude Code, OpenCode, Codex CLI, Gemini CLI, Copilot CLI, Factory Droid, Mistral Vibe, Pi.dev
- Rust; MIT-licensed

**Choose it when** — You want one cockpit (terminal or browser) over many coding agents, with mobile access to sessions.

**Avoid when** — You want a native desktop app (T3 Code/cmux) or a minimal single-agent workflow.

**Related sections:** [§1](01-coding-agents.md)

📄 **Deep research:** [`research/orchestrators/agent-of-empires.md`](../research/orchestrators/agent-of-empires.md)

---

<a id="agent-teams-ai"></a>
### Agent Teams AI

**🟢 Active** — A free desktop cockpit where agent teams message each other, review each other's work, and run on a live kanban with budgets and nested org structure.

| | |
|---|---|
| Repo | https://github.com/777genius/agent-teams-ai |
| Maker | 777genius |
| Sub-type | 2.1 Cockpits & multiplexers |
| License | AGPL-3.0 |
| Maturity | Established · ⭐1,947 · created 2026-02 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"You're the boss, agents are your team"*

**Features**
- Peer-to-peer agent messaging (DMs, shared tasks, @mentions) on a live 5-column kanban
- Hunk-level code review (accept/reject/comment) + agent-to-agent review workflow
- Budgets: token/cost tracking, monthly caps + 80/100% alerts, hard caps, auto-resume
- Autonomy levels (fully autonomous to per-action approval); nested departments/squads org map
- Built-in PTY terminal + code editor; MCP; 200+ models, 75+ providers; no cloud backend

**Choose it when** — Peer-team messaging, kanban, budgets, and org structure are the point, and AGPL is acceptable.

**Avoid when** — AGPL is a blocker, you need OS containment (worktree is not a sandbox), or you want a headless/CLI-first flow.

📄 **Deep research:** [`research/orchestrators/agent-teams-ai.md`](../research/orchestrators/agent-teams-ai.md)

---

<a id="gastown"></a>
### GasTown

**🟢 Active** — Steve Yegge's Beads-native multi-agent 'Dark Factory' — worker agents run in git-worktree hooks; a Refinery merge queue + 3-tier watchdog keep a terminal swarm running autonomously.

| | |
|---|---|
| Repo | https://github.com/gastownhall/gastown |
| Maker | Steve Yegge |
| Sub-type | 2.2 Autonomous swarms & SDLC harnesses |
| License | MIT |
| Maturity | Prominent · ⭐17,668 · created 2025-12 · Go |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"polecats never push directly to main"*

**Features**
- Polecats (worker agents) + Convoys (bundled beads) with autonomous stall/skip logic
- Refinery — Bors-style bisecting merge queue (batch/verify/merge/isolate failures)
- 3-tier Watchdog — Witness (per-rig), Deacon (cross-rig), Dogs (infra) with escalation
- Scheduler capacity governor; gt feed TUI, web dashboard, gt seance recovery
- Beads/Dolt work-truth ledger; Wasteland federation; OpenTelemetry; TOML Molecules

**Choose it when** — You need a genuinely large, autonomous terminal swarm on Linux/WSL where Beads-native work truth, a real merge queue, and watchdog recovery justify the operational weight.

**Avoid when** — Small repos, Windows-native (needs WSL), or you don't want Beads/Dolt coupling.

**Related sections:** [§4](04-memory.md)

📄 **Deep research:** [`research/orchestrators/gastown.md`](../research/orchestrators/gastown.md)

---

<a id="open-multi-agent"></a>
### Open Multi-Agent

**🟢 Active** — A TypeScript orchestration library where a coordinator plans a task DAG at runtime and runs it on any LLM, in your own environment — 'describe the goal, not the graph'.

| | |
|---|---|
| Repo | https://github.com/open-multi-agent/open-multi-agent |
| Maker | open-multi-agent |
| Sub-type | 2.2 Autonomous swarms & SDLC harnesses |
| License | MIT |
| Maturity | Established · ⭐6,792 · created 2026-03 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Describe the goal, not the graph"*

**Features**
- Runtime task DAG from a goal (runTeam); deterministic scheduler; inspectable graph
- Plan preview / approve / freeze / replay + multi-agent consensus verification
- Mix any model (cloud + local + Chinese providers) on one team; per-task routing
- Built-in default-deny tools + custom defineTool; MCP; token budgets; checkpoint/resume
- Local / offline / air-gapped with your own credentials; 3 runtime dependencies

**Choose it when** — You want a library-level, air-gappable orchestrator with runtime planning, multi-model teams, and replay/consensus, embedded in a Node app.

**Avoid when** — You want a UI/cockpit, a non-TS stack, or OS-level containment (shell/ACP tools run as host processes).

**Related sections:** [§7](07-agent-runtimes.md)

📄 **Deep research:** [`research/orchestrators/open-multi-agent.md`](../research/orchestrators/open-multi-agent.md)

---

<a id="fusion"></a>
### Fusion

**🧪 Preview** — 'Your Software Factory' — describe what you want and a team of AI agents plans, builds, reviews, and ships it across a 24/7 multi-node mesh with visual gates.

| | |
|---|---|
| Repo | https://github.com/Runfusion/Fusion |
| Maker | Runfusion |
| Sub-type | 2.2 Autonomous swarms & SDLC harnesses |
| License | MIT |
| Maturity | Established · ⭐1,135 · created 2026-04 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Your Software Factory"*

**Features**
- Missions hierarchy (Mission to Task) + autopilot + validation contracts
- Visual Workflow Editor + built-in workflows (Coding, Quick-fix, Review-heavy, Stepwise…)
- Gates/policy: oversight levels (off/observe/steer/autonomous), approval gates, quality gates
- 440+ agents across 16 prebuilt companies (Paperclip companies.sh); mailbox + chat rooms
- Command Center (11 analytics views); multi-node mesh; PostgreSQL; Desktop/Mobile/Web/CLI (fn)

**Choose it when** — You want to experiment with a broad, mobile-capable, multi-node software factory with rich missions and a strong observability Command Center, accepting preview-grade reliability.

**Avoid when** — You need established authority/safety guarantees (it relies on human oversight, not enforcement) or proven completion metrics.

📄 **Deep research:** [`research/orchestrators/fusion.md`](../research/orchestrators/fusion.md)

---

<a id="loki-mode"></a>
### Loki Mode

**🟢 Active** — 'The spec-driven autonomous builder with verified completion' — spec to deployed app with evidence receipts (facts vs AI assessments), 8+ quality gates, and drift detection.

| | |
|---|---|
| Repo | https://github.com/asklokesh/loki-mode |
| Maker | asklokesh |
| Sub-type | 2.2 Autonomous swarms & SDLC harnesses |
| License | BUSL-1.1 / NOASSERTION |
| Maturity | Established · ⭐1,046 · created 2025-12 · Shell |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"The spec-driven autonomous builder with verified completion"*

**Features**
- Evidence receipts (facts vs assessments) + loki proof; spec-locking + drift detection
- 8+ quality gates: static analysis, tests, blind 3-reviewer council, Devil's Advocate, mutation…
- 41 agent roles / 8 domains; parallel review council; loki grill pre-build interrogation
- 3-tier memory + ChromaDB; AI test-gen; multi-provider auto-failover + mid-flight model switch
- Generates Dockerfiles/CI/CD but never auto-deploys; MCP server (34 tools); enterprise (TLS/OIDC/RBAC)

**Choose it when** — You want spec-driven autonomous builds with rigorous, honest evidence receipts + drift/gates on Claude Code, and BUSL-1.1 is acceptable.

**Avoid when** — You need an OSI license, non-Claude parallelism, auto-deploy, or you'd over-trust the broad claims.

**Related sections:** [§9](09-proof-gates.md)

📄 **Deep research:** [`research/orchestrators/loki-mode.md`](../research/orchestrators/loki-mode.md)

---

<a id="bernstein"></a>
### Bernstein

**🟢 Active** — Audit-grade deterministic orchestration for 40+ CLI coding agents: a plain-Python scheduler (no LLM in the loop), signed lineage, byte-identical replay, HMAC audit chain, air-gap.

| | |
|---|---|
| Repo | https://github.com/sipyourdrink-ltd/bernstein |
| Maker | Sip Your Drink Ltd |
| Sub-type | 2.2 Autonomous swarms & SDLC harnesses |
| License | Apache-2.0 |
| Maturity | Emerging · ⭐931 · created 2026-03 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"The orchestrator your compliance team will sign off on"*

**Features**
- Deterministic scheduler + byte-identical replay (replay --verify names the first divergent step)
- Per-artifact Merkle lineage (HMAC-tagged) + RFC-2104 HMAC audit chain; signed agent cards
- Cost-aware scheduling (USD ceilings, hash-pinned price table); tournament runs
- 40+ adapters (Claude Code, Codex, Gemini, Cursor, Aider, Goose, OpenHands…) + generic --prompt
- Headless CI (JSON) mode; SPIFFE identity; air-gap install profile (deny outbound by default)

**Choose it when** — Audit-grade determinism, compliance, and air-gap are the priority (regulated/on-prem) and you drive CLI coding agents.

**Avoid when** — Single-agent/small work, non-coding tasks, you need vendor support, or you'd wrongly treat its receipts as proof of correctness (integrity is not correctness; verify the completion gate).

**Related sections:** [§9](09-proof-gates.md)

📄 **Deep research:** [`research/orchestrators/bernstein.md`](../research/orchestrators/bernstein.md)

---

<a id="tutti"></a>
### Tutti

**🟢 Active** — A typed, checkpointed workflow harness — 'Terraform-style agent operations for AI coding tools': intake, execute, review, gate, record, with a run ledger.

| | |
|---|---|
| Repo | https://github.com/nutthouse/tutti |
| Maker | nutthouse |
| Sub-type | 2.2 Autonomous swarms & SDLC harnesses |
| License | MIT |
| Maturity | Emerging · ⭐112 · created 2026-03 · Rust |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Terraform-style agent operations for AI coding tools"*

**Features**
- Typed compositional workflows (tt run/verify); artifact pipeline; checkpoints + deterministic recovery
- Agent management (spawn/terminate, git worktree isolation, diff/land/PR); schedules; hook chaining
- Gate stage — required checks, resolved review threads, approval state, cost/policy limits
- Observability (tt usage, watch mode) + factory-floor dashboard (:4040, SSE)
- Rust CLI (~25 cmds) + REST API/SSE; runtimes: Claude Code, Codex, Aider, OpenClaw

**Choose it when** — You want a Terraform-style, gated, resumable ops layer over multiple CLI agents with a real run ledger, and coordination (not model quality) is the bottleneck.

**Avoid when** — Single-agent/small work, non-Rust/tmux environments, or you need the full advertised surface today (implementation trails the docs).

📄 **Deep research:** [`research/orchestrators/tutti.md`](../research/orchestrators/tutti.md)

---

<a id="martinloop"></a>
### MartinLoop

**🟢 Active** — A governed-run layer — a Ralph loop with brakes — that gives AI coding agents budgets, stop conditions, rollback rules, and signed receipts: task contract, caps, verify, rollback.

| | |
|---|---|
| Repo | https://github.com/Keesan12/martin-loop |
| Maker | Keesan12 |
| Sub-type | 2.2 Autonomous swarms & SDLC harnesses |
| License | Apache-2.0 |
| Maturity | Preview · ⭐44 · created 2026-04 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Gives AI coding agents budgets, stop conditions, rollback rules, and receipts"*

**Features**
- Hard budget caps (USD/token/iteration) — stop the next attempt before a configured limit
- Verifier gates (--verify); policy enforcement (unsafe commands, risky paths, secret-like inputs)
- Rollback-aware rules (no silent unsafe changes); JSONL run records + evidence summaries
- Local HMAC-signed receipts (verified/tamper_detected/unsigned) + JSON/Markdown proof-cards
- 13-class failure taxonomy; MCP; agents: Claude CLI, Codex, Gemini, direct/OpenAI-compatible

**Choose it when** — You want to put brakes on autonomous Ralph-style loops with budget caps, verifier gates, rollback, and inspectable receipts — a lighter alternative to Bernstein.

**Avoid when** — You need independent (not local-HMAC) attestation, a non-Node stack, or audit-grade determinism.

**Related sections:** [§9](09-proof-gates.md)

📄 **Deep research:** [`research/orchestrators/martinloop.md`](../research/orchestrators/martinloop.md)

---

<a id="symphony"></a>
### Symphony

**🧪 Preview** — OpenAI's open-source spec (+ Elixir reference impl) for Codex orchestration that 'turns project work into isolated, autonomous implementation runs' driven off a Linear board.

| | |
|---|---|
| Repo | https://github.com/openai/symphony |
| Maker | OpenAI |
| Sub-type | 2.3 Issue/backlog dispatchers |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐26,753 · created 2026-02 · Elixir |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"turns project work into isolated, autonomous implementation runs"*

**Features**
- Spec-first: SPEC.md defines the contract; Elixir reference impl provided (any language can implement)
- Linear as state store — adapter fetches active/terminal issues + reconciles (no separate DB)
- Proof of work: CI status, PR review feedback, complexity analysis, walkthrough videos
- Continuous per-issue agents; human review; safer Codex defaults (sandbox approval, rule checking)

**Choose it when** — You already run Linear + Codex and want issue-driven autonomous runs with proof-of-work, in a trusted environment.

**Avoid when** — You don't use Linear/Codex, need a durable orchestration DB, or need production hardening (it's a preview/spec).

📄 **Deep research:** [`research/orchestrators/symphony.md`](../research/orchestrators/symphony.md)

---

<a id="sortie"></a>
### Sortie

**🟢 Active** — 'Turn tracker tickets into autonomous agent sessions. Agent-agnostic, tracker-agnostic. Run in parallel.' — a single-Go-binary orchestration daemon with retries + reconciliation.

| | |
|---|---|
| Repo | https://github.com/sortie-ai/sortie |
| Maker | Sortie AI |
| Sub-type | 2.3 Issue/backlog dispatchers |
| License | Apache-2.0 |
| Maturity | Emerging · ⭐127 · created 2026-03 · Go |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Turn tracker tickets into autonomous agent sessions."*

**Features**
- Parallel scheduling + isolated workspaces; the single authority for all scheduling decisions
- Persistent SQLite state + retry logic + state reconciliation with the tracker; workspace cleanup
- CI feedback + review comments routed back to agents; cost tracking; stall/timeout enforcement
- Tracker-agnostic (GitHub/Gitea/Linear/Jira) + agent-agnostic (Claude Code/Copilot/OpenCode/Codex/Kiro)
- Single Go binary; embedded web dashboard; optional SSH workers (multi-machine)

**Choose it when** — You want tracker-agnostic, parallel ticket-to-agent automation with retries/reconciliation and a light single-binary footprint (incl. Windows).

**Avoid when** — You need the sandbox provided (it expects external containment), a UI cockpit, or agent-quality improvement (it doesn't do that).

📄 **Deep research:** [`research/orchestrators/sortie.md`](../research/orchestrators/sortie.md)

---

<a id="paperclip"></a>
### Paperclip

**🟢 Active** — 'The app people use to manage AI agents for work' — an open-source company control plane (org charts, goals, budgets, approvals, audit). 'If OpenClaw is an employee, Paperclip is the company.'

| | |
|---|---|
| Repo | https://github.com/paperclipai/paperclip |
| Maker | Paperclip Labs |
| Sub-type | 2.4 Company/team control planes |
| License | MIT |
| Maturity | Prominent · ⭐78,839 · created 2026-03 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"The app people use to manage AI agents for work"*

**Features**
- Organizations: company-scoped everything; many companies per deployment; separate data/audit
- Budgets & cost control: token/cost tracking by company/agent/project/goal; hard stops pause agents
- Governance & approvals: board approval workflows, decision tracking, full audit logging
- Versioned config + rollback; goals, issues/comments, heartbeats; Clipmart company templates
- Node.js 20+ / embedded PostgreSQL (local) or external Postgres (prod); OpenTelemetry (opt-in)

**Choose it when** — The real problem is org-level governance — many agents, budgets, approvals, and audit across companies.

**Avoid when** — A single repo / small team (breadth is overkill), or you expect code review / merge gating (it explicitly doesn't do that).

📄 **Deep research:** [`research/orchestrators/paperclip.md`](../research/orchestrators/paperclip.md)

---

<a id="agentsmesh"></a>
### AgentsMesh

**🟢 Active** — Self-hosted 'agent workforce' control plane: run a hundred coding agents across your own machines and schedule, isolate, and steer them from one console. ⚠️ non-standard license.

| | |
|---|---|
| Repo | https://github.com/AgentsMesh/AgentsMesh |
| Maker | AgentsMesh |
| Sub-type | 2.4 Company/team control planes |
| License | NOASSERTION |
| Maturity | Established · ⭐2,322 · created 2026-02 · Go |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Run a hundred AI coding agents across your own machines — schedule, isolate, and steer them all from one console."*

**Features**
- Fleet-scale: run many coding agents across your own machines
- Schedule, isolate, and steer all agents from one console
- Self-hosted control plane (Go)
- ⚠️ license is non-standard (NOASSERTION) — check terms before reuse

**Choose it when** — You want to operate a fleet of coding agents across your own hardware from a single console.

**Avoid when** — You need a single-developer cockpit (T3 Code, Claude Squad), or you require clear OSI reuse rights (license is NOASSERTION).

**Related sections:** [§1](01-coding-agents.md) · [§10](10-sandboxes.md)

📄 **Deep research:** [`research/orchestrators/agentsmesh.md`](../research/orchestrators/agentsmesh.md)

---

_Part of [AI-Choices-Atlas](https://github.com/ZerephCo/AI-Choices-Atlas), stewarded by Zereph · content dedicated to the public domain under [CC0 1.0](../LICENSE) — reuse freely, no credit required._
