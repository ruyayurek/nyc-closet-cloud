const saveButtons = document.querySelectorAll(".save-btn");

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
.save-btn.saved {
    background: #d8d4f2;
    color: #2b2b2b;
}