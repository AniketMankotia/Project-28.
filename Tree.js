class Tree{
    constructor(x,y,width,height){
        var options ={
        isStatic:true
       }

    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);

    }
    display() { 
        var pos=this.body.position; 
        push();
        translate(pos.x,pos.y);
        strokeWeight(4);
        rectMode(CENTER); 
        rect(0,0,this.x,this.y);
        pop();
    }
}