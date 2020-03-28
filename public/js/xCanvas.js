class Canvas {

  constructor(canvas, mousePos, lastPos, ctx){
 
    this.canvas = canvas;
    this.rect = canvas.getBoundingClientRect();
    this.mousePos = mousePos;
    this.lastPos = lastPos;
    this.drawing = false;
    this.ctx = ctx;
  }
 
  setDrawing(bool){
    this.drawing = bool;
  }

  drawLoop() {
        requestAnimFrame(this.drawLoop);
        this.renderCanvas();
        // console.log("hey A!");
  };



  getMousePos(canvasDom, mouseEvent) {
    
    return {
      x: mouseEvent.clientX - this.rect.left,
      y: mouseEvent.clientY - this.rect.top
    }
  }

  getTouchPos(canvasDom, touchEvent) {
    return {
      x: touchEvent.touches[0].clientX - this.rect.left,
      y: touchEvent.touches[0].clientY - this.rect.top
    }
  }

  renderCanvas() {
    // console.log("hey C1!");
    // drawing = true;
    console.log(drawing);
    var that = this;
    // this.drawing=drawing;
    if (this.drawing) {
      console.log(that.ctx);
      that.ctx.moveTo(that.lastPos.x, that.lastPos.y);
      that.ctx.lineTo(that.mousePos.x, that.mousePos.y);
      that.ctx.stroke();
      that.lastPos = that.mousePos;
      // console.log("drawing there!!!!");
    }
  }

  clearCanvas() {
    this.canvas.width = this.canvas.width;
  }

  


}

		





var canvas = document.getElementById("sig-canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#222222";
ctx.lineWidth = 4;



  var drawing = false;
  var mousePos = {
    x: 0,
    y: 0
  };
  var lastPos = mousePos;

  

 


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

var canvasObjet = new Canvas(canvas, mousePos, lastPos, ctx);
canvasObjet.drawLoop();

canvas.addEventListener("mousedown", function(e) {
    canvasObjet.setDrawing(true);
    lastPos = canvasObjet.getMousePos(canvas, e);
    // console.log(lastPos);
  }, false);

  canvas.addEventListener("mouseup", function(e) {
    canvasObjet.setDrawing(false);
    // console.log("hey 2!");
  }, false);

  canvas.addEventListener("mousemove", function(e) {
    mousePos = canvasObjet.getMousePos(canvas, e);
    //nouveau btn : valider (apparait si on fait un trait)
      document.getElementById('btnValid').style.display = 'block';
      // console.log("hey 3!");

  }, false);

  // Add touch event support for mobile
  canvas.addEventListener("touchstart", function(e) {

  }, false);

  canvas.addEventListener("touchmove", function(e) {
    var touch = e.touches[0];
    var me = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    canvas.dispatchEvent(me);
  }, false);

  canvas.addEventListener("touchstart", function(e) {
    mousePos = canvasObjet.getTouchPos(canvas, e);
    var touch = e.touches[0];
    var me = new MouseEvent("mousedown", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    canvas.dispatchEvent(me);
  }, false);

  canvas.addEventListener("touchend", function(e) {
    var me = new MouseEvent("mouseup", {});
    canvas.dispatchEvent(me);
  }, false);

   // Prevent scrolling when touching the canvas
  document.body.addEventListener("touchstart", function(e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
  document.body.addEventListener("touchend", function(e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
  document.body.addEventListener("touchmove", function(e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);

  
  // Set up the UI
  // var sigText = document.getElementById("sig-dataUrl");
  var sigImage = document.getElementById("sig-image");
  var clearBtn = document.getElementById("sig-clearBtn");
  // var submitBtn = document.getElementById("sig-submitBtn");
  clearBtn.addEventListener("click", function(e) {
    e.preventDefault();
    canvasObjet.clearCanvas();
    // sigText.innerHTML = "Data URL for your signature will go here!";
    //sigImage.setAttribute("src", "");
  }, false);
  // submitBtn.addEventListener("click", function(e) {
  //   var dataUrl = canvas.toDataURL();
  //   // sigText.innerHTML = dataUrl;
  //   // sigImage.setAttribute("src", dataUrl);
  //   console.log("bien reçu la signature!");
  // }, false);
