/* =========================================
   Global Selectors
   ========================================= */
const navLinks = document.querySelectorAll(".nav-links a");
const langToggle = document.getElementById("lang-toggle");
const langBtns = document.querySelectorAll(".lang-btn");

/* =========================================
   Functions
   ========================================= */

/**
 * Handles the click event on navigation links.
 * Removes the 'active' class from all links and adds it to the clicked link.
 * 
 * @param {Event} event - The click event object triggered by the user.
 */
function handleNavLinkClick(event) {
  navLinks.forEach((link) => link.classList.remove("active"));
  event.currentTarget.classList.add("active");
}

/**
 * Toggles the language switch state between English and German.
 * Updates the visual toggle position (via 'de-active' class) 
 * and switches the highlighted text style on the buttons.
 */
function handleLanguageToggle() {
  langToggle.classList.toggle("de-active");
  langBtns.forEach((btn) => btn.classList.toggle("active"));
}

/* =========================================
   Event Listeners
   ========================================= */
navLinks.forEach((link) => {
  link.addEventListener("click", handleNavLinkClick);
});
if (langToggle) {
  langToggle.addEventListener("click", handleLanguageToggle);
}