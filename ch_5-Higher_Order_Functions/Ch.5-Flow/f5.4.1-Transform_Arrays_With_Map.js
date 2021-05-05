// Array-prototype.map(mapping-method)
/*
 * Transforms an array by applying a function to all of its elements
 * Building new array form the returned values
 * The new array will have the same length as the input array
 * The content will have been mapped to a new form by the function
 * Map is also a pure built-in standard array method
*/
let people = [{name: 'Hossam', age: 67}, {name: "Ali", age: 98}]

console.log(people.map( person => person.name));
// -> ["Hossam", "Ali"]

// Inner Structure for the map method
function map(array, transform) {
  let mapped = [];
  for( let element of array ) {
    mapped.push(transform(element));
  }
  return mapped;
}

console.log(map(people, person => person.name));
// -> ["Hossam", "Ali"]

