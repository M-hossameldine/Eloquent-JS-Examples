/*
* Parasing an INI File
* International Characters
  - Non-English Characters
  - Two-Unit Characters
  - u flag
  - \p
    \p{Property=Value}
    \p{Property}

*/

/**************************************************************/
// Parsing an INI File
/**************************************************************/
/* INI file format rules
- Blank lines and lines starting with semicolons are ignored.
- Lines warpped in [ and ] start a new section
- Lines containing an alphnumeric identifier followed by an = character and a setting to the current section.
- Anything else is invalid.
*/

function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;
  string.split(/\r?\n/).forEach( line => {
    let match;
    if (match = line.match(/^(\w+)=(.*)$/)) {
      section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.");
    }
  });
  return result;
}
/**************************************************************/
// International Characters
/**************************************************************/
/*
* JavaScript's RE are rather dumb about characters that do not apppear in the English language
* RE work on code units (Ch. 5). This means characters that are composed of two code units behave strangely.
*/

console.log(/🍎{3}/.test("🍎🍎🍎")); // -> false
// The dot matches a single code unit, not the two that make up the rose emoji
console.log(/<.>/.test("<🌹>"));       // -> false
// 'u' option (for Unicode) to your RE to make it treat such (two unit) characters properly
console.log(/<.>/u.test("<🌹>"));      // -> true
// '\p' in a RE (that must have the unicode option enabled) to match all characters to which the Unicode standard assigns a given property 
console.log(/\p{Script=Greek}/u.test("α"));   // -> true
console.log(/\p{Script=Arabic}/u.test("α"));  // -> false
console.log(/\p{Script=Arabic}/u.test("ب"));  // -> true
console.log(/\p{Alphabetic}/u.test("!"));     // -> false
console.log(/\p{Alphabetic}/u.test("a"));     // -> true
console.log(/\p{Alphabetic}/u.test("أ"));     // -> true
/*
\p{Property=Value}
 - To match any character that has the given value for that property.
\p{Propery}
 - The value is assumed to be either a binary property such as Alphabetic or a category such as Number 

*/
/**************************************************************/