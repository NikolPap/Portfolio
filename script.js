/* =========================================
   Initialization Function
   ========================================= */
function initializeEventListeners() {
    const navLinks = document.querySelectorAll(".nav-links a");
    const langToggleDesktop = document.getElementById("lang-toggle-desktop");
    const langToggleMobile = document.getElementById("lang-toggle-mobile");
    const langBtns = document.querySelectorAll(".lang-btn");

    function handleNavLinkClick(event) {
        navLinks.forEach((link) => link.classList.remove("active"));
        event.currentTarget.classList.add("active");
    }

  function handleLanguageToggle() {
        if(langToggleDesktop) langToggleDesktop.classList.toggle("de-active");
        if(langToggleMobile) langToggleMobile.classList.toggle("de-active");
        langBtns.forEach((btn) => btn.classList.toggle("active"));

    }

    navLinks.forEach((link) => {
        link.addEventListener("click", handleNavLinkClick);
    });

    if (langToggleDesktop) langToggleDesktop.addEventListener("click", handleLanguageToggle);
    if (langToggleMobile) langToggleMobile.addEventListener("click", handleLanguageToggle);
    const hamburger = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            mobileMenu.classList.toggle("open");
            
            if (mobileMenu.classList.contains("open")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        });
    }

    // --- Modal Logic (Existing) ---
    const projectRows = document.querySelectorAll(".project-row");
    projectRows.forEach((row, index) => {
        row.addEventListener("click", () => openProjectDialog(index));
    });
}

document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburger = document.getElementById("hamburger-btn");
    if (mobileMenu.classList.contains("open") && 
        !mobileMenu.contains(event.target) && 
        !hamburger.contains(event.target)) {
        
        closeMobileMenu();
    }
});

function closeMobileMenu() {
    const hamburger = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    
    if(hamburger && mobileMenu) {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "auto";
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

function toggleSubmitButton() {
  const checkbox = document.getElementById("privacyCheckbox");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const button = document.getElementById("sendButton");
  button.disabled = !(
    checkbox.checked &&
    name.trim() !== "" &&
    email.trim() !== ""
  );
}

/* --- Validation Functions --- */

function validateName() {
  const input = document.getElementById("name");
  const errorMsg = document.getElementById("nameError");
  if (input.value.trim() === "") {
    errorMsg.innerText = "Oops! Your name is missing";
    input.classList.add("has-error");
    return false;
  }
  return true;
}

function validateEmail() {
  const input = document.getElementById("email");
  const errorMsg = document.getElementById("emailError");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (input.value.trim() === "") {
    errorMsg.innerText = "Hoppla! Your email is required";
    input.classList.add("has-error");
    return false;
  } else if (!emailPattern.test(input.value)) {
    errorMsg.innerText = "Please enter a valid email address";
    input.classList.add("has-error");
    return false;
  }
  return true;
}

function validateMessage() {
  const input = document.getElementById("message");
  const errorMsg = document.getElementById("messageError");

  if (input.value.trim() === "") {
    errorMsg.innerText = "Please enter a message";
    input.classList.add("has-error");
    return false;
  }
  return true;
}

function validatePrivacy() {
  const checkbox = document.getElementById("privacyCheckbox");
  const errorMsg = document.getElementById("privacyError");

  if (checkbox.checked) {
    errorMsg.classList.remove("visible");
    return true;
  } else {
    errorMsg.innerText = "Please accept the privacy policy.";
    errorMsg.classList.add("visible");
    return false;
  }
}

function resetError(element) {
  element.classList.remove("has-error");
}

function checkFormValidity() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const privacyCheckbox = document.getElementById("privacyCheckbox");
  const sendButton = document.getElementById("sendButton");

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const isNameValid = nameInput.value.trim() !== "";
  const isEmailValid = emailPattern.test(emailInput.value);
  const isMessageValid = messageInput.value.trim() !== "";
  const isPrivacyValid = privacyCheckbox.checked;

  sendButton.disabled = !(
    isNameValid &&
    isEmailValid &&
    isMessageValid &&
    isPrivacyValid
  );
}

function sendContactEmail(event) {
  event.preventDefault();
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();
  const isPrivacyValid = validatePrivacy();

  if (!isNameValid || !isEmailValid || !isMessageValid || !isPrivacyValid) {
    return;
  }

  const sendButton = document.getElementById("sendButton");
  sendButton.disabled = true;
  sendButton.innerHTML = "<span>Sending...</span>";

  setTimeout(() => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("privacyCheckbox").checked = false;
    document.getElementById("name").classList.remove("has-error");
    document.getElementById("email").classList.remove("has-error");
    document.getElementById("message").classList.remove("has-error");

    sendButton.innerHTML = "<span>Message Sent!</span>";
    sendButton.style.backgroundColor = "#3dcfb6";
    sendButton.style.color = "#1c1c1c";

    setTimeout(() => {
      sendButton.innerHTML = "<span>Say Hello :)</span>";
      sendButton.style.backgroundColor = "#1c1c1c";
      sendButton.style.color = "#777";
      sendButton.disabled = true;
    }, 3000);
  }, 1500);
}
