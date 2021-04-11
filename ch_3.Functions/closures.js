/*
  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/

// Closures
function wrapValue(n){
  let local = n;
  return () => local;
}

function multiplier(factor) {
  return number => number * factor;
} 

let twice = multiplier(2); //the environment of factor 2 is now saved to be used by twice variable  
console.log(twice(8) ); //-> 16


// MDN Example
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
