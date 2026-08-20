<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 4. Memory

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *what should an agent remember, and who owns that memory?*

**Golden rule:** Memory is suggestive, never canonical. It may surface context but must never close a task or certify readiness. Required controls for any writable memory: provenance, writer ACL, TTL/invalidation, delete/export, PII policy, tenant isolation, poisoning tests.

## Sub-types
- **4.1 Project / task memory** — one repo/project/task — work truth, decisions, context for this codebase
- **4.2 Personal memory** — one individual, across projects — preferences, history, cross-tool recall
- **4.3 Organizational / semantic memory** — a team/org — shared knowledge, cited facts, temporal truth
- **4.4 Memory security & governance** — cross-cutting — provenance, poisoning defense, deletion/export

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [claude-mem](#claude-mem) | 4.1 Project / task memory | Apache-2.0 | 91,239 | Prominent | 🟢 Active | ✅ | docs-only | Persistent session-memory plugin — captures what an agent does, AI-compresses it into observations, and injects relevant context into future sessions. |
| [codegraph](#codegraph) | 4.1 Project / task memory | MIT | 67,073 | Prominent | 🟢 Active | ✅ | docs-only | Pre-indexed code knowledge graph served to agents via MCP — auto-syncs on code changes; fewer tokens, fewer tool calls, 100% local. |
| [MemPalace](#mempalace) | 4.1 Project / task memory | MIT | 58,463 | Prominent | 🟢 Active | ✅ | docs-only | Local memory-palace system (method of loci) — verbatim storage in wings/rooms/closets/drawers, a symbolic AAAK index (~170-token startup), temporal KG; fully offline. |
| [codebase-memory-mcp](#codebase-memory-mcp) | 4.1 Project / task memory | MIT | 39,548 | Prominent | 🟢 Active | ✅ | docs-only | Code-intelligence MCP server — indexes a codebase into a persistent knowledge graph (functions/classes/call-chains); 158 languages, sub-ms, local, no keys. |
| [Taskmaster](#taskmaster) | 4.1 Project / task memory | MIT + Commons Clause / NOASSERTION | 28,001 | Prominent | 🟢 Active | 🟡 partial | docs-only | AI-powered PRD-driven task manager — decomposes a requirements doc into a dependency-aware task list you drive from your editor (Cursor/Claude Code). |
| [Beads](#beads) | 4.1 Project / task memory | MIT | 26,445 | Prominent | 🟢 Active | ✅ | run | A Dolt-backed distributed graph issue tracker giving coding agents persistent, dependency-aware task memory — a memory upgrade for your coding agent. |
| [magic-context](#magic-context) | 4.1 Project / task memory | MIT | 1,799 | Established | 🟢 Active | ✅ | docs-only | The hippocampus for coding agents (CortexKit) — self-managing session memory with no compaction pauses and no forgetting across restarts. |
| [Roo Code Memory Bank](#roo-code-memory-bank) | 4.1 Project / task memory | Apache-2.0 | 1,678 | Established | ⚠️ Caution | ✅ | docs-only | Markdown memory bank for Roo Code (VS Code) — structured .md files that keep project context across sessions; no DB, convention-driven. |
| [Mem0](#mem0) | 4.2 Personal memory | Apache-2.0 | 63,603 | Prominent | 🟢 Active | 🟡 partial | inspected | Universal memory layer giving agents user/session/agent-level recall + personalization; add-only fact extraction with multi-signal retrieval. |
| [Supermemory](#supermemory) | 4.2 Personal memory | MIT | 28,957 | Prominent | 🟢 Active | ✅ | docs-only | The Memory API for the AI era — a fast, scalable memory+context engine + app (RAG + memory + profiles + connectors), runnable fully local/air-gapped. |
| [Memori](#memori) | 4.2 Personal memory | open-source (claimed) / NOASSERTION | 16,125 | Prominent | 🟢 Active | 🟡 partial | docs-only | SQL-native memory engine — persistent agent memory in standard SQL (SQLite/Postgres/MySQL), no vector DB, portable and queryable. |
| [OpenMemory](#openmemory) | 4.2 Personal memory | Apache-2.0 | 4,449 | Established | 🟢 Active | ✅ | docs-only | Cognitive memory engine for LLMs — local, self-hosted; hierarchical decomposition + temporal awareness; native MCP; migrates from Mem0/Zep/Supermemory. |
| [Cognee](#cognee) | 4.3 Organizational / semantic memory | Apache-2.0 | 30,118 | Prominent | 🟢 Active | ✅ | docs-only | Open-source graph-native memory platform — an ECL (Extract→Cognify→Load) pipeline that turns data into a self-improving knowledge graph + vectors. |
| [Graphiti](#graphiti) | 4.3 Organizational / semantic memory | Apache-2.0 | 30,090 | Prominent | 🟢 Active | ☁️ hosted | docs-only | Framework for temporal knowledge graphs for agents — tracks when facts became and ceased to be true, with hybrid retrieval and full provenance. |
| [GBrain](#gbrain) | 4.3 Organizational / semantic memory | MIT | 28,743 | Prominent | 🟢 Active | 🟡 partial | docs-only | Self-hosted institutional memory — a git-versioned markdown brain repo + Postgres/pgvector index with a self-wiring typed-edge graph and cited answers. |
| [memU](#memu) | 4.3 Organizational / semantic memory | NOASSERTION | 14,322 | Prominent | 🟢 Active | 🟡 partial | docs-only | Cross-agent personal memory for 24/7 proactive agents — a self-organizing markdown file system with intent capture and ~10x token reduction; embeddings-only. |
| [semble](#semble) | 4.3 Organizational / semantic memory | MIT | 5,906 | Established | 🟢 Active | ✅ | docs-only | CPU-only code search for agents — static Model2Vec embeddings + BM25 + RRF; ~98% fewer tokens than grep+read; MCP; no GPU/keys. |
| [ByteRover CLI (formerly Cipher)](#cipher) | 4.3 Organizational / semantic memory | Elastic-2.0 / NOASSERTION | 4,942 | Established | 🟢 Active | 🟡 partial | docs-only | Memory layer for coding agents, formerly Cipher — rename to ByteRover CLI now complete: an interactive REPL CLI with dual System-1/System-2 memory, cross-IDE via MCP, team-shareable. Elastic 2.0. |
| [Zep](#zep) | 4.3 Organizational / semantic memory | Apache-2.0 | 4,851 | Established | ⚠️ Caution | ☁️ hosted | docs-only | Enterprise agent-memory platform — temporal knowledge-graph memory (built on Graphiti) with compliance; the managed counterpart to OSS Graphiti. |
| [Letta](#letta) | 4.3 Organizational / semantic memory | Apache-2.0 | 3,055 | Established | 🟢 Active | ✅ | docs-only | Framework for stateful agents with persistent, self-improving memory (editable memory blocks) plus background sleep-time compute; formerly MemGPT. |
| [LangMem](#langmem) | 4.3 Organizational / semantic memory | MIT | 1,619 | Established | 🟢 Active | ☁️ hosted | docs-only | LangChain's SDK for agent long-term memory — semantic, episodic, and procedural memory over LangGraph's store, with prompt optimization. |
| [MemoryOS](#memoryos) | 4.3 Organizational / semantic memory | Apache-2.0 | 1,556 | Established | 🟢 Active | 🟡 partial | docs-only | Academic memory operating system for personalized agents — OS-inspired 3-tier hierarchy (short/mid/long-term) with FIFO + paging updates. EMNLP 2025 Oral. |
| [A-MEM](#a-mem) | 4.3 Organizational / semantic memory | MIT | 1,151 | Established | ⚠️ Caution | 🟡 partial | docs-only | Zettelkasten-inspired agentic memory — note-based memory that dynamically links notes and evolves older ones as new memories arrive. |
| [Redis Agent Memory Server](#redis-agent-memory-server) | 4.3 Organizational / semantic memory | Redis Source Available (RSALv2/SSPLv1) / NOASSERTION | 307 | Emerging | 🟢 Active | 🟡 partial | docs-only | Official Redis reference agent-memory server — two-tier working + long-term memory, REST + MCP, Redis-backed semantic search, auto extract/dedup/forget. |
| [SynaBun](#synabun) | 4.3 Organizational / semantic memory | Apache-2.0 | 70 | Preview | 🟢 Active | ✅ | docs-only | Local-first coding-agent memory (part of a vibe coding toolkit) — SQLite + embedded models, no external APIs, MCP + Claude Code hooks, 3D memory-graph viz. |
| [agentmemory](#agentmemory) | 4.3 Organizational / semantic memory | MIT (PyPI-era, unverifiable) / none | — | Defunct | ⚰️ Defunct | 🟡 partial | docs-only | Early (2023) easy agent-memory package (ChromaDB/Postgres) by Moon — now defunct on GitHub; PyPI frozen at v0.4.8 (Oct 2023). |
| [OWASP Agent Memory Guard](#owasp-agent-memory-guard) | 4.4 Memory security & governance | Apache-2.0 | 140 | Emerging | 🟢 Active | ✅ | docs-only | OWASP reference runtime defense for memory poisoning (ASI06) — a guard layer between agent and memory store, screening every read/write via detectors + YAML policy. |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [claude-mem](#claude-mem) | You want to give Claude Code (or similar) durable session memory with near-zero setup and local embeddings. | You need canonical task tracking (Beads) or a shared org knowledge graph. |
| [codegraph](#codegraph) | You want to give agents fast, local, deterministic codebase understanding that cuts tokens + tool-calls. | You need conversation memory (claude-mem/magic-context) or a monorepo's index is too large to keep hot. |
| [MemPalace](#mempalace) | You want local, offline, verbatim long-term memory with tiny startup cost, temporal KG, and multi-agent diaries via MCP. | You want extraction/summarized facts (Mem0) or a managed cloud service. |
| [codebase-memory-mcp](#codebase-memory-mcp) | You want to give coding agents fast, local, token-cheap understanding of codebase structure (call graphs, routes) with zero setup/keys. | You need conversation/session memory (claude-mem) or a task graph (Beads) — this indexes code, not chats. |
| [Taskmaster](#taskmaster) | You want PRD-first planning where an AI decomposes requirements into tracked tasks inside your editor. | You need a durable multi-agent graph DB with git sync (Beads), fully offline/no-LLM operation, or the right to resell/host it (Commons Clause). |
| [Beads](#beads) | You want canonical, dependency-aware task/work memory for one or many coding agents, with git-backed sync and offline operation. | You only need semantic recall (use Mem0/Graphiti) — Beads owns work truth, not general knowledge. |
| [magic-context](#magic-context) | You want compaction-free, self-managing long-session memory ('one session for life') on OpenCode/Pi. | Your harness isn't supported yet, or you need codebase structure (codegraph) rather than session memory. |
| [Roo Code Memory Bank](#roo-code-memory-bank) | You specifically use Roo Code and want the simplest markdown-file project memory. | You're on a non-Roo stack — prefer the successor RooFlow, a durable store (Beads), or plugin memory (claude-mem). |
| [Mem0](#mem0) | You want personal/assistant recall across sessions with minimal setup (pip install mem0ai + a key). | You need fully offline operation, or would conflate its memory with work truth. |
| [Supermemory](#supermemory) | You want a turnkey memory API/app with personal-data connectors, unified RAG+memory, and optional air-gapped self-host. | You only need a tiny embeddable lib, or want a temporal graph (Zep/Graphiti) or SQL-native store (Memori). |
| [Memori](#memori) | You want to store memory in the SQL database you already run (portability, queryability, cost) with structured recall. | You need strong semantic-similarity/graph retrieval, or a clean OSS license today (NOASSERTION). |
| [OpenMemory](#openmemory) | You want a local, MCP-native cognitive memory with hierarchical + temporal structure, especially to migrate off Mem0/Zep/Supermemory. | You want the simplest vector SDK (Mem0) or a temporal graph (Graphiti). |
| [Cognee](#cognee) | You need multi-hop / deep-knowledge connection where structured graph recall matters, with pluggable storage + MCP. | You want the simplest personal-recall SDK (Mem0), a temporal-compliance focus (Zep/Graphiti), or can't run any graph/LLM. |
| [Graphiti](#graphiti) | Temporal validity matters (facts that change over time) and you already run a graph DB. | You need a quick single-user cache, or can't operate Neo4j/FalkorDB. |
| [GBrain](#gbrain) | You want operator-owned, auditable, version-controlled org/personal memory with citation discipline + MCP access. | You need a plug-in SDK for a different framework, can't run Postgres at scale, or need >50K pages. |
| [memU](#memu) | You run 24/7 proactive agents wanting cheap (embeddings-only), markdown-native, cross-agent memory with intent capture. | You need a clean OSI license today (NOASSERTION) or heavy structured/graph extraction (Cognee/Graphiti). |
| [semble](#semble) | You want fast, local, key-free code search in coding agents with big token savings (context-reducer). | You need a full code knowledge graph (call chains/routes → codebase-memory-mcp) or conversation memory (claude-mem). |
| [ByteRover CLI (formerly Cipher)](#cipher) | You want to give coding agents persistent, cross-IDE, team-shareable memory of concepts + reasoning (MCP). | You need general (non-coding) memory (Mem0), or an OSI license (Elastic 2.0 is source-available, not OSI). |
| [Zep](#zep) | You need enterprise compliance (SOC2/HIPAA/GDPR) + managed temporal memory and can budget per-Episode billing. | You need fully local/free memory, or want OSS self-host (use Graphiti, not the deprecated Zep CE). |
| [Letta](#letta) | You want the agent and its memory as one managed, stateful system. | You only need a memory layer under an existing orchestrator (over-couples you to Letta's runtime). |
| [LangMem](#langmem) | You're already on LangGraph and want native long-term memory with a procedural/prompt-optimization angle. | You want a framework-agnostic memory service (Mem0), a temporal graph (Zep/Graphiti), or production without wiring a Postgres store. |
| [MemoryOS](#memoryos) | You want to experiment with an OS-tiered personalized memory grounded in a peer-reviewed design. | You need a hardened production service (Mem0/Zep/Supermemory) — this is research-grade. |
| [A-MEM](#a-mem) | You want to experiment with self-evolving, note-linked (Zettelkasten) memory or borrow its memory-evolution mechanism. | You need production (research-grade, slowing cadence) — use Mem0/Cognee/Zep instead. |
| [Redis Agent Memory Server](#redis-agent-memory-server) | You already run Redis and want an official two-tier memory server with REST/MCP and lifecycle management. | You need an OSI license (this is Redis source-available) or a fully offline/no-LLM setup. |
| [SynaBun](#synabun) | You want to experiment with a fully-local, no-API coding memory with a 3D graph viz and Claude Code hooks. | You need production or a maintained, focused memory (Mem0, claude-mem, codebase-memory-mcp). |
| [agentmemory](#agentmemory) | Nothing — defunct and unmaintained (repo gone); use Mem0/Cognee/Memori/Supermemory instead. | Any new work — the GitHub repo is gone and PyPI is frozen at Oct 2023. |
| [OWASP Agent Memory Guard](#owasp-agent-memory-guard) | You want to enforce read/write policy and detect poisoning/exfiltration alongside any memory store, especially for writable memory exposed to untrusted input. | You need a memory store itself (this is a guard layer over one) or a full agent-security suite. |

## Tools

<a id="claude-mem"></a>
### claude-mem

**🟢 Active** — Persistent session-memory plugin — captures what an agent does, AI-compresses it into observations, and injects relevant context into future sessions.

| | |
|---|---|
| Repo | https://github.com/thedotmack/claude-mem |
| Maker | thedotmack |
| Sub-type | 4.1 Project / task memory |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐91,239 · created 2025-08 · JavaScript |
| Runs local | ✅ |
| Hands-on | docs-only |

**Features**
- 5 lifecycle hooks (SessionStart/UserPromptSubmit/PostToolUse/Stop/compaction)
- Hybrid relevance: 40% semantic (Chroma) + 30% recency + 20% file-path + 10% interaction
- SQLite observations + Chroma vectors; local ONNX embeddings (all-MiniLM-L6-v2), no external API
- Endless Mode (beta): Working Memory + Archive Memory extends session length
- <private> tags exclude content; multi-agent (Claude Code, OpenClaw, Codex, Gemini, …)

**Choose it when** — You want to give Claude Code (or similar) durable session memory with near-zero setup and local embeddings.

**Avoid when** — You need canonical task tracking (Beads) or a shared org knowledge graph.

📄 **Deep research:** [`research/memory/claude-mem.md`](../research/memory/claude-mem.md)

---

<a id="codegraph"></a>
### codegraph

**🟢 Active** — Pre-indexed code knowledge graph served to agents via MCP — auto-syncs on code changes; fewer tokens, fewer tool calls, 100% local.

| | |
|---|---|
| Repo | https://github.com/colbymchenry/codegraph |
| Maker | colbymchenry |
| Sub-type | 4.1 Project / task memory |
| License | MIT |
| Maturity | Prominent · ⭐67,073 · created 2026-01 · C |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"fewer tokens, fewer tool calls, 100% local"*

**Features**
- Local SQLite graph (tree-sitter + FTS5); auto-sync on edits (FSEvents/inotify, ~2s debounce)
- Single codegraph_explore MCP tool returns structural context + call flows + blast-radius
- 20+ languages; framework-aware routing (17 frameworks); cross-language bridging
- 100% local, no API keys; deterministic (resolves call edges) vs grep/RAG
- 8 agents: Claude Code, Cursor, Codex CLI, opencode, Hermes, Gemini CLI, Antigravity, Kiro

**Choose it when** — You want to give agents fast, local, deterministic codebase understanding that cuts tokens + tool-calls.

**Avoid when** — You need conversation memory (claude-mem/magic-context) or a monorepo's index is too large to keep hot.

**Related sections:** [§6](06-context-reducers.md) · [§16.2](16-cost-telemetry.md) · [§9](09-proof-gates.md)

📄 **Deep research:** [`research/memory/codegraph.md`](../research/memory/codegraph.md)

---

<a id="mempalace"></a>
### MemPalace

**🟢 Active** — Local memory-palace system (method of loci) — verbatim storage in wings/rooms/closets/drawers, a symbolic AAAK index (~170-token startup), temporal KG; fully offline.

| | |
|---|---|
| Repo | https://github.com/MemPalace/mempalace |
| Maker | MemPalace |
| Sub-type | 4.1 Project / task memory |
| License | MIT |
| Maturity | Prominent · ⭐58,463 · created 2026-04 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"The best-benchmarked open-source AI memory system."*

**Features**
- Memory-palace hierarchy: Wings (entity) → Rooms (time) → Closets (topic) → Drawers (verbatim)
- Verbatim storage (no summarize/extract) + semantic search
- Temporal entity-relationship KG (validity windows) on local SQLite
- AAAK ~30x symbolic index compression; startup ~170 tokens (L0+L1)
- 36 MCP tools; per-agent wings + diaries; fully offline (zero API)

**Choose it when** — You want local, offline, verbatim long-term memory with tiny startup cost, temporal KG, and multi-agent diaries via MCP.

**Avoid when** — You want extraction/summarized facts (Mem0) or a managed cloud service.

📄 **Deep research:** [`research/memory/mempalace.md`](../research/memory/mempalace.md)

---

<a id="codebase-memory-mcp"></a>
### codebase-memory-mcp

**🟢 Active** — Code-intelligence MCP server — indexes a codebase into a persistent knowledge graph (functions/classes/call-chains); 158 languages, sub-ms, local, no keys.

| | |
|---|---|
| Repo | https://github.com/DeusData/codebase-memory-mcp |
| Maker | DeusData |
| Sub-type | 4.1 Project / task memory |
| License | MIT |
| Maturity | Prominent · ⭐39,548 · created 2026-02 · C |
| Runs local | ✅ |
| Hands-on | docs-only |

**Features**
- Knowledge graph of functions, classes, call chains, HTTP routes, cross-service links
- Two-layer parse: tree-sitter (158 langs) + Hybrid LSP semantic types (major langs)
- Semantic vector search via nomic-embed-code embeddings compiled into the binary (768-dim int8)
- RAM-first indexing (LZ4, in-memory SQLite); sub-ms queries
- 15 MCP tools; 43 client surfaces; single static C binary; no Docker/keys; 100% local

**Choose it when** — You want to give coding agents fast, local, token-cheap understanding of codebase structure (call graphs, routes) with zero setup/keys.

**Avoid when** — You need conversation/session memory (claude-mem) or a task graph (Beads) — this indexes code, not chats.

**Related sections:** [§6](06-context-reducers.md)

📄 **Deep research:** [`research/memory/codebase-memory-mcp.md`](../research/memory/codebase-memory-mcp.md)

---

<a id="taskmaster"></a>
### Taskmaster

**🟢 Active** — AI-powered PRD-driven task manager — decomposes a requirements doc into a dependency-aware task list you drive from your editor (Cursor/Claude Code).

| | |
|---|---|
| Repo | https://github.com/eyaltoledano/claude-task-master |
| Maker | eyaltoledano + RalphEcom (Hamster) |
| Sub-type | 4.1 Project / task memory |
| License | MIT + Commons Clause / NOASSERTION |
| Maturity | Prominent · ⭐28,001 · created 2025-03 · JavaScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

**Features**
- PRD parsing → task generation (.taskmaster/docs/prd.txt); file-based tasks.json, no DB
- Task/subtask CRUD + status + dependencies; tag-based workstreams
- Complexity/impact analysis + reports; task expansion; research mode
- Multi-model with main/research/fallback roles + fallback logic
- CLI · MCP · editors (Cursor/Windsurf/VS Code/Claude Code/…); Claude Code CLI needs no key

**Choose it when** — You want PRD-first planning where an AI decomposes requirements into tracked tasks inside your editor.

**Avoid when** — You need a durable multi-agent graph DB with git sync (Beads), fully offline/no-LLM operation, or the right to resell/host it (Commons Clause).

📄 **Deep research:** [`research/memory/taskmaster.md`](../research/memory/taskmaster.md)

---

<a id="beads"></a>
### Beads

**🟢 Active** — A Dolt-backed distributed graph issue tracker giving coding agents persistent, dependency-aware task memory — a memory upgrade for your coding agent.

| | |
|---|---|
| Repo | https://github.com/gastownhall/beads |
| Maker | Steve Yegge |
| Sub-type | 4.1 Project / task memory |
| License | MIT |
| Maturity | Prominent · ⭐26,445 · created 2025-10 · Go |
| Runs local | ✅ |
| Hands-on | run |

> *"A memory upgrade for your coding agent"*

**Features**
- Dolt-backed versioned SQL: embedded (single-writer) or server (concurrent); JSONL export is interchange, not a backup
- Dependency graph with hash IDs (bd-a1b2) — collision-proof across agents/branches; Epic→Task→Sub-task
- auto-ready detection (bd ready) + atomic claim; blocks/related-to/duplicates/supersedes/replies-to
- bd remember persistent insights injected via bd prime; semantic memory-decay compaction
- CLI · JSON · MCP (Claude/Copilot); fully offline, works without git (stealth mode)

**Choose it when** — You want canonical, dependency-aware task/work memory for one or many coding agents, with git-backed sync and offline operation.

**Avoid when** — You only need semantic recall (use Mem0/Graphiti) — Beads owns work truth, not general knowledge.

📄 **Deep research:** [`research/memory/beads.md`](../research/memory/beads.md)

---

<a id="magic-context"></a>
### magic-context

**🟢 Active** — The hippocampus for coding agents (CortexKit) — self-managing session memory with no compaction pauses and no forgetting across restarts.

| | |
|---|---|
| Repo | https://github.com/cortexkit/magic-context |
| Maker | CortexKit |
| Sub-type | 4.1 Project / task memory |
| License | MIT |
| Maturity | Established · ⭐1,799 · created 2026-03 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Unbounded context. Memory that manages itself. One session, for life."*

**Features**
- Capture: a Historian compresses history into tiered compartments + extracts durable knowledge
- Consolidate: optional 'dreamer' verifies memories against the codebase during idle, merges dupes
- Recall: cache-stable injection each turn + semantic search over memories/history/git
- Cross-session and cross-harness memory pooling (shared store); temporal gap markers
- OpenCode · Pi (>=0.74.0); desktop app; npx @cortexkit/magic-context setup

**Choose it when** — You want compaction-free, self-managing long-session memory ('one session for life') on OpenCode/Pi.

**Avoid when** — Your harness isn't supported yet, or you need codebase structure (codegraph) rather than session memory.

**Related sections:** [§6](06-context-reducers.md) · [§4.2](04-memory.md)

📄 **Deep research:** [`research/memory/magic-context.md`](../research/memory/magic-context.md)

---

<a id="roo-code-memory-bank"></a>
### Roo Code Memory Bank

**⚠️ Caution** — Markdown memory bank for Roo Code (VS Code) — structured .md files that keep project context across sessions; no DB, convention-driven.

| | |
|---|---|
| Repo | https://github.com/GreatScottyMac/roo-code-memory-bank |
| Maker | GreatScottyMac |
| Sub-type | 4.1 Project / task memory |
| License | Apache-2.0 |
| Maturity | Established · ⭐1,678 · created 2025-02 · Batchfile |
| Runs local | ✅ |
| Hands-on | docs-only |

**Features**
- memory-bank/ markdown: activeContext · productContext · progress · decisionLog (+ projectBrief)
- Auto-init on entering Architect/Code mode; guided setup
- Modes: Architect (design) · Code (implementation) · Ask (knowledge/docs)
- 'Update Memory Bank' / UMB to force-sync the chat session into the files

**Choose it when** — You specifically use Roo Code and want the simplest markdown-file project memory.

**Avoid when** — You're on a non-Roo stack — prefer the successor RooFlow, a durable store (Beads), or plugin memory (claude-mem).

📄 **Deep research:** [`research/memory/roo-code-memory-bank.md`](../research/memory/roo-code-memory-bank.md)

---

<a id="mem0"></a>
### Mem0

**🟢 Active** — Universal memory layer giving agents user/session/agent-level recall + personalization; add-only fact extraction with multi-signal retrieval.

| | |
|---|---|
| Repo | https://github.com/mem0ai/mem0 |
| Maker | mem0ai (Taranjeet Singh & Deshraj Yadav) |
| Sub-type | 4.2 Personal memory |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐63,603 · created 2023-06 · Python |
| Runs local | 🟡 partial |
| Hands-on | inspected |

**Features**
- Two-phase API: add (extract facts) → search (retrieve before next call); add-only
- Four scopes: conversation · session · user · organizational
- Retrieval fuses semantic · keyword · entity-boost · temporal signals
- 17+ vector backends (Qdrant default); many LLM/embedding providers; rerankers
- OpenMemory local-first MCP server; editor plugins (Claude Code, Cursor, Codex, …)
- Memory expiration + 'dream' consolidation (merge dupes, drop stale)

**Choose it when** — You want personal/assistant recall across sessions with minimal setup (pip install mem0ai + a key).

**Avoid when** — You need fully offline operation, or would conflate its memory with work truth.

📄 **Deep research:** [`research/memory/mem0.md`](../research/memory/mem0.md)

---

<a id="supermemory"></a>
### Supermemory

**🟢 Active** — The Memory API for the AI era — a fast, scalable memory+context engine + app (RAG + memory + profiles + connectors), runnable fully local/air-gapped.

| | |
|---|---|
| Repo | https://github.com/supermemoryai/supermemory |
| Maker | supermemoryai |
| Sub-type | 4.2 Personal memory |
| License | MIT |
| Maturity | Prominent · ⭐28,957 · created 2024-02 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"The Memory API for the AI era"*

**Features**
- Memory Engine: fact extraction · update tracking · contradiction resolution · auto-forget
- Hybrid Search: RAG + Memory in a single query; static + dynamic user profiles
- OAuth connectors: Google Drive · Gmail · Notion · GitHub (real-time sync)
- File processing: PDFs, images, videos, code → searchable chunks
- Memory API + SDKs · MCP server · web app · browser ext · Raycast

**Choose it when** — You want a turnkey memory API/app with personal-data connectors, unified RAG+memory, and optional air-gapped self-host.

**Avoid when** — You only need a tiny embeddable lib, or want a temporal graph (Zep/Graphiti) or SQL-native store (Memori).

📄 **Deep research:** [`research/memory/supermemory.md`](../research/memory/supermemory.md)

---

<a id="memori"></a>
### Memori

**🟢 Active** — SQL-native memory engine — persistent agent memory in standard SQL (SQLite/Postgres/MySQL), no vector DB, portable and queryable.

| | |
|---|---|
| Repo | https://github.com/MemoriLabs/Memori |
| Maker | GibsonAI (MemoriLabs) |
| Sub-type | 4.2 Personal memory |
| License | open-source (claimed) / NOASSERTION |
| Maturity | Prominent · ⭐16,125 · created 2025-07 · Python |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

**Features**
- SQL-native (SQLite/Postgres/MySQL); no vector store; SQLite export = zero lock-in
- Two modes: Conscious Ingest (start injection + 6h pattern analysis) + Auto Ingest (per-query)
- Universal recording → Pydantic entity extraction + categorization → context injection
- LLM-agnostic; enterprise deploy (cloud/single-tenant/VPC/on-prem)

**Choose it when** — You want to store memory in the SQL database you already run (portability, queryability, cost) with structured recall.

**Avoid when** — You need strong semantic-similarity/graph retrieval, or a clean OSS license today (NOASSERTION).

📄 **Deep research:** [`research/memory/memori.md`](../research/memory/memori.md)

---

<a id="openmemory"></a>
### OpenMemory

**🟢 Active** — Cognitive memory engine for LLMs — local, self-hosted; hierarchical decomposition + temporal awareness; native MCP; migrates from Mem0/Zep/Supermemory.

| | |
|---|---|
| Repo | https://github.com/CaviraOSS/OpenMemory |
| Maker | CaviraOSS |
| Sub-type | 4.2 Personal memory |
| License | Apache-2.0 |
| Maturity | Established · ⭐4,449 · created 2025-10 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

**Features**
- Hierarchical memory decomposition (layered structures, selective access)
- Temporal awareness (time as first-class; auto timeline management)
- Not a vector DB (self-hosted, Python + Node)
- Native MCP server (Claude Desktop, Copilot, Codex, Antigravity, any MCP client)
- Migration from Mem0, Zep, Supermemory, and more

**Choose it when** — You want a local, MCP-native cognitive memory with hierarchical + temporal structure, especially to migrate off Mem0/Zep/Supermemory.

**Avoid when** — You want the simplest vector SDK (Mem0) or a temporal graph (Graphiti).

📄 **Deep research:** [`research/memory/openmemory.md`](../research/memory/openmemory.md)

---

<a id="cognee"></a>
### Cognee

**🟢 Active** — Open-source graph-native memory platform — an ECL (Extract→Cognify→Load) pipeline that turns data into a self-improving knowledge graph + vectors.

| | |
|---|---|
| Repo | https://github.com/topoteretes/cognee |
| Maker | topoteretes |
| Sub-type | 4.3 Organizational / semantic memory |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐30,118 · created 2023-08 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

**Features**
- ECL pipeline: add (ingest) → cognify (extract) → memify (enrich); 14 retrieval modes
- Auto-routing vector+graph hybrid; session-aware recall; cross-agent sharing
- Pluggable backends: graph (Neo4j/Kuzu/Postgres) + vector (6+); Cognee 1.0 unifies on Postgres
- Governance: tenant isolation · audit trails · OTEL observability
- Python/TS/Rust SDK · CLI+UI · MCP · LangGraph · Claude Code/OpenClaw plugins

**Choose it when** — You need multi-hop / deep-knowledge connection where structured graph recall matters, with pluggable storage + MCP.

**Avoid when** — You want the simplest personal-recall SDK (Mem0), a temporal-compliance focus (Zep/Graphiti), or can't run any graph/LLM.

📄 **Deep research:** [`research/memory/cognee.md`](../research/memory/cognee.md)

---

<a id="graphiti"></a>
### Graphiti

**🟢 Active** — Framework for temporal knowledge graphs for agents — tracks when facts became and ceased to be true, with hybrid retrieval and full provenance.

| | |
|---|---|
| Repo | https://github.com/getzep/graphiti |
| Maker | Zep |
| Sub-type | 4.3 Organizational / semantic memory |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐30,090 · created 2024-08 · Python |
| Runs local | ☁️ hosted |
| Hands-on | docs-only |

**Features**
- Bi-temporal model: event time + ingestion time per edge; contradictions invalidated, not deleted
- Hybrid retrieval: semantic + BM25 + graph traversal with graph-distance reranking
- Custom + learned ontology (Pydantic); episodes = provenance
- Backends: Neo4j · FalkorDB · Amazon Neptune · Kuzu (deprecated)
- Python SDK (graphiti-core) · MCP server · FastAPI REST

**Choose it when** — Temporal validity matters (facts that change over time) and you already run a graph DB.

**Avoid when** — You need a quick single-user cache, or can't operate Neo4j/FalkorDB.

📄 **Deep research:** [`research/memory/graphiti.md`](../research/memory/graphiti.md)

---

<a id="gbrain"></a>
### GBrain

**🟢 Active** — Self-hosted institutional memory — a git-versioned markdown brain repo + Postgres/pgvector index with a self-wiring typed-edge graph and cited answers.

| | |
|---|---|
| Repo | https://github.com/garrytan/gbrain |
| Maker | Garry Tan |
| Sub-type | 4.3 Organizational / semantic memory |
| License | MIT |
| Maturity | Prominent · ⭐28,743 · created 2026-04 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

**Features**
- Markdown brain-repo (git; diffable) synced to PGLite (<=50K pages) or Postgres 17 + pgvector
- Self-wiring typed-edge graph extracted on write with zero LLM calls (+31.4 P@5)
- Hybrid retrieval: HNSW vectors + BM25 + reciprocal-rank fusion; search vs think (cited)
- Nightly 'dream' cycle: dedup, citation-fixing, salience, contradiction detection
- CLI · MCP (stdio/HTTP + OAuth2.1); 30+ MCP tools; 43 skills

**Choose it when** — You want operator-owned, auditable, version-controlled org/personal memory with citation discipline + MCP access.

**Avoid when** — You need a plug-in SDK for a different framework, can't run Postgres at scale, or need >50K pages.

📄 **Deep research:** [`research/memory/gbrain.md`](../research/memory/gbrain.md)

---

<a id="memu"></a>
### memU

**🟢 Active** — Cross-agent personal memory for 24/7 proactive agents — a self-organizing markdown file system with intent capture and ~10x token reduction; embeddings-only.

| | |
|---|---|
| Repo | https://github.com/NevaMind-AI/memU |
| Maker | NevaMind AI |
| Sub-type | 4.3 Organizational / semantic memory |
| License | NOASSERTION |
| Maturity | Prominent · ⭐14,322 · created 2025-07 · Python |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Personal memory across agents"*

**Features**
- Self-organizing file system: resources (raw) → memory items (typed notes) → categories
- Markdown-native; embeddings are the only model calls (no LLM extraction)
- Proactive intent capture; ~10x token reduction (~1/10 context)
- Multimodal ingestion (conversations, documents, images)
- Cross-agent: all hosts share one store + embedding space (~/.memu/config.env)

**Choose it when** — You run 24/7 proactive agents wanting cheap (embeddings-only), markdown-native, cross-agent memory with intent capture.

**Avoid when** — You need a clean OSI license today (NOASSERTION) or heavy structured/graph extraction (Cognee/Graphiti).

📄 **Deep research:** [`research/memory/memu.md`](../research/memory/memu.md)

---

<a id="semble"></a>
### semble

**🟢 Active** — CPU-only code search for agents — static Model2Vec embeddings + BM25 + RRF; ~98% fewer tokens than grep+read; MCP; no GPU/keys.

| | |
|---|---|
| Repo | https://github.com/MinishLab/semble |
| Maker | MinishLab |
| Sub-type | 4.3 Organizational / semantic memory |
| License | MIT |
| Maturity | Established · ⭐5,906 · created 2026-04 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Fast and Accurate Code Search for Agents. Uses ~98% fewer tokens than grep+read."*

**Features**
- Static Model2Vec embeddings (CPU-only) + BM25 + Reciprocal Rank Fusion
- tree-sitter code-aware chunking
- ~98% fewer tokens than grep+read; NDCG@10 0.854; index ~250ms, queries ~1.5ms
- MCP (Claude Code, Cursor, Codex, OpenCode) + bash/AGENTS.md + Python API
- No external deps — no GPU, API keys, or services

**Choose it when** — You want fast, local, key-free code search in coding agents with big token savings (context-reducer).

**Avoid when** — You need a full code knowledge graph (call chains/routes → codebase-memory-mcp) or conversation memory (claude-mem).

**Related sections:** [§6](06-context-reducers.md)

📄 **Deep research:** [`research/memory/semble.md`](../research/memory/semble.md)

---

<a id="cipher"></a>
### ByteRover CLI (formerly Cipher)

**🟢 Active** — Memory layer for coding agents, formerly Cipher — rename to ByteRover CLI now complete: an interactive REPL CLI with dual System-1/System-2 memory, cross-IDE via MCP, team-shareable. Elastic 2.0.

| | |
|---|---|
| Repo | https://github.com/campfirein/byterover-cli |
| Maker | Byterover |
| Sub-type | 4.3 Organizational / semantic memory |
| License | Elastic-2.0 / NOASSERTION |
| Maturity | Established · ⭐4,942 · created 2025-06 · TypeScript |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Interactive REPL CLI for AI-powered context memory"*

**Features**
- Dual memory: System 1 (concepts/logic/history) + System 2 (reasoning steps)
- Interactive REPL CLI (npm byterover-cli); rename from Cipher completed at the repo level
- Cross-IDE via MCP: Cursor, Windsurf, Claude Code/Desktop, Gemini CLI, Kiro, VS Code, Roo, Cline, …
- Context tree; cloud sync; real-time team sharing
- Configurable LLM + embeddings; vector DB (Qdrant, Milvus)

**Choose it when** — You want to give coding agents persistent, cross-IDE, team-shareable memory of concepts + reasoning (MCP).

**Avoid when** — You need general (non-coding) memory (Mem0), or an OSI license (Elastic 2.0 is source-available, not OSI).

📄 **Deep research:** [`research/memory/cipher.md`](../research/memory/cipher.md)

---

<a id="zep"></a>
### Zep

**⚠️ Caution** — Enterprise agent-memory platform — temporal knowledge-graph memory (built on Graphiti) with compliance; the managed counterpart to OSS Graphiti.

| | |
|---|---|
| Repo | https://github.com/getzep/zep |
| Maker | Zep |
| Sub-type | 4.3 Organizational / semantic memory |
| License | Apache-2.0 |
| Maturity | Established · ⭐4,851 · created 2023-04 · Python |
| Runs local | ☁️ hosted |
| Hands-on | docs-only |

**Features**
- Temporal graph memory (Graphiti engine); dual-timeline per edge + auto invalidation
- Compliance: SOC 2 Type II · HIPAA (BAA) · GDPR · BYOC
- Managed sub-200ms retrieval; Episode-credit billing; memory/retrieval/storage/users unmetered
- MCP + Cloud API/SDKs; self-host path = Graphiti (not the deprecated Zep CE)

**Choose it when** — You need enterprise compliance (SOC2/HIPAA/GDPR) + managed temporal memory and can budget per-Episode billing.

**Avoid when** — You need fully local/free memory, or want OSS self-host (use Graphiti, not the deprecated Zep CE).

📄 **Deep research:** [`research/memory/zep.md`](../research/memory/zep.md)

---

<a id="letta"></a>
### Letta

**🟢 Active** — Framework for stateful agents with persistent, self-improving memory (editable memory blocks) plus background sleep-time compute; formerly MemGPT.

| | |
|---|---|
| Repo | https://github.com/letta-ai/letta-code |
| Maker | Letta |
| Sub-type | 4.3 Organizational / semantic memory |
| License | Apache-2.0 |
| Maturity | Established · ⭐3,055 · created 2023-10 · TypeScript |
| Runs local | ✅ |
| Hands-on | docs-only |

**Features**
- Memory blocks: main context · recall storage · archival storage; agent self-edits (human/persona)
- Sleep-time compute: background agent refines memory during idle time
- Agent Development Environment (ADE) inspects context window, memory blocks, tool calls
- Letta Code — model-agnostic agent harness with persistent memory; local subprocess mode
- Letta Code CLI · TS Agent SDK · desktop app · Slack; Postgres in server mode

**Choose it when** — You want the agent and its memory as one managed, stateful system.

**Avoid when** — You only need a memory layer under an existing orchestrator (over-couples you to Letta's runtime).

📄 **Deep research:** [`research/memory/letta.md`](../research/memory/letta.md)

---

<a id="langmem"></a>
### LangMem

**🟢 Active** — LangChain's SDK for agent long-term memory — semantic, episodic, and procedural memory over LangGraph's store, with prompt optimization.

| | |
|---|---|
| Repo | https://github.com/langchain-ai/langmem |
| Maker | LangChain |
| Sub-type | 4.3 Organizational / semantic memory |
| License | MIT |
| Maturity | Established · ⭐1,619 · created 2025-01 · Python |
| Runs local | ☁️ hosted |
| Hands-on | docs-only |

**Features**
- 3 memory types: semantic · episodic · procedural (saved as prompt instructions)
- 2 pathways: hot-path (agent-managed tools) + background (auto extract/consolidate)
- Memory tools: create_manage_memory_tool, create_search_memory_tool
- Storage-agnostic over LangGraph BaseStore; InMemory or AsyncPostgres
- Prompt optimization / refinement (the procedural mechanism)

**Choose it when** — You're already on LangGraph and want native long-term memory with a procedural/prompt-optimization angle.

**Avoid when** — You want a framework-agnostic memory service (Mem0), a temporal graph (Zep/Graphiti), or production without wiring a Postgres store.

📄 **Deep research:** [`research/memory/langmem.md`](../research/memory/langmem.md)

---

<a id="memoryos"></a>
### MemoryOS

**🟢 Active** — Academic memory operating system for personalized agents — OS-inspired 3-tier hierarchy (short/mid/long-term) with FIFO + paging updates. EMNLP 2025 Oral.

| | |
|---|---|
| Repo | https://github.com/BAI-LAB/MemoryOS |
| Maker | BAI-LAB |
| Sub-type | 4.3 Organizational / semantic memory |
| License | Apache-2.0 |
| Maturity | Established · ⭐1,556 · created 2025-05 · Python |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

**Features**
- Three-tier hierarchy: short-term / mid-term / long-term personal memory
- Four modules: Memory Storage · Updating · Retrieval · Generation
- OS-inspired updates: dialogue-chain FIFO (short→mid); segmented paging (mid→long)
- Playground platform; peer-reviewed (EMNLP 2025 Oral)

**Choose it when** — You want to experiment with an OS-tiered personalized memory grounded in a peer-reviewed design.

**Avoid when** — You need a hardened production service (Mem0/Zep/Supermemory) — this is research-grade.

📄 **Deep research:** [`research/memory/memoryos.md`](../research/memory/memoryos.md)

---

<a id="a-mem"></a>
### A-MEM

**⚠️ Caution** — Zettelkasten-inspired agentic memory — note-based memory that dynamically links notes and evolves older ones as new memories arrive.

| | |
|---|---|
| Repo | https://github.com/agiresearch/A-mem |
| Maker | agiresearch |
| Sub-type | 4.3 Organizational / semantic memory |
| License | MIT |
| Maturity | Established · ⭐1,151 · created 2025-02 · Python |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

**Features**
- Note creation with structured attributes (contextual descriptions, keywords, tags)
- Dynamic linking — connects new notes to relevant historical ones
- Memory evolution — new memories update old notes' representations/links
- Zettelkasten structure + agent-driven decisions; evaluated on 6 foundation models

**Choose it when** — You want to experiment with self-evolving, note-linked (Zettelkasten) memory or borrow its memory-evolution mechanism.

**Avoid when** — You need production (research-grade, slowing cadence) — use Mem0/Cognee/Zep instead.

📄 **Deep research:** [`research/memory/a-mem.md`](../research/memory/a-mem.md)

---

<a id="redis-agent-memory-server"></a>
### Redis Agent Memory Server

**🟢 Active** — Official Redis reference agent-memory server — two-tier working + long-term memory, REST + MCP, Redis-backed semantic search, auto extract/dedup/forget.

| | |
|---|---|
| Repo | https://github.com/redis/agent-memory-server |
| Maker | Redis |
| Sub-type | 4.3 Organizational / semantic memory |
| License | Redis Source Available (RSALv2/SSPLv1) / NOASSERTION |
| Maturity | Emerging · ⭐307 · created 2025-03 · Python |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

**Features**
- Two-tier: working (session, TTL) + long-term (facts + vectors, semantic retrieval)
- Auto-promotion: extracts important info working→long-term in background; dedup
- Search: semantic + keyword + hybrid with filtering
- REST · MCP (FastMCP) · Python client; backends Redis (default), Pinecone, Chroma, Postgres
- Auth: OAuth2/JWT, token, or disabled; background forgetting + compaction

**Choose it when** — You already run Redis and want an official two-tier memory server with REST/MCP and lifecycle management.

**Avoid when** — You need an OSI license (this is Redis source-available) or a fully offline/no-LLM setup.

📄 **Deep research:** [`research/memory/redis-agent-memory-server.md`](../research/memory/redis-agent-memory-server.md)

---

<a id="synabun"></a>
### SynaBun

**🟢 Active** — Local-first coding-agent memory (part of a vibe coding toolkit) — SQLite + embedded models, no external APIs, MCP + Claude Code hooks, 3D memory-graph viz.

| | |
|---|---|
| Repo | https://github.com/danilokhury/Synabun |
| Maker | danilokhury |
| Sub-type | 4.3 Organizational / semantic memory |
| License | Apache-2.0 |
| Maturity | Preview · ⭐70 · created 2026-02 · JavaScript |
| Runs local | ✅ |
| Hands-on | docs-only |

**Features**
- Local-first: SQLite + embedded models; no external APIs/cloud/Docker; semantic vector search
- MCP across Claude Code, Codex, Gemini, OpenCode; automated lifecycle hooks
- Interactive 3D memory-graph visualization
- Multi-project memory sharing with automatic context detection
- File-change detection via hashing to flag outdated knowledge

**Choose it when** — You want to experiment with a fully-local, no-API coding memory with a 3D graph viz and Claude Code hooks.

**Avoid when** — You need production or a maintained, focused memory (Mem0, claude-mem, codebase-memory-mcp).

📄 **Deep research:** [`research/memory/synabun.md`](../research/memory/synabun.md)

---

<a id="agentmemory"></a>
### agentmemory

**⚰️ Defunct** — Early (2023) easy agent-memory package (ChromaDB/Postgres) by Moon — now defunct on GitHub; PyPI frozen at v0.4.8 (Oct 2023).

| | |
|---|---|
| Repo | https://pypi.org/project/agentmemory/ |
| Maker | Moon (shawmakesmagic) / AutonomousResearchGroup |
| Sub-type | 4.3 Organizational / semantic memory |
| License | MIT (PyPI-era, unverifiable) / none |
| Maturity | Defunct · created 2023 · Python |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Easy-to-use memory for agents, document search, knowledge graphing and more"*

**Features**
- ChromaDB (default local) + PostgreSQL backends
- Semantic search + metadata filtering/tagging
- DBScan clustering of memories by similarity
- Epoch-based event logging; import/export

**Choose it when** — Nothing — defunct and unmaintained (repo gone); use Mem0/Cognee/Memori/Supermemory instead.

**Avoid when** — Any new work — the GitHub repo is gone and PyPI is frozen at Oct 2023.

📄 **Deep research:** [`research/memory/agentmemory.md`](../research/memory/agentmemory.md)

---

<a id="owasp-agent-memory-guard"></a>
### OWASP Agent Memory Guard

**🟢 Active** — OWASP reference runtime defense for memory poisoning (ASI06) — a guard layer between agent and memory store, screening every read/write via detectors + YAML policy.

| | |
|---|---|
| Repo | https://github.com/OWASP/www-project-agent-memory-guard |
| Maker | OWASP Foundation |
| Sub-type | 4.4 Memory security & governance |
| License | Apache-2.0 |
| Maturity | Emerging · ⭐140 · created 2026-02 · Python |
| Runs local | ✅ |
| Hands-on | docs-only |

**Features**
- Detectors: prompt injection · secret/PII leakage · protected-key modification · size anomalies · self-reinforcement loops
- YAML policy → actions: allow / redact / quarantine / block
- SHA-256 baselines for immutable-key integrity; forensic snapshots + rollback
- Structured SecurityEvent per decision; sub-100us latency
- GuardedChatMessageHistory (LangChain); framework-agnostic MemoryStore protocol

**Choose it when** — You want to enforce read/write policy and detect poisoning/exfiltration alongside any memory store, especially for writable memory exposed to untrusted input.

**Avoid when** — You need a memory store itself (this is a guard layer over one) or a full agent-security suite.

📄 **Deep research:** [`research/memory/owasp-agent-memory-guard.md`](../research/memory/owasp-agent-memory-guard.md)

---

_Part of [AI-Choices-Atlas](https://github.com/ZerephCo/AI-Choices-Atlas), stewarded by Zereph · content dedicated to the public domain under [CC0 1.0](../LICENSE) — reuse freely, no credit required._
