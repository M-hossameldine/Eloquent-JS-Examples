/*
 * Content:
  - Symbol()
  - Inclue Object properties in object expressions and classes

*/


// Symbols
/*
 * datatype
 * Symbols are values created by symbol function.
 Unlike strings, newly created symbols are unique, you cannot create the same symbols twice.
 
 * Being both unique and usable as property names makes symbols suitable for defining interfaces that can peacefully live alonside other porperties, no matter what their names are.
 
 * The string you pass to Symbol has no meaning beyond being shown on the console, to help you as a developer to recognize the symbol, many symbols can have the same string(name)

*/

let sym = Symbol("name");
console.log(sym == Symbol("name")); // -> false

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]); // -> 55



let toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () { 
  return `${this.length} cm of blue yarn`; 
}

console.log([1, 2].toString()); //-> 1,2 
console.log([1, 2][toStringSymbol]()); // -> 2 cm of blue yarn

// Inclue Object properties in object expressions and classes
/* By using the square brackets around the property name, thate causes the property name to be evaluated*/

let stringObject = {
  [toStringSymbol]() {  return "a jute rope"; },
};
console.log(stringObject[toStringSymbol]()); // -> a jute rope

// NTI: example 
let user1 = {
  id: Symbol("id")
}

let user2 = {id: Symbol("id")};
console.log(user1.id == user2.id); // -> false

