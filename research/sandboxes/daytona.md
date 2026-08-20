---
name: Daytona
slug: daytona
category: sandboxes
subtype: "10.1 hosted agent sandbox"
repo: https://github.com/daytonaio/daytona
site: https://daytona.io
maker: Daytona
license_claimed: "AGPL-3.0 (last OSS tag v0.190.0)"
license_detected: none
stars: 71959
created: "2024-02"
language: null
maturity: Prominent
status: caution
local: partial
one_liner: "Secure, elastic infrastructure for running AI-generated code: sub-90ms sandboxes with snapshots. ⚠️ The OSS repo is unmaintained since 2026-06 (core moved to a private codebase); the hosted product continues."
tagline_quote: "Secure and Elastic Infrastructure for Running AI-Generated Code."
features:
  - "sub-90ms sandbox start"
  - "complete isolation — dedicated kernel, filesystem, network stack, vCPU, RAM, disk"
  - "snapshots — stateful environment snapshots for persistence across sessions"
  - "SDKs (Python, TypeScript, Ruby, Go, Java) + REST API + CLI"
  - "⚠️ OSS repo frozen 2026-06: no further updates/fixes/releases; fork-and-build under AGPL-3.0 at tag v0.190.0 (no LICENSE at HEAD); cloud continues at app.daytona.io"
choose_when: "You want very fast, snapshot-capable hosted sandboxes at scale and accept a closed-core product (the OSS repo is frozen)."
avoid_when: "You need a maintained open-source self-host path (repo unmaintained since 2026-06; AGPL-3.0 only at the old tag) or just the microVM primitive."
hands_on: docs-only
last_verified: "2026-08-20"
---
# Daytona — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Sandboxes → 10.1 hosted agent sandbox |
| Repo / site | https://github.com/daytonaio/daytona · daytona.io |
| Maker | **Daytona** |
| License | **AGPL-3.0 at tag v0.190.0** (the README's LICENSE link target); **no LICENSE file at HEAD** → GitHub detects none. Verified by reading the tagged LICENSE 2026-08-20 |
| Lifecycle | ⚠️ **OSS repo unmaintained since 2026-06** — README: *"This repository is no longer maintained."* Core development moved to a private codebase; repo stays public, *"free to use, fork, and build on"* as-is, no support/warranty. Hosted product continues (daytona.io) |
| ⭐ / created | 71,959 · 2024-02 (re-verified 2026-08-20; pushed 2026-07-24) |
| Isolation | full composable computer (dedicated kernel/fs/network/vCPU/RAM/disk) |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"Secure and elastic infrastructure runtime for AI-generated code execution and agent workflows." Sandboxes that spin up *"in under 90ms from code to execution,"* each a full isolated computer, with snapshots for persistent state.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Secure and Elastic Infrastructure for Running AI-Generated Code."*
- README: *"spinning up in under 90ms from code to execution."*
- README notice (2026-06): *"This repository is no longer maintained."* · *"free to use, fork, and build on"*

## 3. Features
- **Sub-90ms** sandbox start.
- **Complete isolation** — dedicated kernel, filesystem, network stack, vCPU, RAM, disk.
- **Snapshots** — stateful environment snapshots for persistence across sessions.
- **SDKs** (Python, TypeScript, Ruby, Go, Java) + REST API + CLI.
- Cloud (app.daytona.io); the former open-source self-host path is frozen at v0.190.0 (AGPL-3.0), unmaintained.

## 4. What it is NOT / limitations
- Infra runtime, not an agent.
- ⚠️ **Not maintained open source any more**: as of 2026-06 the repo receives *"no further updates, fixes, or releases"*; core development is in a private codebase. Fork-and-build only, no support/warranty.
- No LICENSE at HEAD (AGPL-3.0 only at the v0.190.0 tag) — check reuse terms before enterprise reliance.

## 5. Roadmap
- **Was:** 2024-02 (originally a dev-environment manager) → pivoted to AI-code sandboxes; ~72k⭐ OSS.
- **Now (2026-08):** OSS repo frozen (2026-06, notice added; last push 2026-07-24 for the notice era); hosted product continues; "Daytona resources" pointed at the `github.com/daytona` org.
- **Ahead:** cloud platform depth (closed core).

## 6. Positioning
- **Daytona** — very fast, snapshot-capable sandboxes for running AI-generated code at scale.
- vs E2B (Firecracker SDK), microsandbox (local), Firecracker/gVisor (primitives).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** create a sandbox via the SDK; measure start time; snapshot + resume.

## 8. Sources
- https://github.com/daytonaio/daytona (README + unmaintained notice; LICENSE read at tag v0.190.0) · daytona.io

_Last updated: 2026-08-20 · Researcher: Claude_
