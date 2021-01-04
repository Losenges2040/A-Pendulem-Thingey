class BaseClass{
    constructor(x, y, width, height, angle , Radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,Radius,options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        pop();
      }
}
