// const randomNum = Math.random;
// console.log(randomNum);

// const indexedRandom = randomNum * 20;
// console.log(indexedRandom);

// const roundedIndexRandom = Math.random(indexedRandom);
// console.log(roundedIndexRandom);
// 
// 
//below is semi wrong 

// let numHeadsOrTails = Math.round(Math.random());
// console.log(numHeadsOrTails);

// let userChoice = prompt("Guess 0 for Heads or 1 for  Tails!");

// let strHeadorTail = "Heads"
// if (numHeadsOrTails === 1) {
//     strHeadorTail = "Tails"
// }

// if (userChoice !== 1 && userChoice !== 0) console.log("you're stupid!");
// if (userChoice === numHeadsOrTails)
//     console.log(strHeadorTail + "You win ");

// else (userChoice != numHeadsOrTails)
// console.log(strHeadorTail + "You Lose!");

let numHeadsOrTails = Math.round(Math.random());
console.log(numHeadsOrTails);

let userChoice = prompt("Guess 0 for Heads or 1 for Tails!");

let strHeadorTail = "Heads";
if (numHeadsOrTails === 1) {
    strHeadorTail = "Tails";
}

if (userChoice !== "1" && userChoice !== "0") {
    console.log("Wrong Bitch. Please enter 0 for Heads or 1 for Tails.");
} else {
    if (userChoice === numHeadsOrTails.toString()) {
        console.log(strHeadorTail + " You win!");
    } else {
        console.log(strHeadorTail + " You Lose!");
    }
}