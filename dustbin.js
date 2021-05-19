class dustbin{
constructor(x,y,width,height){
    var opts={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,opts);
    this.width=width;
    this.height=height;

    World.add(world,this.body);
}   

display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    rect(0,0,this.width,this.height);
    pop();
}
}