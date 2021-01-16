var fixedRect,movingRect;

function setup() {
  createCanvas(800,800);
 fixedRect= createSprite(200, 100, 100, 50);
 movingRect=createSprite(400,200,70,100);
 fixedRect.velocityX = 3;
 movingRect.velocityX = -4;
 movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  movingRect.y = World.mouseY; 
  movingRect.x = World.mouseX; 
  console.log(movingRect.x -fixedRect.x);

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}
drawSprites();
}
