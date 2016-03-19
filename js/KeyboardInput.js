document.body.addEventListener('touchstart', function(e)
{
	e.preventDefault();
	
	touchX = e.touches[0].pageX;
	touchY = e.touches[0].pageY;
	touchId = e.touches[0].identifier;
	
} );

document.body.addEventListener('touchmove', function(e)
{
	e.preventDefault();
	
	var difY = e.touches[0].pageY - touchY;
	
	if(difY > 60)
	{
		if( checkMove(curPiece.gridx, curPiece.gridy + 1, curPiece.curState) )
			curPiece.gridy++;
	}
	
} );

document.body.addEventListener('touchend', function(e) 
{
	e.preventDefault();
	var touchEndX;
	var touchEndY;
	
	var touch = e.changedTouches.item(0);
	
	try
	{
		touchEndX = touch.pageX;
		touchEndY = touch.pageY;
	}
	catch(err)
	{
		alert(err);
		return;
	}
	
	var difX = Math.abs(touchEndX - touchX);
	var difY = Math.abs(touchEndY - touchY);
	
	if(difX < 10 && difY < 10)
	{
		var newState = curPiece.curState - 1;
		if(newState < 0)
			newState = curPiece.states.length - 1;
			
		if( checkMove(curPiece.gridx, curPiece.gridy, newState) )
			curPiece.curState = newState;
	}
	else
	if(difX > difY)
	{
		if(touchEndX < touchX)
		{
			if( checkMove(curPiece.gridx - 1, curPiece.gridy, curPiece.curState) )
				curPiece.gridx--;
		}	
		else
		{
			if( checkMove(curPiece.gridx + 1, curPiece.gridy, curPiece.curState) )
				curPiece.gridx++;
		}
	}
	
});

function getInput(e)
{
	if(!e) { var e = window.event; }
	
	e.preventDefault();
	
	if(isGameOver != true)
	{
		switch(e.keyCode)
		{
			case 37:
			{
				if( checkMove(curPiece.gridx - 1, curPiece.gridy, curPiece.curState) )
					curPiece.gridx--;
			}
			break;
			
			case 39:
			{
				if( checkMove(curPiece.gridx + 1, curPiece.gridy, curPiece.curState) )
					curPiece.gridx++;
			}
			break;
			
			case 38:
			{
				var newState = curPiece.curState - 1;
				if(newState < 0)
					newState = curPiece.states.length - 1;
					
				if( checkMove(curPiece.gridx, curPiece.gridy, newState) )
					curPiece.curState = newState;
			}
			break;
			
			case 40:
			{
				if( checkMove(curPiece.gridx, curPiece.gridy + 1, curPiece.curState) )
					curPiece.gridy++;
			}
			break;
		}
	}
	else
	{
		initGame();
	}
}