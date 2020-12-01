
var fixedRect,movingRect;




function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(400, 200, 50,80);
 movingRect=createSprite(400,400,80,50);
 fixedRect.shapeColor="blue";
 movingRect.shapeColor="lightGreen";
}

function draw() {
  background(0);  
movingRect.x=mouseX;
movingRect.y=mouseY;

if (movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
  movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
  fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2  ){
    fixedRect.shapeColor="pink";
    movingRect.shapeColor="red";
    
}
else {
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="lightGreen";
}


  drawSprites();
}




