/* A Brick in the game */

//Constructor
var Brick = function(context, xPos, yPos, color, width, height) {
    this.context = context;
    this.BrickXPos = xPos;
    this.BrickYPos = yPos;
    this.BrickColor = color;
    this.BrickWidth = width;
    this.BrickHeight = height;
}

//Rectangle draw
Brick.prototype.draw = function() {
    this.context.fillStyle = this.BrickColor;
    this.context.fillRect(this.BrickXPos, this.BrickYPos, this.BrickWidth, this.BrickHeight);
}

