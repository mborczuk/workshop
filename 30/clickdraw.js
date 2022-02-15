var c = document.getElementById("slate");

var ctx = c.getContext("2d");

var mode = "rect";

var toggleMode = (e) => {
  console.log("toggling...");
  if(mode === "rect"){
    mode = "circ";
    buttonToggle.innerHTML = "Rectangle";
  }
  else{
    mode = "rect";
    buttonToggle.innerHTML = "Circle";
  }
  console.log(mode);
};

var drawRect = function(e){
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;
  // offsetX and offsetY - x/y distance from edge of element
  // thus using them to draw the shape works
  ctx.fillRect(mouseX, mouseY, 50, 100);
  console.log("mouse click registered at ", mouseX, mouseY);
};

var drawCircle = (e) => {
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
  console.log("mouse click registered at", mouseX, mouseY);
};
var draw = (e) => {
  if(mode === "rect"){;
    drawRect(e);
  }
  else{drawCircle(e);}
};

var wipeCanvas = () => {
  ctx.clearRect(0,0,600,600);

}

 c.addEventListener("click", draw);
var bToggler = document.getElementById("buttonToggle");
bToggler.addEventListener("click",toggleMode) ;
var clearB = document.getElementById("buttonClear");
clearB.addEventListener("click", wipeCanvas);
