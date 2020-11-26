class Bob {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':0,
          'frictionAir':0.0,
          'slop':1,
          'inertia':Infinity,
      }
      this.body = Bodies.circle(x, y, 40, options);
      this.radius = 40;
      this.width = this.radius*2;
      this.height = this.radius*2;
      //this.color=color
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("pink");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };