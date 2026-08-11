// primitive - cannot be broken down into samller data types
    // their copy is passed they are pass by value - copy of their value is passed and orignal cannot be mutated 
        // string
        // number 
        // boolean 
        // null
        // undefined 
        // symbol - to make a value unique we use symbol. wrapping a button inside a symbol
        // bigint 

const score = 100; // in type script we would have to do cost score:Number = 100; type defining for safety
const yesorno = false;
const scoreval = 100.23; // decimal - comes under Number
 
// symbol defining - to make it unique 
const id = Symbol("1234"); // this will be unique 
const anotherid = Symbol("1234"); // value of both these wouldn't be same 
console.log(id == anotherid);

// big int - just type the number as it is if it exceeds int data type then js stores it as big int automatically

// non - primitive 
    // passed by reference - we can mutate thier values by passing them
        // Array, Objects, functions
    /// type of all these non primitive types are object 

// Arrays written in squre brackets: 
const arr = ["aryan","akshit","john doe"];
console.log(arr);
console.log(typeof arr + " <- this is type of our array");
// objects are written in curly braces: and also they are written in key value pairs
let aryan_obj = 
{
    name: "aryan",
    age: 22
}
console.log(aryan_obj);
console.log(typeof aryan_obj + " <- this is type of our obj");
// functions - 
const myFunction = function(){
    console.log("hello world");
}

myFunction(); // calling the function 
console.log(typeof myFunction + " <- this is tyep of our function"); 
// in reality this is object function but this returns function 
console.table(aryan_obj); // can print it like this too 
console.table(arr);
console.table(myFunction);

