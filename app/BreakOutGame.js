/*
 * This is the main script for the breakout application.
 *
 * Mouse interaction is captured here and the animation loop runs here, so that
 * the game can be drawn. This is also a good place to calculate random speeds for the
 * ball.
 *
 */
var breakOutGame = (function () {

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
    
	var bricks = [];
	var paddle;
	var ball;

    //Zeichne Ball
	function privateDraw() {
        console.log("Drawing!");
        privateContext.beginPath();
        privateContext.arc(240, 160, BALLSIZE, 0, Math.PI*2, false);
        privateContext.fillStyle = "#0095DD";
        privateContext.fill();
        privateContext.closePath();
        window.requestAnimationFrame(privateDraw);
	}
    
    //Canvas 2D Umgebung
	function privateSetContext(canvas) {
		privateCanvas = canvas;
		privateContext = canvas.getContext("2d");
	}
    
    //Schwierigkeitsgrad
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