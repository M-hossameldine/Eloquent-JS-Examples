/*
  Composability is a system design principle that deals with the inter-relationships of components. A highly composable system provides components that can be selected and assembled in various combinations to satisfy specific user requirements.
*/

// ** Ex. getting the biggest script without using Higher-order functions
let biggest = null;
for (let script of SCRIPTS) {
  if(biggest == null || 
     characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}

console.log(biggest);

// Higher-order functions start to shine when you need to compose operations

/* ** Ex. Find the average year of origin for living and dead scripts in the data set.
 * You can see it as a pipeline:
 * - Start with all scripts
 * - Filter out the living (or dead) ones
 * - Take the years from those 
 * - Average Them
 * - Finally round the result.
*/ 

function average(array) {
  return array.reduce( (a, b) => a + b) / array.length;
}

console.log(
  Math.round( average(SCRIPTS.filter( s => s.living).map(s => s.year)))
);
// -> 1169

console.log(
  Math.round( average(SCRIPTS.filter(s => !s.living).map( s => s.year) ) )
);
// -> 204

// ** Ex: The average origin year for living and dead scripts without Higher-order function

let totalLiving = 0, totalDead = 0, 
    countLiving = 0, countDead = 0;

for(let script of SCRIPTS) {
  if(script.living) {
    totalLiving += script.year;
    countLiving++;
  } else {
    totalDead += script.year;
    countDead++;
  }
}

console.log("Average Living scripts : ", Math.round( totalLiving / countLiving));
// -> 1165
console.log("Average Dead Scripts : ", Math.round(totalDead / countDead));
// -> 204