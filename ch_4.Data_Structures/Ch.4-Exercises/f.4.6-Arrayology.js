// Array Loops
let j_events = ["Pizza", "Swimming", "Breakfast", "Soccer"];

for( eventt of j_events) {
  console.log(`${eventt} event.`)
  // do something 
}

// unshift() & shift() --> methods add Or remove to the start of the array
/*
  * This Todo list contains 3 methods:
  *  - Add new tasks to the end of the list 
  *  - Get the task at the start of the list (on the top of the queue)
  *  - Add urgent tasks to the top of the queue 
*/

let todoList = []; 
function remember(task) {
  todoList.push(task);
} 

function getTask(){
  return todoList.shift();
}

function rememberUrgently(task){
  todoList.unshift(task);
}

// indexOf() & lastIndexOf()  methods
/* 
  * Search for a value and return it's index
  * indexOf()      -> search from the start of the array to the end
  * lastIndexOf()  -> Search form the end of the array to the start
  * Return index if value is found
  * Return -1 if the value is not found
  * Both methods have a second optional argument, that indicates where to start searching 
*/
let names = ["Ahmed", "Wafaa", "Ali", "Wafaa", "Ola", "Samir"];
console.log("Index of Wafaa " + names.indexOf("Wafaa"));              // -> 1
console.log(("With lastIndexOf wafaa " + names.lastIndexOf("Wafaa"))); // -> 3
console.log(("With indexOf and optional argumentwafaa " + names.indexOf("Wafaa", 4))); // -> -1

// slice() method
/*
  * Takes the start and end indices
  * and returns the elements between them
  * Ths start index is inculsive
  * The end index is exclusive
  * Negative index, indicates an offset from the end of the sequence 
*/

console.log([0, 1, 2, 3, 4, 5, 6].slice(2, 6)); // -> [2, 3, 4, 5]
console.log([0, 1, 2, 3, 4, 5, 6].slice(-2))    // -> [5, 6]
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1[0]  = [3];

console.log(arr2);

// concat() method
/*
  * Can be used to glue arrays together and create new array 
  * Similar to + operator in strings
*/

let remove = (array, index) => {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}

console.log(remove([1, 2, 3, 4, 5, 6, 7], 3)); // -> [1, 2, 3, 5, 6, 7]

