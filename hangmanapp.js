const keypress = require('keypress');

// namespace-ish kinda thing
if (typeof HANGMANAPP === "undefined") {
    let HANGMANAPP = {};
}

// Initial values
HANGMANAPP= {
	"a": "avocado is tasty",
	"winCount": 0,
	"arrayToTest" : ["BOX OF RAIN", "ROBERT HUNTER",
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
            ];,
	"randomChoice": function() {
		return HANGMANAPP.arrayToTest[Math.floor(Math.random() *HANGMANAPP.arrayToTest.length)];
	},
	"totalGamesPlayed":0,
	"arrayWithBlanks": []
};

// split a string into an array
 HANGMANAPP.stringToArray =  (str) => str.split("");

//TEST show string and array resulting from function above
console.log(HANGMANAPP.a);
console.log(HANGMANAPP.stringToArray(HANGMANAPP.a));
console.log(HANGMANAPP.randomChoice());
//create a copy of the original array with underscores replacing letters, but ignoring blanks
HANGMANAPP.underscoreTheArray = (arr)  => {
for (let i = 0; i < arr.length; i++){
	if (arr[i] != " ") {
		HANGMANAPP.arrayWithBlanks.push("_");
	}
	else {
		HANGMANAPP.arrayWithBlanks.push(" ");
	}		
}
//test to see if this array looks as it should
// console.log(HANGMANAPP.arrayWithBlanks);
return HANGMANAPP.arrayWithBlanks;
}
//call the underscoring function on the string to array function (on the solution string)
HANGMANAPP.underscoreTheArray(HANGMANAPP.stringToArray(HANGMANAPP.a));

//TODO:  keypress listener here

//find all the indices for a given letter in an array of letters
 HANGMANAPP.indices = (arr, val)=> {
 	let i = 0;
     HANGMANAPP.indices = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            HANGMANAPP.indices.push(i);
    return HANGMANAPP.indices;
}
//test that array returned is correct
//console.log(HANGMANAPP.indices(HANGMANAPP.stringToArray(HANGMANAPP.a), "a"));
// console.log(indices(HANGMANAPP.stringToArray(HANGMANAPP.a), "v"));
// console.log(indices(HANGMANAPP.stringToArray(HANGMANAPP.a), "s"));
// function to replace underscores with letters in the original array
HANGMANAPP.revealLetter = (arr, slots, char)=>{
//array is the array with blanks = arrayWithBlanks
//slots should be the indices returned from the indices function = indices
// char is the value to insert at the various indices = a single character
//array.splice(val, 1, char);

for(let i = 0; i<slots.length; i++) {
HANGMANAPP.revealed = arr.splice(slots[i],1,char);	
}

return HANGMANAPP.arrayWithBlanks;
};
//letter for slots here
HANGMANAPP.indices(HANGMANAPP.stringToArray(HANGMANAPP.a), "a")
//same letter for array here
console.log(HANGMANAPP.revealLetter(HANGMANAPP.arrayWithBlanks, HANGMANAPP.indices, "a"));


// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();

