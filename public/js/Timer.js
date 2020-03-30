class Timer {

	constructor() {		

		this.timerElt = document.getElementById("timer");
		// this.date1 = sessionStorage.getItem('date1');
		// this.date2 = Date.now();
		// this.diff = Math.round((this.date2 - this.date1)/60000);

		//si var min et sec n'existe pas déjà, mais si elles existent, on récup session
		if (sessionStorage.timerMin && sessionStorage.timerSec){
			this.min = sessionStorage.timerMin;
			this.sec = sessionStorage.timerSec;

		}
		else{
			this.min = 1; //-diff ?? nécessaire?
			this.sec = 0;
		}

		// let that = this;
		// this.timer = setInterval(function(){that.start()}, 1000);

	}


	start() {

		if (this.sec <= 0){
			this.min--;
			this.sec = 59;
		}

		else{
			this.sec--;
		}

		sessionStorage.setItem("timerMin", this.min);
		sessionStorage.setItem("timerSec", this.sec);

		// auparavant dans le form.js
		$("#btnNewOrder").click(function(e){

		 	sessionStorage.removeItem('timerMin');
		 	sessionStorage.removeItem('timerSec');
		 	clearInterval(this.timer);			
		});


		if (this.min <= 0 && this.sec <= 0){
			//dans localstorage, nom et prénom ne restent pas
			// localStorage.removeItem('prenom');
			// localStorage.removeItem('nom');
			// sessionStorage.removeItem('adresse');
			document.getElementById('zoneTimer').style.display = 'none';
			
			sessionStorage.removeItem('timerMin');
			sessionStorage.removeItem('timerSec');
			clearInterval(this.timer);
			
		}

		
		var textmin = this.min;
		var textsec = this.sec;

		if(this.min<10){
			textmin = "0" + this.min;
		}
		if(this.sec<10){
			textsec = "0" + this.sec;
		}
		this.timerElt.textContent = textmin + " : " + textsec;

	}

	setTimer() {
		let that = this;
		this.timer = setInterval(function(){that.start()}, 1000);
	}

	// stopTimer() {
	// 	clearInterval(this.timer);
	// }





}



