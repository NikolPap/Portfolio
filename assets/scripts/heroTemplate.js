function getheroTemplate() {
  const t = translations[currentLang];
  
  return /*html*/ `
    <nav class="navbar">
      <div class="navigation">
        <div class="nav-left desktop-nav">
          <div class="lang-switch" id="lang-toggle-desktop">
            <div class="toggle-bg"></div>
            <span class="lang-btn active" data-lang="en">EN</span>
            <span class="lang-btn" data-lang="de">DE</span>
          </div>
          <div>
            <ul class="nav-links">
              <li><a href="#about">${t.nav.about}</a></li>
              <li><a href="#skills">${t.nav.skills}</a></li>
              <li><a href="#projects">${t.nav.projects}</a></li>
            </ul>
          </div>
        </div>
        <div class="logo">
          <img id="logo-icon" src="./assets/img/logo.png" alt="a logo icon" />
        </div>
        <div class="hamburger" id="hamburger-btn">
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>

    <div class="mobile-menu-overlay" id="mobile-menu">
        <div class="mobile-menu-content">
            <ul class="mobile-nav-links nav-links">
                <li><a href="#about" onclick="closeMobileMenu()">${t.nav.about}</a></li>
                <li><a href="#skills" onclick="closeMobileMenu()">${t.nav.skills}</a></li>
                <li><a href="#projects" onclick="closeMobileMenu()">${t.nav.projects}</a></li>
            </ul>
            <div class="lang-switch mobile-lang-switch" id="lang-toggle-mobile">
                <div class="toggle-bg"></div>
                <span class="lang-btn active" data-lang="en">EN</span>
                <span class="lang-btn" data-lang="de">DE</span>
            </div>
        </div>
    </div>

    <div class="hero-content">
      <p class="subtitle">${t.hero.subtitle}</p>
      <h1>Nikoleta Papalazarou</h1>
      <div class="cta-buttons">
        <a href="#projects" class="btn btn-outline btn-marquee"><span>${t.hero.ctaWork}</span></a>
        <a href="#contact" class="btn btn-outline btn-marquee"><span>${t.hero.ctaContact}</span></a>
      </div>
    </div>

    <div class="hero-wrapper">
      <div class="sidebar-right">
        <p class="email">nikoletapapa01@hotmail.com</p>
        <div class="social-icons">
           <a class="social-link social-email" href="mailto:nikoletapapa01@hotmail.com" ><img class="email-icon" src="./assets/img/Property 1=Mail.png"></a>
          <a  class="social-link" href="https://github.com/NikolPap" target="_blank"><img class="github-icon" src="./assets/img/Property 1=GitHub.png" alt="github"/></a>
          <a href="https://www.linkedin.com/in/nikoleta-papalazarou-313226366/" target="_blank"  class="social-link"><img class="linkedin-icon" src="./assets/img/Property 1=Linkedin.png" alt="linkedin"/></a>
          <img class="social-vector" src="./assets/img/Vector 1 (1).png" alt="vector"/>
        </div>
      </div>
      <div class="scroll-down">
        <div class="arrow">
          <img class="arrow-img-1" src="./assets/img/Property 1=Bewegung1.png" alt="arrow"/>
          <img class="arrow-img-2" src="./assets/img/Property 1=Bewegung.png" alt="arrow"/>
        </div>
        <div><img class="line" src="./assets/img/Vector 1.png" alt="vector"/></div>
      </div>
    </div>

    <div class="marquee">
      <div class="marquee-content">
        <span>${t.hero.marquee}</span>
        <span>${t.hero.marquee}</span>
      </div>
    </div>
  `;
}