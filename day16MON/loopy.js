// let nameslist = ""
// let namesInput = prompt("Enter a name? When you are finished type 'done' ")

// while (namesInput !== "done" || namesInput !== null) {
//     namesInput += nameslist;
//     alert("All:", namesInput)
//     namesInput = prompt("Enter a name? When you are finished type 'done' ")

// }
// alert(nameslist + ", ");

// above test one
// below is chatgpt corrected
// let namesList = [];
// let namesInput = prompt("Enter a name? When you are finished type 'done' ");

// while (namesInput.toLowerCase() !== "done" && namesInput !== null) {
//     namesList.push(namesInput);
//     namesInput = prompt("Enter a name? When you are finished type 'done' ");
// }

// if (namesList.length > 0) {
//     alert("All: " + namesList.join(', '));
// } else {
//     alert("No names entered.");
// }


// const minNum = 1;
// const maxNum = 100;
// const answer = ) + minNum;

// let guess;
// let running = true;

// while (running) {
//     guess = prompt("Guess a number between 1 and 100");
//     guess = parseInt(guess);

//     if (guess < minNum || guess > maxNum) {
//         alert(`Follow Directions Dumbass: ${guess} is not a valid guess!`);
//         break;  
//     } else if (guess === "") {
//         alert(`Enter a Number ya dingus: ${guess} is not a valid guess!`);
//         break;
//     } else if (guess < answer) {
//         alert(`${guess} is too low`);
//     } else if (guess > answer) {
//         alert(`${guess} is too high`);
//     } else if (guess === answer) {
//         alert("You got it!");
//         running = false;
//     }
// }
// let YourMoney = 1000;

// // the number you bet on 
// let ChooseBetNumber = prompt("Choose a number between 1-36");
// ChooseBetNumber = parseInt(ChooseBetNumber);

// // how much money do you want to bet
// let YourbetAmount = prompt("How much money do you want to bet? Enter a number only!");
// YourbetAmount = parseInt(YourMoney - YourbetAmount);

// let HaveMoney = true;
// while (HaveMoney) {
//     let maxNum = 36;
//     let minNum = 0;
//     let HouseNumber = Math.floor(Math.random() * (maxNum - minNum + 1))
//     if (HouseNumber === ChooseBetNumber) {
//         YourMoney = (YourbetAmount * 36)
//         alert("You guessed: " + ChooseBetNumber + " the number was " + HouseNumber + " you win")
//     }
//     else if (HouseNumber % 2 === 2 && ChooseBetNumber % 2 === 2) {
//         YourMoney = (YourMoney * 2)
//         alert("You guessed: " + ChooseBetNumber + " the number was " + HouseNumber + " you matched an even number")
//     }
//     else if (HouseNumber % 2 !== 0 && ChooseBetNumber % 2 !== 2) {
//         YourMoney = (YourMoney * 2)
//         alert("You guessed: " + ChooseBetNumber + " the number was " + HouseNumber + " you matched an odd number")
//     }
//     else {
//         alert("You Lose!");
//         YourMoney = (YourMoney - YourbetAmount);
//         alert("You guessed: " + ChooseBetNumber + " the number was " + HouseNumber + " you suck")
//     }


//     while (HaveMoney > 0) {
//         let GoAgain = prompt("Wanna go for another ride cowboy? Enter 1 for Yes or 2 for No"){
//             if (GoAgain === "1")
//     }
//     continue;
//     if (GoAgain === "2") {
//         alert("You have $" + YourMoney + " See you later alligator.")
//         HaveMoney = false;
//     }
//     else {
//         prompt("Wanna go for another ride cowboy? Enter 1 for Yes or 2 for No")

//     }

// }
// if (HaveMoney <= 0) {
//     HaveMoney = false;
// }
//     }






let YourMoney = 1000;

// the number you bet on
let ChooseBetNumber = parseInt(prompt("Howdy Partner: Choose a number between 0-36"));
let YourBetAmount = parseInt(prompt("How much money do you want to bet? Enter a number only!"));

while (YourBetAmount > YourMoney || YourBetAmount <= 0) {
    YourBetAmount = parseInt(prompt("That Ain't Right. Enter a valid bet amount:"));
}

while (YourMoney > 0) {
    let maxNum = 36;
    let minNum = 0;
    let HouseNumber = Math.floor(Math.random() * (maxNum - minNum + 1));

    if (HouseNumber === ChooseBetNumber) {
        YourMoney += YourBetAmount * 36;
        alert("You guessed: " + ChooseBetNumber + ". The number was " + HouseNumber + ". You win!");
    } else if ((HouseNumber % 2 === 0 && ChooseBetNumber % 2 === 0) || (HouseNumber % 2 !== 0 && ChooseBetNumber % 2 !== 0)) {
        YourMoney += YourBetAmount * 2;
        alert("You guessed: " + ChooseBetNumber + ". The number was " + HouseNumber + ". You bastard! You win!");
    } else {
        YourMoney -= YourBetAmount;
        alert("You guessed: " + ChooseBetNumber + ". The number was " + HouseNumber + ". You lose, you suck!");
    }

    if (YourMoney <= 0) {
        alert("You broke son of a bitch you have $0 left. Game over!");
        break;
    }

    let GoAgain = parseInt(prompt("You have $" + YourMoney + ". Wanna go for another ride cowboy? Enter 1 for Yes or 2 for No"));

    if (GoAgain === 2) {
        alert("You have $" + YourMoney + ". See you later alligator.");
        break;
    } else if (GoAgain !== 1) {
        alert("Invalid input. See you later alligator.");
        break;
    }

    ChooseBetNumber = parseInt(prompt("Choose a number between 1-36"));
    while (ChooseBetNumber < 1 || ChooseBetNumber > 36 || isNaN(ChooseBetNumber)) {
        ChooseBetNumber = parseInt(prompt("Invalid number. Choose a number between 1-36"));
    }

    YourBetAmount = parseInt(prompt("How much money do you want to bet? You have $" + YourMoney + ". Dude enter a number only!"));
    while (YourBetAmount > YourMoney || YourBetAmount <= 0 || isNaN(YourBetAmount)) {
        YourBetAmount = parseInt(prompt("Dude it's not that hard. Enter a valid bet amount:"));
    }
}
