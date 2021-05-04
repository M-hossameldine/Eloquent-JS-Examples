/*Abstracting Repetition */
/*
  * A program to do something a given number of times
*/

for( let i = 0; i< 3; i++) {
  console.log(i)
}

// -> 0 -> 1 -> 2 

// **: Function repeats console logging for N times
function repeatLog(n) {
  for(let i = 0; i < n; i++) {
    console.log(i)
  }
}

// **: pass function as a value (the action to be repeated)
function repeat(n, action) {
  for(let i = 0; i < n; i++ ) {
    action(i);
  }
}

repeat(2, console.log);
// -> 0 -> 1

// **: Create function value on the spot
let labels = [];
repeat(3, i => {
  labels.push(`Unit ${i + 1}`)
})

console.log(labels) 
// -> ["Unit 1", "Unit 2", "Unit 3"]

