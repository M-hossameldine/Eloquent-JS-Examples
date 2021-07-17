/*
 - Terms
 - Strict Mode
 - Types -> TypeScript
 - Testing
*/
/*******************************************************************************/
// Terms
/*******************************************************************************/
/*
 * Bug: flaw in a computer program
 * Debugging: The process of finding mistakes - bugs - in the programs 

*/
/*******************************************************************************/
// Strict Mode
/*******************************************************************************/
/*
 * JavaScript can be a little stricter by enabling the strict mode.
 * put "use strict" at the top of file and function body.
  
 * Two Main changes in Strict mode:
 - Won't create a global variable if you didn't put let in front of your binding
 - "this" binding holds the value "undefined" in functions that are not called as methods 
   (outside the strict mode this would refer to the global scope object)
 * 
 * 
*/ 

// Case: creating a golbal binding
function problemWithoutStrict () {
  for (count = 0; count < 5; count++) {
    console.log(`Count ${count}`);
  }
}
problemWithoutStrict(); // -> logs count normally 


function problemWithStrict () {
  "use strict";
  for(count = 0; count < 5; count++) {
    console.log(`Count ${count}`);
  }
}
problemWithStrict(); // -> reference error: count is not defined 

// Case: this 
function person (name) {this.name = name}
let user1 = person ("ahmed");
console.log(name); // -> ahmed

function fruitSeason (season) { "use strict"; this.season = season;}
// let fruit1 = fruitSeason("Summer"); //-> Type error: cannot set property 'season' of undefined
// console.log(season); 

/*******************************************************************************/
// Types
/*******************************************************************************/

// Documentation trick for functions -> comment with return value an type
// (VillageState, Array) -> {direction: stirng, memory: Array}
function goalOrientedRobot(state, memory) {
  // ...
}
/*******************************************************************************/
// Testing
/*******************************************************************************/

/*
 * Automated Testing: The process of writing programa to test another program.
 * There Exist pieces of software that help you build and run collections of tests (test suits) by providing a language (in the form of functions and methods) suited to expressing tests and by putting informative information when a test fails. These are usually called "Test runners".
 * The more external objects that the code interacts with the harder it is to set up the context in which to test it.
*/ 

function test(label, body) {
  console.log(`Test case: ${label} ...`);
  if(!body()) console.log(`Failed: ${label}`);
}

test("Convert Laten text to uppercase", function () {
  return "hello".toUpperCase() == "HELLO";
})

test("Don't convert Case-less characters", function () {
  return "مرحبا".toUpperCase() == "مرحبا";
})