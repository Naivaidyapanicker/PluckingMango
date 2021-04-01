class Throw{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 1
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world,this.throw);
    }

    fly(){
        this.throw.bodyA = null;
    }

    launch(bodyA){
        this.throw.bodyA = bodyA;
    }

    display(){
      if(this.throw.bodyA){
          line (this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)
      }
    }
}