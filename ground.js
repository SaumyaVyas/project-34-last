class Ground {
    constructor(x,y,width,height) {
    var options = {
    isStatic: true
    }
    this.height = height;
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.body);
    this.width = width;
    }
    display(){
    
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    fill("white");
    } }
  