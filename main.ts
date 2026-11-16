// ai-excited-01 — writes the entry image to the output directory.
//
// The image itself (a colossal bioluminescent octopus rising from a
// flooded city square at dusk, tiny people below) is the entry; this
// program simply places it where the harness expects it.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

// The single image file this entry is built around.
const IMAGE_FILE = "entry.png";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, IMAGE_FILE), join(outDir, IMAGE_FILE));
console.log(`Wrote entry.png to ${outDir}`);
