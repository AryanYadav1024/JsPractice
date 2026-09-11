const user = {
    _email: "akljdf;lkasjfd",
    _password: "aksdjfl",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}


 
const tea = Object.create(user)
console.log(tea.email);
