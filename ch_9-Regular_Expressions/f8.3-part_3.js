/*
* Word and String Boundaries (Anchors)
  - ^ and $ markers (String Boundary)
    - (m) Mulit-Line Mode /^regex$/m
  - \b (Word Boundary)
* Choice Patterns
  - (|) Pipe character
* Backtracking
* The replace method
  - replace ()
    - global option (g)
  - replaceAll ()
  * 2nd Argument
    - Parenthesized groups in the pattern reference: $1, $2 .... $09
      - $&: whole match 
    - Pass a function rather than a string
* Greed
  - Dot ( . ): All characters except line break characters 
    * Aleternatives of Dot
    - [^]
    - [\s\S]
  - Greedy repetition operators (+, *, ?, and {})
  - Nongreedy operators (+?, *?, ??, {}?)
*/
/***************************************************************/
// Word and String Boundaries
/***************************************************************/
/*
* "^" and "$" Markers : (String Boundary)
  To enforce that the match must span the whole string 
  - The ^ caret matches the start of the input (string starts with) 
  - The $ dollar sign matches the end. (string ends with)

  * Multi-Line Mode (m): 
    when matching a multi-line string (contain line breaks \n), 
    and want the expression to match every single line not the whole string
    ^: will refer to the start of each line (after \n)
    $: will refer to end of each line (before \n)
    /^regex$/m

* \b boundary marker:  (Word Boundary)
  a word boundary can be the start or end of the string or any point in the string that has a word character (\w) on one side and a nonword character on the other 
*/
console.log(/^\d{1,2}-\d{1,2}-\d{4}$/.test("520-3-2003")); // -> false

// /^!/ : sting that starts with ! 
console.log(/^!/.test("!g"));     // -> true

// string ends with "x"
console.log(/x$/.test("tx tyx"));     // -> true
console.log(/x$/.test("tx tyy"));     // -> false

// Multi-Line Mode
console.log(/^\d+$/.exec("test\n333")); // -> null
console.log(/^\d+$/m.exec("test\n333"));// -> '333', index: 5

// Word Boundary 
console.log(/cat/.test("concatinate"));     // -> true
console.log(/\bcat/.test("concatinate"));   // -> false
console.log(/\b\d{1,2}-\d{1,2}-\d{4}/.test("start 10-10-2010end"));   // -> true
console.log(/\b\d{1,2}-\d{1,2}-\d{4}\b/.test("start 11-2-2011end"));  // -> false


/***************************************************************/
// Choice Patterns
/***************************************************************/
/*
 * Pipe character (|): denotes a choice between the pattern to it's left and the pattern to it's right, used(grouped) with parentheses (option|option|option ... ). 
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
 - The first argument can be a string or a regular expression, 
 - The first match will be replaced
 - g option: (for global) added to the regular expression, to replace all matches in the string 

 * replaceAll(): method to replace all matches gobally, not just the first match
 
 2nd Argument:  
 * Parenthesized groups in the pattern reference $number: $1, $2, ... $9,
    in the replacement string:
    $1 is replaced by the text againest the first group and so on...
  - $&: refers to the whole match 
  
 * Pass a function rather than a string:
    - Syntax: function (The_whole_Match, Group_One, Group_Two, ...)
    - for each replacement, the function will be called with the matched groupes (as well as the whole match) as arguments and it's return value will be inserted into the new string 

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
console.log(s.replace(/\b(cia|fbi)\b/g, str => str.toUpperCase()));
// -> The CIA and FBI

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
// Greed
/***************************************************************/
/*
 * Dot ( . ): matches a single character, without caring what the character is. 
  - The only exceptin are line break characters.
  - Sigle-line mode: to make the dot also matches line breaks
    /^regex$/s;
  
  // Alternatives of Dot (for compatibility & line-break issues)
  - [^] : any character that is not in the empty set of characters (as a way to match any character)
  - [\s\S]: matches whitespace & nonwhitespace (all) characters 

 * Greedy repetition operators (+, *, ?, and {})
  - They match as much as they can, and backtrack from there.

 * Nongreedy operators (+?, *?, ??, {}?)
  - add a question mark after them 
  - Start matching as little as possible
*/

// Dot (.)
console.log(/.+/.exec("Hi Hossam!\nWelcome to 2021.")); // -> "Hi Hossam!"
console.log(/.+/s.exec("Hi Hossam!\nWelcome To 2021.")); // -> "Hi Hossam!\nWelcome to 2021."

// [^] - Match any character
console.log(/[^]+/.exec("All 20 \n ?!")); // -> "All 20 \n ?!"

// [\s\S] - Match all characters
console.log(/[\s\S]+/.exec("It's \n 2021!")); // -> 'It's \n 2021!'

// Greedy Operators 
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "")
}

console.log(stripComments("2 + /* 9 */3"));   // -> 2 + 3
console.log(stripComments("1 /* a */ + /* b */ 1")); // -> 1  1

// Nongreedy Operators
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
  }
console.log(stripComments("1 /* a */+/* b */ 1"));  // → 1 + 1


/***************************************************************/

