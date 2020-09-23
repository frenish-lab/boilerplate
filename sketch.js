var boilerplate ;
function setup() {
  createCanvas(800,400);
 boilerplate = createSprite(400, 200, 11, 10);
boilerplate.shapeColor = "red";
  boilerplate.velocityX = 4;
}

function draw() {
  background(0,0,0);  
  drawSprites();
}