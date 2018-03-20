// defined in setup
var player = null;
var gravity = null;

var others = [];
var population = 2;

var alive = true;

var points = 0;

function setup() {
   createCanvas(windowWidth, windowHeight);
   player = new ObjectInGame(width / 2, height / 2, 0);

   gravity = createVector(0, 0.02);

   for(var i = 0; i < population; i++) {
      others[i] = new ObjectInGame(random(width), random(height));
   }
}

function draw() {
   if(alive) {
      background(255);
   } else {
      background(0);
   }

   player.update();
   player.show();
   for(var i = 0; i < population; i++) {
      others[i].addForce(gravity);
      others[i].hits();
      others[i].edges();
      others[i].update();
      others[i].show();
   }

   if(alive) {
      fill(0);
   } else {
      fill(255);
   }
   textSize(20);
   text(points, 20, 40);

}

function mousePressed() {
   var tar = createVector(mouseX, mouseY);
   var loc = player.pos.copy();
   var dir = tar.sub(loc);
   var force = dir.mult(0.005);
   player.addForce(force);
}

function ObjectInGame(x, y) {
   this.init(x, y);
}

ObjectInGame.prototype.init = function(x, y) {
   this.vel = createVector(0, 0);
   this.acc = createVector(0, 0);
   this.pos = createVector(x, y);
}

ObjectInGame.prototype.show = function() {
   push();
   translate(this.pos.x, this.pos.y);
   noStroke();
   if(alive) {
      fill(0);
   } else {
      fill(255);
   }
   ellipse(0, -20, 20);
   if(alive) {
      stroke(0);
   } else {
      stroke(255);
   }
  if(!alive) {
     rotate(-PI);
     translate(0, -40);
   }
   strokeWeight(16);
   strokeCap(PROJECT);
   line(0, 20, -20, 40);
   line(0, 20, 20, 40);
   line(0, 20, 0, 5);
   pop();
};

ObjectInGame.prototype.update = function() {
   this.vel.add(this.acc);
   this.pos.add(this.vel);
   this.acc.mult(0);
};

ObjectInGame.prototype.edges = function() {
   if(this.pos.x < 0 || this.pos.x > width) {
      this.reset();
   } else if (this.pos.y > height) {
      this.reset();
   }
};

ObjectInGame.prototype.reset = function() {
   this.init(random(width), -100, random(TAU));
};

ObjectInGame.prototype.hits = function() {
   var d = dist(this.pos.x, this.pos.y, player.pos.x, player.pos.y);
   if (d < 50 ) {
      alive = !alive;
      this.reset();
      points++;
   }
};

ObjectInGame.prototype.addForce = function(force) {
   this.acc.add(force);
};
