/* OBJECTS */

// delete properties (unary operator)
let anObject = {left: 1, right: 2}
console.log(anObject.left);  // -> 1
delete anObject.left;
console.log(anObject.left)   // -> undefined

// in (Binary operator)
console.log("left" in anObject) // -> false
console.log("right" in anObject) // -> true

// Object.keys() function
console.log(Object.keys(anObject)) // -> ["right"]
console.log(Object.keys({x: 0, y: 8, z: 9})) // -> ["x", "y", "z"]

// Object.assign(target, source) => coppies properties from object to another
let objectA = {a: 1, b: 2};
Object.assign(objectA, {c: 8, b: 3})
console.log(objectA) // -> {a: 1, b: 3, c: 8}

