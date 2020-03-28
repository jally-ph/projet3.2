class Canvas {

	constructor(canvas, ctx, drawing, mousePos, lastPos){

		window.requestAnimFrame = (function(callback) {
		    return window.requestAnimationFrame ||
		      window.webkitRequestAnimationFrame ||
		      window.mozRequestAnimationFrame ||
		      window.oRequestAnimationFrame ||
		      window.msRequestAnimaitonFrame ||
		      function(callback) {
		        window.setTimeout(callback, 1000 / 60);
			  };
		})

		this.canvas = canvas;
		this.ctx = ctx;
		this.drawing = drawing;
		this.mousePos= mousePos;
		this.lastPos = lastPos;



	  	

	}


	drawLoop() {
		// console.log(this.drawLoop);
	    requestAnimFrame(this.drawLoop);
	    this.renderCanvas();
	 }

	  clearCanvas() {
	    this.canvas.width = this.canvas.width;
	  }

	    getMousePos(canvasDom, mouseEvent) {
	    	// var canvasDom = this.canvas;
	    	// console.log(canvasDom);
		    var rect = canvasDom.getBoundingClientRect();
		    return {
		      x: mouseEvent.clientX - rect.left,
		      y: mouseEvent.clientY - rect.top
		    }
		  }

		 getTouchPos(canvasDom, touchEvent) {
		    var rect = canvasDom.getBoundingClientRect();
		    return {
		      x: touchEvent.touches[0].clientX - rect.left,
		      y: touchEvent.touches[0].clientY - rect.top
		    }
		  }

		renderCanvas() {
		    if (this.drawing) {
		      this.ctx.moveTo(this.lastPos.x, this.lastPos.y);
		      this.ctx.lineTo(this.mousePos.x, this.mousePos.y);
		      this.ctx.stroke();
		      this.lastPos = this.mousePos;
		    }
		}


		

}