console.log("Je suis la console !");
function bienvenue()
{
    alert('Votre formulaire a bien été envoyé');
    setTimeout(bienvenue(),100);
}
setInterval(bienvenue(),5000);
