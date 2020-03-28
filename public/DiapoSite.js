class Diapo {



	constructor(){
		this.plus = 0;
		this.slides = document.getElementsByClassName("sliderImg");
		this.x;

		let that = this;
		let play = document.getElementById("play");

		//créer fonct° pause
		function pause(){
			clearTimeout(that.x);
			console.log("function Pause! 🤩");
		}

		function plusRight(){
			that.slides[that.plus-1].setAttribute("style", "z-index: 1");
		    that.plus++;
		    if (that.plus> that.slides.length) {that.plus = 1}
		    that.slides[that.plus-1].setAttribute("style", "z-index: 2");
		 	pause();
		 	play.setAttribute("style", "z-index: 5");
		}

		function plusLeft(){
			that.slides[that.plus-1].setAttribute("style", "z-index: 1");
		    that.plus--;
		   	if (that.plus<1) {that.plus=4}
		    that.slides[that.plus-1].setAttribute("style", "z-index: 2");
			pause();
			play.setAttribute("style", "z-index: 5");
		}

		//chevrons
		if ($("#chevronRight").click(function(){
		    plusRight();
		    console.log("chevronRight Ok!");
		  }));
		 
		
		if ($("#chevronLeft").click(function(){
		 	plusLeft();
		    console.log("chevronLeft Ok!");
		 
		}));

		

		//avec clavier
		document.addEventListener("keydown", function(event) {
		 	if (event.which===39){
			   	plusRight();
			    console.log("FlècheLeft Ok!");
		  	}

		  	if (event.which===37){
		     	plusLeft();
		     	console.log("FlècheRight Ok!");
		  	}
		  
		});

		this.change();

		if (this.plus> this.slides.length) {this.plus = 1;}
		this.slides[this.plus-1].setAttribute("style", "z-index: 2");
		

		//pause & play
		if ($("#play").click(function() { 
		    play.setAttribute("style", "z-index: 3");
		    that.change();
		    console.log("Play Ok!");
		}));

		if ($("#pause").click(function(){
			pause();
		    play.setAttribute("style", "z-index: 5");
		    console.log("Pause Ok!");
		}));

	}

	change(){
		let that = this;

		if(this.plus <3){
			this.plus++;
		} else {
			this.plus = 0;
		}
		
		for (let i = 0; i < this.slides.length; i++) {
		    this.slides[i].setAttribute("style", "z-index: 1");
		}

		this.slides[this.plus].setAttribute("style", "z-index: 2");
		//plus++;
		this.x = setTimeout(function(){that.change()}, 5000); 
	}


		
}



	  

	

	

	


