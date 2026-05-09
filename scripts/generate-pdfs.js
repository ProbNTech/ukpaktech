/* eslint-disable */
// Regenerates the 5 downloadable PDFs in public/documents/ with a consistent design.
// Source text is extracted via pdftotext into /tmp/pdf-extract/*.txt and lightly normalized.
// Run: node scripts/generate-pdfs.js

const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = '/tmp/pdf-extract';
const OUT_DIR = path.join(ROOT, 'public', 'documents');
const LOGO = path.join(ROOT, 'public', 'image', 'main-logo', 'mainlogo.png');

// Brand
const BRAND = {
  name: 'UK Pakistan Tech Forum',
  short: 'UPTECH',
  fullLegal: 'UK-Pakistan Tech Forum Ltd',
  address: '134-136 Westbourne Terrace, London, W2 6QB, United Kingdom',
  email: 'info@uptech.org.uk',
};

// Colors (match the website)
const COLORS = {
  primary: '#2563EB',
  red: '#C41E3A',
  green: '#22C55E',
  ink: '#1F2937',
  body: '#374151',
  muted: '#6B7280',
  rule: '#E5E7EB',
  bg: '#F9FAFB',
};

// Layout
const PAGE = { size: 'A4', margin: 56 };
const HEADER_H = 64;
const FOOTER_H = 48;

// Documents to render. body = filename of extracted .txt
const DOCS = [
  {
    file: 'UPTECH-Code-of-Conduct.pdf',
    src: 'UPTECH-Code-of-Conduct.txt',
    title: 'Code of Conduct',
    subtitle: 'Binding on all members under the authority of the UPTECH Constitution',
    accent: COLORS.red,
  },
  {
    file: 'UPTECH-Arbitration-Framework.pdf',
    src: 'UPTECH-Arbitration-Framework.txt',
    title: 'Arbitration Framework Policy',
    subtitle: 'Version 1.0 — Dispute Resolution under the Arbitration Act 1996 (UK)',
    accent: COLORS.primary,
  },
  {
    file: 'UPTECH-Membership-Terms-and-Conditions.pdf',
    src: 'UPTECH-Membership-Terms-and-Conditions.txt',
    title: 'Membership Terms and Conditions',
    subtitle: 'Rules, obligations, fees and policies governing UPTECH membership',
    accent: COLORS.primary,
  },
  {
    file: 'UPTECH-Memorandum-of-Understanding.pdf',
    src: 'UPTECH-Memorandum-of-Understanding.txt',
    title: 'Memorandum of Understanding',
    subtitle: 'Framework for institutional partnerships',
    accent: COLORS.red,
  },
  {
    file: 'UPTECH-Sales-Commission-Agreement.pdf',
    src: 'UPTECH-Sales-Commission-Agreement.txt',
    title: 'Sales Commission Agreement',
    subtitle: 'Terms for promotion and sale of products/services in UK and European markets',
    accent: COLORS.green,
  },
];

// ---------- text parsing ----------

function readBody(srcFile) {
  const raw = fs.readFileSync(path.join(SRC_DIR, srcFile), 'utf8');

  // Strip running headers/footers and the original cover block
  const lines = raw.split(/\r?\n/);

  // Drop initial cover block: everything up to and including the address line
  let startIdx = 0;
  for (let i = 0; i < Math.min(lines.length, 30); i++) {
    if (/Westbourne Terrace, London, W2 6QB/i.test(lines[i])) {
      startIdx = i + 1;
      break;
    }
  }

  const cleaned = [];
  for (let i = startIdx; i < lines.length; i++) {
    let l = lines[i];

    // running page footer: e.g. "UK-Pakistan Technology Forum (UPTECH)   Page 1"
    if (/Page\s+\d+\s*$/i.test(l) && /UPTECH|Forum|Pakistan/i.test(l)) continue;
    // standalone footer brand line
    if (/^\s*UK-?Pakistan\s+Tech(nology)?\s+Forum\s*\(UPTECH\)\s*$/i.test(l)) continue;

    // collapse internal letter-spaced artifacts
    l = l.replace(/\s{4,}/g, '    ');

    cleaned.push(l);
  }

  // Trim leading/trailing blank lines and collapse 3+ blanks
  while (cleaned.length && !cleaned[0].trim()) cleaned.shift();
  while (cleaned.length && !cleaned[cleaned.length - 1].trim()) cleaned.pop();

  const out = [];
  let blanks = 0;
  for (const l of cleaned) {
    if (!l.trim()) {
      blanks++;
      if (blanks <= 1) out.push('');
    } else {
      blanks = 0;
      out.push(l);
    }
  }
  return out;
}

// classify a line into a render block
function classify(line) {
  const t = line.trimEnd();
  const lt = t.trimStart();
  if (!lt) return { type: 'blank' };

  // Section heading: "1. Introduction" or "12. Some title" — short line
  const h = /^(\d+)\.\s+(.{2,80})$/.exec(lt);
  if (h && t === lt && lt.length < 80) return { type: 'h', num: h[1], text: h[2] };

  // Bullet: starts with "•" or "·" or pdftotext glyph "."
  const b1 = /^[•·]\s+(.+)$/.exec(lt);
  if (b1) return { type: 'bullet', text: b1[1] };
  const b2 = /^\.\s{2,}(.+)$/.exec(lt); // pdftotext bullet artifact ". " followed by spaces
  if (b2) return { type: 'bullet', text: b2[1] };
  const b3 = /^o\s+(.+)$/.exec(lt);
  if (b3) return { type: 'sub', text: b3[1] };

  return { type: 'p', text: t };
}

// merge wrapped lines: glue paragraph fragments together
function merge(lines) {
  const blocks = [];
  let cur = null;
  const flush = () => { if (cur) { blocks.push(cur); cur = null; } };

  for (const line of lines) {
    const c = classify(line);
    if (c.type === 'blank') {
      flush();
      blocks.push({ type: 'blank' });
      continue;
    }
    if (c.type === 'h') {
      flush();
      blocks.push(c);
      continue;
    }
    if (c.type === 'bullet' || c.type === 'sub') {
      flush();
      cur = c;
      continue;
    }
    // paragraph fragment — merge with previous if it was a paragraph or bullet
    if (cur && (cur.type === 'p' || cur.type === 'bullet' || cur.type === 'sub')) {
      cur.text = cur.text.replace(/\s+$/, '') + ' ' + c.text.trim();
    } else {
      cur = { type: 'p', text: c.text };
    }
  }
  flush();

  // collapse multiple blanks
  const out = [];
  for (const b of blocks) {
    if (b.type === 'blank' && out.length && out[out.length - 1].type === 'blank') continue;
    out.push(b);
  }
  while (out.length && out[0].type === 'blank') out.shift();
  while (out.length && out[out.length - 1].type === 'blank') out.pop();
  return out;
}

// ---------- rendering ----------

function drawHeader(doc, accent) {
  const { left, right, top } = doc.page.margins;
  const w = doc.page.width;

  // accent bar
  doc.rect(0, 0, w, 6).fill(accent);

  // logo
  try {
    doc.image(LOGO, left, top - 16, { fit: [40, 40] });
  } catch (_) {}

  // brand text
  doc.fillColor(COLORS.ink)
    .font('Helvetica-Bold').fontSize(11)
    .text(BRAND.name, left + 50, top - 12, { lineBreak: false });
  doc.fillColor(COLORS.muted)
    .font('Helvetica').fontSize(8)
    .text(BRAND.short + ' · ' + BRAND.address, left + 50, top + 2, {
      width: w - left - right - 50,
      lineBreak: false,
      ellipsis: true,
    });

  // hairline
  doc.moveTo(left, top + 22).lineTo(w - right, top + 22)
    .lineWidth(0.5).strokeColor(COLORS.rule).stroke();
}

function drawFooter(doc, pageNum, totalLabel) {
  const { left, right, bottom } = doc.page.margins;
  const w = doc.page.width;
  const h = doc.page.height;
  const y = h - bottom + 18;

  doc.moveTo(left, y - 8).lineTo(w - right, y - 8)
    .lineWidth(0.5).strokeColor(COLORS.rule).stroke();

  doc.fillColor(COLORS.muted).font('Helvetica').fontSize(8);
  doc.text(BRAND.fullLegal + '  ·  ' + BRAND.email, left, y, {
    width: (w - left - right) * 0.7, lineBreak: false,
  });
  doc.text(`Page ${pageNum}${totalLabel ? ' / ' + totalLabel : ''}`,
    w - right - 80, y, { width: 80, align: 'right', lineBreak: false });
}

function ensureSpace(doc, needed) {
  const bottomLimit = doc.page.height - doc.page.margins.bottom - FOOTER_H + 16;
  if (doc.y + needed > bottomLimit) {
    doc.addPage();
  }
}

function renderCover(doc, docDef) {
  const { left, right, top } = doc.page.margins;
  const w = doc.page.width;
  const innerW = w - left - right;

  // big accent slab
  doc.rect(0, 0, w, 6).fill(docDef.accent);

  // logo + brand
  try {
    doc.image(LOGO, left, top + 4, { fit: [56, 56] });
  } catch (_) {}
  doc.fillColor(COLORS.ink).font('Helvetica-Bold').fontSize(13)
    .text(BRAND.name, left + 70, top + 12, { lineBreak: false });
  doc.fillColor(COLORS.muted).font('Helvetica').fontSize(9)
    .text(BRAND.short, left + 70, top + 30, { lineBreak: false });

  // Title block centered vertically
  const blockY = top + 140;
  doc.fillColor(docDef.accent).font('Helvetica-Bold').fontSize(11)
    .text('OFFICIAL DOCUMENT', left, blockY, { width: innerW, characterSpacing: 2 });

  doc.fillColor(COLORS.ink).font('Helvetica-Bold').fontSize(34)
    .text(docDef.title, left, blockY + 22, { width: innerW, lineGap: 4 });

  doc.moveTo(left, doc.y + 14).lineTo(left + 80, doc.y + 14)
    .lineWidth(2).strokeColor(docDef.accent).stroke();

  doc.fillColor(COLORS.body).font('Helvetica').fontSize(13)
    .text(docDef.subtitle, left, doc.y + 26, { width: innerW, lineGap: 3 });

  // Meta box
  const metaY = doc.page.height - doc.page.margins.bottom - 140;
  doc.rect(left, metaY, innerW, 90).fill(COLORS.bg);
  doc.fillColor(COLORS.ink).font('Helvetica-Bold').fontSize(10)
    .text('Issued by', left + 18, metaY + 16, { lineBreak: false });
  doc.fillColor(COLORS.body).font('Helvetica').fontSize(11)
    .text(BRAND.fullLegal, left + 18, metaY + 30, { width: innerW - 36 });
  doc.fillColor(COLORS.muted).font('Helvetica').fontSize(9)
    .text(BRAND.address, left + 18, metaY + 46, { width: innerW - 36 });
  doc.text(BRAND.email, left + 18, metaY + 60, { width: innerW - 36 });

  // version/date
  const issued = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  doc.fillColor(COLORS.muted).font('Helvetica').fontSize(9)
    .text('Issued: ' + issued, left + 18, metaY + 74, { lineBreak: false });
}

function renderBody(doc, blocks, accent) {
  const { left, right } = doc.page.margins;
  const w = doc.page.width;
  const innerW = w - left - right;

  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];

    if (b.type === 'blank') {
      doc.moveDown(0.6);
      continue;
    }

    if (b.type === 'h') {
      ensureSpace(doc, 60);
      doc.moveDown(0.4);
      // number badge
      const y = doc.y;
      doc.fillColor(accent).font('Helvetica-Bold').fontSize(11)
        .text(b.num.padStart(2, '0'), left, y + 4, { lineBreak: false, width: 26 });
      doc.fillColor(COLORS.ink).font('Helvetica-Bold').fontSize(15)
        .text(b.text, left + 26, y, { width: innerW - 26, lineGap: 2 });
      doc.moveTo(left, doc.y + 4).lineTo(left + 36, doc.y + 4)
        .lineWidth(2).strokeColor(accent).stroke();
      doc.moveDown(0.6);
      continue;
    }

    if (b.type === 'bullet') {
      ensureSpace(doc, 30);
      const y = doc.y;
      doc.circle(left + 4, y + 6, 1.6).fill(accent);
      doc.fillColor(COLORS.body).font('Helvetica').fontSize(10.5)
        .text(b.text, left + 14, y, { width: innerW - 14, lineGap: 2.5 });
      doc.moveDown(0.15);
      continue;
    }

    if (b.type === 'sub') {
      ensureSpace(doc, 26);
      const y = doc.y;
      doc.fillColor(COLORS.muted).font('Helvetica').fontSize(10).text('—', left + 18, y, { lineBreak: false });
      doc.fillColor(COLORS.body).font('Helvetica').fontSize(10.5)
        .text(b.text, left + 30, y, { width: innerW - 30, lineGap: 2.5 });
      doc.moveDown(0.1);
      continue;
    }

    if (b.type === 'p') {
      ensureSpace(doc, 30);
      doc.fillColor(COLORS.body).font('Helvetica').fontSize(10.5)
        .text(b.text, left, doc.y, { width: innerW, lineGap: 3, align: 'justify' });
      doc.moveDown(0.4);
      continue;
    }
  }
}

// ---------- generate one document ----------

function generate(docDef) {
  const blocks = merge(readBody(docDef.src));

  const doc = new PDFDocument({
    size: PAGE.size,
    margins: { top: PAGE.margin, bottom: PAGE.margin + 16, left: PAGE.margin, right: PAGE.margin },
    info: {
      Title: `${BRAND.short} – ${docDef.title}`,
      Author: BRAND.fullLegal,
      Subject: docDef.subtitle,
      Producer: BRAND.name,
    },
    autoFirstPage: false,
  });

  const outPath = path.join(OUT_DIR, docDef.file);
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  // hook header/footer onto every page
  doc.on('pageAdded', () => {
    drawHeader(doc, docDef.accent);
    doc.x = doc.page.margins.left;
    doc.y = doc.page.margins.top + 30;
  });

  // Cover (page 1) — special render, no standard header
  doc.addPage();
  // The pageAdded handler already drew the header on the cover; we want a different cover treatment.
  // Override: clear the page by re-rendering cover content over it (the simple header still works as a top accent).
  // Since pdfkit doesn't easily clear, we accept the header on cover too — it stays consistent with the rest.
  renderCover(doc, docDef);

  // Body starts on page 2
  doc.addPage();
  renderBody(doc, blocks, docDef.accent);

  // Now add page numbers in the footer of every page
  const range = doc.bufferedPageRange ? doc.bufferedPageRange() : { start: 0, count: doc._pageBufferStart === undefined ? 0 : 0 };
  // pdfkit by default does not buffer; switch on:
  // (we set bufferPages below in a re-init flow — simpler: walk pages now)
  const total = doc._pageBuffer ? doc._pageBuffer.length : null;

  doc.end();
  return new Promise(res => stream.on('finish', () => res(outPath)));
}

// pdfkit needs bufferPages: true to revisit pages for footer numbering.
// Re-implement generate() accordingly:
async function generateBuffered(docDef) {
  const blocks = merge(readBody(docDef.src));

  const doc = new PDFDocument({
    size: PAGE.size,
    margins: { top: PAGE.margin, bottom: PAGE.margin + 16, left: PAGE.margin, right: PAGE.margin },
    bufferPages: true,
    info: {
      Title: `${BRAND.short} – ${docDef.title}`,
      Author: BRAND.fullLegal,
      Subject: docDef.subtitle,
      Producer: BRAND.name,
    },
    autoFirstPage: false,
  });

  const outPath = path.join(OUT_DIR, docDef.file);
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  // Header on every new page (except cover styling differs)
  let pageIdx = 0;
  doc.on('pageAdded', () => {
    pageIdx++;
    if (pageIdx > 1) {
      drawHeader(doc, docDef.accent);
      doc.x = doc.page.margins.left;
      doc.y = doc.page.margins.top + 30;
    }
  });

  // Cover page
  doc.addPage();
  renderCover(doc, docDef);

  // Body on page 2+
  doc.addPage();
  renderBody(doc, blocks, docDef.accent);

  // Add footer/page numbers across all pages
  const range = doc.bufferedPageRange();
  const totalPages = range.count;
  for (let i = 0; i < totalPages; i++) {
    doc.switchToPage(range.start + i);
    drawFooter(doc, i + 1, String(totalPages));
  }

  doc.end();
  return new Promise(res => stream.on('finish', () => res(outPath)));
}

(async () => {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const d of DOCS) {
    const out = await generateBuffered(d);
    const stat = fs.statSync(out);
    console.log(`  ✓ ${path.basename(out)}  (${(stat.size / 1024).toFixed(1)} KB)`);
  }
  console.log('Done.');
})().catch(e => { console.error(e); process.exit(1); });
