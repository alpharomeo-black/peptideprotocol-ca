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
});