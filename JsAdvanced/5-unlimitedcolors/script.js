const stBtn = document.querySelector('#start');
const etBtn = document.querySelector('#stop');

const arr = ["red","blue","green","pink","lime","gray","orange"];
const old = getComputedStyle(document.body).backgroundColor;
let coloChanger;
stBtn.addEventListener("click",(event)=>{
    if(coloChanger) return;
    let i= 0;
    coloChanger=
    setInterval(() => {
        if(i < arr.length){
            document.body.style.backgroundColor=`${arr[i++]}`
        }else{
            i = 0;
        }
    }, 500);
});
etBtn.addEventListener("click",(event)=>{
    clearInterval(coloChanger);
    coloChanger=null;
    document.body.style.backgroundColor=old;
});