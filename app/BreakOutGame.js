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
    var privateContext; // 2d
	var privateCanvas; // canvas
    
    // Resolution
	var GAME_WIDTH = 600;
	var GAME_HEIGHT = 500;
    
    // ROWS & COLUMNS
	var BRICK_ROWS = 5;
	var BRICK_COLUMNS = 13;
    
    // Radius
	var BALLSIZE = 10;
    
    // WIDTH & HEIGHT
	var BRICK_WIDTH = 40;
	var BRICK_HEIGHT = 10;
    
    // Array & Loop
	var bricks = [];
    var i;
    var j;
    
    // Offset & Padding
    var brickPadding = 10;
    var brickOffsetTop = 10;
    var brickOffsetLeft = 5;
    
    // Objects    
	var paddle;
	var ball;

    
    function drawBrick() {
            for(i=0; i<BRICK_COLUMNS; i++) {
                bricks[i] = [];
                    for(j=0; j<BRICK_ROWS; j++) {
                        bricks[i][j] = {x: 0, y: 0};
            }
        }
        
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
    }
    
    function Brickupdate() {

    }

    function drawPaddle() {
        var paddleHeight = 10;
        var paddleWidth = 75;
        var paddleX = (canvas.width-paddleWidth)/2;
        
        
        
        
        
        privateContext.beginPath();
        privateContext.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        privateContext.fillStyle = "#0095DD";
        privateContext.fill();
        privateContext.closePath();
    }
    setInterval(drawPaddle, 10)
    function Paddleupdate() {
        
    }
    
    function drawBall() {
        var x = canvas.width/2;
        var y = canvas.height/2;
        
        privateContext.beginPath();
        privateContext.arc(x, y, BALLSIZE, 0, Math.PI*2);
        privateContext.fillStyle = "green";
        privateContext.fill();
        privateContext.closePath();
    }
    
    function Ballupdate() {
        
    }
    
    //Paint
	function privateDraw() {
        console.log("Drawing!");
        
        //draw Brick & update
        drawBrick();
        Brickupdate();
        
        //draw Paddle & update
        drawPaddle();
        Paddleupdate();
        
        //draw Ball & update
        drawBall();
        Ballupdate();
        
	}
    
    //Canvas 2D 
	function privateSetContext(canvas) {
		privateCanvas = canvas;
		privateContext = canvas.getContext("2d");
	}
    
    //Difficulty
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