
/*
  - Getters -> get 
  - Setters -> set
  - Object.defineProperty()

  - Links:
  Object Accessors 
  https://www.w3schools.com/js/js_object_accessors.asp

*/ 

// Getters & Setters
/*
 - Properties that are accessed directly that hide a method call,
 - such methods are called "getters" or "Setters",
 - They are defined by writing "get" or "Set" in fornt of the mehtod name in an object expression or class declaration
 - Setters & Getters provide a better data quality & security 
 */

 let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100)
  } 
 };

 console.log(varyingSize.size); // -> 88
 console.log(varyingSize.size); // -> 53

 let person = {
  firstName: 'Ali',
  secondName: 'Essam',
  language: 'English',

  get userLang () {
    return this.language;
  },

  set userLang (lang) {
    this.language = lang.toUpperCase();
  }
}

console.log(person.userLang) // -> English
person.userLang = 'Arabic';
console.log(person.userLang) // -> ARABIC

// Object.defineProperty()
/* Method can be used to add getters and setter */

let obj = {counter: 0}

Object.defineProperty(obj, 'reset', {
  get: function() { this.counter = 0}
});

Object.defineProperty(obj, 'increment', {
  get: function () {this.counter++}
});

Object.defineProperty(obj, 'decrement', {
  get: function () {this.counter--}
});

Object.defineProperty(obj, 'add', {
  set: function (value) {this.counter += value}
});

Object.defineProperty(obj, 'subtract', {
  set: function (value) {this.counter -= value}
});

obj.increment;    // -> 1
obj.increment;    // -> 2
obj.decrement;    // -> 1
obj.reset;        // -> 0
obj.add = 3;      // -> 3
obj.subtract = 1  // -> 2
console.log(obj);
