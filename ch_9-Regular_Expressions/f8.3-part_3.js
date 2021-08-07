/*
* Word and String Boundaries
  - ^ and $ markers
  - 
* Choice Patterns
  - (|) Pipe character
*/
/***************************************************************/
// Word and String Boundaries
/***************************************************************/
/*
* "^" and "$" Markers : (String Boundary)
  To enforce that the match must span the whole string 
  - The ^ caret matches the start of the input (string starts with) 
  - The $ dollar sign matches the end. (string ends with)

* \b boundary marker:  (Word Boundary)
  a word boundary can be the start or end of the string or any point in the string that has a word character (\w) on one side and a nonword character on the other 
*/
console.log(/^\d{1,2}-\d{1,2}-\d{4}$/.test("520-3-2003")); // -> false

// /^!/ : sting that starts with ! 
console.log(/^!/.test("!g"));     // -> true

// string ends with "x"
console.log(/x$/.test("tx tyx"));     // -> true
console.log(/x$/.test("tx tyy"));     // -> false

console.log(/cat/.test("concatinate"));     // -> true
console.log(/\bcat/.test("concatinate"));   // -> false
console.log(/\b\d{1,2}-\d{1,2}-\d{4}/.test("start 10-10-2010end"));   // -> true
console.log(/\b\d{1,2}-\d{1,2}-\d{4}\b/.test("start 11-2-2011end"));  // -> false


/***************************************************************/
// Choice Patterns
/***************************************************************/
/*
 * Pipe character (|): denotes a choice between the pattern to it's left and the pattern to it's right, usually used with parentheses (option|option|option ... ). 
*/

let animalCount = /\b\d+ (pig|chicken|cow)s?\b/
console.log(animalCount.test("15 pigs"));     // -> true
console.log(animalCount.test("6 pigscows"));  // -> false

/***************************************************************/
// 
/***************************************************************/
/***************************************************************/