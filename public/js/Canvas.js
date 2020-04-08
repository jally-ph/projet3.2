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

	/* Création  du canvas */
	executeCanvas(){
		// Crée canvas (pour IE parce qu'il ne sait pas c'est quoi un canvas)
		this.canvas = document.createElement('canvas');
		this.canvas.setAttribute('id', 'canvas');
		var canvasDiv = document.getElementById('canvasDiv');
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
		document.getElementById('btnValidFinal').style.display = 'none';
	}

	redraw(){
		
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

