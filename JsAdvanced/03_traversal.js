/*
=====================================================
DOM Traversal - Parent, Children, Siblings
=====================================================


HTML:

<ul class="parent">

    <li class="day">Monday</li>
    <li class="day">Tuesday</li>
    <li class="day">Wednesday</li>
    <li class="day">Thursday</li>

</ul>



DOM Tree:


          ul.parent
              |
    -----------------------
    |        |       |     |
   li       li      li    li
 Monday  Tuesday  Wed  Thursday



DOM Traversal:

Moving between DOM objects:

Parent → Child

Child → Parent

Child → Sibling



=====================================================
Selecting Parent
=====================================================

*/


const days = document.querySelector(".parent");


/*

querySelector()

Returns first element matching CSS selector.


.parent

means:

Select element with class "parent"



=====================================================
.children
=====================================================


*/


console.log(days.children);


/*

.children

Returns all direct child ELEMENTS.


Returns:

HTMLCollection


HTMLCollection:

- Array-like object
- Has index
- Has length
- Contains DOM objects
- Not a real Array


Example:

days.children[0]


returns:

<li class="day">Monday</li>



Cannot use:

days.children.map() ❌

days.children.filter() ❌



Convert:

Array.from(days.children)

or

[...days.children]



*/


Array.from(days.children).forEach((day)=>{

    console.log(day.textContent);

    day.style.borderRadius = "10px";

});


/*

Flow:


HTMLCollection

      ↓

Array.from()

      ↓

Array

      ↓

Array methods



=====================================================
Accessing Specific Children
=====================================================


*/


days.children[0].style.backgroundColor = "red";
days.children[1].style.backgroundColor = "green";
days.children[2].style.backgroundColor = "blue";
days.children[3].style.backgroundColor = "orange";


/*

Index starts from 0:

0 → First element

1 → Second element

2 → Third element



=====================================================
Child Navigation
=====================================================


*/


console.log(days.firstElementChild);


/*

firstElementChild

Returns first child element.


Example:

Monday li


*/


console.log(days.lastElementChild);


/*

lastElementChild

Returns last child element.


Example:

Thursday li


*/


/*

=====================================================
Parent Navigation
=====================================================


*/


const dayOne = document.querySelector(".day");


console.log(dayOne.parentElement);


/*

parentElement

Moves from child to parent.


Flow:


<li class="day">

        ↑

<ul class="parent">



*/


console.log(dayOne.parentElement.innerText);


/*

Output:

Monday
Tuesday
Wednesday
Thursday


=====================================================
Sibling Navigation
=====================================================


Siblings are elements having the same parent.


Example:


<li>Monday</li>
<li>Tuesday</li>


Both are siblings.



*/


console.log(dayOne.nextElementSibling);


/*

nextElementSibling

Moves to next sibling.


Output:

<li class="day">
Tuesday
</li>


*/


console.log(dayOne.previousElementSibling);


/*

previousElementSibling

Moves to previous sibling.


For first element:

returns null


because no previous sibling exists.



=====================================================
More Useful DOM Traversal Methods
=====================================================



1. children

Parent → Children


element.children



2. childElementCount

Number of child elements


element.childElementCount



3. parentElement

Child → Parent


element.parentElement



4. firstElementChild

First child


element.firstElementChild



5. lastElementChild

Last child


element.lastElementChild



6. nextElementSibling

Next sibling


element.nextElementSibling



7. previousElementSibling

Previous sibling


element.previousElementSibling



=====================================================
Avoid These (Usually)
=====================================================


childNodes - react is mostly made from this 

Returns ALL nodes:

- elements
- text spaces
- comments


Example:

<div>
    Hello
</div>


childNodes includes:

text node
div element


Usually use:

children


instead.


*/
console.log("Nodes: ",parent.childNodes);
/*
=====================================================
Mental Model
=====================================================


DOM is a tree of JavaScript objects.


HTML

 ↓

DOM Objects

 ↓

Select object

 ↓

Traverse tree

 ↓

Modify properties



Every element knows:

- Who is my parent?
- Who are my children?
- Who are my siblings?



*/