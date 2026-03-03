/* =========================================
   Project Data
   ========================================= */
const projects = [
  {
    title: "Join",
    number: "01",
    description: {
      en: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      de: "Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben per Drag & Drop, weisen Sie Benutzer und Kategorien zu.",
    },
    techStack: [
      { name: "CSS", icon: "./assets/img/Vector.png" },
      { name: "HTML", icon: "./assets/img/Property 1=HTML (1).png" },
      { name: "Firebase", icon: "./assets/img/Property 1=Firebase (1).png" },
      { name: "Angular", icon: "./assets/img/Angular.png" },
      { name: "TypeScript", icon: "assets/img/Property 1=TypeScript (1).png" },
    ],
    image: "assets/img/Frame 372.png",
    githubLink: "https://github.com/IcksDeh/Join.git",
    
    liveLink: "https://nikoletapapalazarou.de/Join/index.html",
  },
  {
    title: "El Pollo Loco",
    number: "02",
    description: {
      en: "A simple jump-and-run game based on an object-oriented approach. Help Pepe find coins and Tabasco bottles to fight against the killer chicken.",
      de: "Ein einfaches Jump-&-Run-Spiel auf Basis eines objektorientierten Ansatzes. Hilf Pepe, Münzen und Tabasco-Flaschen zu finden, um gegen das Killerhuhn zu kämpfen.",
    },
    techStack: [
      { name: "JavaScript", icon: "./assets/img/Javascript.png" },
      { name: "HTML", icon: "./assets/img/Property 1=HTML (1).png" },
      { name: "CSS", icon: "./assets/img/Vector.png" },
    ],
    image: "assets/img/Frame 372 (1).png",
    githubLink: "https://github.com/NikolPap/El-Pollo-Loco.git",
    liveLink: "https://nikoletapapalazarou.de/elPolloLoco/index.html",
  }
  // {
  //   title: "DA Bubble",
  //   number: "03",
  //   description: {
  //     en: "A chat messenger application similar to Slack. Features real-time communication, channels, and threads.",
  //     de: "Eine Chat-Messenger-Anwendung ähnlich wie Slack. Bietet Echtzeitkommunikation, Kanäle und Threads.",
  //   },
  //   techStack: [
  //     { name: "Angular", icon: "./assets/img/Angular.png" },
  //     { name: "Firebase", icon: "./assets/img/Property 1=Firebase (1).png" },
  //     { name: "TypeScript", icon: "assets/img/Property 1=TypeScript (1).png" },
  //   ],
  //   image: "assets/img/Frame 372 (2).png",
  //   githubLink: "#",
  //   liveLink: "#",
  // },
];

/**
 * Initializes the modal by adding a click listener to close it
 * when clicking outside the modal content.
 */
function initModal() {
  const modal = document.getElementById("projectModal");

  if (!modal) {
    console.error("Modal element not found!");
    return;
  }
  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeModal();
    }
  });
}

/**
 * Opens the project modal dialog for a specific project.
 * @param {number} index - The index of the project in the projects array.
 */
function openProjectDialog(index) {
  const modal = document.getElementById("projectModal");
  const glow = document.getElementById("cursor-glow"); 
  
  currentProjectIndex = index;
  renderModalContent(index);

  if (modal && glow) {
    modal.appendChild(glow);
  }

  modal.showModal();
  document.body.style.overflow = "hidden"; 
}

/**
 * Closes the project modal and restores the glow element to the body.
 */
function closeModal() {
  const modal = document.getElementById("projectModal");
  const glow = document.getElementById("cursor-glow"); 
  if (glow) {
    document.body.appendChild(glow);
  }

  modal.close();
  document.body.style.overflow = "";
}
/**
 * Moves to the next project in the array and renders its modal content.
 * Wraps around to the first project if at the end of the list.
 */
function nextProject() {
  currentProjectIndex++;
  if (currentProjectIndex >= projects.length) {
    currentProjectIndex = 0;
  }
  renderModalContent(currentProjectIndex);
}

/**
 * Renders the modal content for a specific project.
 * @param {number} index - The index of the project in the projects array.
 */
function renderModalContent(index) {
  const project = projects[index];
  const t = translations[currentLang];
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
  modalBody.innerHTML = getModalDialogTemplate(project, techIconsHtml);
}