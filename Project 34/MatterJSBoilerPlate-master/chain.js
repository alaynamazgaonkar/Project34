class chain{
    constructor(bodyA, pointB){
       // this.offsetX=offsetX
        //this.offsetY=offsetY
        this.pointB = pointB
        this.bodyA=bodyA
        //this.pointA={x:this.offsetX,y:this.offsetY}
        var options = {
           // pointX: pointX,
            //pointY: pointY,
            //pointA:{x:this.offsetX,y:this.offsetY},
            //pointB:{x:this.offsetX,y:this.offsetY},
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 1,
            angularStiffness:1,
            length: 220
        }
        this.pointX=this.bodyA.position.x;
        this.pointY=this.bodyA.position.y-250;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null
    }

    display(){
        if(this.sling.bodyA){
        //var pointX = this.sling.bodyA.position.x;
        //var pointY = this.sling.bodyA.position.y-250;
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        //var pointB = {x:this.offsetX,y:this.offsetY}
        strokeWeight(4);
        line(pointA.x, pointA.y-30, pointB.x, pointB.y);
    }}
    
}