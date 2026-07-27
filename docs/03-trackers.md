<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 3. Work & task truth (trackers)

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *what work exists, and what's the source of truth for it?*

> **Bridge section** — this category's tools are carded elsewhere (no duplication).

The purpose-built AI-agent trackers (Beads, Taskmaster) are fully carded in §4.1 Project/task memory, where they double as an agent's project memory. General trackers (GitHub Issues, Linear, Jira, Gitea) are dispatcher backends in §2.3. Kept as a bridge to avoid duplication.

**Golden rule:** The tracker is the work truth; the agent is a worker against it, not the owner of it. Prefer a tracker with explicit dependencies (Beads' DAG) so agents pick genuinely-ready work, and one that round-trips through git so the backlog survives outside any single agent session.

## See also
- [Beads & Taskmaster — carded in §4.1 Project/task memory](04-memory.md)
- [Issue/backlog dispatchers (Sortie, Symphony) — §2.3](02-orchestrators.md)


---

_Part of [AI-Choices-Atlas](https://github.com/Khubaeb/AI-Choices-Atlas) by Khubaeb · licensed under [CC BY 4.0](../LICENSE) — reuse and adapt freely, with credit._
