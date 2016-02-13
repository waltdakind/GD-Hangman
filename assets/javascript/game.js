  window.onload = function () {
//Grateful Dead themed hangman

// now i know my abc's
  	var alphabet = ['A', 'B', 'C', 'D',
  				 	'E', 'F', 'G',
   					'H','I', 'J', 'K', 
   					'L','M', 'N', 'O', 'P', 
   					'Q', 'R', 'S',
   					'T', 'U', 'V',
    				'W', 'X', 'Y', 
    				'Z'];
//empty array until user makes their guesses 

    var lettersGuessed = []

 // Behing the tiles that Vanna is turning are the following GD related clues
 // possible addition HINTS and CATEGORIES
  	var puzzleAnswers = ["BOX OF RAIN", "ROBERT HUNTER",
  						 "JOHN BARLOW", "PIGPEN", "TOUCH OF GREY",
  						 "MONEY FOR GASOLINE", "BOB DYLAN", 
  						 "WHEN I PAINT MY MASTERPIECE", "ESTIMATED PROPHET",
  						 "EYES OF THE WORLD", "CHINA CAT SUNFLOWER",
  						 "VINCE WELNICK", "BRUCE HORNSBY", "DARK STAR",
  						 "AOXOMOXOA", "AMERICAN BEAUTY", "DONNA JEAN GODCHAUX",
  						 "RIPPLE", "COMES A TIME", "BLACK MUDDY RIVER",
  						 "BRENT MYDLAND", "NASSAU COLISEUM", "GREEK THEATRE", "COW PALACE", 
  						 "GIANTS STADIUM", "SOLDIER FIELD", "HELL IN A BUCKET", "QUINN THE ESKIMO", 
  						 "FARE THEE WELL", "VIOLA LEE BLUES", "SUGAR MAGNOLIA", "I NEED A MIRACLE"
  						 ]

  		// various counters
  	var guesses = 0;
  	var wins = 0;
  	var losses = 0;

//accept only keys that are
// between charcode 65 - 90 and 97 - 122 inclusive
//               	(e.keyCode >= 65 && e.keyCode <= 90) 
//            		|| (e.keyCode >= 97 && e.keyCode <= 122))
object.onkeypress=function(); {
   var key = e.keyCode ? e.keyCode : e.which;
if ((e.keyCode >= 65 && e.keyCode <= 90)|| (e.keyCode >= 97 && e.keyCode <= 122)) {

//you're pressing a letter and you can play hangman
// call another function here?









//you're not pressing a letter and I am going to ignore you
// display something along the lines of, press a letter for your guess

}
//function called after testing to see if key was in the (unguessed letter of alphabet)

		//is current guess a new (not guessed before letter)?
		//convert to uppercase and test to see if it is still in array

//if it's a

};