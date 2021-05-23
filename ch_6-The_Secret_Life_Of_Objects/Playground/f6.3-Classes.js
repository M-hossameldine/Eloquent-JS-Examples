// Classes
/*
 * A class: defindes the shape of a type of object - what methods and properties it has.
 * The objects created by this class called instances of the class.
 */

// 1st approach to create a class 
let protoRabbitt = {
  speak (line) {
    return `The ${this.type} rabbit says "${line}"`;
  }
};

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbitt);
  rabbit.type = type;
  return rabbit;
}

let greenRabit = makeRabbit("green");
console.log(greenRabit.speak("Am I cute?"));

// 2nd approach to create a class 
/*
 * use the keyword "new" in front of the function call, the function is treated as a constructor,
 * This means that an object with the right prototype is automatically created, 
 * bound to "this" in the function and returned at the end of the function.
 * *********
 * The prototype object used when constructing objects is found by taking the prototype property of the constructor function.
*/ 

function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function (line) {
  return `The ${this.type} rabbit says "${line}"`;
};

let blackRabbit = new Rabbit("black");
console.log(blackRabbit.speak("The Black is back"));

// Conatructors approach to create a class
/* 
 * Names of construcors are capitalized to be distinguished form other functions.
 * Constructors (all functions) automatically get a property named prototype,
 * which by default holds a plain empty object that derives from Object.prototype.
 *********************
 * Constructor / functoin prototype Vs. Created instances prototype:
 * The prototype of the constructor itself is Function.prototype since constructors are functions.
 * The constructor prototype property holds the prototype used for instances created through it.
 */

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// -> true
console.log(Object.getPrototypeOf(blackRabbit) == Rabbit.prototype);
// -> true


// Third approach - Explicitly (not mentioned in the book yet)
/*
 * This apporach used speacially, we you plan to use the class with anther object-oriented concepts like inheritance
*/ 

class CAR {
  name;
  year;
  price;

  constructor (name, year, price) {
    this.name = name;
    this.year = year;
    this.price = price;
  }

  print () {
    console.log(`The ${this.name} car was manufactured at ${this.year} and priced with ${this.price}`)
  } 
}

let toyota = new CAR ("toyota", 1995, 198000);
toyota.print();

//  Function Approach 
function CreateCar (name, year, price) {
  let holder = {
    name: undefined,
    year: undefined,
    price: undefined,
    print() {
      console.log(`This ${this.name} car was manufactured in ${this.year} and valued ${this.price} `)
    }
  };

  holder.name = name;
  holder.year = year;
  holder.price = price;

  return holder;
}

let yellowCar = new CreateCar ("JAGUAR", "2000", "6895000");
yellowCar.print();



