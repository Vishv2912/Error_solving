class SlingShot {
    constructor(bodyA,pointB){
    var options={
bodyA:bodyA,
pointB:pointB,
length:50,
stiffness:0.07

    }  
this.sling1=loadImage("sprites/sling1.png")    
this.sling2=loadImage("sprites/sling2.png")    
this.sling3=loadImage("sprites/sling3.png")    


this.rope=Constraint.create(options);
World.add(world,this.rope);

    }
 display(){
    image(this.sling1,230,110,50,120);
    image(this.sling2,200,110,50,75);

    if(this.rope.bodyA){
     var posA =this.rope.bodyA.position;
     var posB =this.rope.pointB;
     push();


     strokeWeight(5);
     stroke("#301608");
if(posA.x<230){
     line(posA.x-25,posA.y,posB.x-20,posB.y); 
    line(posA.x-25,posA.y,posB.x+30,posB.y); 
    image(this.sling3,posA.x-25,posA.y,10,20);
}else{
    line(posA.x+20,posA.y,posB.x-20,posB.y); 
    line(posA.x+20,posA.y,posB.x+30,posB.y); 
    image(this.sling3,posA.x+20,posA.y,10,20);

}
     pop();
 }}


 reset(){
    this.rope.bodyA=bodyA;     
}


 fly(){
this.rope.bodyA=null;     
 }
 
}
