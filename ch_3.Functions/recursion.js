function powerWithRecursion(base, exponent) {
  if(exponent == 0) {
    return 1;
  }
  return base * powerWithRecursion(base, exponent - 1)
}

let result = powerWithRecursion(3, 4);
console.log("result = " + result)

/***********************************************************/
/*
  Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number? For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.
  * 3 || + 5 
*/

function findSolution(target) {
  function find(current, history) {
    if(current == target) {
      return history;
    }else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)` ) || 
             find(current * 3, `(${history} * 3)` );
    }
  }
  return find(1, '1');
}

console.log("11 = " + findSolution(11));
console.log("6 = " + findSolution(6));
console.log("8 = " + findSolution(8));
console.log("9 = " + findSolution(9));


