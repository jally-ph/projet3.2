
if (localStorage.prenom && localStorage.nom ){
	document.getElementById("inputPrenom").value = localStorage.prenom;
	document.getElementById("inputNom").value = localStorage.nom;
}

if (sessionStorage.adresse){
	document.getElementById("adresseMap").textContent = sessionStorage.adresse;
	document.getElementById("adresseMapInput").value = sessionStorage.adresse;
}

$("#btnReserv").click(function(e){

	e.preventDefault();

	var inputPrenom = document.getElementById("inputPrenom").value;
	var inputNom = document.getElementById("inputNom").value;
	var inputAdresse = document.getElementById("adresseMapInput").value;

	var errorPrenom = document.getElementById("zoneErrorPrenom");
	var errorNom = document.getElementById("zoneErrorNom");
	var errorAdresse = document.getElementById("zoneErrorAdresse");
	
	
	//ERRORS
	if (inputAdresse === ''){
		errorAdresse.textContent = 'Champ adresse vide';
	}
	else {
		errorAdresse.textContent = '';
	}

	if (inputNom ==='' || inputNom == null){	
		errorNom.textContent = 'Champ nom vide';
	}

	else {
		errorNom.textContent = '';
	}

	if (inputPrenom === '' || inputPrenom == null){	
		errorPrenom.textContent = 'Champ prénom vide';
	}

	else {
		errorPrenom.textContent = '';
	}

	
	if (!(inputNom ==='' || inputNom == null) && !(inputPrenom === '' || inputPrenom == null)){
		
		var reg = /\s|\n|\d|&|\[|\]|\(|\)|\{|\}|\#|@|=|\+|°|\$|£|¤|%|µ|§|!|:|\/|\\|;|\.|,|\?|<|>|²|\*/;
		var testNom = inputNom.match(reg);
		var testPrenom = inputPrenom.match(reg);
		

		if (testNom !== null || testPrenom !== null){
			errorNom.textContent = 'Champ nom ou prénom invalide : vérifier que des espaces ou des caractères spéciaux ne soient pas contenus dans votre saisie.';
		}

		if (testNom == null && testPrenom == null && inputAdresse !== ''){

			if (inputNom.length > 2 && inputPrenom.length > 2) {

				var canvasDiv = document.getElementById('canvasDiv');
				canvasDiv.style.display = 'block';

				//session storage (dans localstorage nom et prénom ne restent pas)
				localStorage.setItem("prenom", inputPrenom);
				localStorage.setItem("nom", inputNom);
				sessionStorage.setItem("adresse", inputAdresse);
				
				//ancien btn
				document.getElementById('btnReserv').style.display = 'none';
				//timer ::: spanName
				document.getElementById('spanName').textContent = localStorage.prenom + " " + localStorage.nom;
				//spanAdresse
				document.getElementById('spanAdresse').textContent = sessionStorage.adresse;
				//message
				document.getElementById('derniereEtape').style.opacity = 1;

				// disabled les input 
				document.getElementById('inputNom').setAttribute('disabled', 'disabled');
				document.getElementById('inputPrenom').setAttribute('disabled', 'disabled');
				document.getElementById('adresseMap').style.display = 'none';
				var newPAdress = document.getElementById('adresseMapConfirmed');
				newPAdress.innerHTML = sessionStorage.adresse;

			}
			else{
				errorNom.textContent = 'Votre nom ou prénom est trop court (3 caractères minimum)';
			}

		}
		
	}

});

$("#btnValid").click(function(e){
	e.preventDefault();
	document.getElementById('zoneTimer').style.display = 'block';
	
	var timer = new Timer();
	timer.setTimer();
	
	document.getElementById('btnValid').style.display = 'none';
	document.getElementById('clearCanvas').style.display = 'none';
	document.getElementById('btnNewOrder').style.display = 'block';
	document.getElementById('btnValidFinal').style.display = 'block';
	
});



$("#btnNewOrder").click(function(e){

	document.getElementById('zoneTimer').style.display = 'none';
	document.getElementById('btnNewOrder').style.display = 'none';
	document.getElementById('canvasDiv').style.display = 'none';
	document.getElementById('btnReserv').style.display = 'block';
	document.getElementById('adresseMap').style.display = 'block';
	document.getElementById('inputNom').removeAttribute('disabled');
	document.getElementById('inputPrenom').removeAttribute('disabled');

});

$("#btnValidFinal").click(function(e){
	e.preventDefault();

	document.getElementById('zoneTimer').style.display = 'none';
	document.getElementById('btnNewOrder').style.display = 'none';
	document.getElementById('canvasDiv').style.display = 'none';
	document.getElementById('derniereEtape').style.display = 'none';
	document.getElementById('reservConfirm').style.display = 'block';
	document.getElementById('btnValidFinal').style.display = 'none';

	//timer ::: spanName
	document.getElementById('spanName2').textContent = localStorage.prenom + " " + localStorage.nom;
	//spanAdresse
	document.getElementById('spanAdresse2').textContent = sessionStorage.adresse;

});


