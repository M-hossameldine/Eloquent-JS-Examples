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


