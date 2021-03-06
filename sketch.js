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

  for( var j = 40; j <= 400; j = j+50){
  plinkos.push(new Plinko(j,75));
  }
 
  for( var j = 35; j <= 400; j = j+50){
    plinkos.push(new Plinko(j,175, 20));
  }

  for( var j = 30; j <= 400; j = j+50){
    plinkos.push(new Plinko(j,275, 20));
  }

  for( var j = 25; j <= 400; j = j+50){
    plinkos.push(new Plinko(j,375, 20));
  }
 
  ground = new Ground(240, 740, 500, 50);

  Engine.run(engine);
}



function draw() {

  

  background("black");   
  

    for(var k = 0; k<divisions.length; k++ ){
    divisions[k].display();
   }

   for(var k = 0; k <plinkos.length; k++){
     plinkos[k].display();
   }



   if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
    }

    for(var k = 0;k <particles.length; k++){
      particles[k].display();
    }

   ground.display();

    
}