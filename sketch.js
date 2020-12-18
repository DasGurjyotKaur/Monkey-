var bananaImage
var obstacleImage
var Ob
var bg
var score
var player_running
var fruitGroup1
var survivalTime=0
var ground,invisibleground


function preload() {
backImage=loadImage("jungle.jpg");
player_running=
  loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  ObstacleImage=loadImage("stone.png");
}


function setup() {
  createCanvas(400, 400);
  
bg=createSprite(200,200,20,20);
bg.addImage("backImage",backImage);
  
 player=createSprite(60,330);
  player.scale=0.2;
 
  
player.addAnimation("player_running",player_running);
  
  fruitGroup1=new Group();
  ObGroup=new Group();
   
  ground = createSprite(200,399,400,20);
  ground.visible=false;

  ground.velocityX =-2;
  
  invisibleground=createSprite(200,400,400,10);
  invisibleground.visible=false;
 
  
}

function draw() {
  background(220);
   stroke("black");
  textSize(20);
  fill("black");
 
  if (ground<0){
        ground.x=ground.width/2
  }
  if (keyDown("UP_ARROW")){
    player.velocityY=-12;
        }
  
    player.velocityY++
  text("survival time:" +survivalTime,50,50);
   player.collide(invisibleground);
  fruitGroup();  
   Ob();
 drawSprites();
 survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime",survivalTime,500,500); 
}


function fruitGroup(){
   if(World.frameCount % 60 === 0) {
    var banana = createSprite(400,370,10,40);
    banana.velocityX = - (6 +3*survivalTime/100);
      var rand = random(120,200);
      banana.addImage(bananaImage);
      banana.scale=0.1;                      
      banana.velocityX=-10;
      // time=d/speed
      banana.lifetime=90;
      fruitGroup1.add(banana)
   }
}
function Ob(){
 if(frameCount % 100 === 0) {
    var obstacle = createSprite(400,380,10,40);
    obstacle.velocityX = - (6 + 3*survivalTime/100);
      var rand = random(120,200);
      obstacle.addImage(ObstacleImage);
      obstacle.scale=0.1;
      obstacle.velocityX=-5;
      obstacle.lifetime=100;
      ObGroup.add(obstacle);
 }
}
  
      
  
  