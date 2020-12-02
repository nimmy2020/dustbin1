
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	db1=new Dustbin(700,550);
	ground1=new Ground(500,580,1000,20);
	paper1=new Paper(200,500,10);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
//db1.display();
ground1.display();
db1.display(); 
paper1.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15});
  
	}
}

