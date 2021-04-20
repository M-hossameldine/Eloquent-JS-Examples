/* Two References to the the same object Vs. Two Different Objects*/
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2) // -> true
console.log(object1 == object3) // -> false
object1.value = 15;
console.log(object2.value)      // -> 15

/* Const binding to and object */
const score = {visitors: 0, home: 0}
// This is allowed 
score.visitors = 10; 
console.log(score);

// This is not allowed 
// score = {visitors: 5, home: 3} // -> error: Assignment to constant variable.