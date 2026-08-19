// SPDX-License-Identifier: Apache-2.0
// Focused tests for the atlas generator/validator library.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFrontmatter, generate, compareWithDir, writeFiles, loadCorpus, validateCorpus, validateTool, cmpFold, runBuild } from '../lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

test('parseFrontmatter handles LF, CRLF, BOM, and missing blocks', () => {
  assert.equal(parseFrontmatter('---\na: 1\n---\nbody').data.a, 1);
  assert.equal(parseFrontmatter('---\r\na: 2\r\n---\r\nbody').data.a, 2);
  assert.equal(parseFrontmatter('﻿---\na: 3\n---\n').data.a, 3);
  assert.equal(parseFrontmatter('no frontmatter here').data, null);
});

test('generation is deterministic (two runs, identical bytes)', () => {
  const a = generate(ROOT).files;
  const b = generate(ROOT).files;
  assert.deepEqual([...a.keys()], [...b.keys()]);
  for (const [name, content] of a) assert.equal(b.get(name), content, `differs: ${name}`);
});

test('compareWithDir is clean after a build and detects drift and orphans', () => {
  const { files } = generate(ROOT);
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'aca-docs-'));
  try {
    writeFiles(files, tmp);
    assert.deepEqual(compareWithDir(files, tmp), []);
    fs.appendFileSync(path.join(tmp, 'TOOLS.md'), 'tampered');
    fs.writeFileSync(path.join(tmp, '99-stale-category.md'), 'stale page');
    const drift = compareWithDir(files, tmp);
    assert.ok(drift.includes('stale: docs/TOOLS.md'));
    assert.ok(drift.includes('orphan: docs/99-stale-category.md'));
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test('the real corpus is structurally valid', () => {
  const corpus = loadCorpus(ROOT);
  assert.equal(corpus.tools.length, corpus.scanned, 'every research file should card a tool');
  assert.deepEqual(validateCorpus(corpus), []);
});

test('validateTool flags missing fields, bad enums, and completeness gaps', () => {
  const cats = { 'coding-agents': { slug: 'coding-agents', number: 1, title: 'x', subtypes: [{ id: '1.1', title: 'y' }] } };
  const bad = { slug: 'x', category: 'nope', status: 'thriving', hands_on: 'vibes', maturity: 'Huge', local: 'yes', stars: 1.5, last_verified: 'recently' };
  const errors = validateTool(bad, cats);
  for (const needle of ["missing required field 'name'", "missing required field 'choose_when'", "missing required field 'avoid_when'", "category 'nope'", "status 'thriving'", "hands_on 'vibes'", "maturity 'Huge'", "local 'yes'", 'stars', 'last_verified']) {
    assert.ok(errors.some(e => e.includes(needle)), `expected an error mentioning ${needle}`);
  }
  const good = { name: 'T', slug: 't', category: 'coding-agents', subtype: '1.1 x', license_detected: 'MIT', maturity: 'Emerging', status: 'active', one_liner: 'ok', choose_when: 'when', avoid_when: 'unless', repo: 'https://example.com', hands_on: 'docs-only', local: true, stars: 10, last_verified: '2026-07-20', created: '2026-01' };
  assert.deepEqual(validateTool(good, cats), []);
  // explicit-local contract: omitting the key entirely is an error, null is fine
  const noLocal = { ...good }; delete noLocal.local;
  assert.ok(validateTool(noLocal, cats).some(e => e.includes("'local'")));
  assert.deepEqual(validateTool({ ...good, local: null }, cats), []);
  // subtype must reference a declared subtype id of its category
  assert.ok(validateTool({ ...good, subtype: '9.9 nonsense' }, cats).some(e => e.includes('subtype')));
});

test('validateTool rejects malformed field shapes', () => {
  const cats = { 'coding-agents': { slug: 'coding-agents', number: 1, title: 'x', subtypes: [{ id: '1.1', title: 'y' }] } };
  const good = { name: 'T', slug: 't', category: 'coding-agents', subtype: '1.1 x', license_detected: 'MIT', maturity: 'Emerging', status: 'active', one_liner: 'ok', choose_when: 'when', avoid_when: 'unless', repo: 'https://example.com', hands_on: 'docs-only', local: true, stars: 10, last_verified: '2026-07-20', created: '2026-01' };
  const casesToNeedle = [
    [{ name: ['not', 'a', 'string'] }, "'name' must be a string"],
    [{ one_liner: { text: 'nested' } }, "'one_liner' must be a string"],
    [{ slug: 'Bad_Slug' }, 'kebab-case'],
    [{ features: 'single string' }, "'features' must be an array"],
    [{ features: ['ok', 42] }, "'features' must be an array"],
    [{ cross_links: [{}] }, "'cross_links' must be an array"],
    [{ stars: -5 }, 'nonnegative'],
    [{ stars: 1.5 }, 'nonnegative'],
    [{ last_verified: new Date('2026-07-20') }, 'last_verified'],
    [{ created: 2026 }, 'created'],
    [{ repo: ['https://example.com'] }, "'repo' must be a non-blank string"],
    [{ license_claimed: { spdx: 'MIT' } }, "'license_claimed' must be a non-blank string"],
    [{ license_claimed: '  ' }, "'license_claimed' must be a non-blank string"],
    [{ last_verified: '2026-13' }, 'last_verified'],
    [{ last_verified: '2026-02-30' }, 'last_verified'],
    [{ last_verified: '2026-00-10' }, 'last_verified'],
    [{ created: '2026-13' }, 'created'],
  ];
  for (const [patch, needle] of casesToNeedle) {
    const errors = validateTool({ ...good, ...patch }, cats);
    assert.ok(errors.some(e => e.includes(needle)), `expected '${needle}' for ${JSON.stringify(patch)}`);
  }
  assert.deepEqual(validateTool(good, cats), []);
  // real calendar values in the declared formats stay valid (incl. leap day)
  assert.deepEqual(validateTool({ ...good, last_verified: '2024-02-29', created: '2026-12' }, cats), []);
  assert.deepEqual(validateTool({ ...good, last_verified: '2026-07' }, cats), []);
  assert.ok(validateTool({ ...good, last_verified: '2023-02-29' }, cats).some(e => e.includes('last_verified')), '2023 is not a leap year');
});

test('validateCorpus flags duplicate/malformed category structures', () => {
  const catEntries = [
    { slug: 'dup', number: 1, title: 'a', status: 'complete', _file: 'a.yaml' },
    { slug: 'dup', number: 2, title: 'b', status: 'thriving', _file: 'b.yaml' },
    { slug: 'no-status', number: 3, title: 'c', _file: 'c.yaml' },
    { slug: 'bad-shapes', number: 0, title: 'd', status: 'planned', subtypes: 'not an array', see_also: [{ text: 'x' }], _file: 'd.yaml' },
    { slug: 'ok-planned', number: 4, title: 'e', status: 'in-progress', question: 'q?', golden_rule: 'g', notes: null, matrix_columns: ['A', 'B'], subtypes: [{ id: '4.1', title: 'y', what: 'z' }], _file: 'e.yaml' },
  ];
  const cats = Object.fromEntries(catEntries.map(c => [c.slug, c]));
  const errors = validateCorpus({ tools: [], cats, catEntries, parseErrors: [] });
  assert.ok(errors.some(e => e.includes("duplicate category slug 'dup'")));
  assert.ok(errors.some(e => e.includes("status 'thriving'")));
  assert.ok(errors.some(e => e.includes("no-status: missing required field 'status'")));
  assert.ok(errors.some(e => e.includes("number '0'")));
  assert.ok(errors.some(e => e.includes("'subtypes' must be an array")));
  assert.ok(errors.some(e => e.includes("'see_also' entry")));
  assert.ok(!errors.some(e => e.includes('ok-planned')), 'a fully well-formed in-progress category must validate');
});

test('validateCorpus rejects malformed subtype and category field shapes', () => {
  const base = { number: 9, title: 't', status: 'complete' };
  const cases = [
    [{ slug: 'num-id', ...base, subtypes: [{ id: 9.1, title: 'y', what: 'z' }] }, 'must be a non-blank string'],
    [{ slug: 'blank-id', ...base, subtypes: [{ id: '  ', title: 'y', what: 'z' }] }, 'must be a non-blank string'],
    [{ slug: 'no-title', ...base, subtypes: [{ id: '9.1', what: 'z' }] }, "non-blank string 'title'"],
    [{ slug: 'no-what', ...base, subtypes: [{ id: '9.1', title: 'y' }] }, "non-blank string 'what'"],
    [{ slug: 'bad-question', ...base, question: 42 }, "'question' must be a non-blank string or null"],
    [{ slug: 'bad-rule', ...base, golden_rule: ['g'] }, "'golden_rule' must be a non-blank string or null"],
    [{ slug: 'bad-notes', ...base, notes: 42 }, "'notes' must be a non-blank string or null"],
    [{ slug: 'bad-matrix', ...base, matrix_columns: 'Core abstraction' }, "'matrix_columns' must be an array"],
    [{ slug: 'blank-matrix', ...base, matrix_columns: ['ok', ' '] }, "'matrix_columns' must be an array"],
    [{ slug: 'blank-see-also', ...base, see_also: [{ text: ' ', page: 'x.md' }] }, "'see_also' entry"],
  ];
  for (const [cat, needle] of cases) {
    const errors = validateCorpus({ tools: [], cats: { [cat.slug]: cat }, catEntries: [cat], parseErrors: [] });
    assert.ok(errors.some(e => e.includes(needle)), `expected '${needle}' for ${cat.slug}`);
  }
  const clean = { slug: 'clean', number: 9, title: 't', status: 'complete', question: 'q?', golden_rule: 'g', notes: null, matrix_columns: ['A'], subtypes: [{ id: '9.1', title: 'y', what: 'z' }], see_also: [{ text: 'x', page: 'x.md' }] };
  assert.deepEqual(validateCorpus({ tools: [], cats: { clean }, catEntries: [clean], parseErrors: [] }), []);
});

test('runBuild fails closed: malformed source is never generated or reported clean', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'aca-badroot-'));
  try {
    fs.mkdirSync(path.join(root, 'research', 'coding-agents'), { recursive: true });
    fs.mkdirSync(path.join(root, 'data', 'categories'), { recursive: true });
    // card missing most required fields; category with a numeric subtype id
    fs.writeFileSync(path.join(root, 'research', 'coding-agents', 'bad.md'),
      '---\nslug: bad\ncategory: coding-agents\n---\nbody\n');
    fs.writeFileSync(path.join(root, 'data', 'categories', '01-coding-agents.yaml'),
      'slug: coding-agents\nnumber: 1\ntitle: "x"\nstatus: complete\nsubtypes:\n  - id: 1.1\n    title: "y"\n    what: "z"\n');
    // build mode: refuses and writes nothing
    const built = runBuild(root);
    assert.equal(built.ok, false);
    assert.ok(built.errors.length > 0);
    assert.ok(!fs.existsSync(path.join(root, 'docs')), 'no docs may be written from malformed source');
    // check mode: refuses even when a docs dir already exists — never "clean"
    fs.mkdirSync(path.join(root, 'docs'));
    fs.writeFileSync(path.join(root, 'docs', 'TOOLS.md'), 'stale');
    const checked = runBuild(root, { check: true });
    assert.equal(checked.ok, false);
    assert.ok(checked.errors.length > 0);
    assert.equal(checked.drift, undefined, 'comparison must not run when validation fails');
    // the valid real corpus still builds identically through the same gate
    const viaGate = runBuild(ROOT, { check: true });
    assert.equal(viaGate.ok, true);
    assert.deepEqual(viaGate.errors, []);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('sorting is case-folded with a stable tiebreaker (AutoGen regression)', () => {
  // The pre-repair renderer used locale collation; the deterministic
  // replacement must keep the same logical order for mixed-case subtypes.
  assert.ok(cmpFold('7.2 multi-agent conversation framework', '7.2 Multi-agent crew / conversation frameworks') < 0);
  assert.ok(cmpFold('a', 'B') < 0);
  assert.equal(cmpFold('same', 'same'), 0);
  const tools = generate(ROOT).files.get('TOOLS.md');
  const autogen = tools.indexOf('| **AutoGen** |');
  const metagpt = tools.indexOf('| **MetaGPT** |');
  assert.ok(autogen > 0 && metagpt > 0 && autogen < metagpt, 'AutoGen must render before MetaGPT as in the pre-repair docs');
});
