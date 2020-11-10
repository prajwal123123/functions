var fixedRect, movingRect;
var gameObject1,gameObject2, gameObject3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1= createSprite(300,200,100,60);
  gameObject1.shapeColor= "yellow";
  gameObject2= createSprite(100,200,30,70);
  gameObject2.shapeColor= "yellow";
  gameObject3= createSprite(30,150,20,90);
  gameObject3.shapeColor= "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
    drawSprites();
}
