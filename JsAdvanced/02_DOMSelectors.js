/*
=====================================================
DOM (Document Object Model) and CSSOM
=====================================================


A browser stores HTML and CSS information in memory as:

1. DOM (Document Object Model)
2. CSSOM (CSS Object Model)


HTML
 |
 ↓
Browser parses HTML
 |
 ↓
DOM Tree


CSS
 |
 ↓
Browser parses CSS
 |
 ↓
CSSOM Tree


DOM + CSSOM
 |
 ↓
Render Tree
 |
 ↓
Layout
 |
 ↓
Paint
 |
 ↓
Pixels on screen


The important thing:

The DOM and CSSOM are NOT the actual HTML and CSS files.

They are JavaScript-accessible object representations
created by the browser.

JavaScript can access these objects and manipulate them.

Example:

HTML:

<h1 id="heading">Hello World</h1>


JavaScript:

document.getElementById("heading");

returns an object representing that HTML element.


=====================================================
What are DOM Selectors?
=====================================================


DOM selectors are methods provided by the DOM API
that allow JavaScript to find HTML elements.

Once JavaScript gets the element object,
we can:

- change content
- change styles
- add/remove attributes
- add events
- create/remove elements


We select elements based on:

1. ID
2. Class
3. Tag name
4. CSS selectors
5. Attributes


=====================================================
Traditional DOM Selection Methods
=====================================================


1. getElementById(id)
---------------------------------------------

Selects an element using its unique ID.


HTML:

<h1 id="heading">DOM Learning</h1>


JavaScript:

const heading = document.getElementById("heading");


Returns:

- Single element object
- null if element is not found


Important:

IDs should always be unique.

If multiple elements have the same ID,
the behavior is undefined because HTML rules are broken.

Browsers usually return the first matching element,
but never depend on duplicate IDs.


Example:

heading.innerHTML = "Changed";


=====================================================


2. getElementsByClassName(className)
---------------------------------------------


Selects all elements having a specific class.


HTML:

<p class="text">Hello</p>
<p class="text">World</p>


JavaScript:

const texts = document.getElementsByClassName("text");


Returns:

HTMLCollection


HTMLCollection:

- Array-like object
- Has length property
- Can access using index
- Not a real array


Example:

texts[0];


But:

texts.map() ❌


Convert:

Array.from(texts)

or

[...texts]


=====================================================


3. getElementsByTagName(tagName)
---------------------------------------------


Selects elements using their HTML tag.


Example:

const paragraphs = document.getElementsByTagName("p");


Returns:

HTMLCollection


Example:

paragraphs[0];


=====================================================
Modern Query Selectors
=====================================================


Query selectors use CSS selector syntax.

Meaning:

Whatever selector you write in CSS,
you can use in JavaScript.


Example:

CSS:

.heading

JavaScript:

document.querySelector(".heading");


=====================================================


4. querySelector(selector)
---------------------------------------------


Selects the FIRST element matching a CSS selector.


Example:


HTML:

<h1 id="heading">Hello</h1>


JavaScript:

const heading = document.querySelector("#heading");


Returns:

- Element object
- null if not found


Examples:


Select ID:

document.querySelector("#heading");


Select class:

document.querySelector(".container");


Select tag:

document.querySelector("p");


Multiple classes:

document.querySelector(".btn.active");


Meaning:

Find the first element having both classes:

btn
and
active


=====================================================


5. querySelectorAll(selector)
---------------------------------------------


Selects ALL elements matching a CSS selector.


Example:


const headings = document.querySelectorAll("h1");


Returns:

NodeList


=====================================================
NodeList
=====================================================


NodeList is an array-like collection of DOM element objects.

It is NOT a real JavaScript Array.


Example:


const h = document.querySelectorAll("#heading");


Output:

NodeList [
    <h2 id="heading">
]


Internally:


NodeList

 |
 |---- 0 → HTMLHeadingElement object
 |
 |---- 1 → HTMLHeadingElement object


Each item is a DOM object.


Example:

h[0].innerHTML;


=====================================================
NodeList Properties and Methods
=====================================================


Properties:

length


Methods:


1. forEach()

Used to iterate through elements.


Example:

h.forEach((item)=>{
    console.log(item.innerHTML);
});


Output:

DOM learning


---------------------------------------------


2. item()


Access element by index.


Example:

h.item(0);


Same as:

h[0];


---------------------------------------------


3. entries()


Returns index + value pairs.


Example:

for(const item of h.entries()){
    console.log(item);
}


Output:

[0, element]


---------------------------------------------


4. keys()


Returns indexes.


Example:

for(const key of h.keys()){
    console.log(key);
}


Output:

0
1
2


---------------------------------------------


5. values()


Returns elements.


Example:

for(const value of h.values()){
    console.log(value);
}



NodeList is iterable:

for...of works:


for(const item of h){
    console.log(item);
}


=====================================================
NodeList vs Array
=====================================================


Array:

const arr = [1,2,3];


Has:

map()
filter()
reduce()
find()
forEach()
etc.


NodeList:

const elements = document.querySelectorAll("p");


Has:

forEach()
item()
entries()
keys()
values()


Does NOT have:

map() ❌
filter() ❌
reduce() ❌


Convert NodeList to Array:


Method 1:

const arr = Array.from(elements);


Method 2:

const arr = [...elements];


Now:

arr.map()

works.


=====================================================
Manipulating Attributes
=====================================================


HTML:

<img id="photo" src="old.jpg">


JavaScript:


const img = document.querySelector("#photo");


Get attribute:

img.getAttribute("src");


Output:

old.jpg



Set attribute:


img.setAttribute("src","new.jpg");



Remove attribute:


img.removeAttribute("src");


=====================================================
Changing CSS Using JavaScript
=====================================================


HTML:

<h1 id="heading">
Hello
</h1>


JavaScript:


const heading = document.getElementById("heading");


heading.style.color = "blue";

heading.style.fontSize = "24px";

heading.style.backgroundColor = "yellow";

heading.style.padding = "10px";

heading.style.borderRadius = "5px";


Important:

CSS:

font-size

JavaScript:

fontSize


CSS:

background-color

JavaScript:

backgroundColor


because JavaScript uses camelCase.


=====================================================
Accessing Element Content
=====================================================


Three important properties:


1. textContent
---------------------------------------------


Gets/sets ALL text content.

Includes:

- hidden text
- invisible elements


Example:


HTML:

<h2 id="heading">

DOM learning

<span style="display:none">
hidden
</span>

</h2>


JavaScript:

heading.textContent;


Output:

DOM learning hidden



=====================================================


2. innerHTML
---------------------------------------------


Gets/sets HTML inside an element.


Example:


heading.innerHTML;


Output:


DOM learning <span style="display:none">hidden</span>



It includes HTML tags.


Changing:


heading.innerHTML = "<span>Hello</span>";

creates actual HTML.


=====================================================


3. innerText
---------------------------------------------


Gets/sets only visible text.


Example:


heading.innerText;


Output:

DOM learning


It ignores:

- hidden elements
- display:none content


=====================================================
Example Comparison
=====================================================


const h = document.getElementById("heading");


HTML:

<h2 id="heading">

DOM learning

<span style="display:none">
hidden
</span>

</h2>



h.innerHTML

Output:

DOM learning <span style="display:none">hidden</span>



h.innerText

Output:

DOM learning



h.textContent

Output:

DOM learning hidden



=====================================================
Selecting Inside NodeList Elements
=====================================================


NodeList contains DOM objects.

So we can apply selectors/properties on each item.


Example:


const headings = document.querySelectorAll("h2");


headings.forEach((item)=>{

    console.log(item.innerHTML);

    console.log(item.innerText);

    console.log(item.textContent);

});


Each item is an HTML element object.

Therefore:

item.style
item.classList
item.innerHTML

all work.


=====================================================
Mental Model
=====================================================


HTML
 |
 ↓
Browser creates DOM objects
 |
 ↓
JavaScript selects objects
 |
 ↓
Modify properties/methods
 |
 ↓
Browser updates UI


DOM manipulation is simply:

Finding objects
+
Changing objects


*/