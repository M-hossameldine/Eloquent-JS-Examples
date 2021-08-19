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
// The lastIndex property
/***************************************************************/
/* 
 * RegExp.Prototype.source propety
  - Which contains the string that expression was creatd from, without the 2 forward slashes on both sides or the flags.
  
 * lastIndex property
  - Controls, in some limited circumstances, where the next match will start:
    . The RE must have the global (g) or sticky (y) option enabled,
    . The match must happen through the exec or test methods 
  - If the match was successful, the call to exec automatically updates lastIndex property to point after the match.
  If no match was found, lastIndex is set back to zero

  * Difference between the global an the sticky options:
    - Sticky: The match will succeed only if it starts directly at lastIndex.
    - Global: It will search ahead for a position where a match can start.
  
  * Problems caused by multiple exec call on a shared regular expression.
    - The regular expression might be accidently starting at and index that was left over from a previous call.

*/

let pattern = /foo/ig;
let strB = "Football is football";
console.log(pattern.lastIndex);        // -> 0
console.log(pattern.exec(strB).index); // -> 0
console.log(pattern.lastIndex);        // -> 3
console.log(pattern.exec(strB).index); // -> 12
console.log(pattern.lastIndex);        // -> 15

let global = /abc/g;
console.log(global.exec("xyz abc")); // -> "abc"
let sticky = /abc/y;
console.log(sticky.exec("xyz abc")); // -> null

let digit = /\d/g;
console.log(digit.exec("here it is: 1")); // -> 1
console.log(digit.exec("and now: 1"));    // -> null
/******************************************* ********************/

