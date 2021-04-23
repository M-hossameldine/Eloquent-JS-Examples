// indexOf() method
/*
  * For strings only, it can search for a string containing more than one character
*/
console.log("NewString".indexOf("ri")); // -> 5


// slice(start_index, end_index) 
console.log("NewString".slice(2, 5))     // -> wSt


// trim()
/*
  * Removes whitespaces, new lines, repeated characters
  * from start and end of the string 
*/

console.log(" NNewStringg \n".trim());   // -> NNewStringg

// padStart(padding lenght , padding character)
console.log(String(6).padStart(4, '0'))  // -> 0006


// split()
/*
  * Split a string on every occurrence of another string
*/

console.log("Ahemed Ali".split(' '))     // -> ["Ahmed", "Ali"]
console.log("Mr. Ahemed Ali".split('A')) // -> ["Mr.", "hmed ", "li"]

// join() 
/*
  * concatinates all elements of an array or array-like-objects( as nodelists)
  * and separate them with comma or with a specific separator string
  * and returns the created string   
*/

let myName = "Mohamed Hossam Eldine ELkafrawi";
let nameWords = myName.split(' ');     // -> ["Mohamed", "Hossam", "Eldine", "Elkafrawi"]
let nameAgain = nameWords.join('_');   // -> Mohamed_Hossam_Eldin_Elkafrawi
let nameAgain = nameWords.join();      // -> Mohamed,Hossam,Eldin,Elkafrawi


// repeat() 
/* 
  * create new string contains mluliples copies of the original string, glued together
*/

let laStr = "LA";
console.log(laStr.repeat(2) + " Land"); // -> LALA Land
