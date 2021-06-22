// Links
/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
*/

// Static
/*
  - The static keyword define a static method or property for a class.
  - Neither static methods nor properties can be called on instances of the class,
  - They are called on the class itself.
  - Static methods are often utility functions, such as functions to create or clone objects,
  - Static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
*/

// Example: classes Static
class classWithStaticMethod {
  static staticProperty = 'Static property value';
  static staticMethod () { return 'The Static method has been called'; } 

}
console.log(classWithStaticMethod.staticProperty); // -> Static property value
console.log(classWithStaticMethod.staticMethod()); // -> The Static method has been called 

// Example: Using Static Members in classes
class Triple {
  static customName = 'Tripler';
  static description = 'I triple any number you provide';
  static calculate (n = 1) { return n * 3; }
}

  console.log(Triple.customName);   //-> Tripler
  console.log(Triple.description);  // -> 
  console.log(Triple.calculate());  // -> 3
  console.log(Triple.calculate(3)); // -> 9

class SquaredTriple extends Triple{
  normalProperty = 'Normal property value';
  static description = 'I square the triple of any number you provide';
  static calculate (n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(SquaredTriple.description);  // -> I square the triple of any ...
console.log(SquaredTriple.calculate());  // -> 9
console.log(SquaredTriple.calculate(3)); // -> 81
console.log(SquaredTriple.customName);   // -> Tripler
console.log(SquaredTriple.normalProperty);

let tp = new Triple();
// This throws because calculate() is a static member not an instrance member;
// console.log(tp.calculate()); // -> tp.calculate() is not a function

// Calling static members from another static method
class StaticMethodCall {
  static staticProperty = "static property";
  static staticMethod () { 
    return `Static method and ${this.staticProperty} have been called`;
  }

  static antherStaticMethod () { 
    return `${this.staticMethod()} by another static method.`;
  }
}

console.log(StaticMethodCall.staticMethod());
console.log(StaticMethodCall.antherStaticMethod());

// Calling static members from (non-static) a class constructor and other methods
/* 
- Static members are not directly accessible using this keyword from non-static methods 
you need to call them using:
- class name -> CLASSNAME.STATIC_PROPERTY_NAME
                CLASSNAME.STATIC_METHOD_NAME()
- or calling the method as a property of the constructor 
                this.constructor.STATIC_PROPERTY_NAME
                this.constructor.STATIC_METHOD_NAME()
*/
class StaticMethodCall_ {
  constructor() {
    console.log(StaticMethodCall_.staticProperty);
    console.log(this.constructor.staticProperty);
    console.log(StaticMethodCall_.staticMethod());
    console.log(this.constructor.staticMethod());
    
  }
  static staticProperty = 'static property';
  static staticMethod () { 
    return `Static method has been used`
  }
}

let smc = new StaticMethodCall_();