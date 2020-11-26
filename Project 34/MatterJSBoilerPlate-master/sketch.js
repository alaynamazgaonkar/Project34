
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5,bob6,c1,c2,c3,c4,c5,c6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,500,50);
	bob1 = new Bob(200,400)
	bob2 = new Bob(280,400)
	bob3 = new Bob(360,400)
	bob4 = new Bob(440,400)
	bob5 = new Bob(520,400)
	bob6 = new Bob(600,400)
	
 	c1= new chain(bob1.body,{x:200,y:100})
	c2= new chain(bob2.body,{x:280,y:100})
	c3= new chain(bob3.body,{x:360,y:100})
	c4= new chain(bob4.body,{x:440,y:100})
	c5= new chain(bob5.body,{x:520,y:100})
	c6= new chain(bob6.body,{x:600,y:100})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  drawSprites();
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  bob6.display()
  c1.display()
  c2.display()
  c3.display()
  c4.display()
  c5.display()
  c6.display()
  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    //Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:0})
  }
}

function mouseDragged(){
  
  //if (gameState!=="launched"){
      Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY} );
 // }
}



