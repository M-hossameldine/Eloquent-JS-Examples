// JSON -> Javascript Object Notaion

/*
  * Properties only grasp their value, rather than contain it
  * Objects and arrays stored in the computer's memory as sequences of bits holding the addresses of their content.
  * To svae data or send it to another computer over the network, you need to convert these tangled memory addresses to a description that can be stored or sent.

  * So:
  * - We serialize data.
  * - Data is converted into a flat description 
  * - The most popular serialization format is called JSON
  * - Used as a data storage and communication format on the Web.

  * In JSON: 
  * - ALL property names have to be surrounded by double quotes,
  * - Only simple data expression are allowed (No function calls, bindings or any actual computation)
  * - Comments are not allowed in JSON.
*/


let journal_JSON = {
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}

// JSON.stringify()
/*
 * Function that takes a javascript value and returns a JSON-encoded string
*/

let string = JSON.stringify({ squirrel: false,
                              events: ["weekend"]
                            });
console.log(string); // -> {"squirrel": false, "events": ["weekend"]}

// JSON.parse()
/*
 * Function that takes a string and converts it to the value it encodes
*/
console.log(string.events)             // -> undefined
console.log(JSON.parse(string).events) // -> ["events"]



