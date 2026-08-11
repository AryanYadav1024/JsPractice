// -------------------- BASIC COMPARISON OPERATORS --------------------

// >  : greater than
// <  : less than
// >= : greater than or equal to
// <= : less than or equal to

console.log(2 > 1);   // true → 2 is greater than 1
console.log(2 <= 1);  // false → 2 is not less than or equal to 1
console.log();


// -------------------- NULL COMPARISON WEIRDNESS --------------------

// In JavaScript, null represents an "intentional absence of value".
// When comparisons (<, >, <=, >=) happen, JS converts null to number 0.

console.log(null == 0);  
// false
// Loose equality (==) does NOT convert null to number.
// null only equals undefined with ==.
// So null == 0 → false

console.log(null >= 0);  
// true
// Because comparison operators convert null → 0
// So this becomes: 0 >= 0 → true

console.log(null <= 0);  
// true
// Same rule: null → 0
// So: 0 <= 0 → true

console.log(null > 0);   
// false
// null → 0
// So: 0 > 0 → false

console.log();


// -------------------- UNDEFINED COMPARISON --------------------

// undefined means "variable declared but no value assigned".

console.log(undefined > 0);  
// false
// undefined becomes NaN (Not a Number) when converted

console.log(undefined == 0); 
// false
// undefined only equals null with ==
// undefined == null → true
// but undefined == 0 → false

console.log(undefined <= 0); 
// false
// undefined → NaN
// Any comparison with NaN is false

console.log();


// -------------------- STRICT EQUALITY === --------------------

// === checks BOTH:
// 1. Type
// 2. Value

console.log("strict check", 2 === 3); 
// false
// number vs number → values differ

console.log("Strict check " + (2 === 2)); 
// true
// 2 === 2 → true
// string concatenation makes it "Strict check true"

console.log("Strict check but with number instead of boolean:", Number(2 === 2));
// true → converted to number
// true → 1
// false → 0

console.log();


// -------------------- WHY STRICT EQUALITY IS USED --------------------

// Strict equality avoids hidden type conversion.

console.log("2" === 2);
// false
// because:
// "2" → string
// 2 → number
// different types → false immediately


// -------------------- LOOSE EQUALITY == --------------------

// == performs automatic type coercion before comparison

console.log("2" == 2);
// true
// JS converts string "2" → number 2
// then compares: 2 == 2 → true

console.log("02" == 2);
// true
// "02" → number conversion → 2
// then: 2 == 2 → true

console.log();


// -------------------- EXPLICIT CONVERSION (BEST PRACTICE) --------------------

// Here we manually convert the string to a number.

console.log(Number("2") === 2);

// Step-by-step:
// Number("2") → converts string "2" into number 2
// Now comparison becomes:
// 2 === 2
// Same type (number)
// Same value
// → true

// This is preferred because:
// ✔ predictable
// ✔ avoids JavaScript's weird implicit coercion
// ✔ safer in large applications