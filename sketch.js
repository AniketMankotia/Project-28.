
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Congruent = Matter.Congruent;

var groundObj;
var treeObj,treeImage;
var stoneObj;
var boyObj,boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;

function preload(){
	treeImage = loadImage("images/tree.png");
	boyImage = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 620);


	engine = Engine.create();
	world = engine.world;

	

	groundObj = new Ground(650,612,1300,10);
	stoneObj = new Stone(200,460,50,50);
	boyObj = createSprite(250,520,50,50);
	boyObj.addImage(boyImage);
	boyObj.scale=0.1;

	mango1 = new Mango(900,290,34);

	treeObj = createSprite(1050,350,50,50);
	treeObj.addImage(treeImage);
	treeObj.scale=0.4;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  groundObj.display();
  stoneObj.display();
  mango1.display();

  drawSprites();
 
}



