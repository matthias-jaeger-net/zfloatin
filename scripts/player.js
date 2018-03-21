function Player(x, y) {
   this.pos = createVector(x, y);
   this.ang = 0;
}

Player.prototype.show = function() {
   push();
   translate(this.pos.x, this.pos.y);
   rotate(this.ang);
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
