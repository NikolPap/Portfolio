let currentLang = localStorage.getItem("lang") || "en";

/**
 * Initializes all global event listeners for the application.
 */
function initializeEventListeners() {
  initNavLinks();
  initHamburger();
  initLangSwitchListeners();
  initProjectRows();
  document.addEventListener("click", handleOutsideMenuClick);

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const privacyCheckbox = document.getElementById("privacyCheckbox");

  [nameInput, emailInput, messageInput, privacyCheckbox].forEach((el) => {
    if (el) el.addEventListener("input", checkFormValidity);
  });
}

/**
 * Sets up click listeners for navigation links.
 */
function initNavLinks() {
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      navLinks.forEach((l) => l.classList.remove("active"));
      event.currentTarget.classList.add("active");
    });
  });
}

/**
 * Sets up the hamburger menu interaction.
 */
function initHamburger() {
  const hamburger = document.getElementById("hamburger-btn");
  if (hamburger) {
    hamburger.onclick = () => {
      toggleMobileMenuState();
    };
  }
}

/**
 * Toggles the visual state of the mobile menu.
 */
function toggleMobileMenuState() {
  const hamburger = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (hamburger && mobileMenu) {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    const isOpen = mobileMenu.classList.contains("open");
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }
}

/**
 * Sets up listeners for language switch buttons.
 */
function initLangSwitchListeners() {
  document.querySelectorAll(".lang-switch").forEach((switchEl) => {
    switchEl.onclick = () => handleLanguageSwitch();
  });
}

/**
 * Sets up click listeners for project rows.
 */
function initProjectRows() {
  const projectRows = document.querySelectorAll(".project-row");
  projectRows.forEach((row, index) => {
    row.addEventListener("click", () => openProjectDialog(index));
  });
}

/**
 * Switches the application language and updates the UI.
 * @param {string} lang - The target language code ('en' or 'de').
 */
function switchLanguage(lang) {
  if (currentLang === lang) return;
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.body.style.overflow = "auto";
  if (document.getElementById("legal-mainTitle")) {
    renderLegalView();
  } else if (document.getElementById("privacy-mainTitle")) {
    renderPrivacyView();
  } else {
    renderAllContent();
  }
  const footer = document.getElementById("footer");
  if (footer) footer.innerHTML = getFooterTemplate();

  updateLanguageToggles();
  initializeEventListeners();
}

/**
 * Renders the content for the legal notice page.
 */
function renderLegalView() {
  const t = translations[currentLang].legal;
  updateLegalTextElements(t);

  const imprintList = document.getElementById("legal-imprintList");
  if (imprintList) imprintList.innerHTML = t.imprintList;

  const dateEl = document.getElementById("legal-date");
  if (dateEl) dateEl.innerHTML = t.date;

  updateLegalNavLinks();
}

/**
 * Updates text content for specific legal elements.
 * @param {Object} t - The translation object for legal texts.
 */
function updateLegalTextElements(t) {
  const keys = [
    "mainTitle",
    "imprintTitle",
    "boardTitle",
    "boardText",
    "acceptanceTitle",
    "acceptanceText",
    "scopeTitle",
    "scopeText",
    "proprietaryTitle",
    "proprietaryText",
    "useTitle",
    "useText",
    "disclaimerTitle",
    "disclaimerText",
    "indemnityTitle",
    "indemnityText",
  ];
  keys.forEach((key) => {
    const domEl = document.getElementById(`legal-${key}`);
    if (domEl) domEl.innerHTML = t[key];
  });
}

/**
 * Updates the navigation link texts on the legal page.
 */
function updateLegalNavLinks() {
  const navT = translations[currentLang].nav;
  const links = {
    about: document.querySelector('a[href="index.html#about"]'),
    skills: document.querySelector('a[href="index.html#skills"]'),
    projects: document.querySelector('a[href="index.html#projects"]'),
  };

  if (links.about) links.about.innerText = navT.about;
  if (links.skills) links.skills.innerText = navT.skills;
  if (links.projects) links.projects.innerText = navT.projects;
}

/**
 * Toggles the language between English and German.
 */
function handleLanguageSwitch() {
  const newLang = currentLang === "en" ? "de" : "en";
  switchLanguage(newLang);
}

/**
 * Updates the visual state of language toggle buttons.
 */
function updateLanguageToggles() {
  const desktopToggle = document.getElementById("lang-toggle-desktop");
  const mobileToggle = document.getElementById("lang-toggle-mobile");

  document
    .querySelectorAll(".lang-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(`.lang-btn[data-lang="${currentLang}"]`)
    .forEach((btn) => btn.classList.add("active"));

  const action = currentLang === "de" ? "add" : "remove";
  if (desktopToggle) desktopToggle.classList[action]("de-active");
  if (mobileToggle) mobileToggle.classList[action]("de-active");
}

/**
 * Updates the reviews carousel display.
 * @param {string} direction - (Unused in logic but kept for signature compatibility).
 */
function updateReviewsDisplay(direction) {
  if (!document.getElementById("text-left")) return;

  const len = reviewsData.length;
  const idx = currentReviewIndex;
  const prev = (idx - 1 + len) % len;
  const next = (idx + 1) % len;

  updateReviewCard("left", reviewsData[prev]);
  updateReviewCard("center", reviewsData[idx]);
  updateReviewCard("right", reviewsData[next]);

  renderDots(len, idx);
}

/**
 * Helper to update a single review card.
 * @param {string} pos - The position (left, center, right).
 * @param {Object} data - The review data object.
 */
function updateReviewCard(pos, data) {
  const textEl = document.getElementById(`text-${pos}`);
  const authorEl = document.getElementById(`author-${pos}`);
  if (textEl) textEl.innerHTML = data.text[currentLang];
  if (authorEl) authorEl.innerHTML = data.author;
}

/**
 * Closes mobile menu if clicked outside.
 * @param {Event} event - The DOM click event.
 */
function handleOutsideMenuClick(event) {
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburger = document.getElementById("hamburger-btn");

  if (mobileMenu && hamburger && mobileMenu.classList.contains("open")) {
    if (
      !mobileMenu.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      closeMobileMenu();
    }
  }
}

/**
 * Resets the mobile menu state.
 */
function closeMobileMenu() {
  const hamburger = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

/**
 * Adds a class to an element on the first mouse hover.
 * @param {string} elementId - ID of the element.
 * @param {string} activeClass - Class to add.
 */
function activateOnFirstHover(elementId, activeClass) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const handleHover = () => {
    if (!element.classList.contains(activeClass)) {
      element.classList.add(activeClass);
    }
    element.removeEventListener("mouseenter", handleHover);
  };
  element.addEventListener("mouseenter", handleHover);
}

/**
 * Handles the contact form submission process.
 * @param {Event} event - The form submit event.
 */
function sendContactEmail(event) {
  event.preventDefault();
  if (
    !validateName() ||
    !validateEmail() ||
    !validateMessage() ||
    !validatePrivacy()
  ) {
    return;
  }

  const sendButton = document.getElementById("sendButton");
  updateButtonLoading(sendButton, true);

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  submitFormData(formData, sendButton);
}

/**
 * Updates the button state during loading.
 * @param {HTMLElement} btn - The button element.
 * @param {boolean} isLoading - Whether loading is active.
 */
function updateButtonLoading(btn, isLoading) {
  if (isLoading) {
    btn.disabled = true;
    btn.innerHTML = "<span>Sending...</span>";
  }
}

/**
 * Performs the fetch request to send email.
 * @param {Object} data - The form data.
 * @param {HTMLElement} btn - The button element.
 */
function submitFormData(data, btn) {
  fetch("./sendMail.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject("Network error")))
    .then((json) => handleMailSuccess(json, btn))
    .catch((err) => handleMailError(err, btn))
    .finally(() => setTimeout(() => resetFormButton(btn), 3000));
}

/**
 * Handles successful email submission.
 * @param {Object} data - The response data.
 * @param {HTMLElement} btn - The button element.
 */
function handleMailSuccess(data, btn) {
  if (data.success) {
    clearFormFields();
    btn.innerHTML = "<span>Message Sent!</span>";
    btn.style.backgroundColor = "#3dcfb6";
    btn.style.color = "#1c1c1c";
  } else {
    throw new Error(data.error || "Submission failed");
  }
}

/**
 * Clears all input fields in the contact form.
 */
function clearFormFields() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  document.getElementById("privacyCheckbox").checked = false;
  document
    .querySelectorAll(".has-error")
    .forEach((el) => el.classList.remove("has-error"));
}

/**
 * Handles errors during email submission.
 * @param {Error} error - The error object.
 * @param {HTMLElement} btn - The button element.
 */
function handleMailError(error, btn) {
  console.error("Error:", error);
  btn.innerHTML = "<span>Error! Try again.</span>";
  btn.style.backgroundColor = "red";
  btn.style.color = "white";
}

/**
 * Resets the submit button to its initial state.
 * @param {HTMLElement} btn - The button element.
 */
function resetFormButton(btn) {
  btn.innerHTML = "<span>Say Hello :)</span>";
  btn.style.backgroundColor = "#1c1c1c";
  btn.style.color = "#777";
  checkFormValidity();
}

/**
 * Initializes the cursor glow effect following the mouse.
 */
function initCursorGlow() {
  const cursorGlow = document.getElementById("cursor-glow");
  if (cursorGlow) {
    document.addEventListener("mousemove", function (e) {
      cursorGlow.style.left = e.clientX + "px";
      cursorGlow.style.top = e.clientY + "px";
    });
  }
}

/**
 * Renders the content for the privacy policy page.
 */
function renderPrivacyView() {
  const t = translations[currentLang].privacy;
  
  // Update texts based on IDs
  const keys = [
    "mainTitle",
    "introTitle", "introText",
    "collectionTitle", "collectionText",
    "usageTitle", "usageText",
    "hostingTitle", "hostingText",
    "contactTitle", "contactText",
    "rightsTitle", "rightsText"
  ];

  keys.forEach((key) => {
    const domEl = document.getElementById(`privacy-${key}`);
    if (domEl && t[key]) {
      domEl.innerHTML = t[key];
    }
  });

  const dateEl = document.getElementById("privacy-date");
  if (dateEl) dateEl.innerHTML = t.date;

  updateLegalNavLinks(); 
}

