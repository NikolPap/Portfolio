/* =========================================
   Colleagues / Testimonials Logic
   ========================================= */

const reviewsData = [
  {
    text: "Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.",
    author: "H.Janisch - Team Partner",
  },
  {
    text: "I had the good fortune of working with Lukas on a project at the Developer Akademie. He always stayed calm and made sure our team was set up for success.",
    author: "V.Schuhmann - Team Partner",
  },
  {
    text: "He is a very helpful colleague who is always there for you. His efficient way of working is inspiring.",
    author: "T.Schulz - Frontend Developer",
  },
];

let currentReviewIndex = 0; // Ξεκινάμε από το πρώτο (το μεσαίο)

function init() {
  renderHero();
  renderAboutme();
  renderSkills();
  renderProjects();
  renderColleagues();
  renderContact();
  renderFooter();
  initializeEventListeners();
  activateOnFirstHover("imageBox", "active");
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
