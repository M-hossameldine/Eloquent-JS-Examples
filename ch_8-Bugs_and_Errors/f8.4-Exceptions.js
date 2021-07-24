/*
  - Terms
  - try & catch()
  - throw
  - new Error
*/

/*
 * Exception Handling: ensures that the flow of the program doesn't break when an exception occurs, It helps to maintain the normal, desired flow of the program even when unexpected events occur, and prevent the program from crashing, so when a problem occurs -> stop the action that you are doing and jump to a place that knows how to handle the problem

 * Exceptions: are a mechanism that makes is possible for code that runs into a problem to raise (or throw) an exception. 

 * Unwidning the Stack: to jump out of the current function and it's callers, all the way down to the first call that started the current execution.

 - An exception zooms down this stack, trowing away all the call contexts it encounters.
 - You can set "obstacles" along the stack to catch exception as it is zooming down, take an action to address the problem and then continue to run the program. 

 * "throw" keyword: is used to raise an exception.
 * "try" block: catch exception of the code wraped in it
 * "catch" keyword : follows the try block, 
 - when the code in the try block causes an exception to be raised, the catch block is evaluated, with tha name in partentheses bound to the exception value.
 
 * "new Error": Error constructor used to create exception value. instances of this constructor also gather information about the call stack the existed when the exception was created, a so-called "stack trace". 
 * Stack trace: report of teh active stack frames at a certain point in time during the execution of the program
 

*/

function promptDirection(question) {
  let result = prompt(question);
  if(result.toLowerCase() == 'left') return 'L';
  if(result.toLowerCase() == 'right') return 'R';
  throw new Error("Invalid direction: " + result);
}

function look() {
  if(promptDirection("Which direction?") == "L") return "a house";
  else return "two angry bears";
}

try {
  console.log("you see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
