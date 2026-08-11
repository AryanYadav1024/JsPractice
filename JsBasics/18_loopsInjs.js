//==============================================================================
// JAVASCRIPT SPECIAL LOOPS
//==============================================================================

/*
Unlike Java, JavaScript has extra loops because it has
different data structures (Arrays, Objects, Maps, Strings).

Think before choosing a loop:

for         -> I control everything.
for...of    -> Give me each VALUE.
for...in    -> Give me each PROPERTY KEY.
forEach()   -> Run this callback for every array element.
map()       -> Transform every element and return a NEW array.
*/


//==============================================================================
// FOR...OF
//==============================================================================

/*
Iterates over VALUES of an iterable.

Works with:
✔ Arrays
✔ Strings
✔ Maps
✔ Sets

Does NOT work with plain Objects.

Why?
Because for...of works on ITERABLES.
Objects are key-value collections,
not iterable sequences.
*/

const arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}
// Output:
// 1 2 3 4 5


const str = "hello world";

for (const char of str) {

    if(char === " ")
        continue;

    console.log(char);
}


/*
Map is iterable, so for...of works perfectly.
*/


//==============================================================================
// MAP (Data Structure)
//==============================================================================

/*
Map is a collection of unique KEY-VALUE pairs.

Similar to Java's HashMap but with differences:
✔ Keys can be ANY datatype.
✔ Maintains insertion order.
✔ Iterable by default.
*/

const map = new Map();

map.set("In","India");
map.set("usa","America");
map.set("fr","France");

// Duplicate key updates value instead of creating another entry.
map.set("In","India");

console.log(map);


// Each iteration returns ONE array:
//
// ["In","India"]
//
// We immediately destructure it.

for (const [key,value] of map) {

    console.log(key,":-",value);

}



//==============================================================================
// OBJECTS
//==============================================================================

const myObject = {

    game1 : "nfs",
    game2 : "spiderman",
    game3 : "elden ring",
    game4 : "rdr2"

};


/*
This DOES NOT work.

Objects are NOT iterable.

They don't produce values one by one
like arrays or strings.

Instead they store data as PROPERTY KEYS
and PROPERTY VALUES.

Property:

game1 -> nfs
*/


// for(const [key,value] of myObject){}



//==============================================================================
// FOR...IN
//==============================================================================

/*
for...in iterates over PROPERTY KEYS.

Works with:
✔ Objects
✔ Arrays (not recommended)

It DOES NOT return values.

To access the value:

object[key]
*/

for (const key in myObject) {

    console.log(key);

}


for (const key in myObject) {

    console.log(key,":-",myObject[key]);

}


/*
Arrays are internally objects.

0 -> value
1 -> value
2 -> value

So for...in returns indexes,
NOT actual values.
*/

for (const index in arr) {

    console.log(index,":-",arr[index]);

}


/*
Map has no enumerable object properties,
so for...in doesn't iterate over Map entries.

Always use:

for...of

for Maps.
*/


//==============================================================================
// FOREACH()
//==============================================================================

/*
forEach() is an ARRAY METHOD.

Instead of writing a loop,
the ARRAY performs the loop internally.

You only provide instructions
using a callback function.

Callback Function:

A function passed as an argument
which is executed later by another function.

forEach():

1. Takes each element.
2. Calls your callback.
3. Ignores whatever you return.
4. Returns undefined.
*/

arr.forEach(function(num){

    console.log(num*2);

});


arr.forEach((element)=>{

    console.log(element);

});


//==============================================================================
// MAP()
//==============================================================================

/*
Why was map() created?

Before map():

Create empty array
↓

Loop
↓

Transform value
↓

push()

Every programmer kept writing this.

map() automates that process.

map():

1. Creates a NEW array.
2. Executes callback for every element.
3. Stores each returned value.
4. Returns the NEW array.

Unlike forEach(),
map() DOES care about your return value.
*/

const prices = [200,100,400,455];

const newPrices = prices.map(function(price){

    return price * 1.18;

});

console.log(newPrices);


/*
Internally map() is similar to:

const result=[];

for(const value of prices){

    result.push(callback(value));

}

return result;
*/


//==============================================================================
// OBJECT.KEYS()
// OBJECT.VALUES()
// OBJECT.ENTRIES()
//==============================================================================

/*
Objects don't have map() because
they are NOT arrays.

So JavaScript first converts
the object into an ARRAY.

Object.keys()

Returns:

["game1","game2","game3"]


Object.values()

Returns:

["nfs","spiderman","elden ring"]


Object.entries()

Returns:

[
    ["game1","nfs"],
    ["game2","spiderman"]
]

Notice:

entries() returns an ARRAY.

Since it's an array,
we can use

map()
filter()
forEach()
reduce()

on it.
*/

console.log(Object.entries(myObject));

const newObj = Object.entries(myObject).map(function(pair){

    return pair;

});

console.log(newObj);


/*
Each iteration receives:

["game1","nfs"]

We can either use:

pair[0]
pair[1]

or destructure immediately.
*/

Object.entries(myObject).forEach(pair=>{

    console.log(pair);

});


Object.entries(myObject).forEach(([key,value])=>{

    console.log(key,":-",value);

});


/*
Remember:

Simple parameter

value => {}

Multiple parameters

(a,b)=>{}

Destructured parameter

([key,value])=>{}

Destructured parameters MUST be wrapped
inside parentheses ().
*/


//==============================================================================
// forEach() CALLBACK PARAMETERS
//==============================================================================

/*
The callback function passed to forEach() automatically
receives THREE arguments from the array.

Syntax:

array.forEach(function(element, index, array){

});

or

array.forEach((element, index, array) => {

});

JavaScript itself supplies these values.
You DON'T pass them manually.
*/


const arr2 = [10, 20, 30];

arr2.forEach((element, index, array) => {

    console.log(element, index, array);

});

/*
Iteration 1

element -> 10
index   -> 0
array   -> [10,20,30]


Iteration 2

element -> 20
index   -> 1
array   -> [10,20,30]


Iteration 3

element -> 30
index   -> 2
array   -> [10,20,30]
*/


/*
Internally JavaScript does something conceptually similar to:

for(let i = 0; i < arr.length; i++){

    callback(

        arr[i],   // current element

        i,        // current index

        arr       // original array

    );

}

You only write the callback.
JavaScript handles calling it.
*/


//==============================================================================
// USING ONLY THE PARAMETERS YOU NEED
//==============================================================================

/*
Need only element?
*/

arr.forEach((element) => {

    console.log(element);

});


/*
Need element and index?
*/

arr.forEach((element, index) => {

    console.log(index, ":-", element);

});


/*
Need all three?
*/

arr.forEach((element, index, array) => {

    console.log(element, index, array);

});


/*
Parameter Summary

element
→ Current element being processed.

index
→ Position of the current element.

array
→ The original array on which forEach() was called.

Most of the time you'll only use:

element

or

element + index

The third parameter (array) is needed much less often.
*/





 

//==============================================================================
// ARRAY OF OBJECTS (VERY COMMON IN REAL WORLD)
//==============================================================================

/*
One of the most common data structures in JavaScript.

An Array stores MULTIPLE objects.

Think of it as:

Array
 ├── Student Object
 ├── Student Object
 ├── Student Object
 └── Student Object

This is exactly how data usually comes from:

✔ Databases
✔ REST APIs
✔ JSON Files
✔ Backend Servers

Example:

A database table

+--------+-----+
| Name   | ID  |
+--------+-----+
| Aryan  |123  |
| Rahul  |124  |
| John   |125  |
+--------+-----+

After fetching from the backend:

[
    {name:"Aryan",id:123},
    {name:"Rahul",id:124},
    {name:"John",id:125}
]
*/

const myStudents = [
    {
        name: "aryan",
        id: 123
    },
    {
        name: "rahul",
        id: 124
    },
    {
        name: "johndoe",
        id: 125
    },
    {
        name: "meow",
        id: 126
    }
];


//==============================================================================
// ACCESSING OBJECTS INSIDE THE ARRAY
//==============================================================================

/*
forEach() gives ONE object at a time.

Iteration 1

student

↓

{
    name:"aryan",
    id:123
}

Iteration 2

↓

{
    name:"rahul",
    id:124
}
*/

myStudents.forEach((student) => {

    console.log(student);

});


//==============================================================================
// ACCESSING SPECIFIC PROPERTIES
//==============================================================================

/*
Most common in real projects.

Since we already know the property names,
we directly access them.
*/

myStudents.forEach((student) => {

    console.log(student.name);
    console.log(student.id);

});


//==============================================================================
// OBJECT DESTRUCTURING
//==============================================================================

/*
Cleaner way to access object properties.

Instead of:

student.name

student.id

We unpack the object.
*/

myStudents.forEach(({ name, id }) => {

    console.log(name, "->", id);

});


/*
JavaScript secretly does:

const name = student.name;
const id = student.id;
*/


//==============================================================================
// Object.entries()
//==============================================================================

/*
Suppose we DON'T know the property names.

Example:

Database returns dynamic fields.

Then Object.entries() converts the object into
an array of [key,value] pairs.

Example:

{
    name:"Aryan",
    id:123
}

↓

Object.entries(student)

↓

[
    ["name","Aryan"],
    ["id",123]
]

Since entries() returns an ARRAY,
we can use:

forEach()
map()
filter()
reduce()

on it.
*/

myStudents.forEach((student) => {

    Object.entries(student).forEach(([key, value]) => {

        console.log(key, "->", value);

    });

    console.log("----------------");

});


