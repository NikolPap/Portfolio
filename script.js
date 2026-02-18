/* =========================================
   Initialization Function
   ========================================= */
function initializeEventListeners() {
  
  // 1. Select elements
  // We select them here because they now exist in the DOM
  const navLinks = document.querySelectorAll(".nav-links a");
  const langToggle = document.getElementById("lang-toggle");
  const langBtns = document.querySelectorAll(".lang-btn");

  // 2. Define helper functions
  function handleNavLinkClick(event) {
    navLinks.forEach((link) => link.classList.remove("active"));
    event.currentTarget.classList.add("active");
  }

  function handleLanguageToggle() {
    langToggle.classList.toggle("de-active");
    langBtns.forEach((btn) => btn.classList.toggle("active"));
  }

  // 3. Add Event Listeners
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavLinkClick);
  });

  if (langToggle) {
    langToggle.addEventListener("click", handleLanguageToggle);
  }
}

/**
 * Activates a permanent grid background effect on first hover.
 * The effect is applied only once and will not trigger again.
 *
 * @param {string} elementId - The ID of the wrapper element.
 * @param {string} activeClass - The CSS class to apply permanently.
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
