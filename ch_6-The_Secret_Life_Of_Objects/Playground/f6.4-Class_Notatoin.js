// The class notation was added to JS in 2015
class cRabbit {
  constructor (type) {
    this.type = type;
  }
  speak(line) {
    return `The ${this.type} rabbit says "${line}"`;
  }
}

let happyRabbit = new cRabbit("happy");
console.log(happyRabbit.speak("Cheeeese!"));

// class can be used in both statments and expressions
let welcome = new class {sayHello() {return "HelloOo!"}};
console.log(welcome.sayHello());

// Third approach - Explicitly using the class notation 
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

//  Function Approach for the class car
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

