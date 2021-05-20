var car1,wall1,wall2,wall3,wall4;
var speed;

function setup() {
  createCanvas(800,400);
  speed = random(50,90);
  //width = random(400,1500);
  car1 = createSprite(50,random(50,370),25,11);
  car1.velocityX = 9;
  ///wall
  wall1 = createSprite(770,60,20,40);
  wall2 = createSprite(770,150,20,40);
  wall3 = createSprite(770,250,20,40);
  wall4 = createSprite(770,360,20,40);
}

function draw() {
  background("black");  

  isTouching();


  drawSprites();
}

function isTouching(){
  if(car1.x - wall1.x < wall1.width/2 + car1.width/2 &&
    wall1.x - car1.x < wall1.width/2 + car1.width/2){
    car1.shapeColor = "green";
    car1.velocityX = 0;
  }
  if(car1.x - wall2.x < wall2.width/2 + car1.width/2 &&
    wall2.x - car1 < wall2.width/2 + car1.width/2){
      car1.shapeColor = "blue";
      car1.velocityX = 0;
    }
  if(car1.x - wall3.x < wall3.width/2 + car1.width/2 &&
    wall3.x - car1.x < wall3.width/2 + car1.width/2){
      car1.shapeColor = "red";
      car1.velocityX = 0;
      }
  if(car1.x - wall4.x < wall4.width/2 + car1.width/2 &&
    wall4.x - car1.x < wall4.width/2 + car1.width/2){
      car1.shapeColor = "yellow";
      car1.velocityX = 0;  
  }   
}