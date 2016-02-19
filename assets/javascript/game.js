window.onload=function(){
 
function resetVariables () {
  //global variables
        var x;
        var i;
        var j;
        var k;
        var alreadyGuessed = [];
        var alphabet = ['A', 'B', 'C', 'D',
          'E', 'F', 'G','H','I', 'J', 'K', 
          'L','M', 'N', 'O', 'P', 'Q', 'R', 'S',
          'T', 'U', 'V','W', 'X', 'Y','Z'];

        var puzzleUnderscores = [];
        var currentWordState = [];
        var correctLetterLocations = 0;
        var puzzleLetters = [];
        var backup = [];
        var puzzleItem  = "";
        var howLongIspuzzleItem = 0;
        var guessesUsed = 0;
        var numberOfWins =0;
        var gameOver = false;
}

  //picking a puzzle for the user to guess
  
var newPuzzle = function() {
//trigger to start new game , call reset variables and declare some undefined vars
    
    resetVariables();

    $('.btn.danger').button('toggle').addClass('fat')

//string for the puzzle MY GAWD IT'S HUUUUUGE
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
    "BILL KREUTZMANN", "STANDING ON THE MOON", "CRAZY FINGERS", "IT MUST HAVE BEEN THE ROSES", 
    "TOM CONSTANTEN", "DESOLATION ROW", "ALABAMA GETAWAY", "MEXICALI BLUES", "BOX OF RAIN",
    "CATFISH JOHN", "STAGGER LEE", "SAINT STEPHEN", "ALL ALONG THE WATCHTOWER","AROUND AND AROUND",
    "BALLAD OF A THIN MAN", "BEAT IT ON DOWN THE LINE",
    "BIG BOSS MAN", "BIG BOY PETE", "BIG RAILROAD BLUES",
    "BIG RIVER",
    "BROKEN ARROW",
    "DANCING IN THE STREET",
    "DAY TRIPPER",
    "DEAR PRUDENCE",
    "DEVIL WITH A BLUE DRESS ON",
    "EARLY MORNING RAIN",
    "EL PASO",
    "GLORIA",
    "GOOD MORNING LITTLE SCHOOL GIRL",
    "HARD TO HANDLE",
    "HEY BO DIDDLEY",
    "HEY JUDE",
    "I SECOND THAT EMOTION",
    "IKO IKO",
    "IN THE MIDNIGHT HOUR",
    "IT HURTS ME TOO",
    "IT TAKES A LOT TO LAUGH, IT TAKES A TRAIN TO CRY",
    "JUST LIKE TOM THUMB'S BLUES",
    "KANSAS CITY",
    "KEEP ON GROWING",
    "THE LAST TIME",
    "LITTLE RED ROOSTER",
    "LONG BLACK LIMOUSINE",
    "LUCY IN THE SKY WITH DIAMONDS",
    "MAMA TRIED",
    "ME AND BOBBY MCGEE",
    "ME AND MY UNCLE",
    "THE MONKEY AND THE ENGINEER",
    "MORNING DEW",
    "NEW MINGLEWOOD BLUES",
    "NOT FADE AWAY",
    "THE PROMISED LAND",
    "QUEEN JANE APPROXIMATELY",
    "THE RACE IS ON",
    "RAIN",
    "REVOLUTION",
    "THE SAME THING",
    "SHE BELONGS TO ME",
    "SING ME BACK HOME",
    "SMOKESTACK LIGHTNING",
    "SO WHAT",
    "STIR IT UP",
    "STUCK INSIDE OF MOBILE WITH THE MEMPHIS BLUES AGAIN",
    "TOMORROW IS FOREVER",
    "TOMORROW NEVER KNOWS",
    "TURN ON YOUR LOVE LIGHT",
    "VISIONS OF JOHANNA",
    "WAKE UP LITTLE SUSIE",
    "WALKING THE DOG",
    "WANG DANG DOODLE",
    "THE WEIGHT",
    "WEREWOLVES OF LONDON",
    "YOU DON'T LOVE ME",
    "YOU WIN AGAIN",
    "MYSTERY TRAIN",
    "CRYPTICAL ENVELOPMENT",
    "GENTLEMEN START YOUR ENGINES"
    ];

//random selection from possible answers
var random = Math.floor(Math.random() * puzzleAnswers.length);
puzzleItem  = puzzleAnswers[random];
var livesRemaining = 8;     
howLongIspuzzleItem = puzzleItem.length;

//stores the blanks for diplaying new puzzle -- emptying for new puzzle
//current word is an exact copy for uncovering letters
//puzzleLetters is the solution without any blanks


//these arrays hold all the stuff to check guesses against and update the display
for (i = 0; i < howLongIspuzzleItem; i++) {

  x = puzzleItem.charAt(i);

  if(x === " "  || x === "'")
  {
  puzzleUnderscores.push(x + "&nbsp;&nbsp;");
  //currentWordState.push(x + "&nbsp;&nbsp;");
  puzzleLetters.push(x + "&nbsp;&nbsp;");
  }
  else {
    puzzleUnderscores.push("___&nbsp;");
    //currentWordState.push("___&nbsp;");
    puzzleLetters.push(x);
    
}
}

console.log(puzzleUnderscores.length);
console.log(puzzleItem);
console.log(puzzleUnderscores);
//console.log(currentWordState);
console.log(puzzleLetters);


var showMeThePuzzle = puzzleUnderscores.join('');
document.getElementById("puzzleWithBlanks").innerHTML =showMeThePuzzle;
//for loop to run through array
//for(i=0; i < puzzleUnderscores.length; i++) {
//  currentWordState += puzzleUnderscores[i];
//}

//document.getElementById("puzzleWithBlanks").innerHTML =currentWordState;
};

var playerChoice = function() {
//takes user input from keypress
document.onkeyup = function(event) {


var playerGuess = String.fromCharCode(event.keyCode).toUpperCase();

var correctLetterLocations = getAllIndexes(puzzleLetters, playerGuess);
showMeThePuzzle = "";
currentWordState = [];
//console.log(correctLetterLocations);
//make sure choice is a letter and not chosen before
if (alphabet.indexOf(playerGuess) != -1 && alreadyGuessed.indexOf(playerGuess) === -1 && gameOver!= false) {

  
  if(puzzleLetters.indexOf(playerGuess)=== -1) {
    livesRemaining = livesRemaining - 1 

//    alert('That letter is not in the puzzle');
alreadyGuessed.push(playerGuess);
//close 1st condition
  }


  else { 
    
    //alert('That letter is in the puzzle');  
    //splice out underscores and splice in correctly identified letter  

    currentWordState = backup.slice();
    backup = [];
    for(i=0; i<puzzleUnderscores.length; i++) {
    //change array value in currentWordState to swap in guessed letter for underscore 
    //console.log(puzzleLetters[i]);
     if(puzzleLetters[i]===playerGuess) {
     k = puzzleLetters[i];
     console.log(k);
     currentWordState.push(k);
     }

      else {
      currentWordState.push(puzzleUnderscores[i]);
      } 
    }
    }
}
            // console.log(currentWordState);
            backup = currentWordState.slice();
            var showMeThePuzzle = currentWordState.join('');
            currentWordState = [];
            document.getElementById("puzzleWithBlanks").innerHTML =showMeThePuzzle;
            document.getElementById("usedletters").innerHTML =alreadyGuessed;
            document.getElementById("livesRemaining").innerHTML =livesRemaining;
  
  if(livesRemaining===0) {
                            gameOver = true;
                            alert("You didn't get the solution in time!");    
  
                        }
//close on.key up
    }
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

//close getAllIndexes function
}
}

//playerChoice();

//close function event





