class Log {
    constructor(x, y, h, angle) {
        var log_options={
   
            restitution: 0.5,
            friction:1

        
          }
        
          this.body= Bodies.rectangle(x,y,20,h,log_options);
          Matter.Body.setAngle(this.body, angle);
          World.add(myworld,this.body);

this.w= 20;
this.h= h;

    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y)
        angleMode(RADIANS);
        rotate(this.body.angle);
        fill("blue");
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}