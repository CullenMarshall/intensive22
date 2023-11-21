// ===================== Array exercise ==============================

// let people = ["Greg", "Mary", "Devon", "James"];

// 1 - Using a loop, iterate through this array and console.log all of the people.
let people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
   console.log(people[i]);
}


// 2 - Remove "Greg" from the array.
people.shift();
console.log(people);


// 3 - Remove "James" from the array.
people.pop();
console.log(people);


// 4 - Add "Matt" to the front of the array.
people.unshift("Matt");

console.log(people)

// 5 - Add Scott to the end of the array.
people.push("Scott");
console.log(people);

// 6 - Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for (let i = 0; i < people.length; i++) {
   console.log(people[i]);
   if (people[i] === "Mary") {
      break;
   }
}

// 8 - Get the indexOf where "Mary" is located in the people array;

let MaryIndex = people.indexOf("Mary")
console.log(MaryIndex)

// 9 - Create a new variable called withYourname and set it equal to the people array concatenated
//     with the string of "Your name".

withYourname = ["Cullen"]
let newArray = people.concat(withYourname)
console.log(newArray)
// 10 - Given an array of numbers, double each number

const numbers = [1, 2, 3, 4, 5];
DoubledArray = []
for (let i = 0; i < numbers.length; i++) {
   DoubledArray.push(numbers[i] * 2);
}
console.log(`The numbers ${numbers} doubled are ${DoubledArray}`)



// 11 - Convert an array of names to uppercase
// toLocaleUpperCase()
{
   const names = ["John", "Alice", "Bob"];
   const UppercaseNames = names.map(name => name.toUpperCase());
   console.log(names);
   console.log(UppercaseNames);

}

// 12 - Convert an array of temperatures in Celsius to Fahrenheit
// formula: Celsius × 9/5 + 32

const temperatures = [0, 25, 50, 100];
const ToFREEDOM = [];
for (let i = 0; i < temperatures.length; i++) {
   ToFREEDOM.push(temperatures[i] * (9 / 5) + 32);
}
console.log(`The Temperatures the way GOD wanted it is ${ToFREEDOM} `)



// 13 - Given an array of strings, create a new array containing the lengths of each string.
const strings = ["hello", "world", "wcoding"];
const lengthsArray = [];

for (let i = 0; i < strings.length; i++) {
   lengthsArray.push(strings[i].length);
}
console.log(lengthsArray);


// 14 - Given an array of numbers, filter out the even numbers.
{
   const numbers = [1, 2, 3, 4, 5];
   for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
         numbers.splice(i, 1);
         i--
      }
   }
   console.log(numbers);

}

// 15 - Filter out long words from an array of strings, keeping only the strings with a length less than or equal to 5 
{
   const words = ["apple", "banana", "kiwi", "melon", "pie"];
   const shortWords = [];
   for (let i = 0; i < words.length; i++) {
      if (words[i].length <= 5) {
         shortWords.push(words[i]);
      }
   }
   console.log(shortWords);
}


// 16 - Filter out names that start with the letter "A" from an array of names using filter().
{
   const names = ["Alice", "Bob", "Anna", "Alex"];

   for (let i = 0; i < names.length; i++) {
      if (names[i].includes("A")) {
         names.splice(i, 1);
         i--;
      }
   } console.log(names);
}



// 17 - Check if all numbers in an array are positive using every().
{
   const numbers = [1, 2, -4, 3, 6, -10, 9];
   const allPos = numbers.every(number => number > 0);

   console.log(allPos);

}

// 18 - Check if all strings in an array have a length greater than 3 using every().
{
   const strings = ["hello", "world", "JavaScript"];

   for (let i = 0; i < strings.length; i++) {
      if (strings[i].length > 3) {
         console.log(`The string "${strings[i]}" has a length greater than 3`);
      } else {
         console.log(`The string "${strings[i]}" does not have a length greater than 3`);
      }
   }

}

// 19 - Check if all elements of an array are even numbers using every().
{
   const numbers = [2, 4, 6, 8, 10];
   const AllEven = numbers.every(num => num % 2 === 0);
   console.log(AllEven);

}

// 20 - Check if all names in an array start with the letter "J" using every().
{
   const names = ["John", "Jane", "James"];

   const Jnames = names.every(names => names[0] === "J");
   console.log(Jnames)

}

// 21 - Calculate the sum of all numbers in an array using
{
   const numbers = [1, 2, 3, 4, 5, 6, 7];
   let sumnumb = 0;
   for (let i = 0; numbers.length > i; i++) {
      sumnumb += (numbers[i]);
   }
   console.log(sumnumb);
}

let allColors = ["red", "blue", "yellow", "green", "periwinkle"]
allColors.splice()
allColors.reverse();
console.log(allColors)

kids = [[a, 2], [b, 3][c, 4]]
for (let i = 0; i < kids; i++) {

}
