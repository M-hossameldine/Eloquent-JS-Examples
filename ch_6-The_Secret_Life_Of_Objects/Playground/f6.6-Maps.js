/*
  - in operator
  - hasOwnProperty()
  - Map methods (set, get, has ...)
*/

// Maps - noun -
/* 
 * A map (noun) is a data structure that associates values (keys) with other values.
*/

// Object.prototype & Maps
/* 
 * Plain objects drive form Object.prototype, 
 * it's an error-prone technique,
 * the prototype default properties would be considerd as a valid values if we called it like the following toString example.
  
*/

// Ex. map names to ages with a plain object 
let ages = {
  alaa: 20,
  amira: 28,
  basem: 30
};

console.log("alaa" in ages);
// -> true
console.log("mahmoud" in ages);
// -> false
console.log("toString" in ages);
// -> true  


// ** 1st Solution: create the object with "null" prototype
console.log("toString" in Object.create(null));
// -> false


// ** 2nd Solution: Use Object.keys 
/*
 * If you have a plain object and you need to treat it as a Map for some reason 
 * Object.keys returns only an object's own keys, not those in the prototype
 */ 
console.log(Object.keys({a: 20, b: 87}));


// ** 3rd Solution: Use "hasOwnProperty" method as an alternative to the "in" operator
/*
 * Ignores the object prototype
*/
console.log("hasOwnProperty", {Ahmed: 20, Doaa: 38, Neama: 77}.hasOwnProperty("Ahmed"));
// -> true
console.log("hasOwnProperty", {Ahmed: 20, Doaa: 38, Neama: 77}.hasOwnProperty("toString"));
// -> false


// Challenge: Object porpterty names must be strings. 
/*
 * If you need a map whose keys can't be easily converted to strings - such as objects - you cannot use an object as your map. 
 * Solution: "Map" class that is written for this exact purpose 
 * Map class: it stores a mapping and allows any type of keys.
*/

// Map methods 
/* 
 * set, get, has ... are part of the interface of the Map object.
*/

let mappedAges = new Map();
mappedAges.set("Boris", 39);
mappedAges.set("Liang", 22);
mappedAges.set("Julia", 52);

console.log(`Julia is ${mappedAges.get("Julia")}`);
// -> Julia is 52
console.log(`Is Jack's age known? ${mappedAges.has("Jack")}`);
// -> Is Jack's age known? false
console.log(`Is toString known? ${mappedAges.has("toString")}`);
// -> Is toString known? false

