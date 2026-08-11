// Scope - Global and Local scope in javascript - many topics come under this like closure
// whole story of scope is about let var const 



// why scope needed or let var const? when block come {} this is block scope outside it is global scope 
if(true){
let a = 10 // this is block scoped
const b = 20 // this is block scoped too 
var c = 30 // but this is not block scoped. most flexible but dangerous one out there
console.log("inner: "+ a);
console.log("Inner:",b);
}
// console.log(a);
// console.log(b); 
console.log(c);

function one(){
    const username = "meow";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); website out of scope for this
    two();
}
one();
// for functions another call stack is defined 

if(true){
    const username = "aryan";
    if(username === "aryan"){
        const website = "youtube";
        console.log(username + website);
    }
    // console.log(website); // this is out of its block scope
    console.log(username);
}
// console.log(username); // similarly this is out of its block scope 


console.log("addone",addone(5));
// hoisting will work here

function addone(num){
    return num + 1;
}


// this also works in js variables can hold any type of value be it a function too
const addtwo = function(num){ 
    return num + 2;
}
console.log("addtwo",addtwo(6));