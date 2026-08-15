const clock = document.getElementById("clock");

const sBtn = document.querySelector("#start");
const eBtn = document.querySelector("#stop");

let interval;
let startTime;
let endTime;

sBtn.addEventListener("click", () => {
    startTime = Date.now(); // current timestamp in ms

    interval = setInterval(() => {
        let d = new Date();
        clock.innerHTML = d.toLocaleTimeString();
    }, 1000); // runs every 1 second
});


eBtn.addEventListener("click", () => {
    clearInterval(interval);

    endTime = Date.now();

    let diff = endTime - startTime; // difference in milliseconds

    let totalSeconds = Math.floor(diff / 1000);

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    clock.innerHTML = `h:${hours} m:${minutes} s:${seconds}`;
});