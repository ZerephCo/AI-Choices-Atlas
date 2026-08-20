<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->

# 10. Sandboxes · isolation · remote exec

[← all categories](README.md) · [master tool list](TOOLS.md)

> **The question this answers:** *where does agent-generated code run without wrecking your machine?*

**Golden rule:** match isolation strength to trust. Untrusted agent code → a real boundary (microVM: Firecracker/E2B/Daytona/microsandbox) beats a container (gVisor beats plain Docker; plain Docker is weakest). Hosted sandboxes are fastest to adopt but see your code/data (review data policies); local/self-hosted keeps it on your infra. This is the enforcement under §1's approval modes — a sandbox contains what an agent is allowed to attempt.

## Sub-types
- **10.1 Hosted agent sandboxes** — managed cloud environments to run agent code (SDK-driven)
- **10.2 Isolation primitives** — the microVM / kernel tech others build on
- **10.3 Local / self-hosted runtimes** — run microVMs on your own infra

## Compare
| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |
|---|---|---|---|---|---|---|---|---|
| [Daytona](#daytona) | 10.1 hosted agent sandbox | AGPL-3.0 (last OSS tag v0.190.0) / none | 71,959 | Prominent | ⚠️ Caution | 🟡 partial | docs-only | Secure, elastic infrastructure for running AI-generated code: sub-90ms sandboxes with snapshots. ⚠️ The OSS repo is unmaintained since 2026-06 (core moved to a private codebase); the hosted product continues. |
| [E2B](#e2b) | 10.1 hosted agent sandbox | Apache-2.0 | 13,480 | Prominent | 🟢 Active | 🟡 partial | docs-only | Open-source cloud sandboxes (Firecracker microVMs) purpose-built to run AI-generated code safely, with an SDK (Python/JS); the sandbox layer under many agent products. |
| [gVisor](#gvisor) | 10.2 isolation primitive (container sandbox) | Apache-2.0 | 19,122 | Prominent | 🟢 Active | ✅ | docs-only | Google's user-space kernel (runsc) that intercepts container syscalls, giving containers a strong isolation boundary (defense-in-depth) without a full VM. |
| [Firecracker](#firecracker) | 10.2 isolation primitive (microVM) | Apache-2.0 | 36,158 | Prominent | 🟢 Active | ✅ | docs-only | AWS's open-source microVM monitor (VMM) — the isolation primitive powering AWS Lambda + Fargate and underlying many agent sandboxes (E2B, etc.). |
| [microsandbox](#microsandbox) | 10.3 local / self-hosted microVM runtime | Apache-2.0 | 7,798 | Established | 🟢 Active | ✅ | docs-only | A self-hosted microVM runtime for running untrusted/AI-generated code locally with VM-grade isolation but fast startup. |

## Decide — pick by need
| Tool | ✅ Choose it when | ⛔ Avoid when |
|---|---|---|
| [Daytona](#daytona) | You want very fast, snapshot-capable hosted sandboxes at scale and accept a closed-core product (the OSS repo is frozen). | You need a maintained open-source self-host path (repo unmaintained since 2026-06; AGPL-3.0 only at the old tag) or just the microVM primitive. |
| [E2B](#e2b) | You want to run agent code safely in the cloud with a clean SDK. | You need bare-metal local isolation (microsandbox) or just the microVM primitive (Firecracker). |
| [gVisor](#gvisor) | You want container-level syscall isolation for untrusted/agent code without full VMs. | You need full-VM isolation (Firecracker) or run outside Linux. |
| [Firecracker](#firecracker) | You're building the sandbox layer yourself and want proven microVM isolation. | You want a ready SDK/hosted sandbox (use E2B/Daytona) or run outside Linux/KVM. |
| [microsandbox](#microsandbox) | You want self-hosted, local microVM isolation (data stays local). | You want managed cloud sandboxes (E2B/Daytona). |

## Tools

<a id="daytona"></a>
### Daytona

**⚠️ Caution** — Secure, elastic infrastructure for running AI-generated code: sub-90ms sandboxes with snapshots. ⚠️ The OSS repo is unmaintained since 2026-06 (core moved to a private codebase); the hosted product continues.

| | |
|---|---|
| Repo | https://github.com/daytonaio/daytona |
| Maker | Daytona |
| Sub-type | 10.1 hosted agent sandbox |
| License | AGPL-3.0 (last OSS tag v0.190.0) / none |
| Maturity | Prominent · ⭐71,959 · created 2024-02 |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Secure and Elastic Infrastructure for Running AI-Generated Code."*

**Features**
- sub-90ms sandbox start
- complete isolation — dedicated kernel, filesystem, network stack, vCPU, RAM, disk
- snapshots — stateful environment snapshots for persistence across sessions
- SDKs (Python, TypeScript, Ruby, Go, Java) + REST API + CLI
- ⚠️ OSS repo frozen 2026-06: no further updates/fixes/releases; fork-and-build under AGPL-3.0 at tag v0.190.0 (no LICENSE at HEAD); cloud continues at app.daytona.io

**Choose it when** — You want very fast, snapshot-capable hosted sandboxes at scale and accept a closed-core product (the OSS repo is frozen).

**Avoid when** — You need a maintained open-source self-host path (repo unmaintained since 2026-06; AGPL-3.0 only at the old tag) or just the microVM primitive.

📄 **Deep research:** [`research/sandboxes/daytona.md`](../research/sandboxes/daytona.md)

---

<a id="e2b"></a>
### E2B

**🟢 Active** — Open-source cloud sandboxes (Firecracker microVMs) purpose-built to run AI-generated code safely, with an SDK (Python/JS); the sandbox layer under many agent products.

| | |
|---|---|
| Repo | https://github.com/e2b-dev/E2B |
| Maker | E2B |
| Sub-type | 10.1 hosted agent sandbox |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐13,480 · created 2023-03 · Python/JS SDK |
| Runs local | 🟡 partial |
| Hands-on | docs-only |

> *"Open-source, secure environment with real-world tools for enterprise-grade agents."*

**Features**
- Firecracker-microVM sandboxes; fast start (~150ms); long-running
- filesystem + processes + internet + real-world tools
- SDK (Python/JS); code-interpreter template
- self-host or cloud; widely used under agent products

**Choose it when** — You want to run agent code safely in the cloud with a clean SDK.

**Avoid when** — You need bare-metal local isolation (microsandbox) or just the microVM primitive (Firecracker).

📄 **Deep research:** [`research/sandboxes/e2b.md`](../research/sandboxes/e2b.md)

---

<a id="gvisor"></a>
### gVisor

**🟢 Active** — Google's user-space kernel (runsc) that intercepts container syscalls, giving containers a strong isolation boundary (defense-in-depth) without a full VM.

| | |
|---|---|
| Repo | https://github.com/google/gvisor |
| Maker | Google |
| Sub-type | 10.2 isolation primitive (container sandbox) |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐19,122 · created 2018-04 · Go |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Application Kernel for Containers."*

**Features**
- user-space kernel — intercepts container syscalls in user space (strong boundary)
- OCI runtime (runsc) — drop-in for Docker/Kubernetes
- less overhead than a full VM; used by GKE Sandbox, Cloud Run

**Choose it when** — You want container-level syscall isolation for untrusted/agent code without full VMs.

**Avoid when** — You need full-VM isolation (Firecracker) or run outside Linux.

📄 **Deep research:** [`research/sandboxes/gvisor.md`](../research/sandboxes/gvisor.md)

---

<a id="firecracker"></a>
### Firecracker

**🟢 Active** — AWS's open-source microVM monitor (VMM) — the isolation primitive powering AWS Lambda + Fargate and underlying many agent sandboxes (E2B, etc.).

| | |
|---|---|
| Repo | https://github.com/firecracker-microvm/firecracker |
| Maker | AWS |
| Sub-type | 10.2 isolation primitive (microVM) |
| License | Apache-2.0 |
| Maturity | Prominent · ⭐36,158 · created 2017-10 · Rust |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"Secure and fast microVMs for serverless computing."*

**Features**
- microVMs (KVM-based) — hardware-virtualization isolation at container-like speed/density
- ~125ms boot; minimal device model (reduced attack surface); jailer for extra containment
- high density (thousands of microVMs per host)

**Choose it when** — You're building the sandbox layer yourself and want proven microVM isolation.

**Avoid when** — You want a ready SDK/hosted sandbox (use E2B/Daytona) or run outside Linux/KVM.

📄 **Deep research:** [`research/sandboxes/firecracker.md`](../research/sandboxes/firecracker.md)

---

<a id="microsandbox"></a>
### microsandbox

**🟢 Active** — A self-hosted microVM runtime for running untrusted/AI-generated code locally with VM-grade isolation but fast startup.

| | |
|---|---|
| Repo | https://github.com/superradcompany/microsandbox |
| Maker | Super Rad Company (microsandbox) |
| Sub-type | 10.3 local / self-hosted microVM runtime |
| License | Apache-2.0 |
| Maturity | Established · ⭐7,798 · created 2024-10 · Rust |
| Runs local | ✅ |
| Hands-on | docs-only |

> *"easy, fast and local-first microVM runtime"*

**Features**
- local-first microVMs — VM-grade isolation, fast start, no cloud dependency
- self-hosted (data stays on your infra)
- SDKs; MCP server support

**Choose it when** — You want self-hosted, local microVM isolation (data stays local).

**Avoid when** — You want managed cloud sandboxes (E2B/Daytona).

📄 **Deep research:** [`research/sandboxes/microsandbox.md`](../research/sandboxes/microsandbox.md)

---

_Part of [AI-Choices-Atlas](https://github.com/ZerephCo/AI-Choices-Atlas), stewarded by Zereph · content dedicated to the public domain under [CC0 1.0](../LICENSE) — reuse freely, no credit required._
