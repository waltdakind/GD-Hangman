
  //global variables
        var x;
        var i;
        var j;
        var playerGuess = "";
        var puzzleDisplay = "";
        var puzzlePlaceholder= [];
        var puzzleItem  = "";
        var howLongIspuzzleItem = 0;
        var guessesUsed = 0;
        var numberOfWins =0;
        var puzzleWithBlanks = "";
        

  //picking a puzzle for the user to guess
function newPuzzle() {
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
               "BILL KREUTZMANN", "STANDING ON THE MOON", "CRAZY FINGERS", "IT MUST HAVE BEEN THE ROSES", "TOM CONSTANTEN", "DESOLATION ROW"
               ];
var random = Math.floor(Math.random() * puzzleAnswers.length);
puzzleItem  = puzzleAnswers[random];

              var alphabet = ['A', 'B', 'C', 'D',
              'E', 'F', 'G',
              'H','I', 'J', 'K', 
              'L','M', 'N', 'O', 'P', 
              'Q', 'R', 'S',
              'T', 'U', 'V',
              'W', 'X', 'Y', 
              'Z'];
      
          howLongIspuzzleItem = puzzleItem.length;

$('.btn.danger').button('toggle').addClass('fat')

puzzleDisplay = "";
for (j = 0; j < howLongIspuzzleItem; j++) {

  x = puzzleItem.charAt(j);

  if(x === " "  || x === "'")
  {
  puzzleDisplay +=  x + "&nbsp;&nbsp;";
  puzzlePlaceholder.push(x);
  }
  else {
    puzzleDisplay += "__&nbsp;";
    puzzlePlaceholder.push(x);
    
}


//var playerGuess = function() {
//document.onkeyup = function(event) {
//  playerGuess = String.fromCharCode(event.keyCode).toUpperCase();
//  if(j < 0) {
//  alert('You must guess a letter from the alphabet.');
//  }
document.getElementById("puzzleWithBlanks").innerHTML =puzzleDisplay;

}
};

//function checkGuess() = {

//}

