// METHODS
/*
 * Methods: are nothing more than properties that hold function values.
*/

let rabbit = {};
rabbit.speak = function (line) {
  console.log(`The Rabbit says "${line}"`);
}

rabbit.speak("Hello!")
// -> The Rabbit says "Hello!"


function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'` );
}

let whiteRabbit = {type: "white", speak}
let hungryRabbit = {type: "hungry", speak}

whiteRabbit.speak('Thanks');
// -> The white rabbit says "Thanks"
hungryRabbit.speak("I wanna another carrot!");
//  -> The hungry rabbit says "I wanna a nother carrot"

function speak(line){
  console.log(`The ${this.type} rabbit says ${line}`);
}

let goodRabbit = {type: 'good', speak};
let badRabbit = {type: 'bad', speak};

goodRabbit.speak('Thack you!');
badRabbit.speak('More!')