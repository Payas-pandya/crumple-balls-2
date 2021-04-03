var ground, dustbin, paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = createSprite(400, 695, 800, 10);
	//dustbin = new Dustbin(a = (x = 600, y = 650, width = 10, height = 100),  b = (x = 700, y = 650, width = 10, height = 100), c = (x = 650, y = 650, width = 100, height = 10) );
	paper = new Paper(x, y, r, options);
	
	Engine.run(engine);
  
}


function draw() {
background(0);
ground.display();
//dustbin.display();
paper.display();
drawSprites(); 
}



