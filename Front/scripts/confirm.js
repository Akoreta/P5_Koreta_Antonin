if (localStorage.getItem('OrderObject') && localStorage.getItem('Prix payé')) {
    let messageValidation = document.getElementById('messageValidation');
    let resumeCommande = document.getElementById('resumeCommande');
    let sommeTotal = localStorage.getItem('Prix payé')
    let objectBack = localStorage.getItem('OrderObject');
    objectBack = JSON.parse(objectBack);
    let date = new Date;

    messageValidation.innerHTML = `<p>Merci <span> ${objectBack.contact.firstName} ! </span></p><p>Votre commande a été validée </p><p>Vous allez recevoir un e-mail de confirmation avec le récapitulatif de commande</p><p>Nous vous remercions d'avoir effectué vos achats en ligne sur Orinoco.fr</p>`;

    resumeCommande.innerHTML = `<h2>Récapitulatif de commande</h2><div class="d-flex resumeCommande"> <div><p>Numéro de commande : <br> <strong>${objectBack.orderId} </strong></p><p>Date de commande : ${date.toLocaleDateString()}</p><p>Statut : <strong>En cours de traitement</strong></p></div> <div><p>Prénom :<strong> <span>${objectBack.contact.firstName} </span> </strong></p><p>Nom : <strong> ${objectBack.contact.lastName} </strong></p><p>Adresse de livraison : <strong> <span> ${objectBack.contact.address}</span> </strong></p> <p>Ville : <strong>${objectBack.contact.city} </strong></p><p>Prix total : <strong>${sommeTotal} € </strong></p></div></div>`;
} else { history.forward() }