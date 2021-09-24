/*
* Promises
  - Promise.resolve()
  - then()
  - Normal value Vs. Promised value
  - Promise constructor
*/
/********************************************************/
// Promises
/********************************************************/
/*
* In Asynchronous actions, you could, instead of arranging for a function to be called at some point in the future, "return object that represents this future event".
  - That is what the standard class Promise is for.

* A "Promise" is an asychronous action that may complete at some point and produce a value. 
  - It's able to notify anyone who is interesed when its value is available.

* "Promise.resoleve ()" the easiest way to create a promise.
  - This functions ensures that the value you give it is wrapped in a promise. If it's already a promise, it is simply returned - otherwise, you get a new promise that immediately finishes with your value as it's result.

* "then () method" is used to get the result of a promise.
  - It regesters a callback function to be called when the promise resolves and produces a value.
  - You can add multiple callbacks to a single promise, and they will be called, even if you add them after the promise has already resolved (finished).
  It also:
  - It returns another promise, which resolves to the value that the handler function returns, or, if that returns a promise, waits for that promise and then resolves to its result.

*/

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`)); // -> Got 15

/* 
* You could think of promises as a device to move values into an asynchronous reality.
  - A "normal value" is simply there. 
  - A "promised value" is a value that might already be there or might appear at some point in the future (Schrodinger's cat)
  - Computations defined in terms of promises act on such wrapped values and are executed asynchronously as the values become available.
*/

/* 
* To create a promise, you can use "Promise" as a constructor. 
- It's Interface:
  - The constructor expects a function as argument, which it immediately calls, passing it a function that it can use to resolve the promise. 
*/

//  Create a promise-based interface for the "readStorage" function:
function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result))
  })
}

storage(bigOak, "enemies")
  .then(value => console.log("Got", value));

/*
This asynchronous function returns a meaningful value.This is the main advantage
of promises - They simplify the use of asynchronous functions. Instead of having to pass around callbacks, "Promise-Based functions" look similar to regular ones: they take input as arguments and return their output. The only difference is that the output may not be available yet. 
*/

/********************************************************/