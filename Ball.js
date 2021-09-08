class Ball{
    constructor(x,y,r){
        var options={
            restitution: 0.02,
            density:0.01
        }
        this.body= Bodies.rectangle(x,y,r,options);
        World.add(world, this.body);
 
    }
    
    display(){
        push();
        ellipseMode(CENTER);
        fill("white");
        ellipse(this.body.position.x, this.body.position.y, this.body.position.w, this.body.position.h);
        pop();
    }
}