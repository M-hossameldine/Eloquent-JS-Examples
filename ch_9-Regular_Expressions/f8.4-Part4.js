/*
* Dynamically Creating RegExp Objects
* search() method Vs. indexOF()
*/
/***************************************************************/
// Dynamically Creating RegExp Objects
/***************************************************************/
/*
 * Dynamic Expression: pattern that matches content of input text. (Ex. User Password)
 * Slash-based notation is not suitable for Dynamic Expressions
*/
let name = "harry";
let text = "Harry is our man. Hello, Harry!"
let regexB = new RegExp("\\b(" + name + ")\\b", "ig");
console.log(text.replace(regexB, "_$1_")); // -> _Harry_ is our man. Hello, _Harry_!

// Ex. to match user input that includes characters with special meaning
let teenName = "dea+hl[]rd";
let teenText = "This dea+hl[]rd is super annoying!";
let escaped = teenName.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexC = new RegExp("\\b(" + escaped + ")\\b", "ig");
console.log(teenText.replace(regexC, "_$1_"));


/***************************************************************/
// Search() Method
/***************************************************************/
/* It expects a regular expression 
  Like indexOf, it returns the index on which the expressin was found, 
  or -1 when it wasn't found.
*/
// console.log(/\S/.search("Word"));
console.log(" word".indexOf("w")); // -> 1
console.log(" word".search(/\S/)); // -> 1
console.log("   ".search(/\S/));   // -> -1

// but indexOf has an advatange of defining the startFrom index(offset) as the 2nd argument
console.log("test test".indexOf("test", 2)); // -> 5
/***************************************************************/


