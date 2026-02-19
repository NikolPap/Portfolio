function getProjectsTemplate() {
    return `
    <div class="projects-container">
        <span class="projects-pre-title">Portfolio</span>
        <h2 class="featured-title">Featured Projects</h2>
        <span class="project-span">Explore a selection of my work here - Interact with <br> projects to see my skills in action.</span>
        
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
            <img src="assets/img/ElPolloLoco.png" alt="Join Project">
        </div>
            </div>

            <div class="project-row">
                <div class="project-info">
                    <h3 class="project-name">DA Bubble<img src="assets/img/arrow_outward.png" class="arrow-icon" alt=""></h3>
                </div>
                <div class="project-links">
                      <p class="project-tech">Angular <span class="linear">|</span> Firebase <span class="linear">|</span> Typescript</p>
                </div>
                <div class="project-image-preview">
            <img src="assets/img/DaBubble.png" alt="Join Project">
        </div>
            </div>
        </div>
        </div>
    </div>
    `;
}