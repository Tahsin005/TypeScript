"use strict";
// generic function
function abcd(a, b, c) {
    // console.log(a, b, c);
    // console.log(typeof a, typeof b, typeof c);
}
abcd("tahsin", "male", 23);
abcd(12, "male", 23);
function userDetails(obj) {
    if (typeof obj.prop === "string") {
        console.log(`Name: ${obj.prop}`);
    }
    else if (typeof obj.prop === "number") {
        console.log(obj.prop + 99);
    }
}
userDetails({ prop: "tahsin", age: 23 });
userDetails({ prop: 12, age: 23 });
// generic class
class BottleMaker {
    constructor(key) {
        this.key = key;
    }
}
let b1 = new BottleMaker('Pepsi');
let b2 = new BottleMaker(12);
console.log(b1, b2);
// corner case
function func(a, b) {
    // return 'bolo' as T;
    return 'bolo';
}
func('hi', 'hello');
