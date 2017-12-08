/* The ball in the game */

// Ball Constructor
var Ball = function(context, xPos, yPos, BALLSIZE, speedx, speedy) {
        this.context = context;
        this.BALLXPos = xPos;
        this.BALLYPos = yPos;
        this.Ballsize = BALLSIZE;
        this.SpeedX = speedx;
        this.SpeedY = speedy;
}

// Ball draw
Ball.prototype.draw = function() {
        this.context.beginPath();
        this.context.arc(this.BALLXPos, this.BALLYPos, this.Ballsize, 0, Math.PI*2);
        this.context.fillStyle = "#0095DD";
        this.context.fill();
        this.context.closePath();
}

// Left & Right
Ball.prototype.bounceHorizontally = function() {
}

// Top & Bottom
Ball.prototype.bounceVertically = function() {
}