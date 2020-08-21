
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var wall_1, wall_2, wall_3
var paper;

function preload()
{
	trashcan = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 800);


	wall1 = createSprite(1325,560,10,175)
	wall2 = createSprite(1480,560,10,175)
	wall3 = createSprite(1400,640,140,10)
	
	wall1.shapeColor=(300)
	wall2.shapeColor=(300)
	wall3.shapeColor=(300)

	dusty = createSprite(1402, 550, 50,50)
	dusty.addImage("l",trashcan)
	dusty.scale = 0.65



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,650,2400,30)

	
	wall_1 = Bodies.rectangle(1325,560,20,100, {isStatic:true})
	World.add(world, wall_1);
	
	wall_2 = Bodies.rectangle(1480,560,20,100, {isStatic:true})
	World.add(world, wall_2);
	
	wall_3 = Bodies.rectangle(1400,640,200,10, {isStatic:true})

	paper = new Paper(100,640,70)


	World.add(world, wall_3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);	
  ground.display();
  paper.display();

  drawSprites();
 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{	x:1600.1,y:-930})
	}
}