function init() {
    renderHero();
    renderAboutme();
    renderSkills();
    initializeEventListeners();
    activateOnFirstHover("imageBox", "active");
}

function renderHero() {
    document.getElementById("hero").innerHTML += getheroTemplate();

}


function renderAboutme() {
    document.getElementById("about").innerHTML += getAboutMeTemplate();
}

function renderSkills() {
    document.getElementById("skills").innerHTML = getSkillsTemplate();
}