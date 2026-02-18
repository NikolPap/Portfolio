function init() {
    renderHero();
    renderAboutme();
    initializeEventListeners();
    activateOnFirstHover("imageBox", "active");
}

function renderHero() {
    document.getElementById("hero").innerHTML += getheroTemplate();

}


function renderAboutme() {
    document.getElementById("about").innerHTML += getAboutMeTemplate();
}