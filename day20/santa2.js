let yourMoves = "R3, L5, R2, L1, L2, R5, L2, R2, L2, L2, L1, R2, L2, R4, R4, R1, L2, L3, R3, L1, R2, L2, L4, R4, R5, L3, R3, L3, L3, R4, R5, L3, R3, L5, L1, L2, R2, L1, R3, R1, L1, R187, L1, R2, R47, L5, L1, L2, R4, R3, L3, R3, R4, R1, R3, L1, L4, L1, R2, L1, R4, R5, L1, R77, L5, L4, R3, L2, R4, R5, R5, L2, L2, R2, R5, L2, R194, R5, L2, R4, L5, L4, L2, R5, L3, L2, L5, R5, R2, L3, R3, R1, L4, R2, L1, R5, L1, R5, L1, L1, R3, L1, R5, R2, R5, R5, L4, L5, L5, L5, R3, L2, L5, L4, R3, R1, R1, R4, L2, L4, R5, R5, R4, L2, L2, R5, R5, L5, L2, R4, R4, L4, R1, L3, R1, L1, L1, L1, L4, R5, R4, L4, L4, R5, R3, L2, L2, R3, R1, R4, L3, R1, L4, R3, L3, L2, R2, R2, R2, L1, L4, R3, R2, R2, L3, R2, L3, L2, R4, L2, R3, L4, R5, R4, R1, R5, R3";
//   <!-- either turn left (L) or right (R) 90 degrees, then walk forward the given number of blocks, 
//    ending at a new intersection.
// There's no time to follow such ridiculous instructions on foot, though, 
// so you take a moment and work out the destination. 
// Given that you can only walk on the street grid of the city,
//  how far is the shortest path to the destination?
// function grid()

let yourMovesArray = yourMoves.split(', ');
let x = 0;

let y = 0;

let direction = "North";

for (let i = 0; i < yourMovesArray.length; i++) {
    let moves = yourMovesArray[i];
    let whichWay = moves[0];
    let blocks = parseInt(moves.substring(1));

    if (whichWay === "R") {
        switch (direction) {
            case "North":
                direction = "East";
                break;
            case "East":
                direction = "South";
                break;
            case "South":
                direction = "West";
                break;
            case "West":
                direction = "North";
                break;
        }
    } else if (whichWay === "L") {
        switch (direction) {
            case "North":
                direction = "West";
                break;
            case "West":
                direction = "South";
                break;
            case "South":
                direction = "East";
                break;
            case "East":
                direction = "North";
                break;
        }
    }

    switch (direction) {
        case "North":
            y += blocks;
            break;
        case "East":
            x += blocks;
            break;
        case "South":
            y -= blocks;
            break;
        case "West":
            x -= blocks;
            break;
    }
}
EasterBunnyHQ = (Math.abs(x) + Math.abs(y))

console.log("Easter Bunny HQ is ", EasterBunnyHQ, " blocks aways");






