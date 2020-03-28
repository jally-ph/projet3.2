class Timer {

	constructor() {		

		var timerElt = document.getElementById("timer");
		var date1 = sessionStorage.getItem('date1');
		var date2 = Date.now();
		var diff = Math.round((date2 - date1)/60000);

		//si var min et sec n'existe pas déjà, mais si elles existent, on récup session
		if (sessionStorage.timerMin && sessionStorage.timerSec){
			var min = sessionStorage.timerMin;
			var sec = sessionStorage.timerSec;

		}
		else{
			var min = 20 - diff; //dif ?? nécessaire?
			var sec = 0;
		}
		

		var timer = setInterval(function(){start()}, 1000);

		function start() {

			if (sec <= 0){
				min--;
				sec = 59;
			}

			else{
				sec--;
				//fonctionne pas avec diff car, après 0 on va dans les négatifs. 
			}

			sessionStorage.setItem("timerMin", min);
			sessionStorage.setItem("timerSec", sec);

			if (min <= 0 && sec <= 0){
				//dans localstorage, nom et prénom ne restent pas
				localStorage.removeItem('prenom');
				localStorage.removeItem('nom');
				sessionStorage.removeItem('adresse');
				document.getElementById('zoneTimer').style.display = 'none';
				//document.getElementById('btnConfirm').style.display = 'none';
		

				sessionStorage.removeItem('timerMin');
				sessionStorage.removeItem('timerSec');
				clearInterval(timer);
				
			}

			var textmin = min;
			var textsec = sec;

			if(min<10){
				textmin = "0" + min;
			}
			if(sec<10){
				textsec = "0" + sec;
			}
			timerElt.textContent = textmin + " : " + textsec;

		

		}

		$("#btnNewOrder").click(function(e){
				sessionStorage.removeItem('timerMin');
				sessionStorage.removeItem('timerSec');
				clearInterval(timer);
				
		});

	
	}


	

}



