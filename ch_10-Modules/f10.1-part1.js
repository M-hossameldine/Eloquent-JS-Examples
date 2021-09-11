/* Links:
*Modules
https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/

*/
/*
* Intro Concepts
* Improvised Modules 
* Evaluating Data as Code
  - eval()
  - Function Constructor
*/

/*
* The ideal program:
  - has a crystal-clear structure.
  - The way it works is easy to explain.
  - Each part plays a well-defined role.

* "Big ball of mud" term is often used for large, structureless programs.

* A module: is a piece of program that specifies:
  - whick other pieces it relies on (dependencies) 
  - and whick functionality it provides for other modules to use (it's interface)

* Module interface: 
  - They make part of the module available to the outside world and keep the rest pirvate.
  - By restircting the ways in whick modules interact with each other, the system becomes more like a LEGO, where pieces interact through well-defined connectors.

* Dependencies: 
  - are the relations between modules, it can be used to figure out whick other modules need to be present to be able to use a given module and to automatically load dependencies.

* A package: is a chunk of code that can be distributed (copied and installed). It may contain one or more modules and has information about whick other packages it depends on.

# Infrastructure To handle packages NPM (https://npmjs.org)

* NPM is two things: 
  - an online service where one can download (and upload) packages
  - and a progam (bundled with Node.js) that helps you install and manage them.
*/  

/************************************************************************/
// Improvised Modules
/************************************************************************/
/*
* Unitl 2015, JavaScript language had no built-in module system.
  - So developers designed their own module systems on top of the language.
  - You can use JavaScript functions to create local scopes and objects to represent module interfaces.

* (Remember: in JavaScript, functions are the only way to create new scope.)

* Ex: A module for going between day names and numbers (as returned by Date's getDay method)
  - It's interface consists of weekDay.name and weekDay.number, and hides it's local binding names inside the scope of a function expression that is immediately invoked.
*/

const weekDay = function () {
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return {
    name(number) {return names[number];},
    number(name) {return names.indexOf(name);}
  };
}();
console.log(weekDay.name(4)); // -> Thursday
console.log(weekDay.number("Friday")); // -> 5
console.log(weekDay.name(weekDay.number("Sunday")));

/************************************************************************/
// Evaluating Data as Code
/************************************************************************/
/*
 * There are several ways to take data (a string of code) and run it as part of the current program.

  # Driect through the special operator eval()
  - but has security issues, it breaks some properties that scopes normally have,such as it being easily predictable whick binding a given name refers to. 

  # Function Constructor
  - has less security issues than eval(), and won't do odd things with other scopes
  - it takes two arguments: 
    . a string containing a comma-seprated list of argument names.
    . and a string containing the function body.
  - Syntax:
  new Function(arg1, ... , argN, functionBody)
  Function(arg1, ... , argN, functionBody)  // ommit the new 
  
*/

// eval ()
const x = 1;
function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX("var x = 2")); // -> 2
console.log(x); // -> 1

// Function Constructor
const plusOne = Function('n', 'return n + 1');
console.log(plusOne(2)); // -> 3

/************************************************************************/

