const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {

  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for(var k = 0; k <= width; k = k + 80){
  divisions.push(new Division(k, height = divisionHeight*2, 10, divisionHeight));
  }

  for( var j = 40; width <= 400; j = j+50){
  plinkos.push(new Plinko(j,75));
  }
 /*
  for( var j = 35; width >= 400; j = j+50){
    plinkos.push(new Plinko(j,175, 20));
  }

  for( var j = 30; width >= 400; j = j+50){
    plinkos.push(new Plinko(j,275, 20));
  }

  for( var j = 25; width >= 400; j = j+50){
    plinkos.push(new Plinko(j,375, 20));
  }
 */
 // if(frameCount%60===0){
   // particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
 // }
}



function draw() {

  background("black");   
  Engine.update(engine);

    for(var k = 0; k <= divisions.length; k++ ){
    divisions[k].display();
   }

    
}