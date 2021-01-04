class Bob {
  constructor(x, y,Radius) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':6
    }
    this.body = Bodies.circle(x, y,Radius,options);
    this.radius = Radius
    //this.body.position.x = mouseX
    //this.body.position.y = mouseY
    
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius);
    pop();
  }
}
