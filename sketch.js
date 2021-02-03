var bathroomBackground,bathroomBackgroundImage
var bedroomBackground,bedroomBackgroundImage
var Car,CarImage
var keys,keysImage
var livingRoomBackground,livingRoomBackgroundImage
var obstacle,obstacleImage
var phone,phoneImage
var player,playerImage
var shelf,shelfImage
var shirt1,shirt1Image
var toothbrush,toothbrushImage
var toothpaste,toothpasteImage
var train,trainImage
var watch,watchImage

function preload() {
  bedroomBackgroundImage = loadImage('images/bedroom background.jpg');
  bathroomBackgroundImage = loadImage('images/bathroomBackground.png');
  CarsImage = loadImage('images/Cars.Png');
  keysImage = loadImage('images/keys.jpg');
  livingRoomBackgroundImage = loadImage('images/livingRoomBackground.png');
  obstacleImage = loadImage('images/obstacle.png');
  phoneImage = loadImage('images/phone.jpg');
  playerImage = loadImage('images/player.png');
  shirt1 = loadImage('images/player.jpg');
  toothbrushImage = loadImage('images/toothbrush.png');
  toothpasteImage = loadImage('images/toothpaste.png')
  trainImage = loadImage('images/Train.png');
  watchImage = loadImage('images/watch.png')
  
}

function setup() {

  createCanvas(800,400);
  bedroomBackground = createSprite(400, 200, 100, 100)
}

function draw() {
  background(bedroomBackground);  
  drawSprites();
}