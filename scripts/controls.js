function mousePressed() {
   var tar = createVector(mouseX, mouseY);
   var loc = player.pos.copy();
   var dir = loc.sub(tar).normalize();
   var force = dir.mult(0.4);

   for(var i = 0; i < population; i++) {
      bodies[i].addForce(force);
   }
}
