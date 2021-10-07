/*
New JavaScript RegExp Features:
- Unicode Property Escapes (\p{...})
- Lookaround Assertions (?<=) and (?<!)
- Named Capture Groups
- s (dotAll Flag)
*/

// Lookbehind Assertions (?<=) and (?<!)
/*
Links:
https://javascript.info/regexp-lookahead-lookbehind

- "lookaround" assertions => (lookahead / lookbehind)
- To find only matches for a pattern that are followed or preceded by another pattern.

### Lookahead
#### Positive lookahead
- Syntax: X(?=Y)  --> look for "X", but match only if followed by "Y"
#### Negative lookahead
- Syntax: X(?!Y) --> search for "X" that is not followed by "Y"

### Lookbehind
  - Match the pattern only if there's something before it.
#### Positive Lookbehind
  - (?<=Y)x, matches "X", but only if there's "Y" before it.
#### Negative Lookbehind
  - (?<!Y)X, matches "X", but only if there's not "Y" before it.

### Capturing Groups
 - In some situations we might want to capture the lookaround expression as well or part of it. Just wrap the part into additional parentheses.
 X(?=(Y)Z) --> capture the X and "Y" also.
*/
// Positive Lookahead Ex: to get the cost 
let str = "1 turkey costs 30€"
let positiveLookahead = /\d+(?=€)/;
console.log(str.match(positiveLookahead));         // -> ['30', ...]

// ex: on complex loohaheads X(?=Y)(?=Z) find X that is follwed by Y and Z
let complexLookahead = /\d+(\s)(?=.*30)/
console.log(str.match(complexLookahead)); // -> ['1', ...]

// Negative lookahead Ex: to get the quantity 
let negativeLookahead = /\d(?!€)/;
console.log(str.match(negativeLookahead)); // -> ['1', ...]

// Positive Lookbehind Ex: find the cost  $30 -> 30
let StrDollar = "1 turkey consts $30";
let positiveLookbehind = /(?<=\$)\d+/;
console.log(StrDollar.match(positiveLookbehind)); // -> ['30', ...]

// Negative Lookbehind Ex: find the quantity
let negativeLookbehind = /(?<!\$)\d/;
console.log(StrDollar.match(negativeLookbehind)); // -> ['1', ...]

// Capturing Groups Ex
let caputeHead = /\d+(?=(€|kr))/;
console.log(str.match(caputeHead)); // -> ['30', '€' ...]

let captureBehind = /(?<=(\$|€))\d+/;
console.log(StrDollar.match(captureBehind));    // -> ['30', '$', ...]