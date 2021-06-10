// Symbol Iterator & For..Of Loop /
/*
(Iterable) -> Object has Symbol iterator
-> Object with interface designed for iteration
-> All iterators has Next() method that returns result object
-> The result object has 2 prop :
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

