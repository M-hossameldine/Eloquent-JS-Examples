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