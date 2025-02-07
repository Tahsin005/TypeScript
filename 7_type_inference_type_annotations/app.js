"use strict";
let a = 12; // type inference - automatically type set
let b = "tahsin"; // type annotation - explicitly mentioned type
let c = true; // type annotation - explicitly mentioned type
function abcd(a, b) {
    console.log(a, b);
}
abcd(12, "tahsin");
