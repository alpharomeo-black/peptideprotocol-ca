const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const sourceRoot = path.join(root, "drafts");
const sourcePeptides = path.join(sourceRoot, "peptides");
const livePeptidesDir = path.join(root, "peptides");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function removeNoindex(html) {
  return html.replace(/\s*<meta name="robots" content="noindex,nofollow">\n/i, "\n");
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
}

function promoteIndex() {
  const source = fs.readFileSync(path.join(sourceRoot, "peptides.html"), "utf8");
  let html = removeNoindex(source);
  html = html
    .replace(/href="\.\.\/about\.html"/g, 'href="about.html"')
    .replace(/href="\.\.\/privacy-policy\.html"/g, 'href="privacy-policy.html"')
    .replace(/draft peptide library/g, "peptide library")
    .replace(/src="\.\.\/assets\//g, 'src="assets/')
    .replace(/url\('\.\.\/assets\//g, "url('assets/")
    .replace(/content="\.\.\/assets\//g, 'content="assets/')
    .replace(/href="\.\.\/styles\/site\.css/g, 'href="styles/site.css')
    .replace(/href="draft\.css"/g, 'href="drafts/draft.css"')
    .replace(/src="\.\.\/scripts\/site\.js/g, 'src="scripts/site.js')
    .replace(/src="draft\.js"/g, 'src="drafts/draft.js"');
  writeFile(path.join(root, "peptides.html"), html);
}

function promotePeptideFiles() {
  ensureDir(livePeptidesDir);
  const files = fs.readdirSync(sourcePeptides).filter((file) => file.endsWith(".html"));
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(sourcePeptides, file), "utf8");
    let html = removeNoindex(source);
    html = html
      .replace(/src="\.\.\/\.\.\/assets\//g, 'src="../assets/')
      .replace(/href="\.\.\/\.\.\/styles\/site\.css/g, 'href="../styles/site.css')
      .replace(/href="\.\.\/draft\.css"/g, 'href="../drafts/draft.css"')
      .replace(/src="\.\.\/\.\.\/scripts\/site\.js/g, 'src="../scripts/site.js')
      .replace(/src="\.\.\/draft\.js"/g, 'src="../drafts/draft.js"')
      .replace(/href="\.\.\/\.\.\/about\.html"/g, 'href="../about.html"')
      .replace(/href="\.\.\/\.\.\/privacy-policy\.html"/g, 'href="../privacy-policy.html"')
      .replace(/content="\.\.\/\.\.\/assets\//g, 'content="../assets/')
      .replace(/url\('\.\.\/\.\.\/assets\//g, "url('../assets/");
    writeFile(path.join(livePeptidesDir, file), html);
  });
}

promoteIndex();
promotePeptideFiles();

console.log("Live peptide pages promoted.");
