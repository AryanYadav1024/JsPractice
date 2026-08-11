/*
=========================================
IIFE (Immediately Invoked Function Expression)
=========================================

Why use an IIFE?

1. Execute a function immediately after creating it.
2. Avoid polluting the global scope.
3. Create a private scope for variables.

Syntax:

(function () {
    // code
})();

Arrow Function IIFE:

(() => {
    // code
})();

Remember:

First ()  -> Converts the function into an Expression.
Second () -> Immediately invokes (calls) the function.

Modern JavaScript rarely needs IIFEs because
ES6 modules, let, and const already provide
block/module scope.
*/
function chai(){
    console.log("DB connected");
}
chai();

/* 
    why IIFE though in old times we used this? 
    so we have different file db and auth and others we want to load them 
    immediately and then forget about them because they don't serve a purpose afterwards

    () treat this as values(epression) not as declaration 

    How did they solve global scope pollution issue? 
    - before we didn't have let or const so var in another file would cause problem as it has global scope

    but nowadays we have 
    {
        let x = 10;
        cont y = 20;
    }
*/


(function () {
    console.log("DB Connected");
})();

// Arrow function IIFE. 
((name) => {
    console.log("hello arrow function IIFE");
    console.log(`Name: ${name}`);
})("aryan");

/*
=========================================
WHY MUST AN IIFE BE A VALUE (EXPRESSION)?
=========================================

JavaScript has two kinds of functions:

1. Function Declaration
2. Function Expression (a value)

Declaration:

function greet() {}

This is an INSTRUCTION to JavaScript:
"Create a function named greet."

Since it's a declaration, JavaScript finishes
processing it and DOES NOT return a function value
that can be immediately called.

So this is invalid:

function greet() {}();   // ❌ Syntax Error


Expression:

(function () {})

Wrapping the function in () tells JavaScript:

"Treat this function as a VALUE (Function Object),
not as a declaration."

Once it becomes a value, it can be immediately invoked:

(function () {
    console.log("Runs immediately");
})();

Think of it like this:

Declaration:
Create Function
      ↓
Done

Expression:
Create Function Object (Value)
      ↓
(Function Object)
      ↓
() immediately calls it

The first () converts the function into an expression.
The second () invokes (calls) that function.


ONLY EXPRESSIONS PRODUCE A VALUE. FUNCTION INVOCATION (()) NEEDS A VALUE TO INVOKE.e

*/
