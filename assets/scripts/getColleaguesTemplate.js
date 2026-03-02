/**
 * Generates the HTML template for the colleagues/reviews section.
 *
 * Uses the current language translations from the `translations` object
 * to populate the title of the section.
 *
 * @returns {string} HTML string representing the colleagues section, including:
 *   - Section title
 *   - Carousel with three review cards (left, center, right)
 *       - Center card shows active review with quote icon
 *       - Side cards show previous/next reviews
 *   - Carousel controls with previous/next buttons and dot indicators
 */
function getColleaguesTemplate() {
    const t = translations[currentLang].colleagues;
    return `
    <div class="colleagues-container">
        <h2 class="colleagues-title">${t.title}</h2>
        <div class="reviews-wrapper">
            <div class="reviews-carousel">
                <!-- Left Card -->
                <div class="review-card side-card" id="card-left">
                    <p class="review-text" id="text-left"></p>
                    <div class="line-author">
                        <div class="review-line"></div>
                        <span class="review-author" id="author-left"></span>
                    </div>
                </div>

                <!-- Center Card -->
                <div class="review-card active-card" id="card-center">
                    <img src="./assets/img/quotes.png" class="quote-icon" alt="quote">
                    <p class="review-text" id="text-center"></p>
                     <div class="line-author">
                        <div class="review-line"></div>
                        <span class="review-author" id="author-center"></span>
                    </div>
                </div>

                <!-- Right Card -->
                <div class="review-card side-card" id="card-right">
                    <p class="review-text" id="text-right"></p>
                    <div class="line-author">
                        <div class="review-line right-line"></div>
                        <span class="review-author" id="author-right"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="controls-container">
            <button class="arrow-btn" onclick="prevReview()">
                <img class="left-hover" src="./assets/img/Property 1=Left.png" alt="Previous">
            </button>
            <div class="dots-container" id="dots-container"></div>
            <button class="arrow-btn right-hover" onclick="nextReview()">
                <img class="right-hover" src="./assets/img/Property 1=right.png" alt="Next">
            </button>
        </div>
    </div>
    `;
}