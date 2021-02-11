var garden, gardenImg
var tom, tomImg1, tomImg2,tomImg3;
var jerry, jerryImg1;

function preload() {
    tomImg1 = loadAnimation("images/tomOne.png");
    tomImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3 = loadAnimation("images/tomFour.png");
    jerryImg1 = loadAnimation("images/jerryOne.png");
    jerryImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3 = loadAnimation("images/jerryFour.png");
    gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
  
  tom = createSprite(870,600);
  tom.addAnimation("tomSleeping",tomImg1);
  tom.scale=0.1;

  jerry = createSprite(200,600);
  jerry.addAnimation("jerryStanding",jerryImg1);
  jerry.scale=0.1;

}

function draw() {
    background(gardenImg);
  
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
  tom.velocityX = 0;
  tom.addAnimation("tomLastimage",tomImg3);
  tom.x = 300;
  tom.scale = 0.2;
  tom.changeAnimation("tomLastimage");
  jerry.addAnimation("jerryLastimage",jerryImg3);
  jerry.scale = 0.15;
  jerry.changeAnimation("jerryLastimage");
}

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
tom.velocityX = -5;
tom.addAnimation("tomRunning", tomImg2);
tom.changeAnimation("tomRunning");

jerry.addAnimation("jerryTeasing", jerryImg2);
jerry.frameDelay = 25;
jerry.changeAnimation("jerryTeasing");
}

}
