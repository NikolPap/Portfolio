function init() {
    renderHero();
    renderAboutme();
    renderSkills();
    renderProjects();
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

function renderProjects() {
    document.getElementById("projects").innerHTML = getProjectsTemplate();
}