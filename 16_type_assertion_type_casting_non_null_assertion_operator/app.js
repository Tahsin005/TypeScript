"use strict";
// type assertions
let someValue = "this is a string";
let strLength = someValue.length; // using 'as' syntax
let strLength2 = someValue.length; // using angle-bracket syntax
// type casting
let a = Number("12");
console.log(typeof a);
// non null assertions operator
let b = "this is a string";
let strLength3 = b.length; // using '!' syntax
let strLength4 = b.length; // using non-null assertion operator
