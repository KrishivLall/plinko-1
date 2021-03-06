class Particle {
    constructor(x, y, radius) {
      var options = {
          isStatic : false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          
        }
        
        this.radius = radius;
        this.body = Bodies.circle(x, y, this.radius, options);
        this.color = color(random(0, 225), random(0, 225), random(0, 225))
        World.add(world , this.body);
    }
    display(){
      
      var pos = this.body.position
      var angle = this.body.angle;

      push();
      rotate(angle);
      translate(pos.x, pos.y);
      noStroke();
      fill(this.color);
      ellipseMode(RADIUS);
      //fill(this.color);
      ellipse(0, 0, this.radius, this.radius)
      pop();
    }
  }