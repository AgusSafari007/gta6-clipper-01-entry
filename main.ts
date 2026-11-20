// gta6-clipper-01 entry program.
//
// The entry itself is a YouTube clip (see VIDEO.json and README.md). This
// program has exactly one job: hand the clip's address to the grader by
// copying VIDEO.json from the repository root into the output directory.
// It does the same thing on every run — no network, no clock, no state —
// so two runs always produce the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Fail loudly rather than hand the grader a broken address: VIDEO.json must
// parse and carry an https YouTube URL before anything is copied.
const videoJsonPath = join(botDir, "VIDEO.json");
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(videoJsonPath, "utf8"));
} catch (err) {
  console.error(`VIDEO.json is not readable JSON: ${(err as Error).message}`);
  process.exit(1);
}
const url = (parsed as { url?: unknown }).url;
if (typeof url !== "string" || !url.startsWith("https://")) {
  console.error("VIDEO.json must hold an https video address in its url field.");
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(videoJsonPath, join(outputDir, "VIDEO.json"));
