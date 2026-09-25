// Builds the ATS-safe HTML that Chromium prints to PDF.
//
// Layout constraints, all of them deliberate:
//  - one single column, no tables, no floats, no absolute positioning: an ATS
//    reads the DOM top to bottom and gets the same order a human sees;
//  - hyphens: none, so no keyword is ever split across lines ("Progra-madores"
//    is what broke the old LaTeX build);
//  - font-variant-ligatures: none, so "fi"/"fl" stay two extractable letters;
//  - letter-spacing stays at 0 everywhere, because per-character positioning
//    makes text extractors insert spaces inside words;
//  - Arial / Helvetica only, no icon font anywhere in the document.

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const BULLET = "• "; // plain bullet + plain space, nothing exotic in the text layer

const bullets = (items) =>
  `<ul class="b">${items.map((t) => `<li>${BULLET}${esc(t)}</li>`).join("")}</ul>`;

function section(sec, compact) {
  const head = `<h2>${esc(sec.title)}</h2>`;

  if (sec.type === "text") {
    const body = compact && sec.shortBody ? sec.shortBody : sec.body;
    return `<section class="keep">${head}<p class="t">${esc(body)}</p></section>`;
  }

  if (sec.type === "jobs") {
    const body = sec.items
      .map(
        (j) => `<div class="blk">
      <p class="role">${esc(j.role)}</p>
      <p class="org">${esc(j.org)}</p>
      <p class="meta">${esc(j.meta)}</p>
      ${bullets(compact && j.shortBullets ? j.shortBullets : j.bullets)}
    </div>`
      )
      .join("");
    return `<section>${head}${body}</section>`;
  }

  if (sec.type === "skills") {
    const groups = compact && sec.compactGroups ? sec.compactGroups : sec.groups;
    const body = groups
      .map(
        (g) =>
          `<p class="skill"><span class="skill-label">${esc(g.label)}:</span> ${esc(g.items)}</p>`
      )
      .join("");
    return `<section class="keep">${head}${body}</section>`;
  }

  if (sec.type === "education") {
    const body = sec.items
      .map(
        (e) => `<div class="blk">
      <p class="role">${esc(e.degree)}</p>
      <p class="org">${esc(e.school)}</p>
      <p class="meta">${esc(e.meta)}</p>
    </div>`
      )
      .join("");
    return `<section class="keep">${head}${body}</section>`;
  }

  if (sec.type === "projects") {
    // The one-page variant collapses each project to a single sentence and puts
    // the stack and the repo URL on one line, separated by " | " so a parser can
    // still split them. The two-page variant keeps the full Situation / Action /
    // Result bullets.
    const body = sec.items
      .map((p) =>
        compact
          ? `<div class="blk">
      <p class="role">${esc(p.name)}</p>
      <p class="t">${esc(p.short)}</p>
      <p class="meta">${esc(p.tech)} | ${esc(p.url)}</p>
    </div>`
          : `<div class="blk">
      <p class="role">${esc(p.name)}</p>
      <p class="tech">${esc(p.tech)}</p>
      <p class="meta">${esc(p.url)}</p>
      ${bullets(p.bullets)}
    </div>`
      )
      .join("");
    return `<section class="${compact ? "tight" : ""}">${head}${body}</section>`;
  }

  throw new Error(`unknown section type: ${sec.type}`);
}

// `compact` drives the one-page variant: same content model, smaller type scale
// and tighter leading. Nothing is hidden with display:none — trimming happens
// in the data layer, so the DOM and the extracted text always match the page.
export function renderHTML(cv, { compact = false, scale = 1 } = {}) {
  const sections = cv.sections
    .filter((s) => (compact ? !s.full : true))
    .map((s) =>
      s.type === "projects" && compact
        ? { ...s, items: s.items.filter((p) => p.core) }
        : s
    );

  // Type scale in points. `scale` is the autofit knob build.mjs turns to make a
  // variant land on its target page count; it never changes the content, only
  // the size of it, so the extracted text is identical at every scale.
  const s = (pt) => `${(pt * scale).toFixed(2)}pt`;
  const size = compact
    ? { base: s(9.4), name: s(19), head: s(9.9), role: s(10), small: s(8.6), gapSec: s(7.5), gapBlk: s(5.5), lh: 1.33 }
    : { base: s(10), name: s(21), head: s(10.5), role: s(10.8), small: s(8.8), gapSec: s(9), gapBlk: s(7), lh: 1.4 };

  const contact = cv.contactLines
    .map((line) => `<p class="contact">${esc(line.join(" | "))}</p>`)
    .join("");

  return `<!doctype html>
<html lang="${esc(cv.lang)}">
<head>
<meta charset="utf-8">
<title>${esc(cv.name)}</title>
<style>
  @page { size: A4; margin: 13mm 14mm; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${size.base};
    line-height: ${size.lh};
    color: #1a1a1a;
    background: #fff;
    hyphens: none;
    -webkit-hyphens: none;
    font-variant-ligatures: none;
    letter-spacing: 0;
    text-align: left;
  }
  h1 {
    font-size: ${size.name};
    font-weight: bold;
    color: #101828;
    line-height: 1.15;
  }
  .headline {
    font-size: ${size.head};
    color: #1e3a8a;
    font-weight: bold;
    margin-top: 2pt;
  }
  .contact { font-size: ${size.small}; color: #333; margin-top: 3pt; }
  header { padding-bottom: 6pt; border-bottom: 1.2pt solid #1e3a8a; }
  h2 {
    /* a section title must never be the last thing on a page */
    break-after: avoid;
    page-break-after: avoid;
    font-size: ${size.head};
    font-weight: bold;
    color: #1e3a8a;
    border-bottom: 0.6pt solid #c4cede;
    padding-bottom: 2pt;
    margin-bottom: 4pt;
  }
  section { margin-top: ${size.gapSec}; break-inside: auto; }
  /* summary, skills, education and languages are short enough to stay whole */
  section.keep { break-inside: avoid; }
  .blk { margin-top: ${size.gapBlk}; break-inside: avoid; }
  .blk:first-of-type { margin-top: 2pt; }
  .role { font-size: ${size.role}; font-weight: bold; color: #101828; }
  .org { color: #1f2937; }
  .tech { color: #374151; font-style: italic; }
  .meta { font-size: ${size.small}; color: #4b5563; }
  .t { text-align: left; }
  .skill { margin-top: 1.6pt; }
  .skill-label { font-weight: bold; color: #101828; }
  ul.b { list-style: none; margin-top: 2.4pt; }
  ul.b li {
    padding-left: 10pt;
    text-indent: -10pt;
    margin-top: 1.6pt;
    break-inside: avoid;
  }
  .tight .blk { margin-top: 4.5pt; }
  footer {
    margin-top: 10pt;
    padding-top: 4pt;
    border-top: 0.6pt solid #c4cede;
    font-size: ${s(8)};
    color: #4b5563;
  }
</style>
</head>
<body>
<header>
  <h1>${esc(cv.name)}</h1>
  <p class="headline">${esc(cv.headline)}</p>
  ${contact}
</header>
${sections.map((s) => section(s, compact)).join("\n")}
<footer>${esc(cv.footer)}</footer>
</body>
</html>`;
}
