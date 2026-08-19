# Atlas data model (single source of truth)

This atlas is **data-first**: the per-tool and per-category data below are the source of
truth, and the browsable `docs/` pages are a rendering of it — so a tool is described in
**one** place and every view stays in sync.

## 1. Per-tool source: YAML frontmatter in `research/<category>/<tool>.md`

Each deep-research file carries a YAML frontmatter block above its body. The
**frontmatter is the card** (structured, queryable); the **body is the deep dive**
(how-it-works, quotes, sources).

```yaml
---
name: CodeBurn                      # display name
slug: codeburn                      # kebab-case id (unique)
category: cost-telemetry            # matches a data/categories slug
subtype: "16.1 spend telemetry"     # sub-type label (matches a category subtype id)
repo: https://github.com/AgentSeal/codeburn
site: null                          # homepage/docs if distinct from repo (else null)
maker: AgentSeal
license_claimed: MIT                # what the project states
license_detected: MIT               # GitHub SPDX (MIT | Apache-2.0 | NOASSERTION | none | ...)
stars: 8772                         # integer, or null for non-repo/commercial
created: "2026-04"                  # YYYY-MM
language: TypeScript                # primary language (or null)
maturity: Established               # Prominent >=10k | Established 1k-10k | Emerging 100-1k | Preview <100 | commercial
status: active                      # active | caution | preview | maintenance | sunsetting | defunct | unresolved
local: true                         # true | false | partial | null (see "Local" below)
one_liner: "…"                      # <= ~200 chars; the card headline (plain text)
tagline_quote: "…"                  # short verbatim attributed quote (optional)
features:                           # bullet list (each <= ~120 chars)
  - "…"
choose_when: "…"                    # one sentence
avoid_when: "…"                     # one sentence
cross_links: ["§6", "§16.2"]        # related categories (optional)
hands_on: docs-only                 # run | inspected | docs-only
last_verified: "2026-07-20"
---
# CodeBurn — Deep Research Reference
… existing body (how it works · quotes · sources) …
```

**Status → badge:** `active`→🟢 Active · `caution`→⚠️ · `preview`→🧪 Preview ·
`maintenance`→⚠️ Maintenance · `sunsetting`→⚰️ Sunsetting · `defunct`→⚰️ Defunct ·
`unresolved`→⬛ Unresolved.

**Local:** `true` → ✅ runs fully local (no data leaves) · `false` → ☁️ hosted ·
`partial` → 🟡 mixed · **`null` → `N/A`** — the field does not apply, e.g. a protocol or
specification, where its *implementations* decide (see `research/protocols/*`). An **absent**
field renders `—` (unknown), so write `null` explicitly when "not applicable" is the intent.

**Hands-on:** `run` (executed) · `inspected` (read code / output) · `docs-only`
(docs + repo only) — how far the tool was actually verified. Most cards are `docs-only`:
that is deliberate and honest. Only raise it to `inspected`/`run` if someone actually did.

**No "winners":** there is deliberately no ranking/score field. Attributes and filters only.

## 2. Per-category metadata: `data/categories/<NN>-<slug>.yaml`

```yaml
number: 16
slug: cost-telemetry
title: "Cost / spend telemetry"
question: "how much is all this actually costing — and can you cut it?"
golden_rule: "…"
status: complete                    # complete | in-progress | planned | bridge
subtypes:
  - id: "16.1"
    title: "Spend telemetry"
    what: "track token usage + cost across tools/sessions"
  - id: "16.2"
    title: "Token reduction (cost optimization)"
    what: "cut token spend structurally"
notes: null                         # optional caveats
see_also:                           # bridge categories only (no tools of their own)
  - text: "…"
    page: "04-memory.md"
```

Tool → category → subtype linkage is by `category` + `subtype` id. Within a category,
tools are ordered by subtype id, then stars descending.

## 3. Unresolved / watch entries: `data/unresolved.yaml`

Honestly-unresolved names (no canonical repo verified) and watch-list items live here,
not as tool files — e.g. Nexo, CatchMe (§4 Memory), the §5 loop-factory tail, §8 watch list.

## 4. Field contract

Required per tool: `name`, `slug`, `category`, `subtype`, `repo` (or `site` for
commercial / site-only), `license_detected`, `maturity`, `status`, `one_liner`,
`choose_when`, `avoid_when`, `hands_on`, `last_verified`, and an explicit `local`
(`true` | `false` | `"partial"` | `null` — write the `null`, don't omit the key).
`subtype` must reference one of the category's declared subtype ids (e.g. `"7.2 …"`).
Everything else is optional but recommended. The contract is enforced by
`scripts/validate-data.mjs` (`npm run validate:data`), which also checks field
types and array shapes (including optional fields, subtype `id`/`title`/`what`,
and `see_also` entries), kebab-case slugs, slug uniqueness, category references,
subtype-id references, duplicate category slugs/numbers/subtype ids, real
calendar values in `created`/`last_verified`, and each category's required
`status` (one of the values declared in §2) — but never a fixed tool or
category count, so new entries are always addable. The `docs/`
pages are derived from these fields, so keeping them accurate keeps every view
accurate.
