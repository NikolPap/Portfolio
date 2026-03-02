/**
 * Generates the HTML template for the skills section of the portfolio.
 *
 * Uses the current language translations from the `translations` object
 * to populate section titles, descriptions, buttons, and labels.
 *
 * @returns {string} HTML string representing the skills section, including:
 *   - Left panel with skills title, description, and CTA button
 *   - Right panel with a grid of skill icons and labels
 */
function getSkillsTemplate() {
    const t = translations[currentLang].skills;
    return `
    <div class="skills-container">
        <div class="skills-left">
            <span class="skills-card-title">${t.techTitle}</span>
            <div class="skills-glass-card">
                <h2 class="skills-title">${t.mainTitle}</h2>
                <p class="main-description">${t.description}</p>
                <div class="info-row">
                   <p style="color: var(--color-primary); font-size: 24px; font-weight: bold; font-family:'Fira Code', sans-serif;">
                     <span class="white-letters">${t.anotherSkill}</span> ${t.anotherSkillBold}
                   </p>
                </div>
                <p>${t.contactText}</p>
                <br>
                 <div class="cta-buttons skills-btn">
                  <a href="#contact" class="btn btn-outline btn-marquee"><span>${t.btnTalk}</span></a>
                 </div>
            </div>
        </div>

        <div class="skills-right">
            <div class="icons-grid">
                <div class="skill-item"><img src="./assets/img/Property 1=HTML.png" alt="html"><span>HTML</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=CSS.png" alt="css"><span>CSS</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=JavaScript.png" alt="js"><span>JavaScript</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=Material Design.png" alt="material"><span>Material Design</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=TypeScript.png" alt="ts"><span>TypeScript</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=Angular.png" alt="angular"><span>Angular</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=Firebase.png" alt="firebase"><span>Firebase</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=Git.png" alt="git"><span>Git</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=Rest-Api.png" alt="api"><span>REST-API</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=Scrum.png" alt="scrum"><span>Scrum</span></div>
                <div class="skill-item growth-mindset">
                    <div class="icon-wrapper">
                        <img src="./assets/img/Property 1=GrowthMindset.png" class="base-icon" alt="Growth Mindset">
                        <img src="./assets/img/Group 18.png" class="hover-icon" alt="Growth Effect">
                    </div>
                    <span>${t.growth}</span>
                </div> 
            </div>
        </div>
    </div>
    `;
}