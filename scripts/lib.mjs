// SPDX-License-Identifier: Apache-2.0
// Atlas docs library: frontmatter parsing, structural validation, and
// deterministic rendering of docs/ from research/**/*.md + data/categories/*.yaml.
// Pure functions only — the CLIs (build-docs.mjs, validate-data.mjs) do the I/O policy.

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const GEN = '<!-- Generated from research/**/*.md frontmatter + data/categories/*.yaml. Edit the source data; this page is a rendering. -->';

// Content is CC0 — the footer states provenance and the dedication so a page
// copied on its own still tells the reader where it came from and what they may do.
const LICENSE_LINE = `_Part of [AI-Choices-Atlas](https://github.com/ZerephCo/AI-Choices-Atlas), stewarded by Zereph · content dedicated to the public domain under [CC0 1.0](../LICENSE) — reuse freely, no credit required._\n`;
const FOOTER = `\n---\n\n${LICENSE_LINE}`;   // for pages that don't already end in a rule

const STATUS = {
  active: '🟢 Active', caution: '⚠️ Caution', preview: '🧪 Preview',
  maintenance: '⚠️ Maintenance', sunsetting: '⚰️ Sunsetting',
  defunct: '⚰️ Defunct', unresolved: '⬛ Unresolved',
};
const statusCell = s => STATUS[s] || s || '—';
// true = fully local · false = hosted · 'partial' = mixed · null = not applicable (e.g. a protocol
// spec — implementations decide) · absent/undefined = unknown
const localCell = v => v === true ? '✅' : v === false ? '☁️ hosted' : v === 'partial' ? '🟡 partial'
  : v === null ? 'N/A' : '—';
const handsCell = v => v || '—';
const stars = n => (n == null ? '—' : Number(n).toLocaleString('en-US'));
const lic = t => {
  const c = t.license_claimed, d = t.license_detected;
  if (!c && !d) return '—';
  if (!c || c === d) return d || c;
  return `${c} / ${d}`;
};
const pad2 = n => String(n).padStart(2, '0');
// Locale-independent string compares — localeCompare collation varies across
// machines and would make the generated docs differ between OS installs.
// cmp: raw code-point order (stable tiebreaker). cmpFold: case-folded primary
// order matching the corpus's established logical ordering, raw order on ties.
const cmp = (a, b) => { a = String(a); b = String(b); return a < b ? -1 : a > b ? 1 : 0; };
export const cmpFold = (a, b) => cmp(String(a).toLowerCase(), String(b).toLowerCase()) || cmp(a, b);

export function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of [...fs.readdirSync(dir, { withFileTypes: true })].sort((a, b) => cmp(a.name, b.name))) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.isFile() && e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

// Minimal frontmatter parser (replaces gray-matter): a leading `---` block of
// YAML, tolerant of BOM and CRLF. Returns { data, body } or { data: null } when
// the file has no frontmatter block.
export function parseFrontmatter(text) {
  const t = text.replace(/^﻿/, '');
  const m = t.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!m) return { data: null, body: t };
  return { data: yaml.load(m[1]), body: t.slice(m[0].length) };
}

export function loadCorpus(root) {
  const RESEARCH = path.join(root, 'research');
  const CATDIR = path.join(root, 'data', 'categories');
  const tools = [];
  const parseErrors = [];
  let scanned = 0;
  for (const file of walk(RESEARCH)) {
    scanned++;
    const rel = path.relative(root, file).split(path.sep).join('/');
    let fm;
    try {
      fm = parseFrontmatter(fs.readFileSync(file, 'utf8'));
    } catch (e) {
      parseErrors.push(`${rel}: YAML parse error — ${e.message.split('\n')[0]}`);
      continue;
    }
    if (fm.data === null) { parseErrors.push(`${rel}: missing frontmatter block`); continue; }
    if (fm.data && fm.data.slug && fm.data.category) {
      fm.data._path = rel;
      tools.push(fm.data);
    } else {
      parseErrors.push(`${rel}: frontmatter lacks slug/category`);
    }
  }
  const cats = {};
  const catEntries = [];
  if (fs.existsSync(CATDIR)) {
    for (const f of [...fs.readdirSync(CATDIR)].sort(cmp)) {
      if (!/\.ya?ml$/.test(f)) continue;
      let c;
      try {
        c = yaml.load(fs.readFileSync(path.join(CATDIR, f), 'utf8'));
      } catch (e) {
        parseErrors.push(`data/categories/${f}: YAML parse error — ${e.message.split('\n')[0]}`);
        continue;
      }
      if (c === null || typeof c !== 'object' || Array.isArray(c)) {
        parseErrors.push(`data/categories/${f}: must be a YAML mapping`);
        continue;
      }
      c._file = f;
      catEntries.push(c);
      cats[c.slug] = c;
    }
  }
  return { tools, cats, catEntries, scanned, parseErrors };
}

// ---- structural validation ----
// Completeness fields are required on every card: their earlier omission from
// validation is what allowed silent gaps. No fixed corpus counts are asserted
// anywhere — new tools and categories must always be addable.
const STRING_REQUIRED = ['name', 'slug', 'category', 'subtype', 'license_detected', 'maturity', 'status',
  'one_liner', 'choose_when', 'avoid_when', 'hands_on'];
const STATUS_ENUM = Object.keys(STATUS);
const HANDS_ENUM = ['run', 'inspected', 'docs-only'];
// SCHEMA.md values plus the two variants the verified corpus already uses.
const MATURITY_ENUM = ['Prominent', 'Established', 'Emerging', 'Emerging (preview)', 'Preview', 'commercial', 'Defunct'];
// data/SCHEMA.md §2 category contract.
const CAT_STATUS_ENUM = ['complete', 'in-progress', 'planned', 'bridge'];
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const isStr = v => typeof v === 'string';
const isBlankable = v => v === undefined || v === null;
const isNonBlankStr = v => isStr(v) && v.trim() !== '';
const isStringArray = v => Array.isArray(v) && v.every(isNonBlankStr);
// Real-calendar date checks: the regex shape alone would accept 2026-13 or
// 2026-02-30.
const daysInMonth = (y, m) =>
  [31, ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
const isRealYearMonth = s => {
  const m = isStr(s) && s.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/);
  if (!m) return false;
  const y = +m[1], mo = +m[2];
  if (mo < 1 || mo > 12) return false;
  return m[3] == null || (+m[3] >= 1 && +m[3] <= daysInMonth(y, mo));
};
const isRealYearOrYearMonth = s => {
  const m = isStr(s) && s.match(/^\d{4}(?:-(\d{2}))?$/);
  return !!m && (m[1] == null || (+m[1] >= 1 && +m[1] <= 12));
};

export function validateTool(t, cats) {
  const errors = [];
  const id = (isStr(t.slug) && t.slug) || t._path || t.name || '(unknown)';
  for (const k of STRING_REQUIRED) {
    if (t[k] == null || t[k] === '') errors.push(`${id}: missing required field '${k}'`);
    else if (!isStr(t[k])) errors.push(`${id}: '${k}' must be a string, got ${Array.isArray(t[k]) ? 'array' : typeof t[k]}`);
  }
  if (t.last_verified == null || t.last_verified === '') errors.push(`${id}: missing required field 'last_verified'`);
  else if (!isRealYearMonth(t.last_verified))
    errors.push(`${id}: last_verified '${t.last_verified}' must be a real YYYY-MM or YYYY-MM-DD calendar date string`);
  if (!('local' in t)) errors.push(`${id}: missing required field 'local' (use explicit true|false|'partial'|null)`);
  if (isStr(t.slug) && t.slug !== '' && !SLUG_RE.test(t.slug))
    errors.push(`${id}: slug '${t.slug}' must be kebab-case ([a-z0-9] groups joined by '-')`);
  if (!(t.repo || t.site)) errors.push(`${id}: needs at least one of repo|site`);
  for (const k of ['repo', 'site', 'maker', 'language', 'tagline_quote', 'subtype_note', 'license_claimed']) {
    if (t[k] != null && !isNonBlankStr(t[k])) errors.push(`${id}: '${k}' must be a non-blank string when present`);
  }
  if (t.features != null && !isStringArray(t.features)) errors.push(`${id}: 'features' must be an array of non-empty strings`);
  if (t.cross_links != null && !isStringArray(t.cross_links)) errors.push(`${id}: 'cross_links' must be an array of non-empty strings`);
  const cat = isStr(t.category) && cats ? cats[t.category] : undefined;
  if (isStr(t.category) && cats && !cat) errors.push(`${id}: category '${t.category}' has no data/categories entry`);
  if (cat && Array.isArray(cat.subtypes) && cat.subtypes.length && isStr(t.subtype)) {
    const ids = cat.subtypes.filter(s => s && typeof s === 'object').map(s => String(s.id));
    if (!ids.some(sid => t.subtype === sid || t.subtype.startsWith(sid + ' ')))
      errors.push(`${id}: subtype '${t.subtype}' does not reference a '${t.category}' subtype id [${ids.join(', ')}]`);
  }
  if (isStr(t.status) && !STATUS_ENUM.includes(t.status)) errors.push(`${id}: status '${t.status}' not in [${STATUS_ENUM.join(', ')}]`);
  if (isStr(t.hands_on) && !HANDS_ENUM.includes(t.hands_on)) errors.push(`${id}: hands_on '${t.hands_on}' not in [${HANDS_ENUM.join(', ')}]`);
  if (isStr(t.maturity) && !MATURITY_ENUM.includes(t.maturity)) errors.push(`${id}: maturity '${t.maturity}' not in [${MATURITY_ENUM.join(', ')}]`);
  if (!(t.local === true || t.local === false || t.local === 'partial' || t.local === null || t.local === undefined))
    errors.push(`${id}: local '${t.local}' must be true|false|'partial'|null`);
  if (t.stars != null && !(Number.isInteger(t.stars) && t.stars >= 0))
    errors.push(`${id}: stars '${t.stars}' must be a nonnegative integer or null`);
  if (t.created != null && !isRealYearOrYearMonth(t.created))
    errors.push(`${id}: created '${t.created}' must be a real YYYY or YYYY-MM string`);
  return errors;
}

export function validateCorpus({ tools, cats, catEntries, parseErrors }) {
  const errors = [...parseErrors];
  const bySlug = new Map();
  for (const t of tools) {
    errors.push(...validateTool(t, cats));
    if (t.slug) {
      if (bySlug.has(t.slug)) errors.push(`duplicate slug '${t.slug}': ${bySlug.get(t.slug)} and ${t._path}`);
      else bySlug.set(t.slug, t._path);
    }
  }
  const entries = catEntries ?? Object.values(cats);
  const byNum = new Map();
  const byCatSlug = new Map();
  for (const c of entries) {
    const cid = (isStr(c.slug) && c.slug) || c._file || '(category)';
    for (const k of ['slug', 'title']) {
      if (c[k] == null || c[k] === '') errors.push(`category ${cid}: missing required field '${k}'`);
      else if (!isStr(c[k])) errors.push(`category ${cid}: '${k}' must be a string`);
    }
    if (isStr(c.slug) && c.slug !== '' && !SLUG_RE.test(c.slug))
      errors.push(`category ${cid}: slug '${c.slug}' must be kebab-case`);
    if (c.number == null) errors.push(`category ${cid}: missing required field 'number'`);
    else if (!(Number.isInteger(c.number) && c.number > 0)) errors.push(`category ${cid}: number '${c.number}' must be a positive integer`);
    if (c.status == null || c.status === '') errors.push(`category ${cid}: missing required field 'status'`);
    else if (!CAT_STATUS_ENUM.includes(c.status))
      errors.push(`category ${cid}: status '${c.status}' not in [${CAT_STATUS_ENUM.join(', ')}]`);
    if (isStr(c.slug)) {
      if (byCatSlug.has(c.slug)) errors.push(`duplicate category slug '${c.slug}': ${byCatSlug.get(c.slug)} and ${cid} (${c._file || '?'})`);
      else byCatSlug.set(c.slug, cid);
    }
    if (c.number != null) {
      if (byNum.has(c.number)) errors.push(`duplicate category number ${c.number}: ${byNum.get(c.number)} and ${cid}`);
      else byNum.set(c.number, cid);
    }
    for (const k of ['question', 'golden_rule', 'notes']) {
      if (!isBlankable(c[k]) && !isNonBlankStr(c[k]))
        errors.push(`category ${cid}: '${k}' must be a non-blank string or null`);
    }
    if (!isBlankable(c.matrix_columns) && !isStringArray(c.matrix_columns))
      errors.push(`category ${cid}: 'matrix_columns' must be an array of non-blank strings`);
    if (c.subtypes != null) {
      if (!Array.isArray(c.subtypes)) errors.push(`category ${cid}: 'subtypes' must be an array`);
      else {
        const seen = new Set();
        for (const s of c.subtypes) {
          if (s === null || typeof s !== 'object' || Array.isArray(s)) { errors.push(`category ${cid}: each 'subtypes' entry must be a mapping with 'id'`); continue; }
          if (!isNonBlankStr(s.id)) { errors.push(`category ${cid}: subtype id '${s.id}' must be a non-blank string (quote it in YAML)`); continue; }
          if (seen.has(s.id)) errors.push(`category ${cid}: duplicate subtype id '${s.id}'`);
          seen.add(s.id);
          if (!isNonBlankStr(s.title)) errors.push(`category ${cid}: subtype '${s.id}' needs a non-blank string 'title'`);
          if (!isNonBlankStr(s.what)) errors.push(`category ${cid}: subtype '${s.id}' needs a non-blank string 'what'`);
        }
      }
    }
    if (c.see_also != null) {
      if (!Array.isArray(c.see_also)) errors.push(`category ${cid}: 'see_also' must be an array`);
      else for (const s of c.see_also) {
        if (s === null || typeof s !== 'object' || !isNonBlankStr(s.text) || !isNonBlankStr(s.page))
          errors.push(`category ${cid}: each 'see_also' entry needs non-blank string 'text' and 'page'`);
      }
    }
  }
  return errors;
}

// ---- rendering (returns Map<docs-relative-filename, content>) ----
export function generate(root, corpus = loadCorpus(root)) {
  const { tools, cats } = corpus;
  const files = new Map();

  const catList = Object.values(cats).sort((a, b) => a.number - b.number);
  const catNum = slug => cats[slug]?.number ?? 99;
  const catByNum = {};
  for (const c of catList) catByNum[c.number] = c;
  // §N / §N.x  ->  clickable link to that category page (anchor text keeps the sub-number)
  const linkifyCross = s => String(s).replace(/§(\d+)(\.\d+)?/g, (m, n) => {
    const c = catByNum[Number(n)];
    return c ? `[${m}](${pad2(c.number)}-${c.slug}.md)` : m;
  });
  const toolsIn = slug => tools.filter(t => t.category === slug)
    .sort((a, b) => cmpFold(a.subtype, b.subtype) || (b.stars || 0) - (a.stars || 0) || cmp(a.slug, b.slug));

  const pageWritten = new Set();

  // ---- per-category pages ----
  for (const c of catList) {
    const ct = toolsIn(c.slug);
    if (!ct.length) {
      if (c.status === 'bridge') {
        let bm = `${GEN}\n\n# ${c.number}. ${c.title}\n\n`;
        bm += `[← all categories](README.md) · [master tool list](TOOLS.md)\n\n`;
        if (c.question) bm += `> **The question this answers:** *${c.question}*\n\n`;
        bm += `> **Bridge section** — this category's tools are carded elsewhere (no duplication).\n\n`;
        if (c.notes) bm += `${c.notes}\n\n`;
        if (c.golden_rule) bm += `**Golden rule:** ${c.golden_rule}\n\n`;
        if (Array.isArray(c.see_also) && c.see_also.length) {
          bm += `## See also\n`;
          for (const s of c.see_also) bm += `- [${s.text}](${s.page})\n`;
          bm += `\n`;
        }
        files.set(`${pad2(c.number)}-${c.slug}.md`, bm + FOOTER);
        pageWritten.add(c.slug);
      }
      continue;
    }
    pageWritten.add(c.slug);
    let md = `${GEN}\n\n# ${c.number}. ${c.title}\n\n`;
    md += `[← all categories](README.md) · [master tool list](TOOLS.md)\n\n`;
    if (c.question) md += `> **The question this answers:** *${c.question}*\n\n`;
    if (c.golden_rule) md += `**Golden rule:** ${c.golden_rule}\n\n`;
    if (c.subtypes?.length) {
      md += `## Sub-types\n`;
      for (const s of c.subtypes) md += `- **${s.id} ${s.title}** — ${s.what || ''}\n`;
      md += `\n`;
    }
    md += `## Compare\n| Tool | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | What it is |\n|---|---|---|---|---|---|---|---|---|\n`;
    for (const t of ct) {
      md += `| [${t.name}](#${t.slug}) | ${t.subtype || ''} | ${lic(t)} | ${stars(t.stars)} | ${t.maturity || ''} | ${statusCell(t.status)} | ${localCell(t.local)} | ${handsCell(t.hands_on)} | ${t.one_liner || ''} |\n`;
    }
    // Decide — pick-by-need matrix (choose/avoid at a glance, no scrolling)
    const withChoice = ct.filter(t => t.choose_when || t.avoid_when);
    if (withChoice.length) {
      md += `\n## Decide — pick by need\n`;
      md += `| Tool | ✅ Choose it when | ⛔ Avoid when |\n|---|---|---|\n`;
      for (const t of withChoice) {
        const cw = String(t.choose_when || '—').replace(/\|/g, '\\|');
        const aw = String(t.avoid_when || '—').replace(/\|/g, '\\|');
        md += `| [${t.name}](#${t.slug}) | ${cw} | ${aw} |\n`;
      }
    }
    md += `\n## Tools\n\n`;
    for (const t of ct) {
      md += `<a id="${t.slug}"></a>\n### ${t.name}\n\n`;
      md += `**${statusCell(t.status)}**${t.one_liner ? ` — ${t.one_liner}` : ''}\n\n`;
      md += `| | |\n|---|---|\n`;
      md += `| Repo | ${t.repo || t.site || '—'} |\n`;
      if (t.maker) md += `| Maker | ${t.maker} |\n`;
      md += `| Sub-type | ${t.subtype || '—'} |\n`;
      md += `| License | ${lic(t)} |\n`;
      md += `| Maturity | ${t.maturity || '—'}${t.stars != null ? ` · ⭐${stars(t.stars)}` : ''}${t.created ? ` · created ${t.created}` : ''}${t.language ? ` · ${t.language}` : ''} |\n`;
      md += `| Runs local | ${localCell(t.local)} |\n`;
      md += `| Hands-on | ${handsCell(t.hands_on)} |\n\n`;
      if (t.tagline_quote) md += `> *"${t.tagline_quote}"*\n\n`;
      if (t.features?.length) { md += `**Features**\n`; for (const f of t.features) md += `- ${f}\n`; md += `\n`; }
      if (t.choose_when) md += `**Choose it when** — ${t.choose_when}\n\n`;
      if (t.avoid_when) md += `**Avoid when** — ${t.avoid_when}\n\n`;
      if (t.cross_links?.length) md += `**Related sections:** ${t.cross_links.map(linkifyCross).join(' · ')}\n\n`;
      md += `📄 **Deep research:** [\`${t._path}\`](../${t._path})\n\n---\n\n`;
    }
    // category pages already end with a card's `---` rule, so append the line directly
    files.set(`${pad2(c.number)}-${c.slug}.md`, md + LICENSE_LINE);
  }

  // ---- master table ----
  {
    const sorted = [...tools].sort((a, b) =>
      catNum(a.category) - catNum(b.category) ||
      cmpFold(a.subtype, b.subtype) ||
      (b.stars || 0) - (a.stars || 0) ||
      cmp(a.slug, b.slug));
    const totalCats = catList.length;
    let md = `${GEN}\n\n# All tools — master index\n\n`;
    md += `_${sorted.length} tools across ${totalCats} categories (§3 is a bridge — its tools are carded under §4/§2). [← docs home](README.md)._\n\n`;
    md += `| Tool | Category | Sub-type | License | ⭐ | Maturity | Status | Local | Hands-on | Links |\n|---|---|---|---|---|---|---|---|---|---|\n`;
    for (const t of sorted) {
      const c = cats[t.category];
      const catCell = c ? `[${c.title}](${pad2(c.number)}-${c.slug}.md#${t.slug})` : t.category;
      const links = [t.repo ? `[repo](${t.repo})` : null, `[research](../${t._path})`].filter(Boolean).join(' · ');
      md += `| **${t.name}** | ${catCell} | ${t.subtype || ''} | ${lic(t)} | ${stars(t.stars)} | ${t.maturity || ''} | ${statusCell(t.status)} | ${localCell(t.local)} | ${handsCell(t.hands_on)} | ${links} |\n`;
    }
    files.set('TOOLS.md', md + FOOTER);
  }

  // ---- docs index ----
  {
    let md = `${GEN}\n\n# AI-Choices-Atlas — documentation\n\n`;
    md += `Browse by category below, or jump to the **[master list of all tools](TOOLS.md)**.\n\n`;
    md += `| # | Category | Tools | Status |\n|--:|---|--:|---|\n`;
    for (const c of catList) {
      const n = tools.filter(t => t.category === c.slug).length;
      const link = pageWritten.has(c.slug) ? `[${c.title}](${pad2(c.number)}-${c.slug}.md)` : c.title;
      const toolsCell = n ? String(n) : (c.status === 'bridge' ? 'bridge' : '—');
      md += `| ${c.number} | ${link} | ${toolsCell} | ${c.status || ''} |\n`;
    }
    md += `\n_Rendered from each tool's \`research/…\` frontmatter + \`data/categories\`. Edit the data, not this page._\n`;
    files.set('README.md', md + FOOTER);
  }

  return { files, corpus };
}

// Compare generated files against a docs directory on disk. Only the files the
// generator owns are compared; generator-shaped orphans (a stale NN-*.md page)
// are reported too. Subdirectories (docs/mba, docs/beads) are never touched.
export function compareWithDir(files, outDir) {
  const drift = [];
  for (const [name, content] of files) {
    const p = path.join(outDir, name);
    if (!fs.existsSync(p)) { drift.push(`missing: docs/${name}`); continue; }
    if (fs.readFileSync(p, 'utf8') !== content) drift.push(`stale: docs/${name}`);
  }
  if (fs.existsSync(outDir)) {
    for (const e of fs.readdirSync(outDir, { withFileTypes: true })) {
      if (!e.isFile()) continue;
      const owned = /^\d{2}-[a-z0-9-]+\.md$/.test(e.name) || e.name === 'TOOLS.md' || e.name === 'README.md';
      if (owned && !files.has(e.name)) drift.push(`orphan: docs/${e.name}`);
    }
  }
  return drift;
}

export function writeFiles(files, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  for (const [name, content] of files) fs.writeFileSync(path.join(outDir, name), content);
}

// Fail-closed build/check entry point: structural validation gates every
// write and every comparison, so malformed source can neither generate docs
// nor be reported clean. Valid source renders exactly as before.
export function runBuild(root, { check = false } = {}) {
  const corpus = loadCorpus(root);
  const errors = validateCorpus(corpus);
  if (errors.length) return { ok: false, errors, corpus };
  const { files } = generate(root, corpus);
  const outDir = path.join(root, 'docs');
  if (check) {
    const drift = compareWithDir(files, outDir);
    return { ok: drift.length === 0, errors: [], drift, files, corpus };
  }
  writeFiles(files, outDir);
  return { ok: true, errors: [], files, corpus };
}
