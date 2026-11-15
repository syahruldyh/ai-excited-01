import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The image lives next to this program; the entry is a plain byte-for-byte
// copy of it into the output directory. Nothing is generated or fetched.
const OUTPUT_NAME = "entry.png";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, OUTPUT_NAME);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, OUTPUT_NAME);

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

console.log(`Wrote ${target}`);
