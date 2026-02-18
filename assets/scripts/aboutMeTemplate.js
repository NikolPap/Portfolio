function getAboutMeTemplate() {
    return `
     <div class="about-container about-section">
            <div class="about-image image-wrapper" id="imageBox">
                <img class="about-photo" src="./assets/img/Photo1.png" alt="Lukas Professional Photo">
            </div>

            <div class="about-content">
                <span class="who-i-am">Who I Am</span>
                
                <div class="about-card">
                    <h2 class="about-title">About <span>me</span></h2>
                    
                    <p class="main-description">
                        Hey there, I'm Lukas! Write some information about yourself that is IT related. 
                        Why are you passionate about coding? What is your source of inspiration 
                        for improving your programming skills?
                    </p>

                    <div class="info-row">
                        <img src="./assets/img/Property 1=location_on.png" class="info-icon" alt="a location image">
                        <p>Where are you based? Would you be open to working remotely or potentially relocating?</p>
                    </div>

                    <div class="info-row">
                        <img src="./assets/img/Property 1=cognition.png" class="info-icon" alt="a cognition image">
                        <p>Show that you are open-minded. Are you enthusiastic about learning new technologies?</p>
                    </div>

                    <div class="info-row">
                        <img src="./assets/img/Property 1=Quality.png" class="info-icon" alt="">
                        <p>A brief description of your problem-solving approach. Use keywords like analytical thinking and creativity.</p>
                    </div>
                </div>
            </div>
        </div>
        `
}