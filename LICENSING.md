# Licensing

AI-Choices-Atlas is stewarded by **Zereph**. This page explains which license
applies to which part of the repository. The license files themselves are the
unmodified official texts; everything project-specific lives here.

## Content and data — CC0 1.0 ([LICENSE](LICENSE))

The project-authored atlas content and data are dedicated to the public
domain under CC0 1.0 Universal:

- `data/` — category metadata, unresolved-name provenance, the schema
- `research/` — per-tool cards and deep-research write-ups
- `docs/` — the generated documentation pages, **except** `docs/mba/` and
  `docs/beads/` (third-party; see below)
- `README.md`, `CONTRIBUTING.md`, `HANDOFF.md`, `LICENSING.md`,
  `TRADEMARKS.md`, `InitialResearch.md`, `ReviewedResearch.md`
- the project-authored prose of `AGENTS.md` and `CLAUDE.md`

Use it for anything, commercially or not, with no permission and no credit
required. Credit is appreciated. Note that CC0 does not waive trademark or
patent rights (CC0 §4(a)); see [TRADEMARKS.md](TRADEMARKS.md).

## Software — Apache 2.0 ([LICENSE-APACHE](LICENSE-APACHE))

The project-owned software and repository configuration are licensed under the
Apache License, Version 2.0, which includes an express patent grant (its §3):

- `scripts/` — the docs generator, data validator, and their tests
- `.github/` — CI workflows
- `.gitignore` and `.gitattributes` — project-owned repository configuration

## Not covered by either grant

- **Third-party components** redistributed in this repository keep their own
  upstream terms — see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for
  the complete reproduced notices (`docs/mba/`, `docs/beads/`,
  `.agents/skills/`, `.claude/settings.json`, and the generated blocks in
  `AGENTS.md`/`CLAUDE.md`).
- **The tools the atlas describes** and any short attributed quotes
  reproduced in research files remain under their own terms.
- **Names and trademarks** — see [TRADEMARKS.md](TRADEMARKS.md).

## Prior grant

Revisions of this repository published before this licensing change were
offered under the Creative Commons Attribution 4.0 International license
(CC BY 4.0). That license is irrevocable for the revisions it was applied
to; the terms above apply from this revision forward.
