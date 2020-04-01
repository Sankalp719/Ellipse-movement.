
var r = 0;
var g = 50;
var b = 255;



function setup(){
 createCanvas(1200,400);


}


function draw(){
  
   





  //change the value of Red based on the mouse movement about the X axis
  r = map(mouseX,0,100,100,200); 
  // change the value of Green based on the mouse movement about the X axis
  g = map(mouseY,0,100,200,255);
  // change the value of Blue based on the mouse movement about the X axis
  b = map(mouseX,0,200,100,245);

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
  background(r,g,b);

  // Remember to fill the canvas with white paint before creating the ellipse.
  fill("white");
  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse (mouseX,mouseY,25,25);
  
  
}