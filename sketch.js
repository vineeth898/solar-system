var x=50;
var y=0.1;
var mercury,venus,earth,mars;
function setup() {
  createCanvas(1450,850);
  sun=createSprite(710,410,10,10);
  mercury=createSprite(820,430,10,10);
  venus=createSprite(900,490,10,10);
  earth=createSprite(1100,550,10,10);
  mars=createSprite(1300,700,10,10);
}

function draw() {
  x=x+y;
  y=y+0.02;
  background(0,0,0);  

  sun.setCollider("circle",0,0,x);
  mercury.setCollider("circle",0,0,20);
  venus.setCollider("circle",0,0,40);
  earth.setCollider("circle",0,0,38);
  mars.setCollider("circle",0,0,30);
  drawSprites();
if(sun.isTouching(mercury)){
  mercury.x=10000;
}
if(sun.isTouching(venus)){
  venus.x=10000;
}
if(sun.isTouching(earth)){
  earth.x=10000;
}
if(sun.isTouching(mars)){
  mars.x=10000;
}

  spawnobject(710,410,x,"yellow");
  spawnobject(mercury.x,mercury.y,20,"orange");
  spawnobject(venus.x,venus.y,40,"red");
  spawnobject(earth.x,earth.y,38,"blue");
  spawnobject(mars.x,mars.y,30,"maroon");
}

function spawnobject(x,y,r,c){
  ellipseMode(RADIUS);
  fill(c);
  ellipse(x,y,r);
}