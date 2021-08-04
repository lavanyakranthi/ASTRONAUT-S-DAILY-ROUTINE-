
function preload(){
  bg= loadImage ("images/iss.png")
  sleep = loadtAnimation ("image/sleep.png");
  brush = loadAnimation ("image/brush.png");
  gym = loadAnimation ("image/gym21.png","images/gym22.png");
  eat = loadAnimation ("image/eat1.png","images/eat2.png");
  drink = loadAnimation ("image/drink1.png","images/drink2.png");
  move = loadAnimation ("image/move.png");
}


  function setup (){
    createCanvas(300, 300);
    astronaut = createSprite(300,230);
    astronaut.addAnimation("sleeping",sleep);
    astronaut.scale = 0.1
  }
  

function draw() {
  background(220);
 if(keyDown("UP_ARROW")) {
   astronaut.addAnimation("brushing",brush);
   astronaut.changeAnimation("brushing");
   astronaut.Y = 350;
   astronaut.velocityX = 0;
   astronaut.velocityY = 0;
 }
{
  if(keyDown("DOWN_ARROW")) {
astronaut.addAnimation("gymming",gym);
astronaut.changeAnimation("gymming");
astronaut.Y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
  }
}
{
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.Y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
}
{
  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.Y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
}
  }

