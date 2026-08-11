// const body = document.querySelector('body');
// const buttons = document.querySelectorAll('.color-button');

// buttons.forEach(btn =>{
//     btn.addEventListener('click',event=>{

//         // why didn't we use event.target.style.color
//         // because this only works for inline html 
//         // for this we need getComputedStyle from css sheet cssom
//         const styles = getComputedStyle(event.target);
//         document.body.style.backgroundColor=
//         styles.backgroundColor;
//     })
// })


/* 
so getComputedStyle is not from cssom but from 
computed styles layer after the render tree
                HTML
                 |
                 ↓
                DOM Tree
                 |
                 |
                CSS
                 |
                 ↓
                CSSOM Tree
                 |
                 ↓
                Browser combines DOM + CSSOM
                 |
                 ↓
                Render Tree
                 |
                 ↓
                Computed Styles
                 |
                 ↓
                Layout + Paint
*/


// another method

/* 


body {
  --bg-color: white;
  background-color: var(--bg-color);
}suppose this is the css



btn.addEventListener('click', event => {
    const styles = getComputedStyle(event.target);

    document.body.style.setProperty(
        "--bg-color",
        styles.backgroundColor
    );
});
*/




// the best method - event delegation and event bubbling 

const body = document.querySelector('.color-changer');
// get the parent attach event listner here
// imagine 100 children running foreach through node list reduces performance
// more memory so instead event delegation
// but group-accordingly as it recives clicks from everything inside parent even heading or paragraph
// this is sites put transparent pages above with settimeout and evenlistners 
// this is how scammers use eventlistners - they add a transparent overlay 
// add settimeout repeat and event.target
// window.location.href="some-site.com";


body.addEventListener('click',event=>{
    const style = getComputedStyle(event.target);
    document.body.style.backgroundColor=
    style.backgroundColor;
})
