const button = document.querySelector('#getData');
const fCount = document.querySelector('#followerCount');
const card = document.querySelector('.card.poster-card');
console.log(card);
button.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    const requestURL = 'https://api.github.com/users/hiteshchoudhary';

    xhr.open('GET', requestURL);

    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);

        const img = document.createElement('img');
        img.src = data.avatar_url;

        fCount.textContent = data.followers;

        card.appendChild(img);
    };

    xhr.send();

    button.disabled = true;
    setTimeout(() => { // add 5 seconds gap before user can request data again
        // this is how leetcode and others stop frequent submission to not overload the system
        button.disabled = false;
    }, 5000);
});

//avatar_url: followers