// // for form 
// const parent = document.querySelector('#bmiform');
// console.log(parent);
// const weight = document.querySelector('#weight');
// const height = document.querySelector('#height');
// const result = document.querySelector('#result')
// // for form we use event type as submit 
// // but it follows a default behaviour - submit send data to server and reload
// // to stop that we have prevenDefault();
// parent.addEventListener("submit",event =>{
//     event.preventDefault();
//     const bmi = weight.value/ ((height.value/100)**2);
//     result.appendChild(document.createTextNode(bmi.toFixed(3)));
// })




// even better approach - formData api 
// it is a built in browser api that lets you get form data object
// it return and object that has key value pair 
// the key name is the name of input tag 

const form = document.querySelector('#bmiform');

form.addEventListener("submit",event =>{
    event.preventDefault();
    const data = new FormData(event.target);
    const result = document.querySelector('#result');
    const weight = data.get("weight");
    const height = data.get("height");
    if(height < 0 || weight < 0){
        result.innerHTML = "not a vaid INPUT";
    }else{
        result.innerHTML = `Your BMI: ${(weight/((height*height)/10000)).toFixed(2)}`
    }
})