//initialisation des variables
let scoreJoueur = 0;
let scoreOrdinateur = 0;

function jouer(choixJoueur) {
    const choixOrdinateur = Math.floor(Math.random() * 3) + 1;
    const choixImages = ['images/caillou.png', 'images/feuille.png', 'images/ciseaux.png'];

    document.getElementById("utilisateurChoix").src = choixImages[choixJoueur - 1];
    document.getElementById("choixUtilisateur").style.display = "block"; //afficher choix de l'utilisateur
    document.getElementById("ordinateurChoix").src = choixImages[choixOrdinateur - 1];
    document.getElementById("choixOrdinateur").style.display = "block"; //afficher choix de l'ordinateur

    const resultat = calculerScore(choixJoueur, choixOrdinateur);
    afficherResultat(resultat);
}

function calculerScore(choixJoueur, choixOrdinateur) {
    if (choixJoueur === choixOrdinateur) {
        return "Égalité";
    } else if (
        (choixJoueur === 1 && choixOrdinateur === 3) ||
        (choixJoueur === 2 && choixOrdinateur === 1) ||
        (choixJoueur === 3 && choixOrdinateur === 2)
    ) {
        scoreJoueur += 1;
        return "Victoire de l'utilisateur";
    } else {
        scoreOrdinateur += 1;
        return "Défaite de l'utilisateur";
    }
}

function afficherResultat(resultat) {
    const scoreText = `Joueur: ${scoreJoueur} | Ordinateur: ${scoreOrdinateur}`;
    document.getElementById("score").textContent = scoreText; //afficher le score

    const resultatDialog = document.getElementById("resultatDialog");
    resultatDialog.textContent = resultat;
    document.getElementById("dialog").style.display = "block"; //afficher le resultat
}

function fermerDialog() {
    document.getElementById("dialog").style.display = "none";
}

function reset() {
    scoreJoueur = 0;
    scoreOrdinateur = 0;
    document.getElementById("choixUtilisateur").style.display = "none"; //cacher choix utilisateur
    document.getElementById("choixOrdinateur").style.display = "none"; //cacher choix ordinateur
    document.getElementById("score").textContent = "Joueur: 0 | Ordinateur: 0"; //réinitialiser le score
}
