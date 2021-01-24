var fixedRect, movingRect;
var gameobject1, gameobject2, gameobject3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1=createSprite(100,200,50,50)
  gameobject1.shapeColor= "green"
  gameobject2=createSprite(200,200,50,50)
  gameobject1.shapeColor="green"
  gameobject3=createSprite(300,200,50,50)
  gameobject3.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(gameobject3, movingRect)){
    movingRect.shapeColor= "red"
    gameobject3.shapeColor="red"
    
  }
  else {
    movingRect.shapeColor= "yellow"
    gameobject3.shapeColor="yellow"
  }
  drawSprites();
  
}

function isTouching(object1,object2) {
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
return true;
}
else {

return false;
}

}