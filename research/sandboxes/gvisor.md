---
name: gVisor
slug: gvisor
category: sandboxes
subtype: "10.2 isolation primitive (container sandbox)"
repo: https://github.com/google/gvisor
site: https://gvisor.dev
maker: Google
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 18815
created: "2018-04"
language: Go
maturity: Prominent
status: active
local: true
one_liner: "Google's user-space kernel (runsc) that intercepts container syscalls, giving containers a strong isolation boundary (defense-in-depth) without a full VM."
tagline_quote: "Application Kernel for Containers."
features:
  - "user-space kernel — intercepts container syscalls in user space (strong boundary)"
  - "OCI runtime (runsc) — drop-in for Docker/Kubernetes"
  - "less overhead than a full VM; used by GKE Sandbox, Cloud Run"
choose_when: "You want container-level syscall isolation for untrusted/agent code without full VMs."
avoid_when: "You need full-VM isolation (Firecracker) or run outside Linux."
hands_on: docs-only
last_verified: "2026-07-20"
---
# gVisor — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Sandboxes → 10.2 isolation primitive (container sandbox) |
| Repo / site | https://github.com/google/gvisor · gvisor.dev |
| Maker | **Google** |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 18,815 · 2018-04 · Go |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
"Application Kernel for Containers." Google's user-space kernel (runsc) that intercepts syscalls, giving containers a strong isolation boundary (defense-in-depth) without a full VM.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"Application Kernel for Containers."*

## 3. Features
- **User-space kernel** — intercepts container syscalls in user space (strong boundary).
- **OCI runtime** (`runsc`) — drop-in for Docker/Kubernetes.
- Less overhead than a full VM; used by GKE Sandbox, Cloud Run.

## 4. What it is NOT / limitations
- Not a full VM (a kernel-boundary sandbox); Linux-focused.
- Some syscall-compatibility limits vs the host kernel.

## 5. Roadmap
- **Was:** open-sourced by Google (2018).
- **Now (2026):** ⭐18k; container syscall isolation; GKE Sandbox / Cloud Run.
- **Ahead:** compatibility + performance.

## 6. Positioning
- **gVisor** — container-level syscall isolation for untrusted/agent code without full VMs.
- vs Firecracker (full microVM — stronger isolation, more overhead), E2B/Daytona (hosted), microsandbox (local microVM).

## 7. Hands-on
`docs-only` (2026-07-20). **TODO:** run a container with `runsc`; execute untrusted code; observe the syscall boundary.

## 8. Sources
- https://github.com/google/gvisor (README) · gvisor.dev

_Last updated: 2026-07-20 · Researcher: Claude_
