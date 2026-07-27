---
name: Daytona
slug: daytona
category: sandboxes
subtype: "10.1 hosted agent sandbox"
repo: https://github.com/daytonaio/daytona
site: https://daytona.io
maker: Daytona
license_claimed: null
license_detected: NOASSERTION
stars: 72234
created: "2024-02"
language: null
maturity: Prominent
status: active
local: partial
one_liner: "Secure, elastic infrastructure for running AI-generated code: sandboxes that spin up in under 90ms, each a full isolated computer, with snapshots for persistent state."
tagline_quote: "Secure and Elastic Infrastructure for Running AI-Generated Code."
features:
  - "sub-90ms sandbox start"
  - "complete isolation — dedicated kernel, filesystem, network stack, vCPU, RAM, disk"
  - "snapshots — stateful environment snapshots for persistence across sessions"
  - "SDKs (Python, TypeScript, Ruby, Go, Java) + REST API + CLI"
  - "self-host (open-source) or cloud (app.daytona.io)"
choose_when: "You want very fast, snapshot-capable sandboxes at scale (self-host or cloud)."
avoid_when: "You need a confirmed permissive license (verify) or just the microVM primitive."
hands_on: docs-only
last_verified: "2026-07-20"
---
# Daytona — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Sandboxes → 10.1 hosted agent sandbox |
| Repo / site | https://github.com/daytonaio/daytona · daytona.io |
| Maker | **Daytona** |
| License | ⚠️ **not surfaced by GitHub API** — a LICENSE file exists ("free to use, fork, build on"); **verify current terms** (Daytona has used AGPL-3.0) |
| ⭐ / created | 72,234 · 2024-02 |
| Isolation | full composable computer (dedicated kernel/fs/network/vCPU/RAM/disk) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Secure and elastic infrastructure runtime for AI-generated code execution and agent workflows." Sandboxes that spin up *"in under 90ms from code to execution,"* each a full isolated computer, with snapshots for persistent state.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Secure and Elastic Infrastructure for Running AI-Generated Code."*
- README: *"spinning up in under 90ms from code to execution."*

## 3. Features
- **Sub-90ms** sandbox start.
- **Complete isolation** — dedicated kernel, filesystem, network stack, vCPU, RAM, disk.
- **Snapshots** — stateful environment snapshots for persistence across sessions.
- **SDKs** (Python, TypeScript, Ruby, Go, Java) + REST API + CLI.
- Self-host (open-source) or cloud (app.daytona.io).

## 4. What it is NOT / limitations
- Infra runtime, not an agent.
- License not surfaced by GitHub — verify before enterprise reliance.

## 5. Roadmap
- **Was:** 2024-02 (originally a dev-environment manager) → pivoted to AI-code sandboxes.
- **Now (2026):** ⭐72k; sub-90ms sandboxes + snapshots; multi-language SDKs.
- **Ahead:** cloud platform depth.

## 6. Positioning
- **Daytona** — very fast, snapshot-capable sandboxes for running AI-generated code at scale.
- vs E2B (Firecracker SDK), microsandbox (local), Firecracker/gVisor (primitives).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** create a sandbox via the SDK; measure start time; snapshot + resume.

## 8. Sources
- https://github.com/daytonaio/daytona (README) · daytona.io

_Last updated: 2026-07-20 · Researcher: Claude_
