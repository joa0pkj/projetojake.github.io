var jake, jakeanimation;

function preload(){
jakeanimation = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.PNG","Jake5.png");
}

function setup(){
  createCanvas(400,400);
jake = createSprite(200,200,200,200);
jake.addAnimation("animationrun", jakeanimation);
}

function draw() {
  background(0);
drawSprites();
}