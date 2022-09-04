function setup() {
	createCanvas(windowWidth - 18, windowHeight - 18);
	fill(200);
	noStroke();
	rectMode(CENTER);
}

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let iX = 0; // Initial horizontal velocity; positive is right, negative is left
let iY = 0; // Initial vertical velocity; negative is up, positive is down
const diameter = 50 // diameter of the ball
const radius = diameter / 2;
const energyAbsorb = .4; // energy absorption of the floor and walls; from 0.0 to 1.0
const friction = .33; // friction of the floor; from 0.0 to 1.0
const gravity = .5; // gravity; from 0.0 to 1.0

function draw() {
	background(85);
	circle(x, y, diameter);
	iY += gravity;
	if (x <= radius || x >= width - radius) {
		if (x <= 50) {
                        while (x <= radius) {
                                x += .01;
                        }
                } else if (x >= width - radius) {
                        while (x >= width - radius) {
                                x -= .01;
                        }
                }
		iX *= -1 + energyAbsorb;
	} else if (y <= radius || y >= height - radius) {
		if (y <= 50) {
                        while (y <= radius) {
                                y += .01;
                        }
                } else if (y >= height - radius) {
                        while (y >= height - radius) {
				y -= .01;
			}
                }
		iY *= -1 + energyAbsorb;
		iX *= 1 - friction;
	}
	x += iX;
	y += iY;
}

function mousePressed() {
        x = width / 2; // resetting x
        y = height / 2; // resetting y
        iX = -(width / 2 - mouseX) * .1; // horizontal velocity depends on how far from the center the cursor is horizontally
        iY = -(height / 2 - mouseY) * .1; // vertical velocity depends on how far from the center the cursor is vertically
}
