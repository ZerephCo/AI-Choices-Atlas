---
name: microsandbox
slug: microsandbox
category: sandboxes
subtype: "10.3 local / self-hosted microVM runtime"
repo: https://github.com/superradcompany/microsandbox
site: https://microsandbox.dev
maker: "Super Rad Company (microsandbox)"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 7798
created: "2024-10"
language: Rust
maturity: Established
status: active
local: true
one_liner: "A self-hosted microVM runtime for running untrusted/AI-generated code locally with VM-grade isolation but fast startup."
tagline_quote: "easy, fast and local-first microVM runtime"
features:
  - "local-first microVMs — VM-grade isolation, fast start, no cloud dependency"
  - "self-hosted (data stays on your infra)"
  - "SDKs; MCP server support"
choose_when: "You want self-hosted, local microVM isolation (data stays local)."
avoid_when: "You want managed cloud sandboxes (E2B/Daytona)."
hands_on: docs-only
last_verified: "2026-08-20"
---
# microsandbox — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Sandboxes → 10.3 local / self-hosted microVM runtime |
| Repo / site | https://github.com/superradcompany/microsandbox (moved from `microsandbox/microsandbox`; old URL redirects — re-verified 2026-08-20) · microsandbox.dev |
| Maker | **Super Rad Company** (superradcompany org) |
| License | **Apache-2.0** / Apache-2.0 |
| ⭐ / created | 7,798 · 2024-10 · Rust |
| Researched | 2026-08-20 · hands-on: **docs-only** |

## 1. What it is
"Easy, fast and local-first microVM runtime." A self-hosted microVM runtime for running untrusted/AI-generated code locally with VM-grade isolation but fast startup.

## 2. Quotes (verbatim — attributed)
- Repo desc: *"🧱 easy, fast and local-first microVM runtime."*

## 3. Features
- **Local-first microVMs** — VM-grade isolation, fast start, no cloud dependency.
- Self-hosted (data stays on your infra).
- SDKs; **MCP** server support.

## 4. What it is NOT / limitations
- Younger than the incumbent primitives (⭐7.8k, Established since mid-2026); self-managed (you run the infra).

## 5. Roadmap
- **Was:** created 2024-10.
- **Now (2026):** ⭐7.8k; local-first microVMs + MCP.
- **Ahead:** maturity; more SDKs.

## 6. Positioning
- **microsandbox** — self-hosted, local microVM isolation (data stays local).
- vs E2B/Daytona (managed cloud sandboxes), Firecracker/gVisor (primitives).

## 7. Hands-on
`docs-only` (2026-08-20). **TODO:** run microsandbox locally; execute untrusted code in a microVM; wire the MCP server.

## 8. Sources
- https://github.com/superradcompany/microsandbox (README; old org URL redirects) · microsandbox.dev

_Last updated: 2026-08-20 · Researcher: Claude_
