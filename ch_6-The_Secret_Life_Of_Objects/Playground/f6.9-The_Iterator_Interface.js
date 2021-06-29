/*
  *content:
  - Symbol.iterator()
  - next()
  - 
  * Links:
  -Symbol.iterator
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator

*/

// Symbol Iterator & For..Of Loop /
/*
(Iterable) -> Object has Symbol iterator
-> Object with interface designed for iteration
-> All iterators has Next() method that returns result object
-> The result object has 2 properties :
[1] value - The next value
[2] Done - Boolean value to tell if the next value exists or not
-> ( String - Array ) Accept Iteration /  (Number - Object) Not Accept
*/

// The Iterator Interface

// The object given to a for/of loop is expected to be iterable
/*
  This means it has:
  * Method named "Symbo.iterator" symbol:
    a symbol value defined by the language, stored as a property of the Symbol function,
    that method should return an object that provides a second interface, ITERATOR.
    This is the actual thing that iterates.

  * next method:
    That returns the next result,
    that result should be an object with a value property that provides the next value, if there is a one.
    
  * done property:
    which should be true when there are no more results and false otherwise
*/

// Implement the iterator interface manually
  let okIterator = "ok"[Symbol.iterator]();
  console.log(okIterator.next());
  // -> {value: 'o', done: false}
  console.log(okIterator.next());
  // -> {value: 'k', done: false}
  console.log(okIterator.next());
  // -> {value: undefined, done: true}


// links 
/*
  https://stackoverflow.com/questions/28739745/how-to-make-an-iterator-out-of-an-es6-class
  
*/
// Implement the iterable data structure
/*
  - We will build a matrix class, acting as a two dimentional array,
    using the following equation for the index of each element ( y * width + x )
  - This Class stores it's content into a single array of width * height elements
  - The constructor takes 3 parameters; width, height, and an optional function that will be used to fill in the first values  
*/
class Matrix {
  constructor (width, height, element = (x, y) => undefined){
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for(let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }

  set (x, y, value) {
    this.content[y * this.width + x] = value
  }

}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if(this.y == this.matrix.height) return {done: true};

    let value = { x: this.x,
                  y: this.y,
                  value: this.matrix.get(this.x, this.y)
                }
    this.x++;
    if(this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }

    return {value, done: false}
  }
}

Matrix.prototype[Symbol.iterator] = function ( ) {
  return new MatrixIterator(this);
}

let myMatrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for( let {x, y, value} of myMatrix) {
  console.log(x, y, value);
}

/*
  logs:
  0 0 value 0, 0
  0 1 value 0, 1
  1 0 value 1, 0
  1 1 value 1, 1
*/
