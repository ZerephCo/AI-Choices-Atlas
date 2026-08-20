---
name: Langroid
slug: langroid
category: agent-runtimes
subtype: "7.2 Multi-agent crew / conversation frameworks"
repo: https://github.com/langroid/langroid
site: https://langroid.github.io/langroid/
maker: Langroid
license_claimed: MIT
license_detected: MIT
stars: 4101
created: "2023-04"
language: Python
maturity: Established
status: active
local: true
one_liner: "Lightweight Python framework for building LLM apps from cooperating agents that message each other, use tools/functions, and share vector-store memory. A principled multi-agent model."
tagline_quote: "Harness LLMs with Multi-Agent Programming."
features:
  - "Agents communicate by messages; delegate sub-tasks to other agents"
  - "Tools/function-calling + retrieval (vector-store) built in"
  - "Provider-agnostic (many LLM backends)"
  - "Python library; MIT"
choose_when: "You want a clean, message-passing multi-agent programming model without a heavy framework."
avoid_when: "You need explicit durable graphs/state machines (§7.1) or a full type-safe platform (§7.3)."
cross_links: ["§7", "§4"]
hands_on: docs-only
last_verified: "2026-08-20"
---
# Langroid — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Agent runtimes → 7.2 multi-agent programming framework |
| Repo / site | https://github.com/langroid/langroid · langroid.github.io/langroid |
| Maker | **Langroid** (ex-CMU/Uber researchers) |
| License | **MIT** / MIT |
| ⭐ / created | **4,101** ⭐ · created 2023-04 · Python · active |
| Runs local | **✅** Python library you host |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
A **lightweight multi-agent programming framework**: you build LLM apps from **agents that message each other**, delegate sub-tasks, call tools/functions, and share **vector-store memory**. Emphasizes a clean, principled model over heavyweight abstractions.

## 2. Quotes (verbatim — attributed)
- Repo description: *"Harness LLMs with Multi-Agent Programming."*

## 3. Features
- **Message-passing agents** that delegate to one another.
- **Tools / function-calling** + **retrieval** (vector stores) built in.
- **Provider-agnostic** across LLM backends.
- **Python**, MIT.

## 4. Choose / avoid
- **Choose it when** you want a clean message-passing multi-agent model without a heavy framework.
- **Avoid when** you need explicit durable graphs/state (§7.1) or a full type-safe platform (§7.3).
- Compare with CrewAI/AutoGen (§7.2); its memory/retrieval overlaps §4.

## 5. Sources
- https://github.com/langroid/langroid (GitHub API: 4,101 ⭐, MIT, Python, created 2023-04)
- InitialResearch.md (corpus "Runtimes/frameworks" repo list; not previously carded)

_Last verified: 2026-08-20 · verdict: 🟢 active · Researcher: Claude_
