//  ARRAY-PROTOTYPE.some( test-method )
/*
 * "some" for some elements
 * Method tests whether any array element matches a given predicate function
 * returns: true | false;
*/ 

  let numbers = [0, 1, 2, 3, 4];
  console.log(numbers.some( number => number > 0)); // -> true
  console.log(numbers.some( number => number < 0)); // -> false


// STRING-PROTOTYPE.charCodeAt( CHAR-INDEX )
/*
 *gives you a code unit, not a full character code
*/


// STRING.PROTOTYPE.codePointAt( CHAR-INDEX) 
/*
 * Give a full Unicode character
 * Works properly with both types of character sizes, one or two code units
 * for / of loop also used to loop over a string, and gives the real characters not code units.
*/ 

  let roseDragon = "🌹🐉";
  for (let char of roseDragon) {
    console.log(char);
  }

  // -> 🌹
  // -> 🐉

// Code Units Vs. UTF-16
/*
 * JavaScript strings are encoded as a sequence of 16-bit numbers, these are called CODE UNITS.
 * A Unicode character code was initially supposed to fit within suhc a unit (over 65000), not enough 
 * So there was a need to use more momory per character ---> UTF-16 was invented 
 * UTF-16 describes most common characters using a single 16-bit code unit 
 * , but uses a pair of two such units for others (less common).
 * Now we have charcters with one unit and others with two units
 * but, with the advent of emoji, everybody has started using two-unit characters.
 * 
 * ** String operations and length property: 
 * Operations of javaScript strings, such as getting their length through the length property 
 * and accessing their content usin square brackets, deal only with code units
*/

  // Two emoji characters, horse and shoe
  let horseShoe = "🐴👟";
  console.log(horseShoe.length); 
  // -> 4
  console.log(horseShoe[0]); 
  // -> (Invalid half-character)
  console.log(horseShoe.charCodeAt(0));
  // -> 55357 (code of the half character - 1st unit)
  console.log(horseShoe.codePointAt(0));
  // 128052 (Actual code for horse emoji)


// function that is given a character code and returns the used script 

  function characterScript(code){
    for(let script of SCRIPTS){
      if(script.ranges.some( ([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }