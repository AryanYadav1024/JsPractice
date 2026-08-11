//=============================================================================
// Strings
//=============================================================================

/*
✔ Strings are primitive values.

typeof "Hello"      // "string"

✔ Strings are IMMUTABLE.

Methods return a NEW string.
The original string never changes.

✔ JavaScript automatically wraps primitive strings
into a temporary String object when calling methods.
*/

const str = "JavaScript";

//=============================================================================
// Accessing Characters
//=============================================================================

console.log(str[0]);          // J

console.log(str.charAt(4));   // S
// charAt(index) -> Returns character at index.

console.log(str.at(-1));      // t
// at(index) -> Supports negative indexing.

//=============================================================================
// Length
//=============================================================================

console.log(str.length);
// length -> Returns number of characters.

//=============================================================================
// Case Conversion
//=============================================================================

console.log(str.toUpperCase());
// Returns uppercase string.

console.log(str.toLowerCase());
// Returns lowercase string.

//=============================================================================
// Removing Spaces
//=============================================================================

const password = "   Aryan   ";

console.log(password.trim());
// Removes spaces from both ends.

console.log(password.trimStart());
// Removes spaces from beginning.

console.log(password.trimEnd());
// Removes spaces from end.

//=============================================================================
// Searching
//=============================================================================

console.log(str.includes("Script"));
// includes(value) -> Returns true/false.

console.log(str.startsWith("Java"));
// startsWith(value) -> Checks beginning.

console.log(str.endsWith("Script"));
// endsWith(value) -> Checks ending.

console.log(str.indexOf("Script"));
// indexOf(value) -> Returns first index or -1.

console.log("banana".lastIndexOf("a"));
// lastIndexOf(value) -> Returns last index.

//=============================================================================
// Extracting
//=============================================================================

console.log(str.slice(0,4));
// slice(start,end)
// End not included.
// Supports negative indexing.

console.log(str.substring(0,4));
// substring(start,end)
// End not included.
// Negative values become 0.

//=============================================================================
// Replacing
//=============================================================================

console.log(str.replace("Java","Type"));
// replace(old,new)
// Replaces first occurrence.

console.log("cat cat".replaceAll("cat","dog"));
// replaceAll(old,new)
// Replaces every occurrence.

//=============================================================================
// Splitting
//=============================================================================

const skills = "HTML,CSS,JS";

console.log(skills.split(","));
// split(separator)
// Returns an array.

//=============================================================================
// Joining / Concatenation
//=============================================================================

console.log("Hello".concat(" World"));
// concat() -> Joins strings.

console.log("Hello " + "World");

console.log(`Hello ${"Aryan"}`);
// Template literals (preferred).

//=============================================================================
// Repeat
//=============================================================================

console.log("Hi ".repeat(3));
// repeat(n) -> Repeats string n times.

//=============================================================================
// Padding
//=============================================================================

console.log("5".padStart(3,"0"));
// padStart(length,char)

console.log("5".padEnd(3,"0"));
// padEnd(length,char)

//=============================================================================
// Conversion
//=============================================================================

const obj = new String("Hello");

console.log(obj.valueOf());
// valueOf() -> Returns primitive string.

//=============================================================================
// Immutability
//=============================================================================

let company = "Google";

company[0] = "M";

console.log(company);

/*
Still prints

Google

Reason:

Strings are immutable.
*/

company = "Microsoft";

console.log(company);

/*
Variable changed,
NOT the original string.
*/

//=============================================================================
// String Object
//=============================================================================

const primitive = "Hello";

const object = new String("Hello");

console.log(typeof primitive);     // string

console.log(typeof object);        // object

/*
Use primitive strings.

String objects are rarely needed.
*/

//=============================================================================
// Most Used Methods
//=============================================================================

/*

length
------
Returns the total number of characters.
Use when you need the size of a string.

Example:
"Hello".length            // 5

------------------------------------------------

charAt(index)
-------------
Returns the character at the given index.

Use when you need a character at a specific position.

Example:
"Java".charAt(2)          // "v"

------------------------------------------------

at(index)
---------
Returns the character at the given index.
Supports negative indexing.

Use when accessing characters from the end.

Example:
"Java".at(-1)             // "a"

------------------------------------------------

toUpperCase()
-------------
Returns a new string in uppercase.

Useful for case-insensitive comparisons.

Example:
"hello".toUpperCase()     // "HELLO"

------------------------------------------------

toLowerCase()
-------------
Returns a new string in lowercase.

Useful for normalizing user input.

Example:
"HELLO".toLowerCase()     // "hello"

------------------------------------------------

trim()
------
Removes whitespace from both ends.

Useful for cleaning user input.

Example:
"   Aryan   ".trim()      // "Aryan"

------------------------------------------------

includes(value)
---------------
Checks whether a substring exists.

Returns true or false.

Useful for searching text.

Example:
"JavaScript".includes("Script")   // true

------------------------------------------------

startsWith(value)
-----------------
Checks whether a string starts with a given value.

Useful for validating prefixes.

Example:
"https://".startsWith("http")     // true

------------------------------------------------

endsWith(value)
---------------
Checks whether a string ends with a given value.

Useful for checking file extensions.

Example:
"notes.pdf".endsWith(".pdf")      // true

------------------------------------------------

indexOf(value)
--------------
Returns the first index of a substring.

Returns -1 if not found.

Useful when you need the position.

Example:
"banana".indexOf("a")             // 1

------------------------------------------------

lastIndexOf(value)
------------------
Returns the last occurrence of a substring.

Useful when a value appears multiple times.

Example:
"banana".lastIndexOf("a")         // 5

------------------------------------------------

slice(start, end)
-----------------
Extracts part of a string.

End index is NOT included.

Supports negative indexing.

Useful for getting substrings.

Example:
"JavaScript".slice(0,4)           // "Java"

------------------------------------------------

substring(start, end)
---------------------
Extracts part of a string.

Negative values become 0.

Useful when negative indexes aren't needed.

Example:
"JavaScript".substring(4)         // "Script"

------------------------------------------------

replace(old, new)
-----------------
Replaces the FIRST occurrence.

Useful for replacing one word or value.

Example:
"Hello World".replace("World","JS")

------------------------------------------------

replaceAll(old, new)
--------------------
Replaces ALL occurrences.

Useful when every match should change.

Example:
"cat cat".replaceAll("cat","dog")

------------------------------------------------

split(separator)
----------------
Splits a string into an array.

Useful for parsing CSV data, sentences, etc.

Example:
"HTML,CSS,JS".split(",")

------------------------------------------------

concat()
--------
Joins two or more strings.

Usually template literals (` `) are preferred.

Example:
"Hello".concat(" World")

------------------------------------------------

repeat(count)
-------------
Repeats the string multiple times.

Useful for formatting or generating patterns.

Example:
"Hi ".repeat(3)

------------------------------------------------

padStart(length, char)
----------------------
Pads the beginning of a string until it reaches
the desired length.

Useful for formatting IDs or numbers.

Example:
"5".padStart(3,"0")      // "005"

------------------------------------------------

padEnd(length, char)
--------------------
Pads the end of a string until it reaches
the desired length.

Useful for formatting tables or output.

Example:
"5".padEnd(3,"0")        // "500"

------------------------------------------------

valueOf()
---------
Returns the primitive string from a String object.

Rarely used in real-world code.

Example:
new String("Hello").valueOf()

*/

//=============================================================================
// Interview Points
//=============================================================================

/*

✔ Strings are immutable.

✔ String methods return NEW strings.

✔ at() supports negative indexing.

✔ slice() supports negative indexing.

✔ substring() does NOT.

✔ Primitive strings are preferred over String objects.

✔ typeof "Hello" === "string"

✔ typeof new String("Hello") === "object"

*/