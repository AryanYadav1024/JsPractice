/*
==============================================================================
                            CONTROL FLOW
==============================================================================

Control Flow decides which code executes
and in what order.

Instead of executing every line,
JavaScript can choose different execution paths.
*/


//==============================================================================
// IF
//==============================================================================

const age = 20;

if (age >= 18) {
    console.log("Adult");
}


//==============================================================================
// COMPARISON OPERATORS
//==============================================================================

/*

>   Greater than
<   Less than
>=  Greater than or equal to
<=  Less than or equal to
==  Loose Equality
!=  Loose Not Equal
=== Strict Equality (Preferred)
!== Strict Not Equal

*/

console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true
console.log(10 <= 5);     // false


//==============================================================================
// IF - ELSE
//==============================================================================

const marks = 40;

if (marks >= 33) {
    console.log("Pass");
} else {
    console.log("Fail");
}


//==============================================================================
// ELSE IF
//==============================================================================

const score = 85;

if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 75) {
    console.log("Grade B");
}
else if (score >= 60) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}


//==============================================================================
// SCOPE
//==============================================================================

if (true) {

    let x = 10;
    const y = 20;

    console.log(x);
    console.log(y);
}

// x and y are NOT accessible here.


//==============================================================================
// SINGLE LINE IF
//==============================================================================

// Curly braces are optional for one statement.

if (true) console.log("Hello");

// Recommended:
if (true) {
    console.log("Hello");
}


//==============================================================================
// LOGICAL OPERATORS
//==============================================================================

// AND (&&)

const loggedIn = true;
const paidUser = true;

if (loggedIn && paidUser) {
    console.log("Premium Access");
}


// OR (||)

const admin = false;
const moderator = true;

if (admin || moderator) {
    console.log("Dashboard Access");
}


// NOT (!)

const isBanned = false;

if (!isBanned) {
    console.log("Login Allowed");
}


//==============================================================================
// SWITCH
//==============================================================================

const day = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}


//==============================================================================
// TERNARY OPERATOR
//==============================================================================

// Short form of if...else

const temperature = 30;

const weather =
    temperature > 25
        ? "Hot"
        : "Cold";

console.log(weather);


/*
==============================================================================
                            QUICK REVISION
==============================================================================

if
→ Runs only if condition is true.

if...else
→ Chooses between two execution paths.

else if
→ Checks multiple conditions.

switch
→ Better when comparing one value against many cases.

&&
→ All conditions must be true.

||
→ At least one condition must be true.

!
→ Reverses a boolean value.

? :
→ Short form of if...else.

NOTE:
JavaScript-specific topics like:


*/

/* 
    truth and falsy -
    suppose database query return user email

 */
const userEmail = "aryan0y7@gmail.com"

if(userEmail){
    console.log("GoT userEmail");
}else{
    console.log("Didn't get userEmail");
}

// now if works why? because simple we had value there was not comparision so how 
// string is considered true - truthy value 

// what about empty string - falsy value

const userEmail2 = "";

if(userEmail2){
    console.log("GoT userEmail");
}else{
    console.log("Didn't get userEmail");
}

// empty array - truthy

const userEmail3 = [];

if(userEmail3){
    console.log("GoT userEmail");
}else{
    console.log("Didn't get userEmail");
}

/*
    Falsy Values - everything except these are truth values 
                   False
                   0
                   -0
                   0n bigint 
                   "" empty string
                   null
                   undefined
                   NaN - not a number 
 */

/* 
    Truthy Values - 
                    "0" - zero in a string is truthy value
                    "false" or 'false' - truthy 
                    " " - even space is truthy value
                    {} - empty object
                    function(){} - empty function is also truthy value 
                    
 */

if(userEmail.length === 0){
    console.log("array is empty");
}else{
    console.log("not empty");
}


// what if objects are empty how to check 

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){ // array is returned 
    console.log("object is empty");
}

// 0 =="" true , false == 0 true , false == "" true

// Nullish Coalescing Operator (??): null undefined 
let vall;

vall = 5 ?? 10;
console.log(vall);

vall = null ?? 10;
console.log(vall);

vall = undefined ?? 16 ?? 20 
console.log(vall);

// 5 went inside so why use this ? - sometimes database calls - directly response nhi milta toh chances hai
// null ajaye or undefined ajaye
// nullish coalescing opertor decides if value null hai toh null assign krdo nhi toh value
// null coalescing opertor does what is which value we get first it is assigned 



