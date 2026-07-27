---
name: Cordum
slug: cordum
category: action-governance
subtype: "8.2 action firewall"
repo: https://github.com/cordum-io/cordum
site: null
maker: Cordum
license_claimed: BSL-1.1
license_detected: NOASSERTION
stars: 491
created: "2026-01"
language: Go
maturity: Emerging
status: active
local: true
one_liner: "The action firewall for AI agents. Enforce policy and human approval before risky tool calls, shell commands, workflows, and production changes, with auditable evidence."
tagline_quote: "The action firewall for AI agents."
features:
  - "Pre-execution policy enforcement + human approval on risky actions"
  - "Covers tool calls, shell commands, workflows, production changes"
  - "Auditable evidence; central Go control plane"
choose_when: "You want a pre-execution action firewall with human approval and auditable evidence in front of an agent's shell/tool calls."
avoid_when: "BSL-1.1 (source-available, non-OSI) licensing is a blocker, or you need a mature, proven control plane."
hands_on: docs-only
last_verified: "2026-07-20"
---
# Cordum — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Action governance → 8.2 action firewall (control plane) |
| Repo | https://github.com/cordum-io/cordum |
| Maker | **Cordum** |
| License | **BSL-1.1** (Business Source License — source-available, non-OSI) / GitHub-detected NOASSERTION |
| ⭐ / created | 491 · 2026-01 · Go |
| Researched | 2026-07-20 · hands-on: **docs-only** · corpus-verified (Doc 28 §12.8) |

## 1. What it is
"The action firewall for AI agents. Enforce policy and human approval before risky tool calls, shell commands, workflows, and production changes, with auditable evidence." A central Go control plane.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"The action firewall for AI agents."*
- Repo desc: *"Enforce policy and human approval before risky tool calls, shell commands, workflows, and production changes, with auditable evidence."*

## 3. Features
- Pre-execution **policy enforcement** + **human approval** on risky actions.
- Covers tool calls, shell commands, workflows, production changes.
- **Auditable evidence**; central Go control plane.

## 4. What it is NOT / limitations
- **BSL-1.1** license (source-available, not OSI; converts to open later) — check terms.
- Corpus note: defer/reject default; operating footprint to evaluate.

## 5. Roadmap
- **Was:** created 2026-01.
- **Now (2026):** ⭐491; action firewall + human approval + evidence.
- **Ahead:** maturity; license conversion.

## 6. Positioning
- **Cordum** — a pre-execution action firewall with human-approval + evidence.
- vs Veto/OpenLeash (kernels/sidecars), Agent Control (control plane), Microsoft AGT (toolkit).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** front an agent's shell/tool calls with Cordum; require approval on a prod change; inspect the evidence log.

## 8. Sources
- https://github.com/cordum-io/cordum (README) · ReviewedResearch.md §12.8

_Last updated: 2026-07-20 · Researcher: Claude_
