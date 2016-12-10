const keypress = require('keypress');
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// namespace-ish kinda thing
if (typeof HANGMANAPP === "undefined") {
    let HANGMANAPP = {};
}
// Initial values
HANGMANAPP= {
	"a": "BOBBY SHORTS", //sample string
	"winCount": 0,
	"lossCount": 0,
	"solutionsArray" : ["BOX OF RAIN", "ROBERT HUNTER",
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
                "CATFISH JOHN", "STAGGER LEE", "SAINT STEPHEN", "ALL ALONG THE WATCHTOWER", "AROUND AND AROUND",
                "BALLAD OF A THIN MAN", "BEAT IT ON DOWN THE LINE", "BIG BOSS MAN", "BIG BOY PETE", "BIG RAILROAD BLUES",
                "BIG RIVER", "BROKEN ARROW", "DANCING IN THE STREET", "DAY TRIPPER",
                "DEAR PRUDENCE", "DEVIL WITH A BLUE DRESS ON", "EARLY MORNING RAIN", "EL PASO", "GLORIA",
                "GOOD MORNING LITTLE SCHOOL GIRL", "HARD TO HANDLE", "HEY BO DIDDLEY", "HEY JUDE",
                "I SECOND THAT EMOTION", "IKO IKO", "IN THE MIDNIGHT HOUR", "IT HURTS ME TOO",
                "IT TAKES A LOT TO LAUGH, IT TAKES A TRAIN TO CRY", "JUST LIKE TOM THUMB'S BLUES",
                "KANSAS CITY", "KEEP ON GROWING",
                "THE LAST TIME", "LITTLE RED ROOSTER",
                "LONG BLACK LIMOUSINE", "LUCY IN THE SKY WITH DIAMONDS",
                "MAMA TRIED", "ME AND BOBBY MCGEE",
                "ME AND MY UNCLE", "THE MONKEY AND THE ENGINEER",
                "MORNING DEW", "NEW MINGLEWOOD BLUES",
                "NOT FADE AWAY", "THE PROMISED LAND",
                "QUEEN JANE APPROXIMATELY", "THE RACE IS ON",
                "RAIN", "REVOLUTION",
                "THE SAME THING", "SHE BELONGS TO ME",
                "SING ME BACK HOME", "SMOKESTACK LIGHTNING", "SO WHAT", "STIR IT UP",
                "STUCK INSIDE OF MOBILE WITH THE MEMPHIS BLUES AGAIN", "TOMORROW IS FOREVER",
                "TOMORROW NEVER KNOWS", "TURN ON YOUR LOVE LIGHT",
                "VISIONS OF JOHANNA", "WAKE UP LITTLE SUSIE",
                "WALKING THE DOG", "WANG DANG DOODLE",
                "THE WEIGHT", "WEREWOLVES OF LONDON",
                "YOU DON'T LOVE ME", "YOU WIN AGAIN",
                "MYSTERY TRAIN", "CRYPTICAL ENVELOPMENT", "GENTLEMEN START YOUR ENGINES"
            ],
            "stringToArray": (str) => str.split(""),
            "underscoreTheArray": ()  => {
            	// charCode(32)  is space
             // charCode(222)  is apostrophe
for (let i = 0; i < HANGMANAPP.a.length; i++){
	if (HANGMANAPP.a[i] == " ") {
		HANGMANAPP.arrayWithBlanks.push(" ");
	}
	else if(HANGMANAPP.a[i] == "'") {
		console.log("apostrophe");
		HANGMANAPP.arrayWithBlanks.push("'");			
	}	
		else if(HANGMANAPP.a[i] !== " ") {
		HANGMANAPP.arrayWithBlanks.push("_");	
	}	
}
},
	"randomChoice": () => {
		return HANGMANAPP.solutionsArray[Math.floor(Math.random() *HANGMANAPP.solutionsArray.length)];
	},
            "slots": (arr, val)=> {
 	let i = 0;
             HANGMANAPP.indices = [], i;
             for(i = 0; i < arr.length; i++)
                 if (arr[i] === val)
            HANGMANAPP.indices.push(i);
                 return HANGMANAPP.indices;
},
"revealLetter": (slots, char)=>{
//array is the array with blanks = arrayWithBlanks
//slots should be the indices returned from the indices function = indices
// char is the value to insert at the various indices = a single character
//array.splice(val, 1, char);
for(let i = 0; i<slots.length; i++) {
HANGMANAPP.revealed = HANGMANAPP.arrayWithBlanks.splice(slots[i],1,char);	
}
return HANGMANAPP.arrayWithBlanks;
},
"lettersGuessed":[],
"evaluateGuess": (char) => {
 	//if in puzzle call revealLetter function, otherwise increment incorrect guesses
 	if((HANGMANAPP.a.indexOf(char) !== -1) && (HANGMANAPP.lettersGuessed.indexOf(char) == -1)){
 		HANGMANAPP.revealLetter(HANGMANAPP.indices,char);
 		HANGMANAPP.lettersGuessed.push(char);
 		console.log(HANGMANAPP.revealLetter(HANGMANAPP.indices, char));
 	}
 	else if (HANGMANAPP.lettersGuessed.indexOf(char) == -1) { //only add to incorrect guesses for new guesses
 		HANGMANAPP.incorrectGuesses++;
 		HANGMANAPP.lettersGuessed.push(char);
 		console.log(" incorrect guesses:" + HANGMANAPP.incorrectGuesses);
 	}
 },
	"totalGamesPlayed":0,
	"incorrectGuesses": 0,
	"arrayWithBlanks": [],
	"youHaveLost": //function to see if incorrect guesses exceeds 8
	(val) => {
		if(val>=8){
			process.stdin.pause();
			HANGMANAPP.totalGamesPlayed++;
			HANGMANAPP.lossCount++;

			return true;
		}
		else {
			return false;
		}

	},
	"youHaveWon": //function to see if underscores remain in array
	(arr) => {
		if(arr.indexOf("_")!== -1){
			return false;
		}
		else {
			process.stdin.pause();
			HANGMANAPP.totalGamesPlayed++;
			HANGMANAPP.winCount++;
			HANGMANAPP.incorrectGuesses = 0;
			return true;
		}

	}
};

//new puzzle
HANGMANAPP.restart = () => {
	process.stdin.pause();
	if (HANGMANAPP.totalGamesPlayed==0){
	HANGMANAPP.incorrectGuesses = 0;	
	}
	else{
	HANGMANAPP.incorrectGuesses = -1;	
	}
	HANGMANAPP.lettersGuessed =[];
               HANGMANAPP.a = HANGMANAPP.randomChoice();
               HANGMANAPP.underscoreTheArray();
               process.stdin.resume();
//console.log("solution:  " + HANGMANAPP.stringToArray(HANGMANAPP.a));
//call the underscoring function on the string to array function (on the solution string)
console.log("underscoreArray:   " + HANGMANAPP.arrayWithBlanks);
}
HANGMANAPP.restart();


// letter for slots here
// HANGMANAPP.indices(HANGMANAPP.stringToArray(HANGMANAPP.a), "a")
// same letter for array here
// console.log(HANGMANAPP.revealLetter(HANGMANAPP.indices, "a"));

// listen for the "keypress" event
HANGMANAPP.listener = ()=> {
	process.stdin.on('keypress', function (ch, key) {
            let res = String(ch);            
let lettersOnly = () =>{
// 95-122 or 65-90
let resNumber= res.charCodeAt(0);
// console.log(res + " is " +resNumber);
console.log(" Previously guessed letters:  " + HANGMANAPP.lettersGuessed);
if( ( resNumber>96 && resNumber<123) ||( resNumber>64 && resNumber<91 ) ){
HANGMANAPP.playerGuess = res.toUpperCase();	
console.log('Current guess = ', HANGMANAPP.playerGuess);
console.log("Incorrect guesses: " + HANGMANAPP.incorrectGuesses +  "   You have " + (8 - HANGMANAPP.incorrectGuesses) + " guesses left.");
return res.toUpperCase();
}
 }
 lettersOnly();
 if(HANGMANAPP.youHaveLost(HANGMANAPP.incorrectGuesses)){
console.log("Game over. You didn't solve the puzzle in time.");
//start a new game
console.log("You have played " + HANGMANAPP.totalGamesPlayed + " games, and have solved "+ HANGMANAPP.winCount + " of them.");
 HANGMANAPP.restart();
 }
  if(HANGMANAPP.youHaveWon(HANGMANAPP.arrayWithBlanks)){
console.log("Game over. You solved the puzzle!");
console.log("You have played " + HANGMANAPP.totalGamesPlayed + " games, and have solved "+ HANGMANAPP.winCount + " of them.");
//start a new game
HANGMANAPP.arrayWithBlanks = [];
HANGMANAPP.restart();
 }
 HANGMANAPP.slots(HANGMANAPP.a, HANGMANAPP.playerGuess);
 HANGMANAPP.evaluateGuess(HANGMANAPP.playerGuess);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

//process.stdin.setRawMode(true);
process.stdin.resume();
}
HANGMANAPP.listener(); 

//fix incorrect guess count being at 1 at start of new game