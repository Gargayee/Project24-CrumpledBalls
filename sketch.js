
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var log1,log2,log3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball=new Paper(80,450,20);
ground= new Ground(600,600,1200,100);
log1=new Dustbin(1000,540,200,20);
log2=new Dustbin(1090,500,20,100);
log3=new Dustbin(910,500,20,100);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ball.display();
ground.display();
log1.display();
log2.display();
log3.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  }
}

