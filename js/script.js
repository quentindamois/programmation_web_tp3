//var monFormulaire = document.forms.addPWD;//forms['addPWD'];

console.log("Je suis la console !");
function bienvenue()
{
    alert('Votre formulaire a bien été envoyé');
    //setTimeout(bienvenue(),100);
}
setInterval(bienvenue(),5000);


function generer() {
    var monFormulaire = document.forms.addPWD;//forms['addPWD'];

    console.log(monFormulaire.nombre_caractere.value);
    var newLine = document.createElement("tr");
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
    console.log("tourne")

}


