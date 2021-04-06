var rectangle1 ,rectangle2

function setup() {
  createCanvas(800,400);
  rectangle1 = createSprite(400, 200, 50, 50);
  rectangle2 = createSprite(400,120,50,50);
  rectangle1.shapeColor="blue";
  rectangle2.shapeColor="blue";
  rectangle1.debug=true;
  rectangle2.debug=true;

}

function draw() {
  background(255,255,255); 
  rectangle2.x=mouseX;
  rectangle2.y=mouseY;
  if(rectangle2.x-rectangle1.x < rectangle1.width/2+rectangle2.width/2) {
    rectangle1.shapeColor="green";
    rectangle2.shapeColor="green";

  }
 else{
   rectangle2.shapeColor="blue";
   rectangle2.shapeColor="blue";
 }
  drawSprites();
}