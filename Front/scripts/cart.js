////-------------------------------- ----------------------- Page panier ----------------------------------------------------------------------------\\\
const urlPostOrder = 'http://localhost:3000/api/cameras/order';
const totalPrixPanier = document.getElementById('totalPrixPanier');
const buttonClearCart = document.getElementById('viderLePanier');
buttonClearCart.style.display = 'none';
let partiePanier = document.getElementById('partiePanierJS');
const form = document.getElementById('formContact');
let prenom = document.getElementById('prenom');
let nom = document.getElementById('nom');
let adresse = document.getElementById('adresse');
let ville = document.getElementById('ville');
let email = document.getElementById('email');
let submitButton = document.getElementById('orderButton');
let erreur = document.getElementById('erreur');
let isOkPrenom = false; // Booléens qui vérifient que chaque champ du formulaire est correctement rempli \\ 
let isOkNom = false;
let isOkAdresse = false;
let isOkVille = false;
let isOkEmail = false;
let formOk = false;
let nameReg = new RegExp(/^[a-z,-,é,è,.'-\s]+$/i); // Lettres et quelques caractères spéciaux \\
let AdresseReg = new RegExp(/^[a-z,-,é,è,{0-9},.'-\s]+$/i); // Chiffres/Lettres et quelques caractères spéciaux \\ 
let emailReg = new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i); // Regex Email \\
let products = [] // Tableau vide qui va recevoir les id du panier \\
let LocalPanierJson = localStorage.getItem('Mon panier');
let localPanierJs = JSON.parse(LocalPanierJson);
let persoValue = localStorage.getItem('Perso');
persoValue = JSON.parse(persoValue);
let sommeTotal = 0; // Variable qui va recevoir le total du prix à payé \\ 

function vuePanier() { // Fonction qui affiche le contenu du panier \\ 
    let totalProduitPanier = Object.keys(localPanierJs).length;
    buttonClearCart.style.display = 'initial';

    buttonClearCart.addEventListener('click', function() {
        clearCart();
    })

    for (let i = 0; i < totalProduitPanier; i++) {
        partiePanier.innerHTML += ' <div class=" card-body panierCardBody familyRaleway slide-in-top col-12 border "><div class=" presentationProduit"><h4> <span class="nameProduitPanier "> <a href= "produit.html?product=' + localPanierJs[i]._id + ' ">' + localPanierJs[i].name + '</a></span><br> <span class="sousTitreProduitPanier"> <span class="idProduitPanier">' + persoValue[i] + ' </span> <br></span> </h4><p>(' + localPanierJs[i]._id + ')</p></div><div class="partiePrixProduit"><p id="prixProduitPanier"> ' + localPanierJs[i].price / 100 + ' €</p> <i  class="fas fa-trash-alt" id="deleteButton" onclick="deleteItem(' + i + ')"></i></div></div>';
    }

    for (let i = 0; i < totalProduitPanier; i++) {
        sommeTotal = sommeTotal + localPanierJs[i].price / 100;
        totalPrixPanier.textContent = sommeTotal + ' €';
        products.push(localPanierJs[i]._id);
    }
}

function deleteItem(index) { // Fonction qui retire un produit du panier \\ 
    let totalProduitPanier = Object.keys(localPanierJs).length;
    localPanierJs.splice([index], 1);
    products.splice([index], 1);
    persoValue.splice([index], 1);
    localStorage.setItem('Perso', JSON.stringify(persoValue));
    localStorage.setItem('Mon panier', JSON.stringify(localPanierJs))
    if (totalProduitPanier === 1) {
        clearCart();
    }
    location.reload();
}

function clearCart() { // Fonction qui vide le panier entièrement \\
    localStorage.removeItem('Mon panier');
    localStorage.removeItem('Perso');
    location.reload();
}

function errorAnim(partForm) { // Fonction d'animation d'erreur \\ 
    partForm.classList.add('errorAnim');
    partForm.style.borderColor = 'red';
}

// Fonctions qui vérifient que chaque champ du formulaire respecte les regexs ci-dessus \\
function prenomVerif() {
    if (prenom.value.length >= 2 && prenom.value.length <= 30 && nameReg.test(prenom.value) === true) {
        isOkPrenom = true;
        prenom.style.borderColor = 'green';
    } else {
        errorAnim(prenom);
        isOkPrenom = false;
    }
}

function nomVerif() {
    if (nom.value.length >= 2 && nom.value.length <= 30 && nameReg.test(nom.value) === true) {
        isOkNom = true;
        nom.style.borderColor = 'green';
    } else {
        errorAnim(nom);
        isOkNom = false;
    }
}


function adresseVerif() {
    if (adresse.value.length > 2 && adresse.value.length <= 30 && AdresseReg.test(adresse.value) === true) {
        isOkAdresse = true;
        adresse.style.borderColor = 'green';
    } else {
        errorAnim(adresse);
        isOkAdresse = false;
    }
}

function villeVerif() {
    if (ville.value.length >= 2 && ville.value.length <= 30 && nameReg.test(ville.value) === true) {
        isOkVille = true;
        ville.style.borderColor = 'green';
    } else {
        isOkVille = false;
        errorAnim(ville);
    }
}

function mailVerif() {
    if (email.value.length > 2 && email.value.length <= 40 && emailReg.test(email.value) === true) {
        isOkEmail = true;
        email.style.borderColor = 'green';
    } else {
        errorAnim(email);
        isOkEmail = false;
    }
}
// A chaque fois que l'utilisateur modifie la valeur du champ on vérifie en utilisant les fonctions ci-dessus \\
prenom.addEventListener('change', function() {
    prenomVerif();
})

nom.addEventListener('change', function() {
    nomVerif();
})

adresse.addEventListener('change', function() {
    adresseVerif();
})

ville.addEventListener('change', function() {
    villeVerif();
})

email.addEventListener('change', function() {
    mailVerif();
})

function sendData(dataOne, url) { // Fonction qui envoie les données au serveur \\
    let paramFetch = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(dataOne)
    }

    fetch(url, paramFetch)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem('OrderObject', JSON.stringify(res)); // Rajout au localStorage des informations de la commande \\
            localStorage.setItem('Prix payé', sommeTotal);
            clearCart();
            document.location.href = 'confirmation.html?orderId=' + res.orderId; // Rajout de l'orderID dans les paramètres de l'URL \\
        })
}

let dataPostObject = { // Objet qu'on enverra au serveur \\ 
    contact: {},
    products: products
}

form.addEventListener('submit', function(e) { // Si les champs sont correctement remplis & le panier est rempli on envoie l'objet dataPostObject au serveur \\ 
    if (isOkPrenom === true && isOkNom === true && isOkAdresse === true && isOkVille === true && isOkEmail === true && localStorage.getItem('Mon panier') !== null) {
        dataPostObject.contact = {
            firstName: prenom.value,
            lastName: nom.value,
            address: adresse.value,
            city: ville.value,
            email: email.value
        }
        dataPostObject.products = products;
        e.preventDefault();
        sendData(dataPostObject, urlPostOrder);
    } else if (localStorage.getItem('Mon panier') === null && isOkPrenom === true && isOkNom === true && isOkAdresse === true && isOkVille === true && isOkEmail === true) {
        e.preventDefault();
        erreur.textContent = 'Votre panier est vide';
    } else {
        e.preventDefault();
        erreur.textContent = 'Remplissez correctement le formulaire';

    }
})




// Si le panier est vide informe le à l'utilisateur \\
if (localStorage.getItem('Mon panier') === null) {
    totalPrixPanier.style.fontSize = '1.3rem';
    totalPrixPanier.textContent = 'Aucun article dans le panier';
    buttonClearCart.style.display = 'none';
} else { // sinon affiche les produits du panier \\
    vuePanier()
}

localStorage.removeItem('OrderObject'); // On retire les informations de contact après confirmation de commande \\ 
localStorage.removeItem('Prix payé');