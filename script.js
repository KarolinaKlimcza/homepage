let howMuch = document.querySelector(".howMuch");
let metraz = document.querySelector(".metraz").innerText;

howMuch.innerText =
  metraz === "100m" || metraz === "90m"
    ? "duża"
    : metraz === "80m" || metraz === "70m"
    ? "umiarkowana"
    : "niska";

let button2 = document.querySelector(".button2");
let nawigator = document.querySelector(".nawigator");

button2.addEventListener("click", () => {
  nawigator.classList.toggle("innykolornawigator");
});

let button = document.querySelector(".button");
let TrescGlowna = document.querySelector(".TrescGlowna");

button.addEventListener("click", () => {
  TrescGlowna.classList.toggle("ciemny");
  if (TrescGlowna.classList.contains("ciemny")) {
    button.innerText = "Czarny";
  } else button.innerText = "Crimson";
});
