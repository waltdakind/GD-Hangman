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
    var alphabetPlaceholder = "___________________"
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
               "FARE THEE WELL", "VIOLA LEE BLUES", "SUGAR MAGNOLIA", "I NEED A MIRACLE",
               "COLD RAIN AND SNOW", "THE WHEEL", "EYES OF THE WORLD", "FIRE ON THE MOUNTAIN",
               "GOING DOWN THE ROAD FEELING BAD", "SHAKEDOWN STREET", "LOOSE LUCY", "CHINA DOLL",
               "SHIP OF FOOLS", "BRANFORD MARSALIS", "CAPITOL THEATRE", "TERRAPIN STATION",
               "SPACE", "WHARF RAT", "EASY ANSWERS", "ALL NEW MINGLEWOOD BLUES", "VICTIM OR THE CRIME",
               "CORRINA", "PRIDE OF CUCAMONGA", "NEW SPEEDWAY BOOGIE", "ONE MORE SATURDAY NIGHT",
               "I KNOW YOU RIDER", "SAMSON AND DELILAH", "BERTHA", "RFK STADIUM", "THE DAYS BETWEEN",
               "LIBERTY", "ME AND MY UNCLE", "GREATEST STORY EVER TOLD", "MICKEY HART", "FOOLISH HEART",
               "BILL KREUTZMANN", "STANDING ON THE MOON", "CRAZY FINGERS", "IT MUST HAVE BEEN THE ROSES"
               ]


  		// various counters
  	var guesses = 0;
  	var wins = 0;
  	var losses = 0;



 {


var userGuess = String.fromCharCode(event.keyCode).toUpperCase();


}
//function called after testing to see if key was in the (unguessed letter of alphabet)

		//is current guess a new (not guessed before letter)?
		//convert to uppercase and test to see if it is still in array

//if it's a

};