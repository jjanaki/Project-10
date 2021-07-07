var sea;
var seaImg;
var ship_load;
var ship_load1;
var ship, ship2;

function preload() {
  seaImg = loadImage("sea.png")
  ship_load = loadAnimation("ship-1.png", "ship-2.png")
  ship_load1 = loadAnimation("ship-3.png", "ship-4.png")
}

function setup() {
  createCanvas(600,600);
  sea = createSprite(200,200)
  sea.addImage(seaImg)

  ship = createSprite(150,300,20,50)
  ship.addAnimation("moving", ship_load)
  ship.scale = 0.2

  ship2 = createSprite(400,450,20,50)
  ship2.addAnimation("moving", ship_load1)
  ship2.scale = 0.4

}


function draw() {
  background('black')

  if(sea.x < 0)
  {
    sea.x = sea.width/2
  }
  
  drawSprites()
 
}