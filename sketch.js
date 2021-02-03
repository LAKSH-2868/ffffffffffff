var fairy,fairyImage;
var star,starImage;
var world,engine;
var backGround,backGroundImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
   //preload the images here
  fairyImage = loadImage("fairy1.png");
  starImage = loadImage("star.png");
  backGroundImage = loadImage("starnight.png");

}

function setup() {
  createCanvas(800, 750);

  backGround = createSprite(800,750);
  backGround.addImage("back",backGroundImage);

  engine = Engine.create();
  world = engine.world;
  
  engine = Engine.create();
  world = engine.world;

  fairy = createSprite(150,500)
  fairy.addImage("fairy",fairyImage);
  fairy.scale=0.3;
  fairyBody=Bodies.circle(150,500,5,{isStatic:true});
  World.add(world,fairyBody);

  star = createSprite(700,100)
  star.addImage("tara",starImage );
  star.scale=0.3;
  starBody=Bodies.circle(700,100,5,{isStatic:true});
  World.add(world,starBody);
  
}


function draw() {
  background("black");


  Engine.update(engine);

  star.x=starBody.position.x;
  star.y=starBody.position.y;

  fairy.y=fairyBody.position.y;
  fairy.x=fairyBody.position.x;

 
  if( starBody.position.y > 470 ){
    starBody.velocityY=0;
}

  drawSprites();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    fairyBody.position.x=fairyBody.position.x-20;
  }

  if(keyCode=== RIGHT_ARROW){
    fairyBody.position.x=fairyBody.position.x+20;
  }

 if(keyCode === UP_ARROW){
   starBody.velocity.Y=3;
 }

}
