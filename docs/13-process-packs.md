<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 13. Process · spec · skill packs

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *what disciplined workflow do you drop on top of an agent?*

**Golden rule:** Process packs constrain how, not what runs — they're prompts/skills/specs layered on a coding host (§1) or loop (§5), not runtimes themselves. Spec-driven (Spec Kit/OpenSpec) front-loads alignment; skills (Superpowers/anthropics-skills) add reusable capability with progressive disclosure. Multi-agent workflow frameworks (MBA) wrap a task database (§3 Beads) with a three-responsibility discipline and a user-authority gate. Star counts here are exceptionally high — treat them as popularity, not a quality verdict (the atlas rates attributes, not winners).

## Sub-types
- **13.1 Spec-driven dev (SDD) kits** — executable specs → plan → tasks → implement
- **13.2 Agile method frameworks** — role personas + phased agile flow
- **13.3 Agent skills frameworks / packs** — reusable, composable skills
- **13.4 Multi-agent workflow frameworks** — opposed-hat coordination discipline (Orchestrator / Doer / Auditor) over a task DB

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [Spec Kit](#spec-kit) | 13.1 spec-driven development (SDD) kit | MIT | 122,653 | Prominent | 🟢 Active | ✅ | docs-only | GitHub's spec-driven development toolkit — the specify CLI + /specify → /plan → /tasks → /implement flow; multi-agent (Claude Code, Copilot, Cursor, Gemini). MIT. |
| [OpenSpec](#openspec) | 13.1 spec-driven development (SDD) kit | MIT | 61,722 | Prominent | 🟢 Active | ✅ | docs-only | Spec-driven development for AI coding assistants — proposal → spec → implement, assistant-agnostic, with a spec archive. MIT. |
| [BMAD-METHOD](#bmad-method) | 13.2 agile method framework (agent personas) | NOASSERTION | 50,858 | Prominent | 🟢 Active | ✅ | docs-only | Breakthrough Method for Agile AI-Driven Development — agent personas (Analyst/PM/Architect/SM/Dev/QA) plus a two-phase agile flow. License NOASSERTION (verify). |
| [Agent Skills (Addy Osmani)](#agent-skills) | 13.3 Agent skills frameworks / packs | MIT | 80,373 | Prominent | 🟢 Active | ✅ | docs-only | 24 production-grade, lifecycle engineering skills (Define → Plan → Build → Verify → Review → Ship) for AI coding agents — slash commands, specialist personas, and evidence-required checklists. By Addy Osmani. |
| [anthropics/skills](#anthropics-skills) | 13.3 agent skills pack (official reference) | none | 162,901 | Prominent | 🟢 Active | ✅ | docs-only | Anthropic's official Agent Skills — SKILL.md skills incl. document skills (pdf/docx/xlsx/pptx) with progressive disclosure. License not surfaced by GitHub (verify). |
| [Superpowers](#superpowers) | 13.3 agentic skills framework + methodology | MIT | 258,035 | Prominent | 🟢 Active | ✅ | docs-only | An agentic skills framework + methodology for Claude Code — composable skills plus a disciplined brainstorm → plan → TDD → implement flow. MIT (star count exceptionally high). |
| [Multiple Beaded Agents (MBA)](#multiple-beaded-agents) | 13.4 multi-agent workflow framework | MIT | 0 | Preview | 🟢 Active | ✅ | docs-only | A thin coordination layer over Beads — opposed-hat Orchestrator/Doer/Auditor in separate sessions, converging on a verified fix or accepted proof. MIT. (The workflow this atlas's own repo uses.) |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [Spec Kit](#spec-kit) | You want structured, spec-first development that works across agents. | Lightweight prompt flows or tiny tasks where spec-first is overhead. |
| [OpenSpec](#openspec) | You want proposal-first, aligned spec workflows across assistants. | Tiny tasks where spec-first is overhead. |
| [BMAD-METHOD](#bmad-method) | You want a structured agile method with role personas for larger projects. | Small tasks (heavier ceremony); verify the NOASSERTION license before reuse. |
| [Agent Skills (Addy Osmani)](#agent-skills) | You want a broad, disciplined skills pack that pushes agents toward senior-engineer practices across the whole dev lifecycle. | You want a runtime/agent itself (this is skill content layered on a host, §1) or a narrower spec-only kit (§13.1). |
| [anthropics/skills](#anthropics-skills) | You want the reference for authoring Agent Skills plus ready-made document skills. | You need a clear redistribution license (not surfaced by GitHub — verify first). |
| [Superpowers](#superpowers) | You want a battle-tested methodology plus skills for Claude Code out of the box. | You are not on Claude Code (Claude-Code-centric). |
| [Multiple Beaded Agents (MBA)](#multiple-beaded-agents) | You want opposed-hat Orchestrator/Doer/Auditor discipline over a Beads task DB. | You don't use Beads (§3) or need a turnkey runtime (alpha 0.1.0.dev0, no public release). |

## Tools

<a id="spec-kit"></a>
### Spec Kit

**🟢 Active** — GitHub's spec-driven development toolkit — the specify CLI + /specify → /plan → /tasks → /implement flow; multi-agent (Claude Code, Copilot, Cursor, Gemini). MIT.

| | |
|---|---|
| Repo | https://github.com/github/spec-kit |
| Maker | GitHub |
| Sub-type | 13.1 spec-driven development (SDD) kit |
| License | MIT |
| Maturity | Prominent · ⭐122,653 · created 2025-08 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Toolkit to help you get started with Spec-Driven Development"*

**Features**
- specify CLI scaffolds the workflow
- phases: /specify → /plan → /tasks → /implement slash-commands
- constitution (project principles) constrains generation
- multi-agent: Claude Code, Copilot, Cursor, Gemini CLI

**Choose it when** — You want structured, spec-first development that works across agents.

**Avoid when** — Lightweight prompt flows or tiny tasks where spec-first is overhead.

**Related sections:** [§5](05-loop-factories.md) · [§1](01-coding-agents.md)

📄 **Deep research:** [`research/process-packs/spec-kit.md`](../research/process-packs/spec-kit.md)

---

<a id="openspec"></a>
### OpenSpec

**🟢 Active** — Spec-driven development for AI coding assistants — proposal → spec → implement, assistant-agnostic, with a spec archive. MIT.

| | |
|---|---|
| Repo | https://github.com/Fission-AI/OpenSpec |
| Maker | Fission AI |
| Sub-type | 13.1 spec-driven development (SDD) kit |
| License | MIT |
| Maturity | Prominent · ⭐61,722 · created 2025-08 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Spec-driven development (SDD) for AI coding assistants"*

**Features**
- change proposals → specs → implementation flow
- spec archive / versioning (agreed truth persists)
- assistant-agnostic; CLI

**Choose it when** — You want proposal-first, aligned spec workflows across assistants.

**Avoid when** — Tiny tasks where spec-first is overhead.

**Related sections:** [§5](05-loop-factories.md) · [§1](01-coding-agents.md)

📄 **Deep research:** [`research/process-packs/openspec.md`](../research/process-packs/openspec.md)

---

<a id="bmad-method"></a>
### BMAD-METHOD

**🟢 Active** — Breakthrough Method for Agile AI-Driven Development — agent personas (Analyst/PM/Architect/SM/Dev/QA) plus a two-phase agile flow. License NOASSERTION (verify).

| | |
|---|---|
| Repo | https://github.com/bmad-code-org/BMAD-METHOD |
| Maker | BMAD Code |
| Sub-type | 13.2 agile method framework (agent personas) |
| License | NOASSERTION |
| Maturity | Prominent · ⭐50,858 · created 2025-04 · JavaScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Breakthrough Method for Agile Ai Driven Development"*

**Features**
- agent personas for agile roles (Analyst/PM/Architect/SM/Dev/QA)
- two-phase: agentic planning (PRD + architecture) → context-engineered dev
- story files carry full context to reduce context loss
- expansion packs (beyond software); works across agents

**Choose it when** — You want a structured agile method with role personas for larger projects.

**Avoid when** — Small tasks (heavier ceremony); verify the NOASSERTION license before reuse.

**Related sections:** [§5](05-loop-factories.md)

📄 **Deep research:** [`research/process-packs/bmad-method.md`](../research/process-packs/bmad-method.md)

---

<a id="agent-skills"></a>
### Agent Skills (Addy Osmani)

**🟢 Active** — 24 production-grade, lifecycle engineering skills (Define → Plan → Build → Verify → Review → Ship) for AI coding agents — slash commands, specialist personas, and evidence-required checklists. By Addy Osmani.

| | |
|---|---|
| Repo | https://github.com/addyosmani/agent-skills |
| Maker | Addy Osmani |
| Sub-type | 13.3 Agent skills frameworks / packs |
| License | MIT |
| Maturity | Prominent · ⭐80,373 · created 2026-02 · JavaScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Production-grade engineering skills for AI coding agents."*

**Features**
- 24 skills (23 domain + 1 meta) across Define → Plan → Build → Verify → Review → Ship
- 8 slash commands (/spec, /plan, /build, /test, /review, /webperf, /code-simplify, /ship)
- /build auto mode with human verification gates; 4 specialist personas (code-reviewer, test-engineer, security-auditor, web-performance-auditor)
- 7 reference checklists (testing, security, performance, accessibility, observability, …)
- Anti-rationalization tables + evidence requirements built into each skill
- Works with Claude Code, Cursor, Cline, Copilot, Codex, Gemini CLI, Antigravity, Windsurf, OpenCode, Kiro — any system-prompt agent

**Choose it when** — You want a broad, disciplined skills pack that pushes agents toward senior-engineer practices across the whole dev lifecycle.

**Avoid when** — You want a runtime/agent itself (this is skill content layered on a host, §1) or a narrower spec-only kit (§13.1).

**Related sections:** [§1](01-coding-agents.md) · [§5](05-loop-factories.md)

📄 **Deep research:** [`research/process-packs/agent-skills.md`](../research/process-packs/agent-skills.md)

---

<a id="anthropics-skills"></a>
### anthropics/skills

**🟢 Active** — Anthropic's official Agent Skills — SKILL.md skills incl. document skills (pdf/docx/xlsx/pptx) with progressive disclosure. License not surfaced by GitHub (verify).

| | |
|---|---|
| Repo | https://github.com/anthropics/skills |
| Maker | Anthropic |
| Sub-type | 13.3 agent skills pack (official reference) |
| License | none |
| Maturity | Prominent · ⭐162,901 · created 2025-09 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Public repository for Agent Skills"*

**Features**
- SKILL.md format (name/description + instructions + optional scripts)
- progressive disclosure — a skill loads only when relevant (token-efficient)
- document skills (pdf, docx, xlsx, pptx) used in Claude products
- portable across Claude Code / API / apps

**Choose it when** — You want the reference for authoring Agent Skills plus ready-made document skills.

**Avoid when** — You need a clear redistribution license (not surfaced by GitHub — verify first).

**Related sections:** [§1](01-coding-agents.md)

📄 **Deep research:** [`research/process-packs/anthropics-skills.md`](../research/process-packs/anthropics-skills.md)

---

<a id="superpowers"></a>
### Superpowers

**🟢 Active** — An agentic skills framework + methodology for Claude Code — composable skills plus a disciplined brainstorm → plan → TDD → implement flow. MIT (star count exceptionally high).

| | |
|---|---|
| Repo | https://github.com/obra/superpowers |
| Maker | Jesse Vincent (obra) |
| Sub-type | 13.3 agentic skills framework + methodology |
| License | MIT |
| Maturity | Prominent · ⭐258,035 · created 2025-10 · Shell |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"An agentic skills framework & software development methodology that works"*

**Features**
- composable skills library for Claude Code
- opinionated methodology (brainstorm → plan → TDD → implement)
- skills for research / planning / debugging
- installed as a Claude Code plugin

**Choose it when** — You want a battle-tested methodology plus skills for Claude Code out of the box.

**Avoid when** — You are not on Claude Code (Claude-Code-centric).

📄 **Deep research:** [`research/process-packs/superpowers.md`](../research/process-packs/superpowers.md)

---

<a id="multiple-beaded-agents"></a>
### Multiple Beaded Agents (MBA)

**🟢 Active** — A thin coordination layer over Beads — opposed-hat Orchestrator/Doer/Auditor in separate sessions, converging on a verified fix or accepted proof. MIT. (The workflow this atlas's own repo uses.)

| | |
|---|---|
| Repo | https://github.com/Khubaeb/MultipleBeadedAgents |
| Maker | Khubaeb |
| Sub-type | 13.4 multi-agent workflow framework |
| License | MIT |
| Maturity | Preview · ⭐0 · created 2026 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"A lightweight system that pilots AI roles/teams through Beads-backed work"*

**Features**
- three-only responsibility model — Orchestrator / Doer / Auditor
- Beads-as-record; Doer and Auditor run in separate sessions
- convergence requires a verified fix or accepted proof, not bare agreement
- user-authority gate (Charter §11) pauses for explicit user decisions
- mba init / status / upgrade / remove lifecycle; instruction-driven, not a daemon

**Choose it when** — You want opposed-hat Orchestrator/Doer/Auditor discipline over a Beads task DB.

**Avoid when** — You don't use Beads (§3) or need a turnkey runtime (alpha 0.1.0.dev0, no public release).

**Related sections:** [§3](03-trackers.md) · [§1](01-coding-agents.md) · [§5](05-loop-factories.md)

📄 **Deep research:** [`research/process-packs/multiple-beaded-agents.md`](../research/process-packs/multiple-beaded-agents.md)

---

_Part of [AI-Choices-Atlas](https://github.com/ZerephCo/AI-Choices-Atlas), stewarded by Zereph · content dedicated to the public domain under [CC0 1.0](../LICENSE) — reuse freely, no credit required._
