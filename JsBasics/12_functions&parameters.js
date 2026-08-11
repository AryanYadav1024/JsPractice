// just a reusable code block to do stuff again and again.
// this is a recursive function
function print(n){
    if(n == 0){
        return;
    }
    console.log("name");
    print(n-1);
}


// 📝 Function Call Notes
print(6); // print is reference of function parentheises applied means this is its execution.
// Example
// Breakdown:
// 1. print
//    - Function name (identifier).
//    - Refers to a function.

// 2. (6)
//    - Parentheses () contain the argument(s).
//    - Here, 6 is the argument passed to the function.

// 3. print(6)
//    - This is called a FUNCTION CALL (or FUNCTION INVOCATION).
//    - Writing parentheses after a function name calls the function,
//      causing it to execute.

// 4. ;
//    - Ends the statement in C/C++.

// ✅ Remember:
// Function name + () = Function Call
// Function Call = Function Executes

// Example:
// add(2, 3);
// add      -> Function name
// 2, 3     -> Arguments
// add(2,3) -> Function call (invokes/executes the function)

const now = new Date();

const bDay = new Date("November 16,2005");

function getAge(){
    if(now.getMonth() >= bDay.getMonth()){
        console.log(`Your current age: ${now.getFullYear() - bDay.getFullYear()}`);
    }else{
        console.log(`Your current age: ${now.getFullYear() - bDay.getFullYear() - 1}`);
    }
}

getAge();


// function with objets and array in javascript

function calculateCartPrice(val1,val2,...num1) { //... is rest or spread operator this is currently rest operator 
    // passing multiple values in functions
    return num1
}
console.log(calculateCartPrice(200,3000,4000,234,234)); // first two will go to val1,val2 rest num1

const user = {
    name: "aryan",
    id: 5
};
function handleObject(anyobj) {
    console.log(`UserName is ${anyobj.name} and Id is ${anyobj.id}`); // type checking is better in typescript
}
handleObject(user);
handleObject({ // direct object passed 
    name: "meow",
    id: 69
})

const newArr = [200,300,400]
const newArrCopy = [...newArr]

function handleArray(arr){
    console.log(arr);
}
handleArray(newArrCopy);

