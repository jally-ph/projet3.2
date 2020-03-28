class Diapo {



	constructor(slides){
		
		this.slides = slides;
		this.plus = -1;
		this.x;
		var play = document.getElementById("play");
	}
	
	

	change(){

		if(this.plus <3) {
			this.plus++;
		} else {
			this.plus = 0;
		}
		
		for (let i = 0; i < this.slides.length; i++) {
			this.slides[i].setAttribute("style", "z-index: 1");
		}

		this.slides[this.plus].setAttribute("style", "z-index: 2");
		let that = this;
		this.x = setTimeout(function(){that.change()}, 5000); 
	}

	pause(){
		clearTimeout(this.x);
	}

	plusRight(){
		this.slides[this.plus-1].setAttribute("style", "z-index: 1");
		this.plus++;
		if (this.plus> this.slides.length) {this.plus = 1}
			this.slides[this.plus-1].setAttribute("style", "z-index: 2");
		this.pause();
		play.setAttribute("style", "z-index: 5");
	}

	plusLeft(){
		this.slides[this.plus-1].setAttribute("style", "z-index: 1");
		this.plus--;
		if (this.plus<1) {this.plus=4}
			this.slides[this.plus-1].setAttribute("style", "z-index: 2");
		this.pause();
		play.setAttribute("style", "z-index: 5");
	}

}












