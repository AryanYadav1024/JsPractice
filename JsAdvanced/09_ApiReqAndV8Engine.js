/* 
    what is api?
    - Full form - Apllication Programming Interface
    - it is just a set of functions and procedures that allow the creation of applications
      which access the features or data of an operating system, application, or other service.
    In simple terms it is just a set of protocls/rules , talking language between two applications, systems 
    or services, software components to communicate with each other.
    FrontEnd - API - BackEnd
    JavaSpring - API - ReactJs or database etc 
 */
const requestUrl =  'https://api.github.com/users/AryanYadav1024';
let xhr = new XMLHttpRequest(); 
xhr.open('GET',requestUrl);
console.log(xhr.readyState);
xhr.onreadystatechange = function (){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        const data = JSON.parse(this.responseText);
        console.log(data);
        console.log(typeof data);
        console.log(data.followers);
    }
}
xhr.send();

