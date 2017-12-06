/* A Brick in the game */

//Constructor
var Brick = function(context, xPos, yPos, color, width, height) {
    this.context = context;
    this.BrickX = xPos;
    this.BrickY = yPos;
    this.Brickcolor = color;
    this.Brickwidth = width;
    this.Brickheight = height;
}

//Rectangle draw
Brick.prototype.draw = function() {
    this.context.beginPath();
    this.context.rect(this.BrickX, this.BrickY, this.Brickwidth, this.Brickheight);
    this.context.fillStyle = "red";
    this.context.fill();
    this.context.closePath();
}

