var fixedRect,movingRect;

function setup() {
  createCanvas(800,800);
 fixedRect= createSprite(400, 200, 100, 50);
 movingRect=createSprite(400,100,70,100);
 movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  movingRect.y = World.mouseY; 
  movingRect.x = World.mouseX; 
  console.log(movingRect.x -fixedRect.x);
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2)
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}