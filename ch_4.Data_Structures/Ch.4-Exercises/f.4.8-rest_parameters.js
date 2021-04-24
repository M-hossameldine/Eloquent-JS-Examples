/* REST prarmeters: 
  * A function that accepts any number of arguments,
  * When function is invoced, 
  * all rest parameters are bound into an arry containg all further parameters
  * you put three dots before the function’s last parameter
*/

function max(...numbers) {
  let result = -Infinity;
  for(let number of numbers) {
    if(number > result) result = number;
  }
  return result;
}

console.log(max(3, 5, 7, 5, 10, -5)); // -> 10
/*
  * Three dot notation to call a function with an array of arguments 
  * passing arry elements as separate arguments.
*/
let randNumbers = [4, 7, 9, 0, 4];
console.log(max(...randNumbers));     // -> 9
console.log(max( 3 , ...randNumbers, 12));     // -> 12

/*
  * Square bracket array notation allow the tripple-dot operator to spread another array into the new array
*/

let words = ["Ali", "Asmaa"];
console.log(["Nessma", ...words, "Alaa", "Ahmed"]);


