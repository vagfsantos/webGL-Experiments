// Load before
function preload(){}

// Config project
function setup(){
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

// animation loop
function draw(){
  background(0);
  ambientLight(235, 235, 36);
  pointLight(250, 250, 250, 100, 100, 0);
  specularMaterial(250);
  translate(-width/2, -height/2, 0);
  torus(40, 10, 40);
}
