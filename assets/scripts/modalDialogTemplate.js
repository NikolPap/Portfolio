function getModalDialogTemplate(project, techIconsHtml) {
    return `
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
    `
}