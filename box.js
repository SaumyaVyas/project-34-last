class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':20,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.height = height;
      this.width = width;
      World.add(world, this.body);
    }
    display(){
      
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }