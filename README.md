# AI-Choices-Atlas

A living, browsable **decision atlas** for AI-engineering tooling. For each category it maps the tools worth knowing with **what it is · what it is NOT · when to choose it** — so you can decide based on your own needs.

> **No "winners".** Best depends on your situation. The atlas rates attributes, maturity, and status — it never crowns a category winner.

> **A curated map, not a census.** It aims to cover the credible options in each category, but it isn't exhaustive — see [Known gaps & contributions](#known-gaps--contributions).

> **Free to try, always.** Every tool here is open-source, free, or offers a trial with no credit card — the atlas's [access standard](#access-standard).

### 👉 Start here
- **[📚 Browse by topic](docs/README.md)** — one clean page per category, each with a **Compare** table and a **"Decide — pick by need"** matrix
- **[📋 Master list of every tool](docs/TOOLS.md)** — all 146 tools in one table (license · ⭐ · maturity · status · local? · hands-on)

---

## What's inside

**146 tools across 16 categories** of the AI-engineering stack (15 categories carry cards; §3 is a bridge — see the table). Every tool has a card (facts · features · what-it-is / what-it-is-NOT · roadmap · choose / avoid · limitations) plus a linked deep-research file with sources and verbatim quotes.

| # | Category | Tools |
|--:|---|--:|
| 1 | [Coding agents & hosts](docs/01-coding-agents.md) | 20 |
| 2 | [Orchestrators · cockpits · swarms](docs/02-orchestrators.md) | 21 |
| 3 | [Work & task truth (trackers)](docs/03-trackers.md) | bridge |
| 4 | [Memory](docs/04-memory.md) | 27 |
| 5 | [Loop factories](docs/05-loop-factories.md) | 13 |
| 6 | [Context reducers](docs/06-context-reducers.md) | 8 |
| 7 | [Agent runtimes / frameworks](docs/07-agent-runtimes.md) | 13 |
| 8 | [Action governance & policy](docs/08-action-governance.md) | 5 |
| 9 | [Proof-of-done / readiness gates](docs/09-proof-gates.md) | 4 |
| 10 | [Sandboxes · isolation · remote exec](docs/10-sandboxes.md) | 5 |
| 11 | [QA · evaluation · observability](docs/11-qa-eval.md) | 6 |
| 12 | [Model routing / gateways](docs/12-model-routing.md) | 5 |
| 13 | [Process · spec · skill packs](docs/13-process-packs.md) | 7 |
| 14 | [Protocols & adapters](docs/14-protocols.md) | 4 |
| 15 | [Security & CI hard gates](docs/15-security-ci.md) | 5 |
| 16 | [Cost / spend telemetry](docs/16-cost-telemetry.md) | 3 |

## Legend

- **Status:** 🟢 Active · ⚠️ Caution · 🧪 Preview · ⚠️ Maintenance · ⚰️ Sunsetting / Defunct · ⬛ Unresolved
- **Maturity:** Prominent (≥10k⭐) · Established (1k–10k) · Emerging (100–1k) · Preview (<100) · commercial
- **License:** shown as `claimed / GitHub-detected` — `NOASSERTION` = non-OSI or unrecognized by GitHub; `none` = no license declared (reuse rights not granted)
- **Local:** ✅ runs fully local · 🟡 partial · ☁️ hosted · `N/A` not applicable (a protocol/spec — its implementations decide) · `—` unknown
- **Hands-on:** how far each tool was verified — `run` (executed it) · `inspected` (read its code / output) · `docs-only` (docs + repo only). Most cards are `docs-only`; treat those as documentation-level, not tested.

## Access standard

**Every tool in this atlas is free to try — no paywall, no credit card to start.** A tool qualifies only if at least one is true: it's **open-source / source-available**, has a **genuinely free tier**, or offers a **free trial that needs no credit card**. Proprietary, paywalled tools with card-gated trials are deliberately excluded.

The proprietary tools that *are* included each have a verified free path (checked 2026-07):

| Tool | Free path | Credit card? |
|---|---|:--:|
| Cursor | Hobby free plan | No |
| Windsurf | Permanent free tier (unlimited Tab + monthly credits) | No |
| GitHub Copilot | Copilot Free (2k completions / 50 chats per month) | No |
| Kiro | Free tier via AWS Builder ID (no paid AWS account) | No |
| Claude Code | Free Claude.ai tier + ~$5 free API credits on signup | No |
| Amp (Sourcegraph) | Free ad-supported tier (no hard token caps) | No |
| OpenRouter | 28+ `:free` models, email / OAuth signup | No |

Pricing changes — these are re-verified over time (`last_verified` per card).

## Known gaps & contributions

This is a curated map, not a complete census. Tools that **fail the access standard** (no free tier and a card-gated trial) are deliberately excluded. Some qualifying tools simply **aren't carded yet** — e.g. Cody, Braintrust, and app-builders like bolt.new / v0 / Replit Agent (scope-adjacent). Corpus names with no verifiable canonical repo are listed honestly in [`data/unresolved.yaml`](data/unresolved.yaml).

Corrections and additions are welcome — see [`CONTRIBUTING.md`](CONTRIBUTING.md). To propose a tool, add or edit its `research/<category>/<tool>.md` frontmatter + write-up.

## How it's organized (data-first)

Each tool's data lives in the **YAML frontmatter** at the top of its `research/<category>/<tool>.md` file — the single source of truth (structured fields on top, the deep-dive write-up below). The browsable pages in `docs/` are a rendering of that data, so the same facts drive every view and there's one place to edit per tool.

```
research/<category>/<tool>.md   ← per-tool source (frontmatter + deep-dive body)
data/categories/*.yaml          ← per-category metadata (question, golden rule, sub-types)
data/unresolved.yaml            ← corpus names deliberately not carded (provenance)
docs/                           ← browsable pages (start here)
```

See [`data/SCHEMA.md`](data/SCHEMA.md) for the field spec.

## Provenance & honesty

Seeded from a web-verified corpus ([`ReviewedResearch.md`](ReviewedResearch.md), an audited expansion of [`InitialResearch.md`](InitialResearch.md)) and extended with fresh, sourced discovery. Lifecycle changes (sunsetting, archived, maintenance), license nuances, and unverifiable names are flagged rather than hidden — see [`data/unresolved.yaml`](data/unresolved.yaml). Facts last fully verified **2026-07**.

## License

Licensed under [**CC BY 4.0**](LICENSE) (Creative Commons Attribution 4.0 International). Share and adapt it for any purpose, including commercially — just give credit and indicate changes. The license covers this atlas's own writing, curation, and data; the tools it describes, and any third-party quotes, remain under their own terms.

> Suggested attribution: *"AI-Choices-Atlas" by Khubaeb (https://github.com/Khubaeb/AI-Choices-Atlas), licensed under CC BY 4.0.*
