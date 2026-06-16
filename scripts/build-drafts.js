const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const draftsDir = path.join(root, "drafts");
const peptideDraftDir = path.join(draftsDir, "peptides");
const assetsDir = path.join(root, "assets", "drafts");
const ogDir = path.join(assetsDir, "og");
const cardsDir = path.join(assetsDir, "cards");
const peptideImageDir = path.join(assetsDir, "peptides");

const peptideSource = fs.readFileSync(path.join(root, "peptide-profiles-content.md"), "utf8");
const analogySource = fs.readFileSync(path.join(root, "plain-english-analogies.md"), "utf8");
const liveIndex = fs.readFileSync(path.join(root, "index.html"), "utf8");

[
  draftsDir,
  peptideDraftDir,
  assetsDir,
  ogDir,
  cardsDir,
  peptideImageDir
].forEach((dir) => fs.mkdirSync(dir, { recursive: true }));

const peptideMeta = {
  "retatrutide": {
    name: "Retatrutide",
    slug: "retatrutide",
    title: "Retatrutide",
    category: "Metabolic",
    shortDescription: "A next-generation triple-agonist peptide documented for appetite control, body-composition support, and deeper metabolic change.",
    featureImage: "assets/drafts/peptides/retatrutide-feature.png",
    ogImage: "assets/drafts/og/retatrutide-og.svg",
    cardImage: "assets/drafts/cards/retatrutide-card.svg",
    quickStats: {
      halfLife: "About 6 days",
      range: "0.5 to 12 mg weekly",
      frequency: "Weekly",
      bestPractice: "Morning injection, protein-forward eating, slow titration."
    },
    primarySources: [
      {
        label: "NEJM search: retatrutide obesity trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=retatrutide+obesity+jastreboff"
      },
      {
        label: "ClinicalTrials.gov search: retatrutide obesity",
        url: "https://clinicaltrials.gov/search?term=retatrutide%20obesity"
      },
      {
        label: "Eli Lilly clinical development pipeline",
        url: "https://www.lilly.com/discovery/clinical-development-pipeline"
      }
    ],
    researchLinks: [
      {
        label: "Independent analytical testing methodology example",
        url: "https://janoshik.com/"
      }
    ],
    analogy: null,
    relatedArticles: ["reconstitution", "recovery", "storage"],
    relatedPeptides: ["nad-plus", "mots-c", "klow"],
    draftPathFromDraftIndex: "peptides/retatrutide.html"
  },
  "nad-plus": {
    name: "NAD+",
    slug: "nad-plus",
    title: "NAD+",
    category: "Longevity",
    shortDescription: "A foundational cellular coenzyme commonly used in longevity and energy-focused protocols to support repair, resilience, and clearer daily output.",
    featureImage: "assets/drafts/peptides/nad-plus-feature.png",
    ogImage: "assets/drafts/og/nad-plus-og.svg",
    cardImage: "assets/drafts/cards/nad-plus-card.svg",
    quickStats: {
      halfLife: "Short systemic availability",
      range: "25 to 500 mg depending on protocol",
      frequency: "Weekly or twice weekly",
      bestPractice: "Inject slowly, use morning timing, assess cumulative effect."
    },
    primarySources: [
      {
        label: "PubMed search: NAD aging review",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=NAD%2B+aging+review"
      },
      {
        label: "NIH review: NAD+ metabolism and healthy ageing",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7278809/"
      },
      {
        label: "PubMed search: nicotinamide adenine dinucleotide mitochondrial function",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=nicotinamide+adenine+dinucleotide+mitochondrial+function"
      }
    ],
    researchLinks: [],
    analogy: "nad-plus",
    relatedArticles: ["reconstitution", "storage", "recovery"],
    relatedPeptides: ["mots-c", "retatrutide", "pt-141"],
    draftPathFromDraftIndex: "peptides/nad-plus.html"
  },
  "klow": {
    name: "KLOW",
    slug: "klow",
    title: "KLOW",
    category: "Recovery",
    shortDescription: "A four-compound repair blend built around tissue support, inflammation control, collagen signalling, and everyday recovery capacity.",
    featureImage: "assets/drafts/peptides/klow-feature.png",
    ogImage: "assets/drafts/og/klow-og.svg",
    cardImage: "assets/drafts/cards/klow-card.svg",
    quickStats: {
      halfLife: "Mixed profile: hours to days by component",
      range: "5 to 20 units daily",
      frequency: "Daily",
      bestPractice: "Respect the shorter 14–28 day stability window after mixing."
    },
    primarySources: [
      {
        label: "PubMed search: BPC-157 tendon and gut repair",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157+tendon+gut+repair"
      },
      {
        label: "PubMed search: thymosin beta-4 wound healing",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=thymosin+beta-4+wound+healing"
      },
      {
        label: "PubMed search: GHK-Cu wound healing collagen",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=GHK-Cu+wound+healing+collagen"
      },
      {
        label: "PubMed search: KPV peptide inflammation",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=KPV+peptide+inflammation"
      }
    ],
    researchLinks: [
      {
        label: "Blend-specific note: no direct clinical trials on the proprietary KLOW combination",
        url: "https://clinicaltrials.gov/"
      }
    ],
    analogy: "klow",
    relatedArticles: ["recovery", "storage", "reconstitution"],
    relatedPeptides: ["mots-c", "retatrutide", "nad-plus"],
    draftPathFromDraftIndex: "peptides/klow.html"
  },
  "mots-c": {
    name: "MOTS-c",
    slug: "mots-c",
    title: "MOTS-c",
    category: "Metabolic / Longevity",
    shortDescription: "A mitochondrial signalling peptide used in metabolic and longevity conversations to improve energy use, insulin sensitivity, and cellular efficiency.",
    featureImage: "assets/drafts/peptides/mots-c-feature.png",
    ogImage: "assets/drafts/og/mots-c-og.svg",
    cardImage: "assets/drafts/cards/mots-c-card.svg",
    quickStats: {
      halfLife: "Short signalling pulse",
      range: "5 to 10 mg, usually 3x weekly",
      frequency: "3x weekly or cycled daily",
      bestPractice: "Morning dosing and structured on/off cycles are common."
    },
    primarySources: [
      {
        label: "Cell Reports: MOTS-c promotes metabolic homeostasis",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=MOTS-c+metabolic+homeostasis"
      },
      {
        label: "PubMed search: MOTS-c human trial insulin sensitivity",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=MOTS-c+human+trial+insulin+sensitivity"
      },
      {
        label: "PubMed search: AMPK pathway and MOTS-c",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=AMPK+MOTS-c"
      }
    ],
    researchLinks: [],
    analogy: "mots-c",
    relatedArticles: ["reconstitution", "recovery", "storage"],
    relatedPeptides: ["nad-plus", "retatrutide", "klow"],
    draftPathFromDraftIndex: "peptides/mots-c.html"
  },
  "pt-141": {
    name: "PT-141",
    slug: "pt-141",
    title: "PT-141",
    category: "Hormonal / Wellbeing",
    shortDescription: "A centrally acting melanocortin peptide used in desire-focused protocols where stress, fatigue, and neurological drive matter more than mechanics alone.",
    featureImage: "assets/drafts/peptides/pt-141-feature.png",
    ogImage: "assets/drafts/og/pt-141-og.svg",
    cardImage: "assets/drafts/cards/pt-141-card.svg",
    quickStats: {
      halfLife: "Situational window of effect",
      range: "0.5 to 2 mg situationally",
      frequency: "As needed",
      bestPractice: "Start low, test nausea response, avoid casual daily use."
    },
    primarySources: [
      {
        label: "FDA drug overview: Vyleesi (bremelanotide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=211370"
      },
      {
        label: "PubMed search: bremelanotide HSDD phase 3",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=bremelanotide+HSDD+phase+3"
      },
      {
        label: "PubMed search: melanocortin receptor sexual desire bremelanotide",
        url: "https://pubmed.ncbi.nlm.nih.gov/?term=melanocortin+receptor+sexual+desire+bremelanotide"
      }
    ],
    researchLinks: [],
    analogy: "pt-141",
    relatedArticles: ["reconstitution", "storage", "recovery"],
    relatedPeptides: ["nad-plus", "retatrutide", "mots-c"],
    draftPathFromDraftIndex: "peptides/pt-141.html"
  }
};

const articleMeta = [
  {
    key: "reconstitution",
    category: "Protocol Primer",
    title: "How To Think About Reconstitution Without Guesswork",
    excerpt: "Learn how vial amount, BAC water, concentration, and syringe units relate to each other before a protocol ever gets practical. This is the grounding article that keeps the calculator from feeling like a black box.",
    hrefFromDrafts: "../reconstitution-without-guesswork.html",
    hrefFromPeptide: "../../reconstitution-without-guesswork.html",
    cardImage: "assets/home-hero-table-clean.png"
  },
  {
    key: "recovery",
    category: "Wellness Stack",
    title: "Why Recovery Protocols Often Pair Repair And Performance Compounds",
    excerpt: "Recovery, energy, appetite structure, and inflammation often overlap in the same real-life routine. This article covers how people document stacks without letting every compound blur into one confusing system.",
    hrefFromDrafts: "../recovery-repair-performance-stacking.html",
    hrefFromPeptide: "../../recovery-repair-performance-stacking.html",
    cardImage: "assets/recovery-feature-generated.png"
  },
  {
    key: "storage",
    category: "Lifestyle Notes",
    title: "Storage, Scheduling, And Building Consistency Around Your Routine",
    excerpt: "The quiet systems around a protocol usually matter more than people expect. Labels, fridge habits, timing patterns, and supply setup are often what make a plan calm enough to keep.",
    hrefFromDrafts: "../storage-scheduling-routine.html",
    hrefFromPeptide: "../../storage-scheduling-routine.html",
    cardImage: "assets/storage-feature-generated.png"
  }
];

const peptideOrder = ["retatrutide", "nad-plus", "klow", "mots-c", "pt-141"];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function cleanText(value) {
  return value
    .replace(/\r/g, "")
    .replace(/—/g, ", ")
    .replace(/–/g, "-")
    .replace(/\\={10,}/g, "")
    .replace(/\\([=+.\-()])/g, "$1")
    .replace(/\\\[/g, "[")
    .replace(/\\\]/g, "]")
    .replace(/\u00a0/g, " ")
    .replace(/\s+,/g, ",")
    .replace(/,\s+/g, ", ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slugify(name) {
  return name.toLowerCase()
    .replace(/\+/g, " plus ")
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function splitPeptideBlocks(source) {
  const parts = source.split(/\n# PEPTIDE \d+:/).slice(1);
  const map = {};
  parts.forEach((part) => {
    const nameLine = part.split("\n")[0].trim();
    const slug = slugify(nameLine.replace(/\s+\(.*$/, "").trim());
    map[slug] = part;
  });
  return map;
}

function sectionBetween(block, startMarker, endMarkers) {
  const startIndex = block.indexOf(startMarker);
  if (startIndex === -1) return "";
  const from = startIndex + startMarker.length;
  const nextIndexes = endMarkers
    .map((marker) => block.indexOf(marker, from))
    .filter((index) => index !== -1)
    .sort((a, b) => a - b);
  const to = nextIndexes.length ? nextIndexes[0] : block.length;
  return block.slice(from, to).trim();
}

function lineValue(block, prefix) {
  const match = block.match(new RegExp(`^${prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*(.+)$`, "m"));
  return match ? cleanText(match[1]) : "";
}

function parseBulletList(raw) {
  return cleanText(raw)
    .replace(/\s-\s/g, "\n- ")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, "").replace(/\s+(SIDE EFFECTS|HALF LIVES|CYCLE PROTOCOL):\s*$/i, "").trim());
}

function renderBulletList(items) {
  return `<ul class="draft-bullets">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function parseParagraphs(raw) {
  return String(raw || "")
    .replace(/\r/g, "")
    .replace(/\\=/g, "=")
    .replace(/\\\+/g, "+")
    .replace(/\\-/g, "-")
    .replace(/\\\[/g, "[")
    .replace(/\\\]/g, "]")
    .replace(/\u00a0/g, " ")
    .split(/\n\s*\n/)
    .map((part) => cleanText(part.replace(/\n/g, " ")))
    .map((part) => part.replace(/^\*\*(.+)\*\*$/g, "$1").trim())
    .filter((part) => part && part !== "\\" && !/^=+$/.test(part.replace(/\s/g, "")));
}

function renderParagraphs(raw) {
  return parseParagraphs(raw)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
}

function splitInlineMarker(raw, marker) {
  const pattern = new RegExp(`${marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:`, "i");
  const match = String(raw || "").match(pattern);
  if (!match || match.index == null) {
    return {
      main: raw,
      aside: ""
    };
  }
  return {
    main: raw.slice(0, match.index).trim(),
    aside: cleanText(raw.slice(match.index + match[0].length))
  };
}

function parseChecklist(raw) {
  return cleanText(raw)
    .split("☐")
    .map((item) => item.trim())
    .filter((item) => item && !/^=+$/.test(item.replace(/\s/g, "")));
}

function renderChecklist(items) {
  return `<ul class="checklist-list">${items.map((item) => `<li><span class="check-box"></span><span>${escapeHtml(item)}</span></li>`).join("")}</ul>`;
}

function parsePipeTable(raw) {
  const lines = cleanText(raw)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const firstLine = lines[0] || "";
  const tableText = firstLine.includes("|---|") ? firstLine : lines.join(" ");
  const rows = tableText
    .split(/\|\s*\|/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);
  const splitCells = rows.map((row) => row.split("|").map((cell) => cleanText(cell)).filter(Boolean));
  const filtered = splitCells.filter((cells) => !cells.every((cell) => /^-+$/.test(cell.replace(/\s/g, ""))));
  const headers = filtered.shift() || [];
  return { headers, rows: filtered };
}

function renderTable(table) {
  if (!table.headers.length) return "";
  return `
    <div class="draft-table-wrap">
      <table class="draft-table">
        <thead>
          <tr>${table.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${table.rows.map((row) => `<tr>${row.slice(0, table.headers.length).map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function parseTimeline(raw, fallbackTable) {
  if (raw) {
    const parsed = cleanText(raw)
      .split(/(?=(?:Week|Day|Phase|Step)\s+[A-Za-z0-9]+(?:\s*[-–]\s*[A-Za-z0-9]+|\+)?\s*:)/i)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [label, ...rest] = line.split(":");
        return { label: cleanText(label), detail: cleanText(rest.join(":")) };
      });
    return parsed;
  }
  return (fallbackTable.rows || []).slice(0, 4).map((row, index) => ({
    label: `Step ${index + 1}`,
    detail: row.filter(Boolean).slice(0, 2).join(", ")
  }));
}

function normalizeTimelineItems(items, slug) {
  return [
    {
      label: "Week 1-4",
      detail: "Starting dose"
    },
    {
      label: "Week 5-8",
      detail: "4mg"
    },
    {
      label: "Week 9-12",
      detail: "8mg (or 6mg for slower titration)"
    },
    {
      label: "Week 13+",
      detail: "12mg (trial maximum)"
    }
  ];
}

function renderTimeline(items) {
  const columnCount = Math.min(Math.max(items.length, 1), 4);
  const timelineClass = items.length > 4 ? "profile-timeline is-multirow" : "profile-timeline";
  return `<div class="${timelineClass}" style="--timeline-columns:${columnCount};">${items.map((item) => `
    <div class="profile-timeline-step">
      <strong>${escapeHtml(item.label)}</strong>
      <span>${escapeHtml(item.detail)}</span>
    </div>`).join("")}
  </div>`;
}

function splitNamedSubsections(raw, names) {
  const cursor = cleanText(raw);
  const results = {};
  names.forEach((name) => {
    const marker = `${name}:`;
    const start = cursor.indexOf(marker);
    if (start === -1) return;
    const from = start + marker.length;
    const laterMarkers = names
      .filter((next) => next !== name)
      .map((next) => cursor.indexOf(`${next}:`, from))
      .filter((value) => value !== -1)
      .sort((a, b) => a - b);
    const to = laterMarkers.length ? laterMarkers[0] : cursor.length;
    results[name] = cleanText(cursor.slice(from, to));
  });
  return results;
}

function parseAnalogyBlocks(source) {
  const wanted = ["NAD+", "KLOW", "MOTS-c", "PT-141"];
  const blocks = {};
  wanted.forEach((name, index) => {
    const marker = `# ${name} — THE PLAIN ENGLISH VERSION`;
    const start = source.indexOf(marker);
    if (start === -1) return;
    const from = start + marker.length;
    const nextStarts = wanted
      .slice(index + 1)
      .map((next) => source.indexOf(`# ${next} — THE PLAIN ENGLISH VERSION`, from))
      .filter((value) => value !== -1)
      .sort((a, b) => a - b);
    const to = nextStarts.length ? nextStarts[0] : source.indexOf("# TIRZEPATIDE — THE PLAIN ENGLISH VERSION", from) !== -1
      ? source.indexOf("# TIRZEPATIDE — THE PLAIN ENGLISH VERSION", from)
      : source.length;
    const block = source.slice(from, to);
    const analogyTitleMatch = block.match(/# Analogy:\s*(.+)/);
    const oneSentenceMatch = block.match(/\*\*One sentence:\*\*\s*(.+)/);
    const diagramMatch = block.match(/\[DIAGRAM SPEC:\s*([\s\S]+?)\]/);
    const prose = cleanText(
      block
        .replace(/# Analogy:.+/, "")
        .replace(/\*\*One sentence:\*\*.+/, "")
        .replace(/\[DIAGRAM SPEC:[\s\S]+?\]/, "")
    );
    blocks[slugify(name)] = {
      title: analogyTitleMatch ? cleanText(analogyTitleMatch[1]) : "",
      prose: parseParagraphs(prose),
      oneSentence: oneSentenceMatch ? cleanText(oneSentenceMatch[1]) : "",
      diagramSpec: diagramMatch ? cleanText(diagramMatch[1]) : ""
    };
  });
  return blocks;
}

const analogyBlocks = parseAnalogyBlocks(analogySource);
const peptideBlocks = splitPeptideBlocks(peptideSource);

function buildPeptideData() {
  const result = {};
  peptideOrder.forEach((slug) => {
    const block = peptideBlocks[slug];
    const meta = peptideMeta[slug];
    const rawWhat = sectionBetween(block, `WHAT IS ${meta.name.toUpperCase()}?`, ["HOW IT WORKS:"]);
    const rawHow = sectionBetween(block, "HOW IT WORKS:", ["DOCUMENTED BENEFITS:"]);
    const rawBenefits = sectionBetween(block, "DOCUMENTED BENEFITS:", ["DOSING PROTOCOL:"]);
    const benefitMarkerMatch = rawBenefits.match(/IMPORTANT DISTINCTION:\s*([\s\S]+)/i);
    const benefitMain = benefitMarkerMatch && benefitMarkerMatch.index != null
      ? rawBenefits.slice(0, benefitMarkerMatch.index).trim()
      : rawBenefits;
    const benefitAside = benefitMarkerMatch ? cleanText(benefitMarkerMatch[1]) : "";
    const rawDosing = sectionBetween(block, "DOSING PROTOCOL:", ["COMMON MISTAKES:"]);
    const rawMistakes = sectionBetween(block, "COMMON MISTAKES:", ["CONTRAINDICATIONS AND CAUTIONS:", "CONTRAINDICATIONS:"]);
    const contraindicationMarker = block.includes("CONTRAINDICATIONS AND CAUTIONS:") ? "CONTRAINDICATIONS AND CAUTIONS:" : "CONTRAINDICATIONS:";
    const rawContra = sectionBetween(block, contraindicationMarker, ["WHAT TO TRACK", "PROTOCOL CHECKLIST (SIDEBAR):"]);
    const rawTrack = sectionBetween(block, "WHAT TO TRACK", ["STACKS WELL WITH:", "PROTOCOL CHECKLIST (SIDEBAR):"]);
    const rawStacks = sectionBetween(block, "STACKS WELL WITH:", ["PROTOCOL CHECKLIST (SIDEBAR):"]);
    const rawChecklist = sectionBetween(block, "PROTOCOL CHECKLIST (SIDEBAR):", ["VIDEO SCRIPT", "# CHATGPT FEATURE IMAGE PROMPTS", "# PEPTIDE "]);
    const rawVideo = block.includes("VIDEO SCRIPT")
      ? sectionBetween(block, "VIDEO SCRIPT — RETATRUTIDE (10 minutes):", ["# PEPTIDE ", "# CHATGPT FEATURE IMAGE PROMPTS"])
      : "";
    const dosingExtras = splitNamedSubsections(rawDosing, [
      "RECONSTITUTION STANDARD",
      "DOSAGE BUILD-UP TIMELINE",
      "DOSING LOGIC EXPLAINED",
      "DOES KLOW NEED TO BE CYCLED?",
      "HALF LIVES",
      "CYCLE PROTOCOL",
      "CANCER HISTORY CAUTION",
      "SIDE EFFECTS"
    ]);
    const tableRaw = cleanText(rawDosing).split(/RECONSTITUTION STANDARD:|DOSAGE BUILD-UP TIMELINE:|DOSING LOGIC EXPLAINED:|DOES KLOW NEED TO BE CYCLED\?:|HALF LIVES:|CYCLE PROTOCOL:|CANCER HISTORY CAUTION:|SIDE EFFECTS:/)[0].trim();
    const doseTable = parsePipeTable(tableRaw);
    const timelineItems = normalizeTimelineItems(
      parseTimeline(dosingExtras["DOSAGE BUILD-UP TIMELINE"], doseTable),
      slug
    );
    result[slug] = {
      ...meta,
      featurePrompt: lineValue(block, "# Feature Image Prompt:"),
      whatIs: renderParagraphs(rawWhat),
      howItWorks: renderParagraphs(rawHow),
      benefits: parseBulletList(benefitMain),
      benefitAside,
      doseTable,
      dosingNotes: dosingExtras,
      mistakes: parseBulletList(rawMistakes),
      contraindications: parseBulletList(rawContra),
      tracking: parseBulletList(rawTrack),
      stacks: parseBulletList(rawStacks),
      checklist: parseChecklist(rawChecklist),
      videoScript: rawVideo ? cleanText(rawVideo) : "",
      timelineItems,
      analogy: meta.analogy ? analogyBlocks[meta.analogy] : null
    };
  });
  return result;
}

const peptides = buildPeptideData();

function moleculeMark(color = "#ffffff") {
  return `
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M19 14L34 28M43 34L58 25M43 41L60 52M34 45L22 59" stroke="${color}" stroke-width="5" stroke-linecap="round"/>
      <circle cx="16" cy="12" r="8" fill="${color}"/>
      <circle cx="37" cy="31" r="11" fill="${color}"/>
      <circle cx="61" cy="23" r="7" fill="${color}"/>
      <circle cx="63" cy="55" r="10" fill="${color}"/>
      <circle cx="19" cy="62" r="7" fill="${color}"/>
    </svg>
  `;
}

function buildOgSvg(peptide) {
  const title = peptide.title.replace(/&/g, "&amp;");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="rgba(217,78,42,0)"/>
      <stop offset="100%" stop-color="rgba(217,78,42,0.95)"/>
    </linearGradient>
  </defs>
  <image href="../peptides/${peptide.slug}-feature.png" x="0" y="0" width="1200" height="630" preserveAspectRatio="xMidYMid slice"/>
  <rect x="0" y="380" width="1200" height="250" fill="url(#fade)"/>
  <g transform="translate(1030,40)">
    ${moleculeMark("#ffffff")}
  </g>
  <text x="72" y="500" fill="#ffffff" font-size="72" font-family="'Bebas Neue', Arial, sans-serif" font-weight="700" letter-spacing="2">${title}</text>
  <text x="72" y="560" fill="#ffffff" font-size="24" font-family="Arial, sans-serif" letter-spacing="1.2">peptideprotocol.ca</text>
</svg>`;
}

function buildProfileCardSvg(peptide) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="560" viewBox="0 0 900 560">
  <defs>
    <linearGradient id="bg-${peptide.slug}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fff7ea"/>
      <stop offset="100%" stop-color="#f3e0c7"/>
    </linearGradient>
  </defs>
  <rect width="900" height="560" rx="40" fill="url(#bg-${peptide.slug})"/>
  <rect x="48" y="54" width="804" height="452" rx="28" fill="#fffdf8" stroke="#e8d9bf"/>
  <rect x="88" y="130" width="120" height="220" rx="24" fill="#f3efe7" stroke="#dcc9ac"/>
  <rect x="74" y="110" width="148" height="36" rx="18" fill="#d94e2a"/>
  <rect x="108" y="180" width="80" height="92" rx="14" fill="#fff8f0" stroke="#e5c59d"/>
  <text x="148" y="228" text-anchor="middle" fill="#d94e2a" font-size="22" font-family="Arial, sans-serif" font-weight="700">VIAL</text>
  <text x="272" y="156" fill="#d94e2a" font-size="26" font-family="Arial, sans-serif" font-weight="700" letter-spacing="1.4">${escapeHtml(peptide.category.toUpperCase())}</text>
  <text x="272" y="236" fill="#2c2416" font-size="74" font-family="'Bebas Neue', Arial, sans-serif" letter-spacing="2">${escapeHtml(peptide.title.toUpperCase())}</text>
  <foreignObject x="272" y="274" width="520" height="150">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Arial,sans-serif;color:#2c2416;font-size:28px;line-height:1.45;">
      ${escapeHtml(peptide.shortDescription)}
    </div>
  </foreignObject>
  <text x="272" y="454" fill="#ba401f" font-size="28" font-family="Arial, sans-serif" font-weight="700">Learn more on the draft profile page</text>
</svg>`;
}

function buildArticleCardSvg(article, index) {
  const gradients = [
    ["#fff7ea", "#f3e2ca"],
    ["#fff6ef", "#f5e0d3"],
    ["#fdf5ea", "#efe0cb"]
  ];
  const [a, b] = gradients[index % gradients.length];
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="560" viewBox="0 0 900 560">
  <defs>
    <linearGradient id="article-${index}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
  </defs>
  <rect width="900" height="560" rx="40" fill="url(#article-${index})"/>
  <rect x="56" y="56" width="788" height="448" rx="28" fill="#fffdf8" stroke="#e8d9bf"/>
  <path d="M118 168C188 112 256 124 326 172" stroke="#d94e2a" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M128 248C206 198 290 205 370 258" stroke="#d94e2a" stroke-opacity="0.32" stroke-width="6" stroke-linecap="round" fill="none"/>
  <text x="94" y="118" fill="#d94e2a" font-size="24" font-family="Arial, sans-serif" font-weight="700" letter-spacing="1.5">${escapeHtml(article.category.toUpperCase())}</text>
  <foreignObject x="94" y="286" width="712" height="154">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:'Bebas Neue', Arial, sans-serif;color:#2c2416;font-size:56px;line-height:0.96;letter-spacing:1.5px;text-transform:uppercase;">
      ${escapeHtml(article.title)}
    </div>
  </foreignObject>
</svg>`;
}

function renderVialThumb(imagePath, peptideTitle, note, nested = false) {
  return `
    <div class="vial-thumb">
      <img src="${fromDraftRoot(imagePath, nested)}" alt="${escapeHtml(peptideTitle)} vial icon">
      <div class="vial-thumb-label">
        <strong>${escapeHtml(peptideTitle)}</strong>
        ${note ? `<span>${escapeHtml(note)}</span>` : ""}
      </div>
    </div>
  `;
}

function renderDiagramFigure(src, alt, caption, nested = true) {
  return `
    <figure class="diagram-figure">
      <img src="${fromDraftRoot(src, nested)}" alt="${escapeHtml(alt)}" loading="lazy">
      ${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}
    </figure>
  `;
}

function buildAnalogyDiagram(slug) {
  if (slug === "nad-plus") {
    return renderDiagramFigure(
      "assets/diagrams/nad-plus-cellular-energy-decline-diagram.png",
      "NAD plus cellular energy comparison showing fuller energy in younger cells and lower NAD plus over time",
      "A visual shorthand for why NAD+ is often framed as a cellular energy and repair support tool."
    );
  }
  if (slug === "klow") {
    return renderDiagramFigure(
      "assets/diagrams/klow-four-compound-repair-blend-diagram.png",
      "KLOW blend diagram showing BPC-157, TB-500, GHK-Cu, and KPV as separate repair roles",
      "KLOW is easiest to understand when each ingredient is treated like a different job inside the same repair crew."
    );
  }
  if (slug === "mots-c") {
    return renderDiagramFigure(
      "assets/diagrams/mots-c-metabolic-efficiency-diagram.png",
      "MOTS c metabolic efficiency comparison showing a sluggish metabolic gauge versus a tuned efficient gauge",
      "This version matches the plain-English idea that MOTS-c helps tune metabolic efficiency rather than acting like a surface-level stimulant."
    );
  }
  if (slug === "retatrutide") {
    return renderDiagramFigure(
      "assets/diagrams/retatrutide-triple-agonist-pathways-diagram.png",
      "Retatrutide triple agonist diagram showing GLP 1, GIP, and glucagon pathways working together",
      "Retatrutide is usually explained by the fact that it activates all three pathways instead of only one or two."
    );
  }
  if (slug === "pt-141") {
    return renderDiagramFigure(
      "assets/diagrams/pt-141-desire-vs-physical-response-diagram.png",
      "PT-141 comparison graphic showing the difference between physical blood flow support and neurological desire signalling",
      "PT-141 is easier to understand when it is compared against PDE5 tools that affect mechanics instead of desire signalling."
    );
  }
  return "";
}

function renderCalloutGroup(dosingNotes) {
  const primaryStandard = dosingNotes["RECONSTITUTION STANDARD"] ? `
    <article class="note-callout">
      <strong>Reconstitution Standard</strong>
      ${renderParagraphs(dosingNotes["RECONSTITUTION STANDARD"])}
    </article>
  ` : "";
  const order = [
    "CYCLE PROTOCOL",
    "DOSING LOGIC EXPLAINED",
    "DOES KLOW NEED TO BE CYCLED?",
    "HALF LIVES",
    "CANCER HISTORY CAUTION",
    "SIDE EFFECTS"
  ];
  const cards = order
    .filter((key) => dosingNotes[key])
    .map((key) => {
      const sanitized = cleanText(dosingNotes[key]).split(/RECONSTITUTION STANDARD:|DOSAGE BUILD-UP TIMELINE:|DOSING LOGIC EXPLAINED:|DOES KLOW NEED TO BE CYCLED\?:|HALF LIVES:|CYCLE PROTOCOL:|CANCER HISTORY CAUTION:|SIDE EFFECTS:/)[0].trim();
      return `
      <article class="note-card">
        <strong>${escapeHtml(key)}</strong>
        ${renderParagraphs(sanitized)}
      </article>
    `;
    })
    .join("");
  return `
    ${primaryStandard}
    ${cards ? `<div class="note-card-grid">${cards}</div>` : ""}
  `;
}

function renderSources(meta) {
  const primary = meta.primarySources.map((item) => `<li><a href="${item.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.label)}</a></li>`).join("");
  const research = (meta.researchLinks || []).map((item) => `<li><a href="${item.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.label)}</a></li>`).join("");
  return `
    <section class="profile-section">
      <div class="section-kicker">Sources</div>
      <h2>Primary Citations And Research Links</h2>
      <div class="source-stack">
        <article class="panel">
          <strong>Medical / Clinical Sources</strong>
          <ul class="source-list">${primary}</ul>
        </article>
        ${research ? `<article class="panel">
          <strong>Research / Methodology Context</strong>
          <ul class="source-list">${research}</ul>
        </article>` : ""}
      </div>
    </section>
  `;
}

function renderVideoScript(raw) {
  if (!raw) return "";
  const paragraphs = cleanText(raw)
    .split(/\n\s*\n/)
    .map((part) => part.replace(/\n/g, " ").trim())
    .filter(Boolean);
  return `
    <section class="profile-section">
      <details class="video-script">
        <summary>Open 10 Minute Video Script</summary>
        <div class="video-script-copy">
          ${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
      </details>
    </section>
  `;
}

function adPlaceholder(label, size) {
  return `<div class="ad-placeholder" role="presentation"><span>${escapeHtml(label)}</span><small>${escapeHtml(size)}</small></div>`;
}

function inArticleAd() {
  return `<div class="draft-ad-live draft-ad-inline">
    <ins class="adsbygoogle"
      style="display:block; text-align:center;"
      data-ad-client="ca-pub-9704466432230109"
      data-ad-slot="1732912316"
      data-ad-layout="in-article"
      data-ad-format="fluid"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </div>`;
}

function sidebarSquareAd() {
  return `<div class="draft-ad-live draft-ad-sidebar draft-ad-square">
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-9704466432230109"
      data-ad-slot="3972601842"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </div>`;
}

function horizontalDisplayAd() {
  return `<div class="draft-ad-live draft-ad-leaderboard">
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-9704466432230109"
      data-ad-slot="7149429525"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </div>`;
}

function multiplexAd() {
  return `<div class="draft-ad-live draft-ad-multiplex">
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-format="autorelaxed"
      data-ad-client="ca-pub-9704466432230109"
      data-ad-slot="5153282576"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </div>`;
}

function renderSignupWidget(options = {}) {
  const compact = Boolean(options.compact);
  const sectionClass = compact ? "newsletter-sidebar-card" : "newsletter-card";
  const wrapperStart = compact ? `<article class="panel ${sectionClass}">` : `<section class="newsletter-band"><div class="inner"><div class="${sectionClass}">`;
  const wrapperEnd = compact ? `</article>` : `</div></div></section>`;
  const kickerClass = compact ? "section-kicker" : "section-kicker section-kicker-light";
  const formClass = compact ? "newsletter-form newsletter-form--sidebar" : "newsletter-form";
  const gridClass = compact ? "newsletter-form-grid" : "newsletter-form-grid";
  const buttonClass = compact ? "button button-primary button-full" : "button button-primary button-full";
  const id = options.id || "cc-signup";

  return `
    ${wrapperStart}
      <div class="newsletter-copy">
        <div class="${kickerClass}">Email Updates</div>
        <h2>Stay In The Loop</h2>
        <p>Get notified when we add new peptide profiles, update the calculator, publish new articles, or add downloadable PDFs and products to the store. No spam. Unsubscribe any time.</p>
      </div>
      <form class="${formClass}" data-cc-signup-form data-cc-list-id="df2d5dd0-6779-11f1-99dc-02420a320003" data-signup-id="${escapeHtml(id)}">
        <div class="${gridClass}">
          <div class="field">
            <label for="${escapeHtml(id)}-first-name">First Name</label>
            <input id="${escapeHtml(id)}-first-name" name="firstName" type="text" placeholder="First name">
          </div>
          <div class="field">
            <label for="${escapeHtml(id)}-email">Email Address</label>
            <input id="${escapeHtml(id)}-email" name="email" type="email" placeholder="Email address">
          </div>
        </div>
        <button class="${buttonClass}" type="submit">Notify Me</button>
        <p class="newsletter-message" data-signup-message></p>
      </form>
    ${wrapperEnd}
  `;
}

function simpleIcon(type) {
  const icons = {
    vial: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6v3l2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8l2-2V3Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 6h6M8 12h8M8 16h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    drop: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c3.5 4.4 6 7.3 6 10a6 6 0 0 1-12 0c0-2.7 2.5-5.6 6-10Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9.2 13.2c.5 1.7 1.8 2.8 3.7 3.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    result: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21c-5.4-3.6-8-6.6-8-10.1A4.9 4.9 0 0 1 8.8 6c1.4 0 2.7.6 3.2 1.9C12.5 6.6 13.8 6 15.2 6A4.9 4.9 0 0 1 20 10.9C20 14.4 17.4 17.4 12 21Z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`,
    brain: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6.5A3.5 3.5 0 0 1 15 4a3.6 3.6 0 0 1 4 3.8 3 3 0 0 1 1 5.2A4 4 0 0 1 16 20H9a4 4 0 0 1-4-3.9A3.3 3.3 0 0 1 4 10.6 3.6 3.6 0 0 1 9 6.5Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v10M9 9.5h3M12 13h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    dial: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 15a7 7 0 1 1 14 0" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 12l4-4M18 7l1.8-1.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="1.7" fill="currentColor"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.5v5l3.5 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    calendarX: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 4v4M16 4v4M4 10h16M9 13l6 6M15 13l-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    warningMix: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="15" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 6l6-3v6Z" fill="currentColor"/><path d="M12 16h.01" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M12 9v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
  };
  return icons[type] || icons.vial;
}

function fromDraftRoot(target, nested = false) {
  return `${nested ? "../../" : "../"}${target.replace(/^\/+/, "")}`;
}

function pageHead({ pageTitle, description, ogImage, pageUrl, nested = false }) {
  const ogPath = fromDraftRoot(ogImage, nested);
  const siteCssPath = fromDraftRoot("styles/site.css", nested);
  const siteJsPath = fromDraftRoot("scripts/site.js", nested);
  const draftCssPath = nested ? "../draft.css" : "draft.css";
  const draftJsPath = nested ? "../draft.js" : "draft.js";
  return `<!doctype html>
<html lang="en-CA">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow">
  <meta property="og:title" content="${escapeHtml(pageTitle)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="${escapeHtml(ogPath)}">
  ${pageUrl ? `<meta property="og:url" content="${escapeHtml(pageUrl)}">` : ""}
  <meta property="og:type" content="article">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(pageTitle)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${escapeHtml(ogPath)}">
  <title>${escapeHtml(pageTitle)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9704466432230109" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="${siteCssPath}?v=20260615c">
  <link rel="stylesheet" href="${draftCssPath}">
  <script src="${siteJsPath}?v=20260615c" defer></script>
  <script src="${draftJsPath}" defer></script>
</head>`;
}

function header(active, nested = false) {
  const logoPath = fromDraftRoot("assets/Peptide-Protocol-Logo-Biege.svg", nested);
  const draftHomeHref = nested ? "../index.html" : "index.html";
  const draftArticlesHref = nested ? "../articles.html" : "articles.html";
  const draftPeptidesHref = nested ? "../peptides.html" : "peptides.html";
  const calcHref = `${draftHomeHref}#calculator`;
  const articleHref = draftArticlesHref;
  const peptideHref = draftPeptidesHref;
  const aboutHref = fromDraftRoot("about.html", nested);
  return `
    <header class="topbar">
      <div class="inner nav">
        <a class="brand" href="${draftHomeHref}" aria-label="Peptide Protocol home">
          <img class="brand-logo" src="${logoPath}" alt="Peptide Protocol">
        </a>
        <div class="nav-wrap">
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primaryNav" data-menu-toggle>
            <span></span><span class="sr-only">Open navigation</span>
          </button>
          <nav class="nav-links" id="primaryNav" aria-label="Primary" data-nav-links>
            <a${active === "calculator" ? ' class="is-active"' : ""} href="${calcHref}">Calculator</a>
            <a${active === "articles" ? ' class="is-active"' : ""} href="${articleHref}">Articles</a>
            <a${active === "peptides" ? ' class="is-active"' : ""} href="${peptideHref}">Peptides</a>
            <a href="${aboutHref}">About</a>
          </nav>
        </div>
      </div>
    </header>
  `;
}

function footer(currentKind, nested = false) {
  const homeHref = nested ? "../index.html#calculator" : "index.html#calculator";
  const articleHref = nested ? "../articles.html" : "articles.html";
  const peptidesHref = nested ? "../peptides.html" : "peptides.html";
  const privacyHref = fromDraftRoot("privacy-policy.html", nested);
  return `
    <footer>
      <div class="footer-band">
        <div class="inner footer-trust">
          <span>Science-Backed</span>
          <span>Precise Dosing</span>
          <span>Protocols That Work</span>
          <span>Your Health. Your Power.</span>
        </div>
      </div>
      <div class="footer-meta">
        <div class="inner">
          <div>For educational and research documentation purposes only. Not medical advice. Copyright Peptide Protocol 2026.</div>
          <div class="footer-links">
            <a href="${homeHref}">Calculator</a>
            <a href="${articleHref}">Articles</a>
            <a href="${peptidesHref}">Peptides</a>
            <a href="${privacyHref}">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function peptideCategoryKey(category) {
  const value = category.toLowerCase();
  if (value.includes("metabolic")) return "metabolic";
  if (value.includes("recovery")) return "recovery";
  if (value.includes("cognitive")) return "cognitive";
  if (value.includes("longevity")) return "longevity";
  if (value.includes("hormonal")) return "hormonal";
  return "all";
}

function renderPeptideIndexCard(peptide, options = {}) {
  const {
    nested = false,
    href = nested ? `${peptide.slug}.html` : `peptides/${peptide.slug}.html`
  } = options;
  return `
      <a class="peptide-index-card" href="${href}" data-peptide-name="${escapeHtml(peptide.title.toLowerCase())}" data-peptide-category="${peptideCategoryKey(peptide.category)}">
        <div class="peptide-index-media" style="background-image:url('${fromDraftRoot(peptide.featureImage, nested)}');">
          <div class="peptide-index-blur"></div>
          <img class="peptide-index-vial" src="${fromDraftRoot("assets/vial.png", nested)}" alt="${escapeHtml(peptide.title)} branded vial">
          <div class="peptide-index-gradient"></div>
          <span class="peptide-index-category">${escapeHtml(peptide.category)}</span>
          <strong>${escapeHtml(peptide.title)}</strong>
        </div>
        <div class="peptide-index-copy">
          <p>${escapeHtml(peptide.shortDescription)}</p>
          <span>Learn More →</span>
        </div>
      </a>
    `;
}

function relatedPeptideCards(currentSlug) {
  return peptideMeta[currentSlug].relatedPeptides.map((slug) => renderPeptideIndexCard(peptides[slug], {
    nested: true,
    href: `${slug}.html`
  })).join("");
}

function relatedArticleCards(keys) {
  return keys.map((key) => {
    const item = articleMeta.find((entry) => entry.key === key);
    return `
      <article class="related-card">
        <figure class="related-article-media">
          <img src="${fromDraftRoot(item.cardImage, true)}" alt="${escapeHtml(item.title)} feature image">
        </figure>
        <span class="category-tab">${escapeHtml(item.category)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.excerpt)}</p>
        <a href="${item.hrefFromPeptide}">Read More →</a>
      </article>
    `;
  }).join("");
}

function renderAnalogySection(peptide, slug) {
  if (!peptide.analogy || (!peptide.analogy.prose.length && !peptide.analogy.oneSentence)) return "";
  const diagram = buildAnalogyDiagram(slug);
  const prose = peptide.analogy.prose
    .map((paragraph) => paragraph.replace(/^\*\*(.+)\*\*$/g, "$1").trim())
    .filter((paragraph) => paragraph && paragraph !== "\\" && !/^=+$/.test(paragraph.replace(/\s/g, "")));
  return `
    <section class="profile-section">
      <div class="section-kicker">The Plain English Version</div>
      <h2>${escapeHtml(peptide.analogy.title || "The Plain English Version")}</h2>
      ${prose.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      ${peptide.analogy.oneSentence ? `<p class="analogy-summary"><strong>One sentence:</strong> ${escapeHtml(peptide.analogy.oneSentence)}</p>` : ""}
      ${diagram ? `<div class="analogy-inline-diagram">${diagram}</div>` : ""}
    </section>
  `;
}

function renderComparisonDiagramCard() {
  return `
    <div class="pt141-compare-card">
      <div class="pt141-compare-column pt141-compare-left">
        <div class="pt141-compare-icon">${simpleIcon("heart")}</div>
        <strong>PDE5 Inhibitors</strong>
        <span>Viagra / Cialis</span>
        <p>Works on physical blood flow, the mechanics.</p>
        <em>Physical</em>
      </div>
      <div class="pt141-compare-vs">VS</div>
      <div class="pt141-compare-column pt141-compare-right">
        <div class="pt141-compare-icon">${simpleIcon("brain")}</div>
        <strong>PT-141</strong>
        <span>Bremelanotide</span>
        <p>Works on the hypothalamus, the desire signal.</p>
        <em>Neurological</em>
      </div>
      <div class="pt141-compare-footer">PT-141 addresses why you want to. PDE5 addresses whether you physically can.</div>
    </div>
  `;
}

function buildReconstitutionCard(peptide) {
  const doseRows = peptide.slug === "pt-141"
    ? [
        { dose: "0.5mg (starting)", units: "10 units", volume: "0.1ml" },
        { dose: "1mg (standard)", units: "20 units", volume: "0.2ml" },
        { dose: "1.5mg (advanced)", units: "30 units", volume: "0.3ml" }
      ]
    : peptide.doseTable.rows.slice(0, 3).map((row, index) => {
    const dose = row[1] || row[0] || "";
    const units = row[2] || row[1] || "";
    const volumeMatch = units.match(/(\d+(?:\.\d+)?)\s*units?/i);
    const volume = volumeMatch ? `${(Number(volumeMatch[1]) / 100).toFixed(1)}ml` : "";
    return {
      dose: index === 0 && !/\(/.test(dose) ? `${dose} (starting)` : index === 1 && !/\(/.test(dose) ? `${dose} (standard)` : index === 2 && !/\(/.test(dose) ? `${dose} (advanced)` : dose,
      units,
      volume
    };
  });
  const recon = peptide.dosingNotes["RECONSTITUTION STANDARD"] || "";
  const parts = recon.split("=");
  const vialStep = cleanText(parts[0] || `${peptide.title} vial`);
  const waterStep = cleanText((recon.match(/([0-9.]+\s*ml\s*BAC water)/i) || [])[1] || "Add BAC water as directed");
  const resultStep = peptide.slug === "pt-141"
    ? "Concentration: 5mg per ml"
    : cleanText(parts[1] || recon || "Use the concentration shown in the calculator");
  const footerLine = peptide.slug === "pt-141"
    ? "At 0.5mg per use, one 10mg vial gives you 20 uses. That is approximately $2.90 USD per use."
    : `Use the calculator to confirm syringe units against your exact concentration and intended dose for ${peptide.title}.`;
  return `
    <article class="recon-card">
      <div class="section-kicker">How To Reconstitute ${escapeHtml(peptide.title)}</div>
      <h3>How To Reconstitute ${escapeHtml(peptide.title)}</h3>
      <div class="recon-steps">
        <div class="recon-step">
          <div class="recon-icon">${simpleIcon("vial")}</div>
          <strong>Your Vial</strong>
          <p>${escapeHtml(vialStep)}</p>
        </div>
        <div class="recon-step">
          <div class="recon-icon">${simpleIcon("drop")}</div>
          <strong>Add BAC Water</strong>
          <p>${escapeHtml(waterStep)}</p>
        </div>
        <div class="recon-step">
          <div class="recon-icon">${simpleIcon("result")}</div>
          <strong>Result</strong>
          <p>${escapeHtml(resultStep)}</p>
        </div>
      </div>
      <div class="draft-table-wrap recon-table-wrap">
        <table class="draft-table recon-table">
          <thead>
            <tr><th>Your Dose</th><th>Units To Draw</th><th>Volume</th></tr>
          </thead>
          <tbody>
            ${doseRows.map((row) => `<tr><td>${escapeHtml(row.dose)}</td><td>${escapeHtml(row.units)}</td><td>${escapeHtml(row.volume)}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
      <p class="recon-footer">${escapeHtml(footerLine)}</p>
    </article>
  `;
}

function timelineIntro(peptide) {
  if (peptide.slug === "pt-141") {
    return `<p class="timeline-intro">Most people start at 0.5mg to test their response to PT-141, particularly for nausea tolerance. Increase only after confirming the lower dose is comfortable.</p>`;
  }
  return `<p class="timeline-intro">Most people start low enough to understand how the peptide feels before increasing the dose. Increase only after the current dose feels predictable, comfortable, and sustainable.</p>`;
}

function renderIssueCards(items, mode, slug = "", section = "") {
  return `<div class="issue-card-grid">${items.map((item) => {
    const splitMatch = item.split(/: |, | - /);
    const title = cleanText(splitMatch.shift() || item);
    const detail = cleanText(splitMatch.join(", ") || item);
    let iconType = mode === "caution" ? "warningMix" : "dial";
    if (slug === "pt-141" && section === "mistakes") {
      const index = items.indexOf(item);
      iconType = ["dial", "clock", "calendarX", "warningMix"][index] || "dial";
    } else if (mode === "caution") {
      iconType = "warningMix";
    } else {
      iconType = "clock";
    }
    return `
      <article class="issue-card">
        <div class="issue-icon ${mode}">${simpleIcon(iconType)}</div>
        <div class="issue-copy">
          <strong>${escapeHtml(title)}</strong>
          <p>${escapeHtml(detail)}</p>
        </div>
      </article>
    `;
  }).join("")}</div>`;
}

function renderPeptidePage(slug) {
  const peptide = peptides[slug];
  const openCalculatorHref = `../index.html?peptide=${slug}#calculator`;
  const checklist = renderChecklist(peptide.checklist);
  const relatedPeptidesHtml = relatedPeptideCards(slug);
  const relatedArticlesHtml = relatedArticleCards(peptide.relatedArticles);
  const summaryLine = parseParagraphs(peptide.whatIs.replace(/<[^>]+>/g, "")).slice(0, 1)[0] || peptide.shortDescription;
  const hasStacks = peptide.stacks.length > 0;
  const openingTitle = slug === "pt-141"
    ? "What PT-141 Is And Why It Feels Different"
    : `What ${peptide.title} Is And How People Commonly Think About It`;
  const wovenAnalogy = peptide.analogy ? peptide.analogy.prose
    .map((paragraph) => paragraph.replace(/\*\*/g, "").replace(/\\<\/p>/g, "").replace(/\\</g, "").replace(/\\$/g, "").trim())
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("") : "";
  const analogyDiagram = buildAnalogyDiagram(slug);
  const diagramMarkup = analogyDiagram ? `<div class="analogy-inline-diagram">${analogyDiagram}</div>` : "";
  const heroPositionClass = ["nad-plus", "pt-141"].includes(slug) ? " profile-hero--center" : "";
  return `${pageHead({
    pageTitle: `Peptide Protocol | ${peptide.title}`,
    description: summaryLine,
    ogImage: peptide.ogImage,
    pageUrl: `https://peptideprotocol.ca/peptides/${peptide.slug}.html`,
    nested: true
  })}
<body class="draft-page">
  <div class="page-shell peptide-profile-page">
    ${header("peptides", true)}
    <main>
      <section class="full-bleed-hero profile-hero${heroPositionClass}">
        <img src="${fromDraftRoot(peptide.featureImage, true)}" alt="${escapeHtml(peptide.title)} feature image">
        <div class="full-bleed-hero-overlay"></div>
      </section>
      <section class="profile-overlap-shell">
        <div class="inner">
          <div class="profile-overlap-card">
            <div class="profile-overlap-vial">
              <img src="${fromDraftRoot("assets/vial.png", true)}" alt="${escapeHtml(peptide.title)} branded vial">
            </div>
            <div class="profile-overlap-copy">
              <h1 class="display">${escapeHtml(peptide.title)}</h1>
              <span class="category-tab">${escapeHtml(peptide.category)}</span>
              <p>${escapeHtml(peptide.shortDescription)}</p>
              <div class="profile-overlap-actions">
                <a class="button button-primary" href="${openCalculatorHref}">Open Calculator</a>
                <a class="button button-primary" href="../peptides.html">Back To Peptides</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="inner article-layout profile-layout">
          <div class="article-body profile-body">
            <section class="profile-section profile-flow-section">
              <div class="section-kicker">${escapeHtml(peptide.title)}</div>
              <h2>${openingTitle}</h2>
              ${peptide.whatIs}
              ${wovenAnalogy}
              ${diagramMarkup}
            </section>

            <section class="profile-section">
              <div class="section-kicker">How It Works</div>
              <h2>How It Works</h2>
              ${peptide.howItWorks}
            </section>

            <section class="profile-section">
              <div class="section-kicker">Documented Benefits</div>
              <h2>Documented Benefits</h2>
              ${renderBulletList(peptide.benefits)}
              ${peptide.benefitAside ? `<article class="note-callout inline-transition">
                <strong>Important Distinction</strong>
                ${renderParagraphs(peptide.benefitAside)}
              </article>` : ""}
            </section>

            <section class="profile-section">
              <div class="section-kicker">Dosing Protocol</div>
              <h2>Dosing Protocol</h2>
              ${renderTable(peptide.doseTable)}
              ${buildReconstitutionCard(peptide)}
              ${renderCalloutGroup(Object.fromEntries(Object.entries(peptide.dosingNotes).filter(([key]) => key !== "RECONSTITUTION STANDARD")))}
            </section>

            ${inArticleAd()}

            <section class="profile-section">
              <div class="section-kicker">Dosage Build-Up Timeline</div>
              <h2>Dosage Build-Up Timeline</h2>
              ${timelineIntro(peptide)}
              ${renderTimeline(peptide.timelineItems)}
            </section>

            <section class="profile-section">
              <div class="section-kicker">Common Mistakes</div>
              <h2>Common Mistakes</h2>
              ${renderIssueCards(peptide.mistakes, "warning", slug, "mistakes")}
            </section>

            <section class="profile-section">
              <div class="section-kicker">Contraindications And Cautions</div>
              <h2>Contraindications And Cautions</h2>
              ${renderIssueCards(peptide.contraindications, "caution", slug, "cautions")}
            </section>

            <section class="profile-section">
              <div class="section-kicker">What To Track</div>
              <h2>What To Track</h2>
              ${renderBulletList(peptide.tracking)}
            </section>

            ${hasStacks ? `<section class="profile-section">
              <div class="section-kicker">Stacks Well With</div>
              <h2>Stacks Well With</h2>
              <div class="stack-pills">${peptide.stacks.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
            </section>` : ""}

            ${renderVideoScript(peptide.videoScript)}

            ${renderSources(peptide)}
          </div>

          <aside class="article-sidebar profile-sidebar">
            <article class="panel sidebar-sticky checklist-panel">
              <div class="section-kicker">Protocol Checklist</div>
              <h3>Protocol Checklist</h3>
              <div class="checklist-scroll">${checklist}</div>
            </article>

            ${sidebarSquareAd()}

            <article class="panel">
              <div class="section-kicker">Quick Stats</div>
              <h3>Quick Stats</h3>
              <dl class="stats-list">
                <div><dt>Half life</dt><dd>${escapeHtml(peptide.quickStats.halfLife)}</dd></div>
                <div><dt>Documented range</dt><dd>${escapeHtml(peptide.quickStats.range)}</dd></div>
                <div><dt>Frequency</dt><dd>${escapeHtml(peptide.quickStats.frequency)}</dd></div>
                <div><dt>Best practice</dt><dd>${escapeHtml(peptide.quickStats.bestPractice)}</dd></div>
              </dl>
            </article>

            ${renderSignupWidget({ compact: true, id: `cc-signup-${peptide.slug}` })}

            <article class="panel action-stack">
              <a class="button button-primary button-full" href="${openCalculatorHref.replace("#calculator", "#download")}">Download Tracker PDF</a>
              <a class="button button-secondary button-full" href="${openCalculatorHref}">Open Calculator</a>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <div class="inner">
          <div class="section-head">
            <div>
              <div class="section-kicker">Related Peptide Profiles</div>
              <h2>More Peptide Profiles</h2>
            </div>
            <p>Explore the current peptide library connected to the calculator.</p>
          </div>
          <div class="peptide-index-grid related-peptide-grid">
            ${relatedPeptidesHtml}
          </div>
        </div>
      </section>

      <section>
        <div class="inner">
          <div class="section-head">
            <div>
              <div class="section-kicker">Related Articles</div>
              <h2>Supporting Reading For The Calculator And Protocol System</h2>
            </div>
            <p>These pages remain part of the broader site and help anchor the profile pages in calculator-first context.</p>
          </div>
          <div class="articles-grid related-grid">
            ${relatedArticlesHtml}
          </div>
        </div>
      </section>

      <section>
        <div class="inner">
          <div class="draft-cta-row">
            <a class="button button-primary" href="${openCalculatorHref}">Back To Calculator</a>
          </div>
          ${horizontalDisplayAd()}
        </div>
      </section>
    </main>
    ${footer("articles", true)}
  </div>
</body>
</html>`;
}

function buildDraftArticlesPage() {
  const articleCards = articleMeta.map((article) => `
    <article class="article-card draft-filter-card" data-draft-category="${article.category.toLowerCase().replace(/\s+/g, "-")}">
        <figure><img src="${fromDraftRoot(article.cardImage)}" alt="${escapeHtml(article.title)} draft article card"></figure>
      <div class="article-copy">
        <span class="category-tab">${escapeHtml(article.category)}</span>
        <h3>${escapeHtml(article.title)}</h3>
        <p>${escapeHtml(article.excerpt)}</p>
        <a href="${article.hrefFromDrafts}">Read More →</a>
      </div>
    </article>
  `).join("");

  return `${pageHead({
    pageTitle: "Peptide Protocol | Articles",
    description: "Research notes, protocol breakdowns, and honest field reports for the Peptide Protocol community.",
    ogImage: "assets/drafts/og/retatrutide-og.svg",
    pageUrl: "https://peptideprotocol.ca/articles.html"
  })}
<body class="draft-page">
  <div class="page-shell">
    ${header("articles")}
    <main>
      <section class="full-bleed-hero">
        <img src="${fromDraftRoot("assets/drafts/articles/articles-hero-feature.png")}" alt="A couple in their 40s reviewing notes together in warm light">
        <div class="full-bleed-hero-overlay"></div>
        <div class="inner full-bleed-hero-copy">
          <h1 class="display">Research Notes, Protocol Breakdowns, And Honest Field Reports.</h1>
          <p>Clear protocol writing, plain-language education, and lifestyle-first field notes designed to support the calculator.</p>
        </div>
      </section>

      <section class="draft-ad-section">
        <div class="inner">
          ${inArticleAd()}
        </div>
      </section>

      ${renderSignupWidget({ id: "cc-signup-articles" })}

      <section>
        <div class="inner">
          <div class="filter-row" role="tablist" aria-label="Article filters">
            <button class="filter-pill is-active" type="button" data-filter="all">All</button>
            <button class="filter-pill" type="button" data-filter="protocol-primer">Protocol Primer</button>
            <button class="filter-pill" type="button" data-filter="wellness-stack">Wellness Stack</button>
            <button class="filter-pill" type="button" data-filter="lifestyle-notes">Lifestyle Notes</button>
          </div>

          <div class="articles-grid draft-articles-grid" id="draftArticleGrid">
            ${articleCards}
          </div>
          <div class="draft-bottom-ad">
            ${horizontalDisplayAd()}
          </div>
        </div>
      </section>

    </main>
    ${footer("articles")}
  </div>
</body>
</html>`;
}

function buildDraftIndexPage() {
  const calculatorSection = liveIndex.match(/<section id="calculator">[\s\S]+?<section>/)?.[0].replace(/<section>$/, "") || "";
  const supplySection = liveIndex.match(/<section>\s*<div class="inner">\s*<div class="section-head">[\s\S]+?<\/section>/)?.[0] || "";
  const downloadSection = liveIndex.match(/<section id="download">[\s\S]+?<\/section>/)?.[0] || "";
  const merged = `${calculatorSection}\n${supplySection}\n${downloadSection}`
    .replace(/src="assets\//g, 'src="../assets/')
    .replace(/href="about\.html"/g, 'href="../about.html"')
    .replace(/href="reconstitution-without-guesswork\.html"/g, 'href="../reconstitution-without-guesswork.html"')
    .replace(/href="recovery-repair-performance-stacking\.html"/g, 'href="../recovery-repair-performance-stacking.html"')
    .replace(/href="storage-scheduling-routine\.html"/g, 'href="../storage-scheduling-routine.html"')
    .replace(/href="assets\/New price list\.pdf"/g, 'href="../index.html#download"');

  return `${pageHead({
    pageTitle: "Peptide Protocol | Calculator",
    description: "Peptide reconstitution calculator with direct links to supported peptide profile pages.",
    ogImage: "assets/drafts/og/retatrutide-og.svg",
    pageUrl: "https://peptideprotocol.ca/index.html"
  })}
<body class="draft-page">
  <div class="page-shell">
    ${header("calculator")}
    <main>
      <section class="draft-intro">
        <div class="inner">
          <div class="section-head">
            <div>
              <div class="section-kicker">Calculator</div>
              <h2>Calculator Links Open Directly To Supported Peptide Profiles.</h2>
            </div>
            <p>Use the calculator, then move directly into the matching peptide profile for deeper context and protocol notes.</p>
          </div>
        </div>
      </section>
      ${merged}
    </main>
    ${footer("calculator")}
  </div>
</body>
</html>`;
}

function buildPeptidesIndexPage() {
  const cards = peptideOrder.map((slug) => renderPeptideIndexCard(peptides[slug])).join("");

  return `${pageHead({
    pageTitle: "Peptide Protocol | Peptides",
    description: "Plain language breakdowns of every compound currently supported in the draft peptide library.",
    ogImage: "assets/drafts/og/retatrutide-og.svg",
    pageUrl: "https://peptideprotocol.ca/peptides.html"
  })}
<body class="draft-page">
  <div class="page-shell">
    ${header("peptides")}
    <main>
      <section class="full-bleed-hero">
        <img src="${fromDraftRoot("assets/recovery-feature-generated.png")}" alt="A multicultural group in their 40s in warm outdoor-inspired light">
        <div class="full-bleed-hero-overlay"></div>
        <div class="inner full-bleed-hero-copy">
          <h1 class="display">Peptide Profiles.</h1>
          <p>Plain language breakdowns of every compound in the calculator.</p>
        </div>
      </section>

      <section>
        <div class="inner">
          <div class="peptide-tools">
            <input id="peptideSearch" type="search" placeholder="Search peptides by name" aria-label="Search peptides by name">
            <div class="filter-row" role="tablist" aria-label="Peptide filters">
              <button class="filter-pill is-active" type="button" data-peptide-filter="all">All</button>
              <button class="filter-pill" type="button" data-peptide-filter="metabolic">Metabolic</button>
              <button class="filter-pill" type="button" data-peptide-filter="recovery">Recovery</button>
              <button class="filter-pill" type="button" data-peptide-filter="cognitive">Cognitive</button>
              <button class="filter-pill" type="button" data-peptide-filter="longevity">Longevity</button>
              <button class="filter-pill" type="button" data-peptide-filter="hormonal">Hormonal</button>
            </div>
          </div>
          <div class="peptide-index-grid" id="peptideIndexGrid">
            ${cards}
          </div>
          ${renderSignupWidget({ id: "cc-signup-peptides" })}
          <div class="draft-bottom-ad">
            ${inArticleAd()}
          </div>
        </div>
      </section>
    </main>
    ${footer("peptides")}
  </div>
</body>
</html>`;
}

function buildDraftCss() {
  return `@import url("../styles/site.css?v=20260615c");

body.draft-page {
  background:
    radial-gradient(circle at top left, rgba(217, 78, 42, 0.08), transparent 28%),
    linear-gradient(180deg, #fffdf8 0%, #f5edd8 100%);
}

.draft-intro {
  padding-bottom: 0;
}

.draft-articles-grid .article-card,
.draft-peptide-grid .article-card {
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.draft-articles-grid .article-card:hover,
.draft-peptide-grid .article-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 38px rgba(44, 36, 22, 0.12);
}

.filter-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}

.filter-pill {
  border: 1px solid rgba(217, 78, 42, 0.18);
  background: rgba(255,255,255,0.82);
  color: #ba401f;
  border-radius: 999px;
  padding: 10px 16px;
  font: 400 1.1rem/1 var(--font-display);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
}

.filter-pill.is-active {
  background: #d94e2a;
  color: #fff;
  border-color: transparent;
}

.draft-filter-card.is-hidden {
  display: none;
}

.ad-placeholder {
  min-height: 122px;
  border: 1px dashed rgba(217, 78, 42, 0.32);
  border-radius: 22px;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,0.72);
  text-align: center;
  padding: 22px;
}

.ad-placeholder span {
  display: block;
  color: #ba401f;
  font: 400 2rem/1 var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.ad-placeholder small {
  color: rgba(44,36,22,0.72);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.draft-ad-live {
  background: rgba(255,255,255,0.82);
  border: 1px solid rgba(44,36,22,0.08);
  border-radius: 22px;
  padding: 18px;
  box-shadow: 0 10px 22px rgba(44,36,22,0.05);
}

.draft-ad-inline {
  margin-top: 8px;
}

.draft-bottom-ad {
  margin-top: 28px;
}

.draft-multiplex-wrap {
  margin-top: 18px;
}

.peptide-directory-shell {
  margin-bottom: 22px;
  padding: 18px 20px;
  border-radius: 22px;
  background: rgba(255,255,255,0.82);
  border: 1px solid rgba(44,36,22,0.08);
}

.peptide-directory {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.peptide-directory a {
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(217,78,42,0.08);
  color: #ba401f;
  font: 400 1.06rem/1 var(--font-display);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 1px solid rgba(217,78,42,0.16);
}

.full-bleed-hero {
  position: relative;
  min-height: 520px;
  overflow: hidden;
}

.full-bleed-hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-hero img {
  object-position: center top;
}

.profile-hero--center img {
  object-position: center center;
}

.full-bleed-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(44,36,22,0.7) 0%, rgba(44,36,22,0.42) 34%, rgba(44,36,22,0.18) 100%);
}

.full-bleed-hero-copy {
  position: relative;
  z-index: 1;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f5edd8;
}

.full-bleed-hero-copy .display {
  max-width: 55%;
}

.full-bleed-hero-copy p {
  max-width: 40%;
}

.profile-layout {
  grid-template-columns: minmax(0, 1fr) minmax(260px, 360px);
  gap: 18px;
}

.profile-body {
  display: grid;
  gap: 16px;
}

.profile-section {
  background: rgba(255,255,255,0.86);
  border: 1px solid rgba(44,36,22,0.12);
  border-radius: 22px;
  box-shadow: 0 8px 20px rgba(44,36,22,0.04);
  padding: 22px;
}

.profile-section h2 {
  margin: 0 0 12px;
  font: 400 2.4rem/0.95 var(--font-display);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.profile-section p + p {
  margin-top: 12px;
}

.vial-thumb {
  display: grid;
  grid-template-columns: 108px 1fr;
  gap: 16px;
  align-items: center;
  border-radius: 22px;
  background: rgba(255,255,255,0.84);
  border: 1px solid rgba(44,36,22,0.08);
  padding: 16px;
}

.vial-thumb img {
  width: 100%;
  max-width: 90px;
  justify-self: center;
  display: block;
}

.vial-thumb-label {
  display: grid;
  gap: 6px;
}

.vial-thumb-label strong {
  color: #ba401f;
  font: 400 1.7rem/0.95 var(--font-display);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.vial-thumb-label span {
  color: rgba(44,36,22,0.72);
  font-size: 0.94rem;
}

.peptide-vial-figure {
  margin: 0;
}

.peptide-card .vial-thumb,
.related-vial-wrap .vial-thumb {
  grid-template-columns: 86px 1fr;
  min-height: 142px;
}

.peptide-card .vial-thumb img,
.related-vial-wrap .vial-thumb img {
  max-width: 72px;
}

.peptide-card .vial-thumb-label strong,
.related-vial-wrap .vial-thumb-label strong {
  font-size: 1.34rem;
}

.draft-bullets,
.source-list,
.checklist-list {
  margin: 0;
  padding-left: 20px;
  color: rgba(44,36,22,0.82);
}

.draft-bullets,
.source-list {
  list-style: none;
  padding-left: 0;
}

.draft-bullets li,
.source-list li {
  position: relative;
  padding-left: 28px;
}

.draft-bullets li::before,
.source-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.38rem;
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='4.3' r='2.2' fill='%23D94E2A'/%3E%3Ccircle cx='4.5' cy='10.3' r='2' fill='%23D94E2A'/%3E%3Ccircle cx='11.5' cy='10.3' r='2' fill='%23D94E2A'/%3E%3Cpath d='M6.3 5.9L5.2 8M9.7 5.9L10.8 8M6.2 10.3H9.8' stroke='%23D94E2A' stroke-width='1.4' stroke-linecap='round'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
}

.draft-bullets li + li,
.source-list li + li {
  margin-top: 10px;
}

.checklist-list {
  list-style: none;
  padding-left: 0;
  display: grid;
  gap: 12px;
}

.checklist-list li::before {
  content: none;
  display: none;
}

.checklist-scroll {
  max-height: none;
  overflow: visible;
  padding-right: 0;
}

.checklist-list li {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 12px;
  align-items: start;
  padding: 0;
  border: 0;
  background: transparent;
}

.checklist-list li span:last-child {
  display: block;
  min-width: 0;
  word-break: normal;
  overflow-wrap: normal;
  white-space: normal;
}

.check-box {
  width: 18px;
  height: 18px;
  border: 2px solid #d94e2a;
  border-radius: 2px;
  background: transparent;
  margin-top: 3px;
}

.sidebar-sticky {
  position: sticky;
  top: 92px;
}

.checklist-panel {
  background: #f5edd8;
  border-top: 4px solid #d94e2a;
}

.checklist-panel h3 {
  color: #d94e2a;
  font: 400 2rem/0.95 var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.stats-list {
  margin: 0;
  display: grid;
  gap: 12px;
}

.stats-list div {
  display: grid;
  gap: 4px;
}

.stats-list dt {
  color: #ba401f;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.stats-list dd {
  margin: 0;
  color: rgba(44,36,22,0.88);
}

.placeholder-signup {
  display: grid;
  gap: 10px;
}

.placeholder-signup input {
  width: 100%;
  border: 1px solid rgba(44,36,22,0.12);
  background: #fff;
  border-radius: 14px;
  padding: 14px 15px;
}

.draft-table-wrap {
  overflow-x: auto;
  border: 1px solid rgba(44,36,22,0.08);
  border-radius: 16px;
}

.draft-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 560px;
}

.draft-table th,
.draft-table td {
  padding: 12px 14px;
  border-bottom: 1px solid rgba(44,36,22,0.08);
  text-align: left;
}

.draft-table th {
  background: rgba(217,78,42,0.08);
  color: #ba401f;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.profile-timeline {
  display: grid;
  grid-template-columns: repeat(var(--timeline-columns, 4), minmax(0, 1fr));
  gap: 12px;
  position: relative;
  padding-top: 24px;
  align-items: start;
}

.profile-timeline::before {
  content: "";
  position: absolute;
  left: 18px;
  right: 18px;
  top: 10px;
  height: 3px;
  background: rgba(217,78,42,0.4);
}

.profile-timeline-step {
  position: relative;
  padding: 18px 14px 14px;
  border-radius: 18px;
  background: rgba(255,255,255,0.78);
  border: 1px solid rgba(44,36,22,0.08);
}

.profile-timeline-step::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 14px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #d94e2a;
  border: 3px solid #f5edd8;
}

.profile-timeline.is-multirow::before {
  content: none;
}

.profile-timeline.is-multirow .profile-timeline-step::before {
  top: -18px;
}

.profile-timeline-step strong {
  display: block;
  margin-bottom: 6px;
  font-size: 0.84rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.diagram-figure {
  margin: 18px 0 0;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(44,36,22,0.08);
  background: rgba(255,255,255,0.86);
  box-shadow: 0 10px 24px rgba(44,36,22,0.06);
}

.diagram-figure img {
  display: block;
  width: 100%;
  height: auto;
}

.diagram-figure figcaption {
  padding: 14px 16px 16px;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(44,36,22,0.78);
  background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(245,237,216,0.92));
}

.note-card-grid,
.source-groups {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 14px;
}

.source-stack {
  display: grid;
  gap: 12px;
  margin-top: 14px;
}

.note-card {
  border: 1px solid rgba(44,36,22,0.08);
  border-radius: 16px;
  background: rgba(255,255,255,0.78);
  padding: 16px;
}

.note-callout {
  border: 1px solid rgba(217,78,42,0.18);
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255,249,242,0.96), rgba(245,237,216,0.88));
  padding: 18px;
  margin-top: 14px;
}

.recon-card {
  margin-top: 14px;
  border-left: 4px solid #d94e2a;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(255,250,243,0.98), rgba(245,237,216,0.96));
  padding: 20px;
}

.recon-card h3 {
  margin: 4px 0 14px;
  color: #d94e2a;
  font: 400 2rem/0.95 var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.recon-steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 16px;
}

.recon-step {
  border: 1px solid rgba(44,36,22,0.08);
  border-radius: 16px;
  background: rgba(255,255,255,0.86);
  padding: 16px;
}

.recon-step strong {
  display: block;
  margin: 10px 0 6px;
  color: #ba401f;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.recon-step p,
.recon-footer {
  margin: 0;
}

.recon-icon,
.issue-icon svg,
.pt141-compare-icon svg {
  width: 30px;
  height: 30px;
}

.recon-icon {
  display: inline-flex;
  color: #d94e2a;
}

.recon-table-wrap {
  margin-top: 10px;
}

.recon-footer {
  margin-top: 14px;
  color: rgba(44,36,22,0.8);
}

.timeline-intro {
  margin: 0 0 14px;
  color: rgba(44,36,22,0.8);
}

.note-callout strong {
  display: block;
  color: #ba401f;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.note-card strong,
.video-script summary {
  color: #ba401f;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.diagram-shell {
  border-radius: 22px;
  padding: 18px;
  background: linear-gradient(180deg, rgba(255,255,255,0.86), rgba(245,237,216,0.78));
  border: 1px solid rgba(44,36,22,0.08);
}

.diagram-shell p {
  margin-top: 16px;
  color: rgba(44,36,22,0.76);
  font-weight: 700;
}

.batteries {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 14px;
  align-items: center;
}

.battery-card strong,
.gauge-card strong {
  display: block;
  margin-bottom: 10px;
}

.battery {
  position: relative;
  height: 82px;
  border: 3px solid #2c2416;
  border-radius: 18px;
  overflow: hidden;
  background: rgba(44,36,22,0.06);
}

.battery::after {
  content: "";
  position: absolute;
  top: 28px;
  right: -10px;
  width: 10px;
  height: 24px;
  border-radius: 0 6px 6px 0;
  background: #2c2416;
}

.battery-fill {
  position: absolute;
  inset: 0 auto 0 0;
  width: 95%;
  background: linear-gradient(90deg, #d94e2a, #ff8f6a);
}

.battery-fill.low {
  width: 40%;
  background: linear-gradient(90deg, #9f998d, #c9c1b6);
}

.battery span {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font: 400 2rem/1 var(--font-display);
  color: #2c2416;
}

.diagram-arrow {
  font: 400 1.6rem/1 var(--font-display);
  color: #ba401f;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.team-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.team-card {
  text-align: center;
  background: rgba(255,255,255,0.84);
  border: 1px solid rgba(44,36,22,0.08);
  border-radius: 18px;
  padding: 16px 12px;
}

.team-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin: 0 auto 10px;
  display: grid;
  place-items: center;
  background: #d94e2a;
  color: #fff;
  font: 400 1.5rem/1 var(--font-display);
}

.team-card h4 {
  margin: 4px 0 8px;
  font-size: 0.92rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.team-bar {
  margin-top: 14px;
  padding: 12px;
  border-radius: 999px;
  background: #d94e2a;
  color: #fff;
  text-align: center;
  font: 400 1.2rem/1 var(--font-display);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.gauges {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.gauge-card {
  background: rgba(255,255,255,0.82);
  border-radius: 18px;
  border: 1px solid rgba(44,36,22,0.08);
  padding: 16px;
}

.gauge {
  position: relative;
  width: 180px;
  height: 90px;
  margin: 8px auto 0;
  border-top-left-radius: 180px;
  border-top-right-radius: 180px;
  border: 10px solid rgba(44,36,22,0.18);
  border-bottom: 0;
}

.gauge span {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 4px;
  height: 74px;
  transform-origin: bottom center;
  background: #ba401f;
}

.gauge.low span {
  transform: translateX(-50%) rotate(-52deg);
}

.gauge.high {
  border-color: rgba(217,78,42,0.18);
}

.gauge.high span {
  transform: translateX(-50%) rotate(46deg);
  background: #d94e2a;
}

.compare-two {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.pt141-compare-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: 16px;
  align-items: stretch;
  border-radius: 22px;
  overflow: hidden;
  background: rgba(255,255,255,0.88);
  border: 1px solid rgba(44,36,22,0.08);
}

.pt141-compare-column {
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #fff;
}

.pt141-compare-left {
  background: #d94e2a;
}

.pt141-compare-right {
  background: #2c2416;
}

.pt141-compare-icon {
  display: inline-flex;
  width: 44px;
  height: 44px;
}

.pt141-compare-column strong {
  font: 400 1.7rem/0.95 var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.pt141-compare-column span,
.pt141-compare-column em {
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pt141-compare-column em {
  margin-top: auto;
}

.pt141-compare-vs {
  align-self: center;
  color: #d94e2a;
  font: 400 2rem/1 var(--font-display);
  letter-spacing: 0.06em;
}

.pt141-compare-footer {
  grid-column: 1 / -1;
  padding: 0 20px 18px;
  color: #2c2416;
  font-weight: 700;
  text-align: center;
}

.compare-card {
  background: rgba(255,255,255,0.84);
  border-radius: 18px;
  border: 1px solid rgba(44,36,22,0.08);
  padding: 16px;
}

.compare-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.analogy-summary {
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(217,78,42,0.08);
  color: rgba(44,36,22,0.9);
}

.analogy-inline-diagram {
  margin-top: 18px;
}

.video-script {
  border: 1px solid rgba(44,36,22,0.1);
  border-radius: 18px;
  padding: 16px;
  background: rgba(255,255,255,0.74);
}

.video-script summary {
  cursor: pointer;
}

.video-script-copy {
  margin-top: 12px;
  display: grid;
  gap: 12px;
}

.related-grid .related-card {
  background: rgba(255,255,255,0.86);
  border: 1px solid rgba(44,36,22,0.12);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(44,36,22,0.04);
  padding: 18px;
}

.related-card h3 {
  margin: 10px 0 8px;
  font: 400 1.8rem/0.96 var(--font-display);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.related-card p {
  color: rgba(44,36,22,0.74);
  margin: 0 0 12px;
}

.related-card a {
  color: #ba401f;
  font-weight: 700;
}

.article-signup-band {
  padding-top: 8px;
}

.article-signup-card {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 18px;
  align-items: center;
  border-radius: 26px;
  background: #d94e2a;
  color: #fff;
  padding: 28px;
  box-shadow: 0 16px 34px rgba(44,36,22,0.1);
}

.article-signup-copy h2 {
  margin: 0 0 10px;
  color: #fff;
  font: 400 3rem/0.92 var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.article-signup-copy p {
  margin: 0;
  color: rgba(255,255,255,0.92);
}

.article-signup-embed {
  min-height: 124px;
  border-radius: 20px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.24);
  padding: 18px;
  display: grid;
  place-items: center;
}

.signup-placeholder-box {
  width: 100%;
  min-height: 88px;
  border-radius: 14px;
  border: 1px dashed rgba(255,255,255,0.5);
  display: grid;
  place-items: center;
  color: rgba(255,255,255,0.92);
  text-align: center;
  padding: 16px;
}

.related-vial-wrap {
  margin-bottom: 12px;
}

.related-article-media {
  margin: -18px -18px 14px;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
}

.related-article-media img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.peptide-tools {
  display: grid;
  gap: 14px;
  margin-bottom: 22px;
}

.peptide-tools input {
  width: 100%;
  border: 1px solid rgba(44,36,22,0.12);
  background: rgba(255,255,255,0.9);
  border-radius: 16px;
  padding: 16px 18px;
  font: inherit;
}

.peptide-index-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.peptide-index-card {
  display: block;
  overflow: hidden;
  border-radius: 24px;
  background: rgba(255,255,255,0.88);
  border: 1px solid rgba(44,36,22,0.08);
  box-shadow: 0 10px 28px rgba(44,36,22,0.08);
}

.peptide-index-media {
  position: relative;
  min-height: 320px;
  background-size: cover;
  background-position: center;
}

.peptide-index-blur {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(44,36,22,0.2));
}

.peptide-index-vial {
  position: absolute;
  left: 18px;
  bottom: 14px;
  width: 96px;
  z-index: 2;
}

.peptide-index-gradient {
  position: absolute;
  inset: auto 0 0 0;
  height: 46%;
  background: linear-gradient(180deg, rgba(217,78,42,0) 0%, rgba(217,78,42,0.84) 100%);
  z-index: 1;
}

.peptide-index-category {
  position: absolute;
  left: 126px;
  bottom: 88px;
  z-index: 2;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.peptide-index-media strong {
  position: absolute;
  left: 126px;
  right: 18px;
  bottom: 24px;
  z-index: 2;
  color: #fff;
  font: 400 2.6rem/0.9 var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.peptide-index-copy {
  padding: 18px;
}

.peptide-index-copy p {
  margin: 0 0 10px;
  color: rgba(44,36,22,0.76);
}

.peptide-index-copy span {
  color: #ba401f;
  font-weight: 700;
}

.peptide-index-card.is-hidden {
  display: none;
}

.profile-flow-section h3 {
  margin: 10px 0 8px;
  color: #2c2416;
  font: 400 1.7rem/0.95 var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.inline-transition {
  margin-top: 18px;
}

.profile-overlap-shell {
  margin-top: -96px;
  position: relative;
  z-index: 2;
}

.profile-overlap-card {
  display: grid;
  grid-template-columns: 210px minmax(0, 1fr);
  gap: 22px;
  align-items: center;
  max-width: 920px;
  margin: 0 auto;
  padding: 24px 28px;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid rgba(44,36,22,0.08);
  box-shadow: 0 18px 40px rgba(44,36,22,0.12);
}

.profile-overlap-vial {
  position: relative;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-overlap-vial img {
  width: 172px;
}

.profile-overlap-copy .display {
  color: #d94e2a;
  margin-bottom: 8px;
}

.profile-overlap-copy {
  text-align: left;
}

.profile-overlap-copy p {
  margin: 12px 0 0;
  max-width: 620px;
}

.profile-overlap-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-start;
  margin-top: 18px;
}

.issue-card-grid {
  display: grid;
  gap: 12px;
}

.issue-card {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 14px;
  align-items: start;
  border: 1px solid rgba(44,36,22,0.08);
  border-radius: 18px;
  background: rgba(255,255,255,0.8);
  padding: 16px;
}

.issue-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(217,78,42,0.1);
  color: #d94e2a;
}

.issue-copy strong {
  display: block;
  margin-bottom: 6px;
  color: #2c2416;
  font: 400 1.3rem/0.95 var(--font-display);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.issue-copy p {
  margin: 0;
  color: rgba(44,36,22,0.78);
}

.draft-cta-row {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}

.draft-dose-table-wrap {
  display: block;
}

.draft-dose-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border: 1px solid rgba(44,36,22,0.12);
  border-radius: 18px;
  background: rgba(255,255,255,0.9);
}

.draft-dose-table th,
.draft-dose-table td {
  padding: 11px 12px;
  border-bottom: 1px solid rgba(44,36,22,0.08);
  text-align: left;
  font-size: 0.88rem;
}

.draft-dose-table th {
  color: #ba401f;
  font: 400 1.05rem/1 var(--font-display);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: rgba(217,78,42,0.08);
}

.draft-dose-table tbody tr:last-child td {
  border-bottom: 0;
}

.draft-dose-table tr.is-active td {
  border-top: 2px solid #d94e2a;
  border-bottom: 2px solid #d94e2a;
  background: rgba(217,78,42,0.09);
}

.draft-dose-table tr.is-active td:first-child {
  border-left: 2px solid #d94e2a;
}

.draft-dose-table tr.is-active td:last-child {
  border-right: 2px solid #d94e2a;
}

@media (max-width: 1040px) {
  .profile-layout,
  .source-groups,
  .note-card-grid,
  .gauges,
  .compare-two,
  .recon-steps,
  .article-signup-card,
  .pt141-compare-card {
    grid-template-columns: 1fr;
  }

  .sidebar-sticky {
    position: static;
  }

  .profile-timeline,
  .team-row,
  .batteries {
    grid-template-columns: 1fr;
  }

  .vial-thumb,
  .peptide-card .vial-thumb,
  .related-vial-wrap .vial-thumb {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .vial-thumb-label {
    justify-items: center;
  }

  .peptide-index-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .profile-overlap-shell {
    margin-top: -44px;
  }

  .profile-overlap-card {
    grid-template-columns: 1fr;
    text-align: left;
  }

  .profile-overlap-copy p,
  .full-bleed-hero-copy .display,
  .full-bleed-hero-copy p {
    max-width: 100%;
  }

  .pt141-compare-vs {
    justify-self: center;
  }
}

@media (max-width: 720px) {
  .profile-section h2 {
    font-size: 2rem;
  }

  .team-row {
    grid-template-columns: 1fr;
  }

  .full-bleed-hero,
  .full-bleed-hero-copy {
    min-height: 420px;
  }

  .peptide-index-grid {
    grid-template-columns: 1fr;
  }

  .peptide-index-vial {
    width: 70px;
    left: 14px;
    bottom: 12px;
  }

  .peptide-index-category,
  .peptide-index-media strong {
    left: 96px;
  }

  .peptide-index-category {
    bottom: 68px;
  }

  .article-signup-card {
    padding: 22px;
  }

  .article-signup-copy h2 {
    font-size: 2.3rem;
  }

  .profile-overlap-vial {
    min-height: 180px;
  }

  .profile-overlap-vial img {
    width: 138px;
  }

  .issue-card {
    grid-template-columns: 1fr;
  }
}
`;
}

function buildDraftJs() {
  const supportedMap = peptideOrder.reduce((acc, slug) => {
    acc[peptideMeta[slug].name] = `peptides/${slug}.html`;
    return acc;
  }, {});
  return `document.addEventListener("DOMContentLoaded", function () {
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var filterCards = Array.prototype.slice.call(document.querySelectorAll("[data-draft-category]"));

  function applyFilter(value) {
    filterButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-filter") === value);
    });
    filterCards.forEach(function (card) {
      var category = card.getAttribute("data-draft-category");
      card.classList.toggle("is-hidden", value !== "all" && category !== value);
    });
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyFilter(button.getAttribute("data-filter"));
    });
  });

  applyFilter("all");

  var peptideFilterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-peptide-filter]"));
  var peptideCards = Array.prototype.slice.call(document.querySelectorAll("[data-peptide-category]"));
  var peptideSearch = document.getElementById("peptideSearch");
  var activePeptideFilter = "all";

  function applyPeptideFilter(value) {
    activePeptideFilter = value;
    peptideFilterButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-peptide-filter") === value);
    });
    var query = peptideSearch ? peptideSearch.value.trim().toLowerCase() : "";
    peptideCards.forEach(function (card) {
      var category = card.getAttribute("data-peptide-category") || "";
      var name = card.getAttribute("data-peptide-name") || "";
      var matchesCategory = value === "all" || category === value;
      var matchesQuery = !query || name.indexOf(query) !== -1;
      card.classList.toggle("is-hidden", !(matchesCategory && matchesQuery));
    });
  }

  peptideFilterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyPeptideFilter(button.getAttribute("data-peptide-filter"));
    });
  });

  if (peptideSearch) {
    peptideSearch.addEventListener("input", function () {
      applyPeptideFilter(activePeptideFilter);
    });
  }

  applyPeptideFilter("all");

  var supported = ${JSON.stringify(supportedMap, null, 2)};
  var link = document.getElementById("infoLink");
  var peptideSelect = document.getElementById("peptide");
  var modeTabs = Array.prototype.slice.call(document.querySelectorAll("[data-mode]"));
  var params = new URLSearchParams(window.location.search);

  function applyQueryPeptide() {
    if (!peptideSelect) return;
    var requested = params.get("peptide");
    if (!requested) return;
    var normalized = requested.toLowerCase();
    var match = Array.prototype.find.call(peptideSelect.options, function (option) {
      return option.value.toLowerCase() === normalized;
    });
    if (!match) return;
    peptideSelect.value = match.value;
    peptideSelect.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function syncDraftArticleLink() {
    if (!link || !peptideSelect) return;
    var isManual = modeTabs.some(function (button) {
      return button.classList.contains("is-active") && button.getAttribute("data-mode") === "manual";
    });
    if (isManual) return;
    var target = supported[peptideSelect.value];
    if (target) {
      link.href = target;
      link.textContent = "Read Full Article →";
    }
  }

  if (peptideSelect) {
    peptideSelect.addEventListener("change", function () {
      window.setTimeout(syncDraftArticleLink, 0);
    });
    peptideSelect.addEventListener("input", function () {
      window.setTimeout(syncDraftArticleLink, 0);
    });
  }

  modeTabs.forEach(function (button) {
    button.addEventListener("click", function () {
      window.setTimeout(syncDraftArticleLink, 0);
    });
  });

  if (link && peptideSelect) {
    var observer = new MutationObserver(syncDraftArticleLink);
    observer.observe(link, { attributes: true, attributeFilter: ["href"] });
    applyQueryPeptide();
    window.setTimeout(syncDraftArticleLink, 50);
  }

  function parseDoseCard(card) {
    var text = card.textContent.replace(/\\s+/g, " ").trim();
    var dose = (card.querySelector("strong") || {}).textContent || "";
    var units = (card.querySelector(".value") || {}).textContent || "";
    var details = (card.querySelector("p") || {}).textContent || text;
    var volumeMatch = details.match(/([0-9.]+)\\s*mL/i);
    var needleMatch = details.match(/(28G|29G|31G)[^·]*recommended/i);
    var weeksMatch = details.match(/([0-9.]+)\\s*weeks/i);
    var variable = /variable schedule/i.test(details);
    return {
      dose: dose.trim(),
      units: units.trim(),
      volume: volumeMatch ? volumeMatch[1] + " mL" : "—",
      needle: needleMatch ? needleMatch[0].replace(/recommended/i, "").trim() + " recommended" : "—",
      duration: variable ? "Variable" : (weeksMatch ? weeksMatch[1] + " weeks" : "—"),
      active: card.classList.contains("is-active")
    };
  }

  function renderDraftDoseTable() {
    var doseCards = document.getElementById("doseCards");
    if (!doseCards) return;
    var cards = Array.prototype.slice.call(doseCards.querySelectorAll(".dose-card"));
    if (!cards.length) return;
    var rows = cards.map(parseDoseCard);
    doseCards.classList.add("draft-dose-table-wrap");
    doseCards.innerHTML = '<table class="draft-dose-table"><thead><tr><th>Dose</th><th>Units</th><th>mL</th><th>Needle</th><th>Duration</th></tr></thead><tbody>' +
      rows.map(function (row) {
        return '<tr' + (row.active ? ' class="is-active"' : '') + '><td>' + row.dose + '</td><td>' + row.units + '</td><td>' + row.volume + '</td><td>' + row.needle + '</td><td>' + row.duration + '</td></tr>';
      }).join("") +
      '</tbody></table>';
  }

  var doseCardsNode = document.getElementById("doseCards");
  if (doseCardsNode) {
    var doseObserver = new MutationObserver(function () {
      window.setTimeout(renderDraftDoseTable, 0);
    });
    doseObserver.observe(doseCardsNode, { childList: true });
    window.setTimeout(renderDraftDoseTable, 120);
  }

  var protocolEmail = document.getElementById("protocolEmail");
  var downloadPdf = document.getElementById("downloadPdf");
  var emailProtocol = document.getElementById("emailProtocol");
  var fieldHelp = protocolEmail && protocolEmail.parentElement ? protocolEmail.parentElement.querySelector(".field-help") : null;
  if (downloadPdf) downloadPdf.textContent = "Download PDF (Local File)";
  if (emailProtocol) emailProtocol.textContent = "Open Email Draft";
  if (fieldHelp) {
    fieldHelp.textContent = "Draft UX note: this static site cannot silently email a PDF. Download creates a local PDF. Open Email Draft prepares a message, and the user attaches the PDF manually unless we add a backend/email service later.";
  }
  var actions = document.querySelector(".download-actions");
  if (actions && !document.querySelector(".draft-pdf-scope-note")) {
    var note = document.createElement("p");
    note.className = "small-copy draft-pdf-scope-note";
    note.textContent = "Draft PDF idea: include the selected target dose plus nearby doses above and below, instead of every common dose row.";
    actions.insertAdjacentElement("afterend", note);
  }
});`;
}

function buildDraftIndex() {
  return buildDraftIndexPage();
}

function stripHtml(html) {
  return cleanText(String(html).replace(/<[^>]+>/g, " "));
}

function buildSearchIndex() {
  const pages = [];
  peptideOrder.forEach((slug) => {
    const peptide = peptides[slug];
    pages.push({
      title: peptide.title,
      url: `/peptides/${slug}.html`,
      category: "peptide",
      content: stripHtml([
        peptide.shortDescription,
        peptide.whatIs,
        peptide.howItWorks,
        renderBulletList(peptide.benefits),
        renderBulletList(peptide.tracking)
      ].join(" ")),
      tags: Array.from(new Set([
        slug,
        peptide.title.toLowerCase(),
        ...peptide.category.toLowerCase().split("/").map((item) => item.trim()),
        ...peptide.title.toLowerCase().split(/\s+/)
      ].filter(Boolean)))
    });
  });
  articleMeta.forEach((article) => {
    pages.push({
      title: article.title,
      url: article.hrefFromDrafts.replace("..", ""),
      category: "article",
      content: cleanText(article.excerpt),
      tags: Array.from(new Set([
        article.key,
        article.category.toLowerCase(),
        ...article.title.toLowerCase().split(/\s+/)
      ]))
    });
  });
  pages.push({
    title: "Peptides",
    url: "/peptides.html",
    category: "hub",
    content: "Peptide profiles, search, filters, calculator-linked peptide education pages.",
    tags: ["peptides", "profiles", "search", "calculator"]
  });
  pages.push({
    title: "Articles",
    url: "/articles.html",
    category: "hub",
    content: "Research notes, protocol breakdowns, wellness stack articles, and lifestyle notes.",
    tags: ["articles", "protocol primer", "wellness stack", "lifestyle notes"]
  });
  pages.push({
    title: "Calculator",
    url: "/index.html",
    category: "tool",
    content: "Peptide reconstitution calculator with standard, reverse, dilution, and manual modes.",
    tags: ["calculator", "reconstitution", "dilution", "manual"]
  });
  pages.push({
    title: "About",
    url: "/about.html",
    category: "page",
    content: "About Peptide Protocol, built by real people documenting their peptide journey with honest field notes and clear protocol math.",
    tags: ["about", "peptide protocol", "field notes"]
  });
  return JSON.stringify({ pages }, null, 2);
}

fs.writeFileSync(path.join(draftsDir, "draft.css"), buildDraftCss());
fs.writeFileSync(path.join(draftsDir, "draft.js"), buildDraftJs());
fs.writeFileSync(path.join(draftsDir, "articles.html"), buildDraftArticlesPage());
fs.writeFileSync(path.join(draftsDir, "index.html"), buildDraftIndex());
fs.writeFileSync(path.join(draftsDir, "peptides.html"), buildPeptidesIndexPage());
fs.writeFileSync(path.join(root, "search-index.json"), buildSearchIndex());
fs.writeFileSync(path.join(draftsDir, "search-index.json"), buildSearchIndex());

peptideOrder.forEach((slug) => {
  const peptide = peptides[slug];
  fs.writeFileSync(path.join(ogDir, `${slug}-og.svg`), buildOgSvg(peptide));
  fs.writeFileSync(path.join(cardsDir, `${slug}-card.svg`), buildProfileCardSvg(peptide));
  fs.writeFileSync(path.join(peptideDraftDir, `${slug}.html`), renderPeptidePage(slug));
});

articleMeta.forEach((article, index) => {
  fs.writeFileSync(path.join(cardsDir, `${article.key}-article-card.svg`), buildArticleCardSvg(article, index));
});

console.log("Preview package generated.");
