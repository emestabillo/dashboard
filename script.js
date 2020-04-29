const toggle = document.querySelector(".switch");
const body = document.querySelector("body");
const slider = document.querySelector(".slider");
const cards = Array.from(document.querySelectorAll(".card"));
const gray_text = Array.from(
  document.querySelectorAll(
    ".reactions__heading h5, .name, .title h5, .overview__title, .followers p, .attribution a"
  )
);

toggle.addEventListener("change", changeTheme);

function changeTheme() {
  if ((body.style.background = "$color-dark-bg")) {
    body.classList.toggle("light-bg");

    slider.classList.toggle("light-slider");

    for (var i = 0; i < gray_text.length; i++) {
      gray_text[i].classList.toggle("gray-text");
    }

    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.toggle("light-card");
    }
  }
}
