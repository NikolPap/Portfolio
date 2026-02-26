const reviewsData = [
  {
    text: {
      en: "Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.",
      de: "Lukas hat sich als zuverlässiger Gruppenpartner erwiesen. Seine technischen Fähigkeiten und sein proaktiver Ansatz waren entscheidend für den Erfolg unseres Projekts."
    },
    author: "H.Janisch - Team Partner",
  },
  {
    text: {
      en: "Nikoleta enriched our team with her great dedication and quick grasp of concepts. Thanks to her strong ability to understand complex connections rapidly and translate them efficiently into code, she contributed valuable insights to our work. With her keen eye for detail, she reliably identified programming errors and quickly found effective solutions.",
      de: "Nikoleta bereicherte unser Team mit ihrem großen Engagement und ihrer schnellen Auffassungsgabe. Dank ihrer starken Fähigkeit, komplexe Zusammenhänge schnell zu verstehen und effizient in Code umzusetzen, trug sie wertvolle Erkenntnisse zu unserer Arbeit bei."
    },
    author: "K.Klages-Team Partner",
  },
  {
    text: {
      en: "He is a very helpful colleague who is always there for you. His efficient way of working is inspiring.",
      de: "Er ist ein sehr hilfsbereiter Kollege, der immer für einen da ist. Seine effiziente Arbeitsweise ist inspirierend."
    },
    author: "T.Schulz - Frontend Developer",
  },
];

let currentReviewIndex = 0;
let currentProjectIndex = 0;

function init() {
  renderAllContent();
  initializeEventListeners();
  activateOnFirstHover("imageBox", "active");
  initModal();
}

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

function renderHero() {
  document.getElementById("hero").innerHTML += getheroTemplate();
}

function renderAboutme() {
  document.getElementById("about").innerHTML += getAboutMeTemplate();
}

function renderSkills() {
  document.getElementById("skills").innerHTML += getSkillsTemplate();
}

function renderProjects() {
  document.getElementById("projects").innerHTML += getProjectsTemplate();
}

function renderContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.innerHTML = getContactTemplate();
  }
}

function renderFooter() {
  const footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML = getFooterTemplate();
  }
}

function renderColleagues() {
  document.getElementById("colleagues").innerHTML = getColleaguesTemplate();
  updateReviewsDisplay();
}

function nextReview() {
  currentReviewIndex++;
  if (currentReviewIndex >= reviewsData.length) {
    currentReviewIndex = 0;
  }
  updateReviewsDisplay("next");
}

function prevReview() {
  currentReviewIndex--;
  if (currentReviewIndex < 0) {
    currentReviewIndex = reviewsData.length - 1;
  }
  updateReviewsDisplay("prev");
}

function updateReviewsDisplay(direction) {
  const len = reviewsData.length;
  const indexCenter = currentReviewIndex;
  const indexLeft = (currentReviewIndex - 1 + len) % len;
  const indexRight = (currentReviewIndex + 1) % len;
  document.getElementById("text-center").innerHTML =
    reviewsData[indexCenter].text;
  document.getElementById("author-center").innerHTML =
    reviewsData[indexCenter].author;
  document.getElementById("text-left").innerHTML = reviewsData[indexLeft].text;
  document.getElementById("author-left").innerHTML =
    reviewsData[indexLeft].author;
  document.getElementById("text-right").innerHTML =
    reviewsData[indexRight].text;
  document.getElementById("author-right").innerHTML =
    reviewsData[indexRight].author;
  renderDots(len, indexCenter);
}

function renderContent() {
  const len = reviewsData.length;
  const indexCenter = currentReviewIndex;
  const indexLeft = (currentReviewIndex - 1 + len) % len;
  const indexRight = (currentReviewIndex + 1) % len;

  document.getElementById("text-center").innerHTML =
    reviewsData[indexCenter].text;
  document.getElementById("author-center").innerHTML =
    reviewsData[indexCenter].author;

  document.getElementById("text-left").innerHTML = reviewsData[indexLeft].text;
  document.getElementById("author-left").innerHTML =
    reviewsData[indexLeft].author;

  document.getElementById("text-right").innerHTML =
    reviewsData[indexRight].text;
  document.getElementById("author-right").innerHTML =
    reviewsData[indexRight].author;

  renderDots(len, indexCenter);
}

function renderDots(count, activeIndex) {
  const container = document.getElementById("dots-container");
  container.innerHTML = "";

  for (let i = 0; i < count; i++) {
    let dotClass = "dot";
    if (i === activeIndex) {
      dotClass += " active-dot";
    }
    container.innerHTML += `<span class="${dotClass}" onclick="currentReviewIndex = ${i}; updateReviewsDisplay()"></span>`;
  }
}
