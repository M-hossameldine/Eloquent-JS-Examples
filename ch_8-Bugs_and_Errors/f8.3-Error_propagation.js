// case: if you expect a cetain type of values and choosing a special return value in case of errors such as null, -1, false
function promptNumber(question) {
  let result = Number(prompt(question));
  if(Number.isNaN(result)) return null;
  else return result;
}

console.log(promptNumber("How many trees do you see?"));

/* 
case: if your function will return any value including special values, so you can't use special value such as false as a direct return value, 

solution: Wrap the result inside an object to distinguish between failure and success
*/

function lastElement(array) {
  if(array.length == 0) {
    return {failed: true};
  } else {
    return {element: array[array.length - 1]};
  }
}

/*
case: returning special values could be misunderstood by the function caller
for the promptNumber example, if the input was "null" the output would be "null" as the promptNumber function rejected the "null" input 
*/ 