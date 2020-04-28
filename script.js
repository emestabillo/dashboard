const cards = Array.from(document.querySelectorAll(".card"));
const toggle = document.querySelector(".switch");
const slider = document.querySelector(".slider");
const body = document.querySelector("body");
// const overview = document.querySelector(".overview__title");
const ary = Array.from(document.querySelectorAll("h5, p"));

toggle.addEventListener("change", changeTheme);

function changeTheme() {
  if ((body.style.background = "$color-dark-bg")) {
    body.classList.toggle("light-bg");

    slider.classList.toggle("light-slider");

    // overview.classList.toggle("gray-text");
    for (var i = 0; i < ary.length; i++) {
      ary[i].classList.toggle("gray-text");
    }

    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.toggle("light-card");
    }
  }
}
