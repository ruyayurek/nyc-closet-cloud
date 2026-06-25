const saveButtons = document.querySelectorAll(".save-btn");
const searchInput = document.querySelector(".search-box input");
const lookCards = document.querySelectorAll(".look-card");
const resultCount = document.querySelector(".result-count");

saveButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("saved");

        if (button.classList.contains("saved")) {
            button.textContent = "♥ Saved";
        } else {
            button.textContent = "♡ Save";
        }
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

    resultCount.textContent = `Showing ${visibleCards} curated looks`;
});