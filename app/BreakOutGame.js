/*
 * This is the main script for the breakout application.
 *
 * Mouse interaction is captured here and the animation loop runs here, so that
 * the game can be drawn. This is also a good place to calculate random speeds for the
 * ball.
 *
 */
var breakOutGame = (function (Brick) {

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
    
	var bricks = [];
	var paddle;
	var ball;

	function privateDraw() {
        console.log("Drawing!");
        Brick.draw();
        Ball.draw();
        Paddle.draw();
        window.requestAnimationFrame(privateDraw);
	}

	function privateSetContext(canvas) {
		privateCanvas = canvas;
		privateContext = canvas.getContext("2d");
	}

    function privateInitContent(){
        var bricks = [];
            for (var r = 0; r < BRICK_ROWS; r++){
                for (var c = 0; c < BRICK_COLUMNS; c++){
                    var brick[r][c] = new Brick(privateContext, BRICK_XPOS, BRICK_YPOS, BRICK_COLOR, BRICK_WIDTH, BRICK_HEIGHT);
                    bricks[r][c].push(brick);
                    }
                }
            }
    
	function publicInit(canvas, difficulty) {
        console.log("Breakout, here we go!");
		privateSetContext(canvas);
		window.requestAnimationFrame(privateDraw);
	}

	return {
		init: publicInit
	};
})();

var canvas = document.getElementById("breakoutcanvas");
breakOutGame.init(canvas);