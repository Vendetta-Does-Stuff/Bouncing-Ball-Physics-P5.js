function setup() {
	createCanvas(windowWidth - 18, windowHeight - 20);
	colorMode(HSL);
	background(32);
	noStroke();
}

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let iX = 0; // Initial horizontal velocity; positive is right, negative is left
let iY = 0; // Initial vertical velocity; negative is up, positive is down
const diameter = 50; // diameter of the ball
const radius = diameter / 2;
const energyAbsorb = .33; // energy absorption of the floor and walls; from 0.0 to 1.0
const friction = .33; // friction of the floor; from 0.0 to 1.0
const gravity = 1; // gravity

function draw() {
	colorMode(RGB);
	background(85, 63);
	colorMode(HSL);
	if (Math.abs(iX) > Math.abs(iY)) {
		fill(0, map(Math.abs(iX), 0, 70, 0, 100), map(Math.abs(iX), 0, 70, 75, 60));
	} else {
		fill(0, map(Math.abs(iY), 0, 70, 0, 100), map(Math.abs(iY), 0, 70, 75, 60));
	} // The ball gradually gets redder as the velocity increases
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
	/* if (Math.abs(iX) > Math.abs(iY)) {
		console.log(`Velocity: ${Math.abs(iX)}`);
	} else {
		console.log(`Velocity: ${Math.abs(iY)}`);
	} */ // Disabling this by default since it takes a toll on performance
}

function mousePressed() {
	x = width / 2; // resetting x
	y = height / 2; // resetting y
	iX = -(width / 2 - mouseX) * .1; // horizontal avelocity depends on how far the cursor is from the center horizontally
	iY = -(height / 2 - mouseY) * .1; // vertical velocity depends on how far the cursor is from the center vertically
}
