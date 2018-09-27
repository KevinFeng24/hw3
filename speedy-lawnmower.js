function setup() {
  createCanvas(400, 200);
  colorMode(HSB, 360, 100, 100, 100);
	frameRate(100)
}

var x = 0;
var x1= 0;
var h = 10;
var h1= 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x + random(-10, 10), height-10-random(h));
  line(x1, height-10, x1 + random(-10, 10), height-10-random(h1));
	
  x = x + 10;
	 x1 =x1 + 10;
  
  if (x > width) {
    x = random(10);
    h = h + 3;
  }
	if (x1 > width) {
    x1 = random(10);
    h1 = h1 + 3;
  }
  
  if (random() > 0.999) {
    noStroke();
    fill(255);
    rect(-1, -1, width+2, height-15);
    h = 10;
		h1=10;
  }
  
  noStroke();
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
