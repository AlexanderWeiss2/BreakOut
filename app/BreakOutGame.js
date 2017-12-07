/*
 * This is the main script for the breakout application.
 *
 * Mouse interaction is captured here and the animation loop runs here, so that
 * the game can be drawn. This is also a good place to calculate random speeds for the
 * ball.
 *
 */
var breakOutGame = (function (Brick, Ball, Paddle) {

	// private vars and constants
    var privateContext;
	var privateCanvas;
    
	var GAME_WIDTH = 600;
	var GAME_HEIGHT = 500;
	var BRICK_ROWS = 5;
	var BRICK_COLUMNS = 13;
	var BALLSIZE = 10;
	var BRICK_WIDTH = 40;
	var BRICK_HEIGHT = 10;
    var BRICK_XPOS = 10;
    var BRICK_YPOS = 10;
    var BRICK_COLOR = "red";
    var BRICK_PADDING = 10;
    var BRICK_OFFSETTOP = 10;
    var BRICK_OFFSETLEFT = 10;
    var BallSpeedX = 2;
    var BallSpeedY = -2;
    
	var brick = new Brick(privateContext, BRICK_XPOS, BRICK_YPOS, BRICK_COLOR, BRICK_WIDTH, BRICK_HEIGHT);
	var paddle = new Paddle(privateContext, GAME_WIDTH, GAME_HEIGHT);
	var ball = new Ball(privateContext, BRICK_XPOS, BRICK_YPOS, BALLSIZE);

	function privateDraw() {
        console.log("Drawing!");
        brick.draw();
        ball.draw();
        paddle.draw();
        window.requestAnimationFrame(privateDraw);
	}

	function privateSetContext(canvas) {
		privateCanvas = canvas;
		privateContext = canvas.getContext("2d");
	}

    function privateInitContent(){
        var bricks = [];
            for (var i = 0; i < BRICK_COLUMNS; i++){
                bricks[i] = [];
                for (var j = 0; j < BRICK_ROWS; j++){
                    bricks[i][j] = { x:0, y:0 };
                    
                    var brick = new Brick(privateContext, BRICK_XPOS, BRICK_YPOS, BRICK_COLOR, BRICK_WIDTH, BRICK_HEIGHT);
                    
                    bricks[i][j].push(brick);
                    }
                }
            }
    
	function publicInit(canvas, difficulty) {
        console.log("Breakout, here we go!");
		privateSetContext(canvas);
		window.requestAnimationFrame(privateDraw);
	}

	return {init: publicInit};
})();

var canvas = document.getElementById("breakoutcanvas");
breakOutGame.init(canvas);