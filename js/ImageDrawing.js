// Stores the Images added into the global variables
	function onImagesLoaded(e){
		blockImage = imgLoader.getImageAtIndex(0);		// Block is at first index
		backgroundImage = imgLoader.getImageAtIndex(1); // Background is at second index
		gameOverImage = imgLoader.getImageAtIndex(2);  // GameOveri is at third index
		
		initGame(); // Initialize the game board
	}
	
	// Draw game board function
	function drawBoard(){
		context.drawImage(backgroundImage, 0, 0, 320, 640, 0, 0, 320, 640);
		
		// The board should be empty at the beginning, so clear the board if it's not empty
		for(var r = 0; r < rows; r++){
			for(var c = 0; c < column; c++){
				if(gameData[r][c] != 0){
					context.drawImage(blockImage, (gameData[r][c] - 1) * SIZE, 0, SIZE, SIZE, c * SIZE, r * SIZE, SIZE, SIZE);
				}
			}
		}
	}
	
	// Draws the tetris pieces
	function drawPiece(p){
		var drawX = p.gridX, drawY = p.gridY, state = p.currentState;
		
		// Loop through the state of the piece and draw it out accordingly
		for(var r = 0, len = p.states[state].length; r < len; r++){
			for(var c = 0, len2 = p.states[state][r].length; c < len2; c++){
				if(p.states[state][r][c] == 1 && drawY >= 0){		
					context.drawImage(blockImage, p.color * SIZE, 0, SIZE, SIZE, drawX * SIZE, drawY * SIZE, SIZE, SIZE);
				}
				drawX++;	// Increment X by 1
			}
			drawX = p.gridX;	// Reset X
			drawY++;			// Increment Y by 1
		}
	}