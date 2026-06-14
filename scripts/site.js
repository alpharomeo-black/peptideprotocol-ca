(function () {
  var constantContactConfig = {
    listId: "df2d5dd0-6779-11f1-99dc-02420a320003",
    endpoint: ""
  };

  var supportedProfileRoutes = {
    "retatrutide": "peptides/retatrutide.html",
    "nad-plus": "peptides/nad-plus.html",
    "klow": "peptides/klow.html",
    "mots-c": "peptides/mots-c.html",
    "pt-141": "peptides/pt-141.html"
  };

  var doseOptions = [0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 12];
  var needles = [
    { id: "28g", label: "28G", unitsPerMl: 50, volume: "0.5 mL (50 units)" },
    { id: "29g", label: "29G", unitsPerMl: 100, volume: "1 mL (100 units)" },
    { id: "31g", label: "31G", unitsPerMl: 100, volume: "1 mL (100 units)" }
  ];

  var categoryProfiles = {
    metabolic: {
      description: "A metabolic peptide commonly documented for appetite control, body-composition support, and slower weekly protocol pacing.",
      sizes: [5, 10, 15],
      halfLife: "About 5 to 7 days",
      range: "0.25 to 10 mg weekly",
      timeline: ["0.25 mg", "0.5 mg", "1 mg", "2 mg"],
      stacks: ["NAD+", "AOD9604", "BPC-157", "MOTS-c"]
    },
    recovery: {
      description: "A recovery-focused peptide commonly used in protocol notes around tissue repair, inflammation support, and consistency.",
      sizes: [5, 10],
      halfLife: "Short to moderate depending on compound",
      range: "250 mcg to 5 mg depending on compound and cadence",
      timeline: ["Low start", "Repeat", "Build", "Steady"],
      stacks: ["BPC-157", "TB-500", "GHK-Cu", "KPV"]
    },
    cognition: {
      description: "A nootropic or neuro-support peptide often discussed for calm focus, resilience, and easier cognitive pacing.",
      sizes: [5, 10],
      halfLife: "Short acting",
      range: "100 to 1000 mcg one to three times daily",
      timeline: ["100 mcg", "250 mcg", "500 mcg", "750 mcg"],
      stacks: ["Semax", "Selank", "Pinealon", "NAD+"]
    },
    growth: {
      description: "A growth-hormone or body-composition support peptide often documented around timing, sleep, recovery, and longer routine planning.",
      sizes: [2, 5, 10],
      halfLife: "Short to moderate depending on compound",
      range: "100 mcg to 2 mg daily depending on compound",
      timeline: ["100 mcg", "150 mcg", "250 mcg", "Protocol dose"],
      stacks: ["Ipamorelin", "CJC-1295 No DAC", "AOD9604", "DSIP"]
    },
    wellness: {
      description: "A broader wellness-support compound often tracked for energy, recovery, longevity, or endocrine rhythm.",
      sizes: [5, 10, 50],
      halfLife: "Varies by compound",
      range: "Protocol-specific depending on route and use-case",
      timeline: ["Start low", "Assess", "Build", "Maintain"],
      stacks: ["NAD+", "DSIP", "Epithalon", "Thymalin"]
    },
    situational: {
      description: "A situational peptide more commonly documented around timing, response, and personal notes than fixed weekly cadence.",
      sizes: [5, 10],
      halfLife: "Short to moderate",
      range: "Protocol-specific situational use",
      timeline: ["Tolerance", "Baseline", "Response", "Review"],
      stacks: ["Oxytocin", "Kisspeptin-10", "NAD+", "DSIP"]
    }
  };

  function slugify(value) {
    return value.toLowerCase()
      .replace(/\+/g, " plus ")
      .replace(/[()]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function makePeptide(name, category, overrides) {
    var base = categoryProfiles[category];
    return Object.assign({
      name: name,
      slug: slugify(name),
      description: base.description,
      sizes: base.sizes.slice(),
      halfLife: base.halfLife,
      range: base.range,
      timeline: base.timeline.slice(),
      stacks: base.stacks.slice()
    }, overrides || {});
  }

  var peptideCatalog = [
    makePeptide("Retatrutide", "metabolic", { sizes: [5, 10, 15, 20, 30, 60], halfLife: "About 6 days", range: "0.5 to 12 mg weekly", timeline: ["0.5 mg", "1 mg", "2 mg", "4 mg"], stacks: ["BPC-157", "NAD+", "AOD9604", "5-Amino-1MQ"] }),
    makePeptide("Tirzepatide", "metabolic", { sizes: [10, 15, 20, 30, 40, 60], range: "2.5 to 15 mg weekly", timeline: ["2.5 mg", "2.5 mg", "5 mg", "7.5 mg"] }),
    makePeptide("Semaglutide", "metabolic", { sizes: [5, 10, 15, 20], range: "0.25 to 2.4 mg weekly", timeline: ["0.25 mg", "0.25 mg", "0.5 mg", "1 mg"] }),
    makePeptide("BPC-157", "recovery", { halfLife: "Short, often under 6 hours", range: "200 to 1000 mcg daily", timeline: ["250 mcg", "250 mcg", "500 mcg", "500 mcg split"] }),
    makePeptide("TB-500", "recovery", { sizes: [2, 5, 10], range: "2 to 10 mg weekly", timeline: ["1 mg", "1 mg", "2 mg", "2.5 mg"] }),
    makePeptide("KLOW (GHK-Cu+TB500+BPC157+KPV)", "recovery", { sizes: [80], halfLife: "Mixed compound profile", range: "Protocol-specific blend use", timeline: ["Low check", "Repeat", "Build", "Hold"] }),
    makePeptide("MOTS-c", "metabolic", { sizes: [10, 20, 40], halfLife: "Short signaling window", range: "5 to 15 mg several times weekly", timeline: ["2 mg", "5 mg", "5 mg", "7.5 mg"] }),
    makePeptide("NAD+", "wellness", { sizes: [500, 1000], range: "25 to 250 mg per session", timeline: ["25 mg", "50 mg", "75 mg", "100 mg"], stacks: ["MOTS-c", "BPC-157", "DSIP", "Retatrutide"] }),
    makePeptide("CJC-1295 No DAC", "growth", { sizes: [2, 5, 10], range: "100 to 300 mcg one to three times daily", timeline: ["100 mcg", "100 mcg", "150 mcg", "200 mcg"] }),
    makePeptide("Ipamorelin", "growth", { sizes: [2, 5, 10], range: "100 to 300 mcg once to three times daily", timeline: ["100 mcg", "100 mcg", "150 mcg", "200 mcg"] }),
    makePeptide("PT-141", "situational", { sizes: [10], range: "0.5 to 2 mg situationally", timeline: ["0.5 mg", "0.75 mg", "1 mg", "1.5 mg"] }),
    makePeptide("Semax", "cognition", { sizes: [5, 10], range: "200 to 1000 mcg one to three times daily", timeline: ["200 mcg", "300 mcg", "500 mcg", "750 mcg"] }),
    makePeptide("Selank", "cognition", { sizes: [5, 10], range: "250 to 1000 mcg one to three times daily", timeline: ["250 mcg", "250 mcg", "500 mcg", "750 mcg"] }),
    makePeptide("Thymosin Alpha-1", "wellness", { sizes: [5, 10], range: "0.5 to 1.5 mg two to seven times weekly", timeline: ["0.5 mg", "0.5 mg", "1 mg", "1 mg"] }),
    makePeptide("Epithalon", "wellness", { sizes: [10, 50], range: "5 to 10 mg daily during short cycles", timeline: ["2 mg", "5 mg", "5 mg", "10 mg"] }),
    makePeptide("GHK-Cu", "recovery", { sizes: [50, 100], range: "1 to 5 mg daily", timeline: ["1 mg", "1 mg", "2 mg", "3 mg"] }),
    makePeptide("Hexarelin", "growth", { sizes: [5], range: "100 to 200 mcg one to three times daily", timeline: ["50 mcg", "100 mcg", "100 mcg", "150 mcg"] }),
    makePeptide("AOD9604", "growth", { sizes: [5, 10], range: "250 to 500 mcg daily", timeline: ["100 mcg", "200 mcg", "250 mcg", "500 mcg"] }),
    makePeptide("Tesamorelin", "growth", { sizes: [5, 10, 20], range: "1 to 2 mg daily", timeline: ["0.5 mg", "1 mg", "1 mg", "2 mg"] }),
    makePeptide("HGH", "growth", { sizes: [10, 15, 24, 36], range: "1 to 4 IU daily", timeline: ["1 IU", "1 IU", "2 IU", "3 IU"] }),
    makePeptide("Melanotan II", "situational", { sizes: [10], halfLife: "About 30 hours", range: "100 to 500 mcg daily or situationally", timeline: ["100 mcg", "150 mcg", "250 mcg", "500 mcg"] }),
    makePeptide("DSIP", "wellness", { sizes: [5, 10], range: "100 to 500 mcg at bedtime", timeline: ["100 mcg", "100 mcg", "250 mcg", "500 mcg"] }),
    makePeptide("SS-31", "wellness", { sizes: [10, 50], range: "2 to 10 mg daily", timeline: ["1 mg", "2 mg", "5 mg", "10 mg"] }),
    makePeptide("IGF-1 LR3", "growth", { sizes: [1], halfLife: "About 20 to 30 hours", range: "20 to 100 mcg daily", timeline: ["10 mcg", "20 mcg", "40 mcg", "60 mcg"] }),
    makePeptide("Cerebrolysin", "cognition", { sizes: [10, 60], halfLife: "Session-based course use", range: "1 to 10 mL per day in courses", timeline: ["1 mL", "2 mL", "2 mL", "5 mL"] }),
    makePeptide("KPV", "recovery", { sizes: [5, 10], range: "250 to 1000 mcg daily", timeline: ["250 mcg", "250 mcg", "500 mcg", "750 mcg"] }),
    makePeptide("Oxytocin", "situational", { sizes: [5, 10], range: "100 to 600 mcg situationally", timeline: ["50 mcg", "100 mcg", "200 mcg", "300 mcg"] }),
    makePeptide("Kisspeptin-10", "situational", { sizes: [5, 10], range: "100 to 500 mcg several times weekly", timeline: ["50 mcg", "100 mcg", "150 mcg", "200 mcg"] }),
    makePeptide("5-Amino-1MQ", "metabolic", { sizes: [10, 50, 100], range: "25 to 100 mg daily", timeline: ["25 mg", "25 mg", "50 mg", "75 mg"] }),
    makePeptide("AICAR", "metabolic", { sizes: [50, 100], range: "5 to 50 mg daily", timeline: ["5 mg", "10 mg", "20 mg", "30 mg"] }),
    makePeptide("Pinealon", "cognition", { sizes: [10], range: "100 to 300 mcg one to three times daily", timeline: ["100 mcg", "100 mcg", "200 mcg", "300 mcg"] }),
    makePeptide("Sermorelin", "growth", { sizes: [5, 10], range: "100 to 300 mcg at bedtime", timeline: ["100 mcg", "100 mcg", "150 mcg", "250 mcg"] }),
    makePeptide("Thymalin", "wellness", { sizes: [10], range: "5 to 10 mg daily during short courses", timeline: ["2 mg", "5 mg", "5 mg", "10 mg"] }),
    makePeptide("ARA-290", "wellness", { sizes: [10], range: "2 to 8 mg several times weekly", timeline: ["1 mg", "2 mg", "2 mg", "4 mg"] }),
    makePeptide("Cagrilintide", "metabolic", { sizes: [2, 5, 10], range: "0.3 to 4.5 mg weekly", timeline: ["0.3 mg", "0.6 mg", "1.2 mg", "1.8 mg"] }),
    makePeptide("Survodutide", "metabolic", { sizes: [5, 10, 15], range: "0.6 to 6 mg weekly", timeline: ["0.6 mg", "1.2 mg", "2.4 mg", "3.6 mg"] }),
    makePeptide("Mazdutide", "metabolic", { sizes: [5, 10, 15], range: "1 to 9 mg weekly", timeline: ["1 mg", "2 mg", "3 mg", "4 mg"] })
  ];

  function formatDose(value) {
    return Number.isInteger(value) ? String(value) : String(value).replace(/\.0$/, "");
  }

  function getPeptide(name) {
    return peptideCatalog.find(function (item) { return item.name === name; }) || peptideCatalog[0];
  }

  function initNav() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var nav = document.querySelector("[data-nav-links]");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    Array.prototype.slice.call(nav.querySelectorAll("a")).forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initHeroSlider() {
    var slides = Array.prototype.slice.call(document.querySelectorAll("[data-slide]"));
    var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
    if (!slides.length || !dots.length) return;

    var index = 0;
    var timer = null;

    function showSlide(nextIndex) {
      index = nextIndex;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === nextIndex);
      });
      dots.forEach(function (dot, i) {
        dot.setAttribute("aria-current", i === nextIndex ? "true" : "false");
      });
    }

    function queue() {
      window.clearInterval(timer);
      timer = window.setInterval(function () {
        showSlide((index + 1) % slides.length);
      }, 5200);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        showSlide(i);
        queue();
      });
    });

    queue();
  }

  function initFAQ() {
    Array.prototype.slice.call(document.querySelectorAll(".faq-toggle")).forEach(function (button) {
      button.addEventListener("click", function () {
        var item = button.closest(".faq-item");
        var isOpen = item.classList.contains("is-open");
        document.querySelectorAll(".faq-item").forEach(function (faq) {
          faq.classList.remove("is-open");
          faq.querySelector(".faq-toggle").setAttribute("aria-expanded", "false");
          faq.querySelector(".faq-toggle span:last-child").textContent = "+";
        });
        if (!isOpen) {
          item.classList.add("is-open");
          button.setAttribute("aria-expanded", "true");
          button.querySelector("span:last-child").textContent = "−";
        }
      });
    });
  }

  function initSignupForms() {
    var forms = Array.prototype.slice.call(document.querySelectorAll("[data-cc-signup-form]"));
    if (!forms.length) return;

    forms.forEach(function (form) {
      var emailField = form.querySelector('input[name="email"]');
      var firstNameField = form.querySelector('input[name="firstName"]');
      var message = form.querySelector("[data-signup-message]");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        var email = ((emailField && emailField.value) || "").trim();
        var firstName = ((firstNameField && firstNameField.value) || "").trim();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          if (message) message.textContent = "Enter a valid email address to continue.";
          return;
        }

        if (!constantContactConfig.endpoint) {
          if (message) {
            message.textContent = firstName
              ? "Thanks, " + firstName + ". The signup form is installed and the secure email-list connection is being activated."
              : "Thanks. The signup form is installed and the secure email-list connection is being activated.";
          }
          return;
        }
      });
    });
  }

  function initCalculator() {
    var form = document.getElementById("calculatorForm");
    if (!form) return;

    var compareBacOptions = [0.5, 1, 1.5, 2, 2.5, 3, 5, 8, 10];
    var expandedPresetSizes = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 30, 40, 50, 60, 80, 100, 150, 250, 500, 1000];
    var state = {
      mode: "standard",
      dilutionMode: "compare",
      selectedNeedle: needles[0],
      selectedPresetSize: 10,
      latestSummary: null
    };

    var peptideSelect = document.getElementById("peptide");
    var vialSize = document.getElementById("vialSize");
    var peptideAmount = document.getElementById("peptideAmount");
    var bacWater = document.getElementById("bacWater");
    var frequency = document.getElementById("frequency");
    var targetDoseSelect = document.getElementById("targetDose");
    var reverseUnits = document.getElementById("reverseUnits");
    var dilutionDesiredUnits = document.getElementById("dilutionDesiredUnits");
    var customPeptideName = document.getElementById("customPeptideName");
    var manualDoseValue = document.getElementById("manualDoseValue");
    var doseUnit = document.getElementById("doseUnit");
    var needleChoices = document.getElementById("needleChoices");
    var modeTabs = Array.prototype.slice.call(document.querySelectorAll("[data-mode]"));
    var dilutionTabs = Array.prototype.slice.call(document.querySelectorAll("[data-dilution-mode]"));
    var modeFields = Array.prototype.slice.call(document.querySelectorAll(".mode-field"));
    var dilutionSubmodeTabs = document.getElementById("dilutionSubmodeTabs");
    var concentrationOutput = document.getElementById("concentrationOutput");
    var durationOutput = document.getElementById("durationOutput");
    var scheduleOutput = document.getElementById("scheduleOutput");
    var protocolOutput = document.getElementById("protocolOutput");
    var doseNarrative = document.getElementById("doseNarrative");
    var doseGridLabel = document.getElementById("doseGridLabel");
    var doseCards = document.getElementById("doseCards");
    var needleFill = document.getElementById("needleFill");
    var vialLabel = document.getElementById("vialLabel");
    var vialModeNote = document.getElementById("vialModeNote");
    var infoName = document.getElementById("infoName");
    var infoDescription = document.getElementById("infoDescription");
    var infoHalfLife = document.getElementById("infoHalfLife");
    var infoRange = document.getElementById("infoRange");
    var infoLink = document.getElementById("infoLink");
    var supplyNeedle = document.getElementById("supplyNeedle");
    var supplyWater = document.getElementById("supplyWater");
    var supplyStorage = document.getElementById("supplyStorage");
    var timeline = document.getElementById("timeline");
    var stackPills = document.getElementById("stackPills");
    var stackNote = document.getElementById("stackNote");
    var suggestion = document.getElementById("suggestion");
    var calcStatus = document.getElementById("calcStatus");
    var dilutionCompareCard = document.getElementById("dilutionCompareCard");
    var dilutionCompareTitle = document.getElementById("dilutionCompareTitle");
    var dilutionCompareOutput = document.getElementById("dilutionCompareOutput");
    var unitMeter = document.querySelector(".unit-meter");
    var unitMeterScale = document.getElementById("unitMeterScale");
    var emailInput = document.getElementById("protocolEmail");
    var emailButton = document.getElementById("emailProtocol");
    var copyButton = document.getElementById("copyProtocol");
    var pdfButton = document.getElementById("downloadPdf");
    var message = document.getElementById("protocolMessage");

    function populatePeptides() {
      peptideSelect.innerHTML = peptideCatalog.map(function (peptide) {
        return '<option value="' + peptide.name + '">' + peptide.name + '</option>';
      }).join("");
      targetDoseSelect.innerHTML = doseOptions.map(function (value) {
        return '<option value="' + value + '">' + formatDose(value) + ' mg</option>';
      }).join("");
      peptideSelect.value = "Retatrutide";
      targetDoseSelect.value = "2";
      vialSize.value = "10";
      peptideAmount.value = "10";
      state.selectedPresetSize = 10;
    }

    function renderNeedles() {
      needleChoices.innerHTML = needles.map(function (needle) {
        return '' +
          '<button class="needle-choice' + (needle.id === state.selectedNeedle.id ? ' is-selected' : '') + '" type="button" data-needle="' + needle.id + '">' +
            '<strong>' + needle.label + '</strong>' +
            '<img src="assets/icons-new/Peptide-Protocal-icons_0002_icon-needle.png" alt="">' +
            '<span>' + needle.volume + '</span>' +
          '</button>';
      }).join("");

      Array.prototype.slice.call(needleChoices.querySelectorAll("[data-needle]")).forEach(function (button) {
        button.addEventListener("click", function () {
          var next = needles.find(function (item) { return item.id === button.getAttribute("data-needle"); });
          if (next) {
            state.selectedNeedle = next;
            renderNeedles();
            updateCalculator();
          }
        });
      });
    }

    function presetSizesForPeptide(peptide) {
      return peptide.sizes
        .concat(expandedPresetSizes)
        .filter(function (size, index, all) {
          return all.indexOf(size) === index;
        })
        .sort(function (a, b) { return a - b; });
    }

    function renderSizes(peptide, preferredSize) {
      var presets = presetSizesForPeptide(peptide);
      var selectedValue = Number(preferredSize);
      if (!isFinite(selectedValue) || selectedValue <= 0) {
        selectedValue = Number(peptideAmount.value) || Number(vialSize.value) || peptide.sizes[0];
      }

      var options = presets.slice();
      if (options.indexOf(selectedValue) === -1 && isFinite(selectedValue) && selectedValue > 0) {
        options.unshift(selectedValue);
      }

      if (options.indexOf(selectedValue) === -1) selectedValue = peptide.sizes[0];

      vialSize.innerHTML = options.map(function (size, index) {
        var label = formatDose(size) + " mg";
        if (index === 0 && presets.indexOf(size) === -1) {
          label = "Custom · " + label;
        }
        return '<option value="' + size + '">' + label + '</option>';
      }).join("");

      vialSize.value = String(selectedValue);
      state.selectedPresetSize = selectedValue;
    }

    function frequencyInfo() {
      var map = {
        daily: { label: "Daily", dosesPerWeek: 7, schedule: ["Every day", "Keep the timing consistent", "Log response and storage"] },
        "3x-weekly": { label: "3x weekly", dosesPerWeek: 3, schedule: ["Monday", "Wednesday", "Friday"] },
        "2x-weekly": { label: "2x weekly", dosesPerWeek: 2, schedule: ["Monday", "Thursday"] },
        weekly: { label: "Weekly", dosesPerWeek: 1, schedule: ["One protocol day per week", "Rotate fridge and supply check on the same day"] },
        situational: { label: "Situational", dosesPerWeek: null, schedule: ["Use only as needed", "Track timing, context, and response"] }
      };
      return map[frequency.value];
    }

    function smartSuggestion(vialMg, targetMg, currentMl) {
      var best = null;
      [5, 8, 10, 12.5, 15, 20, 25, 30, 40, 50].forEach(function (units) {
        var suggestedMl = (vialMg * units) / (targetMg * state.selectedNeedle.unitsPerMl);
        if (suggestedMl >= 0.2 && suggestedMl <= 10) {
          var delta = Math.abs(suggestedMl - currentMl);
          if (!best || delta < best.delta) best = { units: units, ml: suggestedMl, delta: delta };
        }
      });
      if (!best) return "Your current BAC water amount works, but there is no especially clean unit match for the active target dose.";
      return "For cleaner " + formatDose(targetMg) + " mg dosing on the " + state.selectedNeedle.label + ", try " + best.ml.toFixed(1) + " mL so each dose lands near " + formatDose(best.units) + " units.";
    }

    function buildScheduleList(items) {
      return '<ul>' + items.map(function (item) { return '<li>' + item + '</li>'; }).join("") + '</ul>';
    }

    function renderTimeline(peptide) {
      timeline.innerHTML = peptide.timeline.map(function (entry, index) {
        return '<div class="timeline-step"><strong>Week ' + (index + 1) + '</strong><span>' + entry + '</span></div>';
      }).join("");
    }

    function renderStacks(peptide) {
      stackPills.innerHTML = peptide.stacks.map(function (stack) {
        return '<span>' + stack + '</span>';
      }).join("");
      stackNote.textContent = "Commonly stacked with " + peptide.stacks.slice(0, 2).join(" and ") + " when people want a broader protocol instead of a single-compound workflow.";
    }

    function toMg(value, unit) {
      return unit === "mcg" ? value / 1000 : value;
    }

    function volumeToUnits(volumeMl) {
      return volumeMl * state.selectedNeedle.unitsPerMl;
    }

    function unitsToVolume(units) {
      return units / state.selectedNeedle.unitsPerMl;
    }

    function cleanUnits(units) {
      return Number(units.toFixed(1));
    }

    function calculateConcentration(mg, ml) {
      return mg / ml;
    }

    function computeDoseFromConcentration(doseMg, concentration) {
      var volumeMl = doseMg / concentration;
      return {
        volumeMl: volumeMl,
        units: volumeToUnits(volumeMl)
      };
    }

    function computeDoseFromUnits(units, concentration) {
      var volumeMl = unitsToVolume(units);
      return {
        volumeMl: volumeMl,
        doseMg: volumeMl * concentration,
        doseMcg: volumeMl * concentration * 1000
      };
    }

    function recommendedNeedleForVolume(volumeMl) {
      if (volumeMl <= 0.5) return needles[0];
      if (volumeMl <= 1) return needles[2];
      return needles[1];
    }

    function solveBacForUnits(peptideMg, targetDoseMg, desiredUnits) {
      var targetMl = unitsToVolume(desiredUnits);
      return peptideMg / (targetDoseMg / targetMl);
    }

    function describeDuration(totalDoses, schedule) {
      if (schedule.dosesPerWeek === null) {
        return formatDose(Number(totalDoses.toFixed(1))) + " total doses available. Weeks stay variable because this is a situational protocol.";
      }
      return formatDose(Number(totalDoses.toFixed(1))) + " doses in the vial. At " + schedule.label.toLowerCase() + ", that covers about " + (totalDoses / schedule.dosesPerWeek).toFixed(1) + " weeks.";
    }

    function buildProtocolText(summary) {
      var needleText = summary.needleLabel || (state.selectedNeedle.label + " " + state.selectedNeedle.volume);
      var lines = [
        "Protocol Summary",
        "Mode: " + summary.modeLabel,
        "Peptide: " + summary.peptideLabel,
        "Peptide Amount: " + formatDose(summary.peptideMg) + " mg",
        "Needle: " + needleText,
        "Concentration: " + summary.concentration.toFixed(2) + " mg/mL"
      ];

      if (typeof summary.bacMl === "number" && isFinite(summary.bacMl)) {
        lines.push("BAC Water: " + summary.bacMl.toFixed(2) + " mL");
      }

      lines = lines.concat(summary.detailLines);

      if (summary.durationText) lines.push(summary.durationText);
      if (summary.scheduleItems && summary.scheduleItems.length) lines.push("Schedule: " + summary.scheduleItems.join(", "));
      if (summary.metaLines && summary.metaLines.length) lines = lines.concat(summary.metaLines);
      lines.push("Disclaimer: For educational and research documentation purposes only. Not medical advice.");

      return lines.join("\n");
    }

    function protocolRows(summary) {
      var needleText = summary.needleLabel || (state.selectedNeedle.label + " " + state.selectedNeedle.volume);
      var rows = [
        ["Mode", summary.modeLabel],
        ["Peptide", summary.peptideLabel],
        ["Peptide Amount", formatDose(summary.peptideMg) + " mg"],
        ["Needle", needleText],
        ["Concentration", summary.concentration.toFixed(2) + " mg/mL"]
      ];

      if (typeof summary.bacMl === "number" && isFinite(summary.bacMl)) {
        rows.push(["BAC Water", summary.bacMl.toFixed(2) + " mL"]);
      }

      summary.detailLines.forEach(function (line) {
        var split = line.split(/:\s(.+)/);
        if (split.length >= 3) {
          rows.push([split[0], split[1]]);
        } else {
          rows.push(["Detail", line]);
        }
      });

      if (summary.durationText) rows.push(["Duration", summary.durationText]);
      if (summary.scheduleItems && summary.scheduleItems.length) rows.push(["Schedule", summary.scheduleItems.join(" • ")]);
      if (summary.metaLines && summary.metaLines.length) {
        summary.metaLines.forEach(function (line) {
          var split = line.split(/:\s(.+)/);
          if (split.length >= 3) {
            rows.push([split[0], split[1]]);
          } else {
            rows.push(["Notes", line]);
          }
        });
      }

      return rows;
    }

    function doseReferenceRows(concentration) {
      return doseOptions.map(function (dose) {
        var volumeMl = dose / concentration;
        var units = volumeToUnits(volumeMl);
        var needle = recommendedNeedleForVolume(volumeMl);
        var schedule = frequencyInfo();
        var weeks = schedule.dosesPerWeek ? (Math.max(Number(peptideAmount.value) || 0, 0.01) / dose) / schedule.dosesPerWeek : null;
        return {
          dose: formatDose(dose) + " mg",
          units: cleanUnits(units) + " units",
          volume: volumeMl.toFixed(3) + " mL",
          needle: needle.label + " · " + needle.volume,
          duration: weeks === null ? "Variable schedule" : weeks.toFixed(1) + " weeks"
        };
      });
    }

    function loadImageDataUrl(src) {
      return new Promise(function (resolve, reject) {
        var image = new Image();
        image.crossOrigin = "anonymous";
        image.onload = function () {
          try {
            var canvas = document.createElement("canvas");
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            var context = canvas.getContext("2d");
            context.drawImage(image, 0, 0);
            resolve(canvas.toDataURL("image/png"));
          } catch (error) {
            reject(error);
          }
        };
        image.onerror = reject;
        image.src = src;
      });
    }

    function renderDoseCards(concentration, activeDose) {
      doseCards.innerHTML = doseOptions.map(function (dose) {
        var volumeMl = dose / concentration;
        var units = volumeToUnits(volumeMl);
        var needle = recommendedNeedleForVolume(volumeMl);
        var schedule = frequencyInfo();
        var weeks = schedule.dosesPerWeek ? (Math.max(Number(peptideAmount.value) || 0, 0.01) / dose) / schedule.dosesPerWeek : null;
        return '' +
          '<div class="dose-card' + (dose === activeDose ? ' is-active' : '') + '">' +
            '<strong>' + formatDose(dose) + ' mg</strong>' +
            '<div class="value">' + units.toFixed(1).replace(/\.0$/, "") + '</div>' +
            '<span>units</span>' +
            '<p>' + volumeMl.toFixed(3) + ' mL · ' + needle.label + ' recommended<br>' + (weeks === null ? 'Variable schedule' : weeks.toFixed(1) + ' weeks at current frequency') + '</p>' +
          '</div>';
      }).join("");
    }

    function renderUnitMeterScale() {
      if (!unitMeter || !unitMeterScale) return;

      var maxUnits = state.selectedNeedle.unitsPerMl;
      var labelStep = 5;
      var labels = [];

      for (var value = 0; value <= maxUnits; value += labelStep) {
        labels.push(value);
      }

      if (labels[labels.length - 1] !== maxUnits) {
        labels.push(maxUnits);
      }

      unitMeter.style.setProperty("--meter-divisions", String(maxUnits));
      unitMeter.style.setProperty("--meter-major-step", String(labelStep));
      unitMeterScale.style.gridTemplateColumns = "repeat(" + labels.length + ", minmax(0, 1fr))";
      unitMeterScale.innerHTML = labels.map(function (value) {
        return '<span>' + value + '</span>';
      }).join("");
    }

    function setNeedleFill(units) {
      if (!needleFill) return;
      var fillPercent = Math.max(0, Math.min(100, (units / state.selectedNeedle.unitsPerMl) * 100));
      needleFill.style.width = Math.max(fillPercent, units > 0 ? 10 : 0) + "%";
      renderUnitMeterScale();
    }

    function setModeVisibility() {
      modeTabs.forEach(function (button) {
        button.classList.toggle("is-active", button.getAttribute("data-mode") === state.mode);
      });

      dilutionTabs.forEach(function (button) {
        button.classList.toggle("is-active", button.getAttribute("data-dilution-mode") === state.dilutionMode);
      });

      modeFields.forEach(function (field) {
        var show = field.getAttribute("data-show-mode");
        var hide = field.getAttribute("data-hide-mode");
        var visible = true;
        if (show) visible = show === state.mode;
        if (hide && hide === state.mode) visible = false;
        field.classList.toggle("is-hidden", !visible);
      });

      dilutionSubmodeTabs.classList.toggle("is-hidden", state.mode !== "dilution");
      dilutionCompareCard.classList.remove("is-hidden");
    }

    function renderKnownPeptideInfo(peptide) {
      infoName.textContent = peptide.name;
      infoDescription.textContent = peptide.description;
      infoHalfLife.textContent = peptide.halfLife;
      infoRange.textContent = peptide.range;
      infoLink.href = supportedProfileRoutes[peptide.slug] || ("articles.html#" + peptide.slug);
      renderTimeline(peptide);
      renderStacks(peptide);
    }

    function renderManualInfo(customLabel) {
      infoName.textContent = customLabel || "Custom Protocol";
      infoDescription.textContent = "Manual mode lets you calculate a custom vial setup when the peptide is not listed. Enter the amount, BAC water, desired dose, and dose unit to get a clean draw estimate.";
      infoHalfLife.textContent = "Not available in manual mode";
      infoRange.textContent = "Custom entry only";
      infoLink.href = "what-is-a-protocol.html";
      infoLink.textContent = "Open Protocol Guide →";
      timeline.innerHTML = [
        '<div class="timeline-step"><strong>Week 1</strong><span>Define</span></div>',
        '<div class="timeline-step"><strong>Week 2</strong><span>Record</span></div>',
        '<div class="timeline-step"><strong>Week 3</strong><span>Adjust</span></div>',
        '<div class="timeline-step"><strong>Week 4</strong><span>Review</span></div>'
      ].join("");
      stackPills.innerHTML = '<span>Custom Entry</span><span>Journal Notes</span><span>Supply Check</span><span>Storage Log</span>';
      stackNote.textContent = "Database-backed half-life, range, and stack guidance are unavailable in manual mode, so use your own protocol notes alongside the calculator output.";
    }

    function buildDilutionOptions(peptideMg, targetDoseMg) {
      return compareBacOptions
        .map(function (bacMl) {
          var concentration = calculateConcentration(peptideMg, bacMl);
          var result = computeDoseFromConcentration(targetDoseMg, concentration);
          return {
            bacMl: bacMl,
            concentration: concentration,
            units: result.units,
            volumeMl: result.volumeMl,
            cleanScore: Math.abs(result.units - Math.round(result.units))
          };
        })
        .filter(function (option) {
          return option.units > 0 && option.units <= state.selectedNeedle.unitsPerMl;
        })
        .sort(function (a, b) {
          return a.cleanScore - b.cleanScore || a.units - b.units;
        });
    }

    function renderComparisonTable(title, peptideMg, targetDoseMg, currentBacMl) {
      var options = buildDilutionOptions(peptideMg, targetDoseMg);
      var best = options[0] || null;

      dilutionCompareTitle.textContent = title;
      if (!best) {
        dilutionCompareOutput.innerHTML = "<p>No clean BAC comparison is available for this setup on the selected syringe scale.</p>";
        return null;
      }

      dilutionCompareOutput.innerHTML = options.slice(0, 4).map(function (option, index) {
        var isCurrent = typeof currentBacMl === "number" && Math.abs(option.bacMl - currentBacMl) < 0.01;
        return '' +
          '<div class="dilution-option' + (index === 0 ? ' is-best' : '') + (isCurrent ? ' is-current' : '') + '">' +
            '<div><strong>BAC Water</strong><span>' + option.bacMl.toFixed(1) + ' mL</span></div>' +
            '<div><strong>Concentration</strong><span>' + option.concentration.toFixed(2) + ' mg/mL</span></div>' +
            '<div><strong>Target Draw</strong><span>' + cleanUnits(option.units) + ' units</span></div>' +
            '<div><strong>Volume</strong><span>' + option.volumeMl.toFixed(3) + ' mL</span></div>' +
          '</div>';
      }).join("");

      return best;
    }

    function renderSolveResultCard(concentration, bacMl, activeUnits, activeVolumeMl) {
      dilutionCompareTitle.textContent = "Required BAC Water";
      dilutionCompareOutput.innerHTML = '' +
        '<div class="dilution-option is-best is-current">' +
          '<div><strong>Required BAC</strong><span>' + bacMl.toFixed(2) + ' mL</span></div>' +
          '<div><strong>Concentration</strong><span>' + concentration.toFixed(2) + ' mg/mL</span></div>' +
          '<div><strong>Target Draw</strong><span>' + cleanUnits(activeUnits) + ' units</span></div>' +
          '<div><strong>Volume</strong><span>' + activeVolumeMl.toFixed(3) + ' mL</span></div>' +
        '</div>';
    }

    function resetCommonOutputs() {
      if (message) message.textContent = "";
      if (calcStatus) calcStatus.textContent = "";
    }

    function updateCalculator() {
      resetCommonOutputs();

      var peptide = getPeptide(peptideSelect.value);
      var peptideLabel = state.mode === "manual" ? ((customPeptideName.value || "").trim() || "Custom Protocol") : peptide.name;
      var schedule = frequencyInfo();
      var targetMg = Math.max(Number(targetDoseSelect.value) || 0.25, 0.01);
      var peptideMg = Math.max(Number(peptideAmount.value) || peptide.sizes[0] || 0.1, 0.01);
      var bacMl = Math.max(Number(bacWater.value) || 0.1, 0.1);
      var reverseUnitsValue = Math.max(Number(reverseUnits.value) || 0, 0);
      var desiredUnitsValue = Math.max(Number(dilutionDesiredUnits.value) || 0, 0);
      var manualDoseMg = Math.max(toMg(Number(manualDoseValue.value) || 0, doseUnit.value), 0);
      var summary = null;
      var concentration;
      var activeDoseMg;
      var activeUnits;
      var activeVolumeMl;
      var durationText = "";

      renderSizes(peptide, state.selectedPresetSize || peptideMg);
      setModeVisibility();

      vialLabel.textContent = peptideLabel;
      vialModeNote.textContent = state.mode === "manual"
        ? "Manual mode uses your custom values instead of database-backed vial strengths."
        : "Available vial strengths for this peptide.";

      if (state.mode === "manual") {
        renderManualInfo(peptideLabel);
      } else {
        infoLink.textContent = "Read Full Article →";
        renderKnownPeptideInfo(peptide);
      }

      if (state.mode === "manual" && !(customPeptideName.value || "").trim()) {
        calcStatus.textContent = "Add a custom peptide name so the exported protocol is easy to recognize later.";
      }
      if (peptideMg <= 0) {
        calcStatus.textContent = "Enter a peptide amount above 0 mg to calculate a usable concentration.";
        return;
      }

      if (state.mode === "standard") {
        concentration = calculateConcentration(peptideMg, bacMl);
        activeDoseMg = targetMg;
        activeVolumeMl = activeDoseMg / concentration;
        activeUnits = volumeToUnits(activeVolumeMl);
        var standardNeedle = recommendedNeedleForVolume(activeVolumeMl);
        durationText = describeDuration(peptideMg / activeDoseMg, schedule);
        suggestion.textContent = smartSuggestion(peptideMg, activeDoseMg, bacMl) + " Clinical trials started at 2 mg and increased every 4 weeks. Most people find their optimal dose between 6-8 mg.";
        doseGridLabel.textContent = "Common Doses";
        renderComparisonTable("BAC Comparison For " + formatDose(activeDoseMg) + " mg", peptideMg, activeDoseMg, bacMl);
        summary = {
          modeLabel: "Standard Mode",
          peptideLabel: peptide.name,
          needleLabel: standardNeedle.label + " " + standardNeedle.volume,
          peptideMg: peptideMg,
          bacMl: bacMl,
          concentration: concentration,
          activeDoseMg: activeDoseMg,
          activeUnits: activeUnits,
          activeVolumeMl: activeVolumeMl,
          durationText: durationText,
          scheduleItems: schedule.schedule,
          detailLines: [
            "Target Dose: " + formatDose(activeDoseMg) + " mg",
            "Target Draw: " + cleanUnits(activeUnits) + " units (" + activeVolumeMl.toFixed(3) + " mL)",
            "Recommended Needle: " + standardNeedle.label + " " + standardNeedle.volume
          ],
          metaLines: [
            "Half Life: " + peptide.halfLife,
            "Documented Range: " + peptide.range,
            "Stacks: " + peptide.stacks.join(", ")
          ]
        };
      } else if (state.mode === "reverse") {
        if (bacMl <= 0) {
          calcStatus.textContent = "Enter a BAC water amount above 0 mL before reverse-calculating from syringe units.";
          return;
        }
        concentration = calculateConcentration(peptideMg, bacMl);
        activeUnits = reverseUnitsValue;
        if (activeUnits <= 0) {
          calcStatus.textContent = "Enter syringe units to see how much peptide that draw delivers.";
          return;
        }
        if (activeUnits > state.selectedNeedle.unitsPerMl) {
          calcStatus.textContent = "That draw exceeds the selected syringe capacity. Choose a larger syringe or reduce the units.";
        }
        var reverseResult = computeDoseFromUnits(activeUnits, concentration);
        activeDoseMg = reverseResult.doseMg;
        activeVolumeMl = reverseResult.volumeMl;
        var reverseNeedle = recommendedNeedleForVolume(activeVolumeMl);
        durationText = describeDuration(peptideMg / Math.max(activeDoseMg, 0.0001), schedule);
        suggestion.textContent = cleanUnits(activeUnits) + " units on the " + state.selectedNeedle.label + " delivers " + activeDoseMg.toFixed(3).replace(/0+$/, "").replace(/\.$/, "") + " mg (" + Math.round(reverseResult.doseMcg) + " mcg). Clinical trials started at 2 mg and increased every 4 weeks. Most people find their optimal dose between 6-8 mg.";
        doseGridLabel.textContent = "Common Doses At This Concentration";
        renderComparisonTable("BAC Comparison For " + formatDose(Number(activeDoseMg.toFixed(3))) + " mg", peptideMg, activeDoseMg, bacMl);
        summary = {
          modeLabel: "Reverse Mode",
          peptideLabel: peptide.name,
          needleLabel: reverseNeedle.label + " " + reverseNeedle.volume,
          peptideMg: peptideMg,
          bacMl: bacMl,
          concentration: concentration,
          activeDoseMg: activeDoseMg,
          activeUnits: activeUnits,
          activeVolumeMl: activeVolumeMl,
          durationText: durationText,
          scheduleItems: schedule.schedule,
          detailLines: [
            "Reverse Input: " + cleanUnits(activeUnits) + " units",
            "Delivered Dose: " + activeDoseMg.toFixed(3).replace(/0+$/, "").replace(/\.$/, "") + " mg (" + Math.round(reverseResult.doseMcg) + " mcg)",
            "Draw Volume: " + activeVolumeMl.toFixed(3) + " mL",
            "Recommended Needle: " + reverseNeedle.label + " " + reverseNeedle.volume
          ],
          metaLines: [
            "Half Life: " + peptide.halfLife,
            "Documented Range: " + peptide.range,
            "Stacks: " + peptide.stacks.join(", ")
          ]
        };
      } else if (state.mode === "dilution") {
        activeDoseMg = targetMg;
        if (state.dilutionMode === "compare") {
          var best = renderComparisonTable("Dilution Comparison", peptideMg, activeDoseMg);
          if (!best) {
            calcStatus.textContent = "Try a different peptide amount or dose target to generate a cleaner dilution comparison.";
            return;
          }
          concentration = best.concentration;
          bacMl = best.bacMl;
          activeUnits = best.units;
          activeVolumeMl = best.volumeMl;
          var compareNeedle = recommendedNeedleForVolume(activeVolumeMl);
          durationText = describeDuration(peptideMg / activeDoseMg, schedule);
          suggestion.textContent = "The cleanest comparison result uses " + bacMl.toFixed(1) + " mL BAC water and lands near " + cleanUnits(activeUnits) + " units. Clinical trials started at 2 mg and increased every 4 weeks. Most people find their optimal dose between 6-8 mg.";
          doseGridLabel.textContent = "Common Doses Using Best BAC Match";
          summary = {
            modeLabel: "Dilution Mode · Compare BAC Volumes",
            peptideLabel: peptide.name,
            needleLabel: compareNeedle.label + " " + compareNeedle.volume,
            peptideMg: peptideMg,
            bacMl: bacMl,
            concentration: concentration,
            activeDoseMg: activeDoseMg,
            activeUnits: activeUnits,
            activeVolumeMl: activeVolumeMl,
            durationText: durationText,
            scheduleItems: schedule.schedule,
            detailLines: [
              "Target Dose: " + formatDose(activeDoseMg) + " mg",
              "Best BAC Match: " + bacMl.toFixed(2) + " mL",
              "Target Draw: " + cleanUnits(activeUnits) + " units (" + activeVolumeMl.toFixed(3) + " mL)",
              "Recommended Needle: " + compareNeedle.label + " " + compareNeedle.volume
            ],
            metaLines: [
              "Half Life: " + peptide.halfLife,
              "Documented Range: " + peptide.range,
              "Stacks: " + peptide.stacks.join(", ")
            ]
          };
        } else {
          if (desiredUnitsValue <= 0) {
            calcStatus.textContent = "Enter desired syringe units to solve the BAC water amount for this dose target.";
            return;
          }
          if (desiredUnitsValue > state.selectedNeedle.unitsPerMl) {
            calcStatus.textContent = "That desired draw exceeds the selected syringe capacity. Lower the units or choose a larger syringe.";
          }
          bacMl = solveBacForUnits(peptideMg, activeDoseMg, desiredUnitsValue);
          concentration = calculateConcentration(peptideMg, bacMl);
          activeUnits = desiredUnitsValue;
          activeVolumeMl = unitsToVolume(activeUnits);
          var solveNeedle = recommendedNeedleForVolume(activeVolumeMl);
          durationText = describeDuration(peptideMg / activeDoseMg, schedule);
          renderSolveResultCard(concentration, bacMl, activeUnits, activeVolumeMl);
          if (bacMl < 0.2 || bacMl > 10) {
            calcStatus.textContent = "The solved BAC amount is mathematically valid, but it may be impractical in a real vial. Double-check the target dose and unit goal.";
          }
          suggestion.textContent = "To make " + formatDose(activeDoseMg) + " mg equal " + cleanUnits(activeUnits) + " units, reconstitute with " + bacMl.toFixed(2) + " mL BAC water. Clinical trials started at 2 mg and increased every 4 weeks. Most people find their optimal dose between 6-8 mg.";
          doseGridLabel.textContent = "Common Doses Using Solved BAC";
          summary = {
            modeLabel: "Dilution Mode · Solve Required BAC",
            peptideLabel: peptide.name,
            needleLabel: solveNeedle.label + " " + solveNeedle.volume,
            peptideMg: peptideMg,
            bacMl: bacMl,
            concentration: concentration,
            activeDoseMg: activeDoseMg,
            activeUnits: activeUnits,
            activeVolumeMl: activeVolumeMl,
            durationText: durationText,
            scheduleItems: schedule.schedule,
            detailLines: [
              "Target Dose: " + formatDose(activeDoseMg) + " mg",
              "Desired Draw: " + cleanUnits(activeUnits) + " units",
              "Required BAC Water: " + bacMl.toFixed(2) + " mL",
              "Recommended Needle: " + solveNeedle.label + " " + solveNeedle.volume
            ],
            metaLines: [
              "Half Life: " + peptide.halfLife,
              "Documented Range: " + peptide.range,
              "Stacks: " + peptide.stacks.join(", ")
            ]
          };
        }
      } else {
        if (bacMl <= 0) {
          calcStatus.textContent = "Enter a BAC water amount above 0 mL before running a manual calculation.";
          return;
        }
        if (manualDoseMg <= 0) {
          calcStatus.textContent = "Enter a desired dose above 0 to calculate the manual draw amount.";
          return;
        }
        concentration = calculateConcentration(peptideMg, bacMl);
        activeDoseMg = manualDoseMg;
        activeVolumeMl = activeDoseMg / concentration;
        activeUnits = volumeToUnits(activeVolumeMl);
        var manualNeedle = recommendedNeedleForVolume(activeVolumeMl);
        durationText = describeDuration(peptideMg / activeDoseMg, schedule);
        suggestion.textContent = doseUnit.value === "mcg"
          ? Number(manualDoseValue.value || 0) + " mcg requires " + cleanUnits(activeUnits) + " units on the " + state.selectedNeedle.label + ". Clinical trials started at 2 mg and increased every 4 weeks. Most people find their optimal dose between 6-8 mg."
          : formatDose(activeDoseMg) + " mg requires " + cleanUnits(activeUnits) + " units on the " + state.selectedNeedle.label + ". Clinical trials started at 2 mg and increased every 4 weeks. Most people find their optimal dose between 6-8 mg.";
        doseGridLabel.textContent = "Common Doses At This Concentration";
        renderComparisonTable("BAC Comparison For Manual Dose", peptideMg, activeDoseMg, bacMl);
        summary = {
          modeLabel: "Manual Mode",
          peptideLabel: peptideLabel,
          needleLabel: manualNeedle.label + " " + manualNeedle.volume,
          peptideMg: peptideMg,
          bacMl: bacMl,
          concentration: concentration,
          activeDoseMg: activeDoseMg,
          activeUnits: activeUnits,
          activeVolumeMl: activeVolumeMl,
          durationText: durationText,
          scheduleItems: schedule.schedule,
          detailLines: [
            "Manual Dose: " + Number(manualDoseValue.value || 0) + " " + doseUnit.value,
            "Target Draw: " + cleanUnits(activeUnits) + " units (" + activeVolumeMl.toFixed(3) + " mL)",
            "Recommended Needle: " + manualNeedle.label + " " + manualNeedle.volume
          ],
          metaLines: [
            "Manual mode note: Database-backed half-life, range, and stack data are not available for custom entries."
          ]
        };
      }

      concentrationOutput.textContent = concentration.toFixed(2) + " mg/mL";
      var activeNeedle = recommendedNeedleForVolume(activeVolumeMl);
      if (state.mode === "reverse") {
        doseNarrative.textContent = cleanUnits(activeUnits) + " units delivers " + activeDoseMg.toFixed(3).replace(/0+$/, "").replace(/\.$/, "") + " mg on a " + activeNeedle.label + " syringe.";
      } else {
        doseNarrative.textContent = formatDose(activeDoseMg) + " mg requires " + cleanUnits(activeUnits) + " units on a " + activeNeedle.label + " syringe.";
      }
      durationOutput.textContent = durationText;
      scheduleOutput.innerHTML = buildScheduleList(schedule.schedule);
      renderDoseCards(concentration, doseOptions.reduce(function (closest, value) {
        return Math.abs(value - activeDoseMg) < Math.abs(closest - activeDoseMg) ? value : closest;
      }, doseOptions[0]));
      setNeedleFill(activeUnits);

      supplyNeedle.textContent = activeNeedle.label + " · " + activeNeedle.volume + " is the most appropriate draw size for this volume.";
      supplyWater.textContent = bacMl.toFixed(1) + " mL exact volume for the current reconstitution setup.";
      supplyStorage.textContent = formatDose(peptideMg) + " mg vial should be kept chilled after mixing and handled consistently.";
      state.latestSummary = summary;
      protocolOutput.textContent = buildProtocolText(summary);
    }

    modeTabs.forEach(function (button) {
      button.addEventListener("click", function () {
        state.mode = button.getAttribute("data-mode");
        updateCalculator();
      });
    });

    dilutionTabs.forEach(function (button) {
      button.addEventListener("click", function () {
        state.dilutionMode = button.getAttribute("data-dilution-mode");
        updateCalculator();
      });
    });

    peptideSelect.addEventListener("change", function () {
      state.selectedPresetSize = Number(peptideAmount.value) || null;
      updateCalculator();
    });
    vialSize.addEventListener("change", function () {
      state.selectedPresetSize = Number(vialSize.value) || null;
      peptideAmount.value = vialSize.value;
      updateCalculator();
    });
    peptideAmount.addEventListener("input", function () {
      state.selectedPresetSize = Number(peptideAmount.value) || null;
      updateCalculator();
    });
    bacWater.addEventListener("input", updateCalculator);
    frequency.addEventListener("change", updateCalculator);
    targetDoseSelect.addEventListener("change", updateCalculator);
    reverseUnits.addEventListener("input", updateCalculator);
    dilutionDesiredUnits.addEventListener("input", updateCalculator);
    customPeptideName.addEventListener("input", updateCalculator);
    manualDoseValue.addEventListener("input", updateCalculator);
    doseUnit.addEventListener("change", updateCalculator);

    if (copyButton) {
      copyButton.addEventListener("click", function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(protocolOutput.textContent);
          if (message) message.textContent = "Protocol copied to your clipboard.";
        }
      });
    }

    if (emailButton) {
      emailButton.addEventListener("click", function () {
        var email = (emailInput.value || "").trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          if (message) message.textContent = "Enter a valid email address before opening your mail app.";
          return;
        }
        window.location.href = "mailto:" + encodeURIComponent(email) + "?subject=" + encodeURIComponent("Peptide Protocol Summary") + "&body=" + encodeURIComponent(protocolOutput.textContent);
        if (message) message.textContent = "Your mail app is ready with the protocol summary.";
      });
    }

    if (pdfButton) {
      pdfButton.addEventListener("click", async function () {
        if (!window.jspdf || !window.jspdf.jsPDF) {
          if (message) message.textContent = "PDF export is not available right now because the library did not finish loading.";
          return;
        }
        if (!state.latestSummary) {
          if (message) message.textContent = "Run a calculation first so there is a protocol summary to export.";
          return;
        }

        var summary = state.latestSummary;
        var doc = new window.jspdf.jsPDF({ unit: "pt", format: "letter" });
        var pageWidth = doc.internal.pageSize.getWidth();
        var pageHeight = doc.internal.pageSize.getHeight();
        var margin = 40;
        var contentWidth = pageWidth - (margin * 2);
        var tableRows = protocolRows(summary).map(function (row) {
          return {
            label: row[0],
            lines: doc.splitTextToSize(row[1], contentWidth - 188)
          };
        });
        var referenceRows = doseReferenceRows(summary.concentration);
        var y = 34;

        try {
          var logoData = await loadImageDataUrl("assets/logo-coral.png");
          doc.addImage(logoData, "PNG", margin, y, 150, 48);
        } catch (error) {
          doc.setTextColor(217, 78, 42);
          doc.setFont("helvetica", "bold");
          doc.setFontSize(22);
          doc.text("PEPTIDE PROTOCOL", margin, y + 28);
        }

        doc.setTextColor(44, 36, 22);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(17);
        doc.text("Protocol Summary", margin, y + 78);

        y += 92;
        var tableHeight = 24;
        tableRows.forEach(function (row) {
          tableHeight += Math.max(22, row.lines.length * 12 + 10);
        });
        doc.setDrawColor(230, 220, 199);
        doc.setFillColor(255, 251, 244);
        doc.roundedRect(margin, y, contentWidth, tableHeight, 10, 10, "FD");
        doc.setFillColor(217, 78, 42);
        doc.roundedRect(margin, y, contentWidth, 24, 10, 10, "F");
        doc.setTextColor(255, 248, 239);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text("FIELD", margin + 12, y + 16);
        doc.text("VALUE", margin + 178, y + 16);

        doc.setTextColor(44, 36, 22);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);

        var tableCursor = y + 24;
        tableRows.forEach(function (row) {
          var rowHeight = Math.max(22, row.lines.length * 12 + 10);
          var rowY = tableCursor;
          doc.setDrawColor(235, 227, 210);
          doc.line(margin, rowY, margin + contentWidth, rowY);
          doc.setFont("helvetica", "bold");
          doc.text(row.label, margin + 12, rowY + 15);
          doc.setFont("helvetica", "normal");
          doc.text(row.lines, margin + 178, rowY + 15);
          tableCursor += rowHeight;
        });

        y += tableHeight + 16;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text("Dose Reference Table", margin, y);
        y += 12;

        doc.setFillColor(255, 251, 244);
        doc.roundedRect(margin, y, contentWidth, 24 + (referenceRows.length * 22), 10, 10, "FD");
        doc.setFillColor(217, 78, 42);
        doc.roundedRect(margin, y, contentWidth, 24, 10, 10, "F");
        doc.setTextColor(255, 248, 239);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text("DOSE", margin + 12, y + 16);
        doc.text("UNITS", margin + 160, y + 16);
        doc.text("VOLUME", margin + 310, y + 16);

        doc.setTextColor(44, 36, 22);
        doc.setFontSize(10);
        referenceRows.forEach(function (row, index) {
          var rowY = y + 24 + (index * 22);
          doc.line(margin, rowY, margin + contentWidth, rowY);
          if (row.dose === formatDose(summary.activeDoseMg) + " mg") {
            doc.setFillColor(255, 241, 232);
            doc.rect(margin + 1, rowY + 1, contentWidth - 2, 21, "F");
          }
          doc.text(row.dose, margin + 12, rowY + 15);
          doc.text(row.units, margin + 160, rowY + 15);
          doc.text(row.volume, margin + 310, rowY + 15);
        });

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(95, 84, 65);
        doc.text("For educational and research documentation purposes only. Not medical advice.", margin, pageHeight - 28);
        doc.text("Copyright Peptide Protocol 2026", pageWidth - margin, pageHeight - 28, { align: "right" });
        doc.save("peptide-protocol-summary.pdf");
        if (message) message.textContent = "PDF downloaded.";
      });
    }

    populatePeptides();
    renderNeedles();
    updateCalculator();
  }

  initNav();
  initHeroSlider();
  initFAQ();
  initSignupForms();
  initCalculator();
})();
