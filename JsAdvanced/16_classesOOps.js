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
console.log("\nclass method: \n");
console.log(userOne.encyptPassword());
console.log(userOne.changeUserName());
console.log(userOne);


// If I didn't have class how would I do it

console.log("\nfunction method:\n");
function user(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encyptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new user("meow","@meow.com","meowmeow")
console.log(userTwo.changeUserName())
console.log(userTwo.encyptPassword())