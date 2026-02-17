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