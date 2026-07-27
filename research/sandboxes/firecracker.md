---
name: Firecracker
slug: firecracker
category: sandboxes
subtype: "10.2 isolation primitive (microVM)"
repo: https://github.com/firecracker-microvm/firecracker
site: https://firecracker-microvm.github.io
maker: AWS
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 35563
created: "2017-10"
language: Rust
maturity: Prominent
status: active
local: true
one_liner: "AWS's open-source microVM monitor (VMM) — the isolation primitive powering AWS Lambda + Fargate and underlying many agent sandboxes (E2B, etc.)."
tagline_quote: "Secure and fast microVMs for serverless computing."
features:
  - "microVMs (KVM-based) — hardware-virtualization isolation at container-like speed/density"
  - "~125ms boot; minimal device model (reduced attack surface); jailer for extra containment"
  - "high density (thousands of microVMs per host)"
choose_when: "You're building the sandbox layer yourself and want proven microVM isolation."
avoid_when: "You want a ready SDK/hosted sandbox (use E2B/Daytona) or run outside Linux/KVM."
hands_on: docs-only
last_verified: "2026-07-20"
---
# Firecracker — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Sandboxes → 10.2 isolation primitive (microVM) |
| Repo / site | https://github.com/firecracker-microvm/firecracker · firecracker-microvm.github.io |
| Maker | **AWS** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 35,563 · 2017-10 · Rust |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Secure and fast microVMs for serverless computing." AWS's open-source microVM monitor (VMM) — the isolation primitive powering AWS Lambda + Fargate and underlying many agent sandboxes (E2B, etc.).

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Secure and fast microVMs for serverless computing."*

## 3. Features
- **microVMs** (KVM-based) — hardware-virtualization isolation at container-like speed/density.
- ~125ms boot; minimal device model (reduced attack surface); jailer for extra containment.
- High density (thousands of microVMs per host).

## 4. What it is NOT / limitations
- A low-level VMM, not an agent SDK (most builders use it via E2B/Daytona).
- Linux / KVM only.

## 5. Roadmap
- **Was:** open-sourced by AWS (2018); powers Lambda/Fargate.
- **Now (2026):** ⭐35k; the standard microVM primitive.
- **Ahead:** continued security/perf; ecosystem tooling.

## 6. Positioning
- **Firecracker** — the proven microVM isolation primitive to build your own sandbox layer.
- vs gVisor (user-space kernel), E2B/Daytona (hosted sandboxes on top), microsandbox (local runtime).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** boot a Firecracker microVM with the jailer; run untrusted code inside.

## 8. Sources
- https://github.com/firecracker-microvm/firecracker (README)

_Last updated: 2026-07-20 · Researcher: Claude_
