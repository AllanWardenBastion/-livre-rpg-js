const boutonSuivant = document.querySelector("#suivant");
const boutonPrecedent = document.querySelector("#precedent");

boutonSuivant.addEventListener("click", () => {
  console.log("Le joueur tourne la page !");
});

boutonPrecedent.addEventListener("click", () => {
  console.log("Le joueur revient en arriere !");
});
