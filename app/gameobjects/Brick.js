/* A Brick in the game */

//Constructor
var Brick = function(context, xPos, yPos, color, width, height) {
    this.context = context;
    this.xPos = xPos;
    this.yPos = yPos;
    this.color = color;
    this.width = width;
    this.height = height;
}

//Rectangle draw
Brick.prototype.draw = function() {
    this.context.fillStyle = this.color;
    this.context.fillRect(this.xPos, this.yPos, this.width, this.height);
}

