
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

	//Create the Bodies Here.
	bobObject1= new Bob(200,300,30)
	bobObject2= new Bob(200,300,30)
	bobObject3= new Bob(200,300,30)
	bobObject4= new Bob(200,300,30)
	bobObject5= new Bob(200,300,30)
    roof= new Roof(400, 50, 500, 20)
	rope1 = new Chain(bobObject1.body, roof.body, 100, 50)
	rope2 = new Chain(bobObject2.body, roof.body)
	rope3 = new Chain(bobObject3.body, roof.body)
	rope4 = new Chain(bobObject4.body, roof.body)
	rope5 = new Chain(bobObject5.body, roof.body)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,63);
  
  drawSprites();
 
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
 roof.display()
 bobObject1.display()
 bobObject2.display()
 bobObject3.display()
 bobObject4.display()
 bobObject5.display()
}



