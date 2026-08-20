const form = document.querySelector('#todoForm');
const addTask = document.querySelector('#addTask')
const ul = document.querySelector("#todoList");
const deleteAll = document.querySelector('#clearAll');
const clearAllCheck = document.querySelector('#deleteAll')
const clearAllYes = document.querySelector("#clearAllYes");
const clearAllNo = document.querySelector("#clearAllNo");
// tasks array of objects that I will store in localStorage
let tasks = JSON.parse(localStorage.getItem("tasks"))||[];

function displayTask(){
    ul.innerHTML="";
    tasks.forEach(obj =>{
        ul.innerHTML += `<li>${obj.task}</li>`;
    })
}
displayTask();
addTask.addEventListener("click",(event)=>{
    event.preventDefault();
    const data = new FormData(form);
    const task = String(data.get("task").trim());
    if(!task) return;
    const taskObj = {
        task: task
    }
    tasks.push(taskObj);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    displayTask();
    form.reset();
    addTask.disabled = true;
    setTimeout(() => {
        addTask.disabled = false;
    }, 3000);
})

deleteAll.addEventListener("click",(event)=>{
    clearAllCheck.style.display = "flex";
})
clearAllYes.addEventListener("click",()=>{
    tasks=[];
    localStorage.removeItem("tasks");
    displayTask();
    clearAllCheck.style.display = "none";  
})
clearAllNo.addEventListener("click",()=>{
    clearAllCheck.style.display = "none";
})