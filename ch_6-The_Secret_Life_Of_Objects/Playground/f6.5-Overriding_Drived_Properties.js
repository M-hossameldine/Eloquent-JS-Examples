protoRabbit.teeth = "Small";
killerRabbit.teeth = "sharp, large";

let blackRbbit = Object.create(protoRabbit);

console.log(killerRabbit.teeth , "teeth"); // -> Sharp, large
console.log(blackRbbit.teeth);           // -> small

/*
 * Overriding is also used to give the standard function and array prototypes a different toString method than the basic object prototype
*/

console.log(Object.prototype.toString == Function.prototype.toString);
//-> false
console.log([1,2].toString()); // has the same result as join(', ')
// -> 1, 2
console.log(Object.prototype.toString.call([1, 2]));
// -> [object Array]  - the invocated toString method is not designed to be used for arrays - 

