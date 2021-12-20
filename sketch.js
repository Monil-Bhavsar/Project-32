var ground,polygon,slingshot,polygon_img;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
var r,g,b;

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(50,200,20,{density:10});
  World.add(world,polygon);
  slingshot = new SlingShot(this.polygon,{x:100,y:200});
  ground = new Ground(475,350,250,20);
  box1 = new Box(390,320,30,40);
  box2 = new Box(420,320,30,40);
  box3 = new Box(450,320,30,40);
  box4 = new Box(480,320,30,40);
  box5 = new Box(510,320,30,40);
  box6 = new Box(530,320,30,40);
  box7 = new Box(560,320,30,40);
  box8 = new Box(420,280,30,40);
  box9 = new Box(450,280,30,40);
  box10 = new Box(480,280,30,40);
  box11 = new Box(510,280,30,40);
  box12 = new Box(535,280,30,40);
  box13 = new Box(450,240,30,40);
  box14 = new Box(480,240,30,40);
  box15 = new Box(510,240,30,40);
  box16 = new Box(480,200,30,40);

}

function draw() {
  Engine.update(engine);

  getBackgroundImg();
  if(r!=null && g!=null && b!=null){
    background(r,g,b);
  }

  textSize(25);
  text("score:"+score,600,30);
  
  fill(186,67,66);
  ground.display();
  //stroke(69,217,200);
  slingshot.display();
  fill(135,206,234);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill(255,192,203);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill (63,224,208);
  box13.display();
  box14.display();
  box15.display();
  fill(127,127,127);
  box16.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var data = await response.json();
  var time = data.datetime;
  var hour = time.slice(11,13);
  if(hour >= 06 && hour <= 18){
      r = 64;
      g = 156;
      b = 255;
  } else{
      r = 0;
      g = 0;
      b = 0;
  }
}