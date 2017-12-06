/* The ball in the game */
var Ball = function(context, BALLSIZE) {
    this.context = context;
    this.ballsize = BALLSIZE;
}

// Ball draw
Ball.prototype.draw = function(privateContext, BALLSIZE) {
    privateContext.beginPath();
    privateContext.arc(240, 160, BALLSIZE, 0, Math.PI*2, false);
    privateContext.fillStyle = "#0095DD";
    privateContext.fill();
    privateContext.closePath();
}

// Left & Right
Ball.prototype.bounceHorizontally = function() {
}

// Top & Bottom
Ball.prototype.bounceVertically = function() {
}