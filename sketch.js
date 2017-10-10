function setup() {
  createCanvas(500, 500);
  background(color('#1b1a1e'));
  angleMode(DEGREES);
  frameRate(20);
  rectMode(CENTER);
  
}

function draw() {
  
  translate(width/2,height/2);
  rotate(frameCount);
 
  //variabili
  var angle=sin(frameCount) * 180;
  
  //colors and stroke
  stroke(lerpColor(color('#c6b487'), color('#b72e45'), frameCount/200))
  strokeWeight(0.2);
  noFill();
  
  //elements
  line(0, 0, 0,angle);
  line(0, 0, -angle, 0);
  line(0, 0, 0,-angle);
  line(0, 0, angle, 0);
  
  rect(0, 0, angle,angle+90);
  rect(0, 0, angle+90, angle);
  
  //no loop
  if (frameCount == 180) {
  noLoop();
  }

}
