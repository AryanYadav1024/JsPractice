/*
===============================================================================
                            JAVASCRIPT ARRAYS
===============================================================================

✔ Arrays in JavaScript are OBJECTS.

console.log(typeof []);     // "object"

Unlike Java arrays, JS arrays are dynamic (resizable).

*/

//=============================================================================
// Creating Arrays
//=============================================================================

const arr = [1, 2, 3, 4];
const mixed = [1, "Aryan", true, null, { age: 20 }];
const arr2 = new Array(1,2,3,4,5);


/*
Unlike Java:

int[] arr = {1,2,3};

JavaScript arrays can store DIFFERENT data types together.
*/

console.log(mixed);

//=============================================================================
// Accessing Elements
//=============================================================================

console.log(arr[0]);                 // 1
console.log(arr[arr.length - 1]);    // Last element
console.log(arr[100]);               // undefined

/*
Accessing an invalid index DOES NOT throw an exception.

Java
-----
ArrayIndexOutOfBoundsException

JavaScript
----------
undefined
*/

//=============================================================================
// Common Methods
//=============================================================================

arr.push(5);          // Add at end
arr.pop();            // Remove from end

arr.unshift(0);       // Add at beginning
arr.shift();          // Remove from beginning
arr.slice(1,2);       // what this does is doen't modify original array while splice does remove the elements
arr.splice(1,2);      // remove elements begining from __ index and the number of elements to remove __

console.log(arr);

/*
Time Complexity

push()      -> O(1)
pop()       -> O(1)

shift()     -> O(n)
unshift()   -> O(n)

Reason:
Every element has to shift its index.
*/

//=============================================================================
// Searching
//=============================================================================

const nums = [10, 20, 30, 40];

console.log(nums.includes(20));      // true // boolean check if the number exists or not

console.log(nums.indexOf(30));       // 2 // if found index is returned

console.log(nums.indexOf(100));      // -1 // if not found 

console.log(nums.includes(10) ? "yes 10 exists":"no it doesn't");  
// ternary operator , condition ? expressionIfTrue : expressionIfFalse;

//=============================================================================
// join()
//=============================================================================

const names = ["Aryan", "Rahul", "Mohit"];

console.log(names.join()); // this also changes type 
console.log(typeof names);
const names2 = names.join();
console.log(typeof names2);

/*
Output

Aryan,Rahul,Mohit
*/

console.log(names.join(" | "));

/*
Aryan | Rahul | Mohit
*/

//=============================================================================
// Shallow Copy
//=============================================================================

const original = [1, 2, 3];

const copy = [...original]; // spread operator used - it creates a different array 
// it spreads iterable objects like arrays and objects and copies them without mutating the original one

copy.push(4);

console.log(original);      // [1,2,3]
console.log(copy);          // [1,2,3,4]

/*
Spread operator creates a NEW array.

⚠ But it is still a SHALLOW copy.
Nested objects are shared.
*/

//=============================================================================
// Reference Behavior
//=============================================================================

const a = [1, 2, 3];

const b = a;

b.push(4);

console.log(a);     // [1,2,3,4]
console.log(b);     // [1,2,3,4]

/*
Objects and arrays are assigned by REFERENCE.

Memory

a --------\
           \
            ---> Array [1,2,3,4]
           /
b --------/

Both variables point to the SAME array.
*/

//=============================================================================
// Java vs JavaScript
//=============================================================================

/*

Java

✔ Fixed type
✔ Same data type
✔ Fixed size

JavaScript

✔ Dynamic
✔ Mixed data types
✔ Resizable
✔ Arrays are Objects
✔ Assigned by reference

*/

//=============================================================================
// Interview Points
//=============================================================================

/*

✔ typeof [] === "object"

✔ Arrays are zero-indexed.

✔ Arrays are reference types.

✔ push()/pop() are O(1).

✔ shift()/unshift() are O(n).

✔ Spread (...) creates a shallow copy.

✔ Accessing an invalid index returns undefined.

*/

// basics that will be useful in react node in future
const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","batman","flash"];

marvel_heros.push(dc_heros); // this is bad merging and creates issues
console.log(marvel_heros); // now array inside array issue - in js array can take any type of data

// anotherMethod - concat
marvel_heros.pop();
console.log(marvel_heros);
console.log(marvel_heros.concat(dc_heros)); // do this when same level
// push works on existing array but concat makes a combined new ones and returns it
// but what if one array is already mix with more arrays
const array = [1,2,[1,3,4,5,[43,43,134],341,34],12314,[134]];
const realArray = array.flat(2);
console.log(realArray);

// more methods 
console.log(Array.isArray("aryan"));
console.log(Array.from("aryan"));
console.log(Array.from({name: "aryan"})); // isko yeh directly convert nhi kr pa rha because key value pair \

let s1 = 100, s2 = 200, s3 = 300;
console.log(Array.of(s1,s2,s3)); // this method returns an array from given values







//=============================================================================
// const vs let vs var (Objects & Arrays)
//=============================================================================

/*
All three can store arrays and objects.

The difference is NOT whether you can modify the array.
The difference is whether you can REASSIGN the variable
to point to a new array/object.
*/

//=============================================================================
// const
//=============================================================================

const arr1 = [1, 2, 3];

arr1.push(4);      // ✅ Allowed
arr1[0] = 100;     // ✅ Allowed

// arr1 = [10,20]; // ❌ Error

/*
What?
-----
const creates a constant reference.

Why?
----
The variable must always point to the SAME array/object.

You CAN modify the contents,
but you CANNOT make it point to another array.
*/

//=============================================================================
// let
//=============================================================================

let Arr2 = [1, 2, 3];

Arr2.push(4);      // ✅ Allowed
Arr2[0] = 100;     // ✅ Allowed

Arr2 = [10, 20];   // ✅ Allowed

/*
What?
-----
let creates a block-scoped variable.

Why?
----
Use let when the variable needs to point
to a different value later.
*/

//=============================================================================
// var
//=============================================================================

var arr3 = [1, 2, 3];

arr3.push(4);      // ✅ Allowed
arr3[0] = 100;     // ✅ Allowed

arr3 = [10, 20];   // ✅ Allowed

/*
Regarding arrays/objects,
var behaves like let.

The differences between let and var are
about scope, redeclaration and hoisting.
*/

//=============================================================================
// let vs var
//=============================================================================

/*

1. Scope

let   -> Block Scoped

{
    let x = 10;
}

console.log(x);    // ❌ Error

----------------------------

var   -> Function Scoped

{
    var y = 20;
}

console.log(y);    // ✅ 20

------------------------------------------------

2. Redeclaration

let

let a = 10;
// let a = 20;      ❌ Not Allowed

----------------------------

var

var b = 10;
var b = 20;         // ✅ Allowed

------------------------------------------------

3. Hoisting

var

console.log(x);     // undefined

var x = 10;

----------------------------

let

console.log(y);     // ❌ ReferenceError

let y = 10;

Reason:
Temporal Dead Zone (TDZ)

*/

//=============================================================================
// Summary
//=============================================================================

/*

                 const      let      var
--------------------------------------------
Modify Array       ✅        ✅        ✅

Modify Object      ✅        ✅        ✅

Reassign           ❌        ✅        ✅

Block Scope        ✅        ✅        ❌

Redeclare          ❌        ❌        ✅

Hoisted            ✅*       ✅*       ✅

(* let & const are hoisted but remain in the
   Temporal Dead Zone until initialized.)

*/

//=============================================================================
// Mental Model
//=============================================================================

/*

const

arr
 │
 ▼
[1,2,3]

arr.push(4)      ✅

arr = [10,20]    ❌

--------------------------------------------

let / var

arr
 │
 ▼
[1,2,3]

arr.push(4)      ✅

arr = [10,20]    ✅

The variable now points to a NEW array.

*/

//=============================================================================
// Best Practice
//=============================================================================

/*

✔ Use const by default.

✔ Use let only when reassignment is required.

✔ Avoid var in modern JavaScript.
It exists mainly for legacy code.

*/
