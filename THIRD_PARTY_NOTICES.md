# Third-party notices

This repository redistributes material from the following projects. Each
remains under its own upstream license; the required copyright and
permission notices are reproduced in full below. These components are not
covered by this repository's CC0 dedication or Apache-2.0 grant.

## Multiple Beaded Agents (MBA)

Applies to: `docs/mba/`, `docs/beads/`, `.agents/skills/mba/SKILL.md`, and
the `MBA RULES` block in `AGENTS.md`/`CLAUDE.md`.
Source: the public `v0.1.0` release,
https://github.com/Khubaeb/MultipleBeadedAgents/tree/v0.1.0
(commit `3091a451fdf78ca3f4b6a22356daea9ba43aecdf`) — the tracked copies in
this repository are taken from that release.

```
MIT License

Copyright (c) 2026 Khubaeb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Beads (bd)

Applies to: `.agents/skills/beads/` (the skill and its agent metadata,
including `agents/openai.yaml`), the generated `.claude/settings.json`
hooks file, and the generated `BEADS INTEGRATION` / `BEADS CODEX SETUP`
blocks in `AGENTS.md`/`CLAUDE.md` (all produced by `bd setup`).
Source: https://github.com/gastownhall/beads

```
MIT License

Copyright (c) 2025 Beads Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## npm dependencies

The build tooling declares npm dependencies (see `scripts/package.json`);
they are installed at build time and are not redistributed in this
repository. Each carries its own license.
