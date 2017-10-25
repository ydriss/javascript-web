/*
Exercice : compter les clics
*/

var boutonClic = document.getElementById("clic");

var desactiver = document.getElementById("desactiver");

function clic(){
	compteurClics++;
	document.getElementById("compteurClics").textContent = compteurClics;	
	}

var compteurClics = 0;

boutonClic.addEventListener("click", clic);

desactiver.addEventListener("click", function () {
	boutonClic.removeEventListener("click", clic);
});
