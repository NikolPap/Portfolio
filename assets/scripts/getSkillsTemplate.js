function getSkillsTemplate() {
    return `
    <div class="skills-container">
        <div class="skills-left">
            <span class="skills-card-title">Technologies</span>
            <div class="skills-glass-card">
                <h2 class="skills-title">Skill Set</h2>
                <p class="main-description">
                   I have experience in front-end development using HTML, CSS, JavaScript, TypeScript, and Angular, along with Material Design for clean interfaces. I work with Firebase, REST APIs, Git, and follow Scrum practices. I am always eager to learn new technologies and adapt quickly to modern development trends.
                </p>
                <div class="info-row">
                   <p  style="color: var(--color-primary); font-size: 24px; font-weight: bold; font-family:'Fira Code', sans-serif;"><span class="white-letters">You need</span> another skill?</p>
                </div>
                <p>Feel free to contact me. I look forward to expanding on my previous knowledge.</p>
                <br>
                 <div class="cta-buttons skills-btn">
                  <a href="#contact" class="btn btn-outline btn-marquee"><span>Let's Talk</span></a>
                 </div>
            </div>
        </div>

        <div class="skills-right">
            <div class="icons-grid">
                <div class="skill-item"><img src="./assets/img/Property 1=HTML.png" alt="html icon"><span>HTML</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=CSS.png" alt="css icon"><span>CSS</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=JavaScript.png" alt="javascript icon"><span>JavaScript</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=Material Design.png" alt="materialdesign ico"><span>Material Design</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=TypeScript.png" alt="typescript icon"><span>TypeScript</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=Angular.png" alt="angular icon"><span>Angular</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=Firebase.png" alt="firebase icon"><span>Firebase</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=Git.png" alt="git icon"><span>Git</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=Rest-Api.png" alt="api icon"><span>REST-API</span></div>
                <div class="skill-item"><img src="./assets/img/Property 1=Scrum.png" alt="scrum icon"><span>Scrum</span></div>
               <div class="skill-item growth-mindset">
                <div class="icon-wrapper">
                    <img src="./assets/img/Property 1=GrowthMindset.png" class="base-icon" alt="Growth Mindset">
                    <img src="./assets/img/Group 18.png" class="hover-icon" alt="Growth Effect">
                </div>
                <span>Growth mindset</span>
                    </div> 
                        </div>
                    </div>
    </div>
    `;
}