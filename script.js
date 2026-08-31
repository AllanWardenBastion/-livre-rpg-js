const boutonSuivant = document.querySelector("#suivant");
const boutonPrecedent = document.querySelector("#precedent");

const pageDroite = document.querySelector(".droite");

boutonSuivant.addEventListener("click", () => {
  pageDroite.classList.add("tourner");
});

boutonPrecedent.addEventListener("click", () => {
  pageDroite.classList.remove("tourner");
});
