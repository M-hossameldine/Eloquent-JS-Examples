/*
 * Debugging using:
 - Console.log()
 - breakpoint in browser
  set a breakpoint on a specific line of your code, when program execution reaches a line with a breakpoint, it is paused, and you can inspect values of bindings as that point
 - breakpoint in code using "debugger" keyword
  set a breakpoint by including a -debugger- statement in your program. If the developer tools of your browser are active, the program will pause whenever it reaches such a statement
*/


/*
 - Example Link: 
 https://runestone.academy/runestone/books/published/pythonds/Recursion/pythondsConvertinganIntegertoaStringinAnyBase.html

*/
// Ex. Whole number to string of given base (decimal, binary, ...) After fixing the bug
function numberToString (n, base) {
  let result= "", sign = "";
  if(n < 0) {
    sign = "-";
    n = -n;
  }

  do{
    result = String( n % base) + result;
    n = Math.floor(n / base); 
  } while(n > 0);

  return sign + result;
}
console.log(numberToString(10, 10)); // -> 10
console.log(numberToString(10, 2));  // -> 1010



