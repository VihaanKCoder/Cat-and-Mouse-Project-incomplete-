//creating variables
var tom, jerry;
var tom1,tom2,tom3,tom4;
var jerry1,jerry2,jerry3,jerry4;
var garden,garndenImg;

function preload() {
    tom1 = loadAnimation("images/cat1.png");
    gardenImg = loadImage("images/garden.png");
    jerry1 = loadAnimation("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse3.png","images/mouse2.png");
    tom2 = loadAnimation("images/cat2.png","images/cat3.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400,10,10);
    garden.addImage(gardenImg);
    garden.scale = 1.2;

    tom = createSprite(900,650,50,50);
    tom.addAnimation("sit",tom1);
    tom.scale = 0.2;

    jerry = createSprite(200,650,20,20);
    jerry.addAnimation("tease",jerry1);
    jerry.scale = 0.15;

}

function draw() {

    background("cyan");
    
    if(keyCode===LEFT_ARROW){
        jerry.addAnimation("tease",jerry2);
        tom.velocityX = -3;
        tom.addAnimation("sit",tom2);
    }

    drawSprites();
}