/*
* ES Modules
  - import
  - export
  - default
  - as 

* Building and Bundling
  - Bundlers 
  - Minifiers

* Module Design
  - "Ease of Use"
  - "The ease with whick something can be composed with other code"
  - "Stateful objects"
  - "Defining new Data Structures"
  * EX: on graph in Chapter 7
    - "dijkstrajs" NPM pachage

  /*
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
// Building and Bundling
/***************************************************/
/*
* Two problems that faces Modular Programs:
  # fetching too many files (fetching a program of 200 files), that wastes a lot of time.
    - Fetching a single big file tends to be faster than fetching a lot of tiny ones.
    - So we use "Bundlers": tools that rolls the programs back into a single big fie before publishing it ot the web.
  
  # Size of the files, determines how fast they can be transferred over the network. 
    - So we use "Minifiers": tools that take a JavaScript program and make it smaller by automatically removing comments and whitespace, renaming bindings, and replacing pieces of code with equivalent code that take up less space.
*/
/***************************************************/
// Module Design
/***************************************************/
 /*
* "Ease of Use": one aspect of module design, if you or other developers would need to use the module in the future :
  - The module interface should be simple and predictable.
  - To Keep the module predictable, use simple data structures and does a single, focused thing.
* "The ease with whick something can be composed with other code"
  - Focused modules that compute values are applicable in a wider range of programs than bigger modules that preform complicated actions with side effects.

* Stateful objects are sometimes useful or even necessary, but if something can be done with a function, "use a function"
  - It is very common to compare stateful objects with real world objects, where the state of the objects changes over-time.
  - Instead of making a single function call and moving on, you would have to perform the ritual of moving your object through various states, creating unnecessary interdependancies.

* "Defining new data structures": only a few basic ones are provided by the language, and many types of data have to be more complex than an array or a map. But "when an array suffices, use an array".

EX: on the graph in Chapter 7 
"dijkstrajs": package uses a graph format similar to "the one used in Chapter 7", but instead of arrays, it uses objects whose property values are numbers - the weights of the edges -

- So before using the package, make sure that the graph was stored in the format it expects.
 (All edges get the same weight since our simplified model treats each road as having the same cost)
*/

const {find_path} = require("dijkstrajs");
let graph = {};
for (let node of Object.keys(roadGraph)) {
  let edges = graph[node] = {};
  for (let dest of roadGraph[node]) {
    edges[dest] = 1;
  }
}

console.log(find_path(graph, "Post Office", "Cabin"));
// -> ["Post Office", "Alice's House", "Cabin"]
/***************************************************/