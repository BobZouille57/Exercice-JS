let scoreJoueur = 0;
let scoreOrdinateur = 0;

function jouer(choixJoueur) {
    const choixOrdinateur = Math.floor(Math.random() * 3) + 1;
    const choixImages = ['images/caillou.png', 'images/feuille.png', 'images/ciseaux.png'];

    document.getElementById("utilisateurChoix").src = choixImages[choixJoueur - 1];
    document.getElementById("choixUtilisateur").style.display = "block";
    document.getElementById("ordinateurChoix").src = choixImages[choixOrdinateur - 1];
    document.getElementById("choixOrdinateur").style.display = "block";

    const resultat = calculerScore(choixJoueur, choixOrdinateur);
    afficherResultat(resultat);
}

function calculerScore(choixJoueur, choixOrdinateur) {
    const utilisateurIcon = document.getElementById("utilisateurResultatIcon");
    const ordinateurIcon = document.getElementById("ordinateurResultatIcon");

    utilisateurIcon.textContent = "";
    ordinateurIcon.textContent = "";

    if (choixJoueur === choixOrdinateur) {
        utilisateurIcon.textContent = "=";
        ordinateurIcon.textContent = "=";
        return "Égalité";
    } else if (
        (choixJoueur === 1 && choixOrdinateur === 3) ||
        (choixJoueur === 2 && choixOrdinateur === 1) ||
        (choixJoueur === 3 && choixOrdinateur === 2)
    ) {
        scoreJoueur += 1;
        utilisateurIcon.textContent = "✔️";
        ordinateurIcon.textContent = "❌";
        return "Victoire de l'utilisateur";
    } else {
        scoreOrdinateur += 1;
        utilisateurIcon.textContent = "❌";
        ordinateurIcon.textContent = "✔️";
        return "Défaite de l'utilisateur";
    }
}

function afficherResultat(resultat) {
    const scoreText = `Joueur: ${scoreJoueur} | Ordinateur: ${scoreOrdinateur}`;
    document.getElementById("score").textContent = scoreText;

    const resultatDialog = document.getElementById("resultatDialog");
    resultatDialog.textContent = resultat;
    setTimeout(() => {
        document.getElementById("dialog").style.display = "block";
    }, 3000);
}

function fermerDialog() {
    document.getElementById("dialog").style.display = "none";
}

function reset() {
    scoreJoueur = 0;
    scoreOrdinateur = 0;
    document.getElementById("choixUtilisateur").style.display = "none";
    document.getElementById("choixOrdinateur").style.display = "none";
    document.getElementById("score").textContent = "Joueur: 0 | Ordinateur: 0";
}
