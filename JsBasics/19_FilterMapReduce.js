/*
==============================================================================
                    forEach() vs map() vs filter() vs reduce()
==============================================================================

Always think in terms of WHAT you want.

Visit every element      -> forEach()

Create NEW values        -> map()

Keep SOME elements       -> filter()

Combine into ONE value   -> reduce()

These methods are called Higher Order Functions because
they accept callback functions.
*/


const coding = ["js","python","java","ruby"];


//==============================================================================
// forEach()
//==============================================================================

/*
Purpose:

Visit every element.

Used when performing an ACTION.

Examples:

✔ console.log()
✔ DOM Updates
✔ API Calls
✔ Database Writes

forEach() ignores return values.

It ALWAYS returns undefined.
*/

coding.forEach((item)=>{

    console.log(item);

});


//==============================================================================
// map()
//==============================================================================

/*
Purpose:

Transform every element.

map()

1. Creates a NEW array.
2. Executes callback for every element.
3. Stores every returned value.
4. Returns the NEW array.

Original array is NOT modified.
*/

const newCoding = coding.map((item)=>{

    return item.concat(" MEOW");

});

console.log(newCoding);


//==============================================================================
// filter()
//==============================================================================

/*
Purpose:

Keep only elements that satisfy a condition.

Every callback MUST return:

true
or
false

true

↓

Keep element

false

↓

Discard element

Returns a NEW array.
*/

const newLang1 = coding.filter(lang=>lang.startsWith("j"));

console.log(newLang1);


const newLang2 = coding.filter(lang=>{

    console.log(lang.startsWith("j"));

    return lang.startsWith("j");

});

console.log(newLang2);


//==============================================================================
// METHOD CHAINING
//==============================================================================

/*
Every method returns something.

That returned value can immediately
call another method.

Read LEFT → RIGHT.

Array

↓

map()

↓

Returns NEW Array

↓

filter()

↓

Returns NEW Array

↓

reduce()

...

Each method receives the output
of the previous method.
*/

const num=[2,1,5,2,6,6,3,45];

const newNum=num.map(num=>num*10).filter(num=>num>=45);

console.log(newNum);



//==============================================================================
// reduce()
//==============================================================================

/*
Purpose:

Combine MANY values into ONE value.

Examples:

✔ Sum
✔ Product
✔ Average
✔ Shopping Cart Total
✔ Count Frequency
✔ Build Objects

Syntax:

array.reduce(

    (accumulator,currentValue)=>{

        return newAccumulator;

    },

    initialValue

);
*/


/*
Accumulator

Think of it as:

Running Result

Every iteration receives the result
from the PREVIOUS iteration.

currentValue

The current array element.

initialValue

The starting value of the accumulator.

If omitted,
the first array element becomes
the initial accumulator.
*/


const sumNum=newNum.reduce(

    (sum,num)=>{
        console.log(sum);
        console.log(num);

        return sum+num;

    },

    10

);

console.log(sumNum);



/*
Example

Array

[20,30,40]

Initial Value

10


Iteration 1

sum = 10

num = 20

return 30


Iteration 2

sum = 30

num = 30

return 60


Iteration 3

sum = 60

num = 40

return 100


Final Answer

100


Think of reduce as:

Many Values

↓

One Final Result
*/