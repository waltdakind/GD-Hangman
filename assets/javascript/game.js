  window.onload = function () {
//Grateful Dead themed hangman
// now i know my abc's
  	var alphabet = ['a', 'b', 'c', 'd',
  				 	'e', 'f', 'g',
   					'h','i', 'j', 'k', 
   					'l','m', 'n', 'o', 'p', 
   					'q', 'r', 's',
   					't', 'u', 'v',
    				'w', 'x', 'y', 
    				'z'];

    var lettersGuessed = []
 // Behing the tiles that Vanna is turning are the following GD related clues
  
  	var puzzleAnswers = ["Box of Rain", "Robert Hunter",
  						 "John Barlow", "Pigpen", "Touch of Grey",
  						 "Money for Gasoline", "Bob Dylan", 
  						 "When I Paint My Masterpiece", "Estimated Prophet",
  						 "Eyes of the World", "China Cat Sunflower",
  						 "Vince Welnick", "Bruce Hornsby", "Dark Star",
  						 "Aoxomoxoa", "American Beauty", "Donna Jean Godchaux",
  						 "Ripple", "Comes A Time", "Black Muddy River",
  						 "Brent Mydland", "Nassau Coliseum", "Greek Theatre", "Cow Palace", 
  						 "Giants Stadium", "Soldier Field", "Hell in A Bucket"
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


//you're not pressing a letter and I am going to ignore you

}




};