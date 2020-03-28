

class Form{

	constructor() {
		
		$("#btnReserv").click(function(e){

			//dès qu'on appuie sur reserv, les infos inscrites st mises dans sessionStorage 
			//et LocalStorage
			//et on fait en sorte que leur contenu apparaisse en valeur pour 
			//l'inscription suivante (value = 'ce-qui-est-dans-les-Storage')

			var inputPrenom = document.getElementById("inputPrenom").value;
	 		var inputNom = document.getElementById("inputNom").value;
	 		var inputAdresse = document.getElementById("adresseMapInput").value;

			e.preventDefault();

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

						var canvas = document.getElementById('canvasDiv');
						canvas.style.display = 'block';

						//session storage (dans localstorage nom et prénom ne restent pas)
						localStorage.setItem("prenom", inputPrenom);
						localStorage.setItem("nom", inputNom);
						sessionStorage.setItem("adresse", inputAdresse);
						sessionStorage.setItem("date1", Date.now());
						
						//ancien btn
						document.getElementById('btnReserv').style.display = 'none';

						//timer ::: spanName
						document.getElementById('spanName').textContent = localStorage.prenom + " " + localStorage.nom;
						//spanAdresse
						document.getElementById('spanAdresse').textContent = sessionStorage.adresse;

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

			document.getElementById('btnValid').style.display = 'none';
			document.getElementById('btnNewOrder').style.display = 'block';
			//document.getElementById('btnCancel').style.display = 'block';

		});

		$("#btnNewOrder").click(function(e){
			e.preventDefault();

			//timer à arrêter et à enlever
			
			document.getElementById('zoneTimer').style.display = 'none';
			//document.getElementById('reservConfirm').style.display = 'block';
			document.getElementById('btnNewOrder').style.display = 'none';

			//faudrait que tt disparaisse
			
			document.getElementById('canvasDiv').style.display = 'none';
			//btnRserve revient
			document.getElementById('btnReserv').style.display = 'block';

		})
		
	}




}

