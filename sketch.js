var sonic, flash;
var sonicImg, flashImg;
var bg, bgImage;
var canvas;
var ground,ground2;
var char1,char2;


var INTRO=0;
var PLAY=1;
var gameState = INTRO;

function preload()
{
  //load images
  sonicImg = loadAnimation("frame_00_delay-0.03s.gif","frame_01_delay-0.03s.gif",
  "frame_02_delay-0.03s.gif","frame_03_delay-0.03s.gif","frame_04_delay-0.03s.gif",
  "frame_05_delay-0.03s.gif","frame_06_delay-0.03s.gif","frame_07_delay-0.03s.gif",
  "frame_08_delay-0.03s.gif","frame_09_delay-0.03s.gif")

  bg = loadImage("bg.jpg");

  flashImg = loadAnimation("Flash1.png","Flash2.png","Flash3.png","Flash4.png","Flash5.png",
  "Flash6.png","Flash7.png","Flash8.png","Flash9.png","Flash10.png")
}



function setup() {
  
  createCanvas(1200,600);

  //Try reducing the width of canvas - should be okay 
  
  /*bg = createSprite(1000,300,1800,600)
  bg.scale = 2.0;
  bg.addImage(bgImage)
  bg.visible = false */
  
  
  sonic = createSprite(200,490)
  sonic.addAnimation("sonic",sonicImg)
  sonic.scale=0.4;
  sonic.visible=false;
  
  flashImg.frameDelay = 1;
  sonicImg.frameDelay = 2;

  flash = createSprite(200,450)
  flash.addAnimation("flash",flashImg)
  flash.visible=false;
  flash.scale = 1.2
  

  ground = createSprite(600,580,1200,90)
  ground.shapeColor = "#065479";
  ground.visible=false;
  
  ground2 = createSprite(600,540,1200,10) 
  ground2.shapeColor = "LightSlateGray"
  ground2.visible=false;

  
  char1 = createSprite(200,400, 150,150)
  char1.shapeColor = "Red"
  char1.visible=false;
  char1.addAnimation("flash",flashImg)
  
  
  char2 = createSprite(850,400,150, 150)
  char2.shapeColor = "DodgerBlue";
  char2.visible=false;
  char2.addAnimation("sonic",sonicImg)
  char2.scale=0.4;
  

}

function draw() {
  background("LightSlateGray")
  
  if(gameState===INTRO)
  {
  textSize(50)
  fill("red")
  text("Choose any one of these Characters",150,150)
  char1.visible=true;
  char2.visible= true;
  if(mousePressedOver(char1))
  {
    gameState=PLAY;
    flash.visible=true;
    flashImg.frameDelay = 1;
  }
  if(mousePressedOver(char2))
  {
    gameState=PLAY;
    sonic.visible=true
  }
  }
  
  if(gameState===PLAY)
  {
    background(bg)
    bg.velocityX= -5;
    ground.visible=true;
    ground2.visible=true;
    bg.visible=true;
    char1.visible=false;
    char2.visible=false;
    if(bg.x<0)
    {
      bg.x=bg.width/2
    }
    
  }

  
  
  drawSprites();  
  
}