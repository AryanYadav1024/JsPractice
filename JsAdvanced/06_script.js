/*
=====================================================
JavaScript DOM Events
=====================================================


What are Events?

Events are actions detected by the browser.

Examples:

- click
- submit
- key press
- mouse movement
- scrolling


HTML creates structure:

<button>Click</button>


JavaScript adds behaviour:

"When button is clicked, do something"



Flow:


User Action

    ↓

Browser detects event

    ↓

Event object is created

    ↓

Event listener runs callback function



=====================================================
Types of Events
=====================================================


Mouse Events:

click
dblclick
mouseenter
mouseleave
mousemove


Keyboard Events:

keydown
keyup


Form Events:

submit
change
focus
blur


Window Events:

load
scroll



=====================================================
Ways to Add Events
=====================================================



1. Inline Event (Old Method)
=====================================================


HTML:

<button onclick="alert('Clicked')">
Click
</button>


Problem:

- HTML and JS are mixed
- Hard to maintain in large applications



=====================================================
2. Event Property Method
=====================================================


HTML:

<button id="btn">
Click
</button>


JavaScript:


const btn = document.querySelector("#btn");


btn.onclick = function(){

    console.log("Clicked");

};



onclick is a property of the DOM element.



Problem:


Only one function can be attached.


Example:


btn.onclick = function(){
    console.log("One");
}


btn.onclick = function(){
    console.log("Two");
}


Output:

Two


First function gets overwritten.



=====================================================
3. addEventListener() ⭐
=====================================================


Modern and preferred method.


Syntax:


element.addEventListener(
    event,
    callback function
)



Example:


btn.addEventListener("click",function(){

    console.log("Button clicked");

});



Advantages:

- Multiple listeners can be added
- Cleaner separation of JS and HTML
- Used in modern applications



=====================================================
Callback Function
=====================================================


A callback is a function passed to another function
that executes later.


Example:


btn.addEventListener(
"click",
function(){

console.log("Clicked");

});



The function does not run immediately.


Browser stores it and executes it
when the click event happens.



=====================================================
Event Object
=====================================================


When an event occurs,
the browser gives information about that event.


Example:


btn.addEventListener("click",function(event){

    console.log(event);

});



event is an object containing event details.



Important properties:


1. event.type

Returns event name.


Example:


event.type


Output:

click



---------------------------------------------


2. event.target


Returns the element that triggered the event.


Example:


button.addEventListener("click",function(event){

console.log(event.target);

});



Output:


<button>



---------------------------------------------


3. event.currentTarget


Returns the element on which the event listener
is attached.



Difference:


target

=
actual element clicked



currentTarget

=
element running the listener



=====================================================
Changing UI using Events
=====================================================


Example:


const button = document.querySelector("#btn");


button.addEventListener("click",function(){

    document.body.style.backgroundColor="red";

});



Flow:


Click button

    ↓

click event fires

    ↓

callback executes

    ↓

background changes



=====================================================
Removing Events
=====================================================


removeEventListener()


Removes an event listener.



Example:


function changeColor(){

    document.body.style.backgroundColor="red";

}


button.addEventListener(
"click",
changeColor
);



Remove:


button.removeEventListener(
"click",
changeColor
);



Important:


This works:


removeEventListener("click", changeColor)



This does NOT:


removeEventListener(
"click",
function(){}
)



Because functions are objects.

JavaScript compares references,
not just function code.



=====================================================
Important Methods and Properties
=====================================================


METHODS:

addEventListener()

removeEventListener()



PROPERTIES:

onclick

event.type

event.target

event.currentTarget



=====================================================
Mental Model
=====================================================


DOM Element

      +

Event Listener

      +

Callback Function


          ↓


Browser waits for event


          ↓


Function executes


          ↓


Page changes



Events make webpages interactive.


*/