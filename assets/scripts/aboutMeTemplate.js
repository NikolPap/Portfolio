function getAboutMeTemplate() {
  const t = translations[currentLang].about;

  return `
     <div class="about-container about-section">
            <div class="about-image image-wrapper" id="imageBox">
                <img class="about-photo" src="./assets/img/Photo1.png" alt="Photo">
            </div>

            <div class="about-content">
                <span class="who-i-am">${t.whoIam}</span>
                <div class="about-card">
                    <h2 class="about-title">${t.title} <span>${t.titleSpan}</span></h2>
                    <p class="main-description">${t.description}</p>

                    <div class="info-row">
                        <img src="./assets/img/Property 1=location_on.png" class="info-icon" alt="location">
                        <p>${t.location}</p>
                    </div>

                    <div class="info-row">
                        <img src="./assets/img/Property 1=cognition.png" class="info-icon" alt="cognition">
                        <p>${t.learning}</p>
                    </div>

                    <div class="info-row">
                        <img src="./assets/img/Property 1=Quality.png" class="info-icon" alt="quality">
                        <p>${t.problemSolving}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
}