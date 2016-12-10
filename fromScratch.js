//hangman pseudo code

//variables
//====================================

var losses,
      wins,
      guesses,
      gameOver = false,
      turnsLeft =8,
      chosenStuff,
      choice;

var stuff = {
	"special poop",
	"something else",
	"yet another thing"
};

// functions
//========================================
function randomChoice(){
	choice = Math.random()*(1 + stuff.length);
	console.log(stuff[choice]);
};


var resetVars(){
//
guesses = 0;
turnsLeft = 8;	
}


var updateDom(turnsLeft, guesses, puzzleState){
	// turns 

	// image

	// puzzle state
}


var function newGame(){
	//reset vars
resetVars();
	//select the hidden answer
randomChoice();

	//update DOM 
updateDom(turnsLeft, guesses, puzzleState){

}

var function resetGame() {
	//new hidden answer

	// game play variables adjusted 
	// make sure reset without solving equals a loss
}



// nest functions inside main process
