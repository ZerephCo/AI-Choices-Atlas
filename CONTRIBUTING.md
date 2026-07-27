# Contributing to AI-Choices-Atlas

Thanks for helping keep the atlas accurate and useful. It's a **decision atlas**, not a
leaderboard — the guiding rule is **no "winners."** Describe each tool honestly
(what it is · what it is NOT · when to choose it) and let readers decide.

## Inclusion standard (what belongs here)

A tool qualifies **only if a reader can actually try it at no cost and with no payment
barrier.** Concretely, at least one must be true:

1. **Open-source** (or source-available) — free to clone and run.
2. **Free to use** — a genuinely usable free tier / plan.
3. **Free trial without a credit card** — you can start a trial without entering card details.

If a tool is **proprietary and paywalled** — no free tier, and any trial requires a credit
card — it does **not** belong in the atlas. When you add or keep a proprietary tool, state
its free path and the date you checked (see the proprietary cards, e.g. Cursor / Windsurf /
Claude Code, for the format). Pricing changes — re-verify and update `last_verified`.

## Research standard (how to card a tool)

1. **Study the docs in depth.** Base the card on the project's own documentation and site —
   what it is, its features, its lifecycle/status, and its access model.
2. **Read the code when the docs are unclear or incomplete.** If a feature, limitation, or
   claim can't be pinned down from docs, inspect the repository (README, source, tests,
   releases) to get it right.
3. **Verify the facts.** Pull hard metadata (stars, license, language, created date, archived
   status) from the source (e.g. the GitHub API), not memory. Record `last_verified`.
4. **Quote sparingly and honestly.** Any quote is **verbatim, short (≤ ~15 words), and
   attributed.** Never paraphrase into quotation marks.
5. **Record how far you got.** Set `hands_on`: `run` (you executed it) · `inspected` (you
   read its code/output) · `docs-only` (docs + repo only).

## The data model

Every tool is one file: `research/<category>/<tool>.md`. The **YAML frontmatter** at the top
is the source of truth (the card); the body below is the deep-dive write-up. The browsable
`docs/` pages — including each category's **Compare** table and **Decide — pick by need**
matrix — are a rendering of that data, so you edit a tool in exactly one place. See
[`data/SCHEMA.md`](data/SCHEMA.md) for every field.

## Proposing a change

Open an issue or a pull request. Common changes:

- **Add a tool** — create `research/<category>/<tool>.md` with complete frontmatter and a
  short, sourced write-up. Confirm it meets the **inclusion standard** above and pick the
  right category from the [16 in the README](README.md).
- **Correct a fact** — edit the frontmatter (stars, license, status, maturity, access,
  `last_verified`) and note your source.
- **Flag a lifecycle change** — update `status` (`active` → `maintenance` / `sunsetting` /
  `defunct`, or `archived` repos → `defunct`) with evidence.
- **An unverifiable name** — if a tool has no canonical repo you can verify, add it to
  [`data/unresolved.yaml`](data/unresolved.yaml) rather than carding it.

## Ground rules

- **Meets the inclusion standard** — free / OSS / no-credit-card trial, or it's out.
- **No ranking or scoring.** There is deliberately no "best" field; use `choose_when` /
  `avoid_when` to guide decisions instead.
- **Facts are sourced and dated.** Set `last_verified` to when you checked.
- **Honesty over polish.** License nuances, dead repos, and thin evidence get flagged, not
  hidden.

A maintainer refreshes the browsable `docs/` pages from the data after changes are merged.

## License

By contributing, you agree your contributions are licensed under [**CC BY 4.0**](LICENSE)
(Creative Commons Attribution 4.0 International) — the same terms as the rest of the atlas.
