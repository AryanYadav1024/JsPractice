/****************************************************************************************
                THE 5 FUNDAMENTAL PILLARS OF JAVASCRIPT
****************************************************************************************/

/*
========================================================================================
1. EVERYTHING REVOLVES AROUND OBJECTS
========================================================================================

INTUITION

Imagine JavaScript is a huge city.

In Java:
Everything begins with a CLASS.

        Class
          ↓
       Object

In JavaScript:
Everything begins with an OBJECT.

No blueprint is necessary.

Objects are simply collections of key-value pairs.

Think of an object as a dictionary.

{
    key -> value
}

Example:
*/

const user = {
    name: "Aryan",
    age: 21,
    city: "Delhi"
};

/*
Internally (conceptually)

Object

----------------------------
"name" -------> "Aryan"
"age" --------> 21
"city" -------> "Delhi"
----------------------------

Whenever you write

user.name

JavaScript is really doing

Look inside object
↓

Find key called "name"

↓

Return associated value.

This is why

user.name

and

user["name"]

both work.

The "." operator is just shorthand.

========================================================================================
WHY OBJECTS?

Imagine you have

name
age
salary
phone
email
city
country

Instead of making seven variables

let name;
let age;
let salary;

you group related information.

That's an object.

Objects are used EVERYWHERE.

User
Product
Car
Game Character
Bank Account
API Response
DOM Elements

Everything becomes an object.

Even arrays are objects.

Even functions are objects.

Even dates are objects.

Even Math is an object.

JavaScript's world revolves around objects.
*/
/****************************************************************************************
2. FUNCTIONS ARE FIRST-CLASS VALUES
****************************************************************************************/

/*
This is probably JavaScript's biggest superpower.

In Java

Methods belong to classes.

class Car{

    void drive(){

    }

}

You cannot do

int x = drive;

because methods aren't values.

----------------------------------------

In JavaScript

Functions ARE VALUES.

Exactly like

Number

String

Boolean

Object

Array

Function

They can all be stored inside variables.

Example
*/

function hello(){
    console.log("Hello");
}

const x = hello;

/*
Notice

NOT

hello()

Just

hello

means

Store the FUNCTION ITSELF.

Now

x();

works perfectly.

Why?

Because

x

contains a reference to the function object.

Functions are actual objects.

Conceptually

Function Object

-----------------------
code
name
length
prototype
etc.
-----------------------

Since functions are objects

they can

✔ be stored in variables

✔ be passed to other functions

✔ be returned

✔ be stored inside arrays

✔ be stored inside objects

Example
*/

const person = {

    name: "Aryan",

    greet: function(){

        console.log("Hello");

    }

};

/*
Internally

person

--------------------------

"name" ------> "Aryan"

"greet" -----> Function Object

--------------------------

The function is simply another value.

This idea enables

Callbacks

Promises

Async/Await

React

Node.js

Event Listeners

Almost every modern JavaScript feature.

Without first-class functions

React wouldn't exist.

Express wouldn't exist.

Node.js wouldn't exist.
*/
/****************************************************************************************
3. OBJECTS ARE DYNAMIC
****************************************************************************************/

/*
Java Objects

Once created

their structure is fixed.

Example

class User{

    String name;

    int age;

}

Every User

always has

name

age

Nothing more.

----------------------------------------

JavaScript Objects

Can change while running.

Example
*/

const user = {};

user.name = "Aryan";

user.age = 21;

user.country = "India";

/*
Object changed.

Later

*/

user.salary = 100000;

/*
Later

*/

user.isStudent = true;

/*
Later

*/

delete user.salary;

/*
Nothing stops you.

The object literally changes shape.

Why?

Because objects are hash-map-like structures.

Conceptually

Before

{}

↓

After

{
name
}

↓

After

{
name
age
}

↓

After

{
name
age
country
}

The JavaScript engine (like V8) optimizes this with hidden classes and inline caches under the hood, but the language itself allows this flexibility.

This makes JavaScript extremely flexible.

It also creates bugs.

That's why people use TypeScript.

TypeScript catches mistakes before runtime.

JavaScript waits until runtime.

Tradeoff

Java

More safety

Less flexibility

JavaScript

Less safety

More flexibility
*/
/****************************************************************************************
4. PROTOTYPES REPLACE CLASSICAL INHERITANCE
****************************************************************************************/

/*
This is the hardest concept in JavaScript.

Forget classes for a minute.

Imagine

Person A knows something.

Person B doesn't.

Instead of copying knowledge

Person B asks Person A.

That's prototype inheritance.

Example
*/

const animal = {

    eats: true

};

const dog = {

    bark(){

        console.log("Woof");

    }

};

/*
Now imagine

dog

doesn't contain

eats

But

dog

has a hidden link

↓

animal

When we ask

dog.eats

JavaScript searches

dog

↓

not found

↓

prototype

↓

animal

↓

FOUND

Return true.

Search order

dog

↓

prototype

↓

prototype

↓

prototype

↓

null

This is called

Prototype Chain.

Java uses

Class inheritance.

JavaScript originally used

Prototype inheritance.

Modern JavaScript has

class

syntax

BUT

it's mostly syntactic sugar.

Behind the scenes

JavaScript still uses prototypes.

So

class Dog extends Animal

eventually becomes prototype links.

Every object has an internal [[Prototype]] reference (often exposed through methods like Object.getPrototypeOf()), and property lookup follows this chain.
*/
/****************************************************************************************
5. EVENT LOOP
****************************************************************************************/

/*
Suppose

Downloading file

takes

5 seconds.

Java

Thread waits.

JavaScript

Cannot freeze browser.

So it does something clever.

Main Thread

↓

Start Download

↓

Continue executing code

↓

When download finishes

↓

Run callback.

Example
*/

console.log("Start");

setTimeout(function(){

    console.log("Done");

},2000);

console.log("End");

/*
Output

Start

End

Done

NOT

Start

(wait)

Done

End

Why?

Because

setTimeout

doesn't block.

Timeline

Call Stack

Start

↓

Browser starts timer

↓

Timer running elsewhere

↓

Main thread continues

↓

Print End

↓

Timer finishes

↓

Callback enters task queue

↓

Event Loop notices call stack is empty

↓

Moves callback onto stack

↓

Print Done

This is why JavaScript feels asynchronous while still using one main thread for your code.

The browser (or Node.js) handles timers, networking, and file I/O outside the main execution stack, then schedules callbacks when they're ready.
*/