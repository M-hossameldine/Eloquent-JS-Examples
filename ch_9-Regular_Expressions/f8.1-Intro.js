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
* Repeating parts of a pattern
  - Plus sign (+)
  - Star (*)
  - Question Mark (?)
* Grouping Supexpressions
  - Parentheses 
  - i (lowercase & uppercase)
* Matches & groups
  - exec()
    - index
  - match() -string method-
  * Subexpressions grouped by parentheses ('')
    - Unmatched groups
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
// Repeating parts of a pattern 
/*****************************************************************/
/*
 * Plus sign (+): it indicates that the element may be repeated more than once.
 * Star (*): allows the pattern to match zero or more than one time
 * Question mark (?): makes part of the pattern optional, meaning it may occur zero times or one time. 
 * Braces: to indicate that a pattern should occur a precise number of times
  - {4}, requires it to occur 4 times
  - {2, 4}, to specify a range
  - {5,}, open-end, at least for a number of times
*/
console.log(/\d+/.test("456")); // -> true
console.log(/\d+/.test(""));    // -> false

console.log(/\d*/.test("1"));   // -> true
console.log(/\d*/.test(""));    // -> true


console.log(/neighbou?r/.test("neighbour")); // -> true
console.log(/neighbou?r/.test("neighbor"));  // -> true

dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("01-3-2020 8:35")); // -> true

/*****************************************************************/
// Grouping Subexpressions
/*****************************************************************/
/*
 * Parentheses: to enclose (group) part of the regular expression to be counted as a signle element
 * "i": at the end of the expression, makes the expression case sensitive (accepts both lowercase & uppercase letters) 
*/ 

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Booohoohooo"));    // -> true

/*****************************************************************/
// Matches & Groups
/*****************************************************************/
/*
 * exec(): execute method that will return null if no match was found and return an object with no information about the match otherwise.
    - index property: the object returned from the "exec" has an index property that tells us where in the string the successful match begins.
 * match()-string method-: method used with string values that behaves similarly to the exec() method.

 * Subexpressions grouped with parentheses
    - the text that matched those groups will show up in the array.
    - The whole match will be the 1st element,
    - the next element is the part matched by the first group , then the 2nd group, and so on.

    * Unmatched groups (ex: followed by ?), 
    will be given undefined value in the array

*/
console.log('currnet line');
let match = /\d+/.exec("12");
console.log(match); // -> ['12', index: 0, input: '12', groups: undefined]
console.log(match.index);  // -> 0

console.log("one two 150".match(/\d+/)); // -> ['150', index: 8, input: 'one two 150', groups: undefined];

// Subexpressions grouped with parentheses
let quotedText = /'([^']*)' \w/;
console.log(quotedText.exec("He said 'yes' directly but she said 'No' after a while "));
// -> [ "'yes' d", 'yes', index: 8, input: "He said ....etc", groups: undefined];

// Unmatched groups (ex: followed by ?), will be given undefined value in the array
console.log(/bad(ly)?/.exec("bad"));
// -> ['bad', undefined, input: 'bad', groups: undefined];
console.log(/bad(ly)?/.exec("badly"));
// -> ['badly', 'ly, input: 'badly', groups: undefined];
/*****************************************************************/

/*****************************************************************/
/*****************************************************************/

