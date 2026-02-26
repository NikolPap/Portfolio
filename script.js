let currentLang = localStorage.getItem('lang') || 'en';

function initializeEventListeners() {
    const navLinks = document.querySelectorAll(".nav-links a");
    const hamburger = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    function handleNavLinkClick(event) {
        navLinks.forEach((link) => link.classList.remove("active"));
        event.currentTarget.classList.add("active");
    }
    navLinks.forEach((link) => {
        link.addEventListener("click", handleNavLinkClick);
    });
    document.querySelectorAll('.lang-switch').forEach(switchEl => {
        switchEl.onclick = () => {
             const newLang = currentLang === 'en' ? 'de' : 'en';
             switchLanguage(newLang);
        };
    });
    if (hamburger && mobileMenu) {
        hamburger.onclick = () => {
            hamburger.classList.toggle("active");
            mobileMenu.classList.toggle("open");
            document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "auto";
        };
    }
    const projectRows = document.querySelectorAll(".project-row");
    projectRows.forEach((row, index) => {
        row.addEventListener("click", () => openProjectDialog(index));
    });
}


function switchLanguage(lang) {
    if (currentLang === lang) return;
    
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    document.body.style.overflow = 'auto';
    
    if (document.body.classList.contains('legal-notice-body')) {
        renderLegalView();
        const footer = document.getElementById("footer");
        if(footer) footer.innerHTML = getFooterTemplate();
    } else {
        renderAllContent();
    }
    
    updateLanguageToggles();
    initializeEventListeners();
}

function renderLegalView() {
    const t = translations[currentLang].legal;
    const elements = [
        { id: 'legal-mainTitle', key: 'mainTitle' },
        { id: 'legal-imprintTitle', key: 'imprintTitle' },
        { id: 'legal-boardTitle', key: 'boardTitle' },
        { id: 'legal-boardText', key: 'boardText' },
        { id: 'legal-acceptanceTitle', key: 'acceptanceTitle' },
        { id: 'legal-acceptanceText', key: 'acceptanceText' },
        { id: 'legal-scopeTitle', key: 'scopeTitle' },
        { id: 'legal-scopeText', key: 'scopeText' },
        { id: 'legal-proprietaryTitle', key: 'proprietaryTitle' },
        { id: 'legal-proprietaryText', key: 'proprietaryText' },
        { id: 'legal-useTitle', key: 'useTitle' },
        { id: 'legal-useText', key: 'useText' },
        { id: 'legal-disclaimerTitle', key: 'disclaimerTitle' },
        { id: 'legal-disclaimerText', key: 'disclaimerText' },
        { id: 'legal-indemnityTitle', key: 'indemnityTitle' },
        { id: 'legal-indemnityText', key: 'indemnityText' }
    ];
    elements.forEach(el => {
        const domEl = document.getElementById(el.id);
        if (domEl) {
            domEl.innerHTML = t[el.key];
        }
    });
    const imprintList = document.getElementById('legal-imprintList');
    if (imprintList) imprintList.innerHTML = t.imprintList;

    const dateEl = document.getElementById('legal-date');
    if (dateEl) dateEl.innerHTML = t.date;
    const navT = translations[currentLang].nav;
    const aboutLink = document.querySelector('a[href="index.html#about"]');
    const skillsLink = document.querySelector('a[href="index.html#skills"]');
    const projectsLink = document.querySelector('a[href="index.html#projects"]');
    
    if (aboutLink) aboutLink.innerText = navT.about;
    if (skillsLink) skillsLink.innerText = navT.skills;
    if (projectsLink) projectsLink.innerText = navT.projects;
}


function handleLanguageSwitch() {
    currentLang = currentLang === 'en' ? 'de' : 'en';
    localStorage.setItem('lang', currentLang); 
    
    updateLanguageToggles();
    renderAllContent();
    initializeEventListeners(); 
}

function updateLanguageToggles() {
    const langToggleDesktop = document.getElementById("lang-toggle-desktop");
    const langToggleMobile = document.getElementById("lang-toggle-mobile");
    const langBtns = document.querySelectorAll(".lang-btn");
    langBtns.forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(`.lang-btn[data-lang="${currentLang}"]`).forEach(btn => {
        btn.classList.add("active");
    });
    if (currentLang === 'de') {
        if(langToggleDesktop) langToggleDesktop.classList.add("de-active");
        if(langToggleMobile) langToggleMobile.classList.add("de-active");
    } else {
        if(langToggleDesktop) langToggleDesktop.classList.remove("de-active");
        if(langToggleMobile) langToggleMobile.classList.remove("de-active");
    }
}

function updateReviewsDisplay(direction) {
  const t = translations[currentLang];
  const len = reviewsData.length;
  const indexCenter = currentReviewIndex;
  const indexLeft = (currentReviewIndex - 1 + len) % len;
  const indexRight = (currentReviewIndex + 1) % len;

  const leftCard = document.getElementById("text-left");
  const centerCard = document.getElementById("text-center");
  const rightCard = document.getElementById("text-right");

  if(leftCard) {
      document.getElementById("text-left").innerHTML = reviewsData[indexLeft].text[currentLang];
      document.getElementById("author-left").innerHTML = reviewsData[indexLeft].author;
      
      document.getElementById("text-center").innerHTML = reviewsData[indexCenter].text[currentLang];
      document.getElementById("author-center").innerHTML = reviewsData[indexCenter].author;
      
      document.getElementById("text-right").innerHTML = reviewsData[indexRight].text[currentLang];
      document.getElementById("author-right").innerHTML = reviewsData[indexRight].author;
      
      renderDots(len, indexCenter);
  }
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
