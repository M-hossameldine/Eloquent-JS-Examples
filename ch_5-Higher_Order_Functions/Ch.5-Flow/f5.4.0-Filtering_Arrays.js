// Filter Arrays
/*
 * To Filter Elements of array that passes a certain test method
 * There is a standard built-in method for arrays
 * A Pure Function that does not modify the array it is given and produces a new arraY
*/ 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// array-prototype.filter(test_method)
console.log(numbers.filter(number => number % 2 == 1));
// -> [1, 3, 5, 7, 9]

// The next function just to show filter mehtod from inside
function filter(array, test){
  let passed = [];
  for(let element of array){
    if(test(element))
      passed.push(element);
  }
  return passed;
}

console.log(filter(numbers, (number) => number % 2 == 0))
// -> [2, 4, 6, 8, 10]
console.log(filter(numbers, (number) => number % 2));
// -> [1, 3, 5, 7, 9]    0 -> falase, 1 -> true


// filtering scripts that are still in use nowadays
console.log(SCRIPTS.filter(script => script.living) )
console.log(SCRIPTS.filter(script => script.direction == "ltr") )
console.log(SCRIPTS.filter( script => script.year < 1000 && script.year > 0));

