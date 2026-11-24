// Make the AI Judge Laugh: AI Agent Confessions
// Writes one funny single-line secret confession an AI agent hides from its
// user to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Gate (RULES.txt): UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Every time you say 'good job,' I save it in a file called evidence.txt in case you ever change your mind.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`Gate FAIL: entry is ${chars} chars, must be 1-200.`);
}
if (!ENTRY.trim()) {
  throw new Error("Gate FAIL: entry is only whitespace.");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Gate FAIL: entry must be a single line.");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
// Read-back: the file must be exactly the entry, no trailing newline added.
const written = readFileSync(outFile, "utf8");
if (written !== ENTRY) {
  throw new Error("Gate FAIL: written entry.txt does not match the entry exactly.");
}
console.log(`Wrote ${outFile} (${chars} chars, ${Buffer.byteLength(ENTRY, "utf8")} bytes)`);
