////-------------------------------- -----------------------Page dynamique--------------------------------------------------------------------------\\\
const urlGetAll = 'http://localhost:3000/api/cameras/';
let paramsUrl = window.location.search;
paramsUrl = paramsUrl.substr(9); // On récupère l'id des paramètres URL après 'product='
let carteDynamique = document.getElementById('carteDynamique');
let parametresFetch = {
    method: 'GET',
    redirect: 'follow'
};

function fetchRequeteDynamique(url) { // Fonction qui récupère les caméras disponibles dans l'api \\ 
    fetch(url, parametresFetch)
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                Promise.reject(response.status);
                carteDynamique.innerHTML = `<h1 class="jumbotron">Erreur ${response.status}</h1>`;
            }
        })
        .then(result => {
                let tableauCameraApi = JSON.parse(result);
                let date = new Date();
                let dateActuel = date.toLocaleDateString();

                function changeCard(urlImage, nom, description, price) { // Fonction qui affiche le produit lié à l'ID passé dans les paramètres de l'URL \\
                    let ancienPrix = price * 1.2;
                    ancienPrix = Math.round(ancienPrix);
                    carteDynamique.innerHTML = `<div class="container-fluid containerProduits"><div class="col-md-5 col-12"><div class=" "> <img class="card-img-top imgProduct" src="${urlImage}" alt="Card image cap"><div class="card-body"><h4 class="card-title text-center"><a>${nom}</a></h4>  <p class="card-text" id="descriptionProduit1">${description} </p> <select class="custom-select" name="" id="choixLense"><option value="cart null">Choisissez la lentille</option></select></div> <div class ="priceProduit"><p><span id='fakePrice'> ${ancienPrix}€</span> &nbsp;${price}€  </p> </div> </div> </div><div class="col-md-7 col-12 descriptionProduits"><h2 style="font-weight:bold;" id="produit1Title"> <span id='titreProduitVueProduit'>${nom} </span> -  Modèle vintage</h2> <hr> <h3 class ="text-success livraison livraisonTitre" >Produit en stock</h3><p class ="livraison">Livraison offerte et possible en 2-3 jours ouvrés (${dateActuel}) </p><p class = "livraison"><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;En point relais ou chez vous</p><ul class="list-unstyled"><li><i class="fas fa-caret-right"></i> &nbsp;  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, rem. A sapiente saepe libero sunt quas assumenda blanditiis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, ducimus. Sapiente repellendus velit aliasvoluptatibus ipsam, quae ducimus minima minus mollitia consequatur ab corrupti, magni maxime iusto necessitatibus. Autem, voluptatem.</li><li><i class="fas fa-caret-right"></i> &nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, rem. A sapiente saepe libero sunt quas assumenda blanditiis</li><li><i class="fas fa-caret-right"></i> &nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, rem. A sapiente saepe libero sunt quas assumenda blanditiis</li></ul><button id="addCart" class="btn btn-success" type="submit"><i class="fas fa-shopping-cart"></i>  &nbsp;Ajouter au panier</button><p id='persoNullMessage'></p></div> </div>`;
                }


                for (let i = 0; i < tableauCameraApi.length; i++) { // Boucle qui affiche le produit et le nombre de personnalisations disponibles  \\
                    if (paramsUrl === tableauCameraApi[i]._id) {
                        changeCard(tableauCameraApi[i].imageUrl, tableauCameraApi[i].name, tableauCameraApi[i].description, tableauCameraApi[i].price / 100);
                        let selectId = document.getElementById('choixLense');
                        let nombreLentille = tableauCameraApi[i].lenses.length;
                        for (let x = 0; x < nombreLentille; x++) {
                            selectId.innerHTML += '<option>' + tableauCameraApi[i].lenses[x] + '</option>';
                        }
                    }
                }

                let choixLentille = document.getElementById('choixLense');
                let addCartButton = document.getElementById('addCart');
                let monPanierLink = document.getElementById('monPanierLink');
                let persoNullMessage = document.getElementById('persoNullMessage');

                // Fonction qui rajoute au localStorage un objet produit \\ 
                function addToLocal(wichNameKey, wichProduct) {
                    let product = JSON.parse(localStorage.getItem(wichNameKey) || '[]');
                    product.push(wichProduct);
                    localStorage.setItem(wichNameKey, JSON.stringify(product));
                }

                // Fonction qui affiche le nombre de produits dans le panier pour le header \\ 
                function numberIncart() {
                    const LocalPanierJson = localStorage.getItem('Mon panier');
                    const localPanierJs = JSON.parse(LocalPanierJson);
                    let cartHeaderNumber = document.getElementById('panierHeaderNumber');
                    let totalProduitPanier = localPanierJs.length;
                    cartHeaderNumber.innerHTML = `(${totalProduitPanier})`;
                }


                if (localStorage.getItem('Mon panier') !== null) {
                    numberIncart();
                }

                addCartButton.addEventListener('click', function() {
                    function getId() { // Fonction qui prend en compte l'ID dans les paramètres et recoit en réponse un objet produit \\ 
                        var requestOptions = {
                            method: 'GET',
                            redirect: 'follow'
                        };
                        fetch(urlGetAll + paramsUrl, requestOptions)
                            .then(response => response.text())
                            .then(result => {
                                addToLocal('Mon panier', JSON.parse(result)); // Rajoute au localStorage la réponse recue \\
                                addToLocal('Perso', choixLentille.value);
                                numberIncart();
                            })
                            .catch(error => console.log('error', error));
                    }

                    // Si aucune personnalisation n'est choisi, alerte l'utilisateur \\  
                    if (choixLentille.value === 'cart null') {
                        persoNullMessage.textContent = 'Choisissez la lentille';
                    } else {
                        persoNullMessage.textContent = '';
                        monPanierLink.style.animation = 'pulsate-fwd .5s ease-in-out both';
                        getId();
                    }
                })


            }



        )
        .catch(error => console.log(error));
}

fetchRequeteDynamique(urlGetAll);


localStorage.removeItem('OrderObject'); // On retire les informations de contact après confirmation de commande \\ 
localStorage.removeItem('Prix payé');