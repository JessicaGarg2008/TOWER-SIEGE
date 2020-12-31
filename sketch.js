const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform,plyimg;
var bird, slingShot;

var ball ;

var score

function preload() {
    backgroundImg = loadImage("sprites/bg.png");

plyimg = loadImage("ball.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
 stand1 = new Ground(390,300,250,10);

 stand2 = new Ground(800,200,250,10);

 block1 = new Box(300,275,30,40);

 block2 = new Box(330,275,30,40);

 block3 = new Box(360,275,30,40);

 block4 = new Box(390,275,30,40);

 block5 = new Box(420,275,30,40);

 block6 = new Box(450,275,30,40);

 block7 = new Box(480,275,30,40);


block8 = new Box (315,235,30,40);


block9 = new Box (345,235,30,40);


block10 =  new Box (375,235,30,40);


block11 = new Box (405,235,30,40);


block12 = new Box (435,235,30,40);


block13 = new Box (465,235,30,40);


block14 = new Box(330,195,30,40);


block15 = new Box(360,195,30,40);

block16 = new Box(390,195,30,40);


block17 = new Box(420,195,30,40);


block18 = new Box(450,195,30,40);

block19 = new Box(345,155,30,40);

block20 = new Box(375,155,30,40);

block21 = new Box(405,155,30,40);

block22 = new Box(435,155,30,40);

block23 = new Box(360,115,30,40);

block24 = new Box(390,115,30,40);

block25 = new Box(420,115,30,40);
 
block26 = new Box(375,75,30,40);

block27 = new Box(405,75,30,40);

block28 = new Box(390,35,30,40);

block29 = new Box(800,175,30,40);

block30 = new Box(830,175,30,40);

block31 = new Box(770,175,30,40);

block32 = new Box(740,175,30,40);

block33 = new Box(800,135,30,40);

block34 = new Box(830,135,30,40);

block35 = new Box(770,135,30,40);

block36 = new Box(800,95,30,40);

block37 = new Box(860,175,30,40);

ball = Bodies.circle(100,250,50);

World.add(world,ball);

slingshot = new SlingShot(ball,{x:100,y:200});
    


}

function draw(){
    background("pink");

    Engine.update(engine);
    
    
    stand1.display() ;

    stand2.display() ;

imageMode(CENTER);

image(plyimg,ball.position.x,ball.position.y,50,50);






fill("blue")


    block1.display();


    block2.display();

    
    block3.display();

    
    block4.display();

    
    block5.display();

    
    block6.display();

    
    block7.display();

    fill("white");

    block8.display();

    block9.display();

    block10.display();

    block11.display();

    block12.display();

    block13.display();

    fill("pink")

    block14.display();

    block15.display();

    block16.display();

    block17.display();

    block18.display();

    fill("blue")

    block19.display();

    block20.display();

    block21.display();

    block22.display();

    fill("white");

    block23.display();

    block24.display();

    block25.display();

    fill("pink");

    block26.display();

    block27.display();

    fill("blue")

    block28.display();

  block29.display();

  block30.display();

  block31.display();

  block32.display();

 

  
  block37.display();

  fill("white")

  block34.display();

  block33.display();

  block35.display();

  
  fill("pink")
  block36.display();




}

function mouseDragged(){

    Matter.Body.setPosition(this.ball,{ x:mouseX,y:mouseY});
   
}

function mouseReleased(){

    slingshot.fly();
  
}

async function getTime(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json(); 
    var datetime = responseJSON.datetime; var hour = datetime.slice(11,13);
     if(hour>=06 && hour<=19){
          bg = "sprites/bg1.png"; 
        } 
        else{ 
            bg = "sprites/bg2.jpg"; 
        } 
        backgroundImg = loadImage(bg);

}