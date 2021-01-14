
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);
	

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	bin1 = new Bin(905,445,20,90);
    bin2 = new Bin(1095,445,20,90);
	bin3 = new Bin(1000,480,170,20);
	paperObject =  new Paper(100,480,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  paperObject.display();
  
  keyPressed();
  drawSprites();

 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:4,y:-6});

	}
}



