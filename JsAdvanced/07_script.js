/*

=====================================================
DOM Events
=====================================================


Events are actions detected by the browser.

Examples:

- click
- submit
- keydown
- mouseover
- scroll


JavaScript listens for these events and executes
a callback function.



=====================================================
onclick vs addEventListener()
=====================================================


*/


const heading = document.querySelector("h1");


heading.addEventListener("click",event=>{

    window.location.href =
    "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events";

});


/*

addEventListener()

METHOD

Attaches an event listener to an element.


Advantages:

- Multiple listeners can be added to the same element
- Supports event propagation
- Better separation of HTML and JavaScript


=====================================================


onclick method:


*/


// document.getElementById("girl").onclick = ()=>{
//     alert("girl clicked");
// }


/*

onclick

PROPERTY

Old way of adding events.


Problem:

Only one function can be assigned.


Example:


element.onclick = function(){

}


element.onclick = function(){

}


Second function overwrites the first one.



=====================================================
Event Listener Third Parameter
=====================================================


Syntax:


element.addEventListener(
    event,
    callback,
    true/false
)



Third parameter:

true  → capturing phase

false → bubbling phase (default)



Capturing:

Top → Bottom


Bubbling:

Bottom → Top



Both are handled by the browser's event system.

The third parameter only decides when our listener runs.



*/


document.getElementById("images")
.addEventListener("click",(event)=>{


    console.log(event.currentTarget);

    console.log(event.target);

    console.log("ul clicked");


});



document.getElementById("girl")
.addEventListener("click",(event)=>{


    console.log(event.currentTarget);

    console.log(event.target);

    console.log("girl clicked");


});



document.getElementById("castle")
.addEventListener("click",(event)=>{


    console.log(event.currentTarget);

    console.log(event.target);

    console.log("castle clicked");


    event.stopPropagation();


});



/*

=====================================================
event.stopPropagation()
=====================================================


METHOD


Stops the event from travelling further.


Example:


Click:

castle


Without stopPropagation:


castle clicked

ul clicked



With stopPropagation:


castle clicked



Important:

It stops propagation to parent/child elements.

It does NOT stop other listeners on the same element.



For stopping all listeners on the same element:


event.stopImmediatePropagation()



=====================================================
Event Propagation
=====================================================



DOM:


        ul

        |

    ------------

    |          |

  girl      castle



Click castle:


Capturing:


ul

 ↓

castle



Target:


castle



Bubbling:


castle

 ↑

ul



true:

Listener runs during capturing.


false:

Listener runs during bubbling.



=====================================================
Event Object
=====================================================


Browser automatically passes an event object
to the callback function.


Example:


element.addEventListener("click",(event)=>{

});



event contains information about:

- what happened
- where it happened
- which element caused it



=====================================================
Important Event Properties
=====================================================



1. event.target

PROPERTY


The actual element that triggered the event.



Example:


Click image:


event.target


returns:


<img>



=====================================================


2. event.currentTarget

PROPERTY


The element where the event listener is attached.



Example:


Listener on ul:


event.currentTarget


returns:


<ul>



Difference:


target

=
clicked element


currentTarget

=
listener element



=====================================================


3. event.type

PROPERTY


Returns event type.



Example:


event.type


Output:


click



=====================================================


4. event.key


PROPERTY


Used with keyboard events.


Example:


document.addEventListener(
"keydown",
(event)=>{

console.log(event.key);

});



Output:


a

Enter

Space



=====================================================


5. event.clientX / event.clientY

PROPERTIES


Mouse position relative to viewport.



Example:


event.clientX

event.clientY



=====================================================
Useful Event Methods
=====================================================



1. preventDefault()

METHOD


Stops browser's default behaviour.



Example:

Form submission:


event.preventDefault();



Stops:

page reload



Used for:

- custom forms
- preventing links
- validation



=====================================================


2. stopPropagation()

METHOD


Stops event travelling through DOM.



Example:


child → parent


stops parent listener.



=====================================================


3. stopImmediatePropagation()

METHOD


Stops:

- propagation
- other listeners on same element



=====================================================
Removing Events
=====================================================


removeEventListener()


METHOD


Removes an event listener.



Example:


function clickHandler(){

console.log("clicked");

}


button.addEventListener(
"click",
clickHandler
);



Remove:


button.removeEventListener(
"click",
clickHandler
);



=====================================================
Removing Elements Using Events
=====================================================


*/


// document.getElementById("images")
// .addEventListener("click",(event)=>{


//     console.log(event.target.parentNode);


//     let removeIt = event.target.parentNode;


//     removeIt.remove();


// });

// or I can do - this keep li but not the image
document.getElementById("images")
.addEventListener("click",(event)=>{

    console.log(event.target.parentNode);

    event.target.parentNode.removeChild(event.target);

});

/*

event.target

↓

Clicked element


parentNode

↓

Parent element


remove()

↓

Removes element from DOM



Example:


Click image:


event.target

<img>


parentNode

<li>


remove()


<li> deleted



=====================================================
Important Event Methods and Properties
=====================================================



METHODS:

addEventListener()

removeEventListener()

preventDefault()

stopPropagation()

stopImmediatePropagation()



PROPERTIES:

event.target

event.currentTarget

event.type

event.key

event.clientX

event.clientY



=====================================================
Mental Model
=====================================================


User action

      ↓

Browser creates event object

      ↓

Capturing phase

      ↓

Target phase

      ↓

Bubbling phase

      ↓

Callback function executes



Events are simply:

Something happened

+

Tell JavaScript what to do



*/