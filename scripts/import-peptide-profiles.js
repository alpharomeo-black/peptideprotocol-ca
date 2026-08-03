const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const sourceFiles = [
  "/Users/alphablackburn/.codex/attachments/7c021c97-6bb4-4dd5-888d-c835b33b3df5/pasted-text.txt",
  "/Users/alphablackburn/.codex/attachments/e2873888-9fac-45e4-a4ac-9a8431d1b6b2/pasted-text.txt",
  "/Users/alphablackburn/.codex/attachments/64125511-ec32-4fcf-b6dc-f24d2219e48e/pasted-text.txt",
  path.join(root, "peptide-profiles-batch2a.md"),
  path.join(root, "peptide-profiles-batch2b.md")
];

const existingProfiles = [
  {
    name: "Retatrutide",
    slug: "retatrutide",
    category: "Metabolic",
    summary: "A next-generation triple-agonist peptide documented for appetite control, body-composition support, and deeper metabolic change.",
    image: "assets/drafts/peptides/retatrutide-feature.png"
  },
  {
    name: "Tirzepatide",
    slug: "tirzepatide",
    category: "Metabolic",
    summary: "A dual incretin peptide commonly discussed for appetite control, blood sugar management, and clinically meaningful weight reduction.",
    image: "assets/peptides/tirzepatide-feature.png"
  },
  {
    name: "NAD+",
    slug: "nad-plus",
    category: "Longevity",
    summary: "A foundational cellular coenzyme commonly used in longevity and energy-focused protocols to support repair, resilience, and clearer daily output.",
    image: "assets/drafts/peptides/nad-plus-feature.png"
  },
  {
    name: "KLOW",
    slug: "klow",
    category: "Recovery",
    summary: "A four-compound repair blend built around tissue support, inflammation control, collagen signalling, and everyday recovery capacity.",
    image: "assets/drafts/peptides/klow-feature.png"
  },
  {
    name: "MOTS-c",
    slug: "mots-c",
    category: "Metabolic / Longevity",
    summary: "A mitochondrial signalling peptide used in metabolic and longevity conversations to improve energy use, insulin sensitivity, and cellular efficiency.",
    image: "assets/drafts/peptides/mots-c-feature.png"
  },
  {
    name: "PT-141",
    slug: "pt-141",
    category: "Hormonal / Wellbeing",
    summary: "A centrally acting melanocortin peptide used in desire-focused protocols where stress, fatigue, and neurological drive matter more than mechanics alone.",
    image: "assets/drafts/peptides/pt-141-feature.png"
  }
];

const imageByCategory = {
  metabolic: "../assets/home-hero.jpg",
  recovery: "../assets/recovery-feature-generated.png",
  cognitive: "../assets/article-desk.png",
  performance: "../assets/home-hero-alt.png",
  longevity: "../assets/about-hero.png",
  immune: "../assets/recovery-feature-generated.png",
  hormonal: "../assets/drafts/peptides/pt-141-feature.png"
};

const cardImageByCategory = {
  metabolic: "assets/home-hero.jpg",
  recovery: "assets/recovery-feature-generated.png",
  cognitive: "assets/article-desk.png",
  performance: "assets/home-hero-alt.png",
  longevity: "assets/about-hero.png",
  immune: "assets/recovery-feature-generated.png",
  hormonal: "assets/drafts/peptides/pt-141-feature.png"
};

const featureImageBySlug = {
  "bpc-157": "assets/peptides/bpc-157-feature.png",
  "tb-500": "assets/peptides/tb-500-feature.png",
  "ghk-cu": "assets/peptides/ghk-cu-feature.png",
  "kpv": "assets/peptides/kpv-feature.png",
  "semaglutide": "assets/peptides/semaglutide-feature.png",
  "cjc-1295-ipamorelin": "assets/peptides/cjc-1295-ipamorelin-feature.png",
  "semax": "assets/peptides/semax-feature.png",
  "selank": "assets/peptides/selank-feature.png",
  "hexarelin": "assets/peptides/hexarelin-feature.png",
  "tesamorelin": "assets/peptides/tesamorelin-feature.png",
  "epithalon": "assets/peptides/epithalon-feature.png",
  "aod9604": "assets/peptides/aod9604-feature.png",
  "5-amino-1mq": "assets/peptides/5-amino-1mq-feature.png",
  "thymosin-alpha-1": "assets/peptides/thymosin-alpha-1-feature.png",
  "ipamorelin": "assets/peptides/ipamorelin-feature.png",
  "cjc-1295": "assets/peptides/cjc-1295-feature.png",
  "sermorelin": "assets/peptides/sermorelin-feature.png",
  "hgh": "assets/peptides/hgh-feature.png",
  "igf-1-lr3": "assets/peptides/igf-1-lr3-feature.png",
  "ghrp-6": "assets/peptides/ghrp-6-feature.png",
  "glow": "assets/peptides/glow-feature.png",
  "ss-31": "assets/peptides/ss-31-feature.png",
  "humanin": "assets/peptides/humanin-feature.png",
  "cagrilintide": "assets/peptides/cagrilintide-feature.png"
};

const ogImageBySlug = {
  "ipamorelin": "assets/og/ipamorelin-og.svg",
  "cjc-1295": "assets/og/cjc-1295-og.svg",
  "sermorelin": "assets/og/sermorelin-og.svg",
  "hgh": "assets/og/hgh-og.svg",
  "igf-1-lr3": "assets/og/igf-1-lr3-og.svg",
  "ghrp-6": "assets/og/ghrp-6-og.svg",
  "glow": "assets/og/glow-og.svg",
  "ss-31": "assets/og/ss-31-og.svg",
  "humanin": "assets/og/humanin-og.svg",
  "cagrilintide": "assets/og/cagrilintide-og.svg"
};

const diagramImageBySlug = {
  "bpc-157": "assets/diagrams/bpc-157-tendon-nerve-repair-diagram.png",
  "tb-500": "assets/diagrams/tb-500-systemic-repair-cell-migration-diagram.png",
  "ghk-cu": "assets/diagrams/ghk-cu-collagen-synthesis-skin-repair-diagram.png",
  "kpv": "assets/diagrams/kpv-inflammation-pathway-diagram.png",
  "semaglutide": "assets/diagrams/semaglutide-tirzepatide-retatrutide-weight-loss-comparison-diagram.png",
  "cjc-1295-ipamorelin": "assets/diagrams/cjc-1295-ipamorelin-growth-hormone-pulse-diagram.png",
  "semax": "assets/diagrams/semax-bdnf-neuroprotection-pathway-diagram.png",
  "selank": "assets/diagrams/selank-noise-signal-anxiety-diagram.png",
  "hexarelin": "assets/diagrams/hexarelin-growth-hormone-pulse-tradeoff-diagram.png",
  "tesamorelin": "assets/diagrams/tesamorelin-visceral-fat-gh-pulse-diagram.png",
  "epithalon": "assets/diagrams/epithalon-telomere-maintenance-diagram.png",
  "aod9604": "assets/diagrams/aod9604-fat-burning-signal-diagram.png",
  "5-amino-1mq": "assets/diagrams/5-amino-1mq-nnmt-fat-expansion-diagram.png",
  "thymosin-alpha-1": "assets/diagrams/thymosin-alpha-1-immune-training-diagram.png",
  "ipamorelin": "assets/diagrams/ipamorelin-gh-without-noise-diagram.png",
  "cjc-1295": "assets/diagrams/cjc-1295-no-dac-vs-dac-diagram.png",
  "sermorelin": "assets/diagrams/sermorelin-original-ghrh-fragment-diagram.png",
  "hgh": "assets/diagrams/hgh-direct-delivery-diagram.png",
  "igf-1-lr3": "assets/diagrams/igf-1-lr3-hypertrophy-hyperplasia-diagram.png",
  "ghrp-6": "assets/diagrams/ghrp-6-vs-ipamorelin-comparison-diagram.png",
  "glow": "assets/diagrams/glow-blend-repair-trio-diagram.png",
  "ss-31": "assets/diagrams/ss-31-cell-engine-room-diagram.png",
  "humanin": "assets/diagrams/humanin-mitochondrial-survival-signal-diagram.png",
  "cagrilintide": "assets/diagrams/cagrilintide-second-appetite-system-diagram.png"
};

const diagramCaptionBySlug = {
  "bpc-157": "BPC-157 is easiest to understand as a repair signal: blood flow, nerve support, and tendon repair all working around slow-healing tissue.",
  "tb-500": "This diagram shows TB-500 as a systemic repair messenger, helping explain why it is often discussed differently than site-specific compounds.",
  "ghk-cu": "GHK-Cu makes more sense when you picture collagen organization as a signal your body already knows how to run.",
  "kpv": "KPV is framed here as an inflammation-volume control, interrupting overactive signaling before it becomes louder than it needs to be.",
  "semaglutide": "This comparison gives context for semaglutide as the established GLP-1 reference point beside newer incretin-based compounds.",
  "cjc-1295-ipamorelin": "CJC-1295 and Ipamorelin are often paired because they approach the same growth-hormone pulse from two different signaling directions.",
  "semax": "Semax is easier to understand as a brain-signaling support tool rather than a stimulant or simple focus supplement.",
  "selank": "Selank is pictured as a noise-control tool, helping explain why people discuss it around calm focus instead of sedation.",
  "hexarelin": "Hexarelin is shown as a stronger pulse with a faster tradeoff, which is the main idea to understand before comparing it to cleaner GH secretagogues.",
  "tesamorelin": "Tesamorelin is included here through its pituitary-to-GH pathway and the clinical context around visceral fat reduction.",
  "epithalon": "Epithalon is usually discussed through telomere maintenance, so this image gives a simple visual for the 'cellular caps' idea.",
  "aod9604": "AOD9604 is easiest to picture as a narrower fat-metabolism signal rather than the broader, full-body HGH pathway.",
  "5-amino-1mq": "5-Amino-1MQ is shown as an NNMT blocker, which helps explain why it is discussed around fat-cell expansion and NAD+ handling.",
  "thymosin-alpha-1": "Thymosin Alpha-1 is best understood as immune coordination, not immune stimulation for its own sake.",
  "ipamorelin": "Ipamorelin is easiest to understand as a cleaner GH pulse: strong on growth-hormone signaling without the same appetite, cortisol, or prolactin noise.",
  "cjc-1295": "This image keeps the No-DAC question front and center, because short pulsed signaling and long DAC exposure are very different protocol conversations.",
  "sermorelin": "Sermorelin and CJC-1295 No-DAC act through the same GHRH receptor, but the practical difference is how long that pulse tends to last.",
  "hgh": "HGH is shown as direct delivery rather than a pituitary prompt, which is why it can feel more powerful and more complex than secretagogues.",
  "igf-1-lr3": "IGF-1 LR3 is framed through the hypertrophy-versus-hyperplasia idea: bigger existing fibers versus new growth signaling discussed mostly in limited models.",
  "ghrp-6": "GHRP-6 and Ipamorelin can both create a GH pulse, but GHRP-6 brings a very different appetite and hormone-noise profile.",
  "glow": "GLOW is easiest to picture as a three-part repair stack: local repair, skin renovation, and systemic cell mobilization.",
  "ss-31": "SS-31 is pictured as mitochondrial membrane support, helping explain why people describe it around cellular efficiency rather than stimulation.",
  "humanin": "Humanin is shown as a mitochondrial survival signal with brain, metabolic, and cardiovascular conversations branching from the same core idea.",
  "cagrilintide": "Cagrilintide is framed as a second appetite pathway, separate from GLP-1, that converges with satiety signaling."
};

const headingAliases = {
  "WHAT IS": "What It Is",
  "WHAT IS BPC-157?": "What It Is",
  "WHAT IS TB-500?": "What It Is",
  "WHAT IS GHK-Cu?": "What It Is",
  "WHAT IS KPV?": "What It Is",
  "THE PLAIN ENGLISH VERSION": "Plain English Version",
  "HOW IT WORKS": "How It Works",
  "DOCUMENTED BENEFITS": "Documented Benefits",
  "DOSING PROTOCOL": "Dosing Protocol",
  "RECONSTITUTION STANDARD": "Reconstitution Standard",
  "DOSAGE BUILD-UP TIMELINE": "Dosage Build-Up Timeline",
  "COMMON MISTAKES": "Common Mistakes",
  "CONTRAINDICATIONS AND CAUTIONS": "Contraindications And Cautions",
  "WHAT TO TRACK": "What To Track",
  "STACKS WELL WITH": "Stacks Well With",
  "PROTOCOL CHECKLIST SIDEBAR": "Protocol Checklist",
  "QUICK STATS CARD": "Quick Stats",
  "INLINE DIAGRAM SPEC / CHATGPT DIAGRAM PROMPT": "Diagram Brief",
  "DIAGRAM CHATGPT PROMPT": "Diagram Brief",
  "SOURCES": "Sources",
  "FINAL DISCLAIMER": "Disclaimer"
};

const displayNamesBySlug = {
  "semaglutide": "Semaglutide",
  "cjc-1295-ipamorelin": "CJC-1295 + Ipamorelin",
  "semax": "Semax",
  "selank": "Selank",
  "hexarelin": "Hexarelin",
  "tesamorelin": "Tesamorelin",
  "epithalon": "Epithalon",
  "aod9604": "AOD9604",
  "5-amino-1mq": "5-Amino-1MQ",
  "thymosin-alpha-1": "Thymosin Alpha-1",
  "ipamorelin": "Ipamorelin",
  "cjc-1295": "CJC-1295 No-DAC",
  "sermorelin": "Sermorelin",
  "hgh": "HGH",
  "igf-1-lr3": "IGF-1 LR3",
  "ghrp-6": "GHRP-6",
  "glow": "GLOW Blend",
  "ss-31": "SS-31",
  "humanin": "Humanin",
  "cagrilintide": "Cagrilintide",
  "bpc-157": "BPC-157",
  "tb-500": "TB-500",
  "ghk-cu": "GHK-Cu",
  "kpv": "KPV"
};

const iconManifestPath = path.join(root, "assets", "peptide-icons", "icon-manifest.json");
const iconManifest = fs.existsSync(iconManifestPath)
  ? JSON.parse(fs.readFileSync(iconManifestPath, "utf8"))
  : [];

function slugify(value) {
  return value.toLowerCase()
    .replace(/\+/g, " plus ")
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function titleCase(value) {
  return String(value || "")
    .toLowerCase()
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function normalizeHeading(value) {
  const clean = value.replace(/^#+\s*/, "").trim();
  const upper = clean.toUpperCase();
  if (headingAliases[clean]) return headingAliases[clean];
  if (headingAliases[upper]) return headingAliases[upper];
  if (/^WHAT IS\b/i.test(clean)) return "What It Is";
  if (/^INLINE DIAGRAM/i.test(clean)) return "Diagram Brief";
  if (/^DOCUMENTED BENEFITS ICONS/i.test(clean)) return null;
  if (/^COMMON MISTAKES ICONS/i.test(clean)) return null;
  if (/^CONTRAINDICATIONS ICONS/i.test(clean)) return null;
  if (/^FEATURE IMAGE PROMPT/i.test(clean)) return "Feature Image Prompt";
  if (/^OG SOCIAL SHARE IMAGE PROMPT/i.test(clean)) return "OG Image Prompt";
  if (/^ONE-SENTENCE SUMMARY/i.test(clean)) return "One-Sentence Summary";
  if (/^RELATED PEPTIDES/i.test(clean)) return "Related Peptides";
  return titleCase(clean);
}

function detectHeading(line) {
  const trimmed = line.trim();
  if (!trimmed) return undefined;
  if (/^#{1,3}\s+/.test(trimmed)) return normalizeHeading(trimmed);
  if (/^FEATURE IMAGE PROMPT/i.test(trimmed)) return "Feature Image Prompt";
  if (/^OG SOCIAL SHARE IMAGE PROMPT/i.test(trimmed)) return "OG Image Prompt";
  if (/^ONE-SENTENCE SUMMARY/i.test(trimmed)) return "One-Sentence Summary";
  if (/^WHAT IS\b/i.test(trimmed)) return "What It Is";
  if (/^THE PLAIN ENGLISH VERSION/i.test(trimmed)) return "Plain English Version";
  if (/^HOW IT WORKS/i.test(trimmed)) return "How It Works";
  if (/^DOCUMENTED BENEFITS ICONS/i.test(trimmed)) return null;
  if (/^COMMON MISTAKES ICONS/i.test(trimmed)) return null;
  if (/^CONTRAINDICATIONS ICONS/i.test(trimmed)) return null;
  if (/^DOCUMENTED BENEFITS\b/i.test(trimmed)) return "Documented Benefits";
  if (/^DOSING PROTOCOL\b/i.test(trimmed)) return "Dosing Protocol";
  if (/^RECONSTITUTION STANDARD\b/i.test(trimmed)) return "Reconstitution Standard";
  if (/^DOSAGE BUILD-UP TIMELINE\b/i.test(trimmed)) return "Dosage Build-Up Timeline";
  if (/^COMMON MISTAKES\b/i.test(trimmed)) return "Common Mistakes";
  if (/^CONTRAINDICATIONS AND CAUTIONS\b/i.test(trimmed)) return "Contraindications And Cautions";
  if (/^WHAT TO TRACK\b/i.test(trimmed)) return "What To Track";
  if (/^STACKS WELL WITH\b/i.test(trimmed)) return "Stacks Well With";
  if (/^PROTOCOL CHECKLIST SIDEBAR\b/i.test(trimmed)) return "Protocol Checklist";
  if (/^QUICK STATS CARD\b/i.test(trimmed)) return "Quick Stats";
  if (/^(INLINE DIAGRAM SPEC|DIAGRAM CHATGPT PROMPT)\b/i.test(trimmed)) return "Diagram Brief";
  if (/^RELATED PEPTIDES\b/i.test(trimmed)) return "Related Peptides";
  if (/^SOURCES\b/i.test(trimmed)) return "Sources";
  if (/^FINAL DISCLAIMER\b/i.test(trimmed)) return "Disclaimer";
  return undefined;
}

function parseMarkdownProfiles(text) {
  const marker = /(?:^|\n)(?:#\s*)?PROFILE\s+\d+:\s*([^\n]+)\n([\s\S]*?)(?=\n={10,}\n(?:#\s*)?PROFILE\s+\d+:|\n={10,}\nBATCH|\s*$)/gi;
  const profiles = [];
  let match;
  while ((match = marker.exec(text))) {
    const rawName = match[1].trim().replace(/\s*\([^)]*STANDALONE[^)]*\)/i, "");
    const body = match[2].trim();
    const slugMatch = body.match(/Slug:\s*(?:\/peptides\/)?([^\s|]+)/i);
    const slug = slugMatch ? slugMatch[1].trim() : slugify(rawName);
    const categoryMatch = body.match(/Category:\s*([^\n|]+)/i);
    const sections = {};
    let current = null;
    body.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (/^(Slug|Category):/i.test(trimmed)) return;
      const heading = detectHeading(trimmed);
      if (heading !== undefined) {
        if (!heading) {
          current = null;
          return;
        }
        current = heading;
        if (!sections[current]) sections[current] = [];
        return;
      }
      if (!current) return;
      sections[current].push(line);
    });
    Object.keys(sections).forEach((key) => {
      sections[key] = sections[key].join("\n").trim().replace(/^"|"$/g, "");
    });
    profiles.push({
      name: displayNamesBySlug[slug] || rawName,
      slug,
      category: categoryMatch ? categoryMatch[1].trim() : "Wellness",
      sections
    });
  }
  return profiles;
}

function markdownToHtml(markdown) {
  const lines = String(markdown || "").split(/\r?\n/);
  let html = "";
  let paragraph = [];
  let list = [];
  let table = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    const text = paragraph.join(" ").trim();
    if (text) html += `<p>${formatInline(text)}</p>\n`;
    paragraph = [];
  }
  function flushList() {
    if (!list.length) return;
    html += `<ul class="profile-list">\n${list.map((item) => `<li>${formatInline(item)}</li>`).join("\n")}\n</ul>\n`;
    list = [];
  }
  function flushTable() {
    if (!table.length) return;
    const rows = table.map((row) => row.split("|").slice(1, -1).map((cell) => cell.trim()));
    const bodyRows = rows.filter((row) => !row.every((cell) => /^:?-{2,}:?$/.test(cell)));
    if (bodyRows.length) {
      const head = bodyRows[0];
      const body = bodyRows.slice(1);
      html += `<div class="draft-table-wrap"><table class="draft-table"><thead><tr>${head.map((cell) => `<th>${formatInline(cell)}</th>`).join("")}</tr></thead><tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${formatInline(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>\n`;
    }
    table = [];
  }
  function flushAll() {
    flushParagraph();
    flushList();
    flushTable();
  }

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushAll();
      return;
    }
    if (/^\|.*\|$/.test(trimmed)) {
      flushParagraph();
      flushList();
      table.push(trimmed);
      return;
    }
    if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph();
      flushTable();
      list.push(trimmed.replace(/^[-*]\s+/, ""));
      return;
    }
    if (/^>\s*/.test(trimmed)) {
      flushAll();
      html += `<p>${formatInline(trimmed.replace(/^>\s*/, ""))}</p>\n`;
      return;
    }
    flushList();
    flushTable();
    paragraph.push(trimmed);
  });
  flushAll();
  return html;
}

function isSimpleHeaderLine(line) {
  return /^(phase|protocol|dose(?: \(each\)| each)?|your dose|frequency|notes|timing|route|units(?: to draw)?|volume|duration|amount)$/i.test(line.trim());
}

function tableFromPlainLines(block) {
  const lines = splitLines(block);
  if (lines.length < 4 || lines.some((line) => line.includes("|"))) return "";
  let headerCount = 0;
  while (headerCount < lines.length && isSimpleHeaderLine(lines[headerCount])) headerCount += 1;
  if (headerCount < 2 || headerCount > 5) return "";

  const rowLines = lines.slice(headerCount);
  if (rowLines.length < headerCount || rowLines.length % headerCount !== 0) return "";
  const headers = lines.slice(0, headerCount);
  const rows = [];
  for (let index = 0; index < rowLines.length; index += headerCount) {
    rows.push(rowLines.slice(index, index + headerCount));
  }

  return `<div class="draft-table-wrap"><table class="draft-table"><thead><tr>${headers.map((cell) => `<th>${formatInline(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${formatInline(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>\n`;
}

function tableSectionToHtml(content) {
  return String(content || "")
    .split(/\n\s*\n/)
    .map((block) => tableFromPlainLines(block) || markdownToHtml(block))
    .join("");
}

function listSectionToHtml(content, className = "") {
  if (String(content || "").includes("|") || /^[-*]\s+/m.test(String(content || ""))) {
    const html = markdownToHtml(content);
    return className ? html.replace('<ul class="profile-list">', `<ul class="profile-list ${className}">`) : html;
  }
  const lines = splitLines(content);
  if (lines.length <= 1) return markdownToHtml(content);
  return `<ul class="profile-list ${className}">\n${lines.map((line) => `<li>${formatInline(line)}</li>`).join("\n")}\n</ul>\n`;
}

function splitIssueLine(line) {
  const clean = String(line || "").trim();
  const parts = clean.split(/\s+[-–—]\s+/);
  if (parts.length > 1) {
    return {
      title: parts.shift().trim(),
      body: parts.join(" - ").trim()
    };
  }
  const colonParts = clean.split(/:\s+/);
  if (colonParts.length > 1 && colonParts[0].length < 80) {
    return {
      title: colonParts.shift().trim(),
      body: colonParts.join(": ").trim()
    };
  }
  return {
    title: clean,
    body: ""
  };
}

function issueIconClass(section) {
  if (section === "Documented Benefits") return "issue-icon--benefit";
  if (section === "Common Mistakes") return "issue-icon--mistake";
  if (section === "Contraindications And Cautions") return "issue-icon--caution";
  return "issue-icon--note";
}

const issueIconRules = [
  [/thyroid|men2|carcinoma/i, "thyroid"],
  [/pancrea/i, "pancreas"],
  [/pregnan|breastfeeding/i, "pregnancy"],
  [/kidney|renal/i, "kidney"],
  [/cancer|tumou?r|oncology/i, "cancer"],
  [/hypersensitivity|allerg|sensitivity/i, "allergy"],
  [/blood pressure|cardio|heart|hypertension/i, "heart"],
  [/retinopathy|vision|eye/i, "eye"],
  [/insulin|glucose|blood sugar|a1c|diabetes/i, "glucose"],
  [/gastro|gi disease|gut|bowel|colon|mucosal/i, "gut"],
  [/copper/i, "mineral"],
  [/niacin|flushing/i, "flush"],
  [/medication|interaction|pde5|viagra|cialis|sulfonylurea/i, "medication"],
  [/weight|body composition|fat loss|fat reduction|visceral|subcutaneous|adipose|bmi/i, "scale"],
  [/appetite|food noise|hunger|satiety/i, "appetite"],
  [/protein|muscle/i, "protein"],
  [/hydration|water|dehydrat/i, "water"],
  [/dose|dosing|titrating|increasing|starting|maintenance|daily use|under-dosing/i, "dose"],
  [/inject|injection|site|rotating|subcutaneous/i, "syringe"],
  [/stability|storage|freez|28-day|window|reconstituted|vial/i, "vial"],
  [/baseline|tracking|bloodwork|markers|lab/i, "chart"],
  [/night|evening|sleep|apnea/i, "moon"],
  [/meal|skipping|under eating|undereating/i, "meal"],
  [/confusion|brand|expecting|instant|immediate|viagra-like/i, "question"],
  [/tendon|ligament|joint|connective|injury|repair|recovery/i, "repair"],
  [/inflammation|immune|cytokine/i, "immune"],
  [/collagen|elastin|skin|hair/i, "collagen"],
  [/energy|mitochond|cellular|exercise tolerance|ampk/i, "energy"],
  [/nad|sirtuin|dna|telomere|longevity|anti-aging/i, "dna"],
  [/cognitive|focus|memory|brain|neuro|clarity|bdnf/i, "brain"],
  [/growth hormone|gh |secretagogue|pulse|pituitary|igf/i, "pulse"],
  [/sexual|desire|arousal|libido|hsdd|hormonal/i, "spark"],
  [/liver/i, "liver"],
  [/hair follicle/i, "hair"],
  [/calm|anxiety|stress/i, "calm"],
  [/nausea/i, "stomach"],
  [/headache/i, "head"],
  [/shaking/i, "shake"],
  [/cycle|cycling/i, "cycle"]
];

const issueIconSvgPaths = {
  allergy: "<path d='M12 3 19 6v5c0 4.5-2.8 8.2-7 10-4.2-1.8-7-5.5-7-10V6l7-3Z'/><path d='m9 12 2 2 4-5'/>",
  appetite: "<path d='M7 3v18'/><path d='M4 3v6a3 3 0 0 0 6 0V3'/><path d='M15 3v18'/><path d='M15 3c3 1 5 4 5 8h-5'/>",
  brain: "<path d='M9 4a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4'/><path d='M15 4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4'/><path d='M9 4v16'/><path d='M15 4v16'/><path d='M9 9h6'/><path d='M9 15h6'/>",
  calm: "<path d='M4 14c3-4 7-4 10 0 2 2 4 2 6 0'/><path d='M4 9c3-3 6-3 9 0 2 2 4 2 7 0'/>",
  cancer: "<path d='M12 3 19 6v5c0 4.5-2.8 8.2-7 10-4.2-1.8-7-5.5-7-10V6l7-3Z'/><path d='M12 8v8'/><path d='M8 12h8'/>",
  chart: "<path d='M4 19h16'/><path d='M7 16v-5'/><path d='M12 16V7'/><path d='M17 16v-8'/>",
  collagen: "<path d='M7 4c5 3 5 13 10 16'/><path d='M17 4c-5 3-5 13-10 16'/><path d='M9 8h6'/><path d='M9 12h6'/><path d='M9 16h6'/>",
  cycle: "<path d='M17 4h3v3'/><path d='M20 7a8 8 0 0 0-14-2'/><path d='M7 20H4v-3'/><path d='M4 17a8 8 0 0 0 14 2'/>",
  dna: "<path d='M7 4c5 3 5 13 10 16'/><path d='M17 4c-5 3-5 13-10 16'/><path d='M8 7h8'/><path d='M8 12h8'/><path d='M8 17h8'/>",
  dose: "<path d='M7 17 17 7'/><path d='m14 4 6 6'/><path d='M5 19l4-1 10-10-3-3L6 15l-1 4Z'/><path d='M11 10l3 3'/>",
  energy: "<path d='M13 2 5 14h6l-1 8 9-13h-6l0-7Z'/>",
  eye: "<path d='M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z'/><circle cx='12' cy='12' r='3'/>",
  flush: "<path d='M12 3c3 3 5 6 5 10a5 5 0 0 1-10 0c0-4 2-7 5-10Z'/><path d='M9 14h6'/>",
  glucose: "<path d='M12 3v18'/><path d='M7 7c0-2 2-4 5-4s5 2 5 4-2 4-5 5-5 3-5 5 2 4 5 4 5-2 5-4'/>",
  gut: "<path d='M8 4c4 0 8 3 8 7s-3 4-5 4-3 1-3 3 2 3 4 3'/><path d='M12 7c2 1 3 2 3 4'/><path d='M9 11c-2 1-3 3-3 5'/>",
  hair: "<path d='M7 20c0-8 2-14 5-17 3 3 5 9 5 17'/><path d='M9 14c2-1 4-1 6 0'/><path d='M8 18c3-1 5-1 8 0'/>",
  head: "<path d='M8 19v-3H6v-4a6 6 0 1 1 12 0v7'/><path d='M10 10h4'/><path d='M10 13h3'/>",
  heart: "<path d='M20 8c0 6-8 11-8 11S4 14 4 8a4 4 0 0 1 7-2 4 4 0 0 1 9 2Z'/><path d='M8 12h3l1-2 2 4 1-2h2'/>",
  immune: "<path d='M12 3 19 6v5c0 4.5-2.8 8.2-7 10-4.2-1.8-7-5.5-7-10V6l7-3Z'/><path d='M9 12h6'/><path d='M12 9v6'/>",
  kidney: "<path d='M9 4c-3 1-5 4-5 8 0 5 4 8 7 6 2-1 1-4-1-5-2-1-1-4 1-5'/><path d='M15 4c3 1 5 4 5 8 0 5-4 8-7 6-2-1-1-4 1-5 2-1 1-4-1-5'/>",
  liver: "<path d='M4 14c4-7 10-8 16-5 0 6-4 10-10 10H5c-2 0-2-3-1-5Z'/><path d='M12 9c0 3-1 5-3 7'/>",
  meal: "<path d='M7 3v18'/><path d='M4 3v6a3 3 0 0 0 6 0V3'/><path d='M16 4v16'/><path d='M14 4h4'/>",
  medication: "<path d='M10 4 4 10a4 4 0 0 0 6 6l6-6a4 4 0 0 0-6-6Z'/><path d='m8 8 8 8'/><path d='M15 15h5'/><path d='M17.5 12.5v5'/>",
  mineral: "<path d='M12 3 5 8v8l7 5 7-5V8l-7-5Z'/><path d='M8 10h8'/><path d='M8 14h8'/>",
  moon: "<path d='M20 15.5A8 8 0 0 1 8.5 4 8 8 0 1 0 20 15.5Z'/>",
  pancreas: "<path d='M4 13c3-5 8-6 13-4 4 2 4 7 0 9-5 2-10 0-13-5Z'/><path d='M8 12c3 1 6 1 9 0'/>",
  pregnancy: "<path d='M12 5a3 3 0 1 0 0.01 0'/><path d='M9 21v-7a3 3 0 0 1 6 0v7'/><path d='M9 16h6'/>",
  protein: "<path d='M5 15c3-5 9-7 14-4-1 6-6 9-12 7l-2-3Z'/><path d='M8 15c3 0 5-1 8-4'/>",
  pulse: "<path d='M3 13h4l2-6 4 12 2-6h6'/><circle cx='12' cy='12' r='9'/>",
  question: "<path d='M9 9a3 3 0 1 1 5 2c-1 1-2 1.5-2 3'/><path d='M12 18h.01'/><circle cx='12' cy='12' r='9'/>",
  repair: "<path d='m14 7 3-3 3 3-3 3Z'/><path d='M4 20l8-8'/><path d='M8 16l-2-2'/><path d='M12 12l-2-2'/><path d='M14 7 7 14'/>",
  scale: "<path d='M5 19h14'/><path d='M7 19V9a5 5 0 0 1 10 0v10'/><path d='M9 10h6'/><path d='m12 10 2-3'/>",
  shake: "<path d='M9 3h6'/><path d='M10 6h4l1 13H9l1-13Z'/><path d='M6 8 4 6'/><path d='m18 8 2-2'/><path d='M8 13h8'/>",
  spark: "<path d='M12 3l1.5 5L19 9.5 13.5 11 12 17l-1.5-6L5 9.5 10.5 8 12 3Z'/><path d='M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z'/>",
  stomach: "<path d='M10 4c2 3 5 3 5 7v5a5 5 0 0 1-10 0c0-3 2-5 5-6'/><path d='M12 9c3 0 5 2 5 5'/>",
  syringe: "<path d='m4 20 6-6'/><path d='m14 4 6 6'/><path d='M8 16 18 6'/><path d='m11 7 6 6'/><path d='M5 19l-1 2'/><path d='M17 3l4 4'/>",
  thyroid: "<path d='M8 6c-3 2-3 8 0 10 2 1 3-1 4-3 1 2 2 4 4 3 3-2 3-8 0-10-2-1-3 1-4 3-1-2-2-4-4-3Z'/><path d='M12 9v4'/>",
  vial: "<path d='M9 3h6'/><path d='M10 6h4l1 13H9l1-13Z'/><path d='M9 12h6'/><path d='M11 16h2'/>",
  water: "<path d='M12 3c4 5 6 8 6 12a6 6 0 0 1-12 0c0-4 2-7 6-12Z'/><path d='M9 16c1 2 4 2 6 0'/>"
};

function issueIconVariant(text, section) {
  const clean = `${text || ""} ${section || ""}`;
  const match = issueIconRules.find(([pattern]) => pattern.test(clean));
  if (match) return match[1];
  if (section === "Documented Benefits") return "spark";
  if (section === "Common Mistakes") return "question";
  if (section === "Contraindications And Cautions") return "immune";
  return "question";
}

function issueIconSvg(variant) {
  const paths = issueIconSvgPaths[variant] || issueIconSvgPaths.question;
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths}</svg>`;
}

function iconManifestType(section) {
  if (section === "Documented Benefits") return "benefits";
  if (section === "Common Mistakes") return "mistakes";
  if (section === "Contraindications And Cautions") return "cautions";
  return "";
}

function issueIconAsset(profile, section, issue, issueIndex = 0) {
  const type = iconManifestType(section);
  if (!profile?.slug || !type) return null;
  const normalizedTitle = slugify(issue.title);
  const candidates = iconManifest
    .filter((icon) => icon.slug === profile.slug && icon.type === type)
    .sort((a, b) => a.index - b.index);
  const match = candidates.find((icon) => {
    return icon.slug === profile.slug &&
      icon.type === type &&
      (slugify(icon.label) === normalizedTitle || normalizedTitle.includes(slugify(icon.label)) || slugify(icon.label).includes(normalizedTitle));
  }) || candidates[issueIndex];
  if (!match) return null;
  const absolute = path.join(root, match.path);
  if (fs.existsSync(absolute)) return `../${match.path}`;
  const svgPath = match.path.replace(/\.png$/i, ".svg");
  const svgAbsolute = path.join(root, svgPath);
  if (fs.existsSync(svgAbsolute)) return `../${svgPath}`;
  return null;
}

function issueCardSectionToHtml(content, section, profile) {
  const lines = splitLines(content);
  if (!lines.length) return "";
  return `<div class="issue-card-grid">\n${lines.map((line, issueIndex) => {
    const issue = splitIssueLine(line);
    const iconClass = issueIconClass(section);
    const imageAsset = issueIconAsset(profile, section, issue, issueIndex);
    const variant = issueIconVariant(`${issue.title} ${issue.body}`, section);
    const iconHtml = imageAsset
      ? `<div class="issue-icon issue-icon--image"><img src="${imageAsset}" alt="${escapeHtml(issue.title)} icon" loading="lazy"></div>`
      : `<div class="issue-icon ${iconClass} issue-icon--custom issue-symbol--${variant}" aria-hidden="true">${issueIconSvg(variant)}</div>`;
    return `<article class="issue-card">
              ${iconHtml}
              <div class="issue-copy"><strong>${formatInline(issue.title)}</strong>${issue.body ? `<p>${formatInline(issue.body)}</p>` : ""}</div>
            </article>`;
  }).join("\n")}\n</div>\n`;
}

function contentForSection(key, content, profile) {
  if (["Dosing Protocol", "Reconstitution Standard"].includes(key)) {
    return tableSectionToHtml(content);
  }
  if (key === "Documented Benefits") {
    return issueCardSectionToHtml(content, key, profile);
  }
  if (key === "Common Mistakes") {
    return issueCardSectionToHtml(content, key, profile);
  }
  if (key === "Contraindications And Cautions") {
    return issueCardSectionToHtml(content, key, profile);
  }
  if ([
    "Dosage Build-Up Timeline",
    "What To Track",
    "Stacks Well With",
    "Sources"
  ].includes(key)) {
    return listSectionToHtml(content);
  }
  return markdownToHtml(content);
}

function formatInline(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/ — /g, " - ");
}

function splitLines(value) {
  return String(value || "")
    .split(/\r?\n/)
    .map((line) => line.trim().replace(/^[-*]\s+/, ""))
    .filter(Boolean);
}

function categoryKey(category) {
  const lower = String(category || "").toLowerCase();
  if (lower.includes("metabolic")) return "metabolic";
  if (lower.includes("recovery") || lower.includes("skin") || lower.includes("hair")) return "recovery";
  if (lower.includes("cognitive")) return "cognitive";
  if (lower.includes("performance")) return "performance";
  if (lower.includes("immune")) return "immune";
  if (lower.includes("hormonal")) return "hormonal";
  if (lower.includes("longevity")) return "longevity";
  return "longevity";
}

function oneSentence(profile) {
  return profile.sections["One-Sentence Summary"] || profile.sections["What It Is"]?.split(/\n\s*\n/)[0] || `${profile.name} profile.`;
}

function quickStats(profile) {
  return splitLines(profile.sections["Quick Stats"]).map((line) => {
    const parts = line.split(":");
    if (parts.length < 2) return `<li>${formatInline(line)}</li>`;
    return `<li><strong>${formatInline(parts.shift())}</strong> ${formatInline(parts.join(":").trim())}</li>`;
  }).join("\n");
}

function checklist(profile) {
  return splitLines(profile.sections["Protocol Checklist"]).map((line) => `<li>${formatInline(line.replace(/^☐\s*/, ""))}</li>`).join("\n");
}

function sectionHtml(profile, key, title) {
  const content = profile.sections[key];
  if (!content) return "";
  const diagram = key === "Plain English Version" ? diagramBlock(profile) : "";
  return `<section class="profile-section profile-section-${slugify(key)}">
              <div class="section-kicker">${escapeHtml(title || key)}</div>
              <h2>${escapeHtml(title || key)}</h2>
              ${contentForSection(key, content, profile)}
              ${diagram}
            </section>`;
}

function diagramBlock(profile) {
  const content = profile.sections["Diagram Brief"];
  if (!content) return "";
  const image = diagramImageBySlug[profile.slug];
  if (image) {
    return `<div class="analogy-inline-diagram">
              <h3 class="diagram-title">How To Picture It</h3>
              <figure class="profile-diagram-figure diagram-figure">
                <img src="../${image}" alt="${escapeHtml(profile.name)} visual explanation diagram">
                <figcaption>${escapeHtml(diagramCaptionBySlug[profile.slug] || `A plain-English visual for understanding how ${profile.name} is commonly discussed.`)}</figcaption>
              </figure>
            </div>`;
  }
  return "";
}

function profilePage(profile, allProfiles) {
  const summary = oneSentence(profile);
  const key = categoryKey(profile.category);
  const featureImage = featureImageBySlug[profile.slug];
  const image = featureImage ? `../${featureImage}` : imageByCategory[key] || "../assets/recovery-feature-generated.png";
  const ogImagePath = ogImageBySlug[profile.slug] || featureImage;
  const ogImage = ogImagePath ? `https://peptideprotocol.ca/${ogImagePath}` : "https://peptideprotocol.ca/assets/vial.png";
  const related = allProfiles
    .filter((item) => item.slug !== profile.slug)
    .filter((item) => categoryKey(item.category) === key)
    .slice(0, 3);
  const relatedCards = related.map((item) => `<a class="peptide-mini-card" href="${item.slug}.html">
                  <img src="../assets/vial.png" alt="${escapeHtml(item.name)} branded vial">
                  <div><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.category)}</span></div>
                </a>`).join("\n");

  return `<!doctype html>
<html lang="en-CA">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta property="og:title" content="Peptide Protocol | ${escapeHtml(profile.name)}">
  <meta property="og:description" content="${escapeHtml(summary)}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:url" content="https://peptideprotocol.ca/peptides/${escapeHtml(profile.slug)}.html">
  <meta property="og:type" content="article">
  <meta name="twitter:card" content="summary_large_image">
  <title>Peptide Protocol | ${escapeHtml(profile.name)}</title>
  <meta name="description" content="${escapeHtml(summary)}">
  <link rel="canonical" href="https://peptideprotocol.ca/peptides/${escapeHtml(profile.slug)}.html">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9704466432230109" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="../styles/site.css?v=20260716a">
  <link rel="stylesheet" href="../styles/content.css?v=20260716a">
  <script src="../scripts/site.js?v=20260708a" defer></script>
  <script src="../scripts/content.js?v=20260616a" defer></script>
</head>
<body>
  <div class="page-shell peptide-profile-page">
    <header class="topbar">
      <div class="inner nav">
        <a class="brand" href="/" aria-label="Peptide Protocol home">
          <img class="brand-logo" src="../assets/Peptide-Protocol-Logo-Biege.svg" alt="Peptide Protocol">
        </a>
        <div class="nav-wrap">
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primaryNav" data-menu-toggle>
            <span></span><span class="sr-only">Open navigation</span>
          </button>
          <nav class="nav-links" id="primaryNav" aria-label="Primary" data-nav-links>
            <a href="../index.html#calculator">Calculator</a>
            <a href="../articles.html">Articles</a>
            <a class="is-active" href="../peptides.html">Peptides</a>
            <a href="../about.html">About</a>
          </nav>
        </div>
      </div>
    </header>
    <main>
      <section class="full-bleed-hero profile-hero">
        <img src="${image}" alt="${escapeHtml(profile.name)} profile feature image">
        <div class="full-bleed-hero-overlay"></div>
      </section>
      <section class="profile-overlap-shell">
        <div class="inner">
          <div class="profile-overlap-card">
            <div class="profile-overlap-vial">
              <img src="../assets/vial.png" alt="${escapeHtml(profile.name)} branded vial">
            </div>
            <div class="profile-overlap-copy">
              <h1 class="display">${escapeHtml(profile.name)}</h1>
              <span class="category-tab">${escapeHtml(profile.category)}</span>
              <p>${escapeHtml(summary)}</p>
              <div class="profile-overlap-actions">
                <a class="button button-primary" href="../index.html?peptide=${escapeHtml(profile.slug)}#calculator">Open Calculator</a>
                <a class="button button-primary" href="../peptides.html">Back To Peptides</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="inner article-layout profile-layout">
          <div class="article-body profile-body">
            ${sectionHtml(profile, "What It Is", `What ${profile.name} Is`)}
            ${sectionHtml(profile, "Plain English Version", "Plain English Version")}
            ${sectionHtml(profile, "How It Works", "How It Works")}
            ${sectionHtml(profile, "Documented Benefits", "Documented Benefits")}
            ${sectionHtml(profile, "Dosing Protocol", "Dosing Protocol")}
            ${sectionHtml(profile, "Reconstitution Standard", "Reconstitution Standard")}
            ${sectionHtml(profile, "Dosage Build-Up Timeline", "Dosage Build-Up Timeline")}
            ${sectionHtml(profile, "Common Mistakes", "Common Mistakes")}
            ${sectionHtml(profile, "Contraindications And Cautions", "Contraindications And Cautions")}
            ${sectionHtml(profile, "What To Track", "What To Track")}
            ${sectionHtml(profile, "Stacks Well With", "Stacks Well With")}
            ${sectionHtml(profile, "Sources", "Sources")}
            <section class="profile-section">
              <div class="section-kicker">Disclaimer</div>
              <p>For educational and research documentation purposes only. Not medical advice. Always speak with a qualified healthcare professional before making health decisions.</p>
            </section>
          </div>
          <aside class="article-sidebar profile-sidebar">
            <article class="panel">
              <div class="section-kicker">Protocol Checklist</div>
              <ul class="mini-checklist">${checklist(profile)}</ul>
            </article>
            <article class="panel">
              <div class="section-kicker">Quick Stats</div>
              <ul class="mini-checklist">${quickStats(profile)}</ul>
            </article>
            <article class="panel newsletter-sidebar-card">
              <div class="section-kicker">Email Updates</div>
              <h3>Stay In The Loop</h3>
              <p>Get notified when we add new peptide profiles, calculator updates, articles, downloads, and products.</p>
              <form class="newsletter-form" data-cc-signup-form data-cc-list-id="df2d5dd0-6779-11f1-99dc-02420a320003" data-signup-id="cc-signup-${escapeHtml(profile.slug)}">
                <div class="field"><label for="cc-${escapeHtml(profile.slug)}-first">First Name</label><input id="cc-${escapeHtml(profile.slug)}-first" name="firstName" type="text" placeholder="First name"></div>
                <div class="field"><label for="cc-${escapeHtml(profile.slug)}-email">Email Address</label><input id="cc-${escapeHtml(profile.slug)}-email" name="email" type="email" placeholder="Email address"></div>
                <button class="button button-primary button-full" type="submit">Notify Me</button>
                <p class="newsletter-message" data-signup-message></p>
              </form>
            </article>
            <article class="panel">
              <div class="section-kicker">Profile Tools</div>
              <div class="download-actions">
                <a class="button button-primary" href="../index.html?peptide=${escapeHtml(profile.slug)}#calculator">Open Calculator</a>
                <a class="button button-secondary" href="../peptides.html">All Profiles</a>
              </div>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <div class="inner">
          <div class="section-head"><div><div class="section-kicker">Related Peptides</div><h2>More Peptide Profiles</h2></div></div>
          <div class="peptide-mini-grid">${relatedCards}</div>
        </div>
      </section>
    </main>
    <footer>
      <div class="footer-band"><div class="inner footer-trust"><span>Science-Backed</span><span>Precise Dosing</span><span>Protocols That Work</span><span>Your Health. Your Power.</span></div></div>
      <div class="footer-meta"><div class="inner"><div>For educational and research documentation purposes only. Not medical advice. Copyright Peptide Protocol 2026.</div><div class="footer-links"><a href="../index.html#calculator">Calculator</a><a href="../articles.html">Articles</a><a href="../peptides.html">Peptides</a><a href="../privacy-policy.html">Privacy Policy</a></div></div></div>
    </footer>
  </div>
</body>
</html>
`;
}

function peptideCard(profile) {
  const key = categoryKey(profile.category);
  const cardImage = profile.image || cardImageByCategory[key] || "assets/recovery-feature-generated.png";
  return `<a class="peptide-index-card" href="peptides/${escapeHtml(profile.slug)}.html" data-peptide-name="${escapeHtml(profile.name.toLowerCase())}" data-peptide-category="${escapeHtml(key)}">
        <div class="peptide-index-media" style="background-image:url('${escapeHtml(cardImage)}');">
          <div class="peptide-index-blur"></div>
          <img class="peptide-index-vial" src="assets/vial.png" alt="${escapeHtml(profile.name)} branded vial">
          <div class="peptide-index-gradient"></div>
          <span class="peptide-index-category">${escapeHtml(profile.category)}</span>
          <strong>${escapeHtml(profile.name)}</strong>
        </div>
        <div class="peptide-index-copy">
          <p>${escapeHtml(profile.summary || oneSentence(profile))}</p>
          <span>Learn More -></span>
        </div>
      </a>`;
}

function updatePeptidesIndex(allProfiles) {
  const file = path.join(root, "peptides.html");
  const html = fs.readFileSync(file, "utf8");
  const cards = allProfiles.map(peptideCard).join("\n\n      ");
  const updated = html.replace(/<div class="peptide-index-grid" id="peptideIndexGrid">[\s\S]*?<\/div>\s*\n\s*<section class="newsletter-band">/, `<div class="peptide-index-grid" id="peptideIndexGrid">\n      ${cards}\n          </div>\n          \n    <section class="newsletter-band">`);
  fs.writeFileSync(file, updated);
}

function updateRoutes(profiles) {
  const routePairs = profiles.map((profile) => [profile.slug, `peptides/${profile.slug}.html`]);
  if (profiles.some((profile) => profile.slug === "cjc-1295")) {
    routePairs.push(["cjc-1295-no-dac", "peptides/cjc-1295.html"]);
  } else {
    routePairs.push(["cjc-1295-no-dac", "peptides/cjc-1295-ipamorelin.html"]);
  }
  const routeBlock = routePairs
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([slug, href]) => `    "${slug}": "${href}"`)
    .join(",\n");

  const siteFile = path.join(root, "scripts/site.js");
  let site = fs.readFileSync(siteFile, "utf8");
  site = site.replace(/var supportedProfileRoutes = \{[\s\S]*?\n  \};/, `var supportedProfileRoutes = {\n${routeBlock}\n  };`);
  fs.writeFileSync(siteFile, site);

  const contentFile = path.join(root, "scripts/content.js");
  let content = fs.readFileSync(contentFile, "utf8");
  const nameRoutes = profiles.flatMap((profile) => {
    const names = [profile.name];
    if (profile.slug === "cjc-1295-ipamorelin") {
      if (!profiles.some((item) => item.slug === "cjc-1295")) names.push("CJC-1295 No DAC", "CJC-1295 No-DAC");
      if (!profiles.some((item) => item.slug === "ipamorelin")) names.push("Ipamorelin");
    }
    if (profile.slug === "cjc-1295") names.push("CJC-1295 No DAC", "CJC-1295 No-DAC");
    return names.map((name) => [name, `peptides/${profile.slug}.html`]);
  });
  const uniqueNameRoutes = [...new Map(nameRoutes).entries()];
  const nameBlock = uniqueNameRoutes
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([name, href]) => `  "${name}": "${href}"`)
    .join(",\n");
  content = content.replace(/var supported = \{[\s\S]*?\n\};/, `var supported = {\n${nameBlock}\n};`);
  fs.writeFileSync(contentFile, content);
}

function updateSitemap(profiles) {
  const urls = [
    "/",
    "/about.html",
    "/articles.html",
    "/peptides.html",
    "/what-is-a-protocol.html",
    "/reconstitution-without-guesswork.html",
    "/recovery-repair-performance-stacking.html",
    "/do-you-actually-need-to-cycle-off-klow.html",
    "/storage-scheduling-routine.html",
    "/privacy-policy.html",
    ...profiles.map((profile) => `/peptides/${profile.slug}.html`)
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url>\n    <loc>https://peptideprotocol.ca${url}</loc>\n  </url>`).join("\n")}\n</urlset>\n`;
  fs.writeFileSync(path.join(root, "sitemap.xml"), xml);
}

function updateSearchIndex(profiles) {
  const file = path.join(root, "search-index.json");
  const current = JSON.parse(fs.readFileSync(file, "utf8"));
  const nonPeptides = current.pages.filter((page) => page.category !== "peptide");
  const peptidePages = profiles.map((profile) => ({
    title: profile.name,
    url: `/peptides/${profile.slug}.html`,
    category: "peptide",
    content: [
      profile.summary || oneSentence(profile),
      (profile.sections || {})["What It Is"],
      (profile.sections || {})["Plain English Version"],
      (profile.sections || {})["How It Works"],
      (profile.sections || {})["Documented Benefits"]
    ].filter(Boolean).join(" ").replace(/\s+/g, " ").slice(0, 3500),
    tags: [profile.slug, categoryKey(profile.category), profile.name.toLowerCase()]
  }));
  fs.writeFileSync(file, JSON.stringify({ pages: [...peptidePages, ...nonPeptides] }, null, 2) + "\n");
}

const importedProfiles = sourceFiles.flatMap((file) => parseMarkdownProfiles(fs.readFileSync(file, "utf8")));
const deduped = [];
const seen = new Set(existingProfiles.map((profile) => profile.slug));
importedProfiles.forEach((profile) => {
  if (seen.has(profile.slug)) return;
  seen.add(profile.slug);
  deduped.push(profile);
});

const allProfiles = [
  ...existingProfiles,
  ...deduped.map((profile) => ({
    ...profile,
    summary: oneSentence(profile),
    image: featureImageBySlug[profile.slug] || cardImageByCategory[categoryKey(profile.category)] || "assets/recovery-feature-generated.png"
  }))
];

const peptideDir = path.join(root, "peptides");
fs.mkdirSync(peptideDir, { recursive: true });
deduped.forEach((profile) => {
  fs.writeFileSync(path.join(peptideDir, `${profile.slug}.html`), profilePage(profile, allProfiles));
});
updatePeptidesIndex(allProfiles);
updateRoutes(allProfiles);
updateSitemap(allProfiles);
updateSearchIndex(allProfiles);

console.log(`Imported ${deduped.length} new profiles.`);
console.log(deduped.map((profile) => profile.slug).join("\n"));
