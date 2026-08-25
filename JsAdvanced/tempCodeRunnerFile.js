class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encyptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User("aryan","@gmail.com","pass")
console.log(userOne.encyptPassword());
console.log(userOne.changeUserName());
console.log(userOne);

