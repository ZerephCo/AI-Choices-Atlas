# Mac Handoff — AI-Choices-Atlas

This file is the source of truth for continuing this project on a fresh
machine (written for a MacBook Pro; every command is macOS/Linux `bash`).
Everything needed is in the canonical public repository and its Beads/Dolt
data — nothing depends on any previous machine.

## Canonical repository and current state

- **Repository:** https://github.com/ZerephCo/AI-Choices-Atlas (branch `main`).
- **Source state:** `main` carries the portability/split-licensing repair
  ("chore: make Atlas portable and adopt split licensing"): the tracked
  portable set (instruction files, MBA v0.1.0 managed content, Beads setup
  outputs, docs tooling under `scripts/`, CI), CC0-1.0 content + Apache-2.0
  software licensing, and a docs generator that fails closed on invalid data.
- **Beads state:** one merged issue database, synchronized over the Dolt wire
  protocol (`bd dolt push/pull`, stored under `refs/dolt/data` on the Git
  remote). It contains two id families: `aca-*` (the completed Windows→Mac
  handoff work) and `AI-Choices-Atlas-*` (the Zereph modernization plan).
  `.beads/` itself is machine-local and Git-ignored — it is never tracked.
- **Continuation Bead:** `AI-Choices-Atlas-ddf.3` — the epic that re-verifies
  all 146 Atlas cards in five bounded waves (`.3.1`–`.3.5`), under parent
  `AI-Choices-Atlas-ddf`.

## Prerequisites

| Tool | Version | Notes |
|---|---|---|
| Git | any recent | with access to the repository above |
| Node.js | **20+** | for `scripts/` (generator, validator, tests) |
| Python | **3.10+** | MBA v0.1.0 requires Python `>=3.10`; a qualifying `python3` must be on `PATH` — current macOS does not guarantee one; install it first if missing |
| bd (Beads) | **exactly 1.0.4** | the validated set per `docs/beads/capabilities.md` — verify with `bd version` and do **not** proceed on a mismatch (see the next section) |

## If bd is missing or the wrong version

Stop — do not improvise an install, and obtain the user's approval first.
Unpinned package channels (for example a plain `brew install`) may serve a
version other than 1.0.4. With approval:

1. Download the macOS asset for this machine's architecture from the
   official v1.0.4 release,
   https://github.com/gastownhall/beads/releases/tag/v1.0.4:
   `beads_1.0.4_darwin_arm64.tar.gz` (Apple silicon) or
   `beads_1.0.4_darwin_amd64.tar.gz` (Intel).
2. Verify the download against the `checksums.txt` published in that same
   release before unpacking anything, checking **only the selected asset**
   so absent other-platform files cannot fail the check:

   ```bash
   ASSET=beads_1.0.4_darwin_arm64.tar.gz   # the asset you downloaded in step 1
   grep "$ASSET" checksums.txt | shasum -a 256 -c -
   ```
3. Unpack, put `bd` on `PATH`, and re-run `bd version` — it must print
   1.0.4 before you continue.

## Fresh-clone bootstrap

```bash
git clone https://github.com/ZerephCo/AI-Choices-Atlas.git
cd AI-Choices-Atlas

# Beads: exact-version gate, role, database, warning-free export config
bd version                      # must print 1.0.4
git config beads.role maintainer
bd bootstrap --yes
BD_EXPORT_AUTO=false bd config set-many export.auto=false export.git-add=false
bd dolt pull                    # non-force; issue data arrives over refs/dolt/data

# MBA: private venv, exact public v0.1.0, verified with the venv interpreter
python3 --version                          # must report 3.10+ (see Prerequisites)
python3 -m venv .mba-work/.venv            # private venv under Git-ignored .mba-work/
.mba-work/.venv/bin/python -m pip install git+https://github.com/Khubaeb/MultipleBeadedAgents.git@v0.1.0
.mba-work/.venv/bin/python -m mba_foundation --version   # must print exactly: mba-foundation 0.1.0
```

MBA installs only into `.mba-work/.venv`, a private venv created by the
qualifying `python3` inside the Git-ignored `.mba-work/` tree. This isolated
path is PEP 668-safe: current macOS/Homebrew Pythons are externally managed
and refuse a global `pip install`, and the venv needs no
`--break-system-packages` and never alters the system or Homebrew Python.
Every MBA command in this document runs through that same venv interpreter.

Do **not** run `mba_foundation init` on a fresh Atlas clone. This repository
already tracks the public MBA files it needs (the MBA skill,
`docs/mba/charter.md`, and `docs/beads/capabilities.md` are byte-identical to
the v0.1.0 package), while the private install manifest (`.mba/manifest.json`)
and the retired OpenCode launch files stay private and untracked — and public
v0.1.0 has no mode to adopt pre-existing tracked files, so `init` refuses with
conflicts. Runtime activation does not need that manifest: the authoritative
readiness gate is the private setup below followed by
`.mba-work/.venv/bin/python -m mba_runtime first-contact --cwd .` returning
ready.

Disabling `export.auto` and `export.git-add` keeps Beads from generating and
staging the Git-ignored `.beads/` JSONL export on routine commands; issue data
travels only over Dolt.

## Verification

```bash
bd show aca-handoff                 # handoff epic — expect it terminal (closed)
bd show AI-Choices-Atlas-ddf.3      # continuation epic — open, five wave children
bd dep cycles                       # expect no cycles

cd scripts
npm ci
npm run validate:data               # 146 tools, 16 categories, 0 errors
npm run build:docs                  # deterministic; fails closed on invalid data
npm run check:docs                  # generated docs match the data
npm test
npm audit                           # must report 0 vulnerabilities
cd ..
git status                          # must be clean — docs regenerate byte-identically
```

If `bd show aca-handoff` is not terminal yet, finish and close it before
starting continuation work.

## Private MBA setup (recreate — never copy from another machine)

`.mba-work/` is private and Git-ignored on every machine. Recreate the two
local records; do not transfer them:

```bash
mkdir -p .mba-work
printf 'local\n' > .mba-work/.mba-mode
```

Create `.mba-work/.ai-resources.json` by hand to match the team policy below.
It records launch routing only — never put account names, credentials, or
tokens in it, and never track it. Shape (fill in nothing secret; ids are
local nicknames):

```json
{
  "schema": 1,
  "resources": [
    { "id": "codex-host", "label": "Codex host session (Orchestrator and default Auditor)",
      "capabilities": ["auditor"],
      "launch": { "tool": "host-session", "model": "host-selected-codex", "variant": "xhigh" },
      "session_lifetime": "current_user_session" },
    { "id": "claude-fable", "label": "Claude app task on Fable 5 Extra (Doer)",
      "capabilities": ["doer", "auditor"],
      "launch": { "tool": "claude-desktop-app", "model": "fable-5", "variant": "extra" },
      "session_lifetime": "existing_user_designated_task_only" },
    { "id": "claude-opus-fallback", "label": "Claude app task on Opus 5 Extra (fallback Doer)",
      "capabilities": ["doer", "auditor"],
      "launch": { "tool": "claude-desktop-app", "model": "opus-5", "variant": "extra" },
      "session_lifetime": "existing_user_designated_task_only" }
  ],
  "teams": {
    "default":  { "pattern": "a", "doer": { "ai": "claude-fable", "hat": "Engineer and Researcher", "session_count": 1 },
                  "auditor": { "ai": "codex-host", "hat": "Quality Auditor", "session_count": 1 } },
    "fallback": { "pattern": "a", "doer": { "ai": "claude-opus-fallback", "hat": "Engineer and Researcher", "session_count": 1 },
                  "auditor": { "ai": "codex-host", "hat": "Quality Auditor", "session_count": 1 } },
    "critical": { "pattern": "a", "doer": { "ai": "claude-fable", "hat": "Engineer and Researcher", "session_count": 1 },
                  "auditor": { "ai": "codex-host", "hat": "Independent Quality Auditor", "session_count": 1 } }
  }
}
```

Then run the preflight — it must report the record present, zero questions,
and `default_team_ready: true` before any work is assigned:

```bash
.mba-work/.venv/bin/python -m mba_runtime first-contact --cwd .
```

## AI roles

- **Codex** is the Orchestrator and the default Auditor, using the native
  task coordination available on this host.
- **Claude** is the Doer, working only inside the existing user-designated
  `AI-Choices-Atlas` Claude app task, on **Fable 5 Extra** with **Opus 5
  Extra** as the only fallback.
- Never use the Claude CLI for Atlas work. Never create a new Claude task
  without the user's prior approval — reuse the designated task.
- The retired MiniMax/GLM/OpenCode provider routes stay prohibited (see the
  Atlas Team Override in `AGENTS.md`/`CLAUDE.md`).

## Usage and quota discipline

- Run **one bounded Claude Doer round at a time**; Codex audits each round.
  Claude additionally audits critical work only when Codex judges the usage
  justified.
- The launch receipts and worker artefacts under `.mba-work/<bead>/<session>/`
  form the local usage ledger — one receipt per round, written at launch.
- Check the Claude app's visible plan/usage indicator before and after
  material rounds; record any visible limit warning in the round's notes
  verbatim. Never invent token or quota figures — record only what the app
  actually displays.

## Continuation

Paste into a fresh Codex task on this machine:

> Read `HANDOFF.md` in ZerephCo/AI-Choices-Atlas and complete its bootstrap,
> verification, and private MBA setup on this machine. Then act as the MBA
> Orchestrator and continue the project at `bd show AI-Choices-Atlas-ddf.3`,
> driving its freshness waves per the charter.
