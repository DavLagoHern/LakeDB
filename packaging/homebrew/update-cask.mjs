import { readFile, writeFile } from 'node:fs/promises';

const VERSION_PATTERN = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;
const SHA256_PATTERN = /^[0-9a-f]{64}$/;

function option(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

const caskPath = option('--cask');
const version = option('--version');
const sha256 = option('--sha256');

if (!caskPath || !version || !sha256) {
  throw new Error('Usage: node update-cask.mjs --cask <path> --version <version> --sha256 <hash>');
}
if (!VERSION_PATTERN.test(version)) throw new Error(`Invalid version: ${version}`);
if (!SHA256_PATTERN.test(sha256)) throw new Error(`Invalid SHA-256: ${sha256}`);

const source = await readFile(caskPath, 'utf8');
const updated = source
  .replace(/^  version ".*"$/m, `  version "${version}"`)
  .replace(/^  sha256 ".*"$/m, `  sha256 "${sha256}"`);

if (!updated.includes(`version "${version}"`) || !updated.includes(`sha256 "${sha256}"`)) {
  throw new Error('Could not update the cask version and checksum stanzas.');
}

await writeFile(caskPath, updated);
