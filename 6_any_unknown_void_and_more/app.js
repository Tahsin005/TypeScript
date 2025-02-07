"use strict";
// any - for this typescript kindoff seem to be off..
let a;
let arr = [];
let myVariable = "hello";
console.log(myVariable.toUpperCase());
myVariable = 10;
console.log(myVariable.toFixed(2));
myVariable.someNonExistentMethod();
// unknown type is a type-safe counterpart to any
let myUnknown = "hello";
// console.log(myUnknown.toUpperCase()); // Error: Object is of type 'unknown'.
// Need to narrow the type before using it as a string
if (typeof myUnknown === "string") {
    console.log(myUnknown.toUpperCase()); // Valid, because TypeScript now knows it's a string
}
myUnknown = 10;
if (typeof myUnknown === "number") {
    console.log(myUnknown.toFixed(2));
}
// void
function printHello() {
    console.log("Hello");
}
// null - intensional absence of value
let nulla = null;
// undefined - variable has been declared but has not been assigned a value
let undefinedVar = undefined;
function handleAnimal(animal) {
    if (animal === "dog") {
        console.log("It's a dog!");
    }
    else if (animal === "cat") {
        console.log("It's a cat!");
    }
    else {
        // This should never happen!
        const impossibleAnimal = animal; // This line ensures that we never reach here.
        console.log("Unknown animal!"); // This line should never run.
    }
}
// Valid calls
handleAnimal("dog"); // Output: It's a dog!
handleAnimal("cat"); // Output: It's a cat!
// handleAnimal("fish"); // This would cause a compile-time error because "fish" is not a valid Animal.
