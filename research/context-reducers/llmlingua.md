---
name: LLMLingua
slug: llmlingua
category: context-reducers
subtype: "6.1 prompt compressors"
repo: https://github.com/microsoft/LLMLingua
site: https://llmlingua.com
maker: Microsoft
license_claimed: MIT
license_detected: MIT
stars: 6585
created: "2023-07"
language: Python
maturity: Established
status: active
local: true
one_liner: "Microsoft prompt-compression toolkit: a small LM removes non-essential tokens, compressing prompts + KV-cache up to 20x with minimal loss (LLMLingua / LongLLMLingua / LLMLingua-2)."
tagline_quote: "identify and remove non-essential tokens in prompts."
features:
  - "Up to 20x prompt compression with minimal performance loss"
  - "LongLLMLingua — fixes lost-in-the-middle for long context (+21.4% RAG at 1/4 tokens)"
  - "LLMLingua-2 — task-agnostic, GPT-4-distilled, 3-6x faster"
  - "KV-cache compression (inference speed-up)"
  - "Use cases: RAG, long-context, chain-of-thought, code, meetings"
choose_when: "You want to cut token cost/latency on long prompts, RAG contexts, or CoT where some redundancy is safe to drop."
avoid_when: "Every token is load-bearing (exact code, legal text), or you want lossless selection (use a packer)."
hands_on: docs-only
last_verified: "2026-08-20"
---
# LLMLingua — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Context reducers → 6.1 prompt compressor (lossy) |
| Repo | https://github.com/microsoft/LLMLingua · llmlingua.com |
| Maker | **Microsoft** |
| License | **MIT** / MIT |
| ⭐ / created | 6,585 · 2023-07-07 · Python · EMNLP'23 / ACL'24 |
| Method | small LM (GPT2-small / LLaMA) scores token perplexity → removes low-information tokens |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
Prompt (and KV-cache) compression: it *"utilizes a compact, well-trained language model to identify and remove non-essential tokens,"* achieving up to **20x** compression with minimal performance loss.

## 2. Quotes (verbatim, from docs — attributed)
- TL;DR: *"identify and remove non-essential tokens in prompts."*
- Overview: *"compress prompts by up to 20x, enhancing the utility."*
- Method: *"utilizes a compact, well-trained language model… to identify and remove non-essential tokens."*
- LLMLingua-2: *"a small-size yet powerful prompt compression method."*

## 3. The family
1. **LLMLingua** (EMNLP 2023) — base coarse-to-fine compression.
2. **LongLLMLingua** (ACL 2024) — addresses "lost in the middle" for long context; +21.4% RAG at 1/4 tokens.
3. **LLMLingua-2** (ACL 2024 Findings) — task-agnostic, data distilled from GPT-4, 3–6x faster.

## 4. Features
- Up to **20x** prompt compression, minimal loss.
- KV-cache compression (inference speed-up).
- Use cases: RAG, long-context, chain-of-thought, code, meetings.

## 5. What it is NOT / limitations
- **Lossy** — it drops tokens; validate on your task (can remove something load-bearing).
- Not a packer/retriever (compresses existing text).
- Adds a small compressor-model dependency; tune the ratio per task.

## 6. Roadmap
- **Was:** LLMLingua (EMNLP 2023, Microsoft); LongLLMLingua + LLMLingua-2 (ACL 2024).
- **Now (2026):** ⭐6.6k; MIT; the reference prompt-compression toolkit.
- **Ahead:** faster/task-agnostic compression; RAG-stack integration.

## 7. Positioning
- **LLMLingua** — the reference prompt compressor (lossy, up to 20x).
- vs packers (Repomix/gitingest — lossless selection), Context7 (JIT docs, fights staleness).

## 8. Hands-on
`docs-only` (2026-08-20). **TODO:** `pip install llmlingua`; compress a long RAG prompt with LLMLingua-2; measure tokens + answer quality.

## 9. Sources
- https://github.com/microsoft/LLMLingua (README) · llmlingua.com · EMNLP'23 / ACL'24 papers

_Last updated: 2026-08-20 · Researcher: Claude_
