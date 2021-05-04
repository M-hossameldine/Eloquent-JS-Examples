// Higher Order Functions
/*
  * Functions that operates on other functions
  * ,either by taking them as arguments or by returning them
  * Higher-order functions allow us to abstract over actions, not just values
*/


// *** EX.1: We can have functions that create other functions 
function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // -> true
/* ************************************************************* */


// *** EX.2: Functions that Edit/change/manipulate other functions
function noisy(f) {
  return (...args) => {
    console.log("Calling with", args);
    let result = f(...args);
    console.log("Called with,", args, ", returned", result);
    return result;
  };
}

noisy(Math.min)(1, 2, 3);
// -> Calling with 1, 2, 3
// -> Called with 1, 2, 3, returned 1;
/* ******************************************************** */


// *** Ex.3: Functions that provide new types of control flow

function repeat_(n, action) {
  for(let i = 0; i < n; i++) {
    action(i)
  }
}

function unless(test, then) {
  if(!test) then();
}

repeat_(3, n => {
  unless(n % 2 == 1 || n != 0, () => {
    console.log(n, "is even.")
  }) 
})
/* ************************************************** */

// array-prototype.forEach() 
/*  
  *higher order built-in methode
*/

console.log(['A', 'B', 'C'].forEach( char => console.log(char)));

// -> A -> B -> C