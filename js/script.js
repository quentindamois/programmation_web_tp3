console.log("Je suis la console !");
function bienvenue()
{
    alert('Votre formulaire a bien été envoyé');
    //setTimeout(bienvenue(),100);
}
setInterval(bienvenue(),5000);




function generer() {
    var minuscule = "abcdefghijklmnopqrstuvwxyz";
    var majuscule = "ABCDEFGHIJKLMONPQRSTUVWXYZ"
    var chiffre = "0123456789";
    var carspecial = "%!&*^()#$:";
    var monFormulaire = document.forms.ajoutPWD;//forms['addPWD'];
    //console.log(monFormulaire.nombre_caractere.value);
    var password = "";
    var listecar = "";
    do {
    password = "";
    listecar = "";
    if (monFormulaire.elements["minuscule"].checked) {
        listecar = listecar + minuscule;
    }
    if (monFormulaire.elements["majuscule"].checked) {
        listecar = listecar + majuscule;
    }
    if (monFormulaire.elements["chiffre"].checked) {
        listecar = listecar + chiffre;
    }
    if (monFormulaire.elements["symbole"].checked) {
        listecar = listecar + carspecial;
    }
    //console.log(listecar.lenght);
    for (var i  = 1; i <= monFormulaire.elements["number"].value; i++) {
        var randomNumber = Math.floor(Math.random() * listecar.length);
        password = password + listecar.substring(randomNumber, randomNumber + 1);
    }
    } while(((password.match(/a-z/) != null) || ! monFormulaire.elements["minuscule"].checked) && ((password.match(/A-Z/) != null) || ! monFormulaire.elements["majuscule"].checked) && ((password.match(/0-9/) != null) || ! monFormulaire.elements["chiffre"].checked) && ((password.match(/!|[#-\&]|[\(-\+]|\^|:/) != null) || !monFormulaire.elements["symbole"].checked));
    console.log(password);
}

    



