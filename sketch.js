var bullet, wall;
var speed, weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(25, 150, 25, 25);
  wall = createSprite(1200,200,thickness, height/2)
  wall.shapeColor = rgb(80,80,80)
  speed=random(223,321);
  weight=random(30,52)
  thickness=random(22,83);
  bullet.velocityX = speed;
}

function draw() {
  background("black");
if (hasCollided(bullet,wall)){
  bullet.velocityX =0;
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)

    if (damage<=10){
  bullet.shapeColor = ("green")
}
if (damage>10){
  if (damage<=180){
  bullet.shapeColor = ("red")
  }
} 
}
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}