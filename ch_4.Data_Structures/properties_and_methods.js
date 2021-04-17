/* properties */
let arr = [1, 2 ,5]
console.log(arr['length'])

/* Methods*/
let doh = "Doh";
console.log(typeof doh.toUpperCase)  // - > function 
console.log(doh.toUpperCase())       // -> DOH

// push & pop Methods
let sequence = [1, 2, 3, 5];
sequence.push(6);
console.log(sequence)       // -> [1, 2, 3, 4, 5, 6]
console.log(sequence.pop()) // -> 6
console.log(sequence)       // -> [1, 2 ,3, 4, 5]