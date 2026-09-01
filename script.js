let pageActuelle = 0;

const boutonSuivant = document.querySelector("#suivant");
const boutonPrecedent = document.querySelector("#precedent");

const pageDroite = document.querySelector(".droite");

boutonSuivant.addEventListener("click", () => {
  pageDroite.classList.add("tourner");

  console.log(pageDroite.classList);
});

boutonPrecedent.addEventListener("click", () => {
  pageDroite.classList.remove("tourner");
});
