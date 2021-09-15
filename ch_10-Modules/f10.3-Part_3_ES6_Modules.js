/***************************************************/
// ECMASCRIPT Modules
/***************************************************/
/*
* ES Modules: 
  - JavaScript module system introduced in 2015 (ES6)
  - The main concepts of dependencies and interfaces remain the same, but the details differ
* "import": instead of calling a function to access a dependency, we use the import keyword.
* "export": keyword is used to export things. 
  - It may appear in front of a function, class, or a binding definition (let, const, or var).

* "default": a given name to a binding, so that it's treated as the module's main exported value.
  - If you import a module like ordinal in the example , without braces around the binding name, you get it's default binding.
  - to create a default export, you write "export default" before and expression, a function decleration, or a class decleration. 

* "as": to rename imported bindings.

* When you import from another module, "you import the binding not the value", 
  - whick means an exporting may change the value of the binding at any time, and the modules that import it will see it's new value 
*/

// import
import ordinal from "ordinal"; // imports the default binding 
import {days, months} from "date-names"
export function formatDate(date, format) {  /* ... */  }

// export default
export default ["Winter", "Spring", "Summer", "Autumn"];

// as 
import {days as dayNames} from "date-names";
console.log(dayNames.length); // -> 7

/*
Another difference in ES modules:
That ES modules imports happen before a module's script starts running. This means import declarations may not appear inside functions or blocks, and the names of dependencies must be quoted strings not arbitrary expressions.
*/
/***************************************************/