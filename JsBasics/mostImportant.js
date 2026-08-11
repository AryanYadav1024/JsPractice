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