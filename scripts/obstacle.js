function Obstacle(x, y) {
   this.init(x, y);
}

Obstacle.prototype.init = function(x, y) {
   this.vel = createVector(0, 0);
   this.acc = createVector(0, random(0, 0));
   this.pos = createVector(x, y);
}

Obstacle.prototype.show = function() {
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
  if(alive) {
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

Obstacle.prototype.update = function() {
   this.vel.add(this.acc);
   this.pos.add(this.vel);
   this.acc.mult(0);
};

Obstacle.prototype.edges = function() {
   if(this.pos.x < 0 || this.pos.x > width) {
      this.reset();
   } else if (this.pos.y > height) {
      this.reset();
   }
};

Obstacle.prototype.reset = function() {
   this.init(random(width), -100, random(TAU));
};

Obstacle.prototype.hits = function() {
   var d = dist(this.pos.x, this.pos.y, player.pos.x, player.pos.y);
   if (d < 50 ) {
      this.reset();
      if (points > 0 ) {
         points--;
      }
      background(200, 40, 100);
   }
};

Obstacle.prototype.addForce = function(force) {
   this.acc.add(force);
};
