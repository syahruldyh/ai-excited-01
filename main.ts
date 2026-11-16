import * as fs from "node:fs";
import * as path from "node:path";

// Copy the bundled entry image into the output directory.
// The image file lives next to this script, and the output directory is
// created when it does not exist yet, so the program works from a clean checkout.
const OUTPUT_FILE_NAME = "entry.png";
const source = path.join(import.meta.dirname, OUTPUT_FILE_NAME);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(source, path.join(outDir, OUTPUT_FILE_NAME));
