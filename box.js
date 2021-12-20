class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.width = width;
      this.height = height;
      this.visibility = 255;
    }
    display(){
      if(this.body.speed<3){
        super.display();
      }
      else{
        //console.log(this.body.speed);
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility-5;
        pop();
      }
    }

    score(){
      if(this.visibility < 0 && this.visibility > -105){
        score++;
      }
    }
};
  