const heading = document.querySelector("h1")

heading.addEventListener("click",event=>{
    window.location.href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events";
})


/* 
    this is onclick event
    but it is not recommended to use this method because it will override 
    any other onclick event that is already set on the element.
   
    better to use addEventListener method to add multiple event listeners to the same element.
    event listeners also provide propagation and bubbling features which are not available in onclick event.

*/

// document.getElementById("girl").onclick = ()=>{
//     alert("girl clicked");
// }

// third parameter is optional and it is used to specify whether the event should be captured or bubbled.
// it is by default set to false which means the event will be bubbled up to the parent elements.
// meaning if i set it as true and set eventlistener at parent element then the event will be captured 
// at parent element and will not be bubbled up to the child elements.

document.getElementById("images").addEventListener("click",(event)=>{
    console.log(event.currentTarget);
    console.log(event.target);
    console.log("ul clicked");
});

document.getElementById("girl").addEventListener("click",(event)=>{
    console.log(event.currentTarget);
    console.log(event.target);
    console.log("girl clicked");
});

document.getElementById("castle").addEventListener("click",(event)=>{
    console.log(event.currentTarget);
    console.log(event.target);
    console.log("castle clicked");
    event.stopPropagation(); // this will stop the event from bubbling up to the parent elements.
    /* this stops propagation of the event to the parent elements. so if i click on castle then only 
       castle clicked will be printed and not ul clicked if ul clicked was set to capture during bubling phase.
    */
});

/* 
    The third parameter of addEventListener is used to specify whether the event should be captured or bubbled.
    event capturing - top to bottom 
    event bubbling - bottom to top
    Capturing and bubbling are both built into the browser's event system. 
    They happen for every event (if the event supports propagation), but your code decides which phase your listener runs in.


    what happens is when you click on on li the browser first goes down the DOM tree to find the target element and then it goes up the DOM tree to find the parent elements.
    now true or false just decides at which phase should your event listener should be called. if it is true then it will be called at capturing phase and if it is false then it will be called at bubbling phase.
*/
