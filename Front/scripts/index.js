const urlGetAll = 'http://localhost:3000/api/cameras/';
let parametresFetch = {
    method: 'GET',
    redirect: 'follow'
};
let containerTitleErreur = document.getElementById('containerTitleErreur');
let sousTitreErreur = document.getElementById('sousTitreErreur');

function fetchRequeteAccueil(url) { // Fonction qui va faire une requete à l'API et afficher la liste du catalogue \\
    fetch(url, parametresFetch)
        .then(response => {
            if (response.ok) {
                return response.text();
            } else if (response.status === 404) {
                Promise.reject(response.status);
                containerTitleErreur.innerHTML = 'Erreur ' + response.status;
                sousTitreErreur.innerHTML = ' Aucune ressource n\'a été trouvée';
            } else {
                containerTitleErreur.innerHTML = 'Erreur ' + response.status;
            }
        })
        .then(result => {
            //   Conversion de la reponse JSON en objet Javascript \\
            let reponseAPI = JSON.parse(result);
            let nbCamera = Object.keys(reponseAPI).length;
            let catalogueProduit = document.getElementById('catalogueProduit');

            // Création de cartes pour chaque produits \\ 
            for (let i = 0; i < nbCamera; i++) {
                catalogueProduit.innerHTML += ' <div class="card col-12 col-lg-2 produits"><div class="card-body " id="produit1Accueil"><a href="produit.html?product=' + reponseAPI[i]._id + '"> <img src="' + reponseAPI[i].imageUrl + '" class="card-img" id="img1Accueil"><h5 id="titreAccueil1">' + reponseAPI[i].name + '</h5> <p id="descriptionAccueil">' + reponseAPI[i].description + ' </p><hr><p id="prixAccueil1">' + reponseAPI[i].price / 100 + ' €</p> <button type="button " class="btn btn-primary btn-md">Commander</button> </a></div></div>'
            }
        })
        .catch(error => console.log(error)); // En cas d'erreurs affiche la dans la console \\ 

    if (localStorage.getItem('Mon panier') === null) {} else { // Si le panier n'est pas vide on affiche le nombre de produits présent dans le header \\  
        const LocalPanierJson = localStorage.getItem('Mon panier');
        const localPanierJs = JSON.parse(LocalPanierJson);
        let cartHeaderNumber = document.getElementById('panierHeaderNumber');
        let objectCart = {
            panier: localPanierJs
        }
        let totalProduitPanier = Object.keys(objectCart.panier).length;
        cartHeaderNumber.innerHTML = '(' + totalProduitPanier + ')';
    }
}

fetchRequeteAccueil(urlGetAll);

localStorage.removeItem('OrderObject'); // On retire les informations de contact après confirmation de commande \\ 
localStorage.removeItem('Prix payé');