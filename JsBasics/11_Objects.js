// =====================================================================================
// OBJECTS
// =====================================================================================

// JS is best learned through Objects + Events because almost everything revolves around them.
// Objects store data in key-value pairs.

// NOTE:
// The comment "Singleton Object" is used in many tutorials, but technically
// new Object() DOES NOT create a Singleton Design Pattern.
// Every call to new Object() creates a NEW object.


// =====================================================================================
// SYMBOLS
// =====================================================================================

// Symbol creates a UNIQUE value.
// Even Symbol("id") === Symbol("id") -> false

const mySym = Symbol("key1");


// =====================================================================================
// OBJECT LITERAL
// =====================================================================================

const jsUser = {

    name: "aryan",

    // property names having spaces cannot be accessed using dot notation
    // jsUser.full name ❌
    // jsUser["full name"] ✅

    "full name": "aryan yadav",

    // Symbol keys MUST be written inside []
    // mySym is evaluated first and then used as the property key

    [mySym]: "mykey!",

    age: 21,
    location: "dera bassi",
    email: "aryan@gmail.com",
    isLogedIn: false
};


// =====================================================================================
// ACCESSING OBJECT PROPERTIES
// =====================================================================================

// Dot notation (most common)
console.log(jsUser.name);

// Square notation
console.log(jsUser["name"]);

// Needed when property has spaces
console.log(jsUser["full name"]);

// Needed for Symbol keys
console.log(jsUser[mySym]);


// =====================================================================================
// MODIFYING OBJECTS
// =====================================================================================

// Objects are MUTABLE.
// Properties can be changed after creation.

jsUser.email = "aryan0y14@gmail.com";

// Object.freeze() freezes ONLY the top-level object.
// Cannot add, delete or modify properties after this.
// Nested objects can still change (Shallow Freeze).

// Object.freeze(jsUser);

jsUser.email = "adjf;jaljf";

console.log(jsUser.email);


// =====================================================================================
// FUNCTIONS INSIDE OBJECTS
// =====================================================================================

// Functions are First-Class Citizens in JavaScript.
// Meaning:
// They can be stored in variables
// Passed as arguments
// Returned from functions
// Stored inside objects

jsUser.greeting = function () {

    console.log("hello js user");

}

jsUser.greetingTwo = function () {

    // this refers to the object that CALLED the function.
    // Here:
    // jsUser.greetingTwo()
    // therefore
    // this === jsUser

    console.log(`hello js user ${this["full name"]}`);

}

// greeting() executes the function

console.log(jsUser.greeting());

// greeting (without ()) only returns the function itself

console.log(jsUser.greetingTwo());


// =====================================================================================
// LECTURE 2
// =====================================================================================


// Creates an empty object using Object constructor.
// Same practical result as {}

const tinderUser = new Object();

console.log(tinderUser);


// Preferred modern syntax

const tinderUser2 = {};


// JavaScript objects are dynamic.
// Properties can be added anytime.

tinderUser2.id = "123abc";
tinderUser2.name = "smamy";

console.log(tinderUser2);


// =====================================================================================
// OBJECT NESTING
// =====================================================================================

const regularUser = {

    email: "aryan.@yahoo.comaldf",

    fullname: {

        firstName: "aryan",
        lastName: "yadav"

    }

};


// Access nested properties

console.log(regularUser.fullname.firstName);

console.log(regularUser.fullname);


// Optional Chaining

// regularUser.fullname?.firstName

// If fullname exists
// -> continue

// Else
// -> return undefined instead of throwing an error

// Mostly useful while dealing with APIs.


// =====================================================================================
// OBJECT MERGING
// =====================================================================================

const obj1 = {

    1: "a",
    2: "b"

}

const obj2 = {

    3: "c",
    4: "d"

}


// This DOES NOT merge.
// It creates an object containing obj1 and obj2.

const obj3 = {

    obj1,
    obj2

}

console.log(obj3);

/*

obj3

{

    obj1:{
        1:"a",
        2:"b"
    },

    obj2:{
        3:"c",
        4:"d"
    }

}

*/


// =====================================================================================
// OBJECT.ASSIGN()
// =====================================================================================

// Syntax

// Object.assign(target, source1, source2...)

const obj4 = Object.assign({}, obj1, obj2);

// {} is the TARGET.
// Properties from obj1 and obj2 are copied into it.

// Without {}
//
// Object.assign(obj1,obj2)
//
// obj1 becomes the target and gets modified.

console.log(obj4);

console.log(obj1);


// =====================================================================================
// SPREAD OPERATOR
// =====================================================================================

const obj5 = {

    ...obj1,
    ...obj2

};

// Cleaner syntax than Object.assign()

// Still SHALLOW COPY.

// Only top-level properties are copied.
// Nested objects still share memory.

console.log(obj5);


// =====================================================================================
// DATABASE / API DATA
// =====================================================================================

// APIs usually return

// [
//   {},
//   {},
//   {}
// ]

// or nested objects.

const user = {

    user1: {

        id: 1,
        email: "1@gmail.com"

    },

    user2: {

        id: 2,
        email: "2@gmail.com"

    }

};


// Objects remain dynamic.

user.user3 = {

    id: 3,
    email: "3@gmail.com"

};

console.log(user);


// =====================================================================================
// ADDING MORE PROPERTIES
// =====================================================================================

tinderUser.id = 1;

tinderUser.name = "aryan";

console.log(tinderUser);


// =====================================================================================
// OBJECT METHODS
// =====================================================================================


// Returns array containing ONLY keys

console.log(Object.keys(tinderUser));

// Output

// ["id","name"]


// Returns array containing ONLY values

console.log(Object.values(tinderUser));

// Output

// [1,"aryan"]


// Returns array of [key,value] pairs

console.log(Object.entries(tinderUser));

// Output

// [
//
// ["id",1],
// ["name","aryan"]
//
// ]


// Checks whether property belongs DIRECTLY to the object.

// It ignores inherited properties from Object.prototype.

console.log(tinderUser.hasOwnProperty("id"));

// true

// Example

// tinderUser.hasOwnProperty("toString")

// false

// because toString() comes from Object.prototype, not tinderUser.


// =====================================================================================
// REMEMBER
// =====================================================================================

// Objects are mutable.

// Keys can be String or Symbol.

// Values can be ANY JavaScript datatype.

// Dot notation -> normal properties.

// Square notation -> spaces, variables, Symbols.

// Functions inside objects are called Methods.

// Object.freeze() -> shallow freeze.

// Object.assign() -> merges into target.

// Spread (...) -> modern way to merge/copy.

// Object.keys() -> keys.

// Object.values() -> values.

// Object.entries() -> [key,value].

// hasOwnProperty() -> checks only object's own properties.





/// lecture 3 - de-structure and json api
const course = { 
    coursename: "js",
    price: 999,
    couurseInstructor: "kunal"
}

// course.couurseInstructor suppose printing it multiple time so we have a syntax 
const {couurseInstructor: instructor} = course; // value extract and from where - de-structure
// can also do this 
console.log(instructor); // here courseInstructor was given an alias 

const {coursename: name,price,couurseInstructor: teacher} = course;
console.log(name);
console.log(price);
console.log(teacher);

// syntax - const {which property of object: name it something easy and accessible} = name of object to fetch from 




// api - application programming interface - it is nothing but set of rules for multiple software applications 
// to talk to each other , perform data transfer
// example you order - waiter takes order (api) - kitchen(food) - waiter brings it (api) - you receive
// at older times values used to come in xml structure but now json format is used 
/* 
    JSON - Javascript Object Notation

    {
        this is json format - object hi hai , no name
        "name": "aryan",
        "coursename": "meow",
        "price": 23
    }
        
    sometimes we even get in array format 

*/ 



/*
==============================================================================
                  THE HIDDEN CONCEPTS OF MODERN JAVASCRIPT
==============================================================================

Almost everything in modern JavaScript is built on
a few simple concepts.

Instead of memorizing syntax,
understand these core ideas.

==============================================================================
1. EVERYTHING IS AN OBJECT (Almost)
==============================================================================

Arrays are Objects.
Functions are Objects.
Maps are Objects.
Strings are Objects (temporarily wrapped when needed).

Example:

const arr = [1,2,3];

JavaScript sees something conceptually like:

Array Object
    │
    ├── length
    ├── forEach()
    ├── map()
    ├── filter()
    └── reduce()

The dot (.) means:

"Access a property or method of an object."

Examples:

student.name

↓

student["name"]


arr.length

↓

Access property


arr.forEach()

↓

Access method
Call method


Math.random()

↓

Math Object
Access random()
Call it


Object.entries()

↓

Object
Access entries()
Call it


==============================================================================
2. FUNCTIONS ARE FIRST-CLASS CITIZENS
==============================================================================

Functions are just another value.

Just like:

const x = 10;

You can also do:

const greet = function(){

};

Since functions are values, we can:

✔ Store them
✔ Pass them
✔ Return them
✔ Assign them to variables

This is one of JavaScript's most important features.


==============================================================================
3. HIGHER ORDER FUNCTIONS (HOF)
==============================================================================

A Higher Order Function is a function that:

✔ Accepts another function
OR
✔ Returns another function

Example:

arr.forEach(callback);

Who is the Higher Order Function?

forEach()

Why?

Because it accepts another function.

The function we pass is called the CALLBACK FUNCTION.


==============================================================================
4. CALLBACK FUNCTION
==============================================================================

A callback is simply a function passed
to another function.

Example:

arr.forEach(function(element){

    console.log(element);

});

The callback is NOT called by us.

The array calls it internally.

Conceptually:

for(each element){

    callback(element);

}


==============================================================================
5. METHODS vs LANGUAGE KEYWORDS
==============================================================================

These are NOT methods:

if
for
while
switch
return
break

These are language syntax.

They are built directly into JavaScript.

--------------------------------------------------

These ARE methods:

forEach()
map()
filter()
reduce()
entries()

Methods belong to objects.

Examples:

arr.map()

Object.entries()

Math.random()


==============================================================================
6. METHOD CHAINING
==============================================================================

Look at this:

Object.entries(student).forEach(...)

Read it LEFT to RIGHT.

Step 1

Object.entries(student)

↓

Returns an ARRAY


Step 2

Array.forEach(...)

↓

Calls the callback for every element.

Nothing magical happened.

One method returned an object
that had another method.


==============================================================================
7. THINK LEFT TO RIGHT
==============================================================================

Whenever you see code like:

Object.entries(student).forEach(([key,value])=>{

});

Break it mentally.

Object
↓

entries()

↓

Returns Array

↓

forEach()

↓

Receives Callback

↓

Calls Callback

↓

[key,value] is destructured


This single way of thinking explains
most modern JavaScript.


==============================================================================
GOLDEN RULE
==============================================================================

Don't memorize syntax.

Always ask:

1. What object am I working with?

2. What does this method return?

3. Who is calling whom?

4. What value is flowing into the next method?

If you can answer these four questions,
JavaScript becomes predictable instead of magical.
*/

