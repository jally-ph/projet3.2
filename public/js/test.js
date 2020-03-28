class Slider {

	constructor(start, progress, retreat, length){
		this.start = start;
		this.progress = progress;
		this.retreat = retreat;
		this.length = length;
	}







	plusRight(){
			that.slides[that.plus-1].setAttribute("style", "z-index: 1");
		    that.plus++;
		    if (that.plus> that.slides.length) {that.plus = 1}
		    that.slides[that.plus-1].setAttribute("style", "z-index: 2");
		 	pause();
		 	play.setAttribute("style", "z-index: 5");
		}

}


var slider = new Slider(0, progress++, retreat--, 4)
	console.log(slider);
