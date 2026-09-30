#!/usr/bin/env python3
"""ATS sanity check for the generated resume PDFs.

Extracts the text layer exactly like an applicant tracking system would and
asserts the things that broke the old LaTeX build:

  1. no glyph from a private-use area (that is what an icon font leaves behind)
     and no U+FFFD replacement character;
  2. every section heading starts with a letter, not a stray icon byte;
  3. phone and e-mail are isolated by whitespace, not glued to a pictogram;
  4. no word is split across a line break by hyphenation;
  5. the page count matches what the variant promises.

Requires pypdf:  python3 -m pip install pypdf
Usage:           python3 scripts/resume/check.py
"""

import re
import sys
import unicodedata
from pathlib import Path

try:
    from pypdf import PdfReader
except ImportError:
    sys.exit("missing dependency: python3 -m pip install pypdf")

ROOT = Path(__file__).resolve().parents[2]

TARGETS = [
    ("public/Johnata-Silva-curriculo.pdf", 1, "pt"),
    ("public/Johnata-Silva-resume.pdf", 1, "en"),
    ("public/Johnata-Silva-curriculo-completo.pdf", 2, "pt"),
    ("public/Johnata-Silva-resume-full.pdf", 2, "en"),
]

HEADINGS = {
    "pt": ["RESUMO PROFISSIONAL", "EXPERIÊNCIA PROFISSIONAL", "HABILIDADES TÉCNICAS",
           "FORMAÇÃO ACADÊMICA", "IDIOMAS", "PROJETOS"],
    "en": ["PROFESSIONAL SUMMARY", "PROFESSIONAL EXPERIENCE", "TECHNICAL SKILLS",
           "EDUCATION", "LANGUAGES", "PROJECTS"],
}

EMAIL = "johnataichigo56@gmail.com"
PHONE = "+55 (11) 95944-5413"

# Anything outside these categories in the text layer is a red flag. Letters,
# marks, numbers, punctuation, separators and symbols that carry a real Unicode
# meaning are fine; unassigned and private-use code points are not.
BAD_CATEGORIES = {"Co", "Cn", "Cs"}


def illegible(text):
    out = []
    for ch in text:
        if ch in "\n\r\t":
            continue
        if unicodedata.category(ch) in BAD_CATEGORIES or ch == "�":
            out.append(ch)
    return out


def check(path, want_pages, lang):
    errors = []
    pdf = ROOT / path
    if not pdf.exists():
        return [f"{path}: file not found"]

    reader = PdfReader(str(pdf))
    pages = len(reader.pages)
    text = "\n".join(p.extract_text() for p in reader.pages)

    if pages != want_pages:
        errors.append(f"page count is {pages}, expected {want_pages}")

    bad = illegible(text)
    if bad:
        sample = " ".join(f"U+{ord(c):04X}" for c in dict.fromkeys(bad))
        errors.append(f"{len(bad)} illegible character(s): {sample}")

    for heading in HEADINGS[lang]:
        if heading not in text:
            errors.append(f"heading not found verbatim: {heading}")
            continue
        for line in text.splitlines():
            if heading in line and not line.strip().startswith(heading):
                prefix = line.strip()[: line.strip().index(heading)]
                errors.append(f"heading {heading!r} is prefixed by {prefix!r}")

    # Contact fields have to stand alone: a character glued to either side means
    # a parser will swallow it into the value.
    for label, value in (("e-mail", EMAIL), ("phone", PHONE)):
        if value not in text:
            errors.append(f"{label} not found verbatim")
            continue
        for match in re.finditer(re.escape(value), text):
            before = text[match.start() - 1] if match.start() else " "
            after = text[match.end()] if match.end() < len(text) else " "
            if not before.isspace() or not (after.isspace() or after in "|,"):
                errors.append(f"{label} glued to {before!r}...{after!r}")

    for match in re.finditer(r"[A-Za-zÀ-ÿ]-\n[a-zà-ÿ]", text):
        errors.append(f"hyphenated line break: {match.group(0)!r}")

    return errors


def main():
    failed = False
    for path, want_pages, lang in TARGETS:
        errors = check(path, want_pages, lang)
        name = Path(path).name
        if errors:
            failed = True
            print(f"FAIL  {name}")
            for e in errors:
                print(f"        - {e}")
        else:
            print(f"ok    {name}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
