---
name: "OWASP Agent Memory Guard"
slug: owasp-agent-memory-guard
category: memory
subtype: "4.4 Memory security & governance"
repo: https://github.com/OWASP/www-project-agent-memory-guard
site: https://owasp.org/www-project-agent-memory-guard
maker: "OWASP Foundation"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 140
created: "2026-02"
language: Python
maturity: Emerging
status: active
local: true
one_liner: "OWASP reference runtime defense for memory poisoning (ASI06) — a guard layer between agent and memory store, screening every read/write via detectors + YAML policy."
features:
  - "Detectors: prompt injection · secret/PII leakage · protected-key modification · size anomalies · self-reinforcement loops"
  - "YAML policy → actions: allow / redact / quarantine / block"
  - "SHA-256 baselines for immutable-key integrity; forensic snapshots + rollback"
  - "Structured SecurityEvent per decision; sub-100us latency"
  - "GuardedChatMessageHistory (LangChain); framework-agnostic MemoryStore protocol"
choose_when: "You want to enforce read/write policy and detect poisoning/exfiltration alongside any memory store, especially for writable memory exposed to untrusted input."
avoid_when: "You need a memory store itself (this is a guard layer over one) or a full agent-security suite."
hands_on: docs-only
last_verified: "2026-08-19"
---
# OWASP Agent Memory Guard — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`.

| | |
|---|---|
| Category / sub-type | Memory → **security & governance** (cross-cutting) |
| Repo / site | https://github.com/OWASP/www-project-agent-memory-guard · owasp.org/www-project-agent-memory-guard · PyPI `agent-memory-guard` |
| Maintainer | **OWASP Foundation** |
| License | Apache-2.0 / Apache-2.0 |
| ⭐ / created | 97 (www-project repo) · 2026-02 · release **v0.2.2 (2026-05-03)** |
| Standard | Reference impl for **OWASP Top 10 for Agentic Applications — ASI06 Memory Poisoning** |
| Stage | OWASP **Incubator → Lab** (v1.0.0 stable targeted Q4 2026) |
| Authority | **enforcement** (policy over memory read/write) |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
An open-source **runtime defense layer** that sits **between an agent and its memory store**, screening every read and write through a pipeline of detectors + a YAML policy. It is the official **OWASP reference implementation for ASI06 (Memory Poisoning)** — defending against corruption of persistent agent state (goals, context, permissions) that leads to misalignment, data exfiltration, and malicious behavior across sessions (LangChain, LlamaIndex, CrewAI, …).

## 2. Threats covered
- **Memory poisoning** (ASI06) — malicious content injected via user-controlled input, retrieved later and acted on → persistent attacker control.
- Prompt injection / context manipulation · identity hijacking · sensitive-data leakage · unauthorized (protected-)key modification · size/rapid/anomalous state changes · self-reinforcement loops.

## 3. Controls & capabilities
- **Detectors:** prompt injection · secret/PII leakage · protected-key modification · size anomalies · self-reinforcement loops.
- **YAML policy** → actions: **allow / redact / quarantine / block**.
- **SHA-256 baselines** for immutable-key integrity (flags out-of-band tampering).
- **Forensic snapshots + rollback** to known-good state; structured **SecurityEvent** per decision.
- **Integrations:** `GuardedChatMessageHistory` (LangChain); framework-agnostic **`MemoryStore` protocol** (any backend).
- **Performance:** sub-100 microsecond latency.
- **Planned (v0.3.0+):** Prometheus metrics; ML-based anomaly detection.

## 4. How you'd use it
Deploy as middleware to monitor agent memory operations, enforce read/write policy, and detect/mitigate tampering in production agentic systems — layered **on top of** any memory store from this section.

## 5. Roadmap
- **Was:** created as the OWASP reference implementation for ASI06 (Memory Poisoning), OWASP Top 10 for Agentic Applications (2026).
- **Now (2026):** Incubator→Lab; **v0.2.2** (May 2026); detectors + YAML policy + snapshots + LangChain integration.
- **Ahead:** v0.3.0 (Prometheus, ML anomaly detection); **v1.0.0 stable by Q4 2026**; recruiting a co-leader.

## 6. What it is NOT / limitations
- Not a memory store — a **guard layer** over one.
- Not a full agent-security suite (focused on memory poisoning / ASI06).
- Pre-1.0 (Incubator/Lab); detection efficacy should be **independently validated** before reliance (per the corpus's memory-security caveat).

## 7. Positioning
- **OWASP Agent Memory Guard** — the security/governance layer for *any* memory store; pairs with Mem0, Cognee, Redis Agent Memory, etc.
- Broader agent action-security → the atlas's **Governance & policy** category (Microsoft AGT, OpenLeash, Cordum…).

## 8. Hands-on
`docs-only` (2026-07-20). **TODO:** `pip install agent-memory-guard` + wrap a store with a YAML policy; test poisoning/injection detection + snapshot rollback.

## 9. Sources
- https://github.com/OWASP/www-project-agent-memory-guard · owasp.org/www-project-agent-memory-guard
- https://www.helpnetsecurity.com/2026/06/01/owasp-agent-memory-guard/ · PyPI `agent-memory-guard` v0.2.2

_Last updated: 2026-07-20 · Researcher: Claude_
