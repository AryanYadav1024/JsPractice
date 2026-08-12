const clock = document.getElementById("clock");


// now how do i run this continously ?
// we have a js method called setInterval()
// give me method and interval after how much i should run it continously


setInterval(() => {
    let date = new Date();
    clock.innerHTML=`${date.toLocaleTimeString()}`;
}, 1000);