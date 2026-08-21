---
name: Sortie
slug: sortie
category: orchestrators
subtype: "2.3 Issue/backlog dispatchers"
repo: https://github.com/sortie-ai/sortie
site: https://docs.sortie-ai.com
maker: Sortie AI
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 127
created: "2026-03"
language: Go
maturity: Emerging
status: active
local: true
one_liner: "'Turn tracker tickets into autonomous agent sessions. Agent-agnostic, tracker-agnostic. Run in parallel.' — a single-Go-binary orchestration daemon with retries + reconciliation."
tagline_quote: "Turn tracker tickets into autonomous agent sessions."
features:
  - "Parallel scheduling + isolated workspaces; the single authority for all scheduling decisions"
  - "Persistent SQLite state + retry logic + state reconciliation with the tracker; workspace cleanup"
  - "CI feedback + review comments routed back to agents; cost tracking; stall/timeout enforcement"
  - "Tracker-agnostic (GitHub/Gitea/Linear/Jira) + agent-agnostic (Claude Code/Copilot/OpenCode/Codex/Kiro)"
  - "Single Go binary; embedded web dashboard; optional SSH workers (multi-machine)"
choose_when: "You want tracker-agnostic, parallel ticket-to-agent automation with retries/reconciliation and a light single-binary footprint (incl. Windows)."
avoid_when: "You need the sandbox provided (it expects external containment), a UI cockpit, or agent-quality improvement (it doesn't do that)."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Sortie — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Orchestrators → issue/backlog dispatcher (tracker-agnostic) |
| Repo / site | https://github.com/sortie-ai/sortie · docs.sortie-ai.com |
| Maker | **Sortie AI** |
| License | Apache-2.0 / Apache-2.0 |
| ⭐ / created | 127 · 2026-03 |
| Platforms | macOS · Linux · **Windows** · Web |
| Authority | orchestrator = single scheduling authority |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
An open-source **orchestration daemon** that turns issue-tracker tickets (GitHub/Gitea/Linear/Jira) into autonomous coding-agent sessions. Engineers manage at the ticket level; Sortie handles scheduling, retries, reconciliation, CI/review feedback, and cost.

## 2. Quotes (verbatim, from docs — attributed)
- Tagline: *"Turn tracker tickets into autonomous agent sessions. Agent-agnostic, tracker-agnostic. Run in parallel."*
- Persistence: *"SQLite for persistent state (retry queues, session metadata, run history)."*
- Authority: *"The orchestrator is the single authority for all scheduling decisions."*
- Assumption: assumes *"your coding agent already produces useful results"* (does not improve output).

## 3. Architecture
- **Single Go binary, zero deps**; **SQLite** persistence.
- **Adapter pattern:** trackers + coding agents integrated through adapter interfaces; agents via **stdio**.
- Config: `WORKFLOW.md` (tracker, agent, prompt templates).
- Embedded local **web dashboard** (running sessions, retry queues, token spend).
- Optional **SSH workers** to distribute runs across machines.

## 4. Features
Parallel scheduling · isolated workspaces · persistent state with **retry** · **state reconciliation** with tracker · CI feedback · review comments · cost tracking · stall detection · timeout enforcement · workspace cleanup.

## 5. Supported agents & trackers
- **Trackers:** GitHub Issues · Gitea Issues · Linear · Jira.
- **Agents:** Claude Code · GitHub Copilot CLI · OpenCode · Codex · Kiro.

## 6. ⚠️ Safety (docs + corpus)
- **Expects external sandbox/infrastructure** — the agent adapter interface is pluggable but "not inherently constrained."
- Corpus caveat: the **headless Claude path can bypass permissions**. Run agents inside your own containment.
- Assumes pre-validated agents with appropriate permissions + system prompts; does **not** improve agent quality or provide the agent.

## 7. Roadmap
- **Was:** built by Sortie AI (2026-03) as a tracker-agnostic autonomous-session daemon.
- **Now (2026):** ⭐111; Go binary; GitHub/Gitea/Linear/Jira; SSH workers; active.
- **Ahead:** project-board tracked; no published milestones.

## 8. What it is NOT / limitations
- Not an agent (doesn't provide or improve the coding agent).
- Not a sandbox (expects external containment).
- Small/young (⭐111); requires pre-validated agents + prompts.

## 9. Positioning
- **Sortie** — tracker-**agnostic**, agent-agnostic ticket→session dispatcher; single-binary + retries/reconciliation.
- vs Symphony (Linear+Codex spec, proof-of-work), Beads/GasTown (Beads-native), plain CI + a bot.

## 10. Hands-on
`docs-only` (2026-07-20). **TODO:** run the Go binary against a test GitHub repo; wire a `WORKFLOW.md`; observe ticket→session→retry→reconcile.

## 11. Sources
- https://github.com/sortie-ai/sortie (README) · docs.sortie-ai.com
- ReviewedResearch.md (facts: Apache-2.0, ⭐111; headless-perms caveat)

_Last updated: 2026-07-20 · Researcher: Claude_
