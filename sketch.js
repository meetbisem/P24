const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var Dustbin1,Dustbin2,Dustbin3;
var Ground;
var Paperball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Dustbin1=new dustbin(710,620,20,100);
	Dustbin2=new dustbin(490,620,20,100);
	Dustbin3=new dustbin(600,660,200,20);
	Ground=new ground(width/2, height-25, width,10);
	Paperball=new paper(100,650,20,20);

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  
Dustbin1.display();
Dustbin2.display();
Dustbin3.display();
Ground.display();
Paperball.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(Paperball.body,Paperball.body.position,{x:13,y:-13});
	}
}