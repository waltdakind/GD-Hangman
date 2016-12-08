const keypress = require('keypress');

// namespace-ish kinda thing
if (typeof HANGMANAPP === "undefined") {
    let HANGMANAPP = {};
}

// Initial values
HANGMANAPP= {
	"a": "avocado is tasty",
	"winCount": 0,
	"arrayToTest" : ["jupiter", "mars", "venus"],
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

