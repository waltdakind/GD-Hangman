// Recreate Ahmed's structure from memory
//fixing hangman
//take this puzzle logic and apply it to GD theme I created

//Global variables
//===================================================================================
    
    // game counters
      var winCounter = 0;
      var lossCounter = 0;
      var guessesRemaining =9;
    //========================          
      var incorrectLetters = [];
      var puzzleAsArrayOfLetters = [];
      var puzzleLength = 0;
      var lettersNotInPuzzle = [];
      var hangmanImage = "";
      var puzzleItems = ["jerry", "bobby", "mickey", "phil", "keith", "donna", "brent", "pigpen", "vince"];
      var puzzlePlaceholder = [];


//Functions
//===================================================================================

function startGame() {
//reset game counters
      // var numLettersinPuzzleWord = 0;
      var puzzlePlaceholder = [];
      //var incorrectLetters = [];
      var puzzleString = "";
      //var lettersNotInPuzzle = [];
      var guessesRemaining =9;
      var puzzleToSolve = puzzleItems[(Math.floor(Math.random() * puzzleItems.length))];
      //console.log(puzzleToSolve);
      puzzleAsArrayOfLetters = puzzleToSolve.split("");
      puzzleLength = puzzleAsArrayOfLetters.length;
      //puzzleString = puzzleString.join(" ");

      //for loop 
      //================
      for(var i = 0; i<puzzleLength; i++) {
      	puzzlePlaceholder.push("_");
}
//initial html for first round
//==================================================================================

document.getElementById("puzzleString").innerHTML = puzzlePlaceholder.join(" ");
document.getElementById("lettersNotInPuzzle").innerHTML = incorrectLetters;
document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
document.getElementById("winCounter").innerHTML = winCounter;
document.getElementById("lossCounter").innerHTML = lossCounter;     
      console.log(puzzleAsArrayOfLetters);
      console.log(puzzlePlaceholder);
}



function evaluateGuess(letter) {

console.log("INITIALLY");
console.log(puzzlePlaceholder);

var isLetterInWord = false;

for (var i=0; i<puzzleLength; i++){
	if(puzzleAsArrayOfLetters[i] === letter) {
		isLetterInWord = true;
	}
}

//repeat check and populate puzzlePlaceholder array
if(isLetterInWord) {
     for (var k=0; k<puzzleLength; k++) {
	     if(puzzleAsArrayOfLetters[k] === letter) {
		  puzzlePlaceholder[k] = letter;
	      }
        }
    }
// letter wasn't found
    else {
	    incorrectLetters.push(letter);
        lettersNotInPuzzle.push(letter);
	guessesRemaining--;
    }

    console.log("later");

    console.log(puzzlePlaceholder);
    console.log(puzzleAsArrayOfLetters);
 }

 //end of round tasks
 //==================================
 function endOfRound() {
if(guessesRemaining===0) {
	alert("You lose!");
	lossCounter++;
}
if(puzzlePlaceholder === puzzleAsArrayOfLetters) {
	alert("You Win!");
	winCounter++;
}

//html to reflect round conditions
//================


document.getElementById("puzzleString").innerHTML = puzzlePlaceholder.join(" ");
document.getElementById("lettersNotInPuzzle").innerHTML = incorrectLetters;
document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
document.getElementById("winCounter").innerHTML = winCounter;
document.getElementById("lossCounter").innerHTML = lossCounter; 
}

//Main Process
//===================================================================================
// initiate code first time and restarts game
startGame();

//register keyclicks here
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	
	evaluateGuess(letterGuessed);
	endOfRound();
};



console.log(hangmanImage);
console.log(lettersNotInPuzzle);


