const lotsOfPeople = [
    ["Boyd", 52],
    ["Scottie", 63],
    ["Elsie", 54],
    ["Retta", 31],
    ["Ethyl", 23],
    ["Murray", 30],
    ["Edythe", 49],
    ["Arthur", 76],
    ["Irwin", 12],
    ["Mylene", 19],
    ["Nicolette", 61],
    ["Davin", 26],
    ["Torrance", 37],
    ["Milford", 86],
    ["Jonathon", 43],
    ["Gail", 28],
    ["Al", 90],
    ["Asia", 70],
    ["Blaze", 38],
    ["Norma", 71],
    ["Pink", 13],
    ["Rosalee", 58],
    ["Isobel", 69],
    ["Kennedi", 24],
    ["Malcolm", 50],
    ["Rosie", 57],
    ["Lindsay", 74],
    ["Marvin", 78],
    ["Dorothea", 88],
    ["Jarret", 79],
    ["Justyn", 89],
    ["Walter", 77],
    ["Geovanny", 51],
    ["Leora", 57],
    ["Lois", 48],
    ["Lukas", 60],
    ["Mariela", 50],
    ["Cassidy", 72],
    ["Tracey", 57],
    ["Virginia", 73],
    ["Alexandra", 78],
    ["Lennie", 63],
    ["Pedro", 26],
    ["Ryann", 67],
    ["Mavis", 71],
    ["Tristian", 83],
    ["Vita", 79],
    ["Noemi", 40],
    ["Mckayla", 17],
    ["Gussie", 88],
    ["Courtney", 38],
    ["Geraldine", 45],
    ["Kristy", 27],
    ["Yadira", 55],
    ["Jermey", 15],
    ["Jett", 41],
    ["Lesley", 31],
    ["Danny", 17],
    ["Betsy", 68],
    ["Geovanny", 44],
    ["Itzel", 33],
    ["Bernard", 74],
    ["Trace", 20],
    ["Pierce", 33],
    ["Orpha", 27],
    ["Verla", 55],
    ["Christophe", 51],
    ["Novella", 84],
    ["Paige", 51],
    ["Emely", 63],
    ["Nikolas", 83],
    ["Albin", 90],
    ["Gudrun", 59],
    ["Shaniya", 36],
    ["Antonina", 43],
    ["Madie", 33],
    ["Idella", 19],
    ["Mathilde", 30],
    ["Lyric", 86],
    ["Frederik", 12],
    ["Greyson", 30],
    ["Etha", 39],
    ["Ashley", 32],
    ["Avis", 67],
    ["Patsy", 88],
    ["Jerrod", 23],
    ["Rylee", 80],
    ["Giovanny", 90],
    ["Flavie", 19],
    ["Savanna", 89],
    ["Gladyce", 22],
    ["Judah", 53],
    ["Flossie", 20],
    ["Blake", 17],
    ["Vince", 18],
    ["Theodora", 34],
    ["Micah", 44],
    ["Ivory", 40],
    ["Eliza", 88],
    ["Prudence", 36],
    ["Esta", 16],
    ["Peter", 17],
    ["Eugene", 67],
    ["Demario", 44],
    ["Emmitt", 45],
    ["Elenor", 61],
    ["Garfield", 28],
    ["Tremayne", 88],
    ["Kylie", 26],
    ["Verlie", 37],
    ["Willis", 20],
    ["Jovan", 55],
    ["Laurel", 29],
    ["Kacey", 16],
    ["Grover", 57],
    ["Demarco", 89],
    ["Barney", 18],
    ["Rose", 60],
    ["Chet", 58],
    ["Raul", 10],
    ["Tillman", 63],
    ["Kylie", 46],
    ["Abraham", 36],
    ["Sammie", 55],
    ["Dock", 37],
    ["Samir", 58],
    ["Carlos", 21],
    ["Daryl", 78],
    ["Alberto", 88],
    ["Allan", 57],
    ["Bonita", 90],
    ["Kamille", 43],
    ["Jeanne", 24],
    ["Arnold", 49],
    ["Reta", 64],
    ["Darren", 79],
    ["Laurianne", 40],
    ["Crystel", 39],
    ["Santina", 51],
    ["Ara", 67],
    ["Hanna", 77],
    ["Remington", 16],
    ["Kian", 61],
    ["Daisy", 53],
    ["Nellie", 29],
    ["Harley", 83],
    ["Jessie", 15],
    ["Dawson", 32],
    ["Lewis", 70],
    ["Ezequiel", 57],
];


let startWithE = 0;
let over50 = 0;


for (let x = 0; x < lotsOfPeople.length; x++) {
    let currPerson = lotsOfPeople[x];

    if (currPerson[0][0] === 'E') startWithE += 1;

    if (currPerson[1] > 50) over50 += 1;
}


for (let x = lotsOfPeople.length - 1; x >= 0; x--) {
    let currPerson = lotsOfPeople[x];

    if (currPerson[1] < 21) {
        lotsOfPeople.splice(x, 1);
    }
}

console.log("num starts with E:", startWithE, "Num over 50", over50, "Peeps:", lotsOfPeople);


// console.log(Epeople);
// // people over 50

// let countOver50 = 0;

// for (let i = 0; i < lotsOfPeople.length; i++) {
//     const person = lotsOfPeople[i];
//     const age = person[1];

//     if (age > 50) {
//         countOver50++;
//     }
// }
// console.log(`Number of people over 50: ${countOver50}`);
// // remove under 21 

