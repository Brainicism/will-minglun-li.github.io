// Get touch screen input for mobile device
document.body.addEventListener('touchstart', function(e) {
	// Make sure the touch input don't scroll the screen
	e.preventDefault();
	
	// Get the X, Y, and id value
	touchX = e.touches[0].pageX;
	touchY = e.touches[0].pageY;
	touchID = e.touches[0].identifier;
} );

document.body.addEventListener('touchmove', function(e) {
	// Make sure the touch input don't scroll the screen
	e.preventDefault();
	
	// Calculate the displacement of Y-coordinate
	var diffY = e.touches[0].pageY - touchY;
	
	// Move the piece is the displacement reaches a certain value
	if (diffY > 60){
		if ( checkMove(currentPiece.gridX, currentPiece.gridY + 1, currentPiece.currentState) )
			currentPiece.gridY++;
	}
	
} );

document.body.addEventListener('touchend', function(e) {
	// Make sure the touch input don't scroll the screen
	e.preventDefault();
	
	var touchEndX, touchEndY;
	var touch = e.changedTouches.item(0);
	
	// try catch statement for error check
	try{
		touchEndX = touch.pageX;
		touchEndY = touch.pageY;
	}
	catch (err){
		alert(err);
		return;
	}
	
	// Get the difference between inital touch positon and end touch position
	var diffX = Math.abs(touchEndX - touchX);
	var diffY = Math.abs(touchEndY - touchY);
	
	// If the difference of touch position is below a certain amount, assume it is a tap
	if (diffX < 10 && diffY < 10){
		// Change the state of the piece
		var newState = currentPiece.currentState - 1;
		
		if(newState < 0)
			newState = currentPiece.states.length - 1;
			
		if ( checkMove(currentPiece.gridX, currentPiece.gridY, newState) )
			currentPiece.currentState = newState;
	}
	else if (diffX > diffY){
		if (touchEndX < touchX){ // If the user swipes left, move the piece left
			if ( checkMove(currentPiece.gridX - 1, currentPiece.gridY, currentPiece.currentState) )
				currentPiece.gridX--;
		}
	else{	// else if the user swipes right, move the piece right
		if ( checkMove(currentPiece.gridX + 1, currentPiece.gridY, currentPiece.currentState) )
			currentPiece.gridX++;
		}
	}
	
} );

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