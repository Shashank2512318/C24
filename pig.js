class Pig {
    constructor(x, y) {
        var pig_options={
   
            restitution: 0.5

        
          }
        
          this.body= Bodies.rectangle(x,y,50,50,pig_options);
          World.add(myworld,this.body);

this.w= 50;
this.h= 50;

    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y)
        angleMode(RADIANS);
        rotate(this.body.angle);
        fill("green");
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}