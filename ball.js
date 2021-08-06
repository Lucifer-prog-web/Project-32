class Ball{
    constructor(x,y,r){
    var options = {
        'density':2.0,
        'restitution':0.09
    }
    
    this.body=Bodies.circle(x,y,r,options);
    this.r=r
    World.add(world,this.body);
    }
  
    display(){
     var pos1=this.body.position;
     push()
     fill("red")
     ellipseMode(CENTER)
     ellipse(pos1.x,pos1.y,50,50)
     pop();
  
    }
  
  }