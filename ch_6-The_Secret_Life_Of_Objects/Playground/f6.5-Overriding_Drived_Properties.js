protoRabbit.teeth = "Small";
killerRabbit.teeth = "sharp, large";

let blackRbbit = Object.create(protoRabbit);

console.log(killerRabbit.teeth + teeth); // -> Sharp, large
console.log(blackRbbit.teeth);           // -> small

/*
 * Overriding is also used to give the standard function and array prototypes a different toString method than the basic object prototype
*/
