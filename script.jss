cconst saveButtons = document.querySelectorAll(".save-btn");
const searchInput = document.querySelector(".search-box input");
const lookCards = document.querySelectorAll(".look-card");
const resultCount = document.querySelector(".result-count");
const favoriteCount = document.getElementById("favorite-count");

let favorites = 0;

saveButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("saved");

        if (button.classList.contains("saved")) {

            button.textContent = "♥ Saved";
            favorites++;

        } else {

            button.textContent = "♡ Save";
            favorites--;

        }

        favoriteCount.textContent = favorites;

    });

});

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();

    let visibleCards = 0;

    lookCards.forEach(card => {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchValue)) {

            card.style.display = "block";
            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });

    resultCount.textContent =
        `Showing ${visibleCards} curated looks`;

});
const favoriteCount = document.getElementById("favorite-count");
let favorites = 0;

saveButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("saved");

        if (button.classList.contains("saved")) {
            favorites++;
            button.textContent = "♥ Saved";
        } else {
            favorites--;
            button.textContent = "♡ Save";
        }

        favoriteCount.textContent = favorites;

    });

});