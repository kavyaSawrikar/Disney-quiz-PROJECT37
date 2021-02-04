var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var box;

var disneyImage, DISNEY

var form, player, game;

var car1, car2, car3, car4;
var cars=[]
function preload(){

disneyImage = loadImage('sprites/DisneyMASH-UP.jpg') 
}

function setup(){

  //to adjust the size of the screen as per device window/display size
  canvas = createCanvas(700, 350);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

DISNEY = createSprite(350 , 175)
DISNEY.addImage(disneyImage)

box = createSprite(380, -2,170)


}


function draw(){
  
  drawSprites();
  
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
