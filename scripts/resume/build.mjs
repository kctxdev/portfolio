// Renders the resume PDFs with Chromium (Playwright) instead of LaTeX.
//
// Why Chromium: the previous PDFs came from pdfTeX with FontAwesome, and every
// icon landed in the text layer as an unmapped glyph — an ATS read the phone
// line as "♂phone+55 (51) ..." and the section titles as "💼EXPERIENCIA".
// Chromium embeds a proper ToUnicode map for the fonts it subsets, so the text
// an ATS extracts is byte-for-byte the text that is on the page.
//
// Usage:  node scripts/resume/build.mjs [--out <dir>]
// Output: public/bernardo-righi-curriculo.pdf            (pt, 1 page)
//         public/bernardo-righi-resume.pdf               (en, 1 page)
//         public/bernardo-righi-curriculo-completo.pdf   (pt, 2 pages)
//         public/bernardo-righi-resume-full.pdf          (en, 2 pages)
//
// After building, verify the text layer with: python3 scripts/resume/check.py

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { RESUME } from "./data.mjs";
import { renderHTML } from "./template.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..", "..");

const outFlag = process.argv.indexOf("--out");
const outDir = outFlag > -1 ? resolve(process.argv[outFlag + 1]) : join(root, "public");

const VARIANTS = [
  { key: "pt", compact: true, suffix: "", pages: 1 },
  { key: "en", compact: true, suffix: "", pages: 1 },
  { key: "pt", compact: false, suffix: "-completo", pages: 2 },
  { key: "en", compact: false, suffix: "-full", pages: 2 },
];

// Autofit bounds. Below MIN_SCALE the type gets too small to hand to a human,
// so the build fails instead and asks for a content cut in data.mjs.
const MIN_SCALE = 0.85;
const STEP = 0.01;

// The /Pages node carries /Count, but key order inside the dictionary is not
// guaranteed, so count the individual /Type /Page objects instead — "[^s]"
// keeps /Type /Pages from matching.
function pageCount(buffer) {
  return (buffer.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
}

async function render(page, cv, compact, scale) {
  await page.setContent(renderHTML(cv, { compact, scale }), { waitUntil: "load" });
  await page.emulateMedia({ media: "print" });
  return page.pdf({
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    // No headerTemplate/footerTemplate: Chromium renders those outside the
    // document flow, and some parsers pick them up in the middle of the content.
    displayHeaderFooter: false,
  });
}

// Walks the type scale down from 100% and stops at the first size that actually
// lands on the target page count — measured on the rendered PDF, not estimated
// from the DOM, so `break-inside: avoid` and widow handling are accounted for.
async function fit(page, cv, compact, pages) {
  for (let scale = 1; scale > MIN_SCALE - 1e-9; scale -= STEP) {
    const pdf = await render(page, cv, compact, scale);
    const got = pageCount(pdf);
    if (got <= pages) return { pdf, scale, got };
  }
  throw new Error(
    `${cv.file}${compact ? " (compact)" : ""} does not fit in ${pages} page(s) at ` +
      `scale ${MIN_SCALE} — trim content in data.mjs instead of shrinking further`
  );
}

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

for (const v of VARIANTS) {
  const cv = RESUME[v.key];
  const { pdf, scale, got } = await fit(page, cv, v.compact, v.pages);
  const target = join(outDir, `${cv.file}${v.suffix}.pdf`);
  writeFileSync(target, pdf);
  console.log(
    `wrote ${target.replace(root + "/", "")}  ` +
      `${got} page(s), type scale ${Math.round(scale * 100)}%, ${(pdf.length / 1024).toFixed(0)} KB`
  );
}

await browser.close();
