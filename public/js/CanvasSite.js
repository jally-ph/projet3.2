class Canvas {

	constructor() {
		
		var canvasWidth = 300;
		var canvasHeight = 200;
		var padding = 10;
		var lineWidth = 8;
		var clickX = new Array();
		var clickY = new Array();
		var clickDrag = new Array();
		var paint;
		var canvas;
		var context;

		/* Creates a canvas element*/
		function executeCanvas()
		{
			// Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
			var canvasDiv = document.getElementById('canvasDiv');
			canvas = document.createElement('canvas');
			canvas.setAttribute('width', canvasWidth);
			canvas.setAttribute('height', canvasHeight);
			canvas.setAttribute('id', 'canvas');
			canvasDiv.appendChild(canvas);
			if(typeof G_vmlCanvasManager != 'undefined') {
				canvas = G_vmlCanvasManager.initElement(canvas);
			}
			context = canvas.getContext("2d");
			
			// Add mouse events
			// ----------------
			$('#canvas').mousedown(function(e)
			{
				// Mouse down location
				var mouseX = e.pageX - this.offsetLeft;
				var mouseY = e.pageY - this.offsetTop;
				
				paint = true;
				addClick(mouseX, mouseY, false);
				redraw();
			});
			
			$('#canvas').mousemove(function(e){
				if(paint){
					addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
					redraw();
					//nouveau btn : valider (apparait si on fait un trait)
					document.getElementById('btnValid').style.display = 'block';
				}
			});
			
			$('#canvas').mouseup(function(e){
				paint = false;
			  	redraw();
			});
			
			$('#canvas').mouseleave(function(e){
				paint = false;
			});
			
			$('#clearCanvas').mousedown(function(e)
			{
				clickX = new Array();
				clickY = new Array();
				clickDrag = new Array();
				clearCanvas(); 
			});

			$("#btnNewOrder").click(function(e){
				clickX = new Array();
				clickY = new Array();
				clickDrag = new Array();
				clearCanvas();
			});
			


			// Tactile ::::   Add touch event listeners to canvas element
			canvas.addEventListener("touchstart", function(e)
			{
				// Mouse down location
				var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
					mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop;
				
				paint = true;
				addClick(mouseX, mouseY, false);
				redraw();
			}, false);

			canvas.addEventListener("touchmove", function(e){
				
				var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - this.offsetLeft,
					mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - this.offsetTop;
							
				if(paint){
					//nouveau btn : valider (apparait si on fait un trait)
					document.getElementById('btnValid').style.display = 'block';
					addClick(mouseX, mouseY, true);
					redraw();
				}
				e.preventDefault()
			}, false);

			canvas.addEventListener("touchend", function(e){
				paint = false;
			  	redraw();
			}, false);
			
			canvas.addEventListener("touchcancel", function(e){
				paint = false;
			}, false);
		}

		function addClick(x, y, dragging)
		{
			clickX.push(x);
			clickY.push(y);
			clickDrag.push(dragging);
		}

		function clearCanvas()
		{
			context.clearRect(0, 0, canvasWidth, canvasHeight);
		}

		function redraw()
		{
			clearCanvas();
			
			var radius = 3;
			context.strokeStyle = "black";
			context.lineJoin = "round";
			context.lineWidth = radius;
					
			for(var i=0; i < clickX.length; i++)
			{		
				context.beginPath();
				if(clickDrag[i] && i){
					context.moveTo(clickX[i-1], clickY[i-1]); //0,0
				}else{
					context.moveTo(clickX[i]-1, clickY[i]);
				}
				context.lineTo(clickX[i], clickY[i]);
				context.closePath();
				context.stroke();
			}
		}

		executeCanvas();

	}

}
