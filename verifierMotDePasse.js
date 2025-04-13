function verifierMotDePasse() {
  // Récupère la valeur du mot de passe entré par l'utilisateur
  const passwordEntré = document.getElementById("passwordInput").value;

  // Vérifie dans Firestore si le mot de passe est valide
  firebase.firestore().collection("motsDePasseAutorises")
    .where("motdepasse", "==", passwordEntré)
    .where("actif", "==", true)
    .get()
    .then(querySnapshot => {
      if (!querySnapshot.empty) {
        // Le mot de passe est valide
        alert("Mot de passe valide !");
        // Tu peux rediriger vers la page du chat, par exemple
        window.location.href = "chat.html";
      } else {
        // Le mot de passe est incorrect
        alert("Mot de passe invalide !");
      }
    })
    .catch(error => {
      console.error("Erreur lors de la vérification du mot de passe: ", error);
    });
}
