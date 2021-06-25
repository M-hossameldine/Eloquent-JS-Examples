/*
 * Content:
 - Inheritance
 - instanceof binary operator

 * Links:
 https://github-wiki-see.page/m/evantk91/Notes/wiki/ESJ---Chapter-6%3A-The-Secret-Life-of-Objects-%28Object-Oriented-Programming%29

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof


*/
// Interitance 
/*
 * The new class inherits properties and behaviour from the old class 
 * Prototype for a new class derives from the old prototype, but adds new definitions.
 * Super-class is the class that is derived from.
 * Sub-class is the derived class.
 * The super class constructor is callled throught the "super" keyword.
    - We can pass arguments to superclass constructor using super()
    - Super can be use as an object to call the superclass methods, super.set()
*/

class SymmetricMatrix extends Matrix {
  constructor (size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if(x < y) return element(y ,x)
      else return element(x, y);
    })
  }

  set(x, y, value) {
    super.set(x, y, value);
    if(x != y) super.set(y, x, value);
  }
}
    
// instatnceof Operator
/*
 * Binary operartor used to know whether an object was derived from a specific class
 * The operator can also be applied to standard constructors like "Array".
 * Almost every object is an instatnce of "Object"
*/

function Car (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const auto = new Car('Honda', 'Accrod', 1998);
console.log(auto instanceof Car); // -> true
   
class A {}
class B extends A {}
const instOfB = new B();
console.log(instOfB instanceof B); // -> true
console.log(instOfB instanceof A); // -> true

console.log(new A() instanceof Object); // -> true

console.log([0] instanceof Array);


// Strings
let literalString = 'This is a literal string';
let stringObject = new String('String created with constructor.')
console.log(literalString instanceof String); // -> false
console.log(stringObject instanceof String);  // -> true
console.log('s' instanceof Object);  // -> false