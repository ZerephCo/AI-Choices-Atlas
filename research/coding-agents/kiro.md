---
name: Kiro
slug: kiro
category: coding-agents
subtype: "1.2 IDE / editor agents"
repo: https://github.com/kirodotdev/Kiro
site: https://kiro.dev
maker: AWS (Amazon)
license_claimed: Proprietary
license_detected: Proprietary
stars: 4195
created: "2025-06"
language: null
maturity: Established
status: active
local: false
one_liner: "AWS's proprietary agentic IDE (Code OSS base) that makes specs the unit of work (requirements -> design -> tasks) with agent hooks and steering files."
tagline_quote: "Move beyond AI coding to agentic engineering."
features:
  - "Spec-driven development: requirements -> design -> tasks"
  - "Agent Hooks: run agent actions on events (save/commit)"
  - "Steering files encode project conventions"
  - "MCP support; supervised + autopilot modes"
  - "Bedrock model routing (Claude Sonnet 4.5 / Opus 4.8 / Nova)"
  - "Code OSS base (VS Code-familiar)"
choose_when: "You want spec-driven, structured agentic engineering in a VS Code-like IDE, especially for AWS/Bedrock shops or Amazon Q Developer migrations."
avoid_when: "You need open-source or BYOK, or want lightweight autocomplete without spec overhead for tiny tasks."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Kiro — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Coding agents & hosts → IDE / editor agent (Code OSS base) — **spec-driven** |
| Site / repo | https://kiro.dev · github.com/kirodotdev/Kiro |
| Maker | **AWS (Amazon)** |
| License | **Proprietary** (closed source; built on Code OSS / VS Code base) |
| Timeline | launched Jul 2025 (preview) · **GA / international launch May 7, 2026** · **successor to Amazon Q Developer** (Q Dev ended for new signups May 15, 2026) |
| Model | **Amazon Bedrock** routing — Claude Sonnet 4.5 / Claude Opus 4.8 / Amazon Nova by task type (agent model selection) |
| Pricing | **Re-verified 2026-08-19:** KIRO FREE — $0, 50 credits, open-weight models + Claude Sonnet 4.5, **no credit card / no paid AWS account** (social login or AWS Builder ID); paid KIRO PRO $20/mo (1,000 credits) up to KIRO POWER $200/mo (10,000 credits) |
| Researched | 2026-08-19 · hands-on: **docs-only** |

## 1. What it is
"Move beyond AI coding to agentic engineering." AWS's agentic IDE (Code OSS base) that makes **specs the unit of work**: formalize requirements → design → tasks, then the agent implements against the spec. Adds agent hooks + steering files. Successor to Amazon Q Developer.

## 2. Quotes (verbatim, from docs — attributed)
- Headline (kiro.dev): *"Move beyond AI coding to agentic engineering."*
- Repo: *"Kiro is an agentic IDE that works alongside you from prototype to production."*

## 3. Features
- **Spec-driven development** — structured specs (requirements → design → tasks) as the primary artifact (vs ad-hoc prompting).
- **Agent Hooks** — automated triggers that run agent actions on events (e.g. on save/commit).
- **Steering files** — encode project conventions so the agent consistently follows standards.
- **MCP** support; supervised + autopilot modes; chat-first ("vibe") coding too.
- **Bedrock-backed model routing** — Claude Sonnet 4.5 / Opus 4.8 / Amazon Nova by task.
- Code OSS base (VS Code-familiar).

## 4. What it is NOT / limitations
- Not open-source (proprietary AWS).
- Not BYOK in the usual sense (Bedrock-managed model routing).
- Not just autocomplete (spec-first engineering; overhead for tiny tasks).
- AWS-centric; newer/GA-2026.
- Coding host ≠ merge authority.

## 5. Roadmap
- **Was:** launched by AWS (Jul 2025) as a spec-driven agentic IDE preview; positioned to supersede Amazon Q Developer.
- **Now (2026):** GA / international launch May 7, 2026; Amazon Q Developer ended for new signups (May 15, 2026) → Kiro is the successor; Bedrock model routing (Claude + Nova); specs/hooks/steering.
- **Ahead:** deeper spec-driven workflows; AWS/Bedrock ecosystem integration; enterprise.

## 6. Positioning
- **Kiro** — spec-driven, structured agentic engineering inside a VS Code-like IDE; best fit for AWS/Bedrock shops and Amazon Q Developer migrations.
- vs Cursor/Copilot (prompt-first IDEs), Cline (OSS BYOK), Zed (native editor).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** install; create a spec (requirements→design→tasks) for a small feature; add an agent hook + steering file.

## 8. Sources
- https://kiro.dev · github.com/kirodotdev/Kiro · aws.amazon.com/documentation-overview/kiro · forbes.com (launch), developersdigest.tech (Q Dev successor)

_Last updated: 2026-07-20 · Researcher: Claude_
