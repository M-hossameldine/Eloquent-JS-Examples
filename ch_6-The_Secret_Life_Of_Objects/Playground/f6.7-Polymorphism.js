/*
  * Links 
  https://www.javatpoint.com/javascript-oops-polymorphism#:~:text=JavaScript%20Polymorphism,method%20on%20different%20JavaScript%20objects.

  https://replit.com/@mh2repl/Polymorphism#index.js
*/

// Polymorphism
/*
  * When a piece of code is written to work with objects that have a certain interface,
    any kind of object that happens to support this interface can be plugged into the code, 
    and it will just work fine.
  * Polyformic code can work with values of different shapes, as long as they support the interface it expects.
  * ex: for/of loop can work over several kinds of data structures to expose a specific interface,
   which arrays and strings do.
  * You can add this interface to your own objects!
*/

// create your own version of toString function for a specific interface 
Rabbit.prototype.toString = () => { 
  return `A ${this.type} rabbit`
} 

console.log(String(blackRabbit));
// -> A black rabbit

function E () { }
E.prototype.display = () => { return `E is invoked`};

let obj = new E();
// console.log(obj.display());;
// console.log(E.name)

function F () { }
F.prototype = Object.create(E.prototype);

let protoBased = [new E(), new F()];
protoBased.forEach( (msg) => console.log(msg.display()))

console.log("hello");

  