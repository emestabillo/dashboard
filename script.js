const cards = Array.from(document.querySelectorAll(".card"));
const toggle = document.querySelector(".switch");
const slider = document.querySelector(".slider");
const body = document.querySelector("body");

toggle.addEventListener("change", changeTheme);

function changeTheme() {
  if ((body.style.background = "$color-dark-bg")) {
    body.classList.toggle("light-bg");

    slider.classList.toggle("light-slider");

    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.toggle("light-card");
    }
  }
}
