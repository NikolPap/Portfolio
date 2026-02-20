function getModalDialogTemplate(project, techIconsHtml) {
    return `
      <div class="modal-container">
        
        <button class="close-modal-btn" onclick="closeModal()"><img src="assets/img/close_small.png" alt"a close"></button>

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
                    Github <img   class="trans-arrow" src="assets/img/arrow_outward2.png" alt"arrow image"> 
                </a>
                <a href="${project.liveLink}" target="_blank" class="modal-btn btn">
                    Live Test <img  class="trans-arrow" src="assets/img/arrow_outward2.png" alt"arrow image">
                </a>
            </div>
        </div>

        <div class="modal-right">
            <div class="project-img-wrapper">
                <img src="${project.image}" alt="${project.title} Preview">
            </div>
        </div>

        <div class="next-project" onclick="nextProject()">
            Next project<img class="trans-arrow" src="assets/img/arrow_forward.png" alt"arrow image">
        </div>
    </div>
    `
}