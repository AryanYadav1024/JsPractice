/*
===========================
DOM (Document Object Model)
===========================

So we know how HTML and CSS each have their own object tree.

JavaScript's global object (in the browser) is the `window` object.

window
│
├── document        // Represents the HTML page (DOM)
├── console
├── location
├── history
├── localStorage
├── alert()
├── setTimeout()
└── many more...

Every global variable or function we create is actually attached to the
window object (unless using modules).

Example:

var username = "Aryan";

console.log(window.username); // "Aryan"

---------------------------------------------------

JavaScript is an OBJECT-BASED language.

What does that mean?

Everything important is represented as objects.

Example:
window is an object
document is an object
button is an object
input box is an object
image is an object

Each object contains:

Properties (information)
Methods (functions it can perform)

Example:

document.title          // property
document.getElementById() // method

---------------------------------------------------

Because HTML elements become JavaScript objects inside the DOM,
JavaScript can access and manipulate them.

Think of it like this:

HTML
creates the structure

CSS
styles the structure

JavaScript
controls the behaviour

Example:

<button>Submit</button>

When we click the button,
HTML only knows:
"There is a button."

JavaScript tells it:

"When someone clicks,
send data,
show a message,
validate the form,
change the page,
etc."

Without JavaScript,
the button has almost no behaviour.

===================================================
Selecting Elements
===================================================

Sometimes when selecting elements,
JavaScript returns:

• HTMLCollection
• NodeList

instead of a normal Array.

Since these are NOT real arrays,
many array methods won't work directly.

Example:

elements.map(...)      // ❌ Error

Instead convert them into an array first.

Example:

const arr = Array.from(elements);

Now:

arr.map(...)
arr.filter(...)
arr.forEach(...)

all work.

(We'll study HTMLCollection and NodeList in detail later.)

===================================================
Selecting by ID
===================================================

Every ID inside HTML must be UNIQUE.

HTML

<h1 id="firstHeading">Hello</h1>

JavaScript:

document.getElementById("firstHeading");

This searches the DOM
and returns the element whose id is "firstHeading".

Store it if you'll use it multiple times:

const heading = document.getElementById("firstHeading");

===================================================
Manipulating Elements
===================================================

We can change the content of an element.

Example:

document.getElementById("firstHeading").innerHTML = "Welcome";

Result:

Before:
Hello

After:
Welcome

What is happening internally?

1. getElementById()
   searches the DOM tree.

2. It returns the actual HTML element object.

3. innerHTML is one of that object's properties.

4. Assigning a new value updates the DOM.

5. The browser notices the DOM changed.

6. It re-renders that part of the page.

---------------------------------------------------

Example:

const heading = document.getElementById("firstHeading");

heading.innerHTML = "<i>Hello Aryan</i>";

Output:

Hello Aryan      // displayed in italic

Notice:
innerHTML understands HTML tags.

Later we'll compare:

innerHTML
innerText
textContent

because they behave differently.

===================================================
Quick Revision
===================================================

HTML
→ Structure

CSS
→ Styling

JavaScript
→ Behaviour

window
→ Root object in the browser

document
→ Represents the HTML page

HTML elements
→ Become JavaScript objects

getElementById()
→ Finds an element using its unique ID

innerHTML
→ Changes the HTML inside an element

HTMLCollection / NodeList
→ Array-like collections, but not real arrays
→ Convert using Array.from() when needed
*/