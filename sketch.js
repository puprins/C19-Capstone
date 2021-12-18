var gameState = NEWGAME;
var gameState = PLAY; 

var newgame

var bear_idle, bear_running
var invisibleGround;
var backGround, backGround2;

var fruitGroup, fruit1, fruit2, fruit3, fruit4;

var jumpSound, checkpointSound;
var score=0;
var gameOver, restart;

//preload
function preload(){
bear_idle = loadAnimation("bearIdle1.png","bearIdle2.png","bearIdle3.png","bearIdle4.png");
bear_running = loadAnimation("bear1.png","bear2.png","bear3.png");

backGroundImg = loadImage("menu.png");
backGround2Img = loadImage("inFinite.png");

fruit1 = loadImage("apple.png");
fruit2 = loadImage("pear.png");
fruit3 = loadImage("peach.png");
fruit4 = loadImage("plum.png");

invisibleGroundImg = loadImage("ground2.png");

newgameImg = loadImage("newgame.png");
gameOverImg = loadImage("gameOver.png");
restartImg = loadImage("restart.png");

}

//setup
function setup(){
    createCanvas(windowWidth,windowHeight);

    score = 0;

    bear = createSprite(50,height-70,20,50);

    bear.addAnimation("idle",bear_idle);
    bear.addAnimation("running",bear_running);
    bear.scale = 0.5;

    backGround = createSprite(windowWidth,windowHeight);
    backGround.addImage("backGround1",backGroundImg);

    newgame = createSprite(width/2,height/2-200);
    newgame.addImage(newgameImg);

    gameOver = createSprite(width/2,height/2-200);
    gameOver.addImage(gameOverImg);

    restart = createSprite(width/2,height/2-50);
    restart.addImage(restartImg);

    newgame.scale = 0.5;
    gameOver.scale = 0.5;
    restart.scale = 0.5;

    invisibleGround = createSprite(width/2,height-10,width,10);
    invisibleGround.addImage(invisibleGroundImg);

    fruitGroup = new Group();
}

//draw
function draw(){

    background("white");
    text("Score: "+ score,)

    if(gameState === NEWGAME){
        backGround.createSprite(windowWidth,windowHeight);
        backGround.visible = true;
        newgame.visible = true;

        score = 0;

        backGround2.visible = false;
        backGround2.velocityX = 0;

    } else if(gameState === PLAY){
        backGround.visible = false;
        newgame.visible = false;

        score = score + Math.round(getFrameRate()/60);
        ground.velocityX = -(6 + 3*score/100);

        bear.velocityX = bear.velocityX +0.8
        
    } else if(gameState === END){


    }


    drawSprites();
}