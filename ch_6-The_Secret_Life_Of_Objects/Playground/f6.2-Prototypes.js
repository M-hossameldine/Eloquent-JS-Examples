/*
  - Prototype
  - Object.prototype
  - Object.getPrototypeOf()
  - Object.creat()
*/
// Prototype
/*
 * Is another object that is used as a fallback source of properties,
 * When an object gets a request for a property that it doesn't have,
 * its prototype will be searched for the property, then the prototype's prototype, and so on.
*/

// The prototype relations of Javascript
/*
 * form a tree-shaped structure, 
 * at the root of this structure sits Object.prototype.
 * It provides a few methods that show up in all objects,
 * such as toString, which converts objects to strings representation
*/ 


// Object.prototype
/*
 * It is the great ancestral prototype, 
 * the entity behind almost all objects.
*/

// Object.getPrototypeOf()
/* returns the prototype of an object */

console.log(Object.getPrototypeOf({}) == Object.prototype);
// -> true
console.log(Object.getPrototypeOf(Object.prototype))
// -> null (because Object.prototype is the first ancestor)

// Different diffault prototypes
/*
 * Many objects do not directly have Object.prototype as their prototype.
 * Ex. Function.prototype : from which functions are drived.
 * Ex. Array.prototype : from which arrays are drived.
*/ 

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// -> true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// -> ture

// Object.create( PROTOTYPE/FALLBACK_OBJECT )
/*
 * To creaete a new object, using an existing object as the prototype of the newly created object (fallback) 
*/

let protoRabbit = {
  speak(line) {
    return `The ${this.type} rabbit says "${line}"!`;
  }
}

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
console.log(killerRabbit.speak("Bang Bang"));
// -> The killer rabbit says "Bang Bang"!

/*
 * Javascript's prototype system can be interpreted as somewhat informal take on an object-oriented concept called classes.
*/