function getFooterTemplate() {
    const t = translations[currentLang].footer;
    return `
    <div class="footer-wrapper">
        <div class="footer-container">
            <div class="footer-left">
                <img src="./assets/img/logo.png" alt="Logo" class="footer-logo">
                <span class="footer-span">${t.role}</span>
            </div>
            
            <div class="footer-center">
                <p class="copyright-text">${t.copyright}</p>
            </div>

            <div class="footer-right">
                <a  href="https://github.com/NikolPap" target="_blank" class="legal-link">Github</a>
                <a href="https://www.linkedin.com/in/nikoleta-papalazarou-313226366/" target="_blank" class="legal-link">LinkedIn</a>
                <a href="mailto:nikoletapapa01@hotmail.com" class="legal-link">Email</a>
                <a href="legal-notice.html" class="legal-link">${t.legal}</a>
            </div>
        </div>
        <p class="copyright-text2">${t.copyright}</p>
    </div>
    `;
}