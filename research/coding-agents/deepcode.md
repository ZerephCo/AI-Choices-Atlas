---
name: DeepCode
slug: deepcode
category: coding-agents
subtype: "1.3 Autonomous SWE agents"
repo: https://github.com/HKUDS/DeepCode
site: null
maker: HKUDS (HKU Data Intelligence Lab)
license_claimed: MIT
license_detected: MIT
stars: 16373
created: "2025-05"
language: Python
maturity: Prominent
status: active
local: true
one_liner: "Open multi-agent coding framework (HKU) that turns high-level inputs into production-ready code — Paper2Code, Text2Web, Text2Backend — with CodeRAG, sandboxing, MCP tools, and BYO LLM."
tagline_quote: "Where AI Agents Transform Ideas into Production-Ready Code."
features:
  - "Three workflows: Paper2Code, Text2Web, Text2Backend"
  - "Multi-agent pipeline: intent/parse → plan → code-reference mining → index → generate → test/QA"
  - "CodeRAG retrieval; MCP tool integration; integrated sandboxing + permission controls"
  - "Interactive CLI + web UI; persistent sessions with memory"
  - "BYO LLM: OpenAI, Anthropic, Gemini, OpenAI-compatible (OpenRouter, Poe, DashScope)"
choose_when: "You want an open, research-grade autonomous pipeline that turns papers/specs/descriptions into working web or backend code."
avoid_when: "You want an interactive editor/CLI coding assistant (§1.1/1.2), not an autonomous spec→code generator."
cross_links: ["§7", "§14"]
hands_on: docs-only
last_verified: "2026-08-19"
---
# DeepCode — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents → 1.3 autonomous SWE agent (multi-agent code generation) |
| Repo | https://github.com/HKUDS/DeepCode |
| Maker | **HKUDS** — Data Intelligence Lab, University of Hong Kong |
| License | **MIT** / MIT |
| ⭐ / created | **16,086** ⭐ · created 2025-05 · Python · active |
| Paper | arXiv:2512.07921 |
| Runs local | **✅** self-hosted CLI/web; BYO LLM endpoint (incl. OpenAI-compatible/local); integrated sandbox |
| Researched | 2026-07-26 · hands-on: **docs-only** |

## 1. What it is
An **open multi-agent "agentic coding" framework** from HKU's Data Intelligence Lab that turns high-level inputs into production-ready code via three workflows — **Paper2Code** (papers/algorithms → implementations), **Text2Web** (descriptions → frontends), and **Text2Backend** (NL → backends/APIs). It runs as a multi-agent orchestration system (intent → plan → code-reference mining → index → generate → test/QA), not an interactive editor assistant.

## 2. Quotes (verbatim — attributed)
- README: *"Where AI Agents Transform Ideas into Production-Ready Code."*
- Repo description: *"DeepCode: Open Agentic Coding (Paper2Code & Text2Web & Text2Backend)."*

## 3. Features
- **Three generation workflows** (Paper2Code / Text2Web / Text2Backend).
- **Specialized multi-agent pipeline** with planning + code-reference mining.
- **CodeRAG** retrieval-augmented code discovery; **MCP** tool integration.
- **Interactive CLI + web UI**; persistent sessions with memory management.
- **Integrated sandboxing + permissions**; BYO LLM provider (OpenAI, Anthropic, Gemini, OpenAI-compatible).

## 4. Choose / avoid
- **Choose it when** you want an open, research-grade autonomous pipeline that produces working web/backend code from specs or papers.
- **Avoid when** you want an interactive CLI/IDE coding assistant (§1.1/1.2) rather than autonomous spec→code generation.
- Related: multi-agent architecture overlaps §7; uses MCP tools (§14).

## 5. Roadmap / status
- **Now:** active (created 2025-05, ~16k ⭐, Python, MIT); paper-backed (arXiv:2512.07921).

## 6. Sources
- https://github.com/HKUDS/DeepCode (GitHub API: 16,086 ⭐, MIT, Python, created 2025-05) · README
- arXiv:2512.07921
- InitialResearch.md (corpus listed "DeepCode"; carded after direct verification)

_Last verified: 2026-07-26 · verdict: 🟢 active · Researcher: Claude_
