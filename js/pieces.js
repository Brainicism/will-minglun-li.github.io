// Representing the blocks using 1s and 0s
// L shaped piece 
function TetrisPieceL(){ 	
	this.state1 = [ [1, 0],		// O
					[1, 0],		// O
					[1, 1] ];	// O O
					
	this.state2 = [ [0, 0, 1],		//     O
			        [1, 1, 1] ];	// O O O
					
	this.state3 = [ [1, 1],		// O O
					[0, 1],		//   O
					[0, 1] ]; 	//   O
					
	this.state4 = [ [1, 1, 1],		// O O O
					[1, 0, 0] ];	// O   
	
	this.states = [this.state1, this.state2, this.state3, this.state4];
	this.currentState = 0;
	
	this.color = 0;
	this.gridX = 4;
	this.gridY = -3;
}

// Reversed L shaped piece
function TetrisPieceReverseL(){ 	
	this.state1 = [ [0, 1],		// 	 O
					[0, 1],		// 	 O
					[1, 1] ];	// O O
					
	this.state2 = [ [1, 0, 0],		// O
			        [1, 1, 1] ];	// O O O
					
	this.state3 = [ [1, 1],		// O O
					[1, 0],		// O
					[1, 0] ]; 	// O
					
	this.state4 = [ [1, 1, 1],		// O O O
					[0, 0, 1] ];	//     O   
	
	this.states = [this.state1, this.state2, this.state3, this.state4];
	this.currentState = 0;
	
	this.color = 0;
	this.gridX = 4;
	this.gridY = -3;
}

// The 2x2 Block shaped piece 
function TetrisPieceBlock(){
	this.state = [ [1, 1],		// O O
				   [1, 1] ];	// O O
	
	this.states = [this.state];
	
	this.currentState = 0;
	this.color = 0; 
	this.gridX = 4;
	this.gridY = -2;
}

// Line shaped piece 
function TetrisPieceLine(){
	this.state1 = [ [1, 1, 1, 1] ];  // O O O O
	
	this.state2 = [ [1],	// O
					[1],	// O
					[1],	// O
					[1] ];	// O
	
	this.states = [this.state1, this.state2];
	this.currentState = 0;
	
	this.color = 0;
	this.gridX = 4;
	this.gridY = -4;
}

// T shaped piece
function TetrisPieceT(){
	this.state1 = [ [1, 1, 1],		// O O O
					[0, 1, 0] ];	//   O
					
	this.state2 = [ [1, 0], 	// O
					[1, 1],		// O O
					[1, 0] ];   // O
					
	this.state3 = [ [0, 1, 0],		//   O 
					[1, 1, 1] ];	// O O O
					
	this.state4 = [ [0, 1], 	//   O 
					[1, 1],		// O O
					[0, 1] ];   //   O
					
	this.states = [this.state1, this.state2, this.state3, this.state4];
	this.currentState = 0;
	
	this.color = 0;
	this.gridX = 4;
	this.gridY = -3;
}

// Z shaped piece
function TetrisPieceZ(){
	this.state1 = [ [1, 1, 0],		// O O
					[0, 1, 1] ];	//   O O
					
	this.state2 = [ [0, 1],		//   O
					[1, 1],		// O O
					[1, 0]];	// O
					
	this.states = [this.state1, this.state2];
	this.currentState = 0;
	
	this.color = 0;
	this.gridX = 4;
	this.gridY = -3;
}

// Reverse Z shaped piece
function TetrisPieceReverseZ(){
	this.state1 = [ [0, 1, 1],		//   O O
					[1, 1, 0] ];	// O O 
					
	this.state2 = [ [1, 0],		// O  
					[1, 1],		// O O
					[0, 1]];	//   O
					
	this.states = [this.state1, this.state2];
	this.currentState = 0;
	
	this.color = 0;
	this.gridX = 4;
	this.gridY = -3;
}

// Get a random Tetris piece
function getRandomPiece(){
	var random = Math.floor(Math.random() * 7);
	var piece; 
	
	switch (random){
		case 0: 
			piece = new TetrisPieceL();
			break;
		
		case 1: 
			piece = new TetrisPieceBlock();
			break;
			
		case 2:
			piece = new TetrisPieceReverseZ();
			break;
			
		case 3:
			piece = new TetrisPieceReverseL();
			break;
			
		case 4:
			piece = new TetrisPieceLine();
			break;
			
		case 5:
			piece = new TetrisPieceT();
			break;
			
		case 6:
			piece = new TetrisPieceZ();
			break;
	}
	
	piece.color = Math.floor(Math.random() * 8);
	return piece;
}