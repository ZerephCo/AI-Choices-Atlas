---
name: "claude-mem"
slug: claude-mem
category: memory
subtype: "4.1 Project / task memory"
repo: https://github.com/thedotmack/claude-mem
site: https://docs.claude-mem.ai
maker: "thedotmack"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 91239
created: "2025-08"
language: JavaScript
maturity: Prominent
status: active
local: true
one_liner: "Persistent session-memory plugin — captures what an agent does, AI-compresses it into observations, and injects relevant context into future sessions."
features:
  - "5 lifecycle hooks (SessionStart/UserPromptSubmit/PostToolUse/Stop/compaction)"
  - "Hybrid relevance: 40% semantic (Chroma) + 30% recency + 20% file-path + 10% interaction"
  - "SQLite observations + Chroma vectors; local ONNX embeddings (all-MiniLM-L6-v2), no external API"
  - "Endless Mode (beta): Working Memory + Archive Memory extends session length"
  - "<private> tags exclude content; multi-agent (Claude Code, OpenClaw, Codex, Gemini, …)"
choose_when: "You want to give Claude Code (or similar) durable session memory with near-zero setup and local embeddings."
avoid_when: "You need canonical task tracking (Beads) or a shared org knowledge graph."
hands_on: docs-only
last_verified: "2026-08-19"
---
# claude-mem — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → project/task (**coding-session context** memory) |
| Repo / docs | https://github.com/thedotmack/claude-mem · docs.claude-mem.ai |
| Maker | **thedotmack** |
| License | Apache-2.0 / Apache-2.0 |
| ⭐ / created | **91,239** · 2025-08-31 (pushed 2026-07-19 — very active; grew ~46k→88k) |
| Authority | `suggestive` (injects context; does not own work truth) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
A background **persistent-memory plugin** for coding agents: captures everything the agent does during a session, **compresses it with AI** into structured "observations," and **injects relevant context** into future sessions. Primary target is Claude Code; also works with OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode.

## 2. How it works — 5 lifecycle hooks
- **SessionStart** — queries the DB and injects a compressed index of recent work into the context window.
- **UserPromptSubmit** — logs the session and stores your prompt.
- **PostToolUse** — after every tool call, sends the raw output to a background worker via a **non-blocking HTTP POST (~8ms avg)**; the worker compresses it into a structured observation using the **Claude Agent SDK**.
- **Stop** — generates a session-level summary on pause/idle.
- (+ compaction hook.)

## 3. Retrieval & injection
On SessionStart: query **SQLite** for observations from the last 7 days, ranked by a **hybrid relevance score**:
- **40%** semantic similarity (Chroma vector search) · **30%** recency · **20%** file-path matching · **10%** user-interaction patterns.
Top **50** observations → Claude Agent SDK compression prompt (extract only high-value info) → compressed context (**~800–1500 tokens**) injected into the system prompt.

## 4. Storage & embeddings
- **SQLite** — observations. **Chroma** — vector DB for semantic + keyword search across project history.
- **Local embeddings:** `all-MiniLM-L6-v2` via **ONNX** — **no external embedding API calls**.

## 5. Features
- Persistent memory + context injection across sessions.
- Local vector search (Chroma) + local ONNX embeddings.
- **Endless Mode (beta):** biomimetic memory — Working Memory (compressed ~500-token observations in context) + Archive Memory (full tool outputs preserved on disk for recall) → dramatically extends session length.
- **Privacy:** `<private>` tags exclude sensitive content from storage.
- Multi-agent: Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode.

## 6. Interfaces & install
Claude Code plugin (5 hooks). Install: `/plugin marketplace add thedotmack/claude-mem` + `/plugin install claude-mem`. **Only prereq: Node.js 18+** — everything else auto-installs.

## 7. Local/offline & dependencies
Storage + embeddings are fully local (SQLite + Chroma + ONNX). **Compression uses the Claude Agent SDK** (an LLM), so that step needs model access. No external embedding API.

## 8. Roadmap
- **Was:** created by **thedotmack** (Aug 2025) as a Claude Code persistent-memory plugin; grew fast (~46k → ~88k ⭐).
- **Now (2026):** ⭐87.9k; multi-agent support; **Endless Mode** biomimetic memory in beta; local ONNX embeddings.
- **Ahead:** Endless Mode GA; broader agent coverage.

## 9. What it is NOT / limitations
- Not a task tracker / work-truth store (session-context memory; suggestive).
- Not zero-LLM (compression uses the Claude Agent SDK → cost/latency per tool call).
- Not a cross-org knowledge base (per-project session history).
- Endless Mode still beta.

## 10. Positioning vs peers
- **claude-mem** — automatic, hook-driven **session-context** memory for coding agents; local vectors; near-zero setup.
- vs Beads (canonical task graph), Mem0 (general memory SDK), Cognee/Graphiti (knowledge graphs).

## 11. Hands-on
`docs-only` (2026-07-20). **TODO:** `/plugin install claude-mem` in Claude Code; inspect the hook worker, Chroma/SQLite schema, and the relevance scorer.

## 12. Sources
- https://github.com/thedotmack/claude-mem (README) · https://docs.claude-mem.ai/introduction
- https://www.datacamp.com/tutorial/claude-mem-guide

_Last updated: 2026-07-20 · Researcher: Claude_
