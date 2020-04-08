
//AJAX
var ajax = new Ajax();


//=============================================================================================MAP
//MAP
var mapData = new MapData(ajax);

function reserverVelo(adress){

	var input = document.getElementById('adresseMapInput');
	var p = document.getElementById('adresseMap');
	p.innerHTML = adress;
	input.value = adress;
}


//==========================================================================================SLIDER
//SLIDER
var slides = document.getElementsByClassName("sliderImg");
var diapo = new Diapo(slides);
diapo.change();


//chevrons
if ($("#chevronRight").click(function(){
	diapo.plusRight(diapo.slides);
	console.log("chevronRight Ok!");
}));

if ($("#chevronLeft").click(function(){
	diapo.plusLeft();
	console.log("chevronLeft Ok!");

}));

//clavier
document.addEventListener("keydown", function(event) {
	if (event.which===39){
		diapo.plusRight(diapo.slides);
		console.log("FlècheLeft Ok!");
	}

	if (event.which===37){
		diapo.plusLeft();
		console.log("FlècheRight Ok!");
	}

});

//pause & play
if ($("#play").click(function() { 
	//console.log(play);
	play.setAttribute("style", "z-index: 3");
	diapo.change();
	console.log("Play Ok!");

}));

	if ($("#pause").click(function(){
		diapo.pause();
		play.setAttribute("style", "z-index: 5");
		console.log("Pause Ok!");
	}));

//===========================================================================================CANVA

//CANVAS

var canvas = new Canvas();
canvas.executeCanvas();

if(canvas){
	function resizeCanvaSize(){
		// get width and height of the window excluding scrollbars
		var canvas = document.getElementById("canvas");
		var w = document.getElementById("derniereEtape").clientWidth;
		// var h = document.getElementById("derniereEtape").clientHeight;
		canvas.width = w;
		// canvas.height = h;
	}

	resizeCanvaSize();

	window.addEventListener("resize", resizeCanvaSize);
}

// ajouter mouse events
			
$('#canvas').mousedown(function(e){
// Mouse down location
	var offset = $('#canvasDiv').offset();
	var mouseX = e.pageX - offset.left;
	var mouseY = e.pageY - offset.top;

	canvas.paint = true;
	canvas.addClick(mouseX, mouseY, false);
	canvas.redraw();
});

$('#canvas').mousemove(function(e){
	var offset = $('#canvasDiv').offset();
	var mouseX = e.pageX - offset.left;
	var mouseY = e.pageY - offset.top;

	if(canvas.paint){
		canvas.addClick(mouseX, mouseY, true);
		canvas.redraw();
		//nouveau btn : valider (apparait si on fait un trait)
		var btnValid = document.getElementById('btnValid');
		document.getElementById('btnValid').style.display = 'block';
		document.getElementById('clearCanvas').style.display = 'block';

		if (btnValid.style.display === 'block') {
			document.getElementById('btnValidFinal').style.display = 'none';
		}
	}
});

$('#canvas').mouseup(function(e){
	canvas.paint = false;
	canvas.redraw();
});

$('#canvas').mouseleave(function(e){
	canvas.paint = false;
});

$('#clearCanvas').mousedown(function(e)
{
	canvas.clickX = new Array();
	canvas.clickY = new Array();
	canvas.clickDrag = new Array();
	canvas.clearCanvas(); 
});

$("#btnNewOrder").click(function(e){
	canvas.clickX = new Array();
	canvas.clickY = new Array();
	canvas.clickDrag = new Array();
	canvas.clearCanvas();
});


// Tactile ::::   Add touch event listeners to canvas element
canvas.canvas.addEventListener("touchstart", function(e)
{
	// Mouse down location
	var offset = $('#canvasDiv').offset();
	var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - offset.left,
	mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - offset.top;
	
	canvas.paint = true;
	canvas.addClick(mouseX, mouseY, false);
	canvas.redraw();
}, false);

canvas.canvas.addEventListener("touchmove", function(e){
	var offset = $('#canvasDiv').offset();
	var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - offset.left,
	mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - offset.top;

	if(canvas.paint){
		//nouveau btn : valider (apparait si on fait un trait)
		var btnValid = document.getElementById('btnValid');
		document.getElementById('btnValid').style.display = 'block';

		if (btnValid.style.display === 'block') {
			document.getElementById('btnValidFinal').style.display = 'none';
		}
					
		canvas.addClick(mouseX, mouseY, true);
		canvas.redraw();
		
		document.getElementById('clearCanvas').style.display = 'block';
	}
	e.preventDefault()
}, false);

canvas.canvas.addEventListener("touchend", function(e){
	canvas.paint = false;
	canvas.redraw();
}, false);

canvas.canvas.addEventListener("touchcancel", function(e){
	canvas.paint = false;
}, false);





//=============================================================================================TIMER
//TIMER

//timer ::: spanName
document.getElementById('spanName').textContent = localStorage.prenom + " " + localStorage.nom;
//spanAdresse
document.getElementById('spanAdresse').textContent = sessionStorage.adresse;
		
	










