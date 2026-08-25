function setUsername(username){

    // complex DB call check

    // `this` refers to the object passed through .call()
    this.username = username;

}

function createUser(username,email,password){

    // .call() lets us control what `this` refers to
    setUsername.call(this,username);

    /*
        Why do we need .call()?

        createUser and setUsername have separate execution contexts.

        `this` is NOT automatically passed to the function we call.

        So we use .call(this) to give setUsername
        the same `this` object that createUser is using.

        Without .call(), setUsername would have its own
        `this` value.

        .call(this, username) means:

        "Execute setUsername and make its `this`
         point to the current object."
    */

    this.email = email;
    this.password = password;

}

const chai = new createUser(
    "chai",
    "aryan@gmail.com",
    "234j1k4l"
);

console.log(chai);
console.log(chai.username);