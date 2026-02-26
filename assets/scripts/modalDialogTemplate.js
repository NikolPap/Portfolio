function getModalDialogTemplate(project, techIconsHtml) {
    const t = translations[currentLang]; 

    return `
       <div class="modal-container">
        <button class="close-modal-btn" onclick="closeModal()"><img src="assets/img/close_small.png" alt="close"></button>
        <div class="modal-left">
            <div class="project-number">${project.number}</div>
            <h2 class="project-title">${project.title}</h2>
            
            <p class="project-subtitle">${t.projects.modalParams}</p>
            <p class="project-description">${project.description[currentLang]}</p>
            
            <div class="tech-stack">${techIconsHtml}</div>
            
            <div class="modal-buttons">
                <a href="https://github.com/NikolPap" target="_blank"  class="modal-btn btn">
                    ${t.projects.btnGithub} <img class="trans-arrow" src="assets/img/arrow_outward2.png" alt="arrow"> 
                </a>
                <a href="${project.liveLink}" target="_blank" class="modal-btn btn">
                    ${t.projects.btnLive} <img class="trans-arrow" src="assets/img/arrow_outward2.png" alt="arrow">
                </a>
            </div>
        </div>
        <div class="modal-right">
            <div class="project-img-wrapper">
                <img src="${project.image}" alt="${project.title} Preview">
            </div>
        </div>
        <div class="next-project" onclick="nextProject()">
            ${t.projects.btnNext}<img class="trans-arrow" src="assets/img/arrow_forward.png" alt="arrow">
        </div>
    </div>
  `;
}