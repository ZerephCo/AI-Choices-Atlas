---
name: E2B
slug: e2b
category: sandboxes
subtype: "10.1 hosted agent sandbox"
repo: https://github.com/e2b-dev/E2B
site: https://e2b.dev
maker: E2B
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 13480
created: "2023-03"
language: "Python/JS SDK"
maturity: Prominent
status: active
local: partial
one_liner: "Open-source cloud sandboxes (Firecracker microVMs) purpose-built to run AI-generated code safely, with an SDK (Python/JS); the sandbox layer under many agent products."
tagline_quote: "Open-source, secure environment with real-world tools for enterprise-grade agents."
features:
  - "Firecracker-microVM sandboxes; fast start (~150ms); long-running"
  - "filesystem + processes + internet + real-world tools"
  - "SDK (Python/JS); code-interpreter template"
  - "self-host or cloud; widely used under agent products"
choose_when: "You want to run agent code safely in the cloud with a clean SDK."
avoid_when: "You need bare-metal local isolation (microsandbox) or just the microVM primitive (Firecracker)."
hands_on: docs-only
last_verified: "2026-08-20"
---
# E2B — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Sandboxes → 10.1 hosted agent sandbox |
| Repo / site | https://github.com/e2b-dev/E2B · e2b.dev |
| Maker | **E2B** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 13,480 · 2023-03 · Python/JS SDK |
| Isolation | Firecracker microVMs |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"Open-source, secure environment with real-world tools for enterprise-grade agents." Cloud **sandboxes** purpose-built to run AI-generated code safely (Firecracker microVMs), with an SDK.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Open-source, secure environment with real-world tools for enterprise-grade agents."*

## 3. Features
- **Firecracker-microVM** sandboxes; fast start (~150ms); long-running.
- Filesystem + processes + internet + real-world tools.
- **SDK** (Python/JS); code-interpreter template.
- Self-host or cloud; widely used under agent products.

## 4. What it is NOT / limitations
- Cloud-first (self-hostable) — not a bare-metal local runtime.
- An execution sandbox, not an agent.

## 5. Roadmap
- **Was:** 2023-03 (E2B).
- **Now (2026):** ⭐13k; Firecracker sandboxes; SDK + hosted platform.
- **Ahead:** more templates; enterprise.

## 6. Positioning
- **E2B** — the go-to open-source cloud sandbox SDK for running agent code safely.
- vs Daytona (sub-90ms + snapshots), Firecracker (the microVM primitive), microsandbox (local), gVisor (container kernel).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** spin up an E2B sandbox from the SDK; run agent-generated Python; inspect isolation.

## 8. Sources
- https://github.com/e2b-dev/E2B (README) · e2b.dev

_Last updated: 2026-08-20 · Researcher: Claude_
