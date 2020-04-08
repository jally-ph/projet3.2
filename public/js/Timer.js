class Timer {

	constructor() {		

		this.timerElt = document.getElementById("timer");

		//si var min et sec n'existe pas déjà, mais si elles existent, on récup session
		if (sessionStorage.timerMin && sessionStorage.timerSec){
			this.min = sessionStorage.timerMin;
			this.sec = sessionStorage.timerSec;
		}
		else{
			this.min = 20; 
			this.sec = 0;
		}

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

		$("#btnNewOrder").click(function(e){
		 	sessionStorage.removeItem('timerMin');
		 	sessionStorage.removeItem('timerSec');
		 	clearInterval(this.timer);
		});


		if (this.min <= 0 && this.sec <= 0){
			localStorage.removeItem('prenom');
			localStorage.removeItem('nom');
			sessionStorage.removeItem('adresse');
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





}



