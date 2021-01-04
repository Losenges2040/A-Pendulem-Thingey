
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  B1=new Bob(70,200,50)
  B2=new Bob(170,200,50)
  B3=new Bob(270,200,50)
  B4=new Bob(370,200,50)
  B5=new Bob(470,150,50)
  g=new Bar(400,20,1200,50)
  T1=new SlingShot(B1.body,{x:200,y:20})
  T2=new SlingShot(B2.body,{x:300,y:20})
  T3=new SlingShot(B3.body,{x:400,y:20})
  T4=new SlingShot(B4.body,{x:500,y:20})
  T5=new SlingShot(B5.body,{x:600,y:20})


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("green");

  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();
  g.display();
  T1.display();
  T2.display();
  T3.display();
  T4.display();
  T5.display();
 

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(B1.body, {x: mouseX , y: mouseY});
 
}


