class Plinko {
    constructor(x, y) {
      var options = {
          isStatic : false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          
        }
        
        this.radius = 10;
        this.body = Bodies.circle(x, y, 10, options);
        
        World.add(world , this.body);
    }
    display(){
      var pos = this.body.position
      var angle = this.body.angle;
      push();
      rotate(angle);
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill(225);
      ellipse( 0, 0, this.radius, this.radius);
      pop();
    }
  }