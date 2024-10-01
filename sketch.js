var t; 
let colors = ['#8C7853'];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background("rgba(0,0,0,0)");
  t = 10;
  noFill();
  noStroke();
}

function draw() {
  var x1 = width * noise(t + 15);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 35);
  var x4 = width * noise(t + 45);
  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(t + 75);
  var y4 = height * noise(t + 85);
  
  let randomColor1 = random(colors);
  
  // Extract the RGB components from the hex color
  let r = red(randomColor1);
  let g = green(randomColor1);
  let b = blue(randomColor1);
  
  // Set the stroke with 10% transparency
  stroke(r, g, b, 20); // 25 is 10% of 255

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.005;

  // Clear the background every 500 frames using mod (%) operator
  if (frameCount % 500 == 0) {
    clear();
  }
}
