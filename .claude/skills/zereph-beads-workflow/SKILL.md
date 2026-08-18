---
name: zereph-beads-workflow
description: Use for every Beads operation in this Zereph repository. Load and enforce the canonical base Beads skill and Zereph workflow policy with Claude as the actual worker before creating, claiming, updating, commenting on, blocking, closing, reconciling, or structuring any bead or epic.
---

# Zereph Beads Workflow

Before performing any Beads operation in this repository:

1. Read `.agents/skills/beads/SKILL.md` completely.
2. Read `.agents/skills/zereph-beads-workflow/SKILL.md` completely.
3. Set the actual-worker identity to `Claude` for work performed in this
   session.
4. Run `bd prime`.
5. Follow both canonical skills for the entire operation.

For Claude's work:

- pass `--actor Claude` on every Beads write;
- assign active work to `Claude`;
- author analysis, progress, verification, and completion comments as `Claude`;
- never use `Codex` as actor or assignee unless Codex actually performed the
  recorded work; and
- attribute only Khubaeb's explicit directions to `Khubaeb`.

Do not duplicate or override their policy here. The files under
`.agents/skills/` are the shared source of truth for Codex and Claude.
