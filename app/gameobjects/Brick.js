/* A Brick in the game */

//Konstruktor Brick
var Brick = function(context, xPos, yPos, color, width, height) {

}

//Rechteck
Brick.prototype.draw = function(privateContext, BRICK_WIDTH, BRICK_HEIGHT) {
    privateContext.beginPath();
    privateContext.rect(10, 10, BRICK_WIDTH, BRICK_HEIGHT);
    privateContext.fillStyle = "red";
    privateContext.fill();
    privateContext.closePath();
}

