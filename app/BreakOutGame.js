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
    var privateContext; // 2d
	var privateCanvas; // canvas
    
    //Resolution
	var GAME_WIDTH = 600;
	var GAME_HEIGHT = 500;
    
    // Zeilen und Spalten
	var BRICK_ROWS = 5;
	var BRICK_COLUMNS = 13;
    
    // Radius
	var BALLSIZE = 10;
    
    // Breite und Höhe
	var BRICK_WIDTH = 40;
	var BRICK_HEIGHT = 10;
    
    // Array und Schleifen
	var bricks = [];
    var i;
    var j;
    
    // Abstand und Rand
    var brickPadding = 10;
    var brickOffsetTop = 10;
    var brickOffsetLeft = 0;
    
    for(i=0; i<BRICK_COLUMNS; i++) {
        bricks[i] = [];
        for(j=0; j<BRICK_ROWS; j++) {
            bricks[i][j] = {x: 0, y: 0};
            }
        }
    
    // Schläger
	var paddle;
    
    // Ball
	var ball;

    //Zeichne
	function privateDraw() {
        console.log("Drawing!");
        
    //drawBrick
    for(i=0; i<BRICK_COLUMNS; i++){
        for(j=0; j<BRICK_ROWS; j++) {
            var brickX = (i*(BRICK_WIDTH+brickPadding))+brickOffsetLeft;
            var brickY = (j*(BRICK_HEIGHT+brickPadding))+brickOffsetTop;
            bricks[i][j].x = 0;
            bricks[i][j].y = 0;
            privateContext.beginPath();
            privateContext.rect(brickX, brickY, BRICK_WIDTH, BRICK_HEIGHT);
            privateContext.fillStyle = "red";
            privateContext.fill();
            privateContext.closePath();
            }
        }
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