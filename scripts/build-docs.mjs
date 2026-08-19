// SPDX-License-Identifier: Apache-2.0
// Atlas docs generator CLI.
//   node build-docs.mjs           regenerate docs/ from the source data
//   node build-docs.mjs --check   verify docs/ matches the data (no writes; exit 1 on drift)
// Fails closed: any structural validation error aborts before docs are
// written or compared (exit 1) — malformed source can neither generate
// output nor be reported clean.
// Reads: research/**/*.md frontmatter (per-tool source of truth) + data/categories/*.yaml.
// Writes: docs/README.md (index), docs/<NN>-<slug>.md (per category), docs/TOOLS.md (master table).

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { runBuild } from './lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const check = process.argv.includes('--check');
const result = runBuild(ROOT, { check });

if (result.errors.length) {
  for (const e of result.errors) console.error(`  ✗ ${e}`);
  console.error(`\n${result.errors.length} structural error(s) — docs were not ${check ? 'compared' : 'written'}. Fix the data (see: npm run validate:data).`);
  process.exit(1);
}

if (check) {
  if (!result.ok) {
    for (const d of result.drift) console.error(`  ✗ ${d}`);
    console.error(`\ndocs/ is out of date (${result.drift.length} file(s)). Run: npm run build:docs`);
    process.exit(1);
  }
  console.log(`docs/ is up to date (${result.files.size} generated files match the data).`);
} else {
  for (const name of result.files.keys()) console.log(`  docs/${name}`);
  const c = result.corpus;
  console.log(`\nScanned ${c.scanned} research files · ${c.tools.length} have data · ${Object.keys(c.cats).length} categories loaded.`);
}
