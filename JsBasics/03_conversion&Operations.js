let score = 22; // let this be a score in a game here we know we have provided it a value
// cost {score2} = req.body(); no gurantee which value we received

// score is right-now number
console.log(typeof score);

console.log("\nString to number converion using Number() method");
// but if I want to conver it to another type - 
let score2 = "22";
console.log(typeof score2);
let valInScore2 = Number(score2);
console.log(typeof valInScore2); // explicit conversion

console.log("\nNaN conversion problem");
// dangerous things to be worried of 
let score3 = "22abc"; // mix of number and string 
// if we try to convert this in JS it will convert but when getting its value will give something else NaN(Not a Number)
console.log(score3);
score3 = Number(score3);
console.log(typeof score3);
console.log(score3);

// if value was null 
console.log("\ntrying to convert null:");
let score4 = null;
console.log(typeof score4);
score4 = Number(score4);
console.log(typeof score4);
console.log(score4);

// if value is undefined
console.log("\ntrying to convert udefined:");
let score5 = undefined;
console.log(typeof score5);
score5 = Number(score5);
console.log(typeof score5);
console.log(score5);

// trying boolean conversion
console.log("\ntrying to convert boolean:");
let b = true;
console.log("\nfor true:");
console.log(typeof b);
b = Number(b);
console.log(typeof b);
console.log(b);

console.log("\nfor false:");
let c = false;
console.log(typeof c);
c = Number(c);
console.log(typeof c);
console.log(c);
// summary - 
    // "33" => 33
    // "33abc" => NaN
    // null => 0
    // undefined => NaN
    // true = 1 or false = 0; if we try to convert boolean if its true then number will be 1 else 0

// similar number to boolean
console.log("\nboolean conversion to number");
let n = 1;
console.log(n);
console.log(typeof n);
n = Boolean(n);
console.log(n);
console.log(typeof n);

// Conversion to String
console.log("\nconversion of num to String") 
let someNum = 22;
console.log(someNum);

console.log(typeof someNum);
// can also do by 
console.log(""+someNum);
someNum = String(someNum);
console.log(someNum);
console.log(typeof someNum);


// ****************** Operations ***************** 
    // mathematical or arithmetic
    // logical 
    // comaprision
    // bitwise 
    // miscellaneous
console.log();
let val = 3;
let negativeVal = -val;
console.log(negativeVal);
console.log(2+2); // addition
console.log(2-2); // subtraction
console.log(2*2); // multiply
console.log(2/2); // divide
console.log(2**3); // raise to power
console.log(1%2); // if number in modulu is smaller that what we are trying to divide it by it returns the same number only 

// tricky thing
let str1 = "hello";
let str2 = "aryan";
let str3 = str1 + " " + str2;
console.log("\n" + str3);

// string with number 
console.log("\nmany memes over this 12(string) + 2(int) = 122 ");
// auto conversion 
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2); // output will be 122 
// but if we use number first then 
console.log(1 + 2 + "2");
console.log("1" + (2 + 2));
console.log(true+true);
console.log(+"");
console.log("3" / 3); // only in the case + it is converted to string rest operators are not overloaded thus conversion to Number happens 
console.log("3" / "3");
// how does this work --> ToPrimitive guideline is followed 

/*
=========================================
JavaScript `+` Operator — Internal Working
=========================================sdaf

1. JavaScript is dynamically typed.
   Types are resolved at runtime, not compile time.

2. The `+` operator is overloaded:
   - Numeric addition
   - String concatenation

3. Evaluation happens LEFT TO RIGHT.

4. Internal steps for `a + b`:

   Step 1: ToPrimitive
   - If operand is object → call valueOf(), then toString()

   Step 2: Type Check
   - If either operand is a STRING → string concatenation
   - Else → numeric addition

   Step 3:
   - String concatenation → ToString(a) + ToString(b)
   - Numeric addition → ToNumber(a) + ToNumber(b)

5. Once a string appears, all further `+` operations concatenate.

Examples:
---------
"1" + 2        → "12"
1 + "2"        → "12"
"1" + 2 + 2    → "122"
1 + 2 + "2"    → "32"

Why?
-----
Because evaluation is left-to-right.

"1" + 2 + 2
→ ("1" + 2) + 2
→ "12" + 2
→ "122"

Other Operators:
----------------
- `-`, `*`, `/` always convert to numbers.
- Only `+` can concatenate strings.

Key Rule:
---------
If ANY operand is a string,
JavaScript converts everything to string.

Best Practice:
--------------
Avoid implicit coercion(automatic conversion of values).
Use Number(), String(), or explicit parsing.
*/
/*
=====================================================
The Secret Life of JavaScript Primitives (Edited Notes)
=====================================================

Core Idea:
----------
JavaScript primitives LOOK simple, but whenever you interact with
string, number, or boolean primitives, JavaScript silently creates
temporary "wrapper objects" behind the scenes.

This behavior is defined by the ECMAScript specification.

-----------------------------------------------------
1. Objects vs Primitives
-----------------------------------------------------

- Objects: collections of properties.
- Primitives: values ONLY, no properties.

Primitive types in JavaScript:
- undefined
- null
- boolean
- string
- number
(Symbol and BigInt exist, but are excluded here for simplicity.)

Everything that is NOT a primitive is an object.

-----------------------------------------------------
2. Wrapper Objects
-----------------------------------------------------

boolean → Boolean
string  → String
number  → Number

These constructors can be used in two ways:

- Function call  → returns a primitive
- Constructor   → returns an object wrapper

Examples:
---------
typeof true;                 // "boolean"
typeof Boolean(true);         // "boolean"
typeof new Boolean(true);     // "object"
typeof (new Boolean(true)).valueOf(); // "boolean"

typeof "abc";                // "string"
typeof String("abc");         // "string"
typeof new String("abc");     // "object"
typeof (new String("abc")).valueOf(); // "string"

typeof 123;                  // "number"
typeof Number(123);           // "number"
typeof new Number(123);       // "object"
typeof (new Number(123)).valueOf(); // "number"

Rule:
-----
Calling Boolean(), String(), Number() WITHOUT `new`
returns a primitive.
Using `new` creates an object wrapper.

-----------------------------------------------------
3. Why Do Primitives Have Properties?
-----------------------------------------------------

Primitives have NO properties.

So why does this work?
----------------------
"abc".length  // 3

Answer:
-------
JavaScript temporarily converts ("boxes") the primitive
into its corresponding object wrapper, accesses the property,
then immediately discards the object (eligible for GC).

This process is called:
→ Temporary Object Boxing

-----------------------------------------------------
4. Proof: Temporary Wrapper Objects Exist
-----------------------------------------------------

We can expose the wrapper object by intercepting it:

String.prototype.returnMe = function () {
    return this;
};

var a = "abc";
var b = a.returnMe();

typeof a; // "string"  (still primitive)
typeof b; // "object"  (wrapper object)

Important:
----------
The wrapper normally lives for a fraction of a millisecond.
By storing it in `b`, we prevented garbage collection.

NOTE:
-----
In strict mode, this trick does NOT work.

-----------------------------------------------------
5. Primitives Can Access Prototype Methods
-----------------------------------------------------

Because of boxing, primitives can access methods defined on:
- String.prototype
- Number.prototype
- Boolean.prototype

Example:
--------
Number.prototype.toString = function () {
    return typeof this;
};

(123).toString(); // "object"

This proves that a wrapper object was created internally.

-----------------------------------------------------
6. Object → Primitive Coercion
-----------------------------------------------------

Wrapper objects usually coerce back to their primitive value
when used in expressions.

Examples:
---------

var Twelve = new Number(12);
var fifteen = Twelve + 3;

fifteen;        // 15
typeof fifteen; // "number"
typeof Twelve;  // "object"

new String("hippo") + "potamus"; // "hippopotamus"

BUT:

typeof new String("hippo") + "potamus";
// "objectpotamus"
// because `typeof` does NOT force primitive coercion

-----------------------------------------------------
7. Boolean Objects Are Dangerous
-----------------------------------------------------

Boolean objects do NOT behave like boolean primitives.

Example:
--------
if (new Boolean(false)) {
    // This RUNS
}

Reason:
-------
Any object is truthy unless it is null or undefined.

Correct usage:
--------------
Boolean("");    // false
!!"";           // false

NEVER use:
---------
new Boolean(...)

-----------------------------------------------------
8. Assigning Properties to Primitives (Does NOT Work)
-----------------------------------------------------

var primitive = "september";
primitive.vowels = 3;

primitive.vowels; // undefined

What actually happens internally:
--------------------------------
(new String("september")).vowels = 3; // temporary object
(new String("september")).vowels;     // different object → undefined

Each access creates a NEW wrapper object.

Result:
-------
- Property assignment is useless
- Causes unnecessary allocations
- Object is immediately garbage collected

-----------------------------------------------------
9. Primitives Are Immutable
-----------------------------------------------------

Wrapper objects cannot change primitive values.

Example:
--------
var me = new String("Angus");
me.length = 2;      // Error in strict mode
me.length;          // 5
me.valueOf();       // "Angus"

The primitive value NEVER changes.

-----------------------------------------------------
10. Final Takeaways
-----------------------------------------------------

- Primitives are immutable values.
- Wrapper objects exist temporarily for property access.
- JavaScript automatically boxes and unboxes primitives.
- Using wrapper objects directly is almost always a mistake.
- Boolean objects are especially dangerous.
- Understanding this behavior explains coercion, `+`, and method calls.

Rule of Thumb:
--------------
Use primitives.
Let JavaScript handle boxing.
Never use `new Boolean`, `new String`, or `new Number`.

=====================================================
*/

