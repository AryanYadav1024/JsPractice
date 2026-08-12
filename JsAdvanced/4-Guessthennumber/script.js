const form = document.querySelector('#gameForm');
const previous = [];
const resultMessage = document.querySelector('#resultText');
const previousGuesses = document.querySelector('#guessList');
const attemptsCount = document.querySelector('#attemptsCount');
const num = Math.floor(Math.random()*100) + 1;
const restart = document.querySelector('#resetButton')
console.log(num);
form.addEventListener("submit",event=>{
    event.preventDefault();
    const data = new FormData(form);
    const guess = Number(data.get("guess"));
    previous.push(guess);
    if(guess > num){
        resultMessage.innerHTML = "Lower";
    }else if(guess < num){
        resultMessage.innerHTML = "Higher";
    }else{
        resultMessage.innerHTML = "YoU Win MOTHERFUCKER ✅";
        document.body.style.backgroundColor = "green";
        form.querySelector("button").disabled=true;
        return;
    }
    previousGuesses.innerHTML=`${[...previous]}`;
    attemptsCount.innerHTML = `${(Number(attemptsCount.innerHTML) - 1)}`;
    if((Number)(attemptsCount.innerHTML)== 0){
        resultMessage.innerHTML = "You lose Restart😭";
        document.body.style.backgroundColor="red";
        form.querySelector("button").disabled=true;
        return;
    }
})

restart.addEventListener("click",event=>{
    location.reload();
})
