/*
===============================================================================
                    JAVASCRIPT DATE & TIME (Date Object)
===============================================================================

The Date object is JavaScript's built-in object for working with dates and time.

Examples:
✔ Calendar Apps
✔ Alarm Clock
✔ WhatsApp Timestamps
✔ Amazon Order Tracking
✔ Flight Booking
✔ Banking Transactions

-------------------------------------------------------------------------------
MENTAL MODEL
-------------------------------------------------------------------------------

Internally, a Date object DOES NOT store:

25 July 2026
8:30 PM

Instead, it stores ONE NUMBER called a TIMESTAMP.

Example

1785012556234

This number represents

Milliseconds since January 1, 1970 UTC.

Everything else (year, month, day, hour)
is calculated from this timestamp.

                Date Object
                     │
                     ▼
        +---------------------------+
        | Timestamp (Milliseconds)  |
        +---------------------------+
                     │
        ┌────────────┼─────────────┐
        ▼            ▼             ▼
    getYear()    getMonth()    getDate()

===============================================================================
1. Creating a Date Object
===============================================================================
*/

// Current date and time

const now = new Date();

console.log(now);

/*
Example Output

2026-07-25T20:45:18.123Z

OR

Sat Jul 25 2026 20:45:18 GMT+0530 (India Standard Time)

new Date()

creates a Date object representing the current moment.
*/

console.log(typeof now); // object

/*
Date is NOT a primitive.

It is an OBJECT with many built-in methods.
*/




//=============================================================================
// 2. Creating Your Own Date
//=============================================================================

const birthday = new Date(2005, 10, 16);

console.log(birthday);

/*
Output

Wed Nov 16 2005

Notice something strange?

Month = 10

NOT 11

Because JavaScript starts counting months from ZERO.

0 -> January
1 -> February
2 -> March
...
10 -> November
11 -> December

This is one of the most common beginner mistakes.
*/




//=============================================================================
// 3. Creating Date using a String
//=============================================================================

const d1 = new Date("2026-07-25");

const d2 = new Date("November 16, 2005");

console.log(d1);
console.log(d2);

/*
JavaScript parses the string
and creates a Date object.

ISO format (YYYY-MM-DD)
is usually the safest choice.
*/




//=============================================================================
// 4. Getting Individual Parts of the Date
//=============================================================================

const current = new Date();

console.log(current);

/*
Suppose current is

Sat Jul 25 2026 20:45:18
*/

console.log(current.getFullYear());      // 2026

console.log(current.getMonth());         // 6 (July)

console.log(current.getDate());          // 25

console.log(current.getDay());           // 6 (Saturday)

console.log(current.getHours());         // 20

console.log(current.getMinutes());       // 45

console.log(current.getSeconds());       // 18

console.log(current.getMilliseconds());  // 123

/*
Difference

getDate()

Returns

Day of Month

Example

25

------------------------------------

getDay()

Returns

Day of Week

0 -> Sunday
1 -> Monday
...
6 -> Saturday

Students confuse these all the time.
*/




//=============================================================================
// 5. Timestamp
//=============================================================================

console.log(Date.now());

/*
Example

1785012556234

This is called a TIMESTAMP.

Definition

Number of milliseconds
since

January 1, 1970 UTC

Computers store time this way because

Numbers are much easier to compare
than

"25 July 2026 8:45 PM"
*/




//=============================================================================
// 6. getTime()
//=============================================================================

const today = new Date();

console.log(today.getTime());

/*
Output

1785012556234

Difference

Date.now()

Returns current timestamp directly.

------------------------------------

new Date().getTime()

Creates a Date object first,
then returns its timestamp.

Both return milliseconds.
*/




//=============================================================================
// 7. Formatting Dates
//=============================================================================

const date = new Date();

console.log(date);

/*
Default format
*/

console.log(date.toDateString());

/*
Sat Jul 25 2026
*/

console.log(date.toTimeString());

/*
20:45:18 GMT+0530
*/

console.log(date.toLocaleString());

/*
25/7/2026, 8:45:18 pm

Uses your system's locale.
*/

console.log(date.toLocaleDateString());

console.log(date.toLocaleTimeString());




//=============================================================================
// 8. Modifying Dates
//=============================================================================

const future = new Date();

future.setFullYear(2030);

future.setMonth(11);

future.setDate(31);

future.setHours(10);

future.setMinutes(30);

console.log(future);

/*
set methods modify the existing object.

Think of them as editing
the timestamp stored inside.
*/




//=============================================================================
// 9. Comparing Dates
//=============================================================================

const date1 = new Date("2026-07-25");

const date2 = new Date("2026-07-26");

// Wrong

console.log(date1 == date2);

/*
false

Why?

Objects are compared by memory address,
NOT by their contents.
*/

// Correct

console.log(date1.getTime() === date2.getTime());

console.log(date1 < date2);

console.log(date1 > date2);

/*
JavaScript converts Date objects
to timestamps while comparing.
*/




//=============================================================================
// 10. Age Example
//=============================================================================

const birth = new Date("2005-11-16");

const currentDate = new Date();

const age = currentDate.getFullYear() - birth.getFullYear();

console.log(age);

/*
Simple age calculation.

A more accurate version would also check
whether the birthday has occurred this year.
*/




//=============================================================================
// 11. Measuring Program Execution Time
//=============================================================================

const start = Date.now();

/*
Imagine some heavy code runs here
*/

for (let i = 0; i < 1000000; i++) {}

const end = Date.now();

console.log(end - start + " ms");

/*
Example

12 ms

Useful for

✔ Benchmarking
✔ Performance Testing
✔ Measuring Algorithms
*/




//=============================================================================
// 12. Most Important Interview Differences
//=============================================================================

/*

new Date()

Returns

A Date OBJECT

--------------------------

Date.now()

Returns

A NUMBER (Timestamp)

--------------------------

getDate()

Returns

Day of Month

--------------------------

getDay()

Returns

Day of Week

--------------------------

getMonth()

Starts from ZERO

January = 0

December = 11

--------------------------

Date stores

ONE timestamp

NOT separate
year/month/day values.
*/




//=============================================================================
// Cheat Sheet
//=============================================================================

/*

Creation

new Date()

new Date("2026-07-25")

new Date(2026, 6, 25)

-------------------------

Get Methods

getFullYear()

getMonth()

getDate()

getDay()

getHours()

getMinutes()

getSeconds()

getMilliseconds()

getTime()

-------------------------

Set Methods

setFullYear()

setMonth()

setDate()

setHours()

setMinutes()

setSeconds()

-------------------------

Formatting

toString()

toDateString()

toTimeString()

toLocaleString()

toLocaleDateString()

toLocaleTimeString()

*/




//=============================================================================
// Final Mental Model
//=============================================================================

/*

                  new Date()
                       │
                       ▼
               Creates Date Object
                       │
                       ▼
             Stores ONE Timestamp
                       │
         (Milliseconds since Jan 1, 1970 UTC)
                       │
      ┌────────────────┼────────────────┐
      ▼                ▼                ▼
  Get Methods      Set Methods      Formatting
      │                │                │
      ▼                ▼                ▼
 getFullYear()    setFullYear()    toLocaleString()
 getMonth()       setMonth()       toDateString()
 getDate()        setDate()        toTimeString()
 getHours()       setHours()

Golden Rule 🧠

A Date object DOES NOT remember
"25 July 2026, 8:45 PM"

It remembers only a timestamp.

Every method simply interprets
or modifies that timestamp.

*/

const newDate = new Date();
console.log(newDate.toLocaleString('default',{ // internationalization 
    weekday: "long",
    month: "2-digit"
})); 

