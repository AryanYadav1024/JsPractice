/*
=========================================
ARROW FUNCTIONS & `this` (ES6 - 2015)
=========================================

Arrow functions were introduced in ES6 (2015).

They were NOT made only for shorter syntax.
Their main purpose was to solve problems caused by `this`
changing unexpectedly inside callbacks.

Browser's global object = Window (used later in DOM).
*/


/*
=========================================
WHAT IS `this` ?
=========================================

`this` is a reference to the CURRENT OBJECT (CURRENT CONTEXT)
executing the function.

Think:
"Which object is calling me right now?"

If a function doesn't need to know the object,
then it doesn't need `this`.
*/


const user = {
    name: "aryan",
    id: 31,

    welcomeMessage: function () {
        console.log(`${this.name}, welcome to website`);

        // `this` refers to the object calling this method.
        console.log(this);
    }
};

user.welcomeMessage();

user.name = "sam";
user.welcomeMessage();


/*
=========================================
GLOBAL `this`
=========================================

Node.js (module)      -> {}
Browser (global)      -> Window
ES Modules/Strict     -> undefined (inside normal function call)
*/

console.log(this);


/*
=========================================
NORMAL FUNCTION
=========================================

Normal functions have their own `this`.

Its value depends on HOW the function is called.
*/

function fun() {
    console.log(this);
}

fun();


/*
=========================================
ARROW FUNCTION
=========================================

Arrow functions DO NOT create their own `this`.

They inherit (borrow) `this`
from their parent scope.

This is called Lexical `this`.
*/

const f = () => {
    let username = "Aryan";
    console.log(this);
};

f();


/*
=========================================
RETURN VALUES
=========================================
*/

// Explicit return

const addTwo = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo(1, 2));


// Implicit return (no {} = no need for return)

const addTwoBetter = (num1, num2) => num1 + num2;

console.log(addTwoBetter(1, 2));


// Returning an object
// Wrap object inside () otherwise {} becomes function body.

const obj = num1 => ({ username: "aryan" });

console.log(obj());

/*  Arrays.reduce method - what it does is sums array nums instead of doing it by loop
    array.reduce((accumulator, currentValue) => {
        return newAccumulator;
    }, initialValue);

    how does it work accumulator it is the main mathematical expression,
    currentvalue is the element in array we are on,
    return - returns it, it is like recursion
    initial value is something we provide like start accumulator from 10 so 10 is added initialy
 */ 
const addSpreadArrow = ([...myArray]) => {
    return myArray.reduce((sum,num) => sum + num,10);
}

const myArray = [1,23,4,23,41,5345,1]
console.log(addSpreadArrow(myArray));

/*
=========================================
QUICK REVISION
=========================================

Normal Function
---------------
✔ Has its own `this`
✔ `this` depends on HOW it's called

Arrow Function
--------------
✔ No own `this`
✔ Uses parent's `this`

Remember:
`this` is optional.
Use it only when a function needs access
to the object calling it.
*/
