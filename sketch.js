var pi;
var inside=0, outside=0;

function displayPoint(x,y){
	stroke("rgba(255, 177, 43, .6)");
	point(x, y);
}

function setup() {
	createCanvas(500,500);
	background(50);
	pi = createDiv("0.0000000000");
	pi.style("font-size", "100px");
}

function draw() {
	noFill();
	stroke("#d32347");
	strokeWeight(2);
	translate(width/2, height/2);
	ellipse(0, 0, width, height);
	for(var i=0; i<100; i++){
		rx = random(-width/2, width/2);
		ry = random(-height/2, height/2);
		displayPoint(rx,ry);
		distanceSq = rx * rx + ry *ry;
		if(distanceSq<(width/2)*(width/2)) inside+=1;
		else outside+=1;
	}

	pi_val = 4*inside/(outside+inside);
	pi.html(pi_val);
}