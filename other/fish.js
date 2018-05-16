function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(255)
	translate(200, 200)
	fill(204,126,177);
	push()
	translate(25, 0)
	rotate(0)
	ellipse(20, 0, 24, 15)
	pop()
	ellipse(0, 0, 80, 20)
	fill(255)
	ellipse(-25, -1.5, 10, 10)
	fill(0)
	ellipse(-26, -1.5, 6, 6)
	translate(-25, 3)
	rotate(0)
	fill(204,126,177)
	ellipse(20, 0, 18, 8)
}
