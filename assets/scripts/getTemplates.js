const reviewsData = [
  {
    text: {
      en: "Nikoleta was a valuable asset to the team, combining a rapid grasp of complex concepts with an efficient, high-quality coding style. She stood out for her proactive problem-solving, clean code, and dedication to the group’s progress. Her methodical approach to testing and debugging significantly enhanced the project's stability, making her a reliable and highly competent collaborator.",
      de: "Nikoleta war eine wertvolle Bereicherung für das Team und überzeugte durch ihre schnelle Auffassungsgabe sowie ihren effizienten, hochwertigen Programmierstil. Sie zeichnete sich durch proaktive Problemlösung, sauberen Code und großes Engagement für den gemeinsamen Fortschritt aus. Durch ihre strukturierte Arbeitsweise im Testing und Debugging trug sie maßgeblich zur Stabilität des Projekts bei und war eine stets zuverlässige Kollegin.",
    },
    author: "A.Müller-Team Partner",
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
      en: "She is a very helpful colleague who is always there for you. His efficient way of working is inspiring.",
      de: "Sie ist ein sehr hilfsbereiter Kollege, der immer für einen da ist. Seine effiziente Arbeitsweise ist inspirierend.",
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

