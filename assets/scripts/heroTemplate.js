function getheroTemplate() {
    return `
     <nav class="navbar">
        <div class="navigation">
          <div class="nav-left">
            <div class="lang-switch" id="lang-toggle">
              <div class="toggle-bg"></div>
              <span class="lang-btn active" data-lang="en">EN</span>
              <span class="lang-btn" data-lang="de">DE</span>
            </div>
            <div>
            <ul class="nav-links">
              <li><a href="#about">About me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
            </div>
          </div>
           <div class="logo">
          <img id="logo-icon" src="./assets/img/logo.png" alt="a logo icon" />
        </div>
        </div>
      </nav>

      <div class="hero-content">
        <p class="subtitle">Frontend Developer</p>
        <h1>Nikoleta Papalazarou</h1>
        <div class="cta-buttons">
          <a href="#projects" class="btn btn-outline btn-marquee"
            ><span>Check my work</span></a
          >
          <a href="#contact" class="btn btn-outline btn-marquee"
            ><span>Contact me</span></a
          >
        </div>
      </div>

         <div class="hero-wrapper">
        
        <div class="sidebar-right">
          <p class="email">nikoletapapa01@hotmail.com</p>
          <div class="social-icons">
            <a href="#" class="social-link">
                <img class="github-icon" src="./assets/img/Property 1=GitHub.png" alt="github icon"/>
            </a>
            <a href="#" class="social-link">
                <img class="linkedin-icon" src="./assets/img/Property 1=Linkedin.png" alt="linkedin icon"/>
            </a>
            <img class="social-vector" src="./assets/img/Vector 1 (1).png" alt="a vector icon"/>
          </div>
        </div>

        <div class="scroll-down">
            <div class="arrow">
              <img class="arrow-img-1" src="./assets/img/Property 1=Bewegung1.png" alt="an arrow image"/>
              <img class="arrow-img-2" src="./assets/img/Property 1=Bewegung.png" alt="an arrow movement"/>
            </div>
            <div>
              <img class="line" src="./assets/img/Vector 1.png" alt="a vector img"/>
            </div>
        </div>

      </div> 
     

        <div class="marquee">
          <div class="marquee-content">
            <span>Available for remote work • </span>
            <span>Frontend Developer • </span>
            <span>Based in Wiesbaden • </span>
            <span>Open to opportunities • </span>
            <span>Available for remote work • </span>
            <span>Frontend Developer • </span>
            <span>Based in Wiesbaden • </span>
          </div>
        </div>
      </div>
    `
}