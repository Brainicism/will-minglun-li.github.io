// Get Keyboard input for Computer
function getInput(e){

	// Checks if the event is valid
	if (!e){
		var e = window.event;
	}
	
	// Makes it so arrow keys don't scroll the screen
	e.preventDefault();
	
	// Do different operations for different events
	if (!isGameOver){
		switch (e.keyCode){
			case 37:	// Left arrow, the piece will go left if the move is valid
				{
					if(checkMove(currentPiece.gridX - 1, currentPiece.gridY, currentPiece.currentState))
						currentPiece.gridX--;
				}
				break;
				
			case 39:	// Right arrow, the piece will go right if the move is valid
				{
					if(checkMove(currentPiece.gridX + 1, currentPiece.gridY, currentPiece.currentState))
						currentPiece.gridX++;
				}
				break;
				
			case 38:	// Up arrow, will change state if the situation is valid
				{
					var newState = currentPiece.currentState - 1;
					if (newState < 0)
						newState = currentPiece.states.length - 1;
						
					if(checkMove(currentPiece.gridX, currentPiece.gridY, newState)){
						currentPiece.currentState = newState; 				
					}
				}
				break;
				
			case 40:	// Down arrow, the piece will move down if the move is valid
				{
					if(checkMove(currentPiece.gridX, currentPiece.gridY + 1, currentPiece.currentState))
						currentPiece.gridY++;
				}
				break;
		}
	}
	else{
		initGame();
	}
}