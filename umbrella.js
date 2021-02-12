class Umbrella{
    constructor(x,y){
        var option = {
            isStatic: true
        }
        this.img  =loadImage ("images/Walking Frame/walking_1.png");
        this.body = Bodies.circle(x,y,50,option);
        this.radius = 50;
        
        
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        var pos = this.body.position
        image(this.img,pos.x,pos.y+20,200,200);
    }
}