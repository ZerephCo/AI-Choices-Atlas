// SPDX-License-Identifier: Apache-2.0
// Structural validation of the atlas data (frontmatter cards + category files).
//   node validate-data.mjs        exit 1 when any structural error exists
// Checks: parseability, required fields, enums (status/hands_on/maturity/local),
// slug and category-number uniqueness, category references, date formats.

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadCorpus, validateCorpus } from './lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const corpus = loadCorpus(ROOT);
const errors = validateCorpus(corpus);

if (errors.length) {
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error(`\n${errors.length} structural error(s) across ${corpus.scanned} research files.`);
  process.exit(1);
}
console.log(`Data is structurally valid: ${corpus.tools.length} tools, ${Object.keys(corpus.cats).length} categories, 0 errors.`);
