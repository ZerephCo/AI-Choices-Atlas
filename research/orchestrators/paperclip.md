---
name: Paperclip
slug: paperclip
category: orchestrators
subtype: "2.4 Company/team control planes"
repo: https://github.com/paperclipai/paperclip
site: https://paperclip.ing
maker: Paperclip Labs
license_claimed: MIT
license_detected: MIT
stars: 78839
created: "2026-03"
language: TypeScript
maturity: Prominent
status: active
local: partial
one_liner: "'The app people use to manage AI agents for work' — an open-source company control plane (org charts, goals, budgets, approvals, audit). 'If OpenClaw is an employee, Paperclip is the company.'"
tagline_quote: "The app people use to manage AI agents for work"
features:
  - "Organizations: company-scoped everything; many companies per deployment; separate data/audit"
  - "Budgets & cost control: token/cost tracking by company/agent/project/goal; hard stops pause agents"
  - "Governance & approvals: board approval workflows, decision tracking, full audit logging"
  - "Versioned config + rollback; goals, issues/comments, heartbeats; Clipmart company templates"
  - "Node.js 20+ / embedded PostgreSQL (local) or external Postgres (prod); OpenTelemetry (opt-in)"
choose_when: "The real problem is org-level governance — many agents, budgets, approvals, and audit across companies."
avoid_when: "A single repo / small team (breadth is overkill), or you expect code review / merge gating (it explicitly doesn't do that)."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Paperclip — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → company / team control plane |
| Repo / site | https://github.com/paperclipai/paperclip (branch **`master`**) · paperclip.ing |
| Maker | **Paperclip Labs, Inc** |
| License | MIT / MIT (© 2026 Paperclip Labs) |
| ⭐ / created | **78,839** · 2026-03 (a top-starred agent tool) |
| Stack | Node.js 20+ · pnpm 9.15+ · **embedded PostgreSQL** (local) or external Postgres (prod); local + auth modes |
| Authority | outer controller (company/task DB) — **not** code-review authority |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
An open-source **control plane for "autonomous AI companies"**: models a team of agents as a company with an org chart, roles, goals, budgets, and governance. Company-scoped — one deployment can run many companies with separate data + audit trails.

## 2. Quotes (verbatim, from the README — attributed)
- Tagline: *"Paperclip is the app people use to manage AI agents for work."*
- Framing: *"If OpenClaw is an employee, Paperclip is the company."*
- Budgets: *"Monthly budgets per agent. When they hit the limit, they stop."*
- Governance: *"Approval gates are enforced, config changes are revisioned, and bad changes can be rolled back safely."*
- **Not code review:** *"Paperclip orchestrates work, not pull requests. Bring your own review process."* (also *"No drag-and-drop pipelines."*)

## 3. Features
- **Organizations:** company-scoped everything; many companies per deployment; separate data/audit.
- **Budgets & cost control:** token/cost tracking by company/agent/project/goal/issue/provider/model; scoped policies with warning thresholds + **hard stops**; overspend **pauses agents and cancels queued work**.
- **Governance & approvals:** board approval workflows; execution policies with review/approval stages; decision tracking; agent pause/resume/terminate; **full audit logging**; versioned config + rollback — "nothing ships without your sign-off."
- Goals, issues/comments, heartbeats; **Clipmart** marketplace for portable company templates (in development, `paperclipai/companies`).

## 4. Interfaces & telemetry
Web control-plane app. **Telemetry:** anonymous usage telemetry ("No personal information, issue content, prompts, file paths, or secrets are ever collected"); **opt-in OpenTelemetry** auto-instrumentation (traces; `OTEL_EXPORTER_OTLP_ENDPOINT`).

## 5. Roadmap
- **Was:** built by **Paperclip Labs** (2026-03) as an open-source "operating system for autonomous companies."
- **Now (2026):** ⭐74k; Node/Postgres; company/budget/approval control plane.
- **Ahead:** **hosted cloud** (roadmap; not launched mid-2026); **Clipmart** portable-company marketplace (in development).

## 6. What it is NOT / limitations
- **Explicitly not a code-review tool** — "orchestrates work, not pull requests; bring your own review process."
- Broad surface (org OS) — overkill for a single repo/small team.
- Telemetry on by default (anonymous; documented).
- Its **company/task DB becomes a second source of truth** — keep it from duplicating an existing tracker.

## 7. Positioning
- **Paperclip** — org-level governance: many agents, budgets, approvals, audit across "companies."
- vs Agent Teams AI (nested orgs, lighter/desktop), GasTown (terminal swarm), a plain tracker + CI.

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** run locally (Node + embedded Postgres); create a company, set an agent budget hard-stop, test an approval gate.

## 9. Sources
- https://github.com/paperclipai/paperclip (README, doc/PRODUCT.md) · paperclip.ing
- ReviewedResearch.md (facts: MIT, ⭐74,229)

_Last updated: 2026-07-20 · Researcher: Claude_
