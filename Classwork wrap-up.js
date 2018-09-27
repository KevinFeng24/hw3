//Karen Zhang
function setup() {
  createCanvas(400, 400);
  background(0, 20, 80);
}

var fromX;
var fromY;
var toX;
var toY;
var fromx;
var fromy;
var step = 2.5;
var a;
var b;
var c;
var d;

function draw() {
  // draw background that fades stars slowly
  background(0, 20, 80, 1);
  
  // draw stars
  if (random() > 0.9) {
    stroke(255);
    point(random(width), random(height));
  }
  
  // create shooting stars
  if (random() > 0.95 && step >= 2.5) {
    fromX = random(width);
    fromY = random(height/2);
    toX = random(fromX+10, width);
    toY = random(fromY+10, height/2);
    step = 0;
	}
		
  
  // draw shooting stars
  if (step < 2.5) {
    // fade background
    let nextStep = step + 0.02;
    strokeWeight(3);
    stroke(0, 20, 80, 30);
    line(fromX, fromY, toX, toY);
    strokeWeight(1);
    // draw star
    if (step < 1) {
      stroke(255, (1-step) * 200);
      line(lerp(fromX, toX, step),     lerp(fromY, toY, step),
           lerp(fromX, toX, nextStep), lerp(fromY, toY, nextStep));
    }
    step = nextStep;
  }
    
  // draw ground
  noStroke();
  fill(0, 10, 20);
  rect(0, height*0.6, width, height);
	
  
  // draw lake
  noStroke();
  fill(0, 20, 60);
  ellipse(0, height, width*2.5, height*0.75);

	fill(0,0,0)
	rect(350,190,20,50);
	
	rect(15,170,30,70)

	ellipse(330,220,15,15);
	rect(328,220,5,20);
	
	
	
	if (frameCount % 30==0) {
		a=random(90,200)
	  b=random(100,250)
	  c=random(120,220)
	  d=random(130,230)}
	rect(50,90,70,150);
	
	fill(220,220,0,a)
	rect(60,110,20,20)
	
	fill(220,220,0,b)
	rect(90,110,20,20)
	
	fill(220,220,0,c)
	rect(60,150,20,20)
	
	fill(220,220,0,d)
	rect(90,150,20,20)
}
