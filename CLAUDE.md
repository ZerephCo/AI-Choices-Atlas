# Project Instructions for AI Agents

This file provides instructions and context for AI coding agents working on this project.

## Zereph Beads Policy

For every Beads operation in this repository, use the project skill at
`.claude/skills/zereph-beads-workflow/SKILL.md`. It loads the setup-managed
Beads guidance and the repository-owned Zereph lifecycle, attribution, epic,
dependency, reconciliation, and structured-comment policy from their canonical
files under `.agents/skills/`, while requiring Claude to record Claude's work
with actor and assignee `Claude`.

For Claude work, never use bare `bd update <id> --claim` in this repository:
the ambient Git identity belongs to the owner. Start active work explicitly
with `bd --actor Claude update <id> --assignee Claude --status in_progress`,
and pass `--actor Claude` on every other Beads write performed by Claude.
Before that transition, run
`python scripts/Test-ZerephBeadsExecutionState.py --candidate-id <id> --worker Claude`
(use `python3` on macOS/Linux when required by the environment);
Claude may have only one `in_progress` bead at a time.

<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:ccf33ec3 -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

**Architecture in one line:** issues live in a local Dolt DB; sync uses `refs/dolt/data` on your git remote; `.beads/issues.jsonl` is a passive export. See https://github.com/gastownhall/beads/blob/main/docs/SYNC_CONCEPTS.md for details and anti-patterns.

## Session Completion

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd dolt push
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
<!-- END BEADS INTEGRATION -->


## Build & Test

_Add your build and test commands here_

```bash
# Example:
# npm install
# npm test
```

## Architecture Overview

_Add a brief overview of your project architecture_

## Conventions & Patterns

_Add your project-specific conventions here_
