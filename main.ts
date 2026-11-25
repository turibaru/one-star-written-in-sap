// The orchid speaks in first person, so the review reads like a houseplant airing a grievance, not a product page.
// One bloom in 2023 is the joke's clock: a single photo, shown to every guest since, stretched into years of fame.
// The stick in bark is the whole stage — the plant is gone, only the support is left doing the work.
// Keep the entry short on purpose: one star, one voice, one image that lands and stops.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const entryPath = join(scriptDir, "entry.txt");

const text = readFileSync(entryPath, "utf8").trim();

if (text.length < 1 || text.length > 279) {
  console.error(`entry.txt must be 1-279 characters, got ${text.length}`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
console.log(`Wrote ${text.length} characters to ${join(outputDir, "entry.txt")}`);
