---
name: "SynaBun"
slug: synabun
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/danilokhury/Synabun
site: https://synabun.ai
maker: "danilokhury"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 70
created: "2026-02"
language: JavaScript
maturity: Preview
status: active
local: true
one_liner: "Local-first coding-agent memory (part of a vibe coding toolkit) — SQLite + embedded models, no external APIs, MCP + Claude Code hooks, 3D memory-graph viz."
features:
  - "Local-first: SQLite + embedded models; no external APIs/cloud/Docker; semantic vector search"
  - "MCP across Claude Code, Codex, Gemini, OpenCode; automated lifecycle hooks"
  - "Interactive 3D memory-graph visualization"
  - "Multi-project memory sharing with automatic context detection"
  - "File-change detection via hashing to flag outdated knowledge"
choose_when: "You want to experiment with a fully-local, no-API coding memory with a 3D graph viz and Claude Code hooks."
avoid_when: "You need production or a maintained, focused memory (Mem0, claude-mem, codebase-memory-mcp)."
hands_on: docs-only
last_verified: "2026-08-19"
---
# SynaBun — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → project/task + personal (coding-agent memory) |
| Repo / site | https://github.com/danilokhury/Synabun · synabun.ai |
| Maker | **danilokhury** (personal project) |
| License | Apache-2.0 / Apache-2.0 |
| ⭐ / created | 68 · 2026-02-12 (pushed 2026-05-15 — light cadence) |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
A **local-first** AI memory + augmentation system for coding assistants, part of a broader "**vibe coding toolkit**." Provides persistent, semantic memory across sessions for MCP-compatible tools; bundles extras (browser automation, social-media tools, AI image generation). Casual/personal in tone (⭐68).

## 2. Architecture
- **Local-first:** built-in vector DB using **SQLite + embedded models** — no external APIs, cloud, or Docker.
- Semantic vector search (by meaning, not keywords).
- Integrates via **lifecycle hooks/commands** alongside Claude Code for automatic capture/retrieval/augmentation.

## 3. Features
- Local-first, no-external-API semantic memory.
- **MCP** across Claude Code, Codex, Gemini, OpenCode, any MCP client.
- **Interactive 3D memory-graph visualization.**
- Multi-project memory sharing with automatic context detection.
- Automated lifecycle hooks for capture/retrieval.
- **File-change detection via hashing** to flag outdated knowledge.
- Broader toolkit: browser automation, social-media tools, AI image gen.

## 4. Local/offline & dependencies
Fully local (SQLite + embedded models); no external APIs required.

## 5. Roadmap
- **Was:** created by **danilokhury** (Feb 2026) as a personal "vibe coding toolkit" with AI memory + social/browser/image tools.
- **Now (2026):** ⭐68; local-first memory + 3D graph viz + MCP; last push May 2026 (light cadence).
- **Ahead:** hobby/personal roadmap; no formal plan.

## 6. What it is NOT / limitations
- Not a production/enterprise memory (small personal project, ⭐68, light cadence).
- Not a focused memory library (bundled with unrelated toolkit features).
- Unproven at scale.

## 7. Positioning
- **SynaBun** — fully-local, no-API coding memory with a fun 3D graph viz + Claude Code hooks; hobby-grade.
- vs claude-mem (mature session memory), codebase-memory-mcp (code structure), Mem0, memU.

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** install + Claude Code hook smoke; try the 3D memory graph.

## 9. Sources
- https://github.com/danilokhury/Synabun (README) · https://synabun.ai/

_Last updated: 2026-07-20 · Researcher: Claude_
