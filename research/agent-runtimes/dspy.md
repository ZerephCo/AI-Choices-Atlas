---
name: DSPy
slug: dspy
category: agent-runtimes
subtype: "7.3 Declarative / self-optimizing LM framework"
repo: https://github.com/stanfordnlp/dspy
site: https://dspy.ai
maker: Stanford NLP
license_claimed: MIT
license_detected: MIT
stars: 36385
created: "2023-01"
language: Python
maturity: Prominent
status: active
local: true
one_liner: "Stanford's framework for 'programming, not prompting' LMs — compose typed signatures + modules into pipelines, then auto-optimize prompts/weights with optimizers. Supports RAG and agent loops."
tagline_quote: "Programming—not prompting—Foundation Models."
features:
  - "Signatures (typed I/O), Modules (reusable components), Optimizers (auto-tune prompts/weights)"
  - "Self-improving pipelines with assertions/constraints"
  - "Build classifiers → RAG → multi-stage programs → agent loops"
  - "Provider-agnostic; MIT; from Stanford NLP"
choose_when: "You want to systematically build and optimize LM pipelines/agents instead of hand-tuning prompts."
avoid_when: "You want a graph/state runtime (LangGraph, §7.1) or a role-based multi-agent crew framework (§7.2)."
cross_links: ["§7", "§11"]
hands_on: docs-only
last_verified: "2026-07-26"
---
# DSPy — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Agent runtimes → declarative, self-optimizing LM-programming framework |
| Repo / site | https://github.com/stanfordnlp/dspy · https://dspy.ai |
| Maker | **Stanford NLP** |
| License | **MIT** / MIT |
| ⭐ / created | **36,385** ⭐ · created 2023-01 · Python · active |
| Access | **Free** — open-source (MIT); BYO model |
| Runs local | **✅** provider-agnostic (local or cloud models) |
| Researched | 2026-07-26 · hands-on: **docs-only** |

## 1. What it is
A framework for **"programming — not prompting"** language models. Instead of hand-crafting brittle prompts, you compose Python from **signatures** (typed I/O specs), **modules** (reusable components like ReAct/ChainOfThought), and **optimizers** (algorithms that automatically tune prompts and even weights). A distinct paradigm in §7 — not a graph runtime (§7.1) or a multi-agent crew (§7.2), but a declarative, self-optimizing pipeline framework.

## 2. Quotes (verbatim — attributed)
- Repo: *"Programming—not prompting—Foundation Models."*

## 3. Features
- **Signatures / Modules / Optimizers** — declarative, composable, tunable.
- **Self-improving pipelines** with assertions/constraints.
- Scales from classifiers to **RAG** and **agent loops**.
- **Provider-agnostic**, MIT.

## 4. Choose / avoid
- **Choose it when** you want to systematically build and optimize LM pipelines/agents rather than hand-tune prompts.
- **Avoid when** you want an explicit graph/state runtime (§7.1) or a role-based crew (§7.2).
- Related: its optimizers pair naturally with eval (§11).

## 5. Sources
- https://github.com/stanfordnlp/dspy (GitHub API: 36,385 ⭐, MIT, Python, created 2023-01) · https://dspy.ai
- Discovery add (2026-07-26); satisfies the free/no-credit-card standard (open-source).

_Last verified: 2026-07-26 · verdict: 🟢 active · Researcher: Claude_
