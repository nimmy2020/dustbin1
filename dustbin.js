class Dustbin{
	constructor(x,y){
		this.width=200;
		this.height=10;
		var options={
			isStatic:true
		}
		this.bottombody=Bodies.rectangle(x,y,this.width,this.height,options);
		World.add(world,this.bottombody);


		this.leftbody=Bodies.rectangle(x-this.width/2,500,this.height,100,options);
		World.add(world,this.leftbody);

		this.rightbody=Bodies.rectangle(x+this.width/2,500,this.height,100,options);
		World.add(world,this.rightbody);	
	}
	display(){
		var bottompos=this.bottombody.position;
		rectMode(CENTER);
		fill (255);
		rect(bottompos.x,bottompos.y,this.width,this.height);

		var leftpos=this.leftbody.position;
		rect(leftpos.x,leftpos.y,this.height,100);

		var rightpos=this.rightbody.position;
		rect(rightpos.x,rightpos.y,this.height,100);
	
	}

}
