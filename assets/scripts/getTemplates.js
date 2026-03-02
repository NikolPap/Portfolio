const reviewsData = [
  {
    text: {
      en: "Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.",
      de: "Lukas hat sich als zuverlässiger Gruppenpartner erwiesen. Seine technischen Fähigkeiten und sein proaktiver Ansatz waren entscheidend für den Erfolg unseres Projekts.",
    },
    author: "H.Janisch - Team Partner",
  },
  {
    text: {
      en: "Nikoleta enriched our team with her great dedication and quick grasp of concepts. Thanks to her strong ability to understand complex connections rapidly and translate them efficiently into code, she contributed valuable insights to our work. With her keen eye for detail, she reliably identified programming errors and quickly found effective solutions.",
      de: "Nikoleta bereicherte unser Team mit ihrem großen Engagement und ihrer schnellen Auffassungsgabe. Dank ihrer starken Fähigkeit, komplexe Zusammenhänge schnell zu verstehen und effizient in Code umzusetzen, trug sie wertvolle Erkenntnisse zu unserer Arbeit bei.",
    },
    author: "K.Klages-Team Partner",
  },
  {
    text: {
      en: "He is a very helpful colleague who is always there for you. His efficient way of working is inspiring.",
      de: "Er ist ein sehr hilfsbereiter Kollege, der immer für einen da ist. Seine effiziente Arbeitsweise ist inspirierend.",
    },
    author: "T.Schulz - Frontend Developer",
  },
];

let currentReviewIndex = 0;
let currentProjectIndex = 0;

/**
 * Initializes the application and renders all main sections.
 */
function init() {
  renderAllContent();
  initializeEventListeners();
  activateOnFirstHover("imageBox", "active");
  initModal();
  initCursorGlow();
}

/**
 * Renders all page sections and initializes dynamic content.
 */
function renderAllContent() {
  document.getElementById("hero").innerHTML = getheroTemplate();
  document.getElementById("about").innerHTML = getAboutMeTemplate();
  document.getElementById("skills").innerHTML = getSkillsTemplate();
  document.getElementById("projects").innerHTML = getProjectsTemplate();
  document.getElementById("colleagues").innerHTML = getColleaguesTemplate();
  document.getElementById("contact").innerHTML = getContactTemplate();
  document.getElementById("footer").innerHTML = getFooterTemplate();
  updateReviewsDisplay();
  updateLanguageToggles();
}

/**
 * Appends hero section content.
 */
function renderHero() {
  document.getElementById("hero").innerHTML += getheroTemplate();
}

/**
 * Appends about section content.
 */
function renderAboutme() {
  document.getElementById("about").innerHTML += getAboutMeTemplate();
}

/**
 * Appends skills section content.
 */
function renderSkills() {
  document.getElementById("skills").innerHTML += getSkillsTemplate();
}

/**
 * Appends projects section content.
 */
function renderProjects() {
  document.getElementById("projects").innerHTML += getProjectsTemplate();
}

/**
 * Renders contact section if available.
 */
function renderContact() {
  const contactSection = document.getElementById("contact");
  if (!contactSection) return;
  contactSection.innerHTML = getContactTemplate();
}

/**
 * Renders footer section if available.
 */
function renderFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;
  footer.innerHTML = getFooterTemplate();
}

/**
 * Renders colleagues section and updates review display.
 */
function renderColleagues() {
  document.getElementById("colleagues").innerHTML = getColleaguesTemplate();
  updateReviewsDisplay();
}

/**
 * Moves to the next review in the list.
 */
function nextReview() {
  currentReviewIndex++;
  if (currentReviewIndex >= reviewsData.length) {
    currentReviewIndex = 0;
  }
  updateReviewsDisplay("next");
}

/**
 * Moves to the previous review in the list.
 */
function prevReview() {
  currentReviewIndex--;
  if (currentReviewIndex < 0) {
    currentReviewIndex = reviewsData.length - 1;
  }
  updateReviewsDisplay("prev");
}

/**
 * Updates review cards (left, center, right) and pagination dots.
 * @param {string} [direction]
 */
function updateReviewsDisplay(direction) {
  const len = reviewsData.length;
  const center = currentReviewIndex;
  const left = (center - 1 + len) % len;
  const right = (center + 1) % len;

  document.getElementById("text-center").innerHTML = reviewsData[center].text;
  document.getElementById("author-center").innerHTML = reviewsData[center].author;
  document.getElementById("text-left").innerHTML = reviewsData[left].text;
  document.getElementById("author-left").innerHTML = reviewsData[left].author;
  document.getElementById("text-right").innerHTML = reviewsData[right].text;
  document.getElementById("author-right").innerHTML = reviewsData[right].author;
  renderDots(len, center);
}

/**
 * Renders review pagination dots.
 * @param {number} count
 * @param {number} activeIndex
 */
function renderDots(count, activeIndex) {
  const container = document.getElementById("dots-container");
  container.innerHTML = "";

  for (let i = 0; i < count; i++) {
    let dotClass = "dot";
    if (i === activeIndex) dotClass += " active-dot";
    container.innerHTML +=
      `<span class="${dotClass}" onclick="currentReviewIndex=${i};updateReviewsDisplay()"></span>`;
  }
}

