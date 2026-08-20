---
name: Veto
slug: veto
category: action-governance
subtype: "8.2 authorization kernel"
repo: https://github.com/PlawIO/veto
site: null
maker: PlawIO
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 14
created: "2026-01"
language: TypeScript
maturity: Preview
status: active
local: true
one_liner: "The authorization kernel for AI agents. Block, allow, or escalate agent tool calls with YAML rules — deterministic-first, LLM fallback."
tagline_quote: "The authorization kernel for AI agents."
features:
  - "Per-tool-call decisions: block / allow / escalate"
  - "YAML rules (deterministic-first); LLM fallback for ambiguous cases"
  - "Lightweight, embeddable in an agent"
choose_when: "You want a simple, deterministic-first authorization kernel (YAML + LLM fallback) to embed in an agent."
avoid_when: "You need a full control plane or firewall, or a proven tool — this is a very early kernel (⭐14, Preview)."
hands_on: docs-only
last_verified: "2026-08-20"
---
# Veto — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Action governance → 8.2 authorization kernel |
| Repo | https://github.com/PlawIO/veto |
| Maker | **PlawIO** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 14 · 2026-01 · TypeScript |
| Researched | 2026-08-20 · hands-on: **docs-only** · corpus-verified (Doc 28 §12.8) |

## 1. What it is
"The authorization kernel for AI agents. Block, allow, or escalate agent tool calls with YAML rules — deterministic-first, LLM fallback." A lightweight, embeddable authorization kernel.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"The authorization kernel for AI agents."*
- Repo desc: *"Block, allow, or escalate agent tool calls with YAML rules — deterministic-first, LLM fallback."*

## 3. Features
- Per-tool-call decisions: **block / allow / escalate**.
- **YAML rules** (deterministic-first); **LLM fallback** for ambiguous cases.
- Lightweight, embeddable in an agent.

## 4. What it is NOT / limitations
- Very early (⭐14) — Preview.
- A kernel, not a full control plane (Agent Control) or firewall (Cordum).

## 5. Roadmap
- **Was:** created 2026-01.
- **Now (2026):** ⭐14; deterministic-first YAML authorization kernel.
- **Ahead:** hardening; adoption.

## 6. Positioning
- **Veto** — a simple, deterministic-first authorization kernel (YAML + LLM fallback) you embed.
- vs OpenLeash (signed proofs), Cordum (firewall), Agent Control (control plane), Microsoft AGT (toolkit).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** write YAML rules to block a risky tool call + escalate an ambiguous one.

## 8. Sources
- https://github.com/PlawIO/veto (README) · ReviewedResearch.md §12.8

_Last updated: 2026-08-20 · Researcher: Claude_
