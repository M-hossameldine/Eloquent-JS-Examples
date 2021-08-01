/*
- terms
* Creating regular Expressions
  - RegExp
  - //
  * Forward "/" & Back "\" slashes & special characters
* Testing for Matches
  - test()
* Sets of Characters
  - Square bracket []
   - Hyphin (-)
  - Common character groups (/d, /w, /s, /D, /W, /S)
  - Caret (^) invert 
*/

/*****************************************************************/
// Terms
/*****************************************************************/
/*
- Regular Expressions : are a way to describe patterns in string data. 
*/ 

/*****************************************************************/
// Creating a regular expression
/*****************************************************************/
/*
- Regular expression is a type of object, 
* created by:
- RegExp constructor 
- Forward slash (/): to enclose the literal value of the pattern
*/

// ex RE pattern for a string contains "abc"
let re1 = new RegExp ("abc");
let re2 = /abc/;

/*****************************************************************/
// Forward "/" & Back "\" slashes & special character
/*****************************************************************/
/*
 * using the RegExp constructor: the pattern is written as a normal sting, so the usual rules apply for backslashes.
 * for the // notation: 
  -since the forward slash ends the pattern, we put a backslash before any forward slash that we want to be part of the pattern.
  - backslashes that aren't part of special character code (like \n) will be preserved. rather than ignored as they are in string, and change the meaning of the pattern
 * Special characters (like questin mark and plus signs)
  -have a special meaning 
  - must be preceded by a backslash if they are meant to represent the character itself
*/

let eighteenPlus = /eighteen\+/;

/*****************************************************************/
// test()
/*****************************************************************/
/*
 - test method: if you pass it a string, it will retrun a Boolean tell you whether the string contains a match of the pattern in the expression. 
*/

console.log(/abc/.test("abcde")); // -> true
console.log(/abc/.test("ccabc")); // -> true
console.log(/abc/.test("bc"));    // -> false

/*****************************************************************/
// Sets of Characters
/*****************************************************************/
// square brackets: set of characters between the brackets, matches any of the characters between brackets.
console.log(/[0123456789]/.test("in 1992")); // -> true

// Hyphin (-) : within square brackets, between two characters can be used to indeicate a range of characters, oredering is determined by the character's Unicode.
console.log(/[0-9]/.test("in 1995"));        // -> true 

// Common Character groups
/*
 * \d Any digit character [0-9]
 * \w Any alphanumeric character ("Word character", number)
 * \s Any whitespace character (space, tab, newline, and similar)
 * \D A character that is not a digit
 * \W A nonalphanumeric character ()
 * \S A nonwhitespace character
 * . Any character except for newline 
*/

console.log(/[\d]/.test('58')); 

// Ex. to match a date and time formate like 01-30-2003 15:20
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/ 
console.log(dateTime.test("01-30-2003 15:20"));   // -> true
console.log(dateTime.test("30-jan-2003 15:20"));  // -> false

// Caret (^) : to invert a set of characters (to match any character except the ones in the set), use it after the opening bracket
let notBinary = /[^01]/;
console.log(notBinary.test("100011001100")); // -> false
console.log(notBinary.test("110010102"));    // -> true
/*****************************************************************/

