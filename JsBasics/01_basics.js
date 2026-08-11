// ========================= JavaScript Basics =========================

// Prints output to the console
console.log("Hello World!");

// JavaScript is a dynamically typed language.
// Variables do not have fixed data types.
// It uses {} to define blocks (unlike Python's indentation).

// ========================= Variables =========================

// const: Block-scoped, cannot be reassigned.
// Use const by default unless the value needs to change.
const accountId = 2310991797;

// let: Block-scoped, can be reassigned.
let accountEmail = "aryan1797.be23@chitkara.edu.in";

// var: Function-scoped, hoisted, allows redeclaration.
// Avoid using var in modern JavaScript.
var accountPassword = "aryangmailpassword";

// Never declare variables without let, const, or var.
// (Doing so creates an implicit global variable in non-strict mode.)
let accountCity = "Rajpura, Punjab";

// If a variable is declared but not initialized,
// JavaScript automatically assigns it the value 'undefined'.
let accountState;

// ========================= Undefined Example =========================

console.log(`Account State: ${accountState}`);
console.log("JavaScript returns 'undefined' when a variable has no assigned value.\n");

// ========================= Values Before Change =========================

console.log("Values before change:");
console.log(`Account ID : ${accountId}`);
console.log(`Email      : ${accountEmail}`);
console.log(`Password   : ${accountPassword}`);
console.log(`City       : ${accountCity}`);
console.log(`State      : ${accountState}\n`);

// Trying to change a const variable will throw an error.
// accountId = 2; // ❌ TypeError: Assignment to constant variable.

// Updating mutable variables
accountEmail = "aryan0y7@gmail.com";
accountPassword = "aryan0y7000";
accountCity = "Dera Bassi, Punjab";
accountState = "Punjab";

// ========================= Values After Change =========================

console.log("Values after change:");
console.log(`Account ID : ${accountId}`);
console.log(`Email      : ${accountEmail}`);
console.log(`Password   : ${accountPassword}`);
console.log(`City       : ${accountCity}`);
console.log(`State      : ${accountState}\n`);

// ========================= console.table() =========================

// Displays data in a neat table.
console.log("Displaying values using console.table():\n");

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
]);

// A better way is to pass an object.
// The property names become table rows.

console.log("\nUsing an object with console.table() (recommended):\n");

console.table({
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
});

// ========================= String Concatenation Example =========================

// When a string is concatenated with an array,
// JavaScript converts the array into a comma-separated string.

console.log("\nString concatenation with an array:");

console.log(
    "Array converted to string: " +
    [accountId, accountEmail, accountPassword, accountCity, accountState]
);

// Output Example:
// Array converted to string:
// 2310991797,aryan0y7@gmail.com,aryan0y7000,Dera Bassi, Punjab,Punjab

// ===============================================================
// Summary:
// const -> Cannot be reassigned (preferred by default)
// let   -> Can be reassigned
// var   -> Old way (avoid)
// undefined -> Variable declared but not assigned a value
// console.table() -> Displays data in a tabular format
// ===============================================================

















/*
===========================================================
                JavaScript Basics - Mental Model
===========================================================

JavaScript is NOT like Java.

Java:
------
Everything revolves around CLASSES.

Class
   ↓
Object

Example:

class Car {
    String color;

    void drive() {
        System.out.println("Driving");
    }
}

-----------------------------------------------------------

JavaScript:
-----------

Everything revolves around VALUES.

Every value is either:

1. Primitive
2. Object

That's the foundation of the language.

===========================================================
                    Primitive Types
===========================================================

JavaScript has only 7 primitive types.

1. Number
2. String
3. Boolean
4. BigInt
5. Undefined
6. Null
7. Symbol

Examples:
*/

let age = 20;                 // Number
let name = "Aryan";           // String
let isStudent = true;         // Boolean
let salary = 123456789n;      // BigInt
let x = undefined;
let y = null;
let id = Symbol("id");

/*
Primitives are immutable.

===========================================================
                        Objects
===========================================================

Everything that is NOT a primitive is an object.

Examples:

{}
[]
function(){}
new Date()
new Promise()
Math
JSON

Objects store properties.
*/

const person = {
    name: "Aryan",
    age: 20,
    city: "Delhi"
};

console.log(person);

/*
===========================================================
                Built-in Objects
===========================================================

Before YOUR code starts, JavaScript already creates many
built-in objects.

Examples:

Math
JSON
console
Object
Array
String
Number
Boolean
Date
Promise

You don't create them.
The JavaScript engine creates them automatically.

===========================================================
                        Math
===========================================================

Math is a built-in object.

Think of it like:

const Math = {
    PI: 3.14159,
    random(){},
    floor(){},
    ceil(){},
    sqrt(){},
    max(){},
    min(){}
}

Examples:
*/

console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(4.9));
console.log(Math.sqrt(25));

/*
===========================================================
                        JSON
===========================================================

JSON is another built-in object.

Conceptually:

const JSON = {
    parse(){},
    stringify(){}
}
*/

const obj = {
    language: "JavaScript",
    level: "Beginner"
};

const jsonString = JSON.stringify(obj);
console.log(jsonString);

const backToObject = JSON.parse(jsonString);
console.log(backToObject);

/*
===========================================================
                        console
===========================================================

console is also a built-in object.

Conceptually:

const console = {
    log(){},
    error(){},
    warn(){},
    table(){}
}
*/

console.log("Hello");
console.warn("Warning");
console.error("Error");

/*
===========================================================
                        Arrays
===========================================================

Arrays are objects.

*/

const numbers = [10, 20, 30];

numbers.push(40);
console.log(numbers);

numbers.pop();
console.log(numbers);

/*
===========================================================
                        Date
===========================================================

Date is a built-in constructor.
*/

const today = new Date();

console.log(today);
console.log(today.getFullYear());

/*
===========================================================
                Functions are Objects
===========================================================

Functions are special objects.
*/

function greet() {
    console.log("Hello!");
}

greet();

greet.age = 20;

console.log(greet.age);

/*
Functions also have methods like:

call()
apply()
bind()

We'll study them later.

===========================================================
            Strings are Primitive (Autoboxing)
===========================================================

Strings are primitive values.

But this works:

"hello".toUpperCase()

JavaScript temporarily wraps the string into a String object,
calls the method, then destroys the wrapper.

This is called AUTBOXING.
*/

let language = "javascript";

console.log(language.toUpperCase());

/*
===========================================================
            Numbers are Primitive (Autoboxing)
===========================================================

Same idea.
*/

let price = 99.56789;

console.log(price.toFixed(2));

/*
===========================================================
            Prototype-Based Language
===========================================================

Java

Class
   ↓
Object

JavaScript

Object
   ↓
Another Object
   ↓
Another Object

Objects inherit from other objects.

This is called Prototype Inheritance.

(JavaScript classes are built on top of prototypes.)

===========================================================
            What Happens Before Your Code Runs?
===========================================================

JavaScript Engine Starts

↓

Creates Global Environment

↓

Creates Built-in Objects

Math
JSON
Array
Object
String
Number
Date
Promise
console

↓

Runs YOUR code.

===========================================================
                Golden Rule
===========================================================

Whenever you see something in JavaScript, ask:

Is it a Primitive?

OR

Is it an Object?

That one question explains most of JavaScript.

===========================================================
                Next Topics
===========================================================

1. Execution Context
2. Global Object
3. Memory (Stack & Heap)
4. Prototype Chain
5. Functions
6. this Keyword
7. Closures
8. Event Loop

===========================================================
*/