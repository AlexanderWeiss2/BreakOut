/* The ball in the game */
var Ball = function() {
}

// Ball zeichnen
Ball.prototype.draw = function(privateContext, BALLSIZE) {
    privateContext.beginPath();
    privateContext.arc(240, 160, BALLSIZE, 0, Math.PI*2, false);
    privateContext.fillStyle = "#0095DD";
    privateContext.fill();
    privateContext.closePath();
    
}

// Rechts und Links
Ball.prototype.bounceHorizontally = function() {
}

// Oben und Unten
Ball.prototype.bounceVertically = function() {
}