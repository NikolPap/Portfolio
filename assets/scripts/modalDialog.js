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
    image: "assets/img/Frame 372.png", 
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
let currentProjectIndex = 0;

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

function openProjectDialog(index) {
  const modal = document.getElementById("projectModal");
  currentProjectIndex = index;
  renderModalContent(index);
  modal.showModal();
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.close();
}

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
  modalBody.innerHTML = getModalDialogTemplate(project, techIconsHtml);
}