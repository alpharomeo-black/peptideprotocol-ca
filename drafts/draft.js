document.addEventListener("DOMContentLoaded", function () {
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

  var supported = {
  "Retatrutide": "peptides/retatrutide.html",
  "NAD+": "peptides/nad-plus.html",
  "KLOW": "peptides/klow.html",
  "MOTS-c": "peptides/mots-c.html",
  "PT-141": "peptides/pt-141.html"
};
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
    var text = card.textContent.replace(/\s+/g, " ").trim();
    var dose = (card.querySelector("strong") || {}).textContent || "";
    var units = (card.querySelector(".value") || {}).textContent || "";
    var details = (card.querySelector("p") || {}).textContent || text;
    var volumeMatch = details.match(/([0-9.]+)\s*mL/i);
    var needleMatch = details.match(/(28G|29G|31G)[^·]*recommended/i);
    var weeksMatch = details.match(/([0-9.]+)\s*weeks/i);
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
});