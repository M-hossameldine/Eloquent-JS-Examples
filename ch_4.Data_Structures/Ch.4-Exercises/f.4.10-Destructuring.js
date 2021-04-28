/*
  * One of the reasons this function is awkward to read is that we have a binding pointing at our array,
*/
function nonclearPhi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2]) 
    );
}

/*
  * but we’d much prefer to have bindings for the elements of the array, 
  * that is, let n00 = table[0] and so on.
*/
function refactoredPhi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt(
      (n10 + n11) *
      (n00 + n01) *
      (n01 + n11) *
      (n00 + n10)
  );
}

/*  
  * same works for objects too if you know the keys of the objects
  * In the following example now age could be used as a golbal 
*/

let {age1} = {name1: "Hossam", age1: 15}
let {name2, age2} = {Name2: "Hossam", age2: 25}
console.log(age1) // -> 15
console.log(name2 + " is " + age2) // -> Hossam is 25