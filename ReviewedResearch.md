# ReviewedResearch — Verified & Expanded Atlas

**Review of:** `InitialResearch.md` — a verbatim copy of PolyWright **Doc 28**, *"Current Agent Ecosystem And PolyWright Decision Study"* (repo `Khubaeb/PolyWright`, commit `345f98f`, dated **2026-07-13**).

| Field | Value |
|---|---|
| Reviewer | Claude (Opus 4.8) |
| Review date | 2026-07-20 |
| Method | Independent **web** verification — GitHub REST API (`api.github.com`), `github.com` HTML, `raw.githubusercontent.com`, official spec sites, and `git ls-remote` |
| Parallelism | Single sequential operator; **no sub-agents** |
| Scope | **Doc 28 only** (not 29/30, not the 00–27 corpus) |
| Depth | Exhaustive over every tool/entity/figure **named in Doc 28's text & tables**; Tier‑3 discovery nominations sampled (see §10) |
| Tracking | Bead `aca-b31` (beads v1.0.4); Waves 1–8 logged as structured comments |
| Verdict codes | ✅ Confirmed · 🟡 Partly-confirmed · ❌ Refuted · ⚠️ Not-found · ❓ Uncertain |

---

## 0. Executive Verification Verdict

1. **Doc 28 is exceptionally accurate.** Across **~105 independent web checks**, **0** named entities were refuted as non-existent. Every analyzed tool is a real, reachable repository.
2. **Identity discipline is perfect on the tested set:** 10/10 rename/transfer redirects in §12.6 resolve exactly as claimed.
3. **The document's own self-corrections (§19) are independently validated:** A2A `1.0.0` (not 0.3), MCP stable `2025-11-25`, SLSA `1.2`, Taskmaster MIT+Commons-Clause, and Vibe Kanban "sunsetting" all check out against live sources.
4. **The discovery corpus is genuine, not padded.** An adversarial sample of five deliberately odd-looking long-tail nominations (SwarmClaw, CodeBurn, thClaws, Gambit, Veto) were all real, relevant projects.
5. **Discrepancies are few and minor** (license auto-detection quirks, one repo relocation, one product-alias, one null description) — several already flagged by the doc itself. None disturbs a decision.
6. **The core decision is unchanged and, if anything, strengthened.** The governance/proof tools Doc 28 declines to rebuild are confirmed real *and* mostly immature (median a few dozen stars, created 2026), which reinforces "compose, don't build; keep the simple baseline."

**What this review adds:** a per-claim audit table, a discrepancy/correction ledger, **eight new evaluation dimensions** populated with live data, two matrices re-rendered with those dimensions, four new analytical angles, and **ten promoted tools** (E0 discovery → analyzed).

---

## 1. What `ReviewedResearch.md` adds over `InitialResearch.md`

| Addition | Where | Nature |
|---|---|---|
| Per-claim verification audit | §2 | 64 analyzed tools → exists/license/verdict, web-checked |
| Discrepancy & correction ledger | §3 | Every gap found + severity + fix |
| §19 self-correction validation | §4 | Doc's killed-claims independently re-verified |
| **8 new matrix dimensions** | §5 | ⭐stars, age, liveness, detected-license, owner-type, maturity-tier, verify-verdict, verify-recency |
| Governance cluster re-rendered | §6 | §14.4 + popularity/maturity |
| Outer-controller matrix re-rendered | §7 | §14.3 + popularity/maturity |
| **4 new analytical angles** | §8 | popularity↔maturity paradox · temporal drift · owner/bus-factor · license-detection gap |
| **10 promoted tools** | §9 | E0 nominations → analyzed, with a new *cost-telemetry* sub-layer |
| Coverage & honesty statement | §10 | exhaustive vs sampled, explicitly |

---

## 2. Verification Audit Table — the analyzed toolset

Every tool Doc 28 *analyzes* (i.e., names with a URL + capability/license claim), grouped by the doc's layer. `Doc lic` = license asserted by Doc 28; `GH lic` = SPDX license auto-detected by GitHub today.

### 2.1 Governance / policy / proof-gate / safety (§12.8, §13.4, §14.4)
| Tool | Repo | Ex | Doc lic | GH lic | ⭐ | Created | Verdict |
|---|---|:--:|---|---|--:|---|:--:|
| Microsoft AGT | microsoft/agent-governance-toolkit | ✅ | MIT | MIT | 4,865 | 2026-03 | ✅ |
| Agent Control | agentcontrol/agent-control | ✅ | Apache-2.0 | Apache-2.0 | 278 | 2026-01 | ✅ |
| Starfish | Azerax/Starfish | ✅ | Apache-2.0 | NOASSERTION | 2 | 2026-06 | 🟡 lic |
| OpenLeash | openleash/openleash | ✅ | Apache-2.0 | Apache-2.0 | 14 | 2026-02 | ✅ |
| Runcap | kirder24-code/ai-agent-manager | ✅ | — | MIT | 9 | 2026-05 | 🟡 alias |
| dxkit | vyuh-labs/dxkit | ✅ | — | MIT | 7 | 2026-04 | ✅ |
| OperatorBoard | projectblackboxllc/operatorboard | ✅ | MIT | MIT | 1 | 2026-04 | ✅ |
| Cordum | cordum-io/cordum | ✅ | BSL-1.1 | NOASSERTION* | 491 | 2026-01 | ✅ |
| OpenSigil | opensigil-ai/opensigil | ✅ | none | null | 1 | 2026-05 | ✅ |
| CodeSteward | Codesteward/codesteward | ✅ | Apache-2.0 | Apache-2.0 | 61 | 2026-07 | ✅ |
| AAS-1 | Kadikoy1/aas-1 | ✅ | none | null | 0 | 2026-05 | ✅ |
| ProofRail | ProofRail/proofrail | ✅ | Apache-2.0 | Apache-2.0 | 0 | 2026-06 | ✅ |
| OAGS | sekuire/oags | ✅ | Apache-2.0 | Apache-2.0 | 7 | 2026-02 | ✅ |
| ACS | Agent-Control-Standard/ACS | ✅ | repo MIT | MIT (fork) | 38 | 2026-04 | ✅ |
| agent-done-or-not | mohamedzhioua/agent-done-or-not | ✅ | — | MIT | 5 | 2026-06 | ✅ |
| DoneCheck | AtharvaMaik/donecheck | ✅ | — | MIT | 16 | 2026-06 | ✅ |
| CC Safety Net | kenryu42/cc-safety-net | ✅ | MIT | MIT | 1,452 | 2025-12 | ✅ |
| Pydantic AI Shields | vstorm-co/pydantic-ai-shields | ✅ | — | MIT | 82 | 2025-12 | ✅ |

`*` BSL/BUSL/Commons-Clause are not OSI-auto-detected, so GitHub reporting NOASSERTION is **consistent** with the doc's claim, not a contradiction.

### 2.2 Outer controllers / cockpits / swarms (§13.3, §14.3)
| Tool | Repo | Ex | Doc lic | GH lic | ⭐ | Created | Verdict |
|---|---|:--:|---|---|--:|---|:--:|
| Paperclip | paperclipai/paperclip | ✅ | MIT | MIT | 74,229 | 2026-03 | ✅ |
| Vibe Kanban | BloopAI/vibe-kanban | ✅ | Apache-2.0 | Apache-2.0 | 27,450 | 2025-06 | ✅ (sunset confirmed) |
| Symphony | openai/symphony | ✅ | Apache-2.0 | Apache-2.0 | 26,049 | 2026-02 | ✅ |
| AgentWrapper AO | AgentWrapper/agent-orchestrator | ✅ | Apache-2.0 | Apache-2.0 | 8,392 | 2026-02 | ✅ |
| Open Multi-Agent | open-multi-agent/open-multi-agent | ✅ | MIT | MIT | 6,620 | 2026-03 | ✅ |
| Agent Teams AI | 777genius/agent-teams-ai | ✅ | AGPL | AGPL-3.0 | 1,625 | 2026-02 | ✅ |
| Loki Mode | asklokesh/loki-mode | ✅ | BUSL-1.1 | NOASSERTION* | 1,023 | 2025-12 | ✅ |
| Fusion | Runfusion/Fusion | ✅ | — | MIT | 987 | 2026-04 | ✅ |
| Bernstein | sipyourdrink-ltd/bernstein | ✅ | Apache-2.0 | Apache-2.0 | 706 | 2026-03 | ✅ |
| Sortie | sortie-ai/sortie | ✅ | — | Apache-2.0 | 111 | 2026-03 | ✅ |
| Tutti | nutthouse/tutti | ✅ | — | MIT | 102 | 2026-03 | ✅ |
| MartinLoop | Keesan12/martin-loop | ✅ | — | Apache-2.0 | 39 | 2026-04 | ✅ |

### 2.3 Isolation / remote execution (§13.5)
| Tool | Repo | Ex | GH lic | ⭐ | Created | Verdict |
|---|---|:--:|---|--:|---|:--:|
| Firecracker | firecracker-microvm/firecracker | ✅ | Apache-2.0 | 35,558 | 2017-10 | ✅ |
| E2B | e2b-dev/E2B | ✅ | Apache-2.0 | 13,042 | 2023-03 | ✅ |
| OpenSandbox | opensandbox-group/OpenSandbox *(was alibaba/OpenSandbox)* | ✅ | Apache-2.0 | 12,062 | 2025-12 | 🟡 relocated |
| BoxLite | boxlite-ai/boxlite | ✅ | Apache-2.0 | 2,180 | 2025-12 | ✅ |
| Scion | GoogleCloudPlatform/scion | ✅ | Apache-2.0 | 1,634 | 2026-03 | ✅ (agent-sandbox confirmed via README) |
| AgentBox | madarco/agentbox | ✅ | MIT | 279 | 2026-05 | ✅ |
| AgentTier | agenttier/agenttier | ✅ | Apache-2.0 | 113 | 2026-05 | ✅ |

### 2.4 Work truth · memory · hosts (§13.2, §13.8, §13.6, §12.3)
| Tool | Repo | Ex | Doc lic | GH lic | ⭐ | Verdict |
|---|---|:--:|---|---|--:|:--:|
| Beads | gastownhall/beads | ✅ | MIT | MIT | 25,436 | ✅ |
| GasTown | gastownhall/gastown | ✅ | MIT | MIT | 17,104 | ✅ |
| Taskmaster | eyaltoledano/claude-task-master | ✅ | MIT+CommonsClause | NOASSERTION* | 27,870 | ✅ |
| Mem0 | mem0ai/mem0 | ✅ | — | Apache-2.0 | 61,238 | ✅ |
| Graphiti | getzep/graphiti | ✅ | — | Apache-2.0 | 28,940 | ✅ |
| GBrain | garrytan/gbrain | ✅ | — | MIT | 26,622 | ✅ |
| OWASP Agent Memory Guard | OWASP/www-project-agent-memory-guard | ✅ | — | Apache-2.0 | 97 | ✅ |
| gemini-cli | google-gemini/gemini-cli | ✅ | — | Apache-2.0 | 106,076 | ✅ |
| cline | cline/cline | ✅ | — | Apache-2.0 | 64,816 | ✅ |
| qwen-code | QwenLM/qwen-code | ✅ | — | Apache-2.0 | 26,133 | ✅ |

### 2.5 Runtimes / routing / security — famous context tools (existence via `git ls-remote`)
`langchain-ai/langgraph` · `crewAIInc/crewAI` · `microsoft/autogen` · `All-Hands-AI/OpenHands` · `block/goose` · `BerriAI/litellm` · `openai/openai-agents-python` · `pydantic/pydantic-ai` · `agno-agi/agno` · `OpenBMB/ChatDev` · `SWE-agent/SWE-agent` · `semgrep/semgrep` · `lm-sys/RouteLLM` · `google/adk-python` · `microsoft/semantic-kernel` — **all ✅ exist.**

---

## 3. Discrepancy & Correction Ledger

Every gap found in ~105 checks. None is decision-altering.

| # | Item | Doc 28 says | Verified reality | Severity | Recommended correction |
|--:|---|---|---|:--:|---|
| D1 | Starfish license | "Apache-2.0" | GitHub detects **NOASSERTION** (no clean root LICENSE at HEAD; README text claims Apache) | Low | Note "Apache-2.0 per README; not machine-detected" — matches doc's own §19 surface-disagreement flag |
| D2 | Runcap identity | product "Runcap" | repo is `kirder24-code/ai-agent-manager`; product name not in repo metadata | Low | Record `Runcap = kirder24-code/ai-agent-manager` as an alias |
| D3 | OpenSandbox owner | `alibaba/OpenSandbox` | canonical is now **`opensandbox-group/OpenSandbox`** (old path redirects) | Low | Update canonical identity (repo relocated org) |
| D4 | ACS | "repo MIT" | MIT **and the repo is a fork** | Info | Add fork provenance |
| D5 | Scion | agent sandbox (Docker/Podman/K8s) | ✅ confirmed via README; name collides with the SCION *networking* project | Info | Add disambiguation note vs `scionproto/scion` |
| D6 | Cordum / Loki / Taskmaster license | BSL-1.1 / BUSL-1.1 / MIT+Commons | GitHub shows NOASSERTION | None | Expected — non-OSI licenses aren't auto-detected; doc is correct |
| D7 | Headline ledger figures | 570 entities / 2,730 claims / 803 rows / 780 trees | Internal PolyWright artifacts — **not independently web-verifiable** | N/A | Label as internal-corpus (method sound; corpus proven genuine by sampling) |
| D8 | Release asset SHA-256 (§15.1) | exact SHA-256 for AO v0.10.3 & Agent Teams v2.7.0 Windows assets | Release **tags** `v0.10.3` and `v2.7.0` confirmed to exist; exact digests need binary download to hash | Low | Mark digest sub-claim "existence-confirmed, hash-unverified" |

---

## 4. §19 Killed-Claim Ledger — independent re-validation

Doc 28's most valuable self-corrections, re-checked against live sources:

| Doc §19 correction | Independent check | Verdict |
|---|---|:--:|
| A2A current line is **1.0**, not 0.3 | a2a-protocol.org: "Latest Released Version 1.0.0"; 0.3 under Previous; missing header ⇒ assumed 0.3 | ✅ |
| MCP stable is **2025-11-25** | modelcontextprotocol.io serves 2025-11-25 as published spec (schema/2025-11-25) | ✅ |
| SLSA is **1.2** | slsa.dev: "This is Version 1.2 of the SLSA specification" | ✅ |
| Taskmaster = MIT **+ Commons Clause** (not plain MIT) | GitHub license = NOASSERTION (Commons Clause overlay is non-OSI) | ✅ |
| Vibe Kanban is **sunsetting** | README verbatim: *"Vibe Kanban is sunsetting."* + shutdown blog link; repo frozen at pinned `4deb7ec` | ✅ |
| ComposioHQ/agent-orchestrator → **AgentWrapper** | live redirect resolves to AgentWrapper/agent-orchestrator | ✅ |

**All six re-checked self-corrections hold.** The doc did not overclaim its own corrections.

---

## 5. NEW Evaluation Dimensions (added to every matrix)

Doc 28 deliberately excluded popularity ("popularity does not prove quality," §6). That discipline is correct — but for a *decision atlas* the following orthogonal, factual dimensions add real signal without implying quality. All are populated with live 2026-07-20 data.

| # | New dimension | What it measures | Why it matters | Source |
|--:|---|---|---|---|
| N1 | ⭐ **Stars** | adoption/attention | bus-factor & community-support proxy (not quality) | GitHub API |
| N2 | **Repo age** (created) | how new | governance tools created 2026 ⇒ unproven longevity | GitHub API |
| N3 | **Liveness** (last push) | active vs frozen | catches sunset/abandonment (e.g., Vibe) | GitHub API |
| N4 | **Detected license** | machine-verifiable reuse rights | surfaces NOASSERTION gaps the doc's prose can hide | GitHub API |
| N5 | **Owner type** (org vs personal) | governance/continuity | personal-account single-maintainer = higher bus-factor risk | repo path |
| N6 | **Maturity tier** (derived) | stars+age+liveness bucket | separates "prominent" from "preview" at a glance | derived |
| N7 | **Verify verdict** | this review's result | ✅/🟡/❌ per claim | this review |
| N8 | **Verify recency** | as-of date | all = 2026-07-20 | this review |

**Maturity-tier rubric (N6):** `Prominent` ≥10k⭐ · `Established` 1k–10k⭐ · `Emerging` 100–1k⭐ · `Preview` <100⭐.

---

## 6. Expanded Governance-Overlay Matrix (Doc §14.4 + new dimensions)

Doc 28's fit bands are retained verbatim (Authorization/Fail-closed/HITL/Audit — see InitialResearch §14.4); this table **adds** the popularity/maturity/verification columns.

| Overlay | Doc authz band | ⭐ | Created | Detected license | Owner | Maturity (N6) | Verify |
|---|:--:|--:|---|---|---|---|:--:|
| Microsoft AGT | 4–5 | 4,865 | 2026-03 | MIT | org | Established | ✅ |
| Agent Control | 4–5 | 278 | 2026-01 | Apache-2.0 | org | Emerging | ✅ |
| Starfish | 4–5 | 2 | 2026-06 | NOASSERTION | personal | Preview | 🟡 |
| OpenLeash | 4–5 | 14 | 2026-02 | Apache-2.0 | org | Preview | ✅ |
| OperatorBoard | 3–4 | 1 | 2026-04 | MIT | org | Preview | ✅ |
| CC Safety Net | 2–3 | 1,452 | 2025-12 | MIT | personal | Established | ✅ |
| Pydantic AI Shields | 2–3 | 82 | 2025-12 | MIT | org | Preview | ✅ |
| *(+) Cordum* | n/a | 491 | 2026-01 | NOASSERTION (BSL) | org | Emerging | ✅ |
| *(+) Veto* | n/a | see §9 | — | — | org | see §9 | ✅ |

**Reading:** the two governance overlays the doc rates highest on authorization (AGT, OpenLeash, Starfish, Agent Control) span **4,865 → 2 stars** and were **all created in 2026**. The strongest *fit* candidates are the *least mature*. This is the single most important thing the new dimensions reveal (see §8.1).

---

## 7. Expanded Outer-Controller Matrix (Doc §14.3 + new dimensions)

| Option | Doc solo band | ⭐ | Created | License | Maturity | Verify | Note |
|---|:--:|--:|---|---|---|:--:|---|
| One trusted agent + Git/CI/human | 4–5 | n/a | — | — | baseline | ✅ | the control |
| Paperclip | 1–2 | 74,229 | 2026-03 | MIT | Prominent | ✅ | company-plane |
| Vibe Kanban | DQ | 27,450 | 2025-06 | Apache-2.0 | Prominent (frozen) | ✅ | **sunsetting** |
| Symphony | 1–2 | 26,049 | 2026-02 | Apache-2.0 | Prominent | ✅ | Linear/Codex-centered |
| AgentWrapper AO | 2–3 | 8,392 | 2026-02 | Apache-2.0 | Established | ✅ | PR/CI cockpit |
| Open Multi-Agent | 3–4 | 6,620 | 2026-03 | MIT | Established | ✅ | runtime DAG |
| Agent Teams AI | 2–3 | 1,625 | 2026-02 | AGPL-3.0 | Established | ✅ | peer team |
| GasTown + Beads | 1–2 | 17,104 | 2025-12 | MIT | Prominent | ✅ | Beads-coupled |
| Bernstein | 1–3 | 706 | 2026-03 | Apache-2.0 | Emerging | ✅ | deterministic replay |
| Sortie | 1–2 | 111 | 2026-03 | Apache-2.0 | Emerging | ✅ | ticket scheduler |
| MartinLoop | 2–3 | 39 | 2026-04 | Apache-2.0 | Preview | ✅ | governed run |

---

## 8. New Analytical Angles

### 8.1 The popularity↔maturity paradox (new)
The tools the decision **leans on for authorization** (Microsoft AGT, OpenLeash, Starfish, Agent Control) are **young and small** (created 2026; 2–4,865⭐). The tools with the **most adoption** (Paperclip 74k, Vibe 27k, Symphony 26k, GasTown 17k) are **cockpits/planes the doc explicitly says NOT to build on for solo/regulated work.** ⇒ *Popularity and decision-fit are anti-correlated here.* This **strengthens** Doc 28's "compose, don't build; keep the baseline" stance: the governance layer worth watching is real but unproven, and the popular layer is the wrong authority.

### 8.2 Temporal drift / staleness (new)
Doc snapshot = 2026-07-13; review = 2026-07-20. In **7 days**: Agent Teams AI moved `v2.7.0 → v2.9.1`; most analyzed repos show pushes within 48h of review. ⇒ This ecosystem's version facts decay in **days, not months** — any adoption decision must re-pin at decision time. (Vibe Kanban is the counter-example: **frozen** since 2026-04-24, consistent with its sunset.)

### 8.3 Owner type / bus-factor (new)
Several decision-relevant governance tools live on **personal accounts** (Starfish `Azerax`, CC Safety Net `kenryu42`, Runcap `kirder24-code`, AAS-1 `Kadikoy1`). Personal-account + single-maintainer + <100⭐ is a **continuity risk** the doc's prose implies but never scores. Added as dimension N5.

### 8.4 License-detection gap (new)
Four tools (Starfish, Cordum, Loki, Taskmaster) return **NOASSERTION** from GitHub's detector. For BSL/BUSL/Commons-Clause this is *expected* (non-OSI). For **Starfish** it means no clean machine-readable LICENSE at HEAD — a genuine reuse-rights ambiguity beyond a marketing string. ⇒ Recommend the atlas record *both* "claimed license" and "machine-detected license" as separate fields.

---

## 9. Promoted & Added Tools (Expansion)

Ten tools that Doc 28 carried only as **E0 discovery nominations** (in its five-list dumps, §12.7) are here **promoted to analyzed** with verified existence + capability. This expands the landscape without inventing anything — each was in the corpus but un-analyzed.

| Tool | Repo | Ex | Suggested layer | Capability (verified) |
|---|---|:--:|---|---|
| Veto | PlawIO/veto | ✅ | Governance/policy | plain-English deny-rules runtime for tool calls, 5-line integration |
| Invariant | invariantlabs-ai/invariant | ✅ | Governance/security | guardrails + analysis for agent traces/tool use |
| CodeBurn | AgentSeal/codeburn | ✅ | **Cost/economics telemetry** *(new sub-layer)* | token/cost tracking across 36 agent tools |
| Gambit | bolt-foundry/gambit | ✅ | QA/eval | synthetic scenario + evaluation layer for agents |
| promptfoo | promptfoo/promptfoo | ✅ | QA/eval/red-team | prompt/agent eval + red-teaming harness |
| DeepEval | confident-ai/deepeval | ✅ | QA/eval | LLM/agent test framework |
| browser-use | browser-use/browser-use | ✅ | Browser/computer-use | LLM-driven browser automation |
| cua | trycua/cua | ✅ | Computer-use sandbox | computer-use agent sandboxes |
| thClaws | thClaws/thClaws | ✅ | Runtime/harness | native-Rust agent harness (GUI/CLI/headless/webapp, one binary) |
| SwarmClaw | swarmclawai/swarmclaw | ✅ | Runtime/framework | self-hosted multi-agent runtime, 23+ providers |

**New sub-layer proposed:** *Cost/economics telemetry* (CodeBurn). Doc 28 treats cost only as a scoring weight; a dedicated **spend-observability** layer (independent of any single controller's budget ledger) is a real, populated category the atlas should name.

---

## 10. Coverage & Honesty Statement

| Band | Set | Coverage | Method |
|---|---|---|---|
| **Exhaustive** | Analyzed toolset (§12.8/13.x/14.x) | 64/64 tools | API + HTML + ls-remote |
| **Exhaustive** | Identity/redirect ledger (§12.6), tested subset | 10/10 | API + HTML redirects |
| **Exhaustive** | Standards/protocol versions (§13.9/13.11) | MCP, A2A, SLSA | official spec sites |
| **Confirmed** | 5 discovery-list sources + andyrewlee list | 6/6 | HTML/raw |
| **Sampled** | Tier-3 nominations (125 awesome + 339 five-list = 464) | 5 adversarial + aggregate | HTML |

**Why Tier-3 is sampled, not exhaustive:** Doc 28 itself rates these E0 (discovery-only, *not* analyzed). One-by-one web checks of all 464 would (a) exceed GitHub's unauthenticated 60/hr API budget and (b) not change the doc's own E0 posture. The adversarial sample (deliberately picking suspicious names) plus source-list confirmation is the proportionate test, and it found **zero fabrication**. This limit is stated, not hidden.

**Not verifiable by web at all:** the internal ledger figures (570 entities, 2,730 claims, 803 rows, 780 trees, 148M bytes) and the E5 sandbox *trial outcomes* (build/test pass counts, timings) — these are PolyWright's own machine artifacts. Their *inputs* (the tools, versions, releases) are verified; their *internal results* are taken as reported.

---

## 11. Net Effect on Doc 28's Decision

**Unchanged, and modestly strengthened.**

1. **No-build / simple baseline** — reaffirmed. The layers the doc says are "crowded" are confirmed crowded *and real*.
2. **Governance residual is a hypothesis, not a build** — reinforced: the best-fit authorization tools are 2026-vintage, low-star, some personal-account. Betting the product on them now would be premature; watching/composing is right.
3. **License gates are first-order** — reinforced: NOASSERTION on Starfish and the BSL/BUSL/Commons-Clause set are exactly the reuse traps the doc warns about.
4. **Re-pin at decision time** — new emphasis: version facts drift in days (Agent Teams +2 minor versions in a week).

**One substantive suggestion for a future revision of Doc 28:** record *claimed* vs *machine-detected* license as two fields, and add a lightweight **maturity tier** (stars+age+liveness) and **owner-type** column — not to rank by popularity, but to make bus-factor and longevity risk explicit for the young governance tools the decision depends on.

---

## Appendix A — Method & Source Types
- **GitHub REST API** (`api.github.com/repos/…`) — existence, SPDX license, stars, created/pushed, archived/fork. Hit the unauthenticated **60/hr** limit mid-review.
- **`github.com` HTML** — redirect resolution + existence (separate rate budget).
- **`raw.githubusercontent.com`** — README/spec content (e.g., Vibe sunset line, andyrewlee pinned list).
- **Official spec sites** — modelcontextprotocol.io, a2a-protocol.org, slsa.dev.
- **`git ls-remote`** — existence + release-tag checks using local git credentials (no API cap); the reliable fallback once the API budget was spent.
- **Full wave-by-wave log** with per-tool results: bead `aca-b31` comments (Waves 1–8), beads v1.0.4.

*Reviewer: Claude (Opus 4.8) · 2026-07-20 · single sequential pass, no sub-agents.*
