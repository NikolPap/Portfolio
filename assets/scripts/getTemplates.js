function init() {
    renderHero();
    initializeEventListeners();
}

function renderHero() {
    document.getElementById("hero").innerHTML += getheroTemplate();

}