function setup() {
	background(220)
  createCanvas(400, 200);
  colorMode(HSB, 360, 100, 100, 100);
}

var x = 0;
var h = 10;
var x1=0;
var changinx1=1;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x + random(-10, 10), height-10-random(h));
  
  x = x + 10;
  
  if (x > width) {
    x = random(10);
    h = h + 3;
  }
  
  if(mouseIsPressed) {
    noStroke();
    fill(220);
    rect(x1,-1,2, height-15);
    h = 10;
		x1=x1+changinx1
  }

  
  noStroke();
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
