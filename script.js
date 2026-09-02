let pageActuelle = 0;
const pages = [
  {
    titre: "Le Royaume perdu",
    texte: "Il etait une fois un jeune aventurier...",
  },

  {
    titre: "Chapitre 1",
    texte: "L'aventurier entra dans la forêt mysterieuse.",
  },

  {
    titre: "La forêt mistérieuse",
    texte: "Un étrange bruit venait des buissons...",
  },

  {
    titre: "Le goblin",
    texte: "Un goblin apparut devant l'aventurier !",
  },
];

console.log(pages[0].titre);
console.log(pages[0].texte);

const boutonSuivant = document.querySelector("#suivant");
const boutonPrecedent = document.querySelector("#precedent");

const pageDroite = document.querySelector(".droite");

const titreGauche = document.querySelector("#titreGauche");

const texteGauche = document.querySelector("#texteGauche");

const titreDroite = document.querySelector("#titreDroite");

const texteDroite = document.querySelector("#texteDroite");

function afficherPages() {
  titreGauche.textContent = pages[pageActuelle].titre;
  texteGauche.textContent = pages[pageActuelle].texte;

  titreDroite.textContent = pages[pageActuelle + 1].titre;
  texteDroite.textContent = pages[pageActuelle + 1].texte;
}
afficherPages();

// BOUTON SUIVANT
boutonSuivant.addEventListener("click", () => {
  pageDroite.classList.add("tourner");

  //console.log(pageDroite.classList);
  pageActuelle += 2;
  afficherPages();
  console.log(pageActuelle);
});

// BOUTON PRECEDENT
boutonPrecedent.addEventListener("click", () => {
  if (pageActuelle > 0) {
    pageDroite.classList.remove("tourner");

    pageActuelle -= 1;
    console.log(pageActuelle);
  }
});
