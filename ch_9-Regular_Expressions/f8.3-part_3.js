/*
* Word and String Boundaries
  - ^ and $ markers
  - 
* Choice Patterns
  - (|) Pipe character
* Backtracking
* The replace method
  - replace ()
  - replaceAll ()
  * 2nd Argument
    - Parenthesized groups in the pattern reference: $1, $2 .... $09
      - $&: whole match 
    - Pass a function rather than a string

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
// Backtracking
/***************************************************************/
/* 
ex:
  /\b([01]+b|[\da-f]+h|\d+)\b/
  /boundary: ( binary|Hexadecimal|Decimal ) :boundary/
/*


/***************************************************************/
// The replace Method
/***************************************************************/
/*
 * replace(): method that is used with "String values" to replace part of string with another string
 - The first argument can be a regular expression, the first match will be replaced
 - g option: (for global) added to the regular expression, to replace all matches in teh string 

 * replaceAll(): method to replace all matches gobally, not just the first match
 
 2nd Argument:  
 * Parenthesized groups in the pattern reference $number: $1, $2, ... $9,
    in the replacement string:
    $1 is replaced by the text againest the first group and so on...
  - $&: refers to the whole match 
  
 * Pass a function rather than a string:
  for each replacement, the function will be called with the matched groupes (as well as the whole match) as arguments and it's return value will be inserted into the new string 
   function (The_whole_Match, Group_One, Group_Two, ...)

*/

// ** replace
console.log("papa".replace("p", "m")); // -> mapa
console.log("Borobudur".replace(/[ou]/, "a"));    // -> Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));   // -> Barabadar

// *** replaceAll ***
// console.log("papa".replaceAll("p", "m")); // -> mama

// *** Patenthesized groups in the pattern reference ***
// Ex: A big string contains the names of people, one name per line, in the format Lastname, Firstname. we want to swap these names and remove the comma to get Firstname Lastname format.

console.log("Essam, Ali\nBakr, Marwa\nNassim, Ahmed"
              .replace(/(\w+), (\w+)/g, "$2 $1"));
// -> Ali Essam
//    Marwa Bakr
//    Ahmed Nassim

console.log("Jasmine Sabry\nTamer Ashour"
              .replace(/(\w+) (\w+)/g, "$& Hela Hobaaaa"));
// -> Jasmine Sabry Hela Hobaaaa
//    Tamer Ashour Hela Hobaaaa 

// *** function as a second argument ***
// Ex(1)
let s = "The cia and fbi";
// console.log(s.replace(/\b(cia|fbi)\b/g, str => str.toUpperCase()));
// -> The CIA and FBI

console.log(s.replace(/\b(cia|fbi)\b/g, str => str.toUpperCase()));

// Ex(2)
let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if(amount == 1) { // remove the s 
    unit = unit.slice(0, unit.length - 1)
  } else if (amount == 0) {
    amount = "no";
  }

  return amount + " " + unit;
}

console.log(stock.replace(/\b(\d+) (\w+)\b/g, minusOne));
// -> no lemon, 1 cabbages, and 100 eggs
/***************************************************************/

