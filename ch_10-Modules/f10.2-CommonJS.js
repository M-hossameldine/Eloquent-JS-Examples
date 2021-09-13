/* Content:
* CommonJs
  - require() function
  - Ex: Date Formatting
    * Used NPM packages
    - "ordinal"
    - "date-names"
  - exports
  - requier definition (made-up)
   - readFile()
  - require string for file directories 
    Ex: "./", "../" 
*/

/************************************************************************/
// CommonJS
/************************************************************************/
/*
* CommonJS:
 - Is the most used approach to bolted-on JavaScript modules. 
 - Node.js uses it and is the system used by most packages on NPM.

* require() function: 
 - The main concept used in CommonJS modules.
 - When you call this with the module name of a dependency, it makes sure the module is loaded and returns it's interface.

* The loader wrapes the module code in a function, module automatically get their own local scope. 
 - They call require to access their dependancies and put their interface in the object bound to exports.

*/

/* Example Date Formatting 
* This module provides a date-formatting function. 

* It Uses two packages form NPM:
  - "ordinal": to convert numbers to stirng like "1st" and "2nd",
              accepts numbers only Ex: ordinal(1)
  - "date-names": to get English names for weekdays and months.

* It exports a single function "formatDate", whick takes: 
  - Date object 
  - Template string

* The template string may contain codes that direct the format such as: 
  - YYYY for the full year
  - Do for the ordianl day of the month.
  Ex: Template string like "MMMM Do YYYY" to get output like "November 22nd 2017" 

* This module adds its interface functino to exports so that modules that depends on it get access to it.
*/ 

const ordinal = require("ordinal");
const {days, months} = require("date-names"); // desturcturing
exports.formatDate = function(date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if(tag == "YYYY") return date.getFullYear();
    if(tag == "M")    return date.getMonth(); 
    if(tag == "MMMM") return months[date.getMonth()]; // form date-names package
    if(tag == "D")    return date.getDate();
    if(tag == "Do")   return ordinal(date.getDate());
    if(tag == "dddd") return days[date.getDay()];     // from date-names package
  });
};

// require
/* 
* The next peice of code is a definition for require, in it's minimal form.
* readFile() is a made-up function that reads a file and returns it's contents as a stirng.
* Each JavaScript environment (such as Node.js & browser) provides it's own way to access files.
* To avoid loading the same module multiple times, require keeps a store (cache) of already loaded modules. 
  When called, the cached modules are checked first, if not, loads it.
*/
require.cache = Object.create(null);
function require(name) {
  if (!(name in require.cache)) {
    let code = readFile(name);
    let module = {exports: {}};
    require.cache[name] = module;
    let wrapper = Function("require, exports, module", code);
    wrapper(require, module, exports, module);
  }
}  

/*
* The way the string given to require is translated to an actual filename or web address differs in different systems.
- when it starts with "./" or "../", it's generally interpreted as relative to the current module's filename.
  So "./format-date" would be the file named "format-date.js" in the same directory.
-When the name isn't relative, Node.js will look for an installed package by that name (NPM packages).
/************************************************************************/