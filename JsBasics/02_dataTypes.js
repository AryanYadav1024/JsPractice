"use strict"; // Treat all JavaScript code as modern JavaScript.

// In Node.js, browser-specific APIs like alert() do not exist.
// alert("Hello");
// alert(3 + 3);

console.log(3 + 3);
// Writing multiple statements on one line hurts readability.
console.log("Hello");

// ========================= Data Types =========================

// Primitive Data Types:
//
// 1. String
// 2. Number (includes integers and floating-point numbers)
// 3. Boolean
// 4. BigInt (for very large integers)
// 5. Null (represents an intentional absence of a value)
// 6. Undefined (variable declared but not assigned a value)
// 7. Symbol (used to create unique identifiers)

// Non-Primitive Data Type:
//
// 8. Object (Arrays, Functions, Dates, etc. are all objects)

let name = "Aryan";
let age = 20;
let isLockedIn = true;
let job = null;      // Intentionally empty
let college;         // Undefined because no value is assigned

// ========================= typeof Operator =========================

console.log("\nUsing the typeof operator:\n");

// Two valid syntaxes:
console.log(typeof name);
console.log(typeof(age));

console.log(typeof age);
console.log(typeof isLockedIn);
console.log(typeof job);       // "object" (this is a historical JavaScript bug)
console.log(typeof college);   // "undefined"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol());  // "symbol"
console.log(typeof 123n);      // "bigint"