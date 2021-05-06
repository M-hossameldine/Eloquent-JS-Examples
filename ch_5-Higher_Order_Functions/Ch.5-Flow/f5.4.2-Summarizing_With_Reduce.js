// Array-prototype.reduce(reduction_mehtod)
/*
 * Sometimes aslo called fold.
 * It builds a value be repeatedly taking a singel element from the array 
   and combining it withe the current value.
 * If the array contains at least one element, 
   you can omit/ leave off the start argument,
   the method will take first element as it's start value,
   and start reducing at the second element. 
*/

let oldArray = [1, 2, 3, 4, 5]

// ** Using the standard reduce method
console.log(oldArray.reduce( (a, b) => a + b));
// -> 15

// ** Just to explain the inner structure of reduce method
function reduce(array, combine, start){
  let current = start;
  for(let element of array){
    current = combine(current, element);
  }
  return current;
}

console.log(reduce(oldArray, (a, b) => a + b, 0));
// -> 15

/* 
 * Use reduce -twice- to find the script with the most characters
 * The characterCount function reduces the ranges assigned to a script by summing the sizes.
 * The second call to reduce then used to find the largest script by repeatedly comparing two scripts and returning the larger one.
*/

function characterCount(script){
  return script.ranges.reduce( (count, [from, to]) => {
    return count + (to - from);
  }, 0)
}

console.log(SCRIPTS.reduce( (a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));