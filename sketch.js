// defined in setup
var player = null;
var gravity = null;

var population = 4;

var alive = true;

var points = 0;

var world;
var bodies = [];

function setup() {
   createCanvas(windowWidth, windowHeight);
   player = new Player(width / 2, height / 2, 0);

   gravity = createVector(0, 0.02);

   for(var i = 0; i < population; i++) {
      bodies.push(new Person(random(width), random(height)));
      bodies.push(new Obstacle(random(width), random(height)));
   }

}

function draw() {
   scale(0.9);
   if(alive) {
      background(255);
   } else {
      background(0);
   }

   player.show();

   for(var i = 0; i < population; i++) {
      bodies[i].addForce(gravity);
      bodies[i].hits();
      bodies[i].edges();
      bodies[i].update();
      bodies[i].show();
   }


   if(alive) {
      fill(0);
   } else {
      fill(255);
   }
   textSize(20);
   text(points, 20, 40);
<<<<<<< HEAD

}

function mousePressed() {
   var tar = createVector(mouseX, mouseY);
   var loc = player.pos.copy();
   var dir = tar.sub(loc);
   var force = dir.mult(0.0005);
   player.addForce(force);
=======
>>>>>>> master
}
