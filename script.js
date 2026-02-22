
/* =========================================
   Initialization Function
   ========================================= */
function initializeEventListeners() {

  const navLinks = document.querySelectorAll(".nav-links a");
  const langToggle = document.getElementById("lang-toggle");
  const langBtns = document.querySelectorAll(".lang-btn");


  function handleNavLinkClick(event) {
    navLinks.forEach((link) => link.classList.remove("active"));
    event.currentTarget.classList.add("active");
  }

  function handleLanguageToggle() {
    langToggle.classList.toggle("de-active");
    langBtns.forEach((btn) => btn.classList.toggle("active"));
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavLinkClick);
  });

  if (langToggle) {
    langToggle.addEventListener("click", handleLanguageToggle);
  
  }
  const projectRows = document.querySelectorAll(".project-row");
    projectRows.forEach((row, index) => {
        row.addEventListener("click", () => openProjectDialog(index));
    });
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

function toggleSubmitButton() {
    const checkbox = document.getElementById('privacyCheckbox');
    const button = document.getElementById('sendButton');
    button.disabled = !checkbox.checked;
}

