const aryan = () => {
    console.log("aryan");
};

const change =
setTimeout(() => {
    aryan();
    document.querySelector("h1").innerHTML = "meow";
}, 1000);

// this needs reference to stop
// clearTimeout(change);


const factorial = function fact(n) {
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
};

let factorialDisplay;
const startBtn = document.querySelector("#start");
startBtn.addEventListener("click",()=>{
    if(coloChanger) return;
    console.log("started");
    let i = 0;
    factorialDisplay =
        setInterval(() => {
            console.log(factorial(++i));
            const p = document.createElement("p");
            p.innerHTML=`${factorial(++i)}`;
            document.body.appendChild(p)
            document.body.style.textAlign="center";
        }, 1000);
})

const stopBtn = document.querySelector("#stop");
stopBtn.addEventListener("click",(event)=>{
    console.log("ended");
    setTimeout(() => {
    clearInterval(factorialDisplay);
    }, 1);
})
