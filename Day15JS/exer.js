let MagicNum = 66;
let MagicNum2 = 19;

if (MagicNum <= MagicNum2) console.log(MagicNum2);
else if (MagicNum > MagicNum2) console.log(MagicNum);

let MagicNumE = 100;
let MagicNumD = 98;
let MagicNumC = 420;
let MagicNumB = 999;
let MagicNumA = 3;
// let num = prompt("number");

let largestNum = MagicNumE;
if (MagicNumA > largestNum) {
    largestNum = MagicNumA;
} else if (MagicNumB > largestNum) {
    largestNum = MagicNumB;
} else if (MagicNumC > largestNum) {
    largestNum = MagicNumC;
} else if (MagicNumD > largestNum) {
    largestNum = MagicNumD;
}
console.log(largestNum);



// let num = prompt("number");
if (MagicNumE % 2 !== 0) {
    console.log("This is an odd number");
} else {
    console.log("This is an even number");
}
if (MagicNumA % 2 !== 0) {
    console.log("This is an odd number");
} else {
    console.log("This is an even number");
}
if (MagicNumB % 2 !== 0) {
    console.log("This is an odd number");
} else {
    console.log("This is an even number");
}
if (MagicNumC % 2 !== 0) {
    console.log("This is an odd number");
} else {
    console.log("This is an even number");
}
if (MagicNumD % 2 !== 0) {
    console.log("This is an odd number");
} else {
    console.log("This is an even number");
}



if (MagicNumE % 5 === 0 || MagicNumE % 8 === 0)
    console.log("MagicNumE is divisible by 5 or 8");
if (MagicNumD % 5 === 0 || MagicNumD % 8 === 0)
    console.log("MagicNumD is divisible by 5 or 8");
if (MagicNumC % 5 === 0 || MagicNumC % 8 === 0)
    console.log("MagicNumC is divisible by 5 or 8");
if (MagicNumB % 5 === 0 || MagicNumB % 8 === 0)
    console.log("MagicNumB is divisible by 5 or 8");
if (MagicNumA % 5 === 0 || MagicNumA % 8 === 0)
    console.log("MagicNumA is divisible by 5 or 8");

// Create a variable for a number of electricity usage units in Watts.
// Calculate the electricity bill for the number of Watts, following these instructions:
// my logic is below

// let Watts = prompt("Enter the amount of Watts");
// // For the first tier, the first 50 Watts the cost is 0.50/Watt
// let bill = parseInt(Watts) * 1.2;
// let finalcost = bill + Watts;

// let firstTier = (Watts * .05);
// let secondTeir = (Watts * .75 + firstTier);
// let thirdTeir = (Watts * 1.20 + secondTeir)
// let fourthTeir = (Watts * 1.50 + thirdTeir)

// if (Watts <= 50) finalCost= (finalCost + firstTier); 
// if (Watts <= 100 )
// if (Watts >100 && Watts >= 250)



// // For the second tier, the next 100 Watts is 0.75/Watt
// if (Watts >= 100) {
//     finalcost = (Watts * 100 * 0.75 + firstTeir);
// }

// // For the third tier, the next 100 Watts is 1.20/Watt
// if (Watts < 100 && Watts >= 249) {
//     finalcost = (Watts * 100 * 1.2 + secondTeir);
// }

// // And for the fourth tier, all the Watts above the first 250 is 1.50/Watt
// if (Watt < 250) {
//     finalcost = (Watts * 250 * 1.5 + thirdTeir);
// }

// let finalcost = bill + Watts

let Watts = prompt("Enter the amount of WattHrs used.");
Watts = parseInt(Watts)
let finalCost = 0;

if (Watts <= 50) {
    finalCost = Watts * 0.5;
} else if (Watts <= 100) {
    finalCost = 50 * 0.5 + (Watts - 50) * 0.75;
} else if (Watts <= 250) {
    finalCost = 50 * 0.5 + 50 * 0.75 + (Watts - 100) * 1.2;
} else {
    finalCost = 50 * 0.5 + 50 * 0.75 + 150 * 1.2 + (Watts - 250) * 1.5;
}

console.log("Final cost:", (finalCost));

// Then add an additional 20% surcharge to the final cost
// Print out the final cost.
// Print out each tier's contribution to the final cost, but only if it contributes to the final cost.


//chatgpt solution
// let Watts = prompt("Enter the amount of Watts");

// let finalCost = 0;

// if (Watts <= 50) {
//     finalCost = Watts * 0.5;
// } else if (Watts <= 150) {
//     finalCost = (50 * 0.5) + ((Watts - 50) * 0.75);
// } else if (Watts <= 249) {
//     finalCost = (50 * 0.5) + (100 * 0.75) + ((Watts - 150) * 1.2);
// } else {
//     finalCost = (50 * 0.5) + (100 * 0.75) + (100 * 1.2) + ((Watts - 250) * 1.5);
// }

// console.log("Final cost:", finalCost);