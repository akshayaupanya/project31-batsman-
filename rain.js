class Rain{
    constructor(x,y){
        var option = {
            restitution: 0.1,
            friction: 0.1
            
        }
        this.body = Bodies.circle(x,y,3,option);
        this.radius = 3;
     
        World.add(world,this.body);
    }
    update(){
        
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,800)})
        }
    }

    display(){
        ellipseMode(RADIUS);
        var pos = this.body.position
        fill('darkblue');
    ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}