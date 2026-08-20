---
name: "Roo Code Memory Bank"
slug: roo-code-memory-bank
category: memory
subtype: "4.1 Project / task memory"
repo: https://github.com/GreatScottyMac/roo-code-memory-bank
site: null
maker: "GreatScottyMac"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 1678
created: "2025-02"
language: Batchfile
maturity: Established
status: caution
local: true
one_liner: "Markdown memory bank for Roo Code (VS Code) — structured .md files that keep project context across sessions; no DB, convention-driven."
features:
  - "memory-bank/ markdown: activeContext · productContext · progress · decisionLog (+ projectBrief)"
  - "Auto-init on entering Architect/Code mode; guided setup"
  - "Modes: Architect (design) · Code (implementation) · Ask (knowledge/docs)"
  - "'Update Memory Bank' / UMB to force-sync the chat session into the files"
choose_when: "You specifically use Roo Code and want the simplest markdown-file project memory."
avoid_when: "You're on a non-Roo stack — prefer the successor RooFlow, a durable store (Beads), or plugin memory (claude-mem)."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Roo Code Memory Bank — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → project/task (markdown project-context memory) |
| Repo | https://github.com/GreatScottyMac/roo-code-memory-bank |
| Maker | **GreatScottyMac** (also author of **RooFlow**, the successor) |
| License | Apache-2.0 / Apache-2.0 |
| ⭐ / created | 1,678 · 2025-02-02 · **⚠️ last push 2025-05-15 (dormant ~14 mo)** |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
The "**memory bank**" markdown pattern adapted for **Roo Code** (a VS Code AI assistant). A structured set of markdown files keeps deep project context across sessions so the assistant doesn't re-learn the project every time. Convention + prompt-driven — **not a database**.

## 2. How it works
A `memory-bank/` directory in the project root holds markdown files:
- `activeContext.md` · `productContext.md` · `progress.md` · `decisionLog.md` (+ `projectBrief.md`).
Initialization is largely automatic: on opening a project and switching to Architect or Code mode, Roo Code checks for `memory-bank/` and, if missing, guides setup.

## 3. Modes
- **Architect** — high-level system design, structure, project-wide consistency.
- **Code** — implementation; writing/modifying code following established patterns.
- **Ask** — knowledge-base/documentation assistant.

## 4. Updates
Type **"Update Memory Bank"** or **`UMB`** anytime to force-sync the chat session's information into the memory-bank files (continuity across sessions / before switching modes).

## 5. Local/offline & dependencies
Plain markdown files (fully local); relies on the **Roo Code** extension + its configured LLM to read/write them.

## 6. Roadmap
- **Was:** created by GreatScottyMac (Feb 2025) — Roo Code adaptation of the memory-bank pattern.
- **Now (2026):** ⭐1.7k but **dormant** (last commit 2025-05). The author's **RooFlow** ("Enhanced Memory Bank System" — five integrated modes + Roo Code "Footgun" customization) is the evolution.
- **Ahead:** effectively superseded by **RooFlow** — track that instead.

## 7. What it is NOT / limitations
- Not a database/vector store (plain markdown; LLM reads files → no semantic retrieval).
- Tied to **Roo Code** / VS Code (not framework-agnostic).
- **Dormant** (last push 2025-05); superseded by RooFlow.

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** inspect the mode rules + memory-bank templates; compare against RooFlow.

## 9. Sources
- https://github.com/GreatScottyMac/roo-code-memory-bank (README, developer-primer)
- https://github.com/GreatScottyMac/RooFlow (successor)

_Last updated: 2026-07-20 · Researcher: Claude_
