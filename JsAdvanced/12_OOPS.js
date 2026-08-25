/*
    
    OOPs (Object Oriented Programming)

    OOPs is a programming paradigm where we structure our code
    around objects instead of only functions and logic.

    Real world analogy:

    A car is an object.

    Properties:
        - color
        - model
        - engine

    Methods:
        - start()
        - stop()
        - accelerate()


    In programming:

    Object = properties + methods


*/


/*

    Are there classes in JavaScript?

    Yes.

    Classes were introduced in ES6 (2015).


    But important point:

    JavaScript is NOT originally a class-based language.

    JavaScript is prototype-based.


    Classes in JS are just syntactic sugar over prototypes.

    Meaning:

    Behind the scenes JavaScript still uses prototypes.

    Class syntax only gives developers a cleaner way to write
    constructor functions and prototype inheritance.



*/


/*

    Object creation methods in JavaScript:


    1. Object Literal

        Creating object directly.


    2. Constructor Function

        A special function used to create multiple objects.


    3. Prototypes

        Mechanism through which objects inherit properties
        and methods from other objects.


    4. Classes

        Cleaner syntax introduced in ES6.


    5. Instances

        Individual objects created from constructors/classes.


*/



// Object in JS
// Collection of properties and methods


// Object Literal syntax

const user = {

    // properties

    name: "aryan",

    class: "g25",

    loginCount: 8,

    signedIn: true,


    // method

    getUserDetails: function () {


        /*
        
            Inside an object method,
            "this" refers to the object that is calling the method.


            Here:

            user.getUserDetails()


            this = user object


        */


        console.log("got user detail from database");


        console.log(`${this.name}`);


        /*
        
            this.name becomes:

            user.name


            Output:

            aryan

        */


        console.log(this);


        /*
        
            this prints complete user object:


            {
                name:"aryan",
                class:"g25",
                loginCount:8,
                signedIn:true,
                getUserDetails:function
            }


        */


    }

}


console.log(user.getUserDetails());



/*

    Why output of console.log(user.getUserDetails())
    is undefined?


    Because:

    getUserDetails() does not return anything.


    It only performs:

        console.log()


    Every function that doesn't explicitly return something
    returns undefined automatically.


*/



console.log(this);


/*

    Global this depends on environment.


    Browser:

        this = window object


    Node.js:

        top-level this = module object {}



*/





/*

    Constructor Function


    Constructor functions are used when we want to create
    multiple objects with the same structure.


    Example:

    Instead of manually creating:

        user1
        user2
        user3


    We create a blueprint:

        User()


    and generate objects from it.


*/


function User(username, logincount, isLoggedIn){


    /*
    
        Here "this" represents the new object
        created by the new keyword.


    */


    this.username = username;


    this.loginCount = logincount;


    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    };



    /*
    
        Explicit return is not required.

        When using new keyword,
        JavaScript automatically returns this object.


    */


    return this;

}




/*

    new keyword does 4 things:


    1. Creates an empty object


        {}


    2. Connects object with constructor prototype



    3. Sets "this" to that object



    4. Returns the object



*/



const userOne = new User("aryan",9,true);


// new keyword creates an empty object - instance


/*
    
    Internally:

    const userOne = {}


    then:

    userOne.username = "aryan"
    userOne.loginCount = 9
    userOne.isLoggedIn = true



    Result:


    userOne = {

        username:"aryan",
        loginCount:9,
        isLoggedIn:true

    }


*/



/*

    Without new keyword:


*/


const userTwo = User("chai",2,false);


/*

    Here:

        User()


    is just a normal function call.


    No new object is created.


    "this" depends on environment.


    In browser:

        this = window


    So properties get added to global object.


    Example:

        window.username = "chai"


    This is called global pollution.



    In strict mode:

        this = undefined


    and code will throw error.



*/



console.log(userOne);


console.log(userTwo);

console.log(userOne.greeting);
console.log(userTwo.greeting);

console.log(userOne.constructor); // this property is just a reference to self

/*

    Constructor function vs Object Literal


    Object Literal:


    const user = {

        name:"aryan"

    }


    Good when:

        - Creating one object


    Problem:

        - Repeating code for many objects



    Constructor Function:


    function User(name){

        this.name = name;

    }


    Good when:

        - Creating many similar objects



*/



/*

    Instance:

    An object created from a constructor/class.


    Example:


    User = blueprint


    userOne = instance


    userTwo = instance



    Similar to:

    
    Class = blueprint of house

    Object = actual house built from blueprint



*/



/*

    Important:

    JavaScript does not copy methods into every object.

    It uses prototypes.

    Prototype allows objects to share methods,
    saving memory.


    Example:


    User.prototype.login = function(){

        console.log("login");

    }



    Every User object can access login(),
    but only one copy exists.


*/


