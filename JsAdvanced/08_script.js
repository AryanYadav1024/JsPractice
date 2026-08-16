const aryan = () => {
    console.log("aryan");
};

const change = setTimeout(() => {
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

let factorialDisplay = null;
const startBtn = document.querySelector("#start");

startBtn.addEventListener("click", () => {
    if (factorialDisplay) return;
    console.log("started");

    let i = 0;
    factorialDisplay = setInterval(() => {
        i += 1;
        const value = factorial(i);
        console.log(value);

        const p = document.createElement("p");
        p.innerHTML = `${value}`;
        document.body.appendChild(p);
        document.body.style.textAlign = "center";
    }, 1000);
});

const stopBtn = document.querySelector("#stop");
stopBtn.addEventListener("click", () => {
    console.log("ended");

    if (factorialDisplay) {
        clearInterval(factorialDisplay);
        factorialDisplay = null;
    }
});
