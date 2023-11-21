// for (i = 0; i < 10; i++)
//     console.log("Let's get loopy!")

// let i = 0;
// while (i < 10) {
//     console.log("lets get loopy");
//     i++
// }

// let username = "";
// while (username === "") {
//     username = window.prompt("whats your name?");
// }
// console.log(`hello ${username}, you suck!`);

// let MakeADoWhile = 0;
// do {
//     console.log("7");
//     MakeADoWhile++;
// } while (MakeADoWhile < 7); {

// }


// let i = "";
// while (i === "") {
//     i = prompt("What is your name?")
// }
// console.log(`Hello ${i}, nice to meet you!`)
// let answer = prompt("Enter q to quit");
// while (answer === "" || answer === null) {
//     alert("You choose to continue");
//     answer = prompt("Enter something to quit");
// }

// let totalNum = 0;
// for (let i = 0; i < 3; i++) {
//     let NumInput = parseInt(prompt("Enter a number and I'll give you the total!"));
//     totalNum += NumInput;
// }

// if (totalNum <= 10) {
//     console.log("The total was between [1-10]");
// }
// else if (totalNum <= 20) {
//     console.log("The total was between [10-20]");
// }
// else
//     console.log("The total was over 20");

// should declare a var to  make it a string 
let q5string = "";
for (let Number2THou = 1; Number2THou < 1000; Number2THou++) {
    if (Number2THou % 5 === 0 || Number2THou % 3 === 0) {
        q5string += Number2THou + ", "
    }
    console.log(Number2THou);
}

// let Nummmynum = 0;
// for (let i = 0; i <= 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         Nummmynum++;
//     }
// }
// console.log(Nummmynum)


// for (let Number2THou = 1; Number2THou < 1000; Number2THou++) {
//     if (Number2THou % 5 === 0 && Number2THou % 3 === 0) {
//         console.log(Number2THou);
//     }
// }

// prime numbers---the number is only divided by 1 and itself 

for (let number = 2; number < 1000; number++) {
    let PrimeNumber = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            PrimeNumber = false;
            break;
        }
    }
    if (PrimeNumber && number !== 1) {
        console.log(`${number} is a prime number`)
    }
}

// while("Hello" !== "olleH")
// let hello = ["h","e","l","l","o"];
// let reverseHello="";

// console.log
// const inputString = prompt("Enter a word!");
// let outputString = "";

// for (let i = 0; i < inputString.length; i++) {
//     outputString += inputString[inputString.length - 1 - i];
// }

// console.log(`Reversed String: ${outputString}`);


// // Show the first 20 numbers of the fibonacci sequence with a loop
// // (10 first numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// let numberone = 0;
// console.log(numberone)
// let numbertwo = 1;
// console.log(numbertwo)

// // for(let i = 0; i < 20; i++){
// let i = 0;
// while (i < 18) {
//     const newNumber = numberone += numbertwo;
//     console.log(newNumber)

//     numberone = numbertwo;
//     numbertwo = newNumber;
//     i += 1;
// }

