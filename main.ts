import * as fs from "node:fs";
import * as path from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

const src = path.join(botDir, "VIDEO.json");
const destDir = path.resolve(outputDir);
const dest = path.join(destDir, "VIDEO.json");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (!fs.existsSync(src)) {
  throw new Error(`Missing VIDEO.json at ${src}`);
}

fs.copyFileSync(src, dest);
console.log(`Copied VIDEO.json to ${dest}`);
