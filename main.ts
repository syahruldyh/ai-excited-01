import * as fs from "node:fs";
import * as path from "node:path";

// The entry is a single pre-made image: this program only places a copy
// of it in the output directory, so every run produces the same bytes.
const IMAGE_FILE = "entry.png";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = path.dirname(new URL(import.meta.url).pathname);

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(path.join(here, IMAGE_FILE), path.join(outDir, IMAGE_FILE));
