---
name: "Zep"
slug: zep
category: memory
subtype: "4.3 Organizational / semantic memory"
repo: https://github.com/getzep/zep
site: https://getzep.com
maker: "Zep"
license_claimed: Apache-2.0
license_detected: Apache-2.0
stars: 4851
created: "2023-04"
language: Python
maturity: Established
status: caution
local: false
one_liner: "Enterprise agent-memory platform — temporal knowledge-graph memory (built on Graphiti) with compliance; the managed counterpart to OSS Graphiti."
features:
  - "Temporal graph memory (Graphiti engine); dual-timeline per edge + auto invalidation"
  - "Compliance: SOC 2 Type II · HIPAA (BAA) · GDPR · BYOC"
  - "Managed sub-200ms retrieval; Episode-credit billing; memory/retrieval/storage/users unmetered"
  - "MCP + Cloud API/SDKs; self-host path = Graphiti (not the deprecated Zep CE)"
choose_when: "You need enterprise compliance (SOC2/HIPAA/GDPR) + managed temporal memory and can budget per-Episode billing."
avoid_when: "You need fully local/free memory, or want OSS self-host (use Graphiti, not the deprecated Zep CE)."
hands_on: docs-only
last_verified: "2026-08-19"
---
# Zep — Deep Research Reference

> Full research backing the atlas card. See the browsable card under `docs/`. **Read alongside `graphiti.md`** — Zep is the managed platform on Graphiti's engine.

| | |
|---|---|
| Category / sub-type | Memory → organizational/semantic (temporal) — **managed / hosted platform** |
| OSS repo | https://github.com/getzep/zep — **Community Edition now legacy/unsupported** |
| OSS engine | **Graphiti** (`getzep/graphiti`) — where Zep's open-source effort now lives |
| Product | Zep Cloud (getzep.com) — enterprise agent memory |
| License | Apache-2.0 / Apache-2.0 (OSS repo) — but CE no longer maintained |
| ⭐ / created | 4,766 (OSS repo) · 2023-04-29 (pushed 2026-07-17) |
| Compliance | **SOC 2 Type II · HIPAA (BAA, Enterprise) · GDPR · BYOC** |
| Pricing (Cloud) | Free 10K credits/mo; **1 credit / 350 bytes** (Episode billing); memory/retrieval/storage/users unmetered |
| Authority | `suggestive` |
| Researched | 2026-07-20 · hands-on: **docs-only** |

## 1. What it is
The **commercial, compliance-ready agent-memory platform** built on Graphiti's temporal knowledge graph. Provides governed, low-latency context retrieval (sub-200ms at scale) for production agents. Marketed as "the fastest path to passing enterprise RFPs (SOC2/HIPAA)."

## 2. The key decision — Zep vs Graphiti
- **Graphiti** = the **open-source engine** (self-host; you run Neo4j/FalkorDB + LLM). Use this for OSS/self-host.
- **Zep Cloud** = the **managed product** on top (hosted, compliance, billing, BYOC). Use this for enterprise + compliance.
- **Zep Community Edition** (the old self-host server) = **deprecated**, moved to `legacy/`, no updates/support → do **not** start here; use Graphiti.

## 3. Architecture
Temporal knowledge graph (Graphiti engine). **Dual-timeline** per edge: when a fact became valid, when it stopped being valid, when Zep learned it, and when it learned it was no longer true. Automatic invalid-node detection. Governed low-latency retrieval at scale.

## 4. Features
- Temporal graph memory + invalidity detection (dual-timeline).
- Managed sub-200ms retrieval at scale.
- Compliance: SOC 2 Type II, HIPAA (BAA), GDPR; **BYOC** (bring your own cloud).
- Unmetered memory/retrieval/storage/users; Episode-based credit billing.
- MCP + Cloud API/SDKs.

## 5. Interfaces & deployment
Zep Cloud API + SDKs + MCP. Self-host path = **Graphiti** (not Zep CE). BYOC for regulated deployments.

## 6. Local/offline & dependencies
Zep Cloud is hosted (data leaves your infra unless BYOC). For local/offline/self-host, use Graphiti directly (needs graph DB + LLM). No free local Zep server going forward.

## 7. Roadmap
- **Was:** launched 2023 as an **OSS LLM memory server** (Zep Community Edition).
- **Now (2026):** OSS focus **pivoted entirely to Graphiti**; **CE no longer maintained** (legacy/); Zep = managed **Zep Cloud** (enterprise + compliance). Zep paper (arXiv:2501.13956) reports SOTA agent memory (beats MemGPT on DMR 94.8% vs 93.4%).
- **Ahead:** enterprise context infrastructure; Graphiti as OSS engine, Zep Cloud as governed product.

## 8. What it is NOT / limitations
- **Not** a maintained free self-host server (CE deprecated → use Graphiti).
- Zep Cloud is **paid + hosted**; Episode credit billing "climbs quickly" for document-heavy (full-PDF) uploads.
- Not a plain vector store; not a work/task tracker.
- Choosing "Zep" for self-host really means adopting Graphiti.

## 9. Positioning vs peers
- **Zep Cloud** — enterprise temporal memory + compliance (finance/medical/legal RFPs).
- **Graphiti** — the same engine, OSS/self-host, you operate it.
- vs Mem0 (framework-agnostic SDK), Cognee (graph ECL), Letta (stateful agents), LangMem (LangGraph-native).

## 10. Hands-on
`docs-only` (2026-07-20). OSS hands-on = see `graphiti.md`. Zep Cloud needs an account (not run).

## 11. Sources
- https://github.com/getzep/zep (README; CE legacy)
- https://blog.getzep.com/announcing-a-new-direction-for-zeps-open-source-strategy/
- https://help.getzep.com/zep-vs-graphiti · https://www.getzep.com/pricing/
- https://arxiv.org/abs/2501.13956 (Zep paper)

_Last updated: 2026-07-20 · Researcher: Claude_
