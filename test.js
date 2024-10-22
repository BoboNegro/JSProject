
function listerLivres(bibliotheque) {
    if (!Array.isArray(bibliotheque) || bibliotheque.length === 0) {
        console.log("La bibliothèque est vide ou non valide.");
        return;
    }

    console.log("Liste des livres dans la bibliothèque :");
    bibliotheque.forEach((livre, index) => {
        console.log(`${index + 1}. ${livre.titre} par ${livre.auteur}`);
    });
}


const bibliotheque = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry" },
    { titre: "1984", auteur: "George Orwell" },
    { titre: "Moby Dick", auteur: "Herman Melville" },
    { titre: "L'Étranger", auteur: "Albert Camus" }
];


listerLivres(bibliotheque);
