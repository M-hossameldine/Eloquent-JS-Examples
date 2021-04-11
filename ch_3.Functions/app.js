// var Vs. let & const: Scoop-wise  

let x = 10;

if(true) {
  let y = 5;
  const a = 6;
  var b = 5;
  console.log(x);
}
// console.log(a);
console.log(b);


console.log("The Future Says: " + future());

function future() {
  return "You will never buy a car."
}

// Arrow Function 
const power = (base, exponent) => {
  let result = 1;
  for(let count = 0; count < exponent; count++){
    result *= base; 
  }
  return result;
};

const square1 = num => num * num; // return num * num
console.log(square1(5));

// Optional Parameters 
const minus = (a, b) => {
  if(b == undefined) return -a;
  return b - a;
}

console.log(minus(5));
console.log(minus(10, 8));

// Optional defualt value (if not passed in the function call)
const power1 = (base, exponent = 2) => {
  let result = 1;
  for(let count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
}

console.log(power1(3));

// // Closures
// function wrapValue(n){
//   let local = n;
//   return () => local;
// }

// function multiplier(factor) {
//   return number => number * factor;
// } 

// let twice = multiplier(2); //the environment of factor 2 is now saved to be used by twice variable  
// console.log(twice(8) ); //-> 16


