/*
* Intro Concepts
*/

/*
* The ideal program:
  - has a crystal-clear structure.
  - The was it works is easy to explain.
  - Each part plays a well-defined role.

* "Big ball of mud" is often used for large, structureless programs.

* A module: is a piece of program that specifies whick other pieces it relies on and whick functionality it provides for other modules to use (it's interface)

* Module interface: 
  - They make part of the module available to the outside world and keep the rest pirvate.
  - By restircting the ways in whick modules interact with each other, the system becomes more like a LEGO, where pieces interact through well-defined connectors.

* Dependencies: 
  - are the relations between modules, it can be used to figure out whick other modules need to be present to be able to use a given module and to automatically load dependencies.

* A package: is a chunk of code that can be distributed (copied and installed). It may contain one or more modules and has information about whick other packages it depends on.

# Infrastructure To handle packages NPM (https://npmjs.org)

* NPM is two things: 
  - an online service where one can download (and upload) packages
  - and a progam (bundled with Node.js) that helps you install and manage them.

*/  