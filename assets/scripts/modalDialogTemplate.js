/**
 * Generates the HTML template for a project modal dialog.
 *
 * @param {Object} project - The project object containing details.
 * @param {number|string} project.number - The project's number or ID.
 * @param {string} project.title - The title of the project.
 * @param {Object} project.description - Object with localized project descriptions, keyed by language code.
 * @param {string} project.image - URL of the project's preview image.
 * @param {string} project.githubLink - URL to the project's GitHub repository.
 * @param {string} project.liveLink - URL to the live version of the project.
 * @param {string} techIconsHtml - HTML string representing the technology icons used in the project.
 * @returns {string} HTML string for the modal dialog.
 */
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
                <a href="${project.githubLink}" target="_blank"  class="modal-btn btn">
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