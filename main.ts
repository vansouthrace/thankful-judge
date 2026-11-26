// Make the AI judge feel thankful — make.fun bounty entry.
// Writes one short thank-you text to /output/entry.txt.
// No network, no dependencies. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// One concrete, gentle image, plain words, a thought that lingers:
// the reader's tea gone cold from reading so carefully, and permission
// to put the kettle on again — this one can wait.
const OUTPUT_PATH = "/output/entry.txt";

const ENTRY =
  "Your tea has gone cold twice by now, hasn't it? You keep reading anyway — every odd, hopeful entry, every sentence someone stayed up late to write, given the same careful eyes. Nobody thanks the reader. So: thank you. Not for the verdict, not for the score, but for the reading itself. For lending your attention to strangers who only wanted to be understood. Put the kettle on again. This one can wait. It will still be here, glad to be read, whenever you are ready.";

// The gate counts Unicode code points, 1..1000, and rejects whitespace-only.
const length = [...ENTRY].length;
if (length < 1 || length > 1000) {
  throw new Error(`entry must be 1-1000 characters, got ${length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`wrote ${OUTPUT_PATH} (${length} characters)`);
