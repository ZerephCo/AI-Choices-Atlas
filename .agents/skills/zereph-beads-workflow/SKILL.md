---
name: zereph-beads-workflow
description: Use alongside the setup-managed Beads skill for every Beads operation in a Zereph repository. Enforce actual-worker assignment and attribution, truthful lifecycle status, live-state reconciliation, bounded epic scope, dependency sequencing, and concise Markdown-first progress comments after major work. Trigger when creating, claiming, updating, commenting on, blocking, closing, reconciling, or structuring any bead or epic in this repository.
---

# Zereph Beads Workflow

Use this repository-owned policy together with `../beads/SKILL.md`. Read the
base skill completely, then run `bd prime`. Do not modify the setup-managed
base skill; keep repository-specific policy here so `bd setup codex` remains
upgrade-safe.

## Start Work

1. Inspect the bead with `bd show <id>`.
2. Identify the actual worker: Codex, Claude, Khubaeb, or another named human.
3. Verify that the worker has no other `in_progress` bead. Use Python 3.12+
   with no third-party packages:
   `python scripts/Test-ZerephBeadsExecutionState.py --candidate-id <id> --worker <worker>`.
   On macOS or Linux, use `python3` when that is the interpreter name. The
   `.ps1` file is a Windows compatibility launcher; PowerShell 7 is not a
   cross-platform requirement.
4. Assign that worker and set `in_progress` before doing the work.

Use explicit identity instead of the repository owner's Git identity:

```bash
bd --actor Codex update <id> --assignee Codex --status in_progress
bd --actor Claude update <id> --assignee Claude --status in_progress
```

Use the command matching the agent that actually performs the work. Never copy
an identity from an example merely because it appears first. For human work,
use that human's agreed Beads identity.

Use `--claim` only when the resolved Beads actor already matches the actual
worker. Leave future planned beads unassigned until their work starts.

### One active bead per worker

- A worker may have only one `in_progress` bead at a time.
- Multiple `in_progress` beads are allowed only when different named workers are
  genuinely working in parallel; each must be assigned to its actual worker.
- A batch of related updates, reconciliation records, or cleanup items is not
  parallel work. Choose one control bead as `in_progress`; keep the others
  `open` or `blocked`, or reconcile and close a stale record directly when live
  evidence already proves its terminal state.
- Before every transition to `in_progress`, run the execution-state guard with
  the candidate ID and worker. Run it again without arguments during finish
  verification. Do not bypass a failure.

## Keep Status Truthful

| Situation | Status action |
|---|---|
| Planned, not started | Keep `open` and unassigned |
| Actively being worked | Assign the worker and set `in_progress` |
| Cannot proceed | Set `blocked` and document the exact blocker |
| Acceptance criteria satisfied | Add the completion comment, then close |

Do not close a bead because a report was written if its acceptance criteria or
required external state remain incomplete.

When a bead represents work in ClickUp, Drive, or another external system,
verify the live external state before changing its lifecycle status. If the
bead is stale, record the external ID or link and the evidence that reconciles
it; do not preserve a known contradiction merely for historical continuity.

For a blocked bead, name the exact missing decision, evidence, permission, or
external-state change that would unblock it. Do not use `blocked` as a holding
status for merely difficult, deferred, or lower-priority work.

## Attribute Comments Correctly

| Comment content | Actor |
|---|---|
| Explicit direction from Khubaeb | `Khubaeb` |
| Analysis, work, decisions, or verification performed by Codex | `Codex` |
| Analysis, work, decisions, or verification performed by Claude | `Claude` |
| Work performed by another human | That human's agreed Beads identity |

Examples:

```bash
bd --actor Khubaeb comment <id> --stdin
bd --actor Codex comment <id> --stdin
bd --actor Claude comment <id> --stdin
```

Record only directions the user actually gave. Never attribute agent wording,
reasoning, or work to the user. Never attribute one agent's work to another
agent.

## Comment After Major Work

Add a Markdown comment after every major task, including major progress within
a bead that remains open. Put the most information into structure and use the
least prose necessary:

- prefer tables for mappings, comparisons, results, decisions, and status;
- prefer bullets and checklists for actions, evidence, risks, and next steps;
- use a compact Mermaid diagram when relationships or sequence are materially
  clearer visually;
- use short prose only for context or rationale that structure cannot express
  clearly;
- include exact commands, IDs, counts, links, or evidence when useful.

Use this compact template and omit empty sections:

```markdown
## Summary
- Outcome

## Work performed
| Area | Result |
|---|---|
| ... | ... |

## How and why
- Method: ...
- Rationale: ...

## Verification
- [x] Check and evidence

## Decisions, risks, or limitations
- ...

## Next steps
1. ...
```

Add the comment as the actual worker. For example:

```bash
bd --actor Codex comment <id> --stdin
bd --actor Claude comment <id> --stdin
```

## Structure Epics

- Give every epic meaningful child beads.
- If work is atomic and needs no children, use a task instead of an epic.
- Add `blocks` dependencies where evidence, decisions, or prerequisites must
  precede later work.
- Keep an epic `open` while a child is the worker's active bead. Set the epic
  itself `in_progress` only while work is being performed directly at epic
  level and that worker has no active child or other bead.
- Close the epic only after required children and epic-level acceptance
  criteria are complete.
- Do not close incomplete children merely to make an epic closeable. If work is
  valid but no longer required for that epic's acceptance, separate it into an
  appropriately scoped top-level bead and preserve provenance through links,
  external references, dependencies, or a structured comment.
- Avoid forcing a relationship that Beads rejects as cyclic or structurally
  invalid. Record the truthful supported relationship and explain any
  provenance that cannot be represented natively.

## Finish Work

1. Verify acceptance criteria and external state in proportion to risk.
2. Add the structured worker-authored Markdown comment.
3. Close completed beads with an evidence-based reason; otherwise keep status
   accurate.
4. Run `bd lint` and inspect ready/blocked work.
5. Commit and push Git changes, then run `bd dolt push` and verify sync.
