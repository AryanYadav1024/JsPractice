/*
=========================================================
        Primitive Number vs Number Object (Wrapper)
=========================================================

JavaScript has two ways to represent numbers:

1. Primitive Number (Recommended)
2. Number Object (Wrapper Object)

In real-world JavaScript, almost always use primitive numbers.
=========================================================
*/


// =====================================================
// Primitive Number
// =====================================================

const score = 400; // Primitive number

/*
- Stored as a primitive value.
- Lightweight and fast.
- Cannot permanently store custom properties.
- This is what you should use almost all the time.
*/

console.log(score); // 400



// =====================================================
// Number Object (Wrapper Object)
// =====================================================

const balance = new Number(200);

/*
Creates a Number object that wraps the primitive value.

Internally it is conceptually similar to:

{
    [[NumberData]]: 200
}

Since it is an OBJECT, we can add our own properties.
*/

balance.name = "Aryan";

console.log(balance.name); // Aryan
console.log(balance);

/*
Output (Node.js)

[Number: 200] {
  name: 'Aryan'
}
*/



// =====================================================
// Memory Representation
// =====================================================

/*

Primitive

Stack
-------
score
  │
  ▼
400


Object

Stack
--------
balance
   │
   ▼

Heap
----------------------------
{
   [[NumberData]]: 200,
   name: "Aryan"
}

*/



// =====================================================
// Can we add properties to a primitive?
// =====================================================

const marks = 95;

marks.name = "Math";

/*
Nothing is stored permanently because
marks is NOT an object.
*/

console.log(marks.name); // undefined



// =====================================================
// Then why does score.toString() work?
// =====================================================

const price = 499;

console.log(price.toString()); // "499"

/*
Wait...

price is NOT an object.

So how can it have methods?

JavaScript temporarily creates a wrapper object
behind the scenes.

Conceptually it behaves like:

let temp = new Number(price);

temp.toString();

Then JavaScript immediately destroys temp.

This process is called AUTOBOXING (or Boxing).

So this:

price.toString();

behaves like:

(new Number(price)).toString();

The temporary object exists only for that
single operation.
*/



// =====================================================
// Primitive vs Wrapper Objects
// =====================================================

/*

Primitive               Wrapper Object

400               -->   new Number(400)

"Hello"           -->   new String("Hello")

true              -->   new Boolean(true)

Every primitive has a corresponding wrapper object.

*/



// =====================================================
// Equality Difference
// =====================================================

const a = 200;
const b = new Number(200);

console.log(a == b);   // true
console.log(a === b);  // false

/*
==

Converts the object into its primitive value.

200 == 200

Result:
true


===

Checks both VALUE and TYPE.

Primitive Number !== Number Object

Result:
false
*/



// =====================================================
// typeof
// =====================================================

console.log(typeof score);    // "number"
console.log(typeof balance);  // "object"



/*
=========================================================
                Should You Use new Number() ?
=========================================================

✅ Preferred

const score = 400;


❌ Avoid

const score = new Number(400);

Reasons:

1. Slower
2. Uses more memory
3. Creates confusing comparisons
4. Rarely needed in modern JavaScript

=========================================================
                    Key Takeaways
=========================================================

✔ 400 is a Primitive Number.

✔ new Number(400) creates a Number Wrapper Object.

✔ Objects can store custom properties.

✔ Primitives cannot permanently store properties.

✔ Primitives can still call methods because JavaScript
  temporarily wraps them in a Number object
  (Autoboxing).

✔ In real-world JavaScript, always prefer primitive
  numbers over new Number().

=========================================================
*/

// precision value
const otherNum = 1333.223432;
console.log(otherNum.toPrecision(6));

// maths  -  Math is a built-in object.
console.log(Math);
console.log(Math.abs(-3.2));
console.log(Math.round(3.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));

console.log(Math.floor(Math.random()*10)+1); 

// to get between a give a given range like - 20 - 30 
// random()* (max - min + 1)(this gives us the range like 20 numbers or 30 +1 exclusive) + min ( to reach the range )
console.log(Math.floor(Math.random() * (30 - 20 + 1 ) + 20));
