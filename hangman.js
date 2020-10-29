console.log("Welcome to world of words\n , this is the world of danger");
var Prompt = require('prompt-sync')();
var fs = require('fs');
var alpha = "abcdefghijklmnopqrstuvwxyz";
var Level = Prompt("Choose your Level");


console.log("1.Easy\n2.Medium\n3.Hard");

var Words = [];

function words(Level) {
    var data = fs.readFileSync('./words.txt', 'utf8').split(" ");
    for (var Word of data) {
        if (Level == "Easy") {
            if (Word.length < 6) {
                Words.push(Word);
            }
        } else if (Level == "Medium") {
            if (Word.length < 9 && Word.length > 5) {
                Words.push(Word);
            }
        } else if (Level == "Hard") {
            if (Word.length > 8) {
                Words.push(Word);
            }
        } else {
            return "Try to choose any level\n Good luck :)";
        }
    }
    return Words;
}
words(Level);
var Random = Math.floor(Math.random() * Words.length - 1);
var SecretWord = Words[Random];
console.log(SecretWord);

console.log(" be Ready for a bit action \n  you are going to have a lot of adventure");
console.log("Your Word has guessed by us\n it is about " + SecretWord.length + " Go for it :)");

var MatchedArr = [];
for (var alpha in SecretWord) {
    MatchedArr.push("_");
}

console.log(MatchedArr.join());

function Match_it(User) {
    if (SecretWord.includes(User) && User.length == 1) {
        return "Good Guess";
    } else {
        return "Bad Guess";
    }
}



function Guessed(User) {
    var count = 0;
    for (var letter of SecretWord) {
        count++;
        if (letter == User) {
            MatchedArr[count - 1] = User;
        }
    }
    return MatchedArr;
}



function HangHim(chance) {
    var Images = require('./Images');
    return Images[8 - chance];
}

var chance = 8;
while (chance > 0) {
    if (MatchedArr.includes("_")) {
        var User = Prompt("guess the letter");
        var Guess = Match_it(User);
        console.log(Guess);
        if (Guess == "Good Guess") {
            var ChangedArr = Guessed(User);
            console.log(ChangedArr.join());
            continue;
        } else {
            console.log(chance + " Chances left only:(");
            // console.log(hint(User));
            console.log(HangHim(chance));
        }
        chance--;

    } else {
        var string = " ";
        for (var i in MatchedArr) {
            string += MatchedArr[i];
        }
        console.log(string);
        break;
    }
}