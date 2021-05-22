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
  console.log(`The ${this.type} rabbit says "${line}"` );
}

let whiteRabbit = {type: "white", speak}
let hungryRabbit = {type: "hungry", speak}

whiteRabbit.speak('Thanks');
// -> The white rabbit says "Thanks"
hungryRabbit.speak("I wanna another carrot!");
//  -> The hungry rabbit says "I wanna a nother carrot"

/* You can think of "this" as an extra parameter that is passed in a different way,
 * To pass it explicitly, you can use the call() method
 * The first parameter will be the "this" - object - value and the further arguments are treated as normal parameters.
*/

speak.call(hungryRabbit, "Burp!");
// -> The hungry rabbit says "Burp!"
