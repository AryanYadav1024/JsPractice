const body = document.querySelector('body');
const buttons = document.querySelectorAll('.color-button');

buttons.forEach(btn =>{
    btn.addEventListener('click',event=>{

        // why didn't we use event.target.style.color
        // because this only works for inline html 
        // for this we need getComputedStyle from css sheet cssom
        const styles = getComputedStyle(event.target);
        document.body.style.backgroundColor=
        styles.backgroundColor;
    })
})

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