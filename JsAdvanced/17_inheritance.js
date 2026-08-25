class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
}

// This user may have many forms like in LMS - teacher student 

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
    addCourse(){
        console.log(`New Course added by: ${this.username}`)
    }
}

const teacher = new Teacher("teacher","@teacher.com")
teacher.addCourse()

const u = new User("aryan")
u.logMe();


// to check instance so we have istanceof

console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);