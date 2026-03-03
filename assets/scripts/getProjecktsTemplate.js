/**
 * Generates the HTML template for the projects section of the portfolio.
 *
 * Uses the current language translations from the `translations` object
 * to populate section titles, subtitles, and button labels.
 *
 * @returns {string} HTML string representing the projects section, including:
 *   - Section pre-title, main title, and subtitle
 *   - List of projects, each with:
 *       - Project name with arrow icon
 *       - Project technologies listed
 *       - Project image preview
 */
function getProjectsTemplate() {
    const t = translations[currentLang].projects;
    return `
    <div class="projects-container">
        <span class="projects-pre-title">${t.preTitle}</span>
        <h2 class="featured-title">${t.title}</h2>
        <span class="project-span">${t.subtitle}</span>
        
        <div class="projects-list">
            <div class="project-row">
                <div class="project-info">
                    <h3 class="project-name">Join<img src="assets/img/arrow_outward.png" class="arrow-icon" alt=""></h3>
                </div>
                <div class="project-links">
                    <p class="project-tech">Angular <span class="linear">|</span> JavaScript <span class="linear">|</span> HTML <span class="linear">|</span> CSS <span class="linear">|</span> Firebase</p>
                </div>
                <div class="project-image-preview">
                    <img src="assets/img/join.png" alt="Join Project">
                </div>
            </div>

            <div class="project-row">
                <div class="project-info">
                    <h3 class="project-name">El Pollo Loco<img src="assets/img/arrow_outward.png" class="arrow-icon" alt=""></h3>
                </div>
                <div class="project-links">
                      <p class="project-tech">JavaScript <span class="linear">|</span> HTML <span class="linear">|</span> CSS</p>
                </div>
                <div class="project-image-preview">
                    <img src="assets/img/ElPolloLoco.png" alt="El Pollo Loco">
                </div>
            </div>
        </div>
    </div>
    `;
}

//  <div class="project-row">
//                 <div class="project-info">
//                     <h3 class="project-name">DA Bubble<img src="assets/img/arrow_outward.png" class="arrow-icon" alt=""></h3>
//                 </div>
//                 <div class="project-links">
//                       <p class="project-tech">Angular <span class="linear">|</span> Firebase <span class="linear">|</span> Typescript</p>
//                 </div>
//                 <div class="project-image-preview">
//                     <img src="assets/img/DaBubble.png" alt="DA Bubble">
//                 </div>
//             </div>