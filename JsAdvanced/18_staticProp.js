class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const userOne = new User("aryan");
// console.log(userOne.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const userT = new Teacher("teacher","@teacher.com");
// console.log(userT.createId());
userT.logMe();