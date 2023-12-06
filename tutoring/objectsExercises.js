// ================ Object exercise ===========================

// 1 - Create an object that has your firstName, lastName, and occupation as keys and
//     console log to see the result
let person = {
   firstName: "Cullen",
   lastName: "Marshall",
   occupation: "unemployeed"
}
console.log(person);


// 2 - Access each value from your object using both dot notation and bracket notation.

console.log(person.firstName);
console.log(person.lastName);
console.log(person.occupation);

console.log(person['firstName']);
console.log(person['lastName'])
console.log(person['occupation'])

// 3 - Add a key for hobby to your object. Remove the key and value for occupation
//     using the delete keyword
person.hobby = "hiking";
delete person.occupation;

console.log(person)



// ====================== Object iteration exercises ============================

// Exercise 1
let namesAndHobbies = {
   scott: "JavaScript",
   mario: "jogging",
   luigi: "table building",
   lucy: "sailing"
}

// 1 - Write a code to print the value then the key to the console separated by => 
// (for in loop)
for (let stuff in namesAndHobbies) {
   console.log(`${namesAndHobbies[stuff]} => ${stuff}`)
}


// 2 - Add your name as the key and your favorite hobby as the value to the namesAndHobbies object.
namesAndHobbies.cullen = "golf";

// console.log(namesAndHobbies)




// 3 - Write an if statement that console.logs your name and hobby to the console if 
//     the key of your name is contained in the object. (if('key' in object))
// function ex3() {
//    for (let i = 0; i < namesAndHobbies.length; i++) {
//       if ('cullen' == namesAndHobbies) {
//          console.log(namesAndHobbies)
//       }
//       else {
//          console.log("nope")
//       }
//    }
// }
// ex3()
for (const key in namesAndHobbies) {
   if (key === "cullen") {
      console.log("gay frogs by: " + key)

   }
}





// Exercise 2
let programming = {
   languages: ["JavaScript", "Python", "Ruby"],
   isChallenging: true,
   isRewarding: true,
   difficulty: 8,
   whyCSS: "Why do I need to learn CSS?? CSS is stupid, man!"
};

// 1 - Write the command to add the language "Java" to the end of the languages array.
programming.languages.push("Java");

console.log(programming);


// 2 - Change the difficulty to the value of 7.
programming.difficulty = 7
console.log(programming)

programming.whyCSS = "It is fun!";
console.log(programming);
// 3 - Using the delete keyword, remove the whyCSS key from the programming object.
delete programming.whyCSS;
console.log(programming);


// 4 - Write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming.difficulty);

// 5 - Using a loop, iterate through the languages array and console.log all of the languages.
for (let i = 0; i < programming["languages"].length; i++) {
   console.log(programming.languages[i]);
}


// 6 - Using a loop, console.log all of the keys in the programming object.
for (const i in programming) {
   console.log(i + " key")
}


// 7 - Using a loop, console.log all of the values in the programming object.
for (const value in programming) {
   console.log(programming[value])
}



// ==================== If there's time, extra exercises =========================

// Exercise 1
// Create an object to hold information of your "favorite" recipe. 
// It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//     Cheesecake
//     Serves: 6
//     Ingredients:
//     graham cracker
//     sugar
//     butter  
//     cream cheese
//     eggs
//     vanilla extract 



// Exercise 2
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. 
// If you read the book, log 'You already read "The book" by Author.', 
// and if you didn't , log 'You still need to read "The book" by Author.'

const books = [
   {
      title: 'The Fellowship of the Ring',
      author: 'J. R. R. Tolkien',
      alreadyRead: true
   },
   {
      title: 'The Art of War',
      author: 'Sun Tzu',
      alreadyRead: false
   }
];





