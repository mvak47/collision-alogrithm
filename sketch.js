var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 100, 50);
  fixedrect = createSprite(200, 200, 150, 50);
  movingrect.shapeColor = "orange";
  fixedrect.shapeColor = "orange";
}

function draw() {
  background(0);  
movingrect.x = World.mouseX;
movingrect.y = World.mouseY;

if(movingrect.x-fixedrect.x < (movingrect.width+fixedrect.width)/2 && 
fixedrect.x-movingrect.x < (movingrect.width+fixedrect.width)/2 &&
movingrect.y-fixedrect.y < (movingrect.height+fixedrect.height)/2 && 
fixedrect.y-movingrect.y < (movingrect.height+fixedrect.height)/2)
{
  movingrect.shapeColor = "blue";
  fixedrect.shapeColor = "blue";
}
else{
  movingrect.shapeColor = "orange";
  fixedrect.shapeColor = "orange";
}

  drawSprites();
}