class Canvas {

	constructor() {
		this.canvasWidth = 300;
		this.canvasHeight = 200;
		this.padding = 0;
		this.lineWidth = 1;
		this.clickX = new Array();
		this.clickY = new Array();
		this.clickDrag = new Array();
		this.paint;
		this.canvas;
		this.context;

	}

	/* Creates a canvas element*/
	executeCanvas(){
		// Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
		var canvasDiv = document.getElementById('canvasDiv');
		this.canvas = document.createElement('canvas');
		//this.canvas.setAttribute('width', this.canvasWidth);
		this.canvas.setAttribute('width', $('#derniereEtape').width());
		this.canvas.setAttribute('height', this.canvasHeight);
		this.canvas.setAttribute('id', 'canvas');
		canvasDiv.appendChild(this.canvas);
		if(typeof G_vmlCanvasManager != 'undefined') {
			this.canvas = G_vmlCanvasManager.initElement(this.canvas);
		}
		this.context = this.canvas.getContext("2d");
	}

	addClick(x, y, dragging){
		// console.log(this.clickX);
		this.clickX.push(x);
		this.clickY.push(y);
		this.clickDrag.push(dragging);
	}

	clearCanvas(){
		this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
		document.getElementById('btnValid').style.display = 'none';
		document.getElementById('clearCanvas').style.display = 'none';
		
	}

	redraw(){
		// this.clearCanvas();
		
		var radius = 3;
		this.context.strokeStyle = "black";
		this.context.lineJoin = "round";
		this.context.lineWidth = radius;

		for(var i=0; i < this.clickX.length; i++)
		{		
			this.context.beginPath();
			if(this.clickDrag[i] && i){
				this.context.moveTo(this.clickX[i-1], this.clickY[i-1]); //0,0
			}else{
				this.context.moveTo(this.clickX[i]-1, this.clickY[i]);
			}
			this.context.lineTo(this.clickX[i], this.clickY[i]);
			this.context.closePath();
			this.context.stroke();
		}
	}

}


////////////////////////////////////////////////////////////////////////////////////main!!!




