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
    var BRICK_XPOS = 10;
    var BRICK_YPOS = 10;
    var BRICK_COLOR = "red";
    var BRICK_PADDING = 10;
    var BRICK_OFFSETTOP = 10;
    var BRICK_OFFSETLEFT = 10;
    var BallSpeedX = 2;
    var BallSpeedY = -2;
    var BallX = GAME_WIDTH/2;
    var BallY = GAME_HEIGHT/2;
    var PaddleWidth = 75;
    var PaddleHeight = 10;
    var PaddleX = (GAME_WIDTH-PaddleWidth)/2;
    var PaddleY = GAME_HEIGHT-PaddleHeight;
    var RightPressed = false;
    var LeftPressed = false;
    /*
	var brick = function Brick(privateContext, BRICK_XPOS, BRICK_YPOS, BRICK_COLOR, BRICK_WIDTH, BRICK_HEIGHT) {
        
    }
	var paddle = function Paddle(privateContext, GAME_WIDTH, GAME_HEIGHT) {
        
    }
	var ball = function Ball(privateContext, BRICK_XPOS, BRICK_YPOS, BALLSIZE) {
        
    }
    */
    
    /*
    function drawbrick() {
        privateContext.beginPath();
        privateContext.rect();
        privateContext.fillStyle = "red";
        privateContext.fill();
        privateContext.closePath();
    }
    */
    function drawpaddle() {
        privateContext.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        privateContext.beginPath();
        privateContext.rect(PaddleX, PaddleY, PaddleWidth, PaddleHeight);
        privateContext.fillStyle = "#0095DD";
        privateContext.fill();
        privateContext.closePath();
        
        if(RightPressed && PaddleX < GAME_WIDTH-PaddleWidth) {
            PaddleX += 7; 
        }
        
        else if(LeftPressed && PaddleX > 0) {
            PaddleX -= 7;
        }
    }
    
    function drawball() {
        privateContext.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        privateContext.beginPath();
        privateContext.arc(BallX, BallY, BALLSIZE, 0, Math.PI*2);
        privateContext.fillStyle = "green";
        privateContext.fill();
        privateContext.closePath();
        BallX += BallSpeedX;
        BallY += BallSpeedY;
        
        if(BallX + BallSpeedX > GAME_WIDTH-BALLSIZE || BallX + BallSpeedX < BALLSIZE) {
            BallSpeedX = -BallSpeedX;
        }
        
        if (BallY + BallSpeedY > GAME_HEIGHT-BALLSIZE || BallY + BallSpeedY < BALLSIZE) {
            BallSpeedY = -BallSpeedY;
        }
        
    }
    
	function privateDraw() {
        console.log("Drawing!");
       // drawbrick();
        drawpaddle();
        //drawball();
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

    document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
    
    function keyDownHandler(e) {
        if(e.keyCode == 39) {
            RightPressed = true;
        }
        
        else if(e.keyCode == 37) {
            LeftPressed = true;
        }
    }
        
    function keyUpHandler(e) {
        if(e.keyCode == 39) {
           RightPressed = false;
        }
        
        else if(e.keyCode == 37) {
            LeftPressed = false;
        }
    }    
        
        

    
	return {init: publicInit};
})();

var canvas = document.getElementById("breakoutcanvas");
breakOutGame.init(canvas);