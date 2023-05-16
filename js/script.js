function generer() {
    var minuscule = "abcdefghijklmnopqrstuvwxyz";
    var majuscule = "ABCDEFGHIJKLMONPQRSTUVWXYZ"
    var chiffre = "0123456789";
    var carspecial = "%!&*^()#$:";
    var monFormulaire = document.forms.ajoutPWD;
    console.log(monFormulaire.nombrecar.value);
    var password = "";
    var listecar = "";
    if (monFormulaire.elements["minuscule"].checked) {
        listecar = listecar + minuscule;
    }
    if (monFormulaire.elements["majuscule"].checked) {
        listecar = listecar + majuscule;
    }
    if (monFormulaire.elements["chiffre"].checked) {
        listecar = listecar + carspecial;
    }
    for (var i  = 1; i <= monFormulaire.elements["nombrecar"].value; i++) {
        var randomNumber = Math.florr(Math.random() * listecar.lenght);
        password = password + listecar.substring(randomNumber, randomNumber + 1);
    }
    console.log(password);
    /*
    var newLine = document.ccreateElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");
    var col5 = document.createElement("td");
    col1.textContent = "val1";
    col2.textContent = "val2";
    col3.textContent = "val3";
    col4.textContent = "val4";
    col5.textContent = "val5";
    newLine.append(col1);
    newLine.append(col2);
    newLine.append(col3);
    newLine.append(col4);
    newLine.append(col5);
    var monTableau = document.getElementById("montab");
    monTableau.appendChild(newLine);
    */

}