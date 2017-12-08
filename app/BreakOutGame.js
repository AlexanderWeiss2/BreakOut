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
    
    //Resolution
	var GAME_WIDTH = 600;
	var GAME_HEIGHT = 500;
    
    // Score
    var score = 0;
    
    // var Bricks
	var BRICK_ROWS = 5;
	var BRICK_COLUMNS = 13;
	var BRICK_WIDTH = 40;
	var BRICK_HEIGHT = 10;
    var BRICK_COLOR = "red";
    var BRICK_PADDING = 10;
    var BRICK_OFFSETTOP = 10;
    var BRICK_OFFSETLEFT = 5;
    var i; // counter Columns
    var j; // counter Rows
    
    // var Ball
    var BALLSIZE = 10;
    var BallSpeedX = 2;
    var BallSpeedY = -2;
    var BallX = GAME_WIDTH/2;
    var BallY = GAME_HEIGHT/2;
    
    // var Paddle
    var PaddleWidth = 75;
    var PaddleHeight = 10;
    var PaddleX = (GAME_WIDTH-PaddleWidth)/2;
    var PaddleY = GAME_HEIGHT-PaddleHeight;
    var RightPressed = false; //boolean Right
    var LeftPressed = false; //boolean Left
    
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);
   
    var bricks = [];
        for (i = 0; i < BRICK_COLUMNS; i++){
            bricks[i] = [];
                for (j = 0; j < BRICK_ROWS; j++){
                    bricks[i][j] = { x:0, y:0, status: 1 };    
                }
        }
    
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
    
    function mouseMoveHandler(e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width) {
            PaddleX = relativeX - PaddleWidth/2;
        }
    }

    function drawBall() {
        privateContext.beginPath();
        privateContext.arc(BallX, BallY, BALLSIZE, 0, Math.PI*2);
        privateContext.fillStyle = "green";
        privateContext.fill();
        privateContext.closePath();
    }    
    
    function drawPaddle() {
        privateContext.beginPath();
        privateContext.rect(PaddleX, PaddleY, PaddleWidth, PaddleHeight);
        privateContext.fillStyle = "#0095DD";
        privateContext.fill();
        privateContext.closePath();
    }    
    
    function drawBricks() {
        for(i=0; i<BRICK_COLUMNS; i++) {
            for(j=0; j<BRICK_ROWS; j++) {
                if(bricks[i][j].status == 1) {
                var brickX = (i*(BRICK_WIDTH+BRICK_PADDING))+BRICK_OFFSETLEFT;
                var brickY = (j*(BRICK_HEIGHT+BRICK_PADDING))+BRICK_OFFSETTOP;
                bricks[i][j].x = brickX;
                bricks[i][j].y = brickY;
            privateContext.beginPath();
            privateContext.rect(brickX, brickY, BRICK_WIDTH, BRICK_HEIGHT);
            privateContext.fillStyle = "red";
            privateContext.fill();
            privateContext.closePath();
                }
            }
        }
    }
    
    function CollisionDetection() {
        for(i=0; i<BRICK_COLUMNS; i++) {
            for(j=0; j<BRICK_ROWS; j++) {
                var b = bricks[i][j];
                if(b.status == 1) {
                if(BallX > b.x && BallX < b.x+BRICK_WIDTH && BallY > b.y && BallY < b.y+BRICK_HEIGHT) {
                    BallSpeedY = -BallSpeedY;
                    b.status = 0;
                    score++;
                    if(score == BRICK_ROWS*BRICK_COLUMNS) {
                        alert("YOU WIN, CONGRATULATIONS");
                        document.location.reload();
                        }
                    }
                }
            }
        }
    }
    
    function drawScore() {
        privateContext.font = "16px Arial";
        privateContext.fillStyle = "#00FF00";
        privateContext.fillText("Score:" +score,  8, 20);
    }
    
	function privateDraw() {
        console.log("Drawing!");
        privateContext.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        CollisionDetection();
        
        if(BallX + BallSpeedX > GAME_WIDTH-BALLSIZE || BallX + BallSpeedX < BALLSIZE) {
            BallSpeedX = -BallSpeedX;
        }
        
        if(BallY + BallSpeedY < BALLSIZE) {
            BallSpeedY = -BallSpeedY;
        }
            if(BallY + BallSpeedY > GAME_HEIGHT-BALLSIZE) {
                
                if(BallX > PaddleX && BallX < PaddleX + PaddleWidth) {
                    
                    if(BallY = BallY-PaddleHeight) {
                    BallSpeedY = -BallSpeedY;
                    }
                }
                
                else {
                    alert("GAME OVER");
                    document.location.reload();
                }
            }
        
        if(RightPressed && PaddleX < GAME_WIDTH-PaddleWidth) {
            PaddleX += 7; 
        }
        
        else if(LeftPressed && PaddleX > 0) {
            PaddleX -= 7;
        }
        
        BallX += BallSpeedX; 
        BallY += BallSpeedY;
        
        window.requestAnimationFrame(privateDraw);
	}

	function privateSetContext(canvas) {
		privateCanvas = canvas;
		privateContext = canvas.getContext("2d");
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