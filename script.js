
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

/* =========================================
   Project Data
   ========================================= */
const projects = [
  {
    title: "Join",
    number: "01",
    description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    techStack: [
      { name: "CSS", icon: "./assets/img/Vector.png" },
      { name: "HTML", icon: "./assets/img/Property 1=HTML (1).png" },
      { name: "Firebase", icon: "./assets/img/Property 1=Firebase (1).png" },
      { name: "Angular", icon: "./assets/img/Angular.png" },
      { name: "TypeScript", icon: "assets/img/Property 1=TypeScript (1).png" }
    ],
    image: "assets/img/Frame 372.png", // Βεβαιώσου ότι η διαδρομή είναι σωστή
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "El Pollo Loco",
    number: "02",
    description: "A simple jump-and-run game based on object-oriented approach. Help Pepe to find coins and tabasco bottles to fight against the killer chicken.",
    techStack: [
      { name: "JavaScript", icon: "./assets/img/Javascript.png" },
      { name: "HTML", icon: "./assets/img/Property 1=HTML (1).png" },
      { name: "CSS", icon: "./assets/img/Vector.png" }
    ],
    image: "assets/img/Frame 372 (1).png",
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "DA Bubble",
    number: "03",
    description: "A chat messenger application similar to Slack. Features real-time communication, channels, and threads.",
    techStack: [
      { name: "Angular", icon: "./assets/img/Angular.png" },
      { name: "Firebase", icon: "./assets/img/Property 1=Firebase (1).png" },
      { name: "TypeScript", icon: "assets/img/Property 1=TypeScript (1).png" }
    ],
    image: "assets/img/Frame 372 (2).png",
    githubLink: "#",
    liveLink: "#"
  }
];

const modal = document.getElementById("projectModal");
let currentProjectIndex = 0;

function openProjectDialog(index) {
  currentProjectIndex = index;
  renderModalContent(index);
  modal.showModal();
}

function closeModal() {
  modal.close();
}

modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close();
    }
});

function nextProject() {
  currentProjectIndex++;
  if (currentProjectIndex >= projects.length) {
    currentProjectIndex = 0;
  }
  renderModalContent(currentProjectIndex);
}

function renderModalContent(index) {
  const project = projects[index];
  const modalBody = document.getElementById("modalBody");
  let techIconsHtml = '';
  project.techStack.forEach(tech => {
    techIconsHtml += `
      <div class="tech-item">
        <img src="${tech.icon}" alt="${tech.name}">
        <span>${tech.name}</span>
      </div>
    `;
  });

  modalBody.innerHTML = `
    <div class="modal-container">
        
        <button class="close-modal-btn" onclick="closeModal()">×</button>

        <div class="modal-left">
            <div class="project-number">${project.number}</div>
            <h2 class="project-title">${project.title}</h2>
            
            <p class="project-subtitle">What is this project about?</p>
            <p class="project-description">${project.description}</p>
            
            <div class="tech-stack">
                ${techIconsHtml}
            </div>
            
            <div class="modal-buttons">
                <a href="${project.githubLink}" target="_blank" class="modal-btn btn">
                    Github ↗
                </a>
                <a href="${project.liveLink}" target="_blank" class="modal-btn btn">
                    Live Test ↗
                </a>
            </div>
        </div>

        <div class="modal-right">
            <div class="project-img-wrapper">
                <img src="${project.image}" alt="${project.title} Preview">
            </div>
        </div>

        <div class="next-project" onclick="nextProject()">
            Next project <span class="next-arrow">→</span>
        </div>
    </div>
  `;
}
