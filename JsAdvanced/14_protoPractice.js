/*
    
    PROTOTYPES IN JAVASCRIPT


    JavaScript is prototype-based.

    If JavaScript does not find a property/method
    directly on an object, it follows the object's
    [[Prototype]] link and searches there.


    Example:

        object
           ↓
        [[Prototype]]
           ↓
        another object
           ↓
        [[Prototype]]
           ↓
        another object
           ↓
          null


    JavaScript keeps searching until:

        1. Property is found

    OR

        2. It reaches null


    This process is called:

        PROTOTYPE CHAIN



*/


/*
    
    String example


*/


let myName = "aryan.     ";


/*

    myName is a primitive string.

    But we can still do:

        myName.toUpperCase()
        myName.trim()
        myName.length


    because JavaScript provides the String wrapper
    and String.prototype.

    Conceptually:

        myName
           ↓
        String.prototype
           ↓
        Object.prototype
           ↓
        null



*/


String.prototype.truelength = function(){

    /*
    
        We are adding a new method to String.prototype.

        This means String values/objects can access
        this method through the prototype chain.


        IMPORTANT:

        We are NOT copying this function into
        every string.

        There is one shared method on:

            String.prototype



    */


    /*
    
        "this" refers to the string value/object
        on which the method was called.

        Example:

            myName.truelength()


        Therefore:

            this = myName



    */


    return this.trim().length;


    /*
    
        this.trim()

        removes whitespace from the beginning
        and end of the string.


        Example:

            "aryan.     "

        becomes:

            "aryan."


        Then:

            .length

        gives:

            6



    */

}



console.log(myName.truelength());



/*

    Output:

        6



    What happens internally?


        myName.truelength()


        JavaScript searches:

            Does myName have truelength?
                    ↓
                   No
                    ↓
            Search String.prototype
                    ↓
                   Yes
                    ↓
            Execute the function


        During the function call:

            this = myName



*/





/*

    IMPORTANT:

    We can technically modify built-in prototypes like:

        String.prototype
        Array.prototype
        Object.prototype


    But this is generally discouraged in production code.

    Why?

        - Can cause naming conflicts
        - Can break other libraries
        - Changes global behaviour
        - Can create difficult-to-debug problems


    It is useful for learning prototypes,
    but normally we avoid modifying built-in prototypes.



*/





/*
    
    __proto__


    We can also manually create a prototype relationship.

    __proto__ is an older accessor for an object's
    internal [[Prototype]] relationship.


    Example:


*/


const user = {

    name: "aryan",

    email: "aryan@google.com"

}



/*

    user is an object.


    Conceptually:


        user
          ↓
        [[Prototype]]
          ↓
        Object.prototype
          ↓
        null



*/





const Teacher = {

    name: "teacher",

    subject: "JS",


    /*
    
        We could write:

            __proto__: user


        inside the object literal.

        This would make:

            Teacher
                ↓
               user


        Meaning:

        If JavaScript cannot find a property on Teacher,
        it will search user.



    */


    // __proto__: user

}



/*

    After creation, Teacher initially has:

        Teacher
           ↓
        Object.prototype
           ↓
        null



    Teacher does NOT automatically inherit
    properties from user.

*/





/*

    We can manually connect Teacher to user.


*/


Object.setPrototypeOf(Teacher, user);


/*

    Now:

        Teacher
           ↓
          user
           ↓
        Object.prototype
           ↓
          null



    This means:

        Teacher's [[Prototype]] = user



*/





/*

    Now let's understand property lookup.


    Teacher has:

        name
        subject


    user has:

        name
        email



*/


console.log(Teacher.name);


/*

    JavaScript searches:


        Teacher
           ↓
        name found!


    Therefore:

        "teacher"


    It does NOT continue to user because
    it already found name on Teacher.



*/


console.log(Teacher.email);


/*

    JavaScript searches:


        Teacher
           ↓
        Does Teacher have email?

        NO


           ↓


        user
           ↓
        Does user have email?

        YES


    Therefore:

        "aryan@google.com"



*/





/*

    IMPORTANT CONCEPT:


    The first matching property wins.


    Example:


        Teacher.name

    Teacher has:

        name = "teacher"


    user has:

        name = "aryan"



    JavaScript chooses:

        Teacher.name


    because it finds the property on Teacher first.



*/





/*

    __proto__ vs Object.setPrototypeOf()


    We could write:


        Teacher.__proto__ = user;


    But modern JavaScript prefers:


        Object.setPrototypeOf(Teacher, user);



    Why?


    Because Object.setPrototypeOf() clearly communicates
    that we are changing the object's [[Prototype]].


    For reading:


        Object.getPrototypeOf(Teacher)



    is preferred over:


        Teacher.__proto__



*/





/*

    VERY IMPORTANT:


    [[Prototype]] and .prototype are NOT the same thing.



    [[Prototype]]:

        An internal link on an object.

        It answers:

            "Where should JavaScript search next?"



    .prototype:

        A normal property, especially important
        on constructor functions.

        It is commonly used as the object that
        instances created with new will inherit from.



*/





/*

    Example:


        function User(){}


        User.prototype


    is an object.



    If we create:


        const aryan = new User();



    then:


        aryan
          ↓
        User.prototype



    because new connects the instance's
    [[Prototype]] to User.prototype.



*/





/*

    But with our Teacher example:


        Object.setPrototypeOf(Teacher, user)



    we directly create:


        Teacher
           ↓
          user



    No class required.

    No constructor required.

    No new required.



    This is one of the reasons JavaScript is
    fundamentally prototype-based.



*/





/*

    PROTOTYPAL INHERITANCE


    We can make one object delegate property lookup
    to another object.


        Teacher
           ↓
          user


    If Teacher doesn't have something,
    JavaScript checks user.


    If user doesn't have it,
    JavaScript continues:


        user
          ↓
        Object.prototype



*/





/*

    COMPLETE CHAIN:


        Teacher
           |
           | [[Prototype]]
           ↓
          user
           |
           | [[Prototype]]
           ↓
        Object.prototype
           |
           ↓
          null



*/





/*

    Same basic idea with arrays:


        const arr = [1,2,3];


        arr
         ↓
        Array.prototype
         ↓
        Object.prototype
         ↓
        null



    Therefore:


        arr.push()


    can be found on:


        Array.prototype



    And:


        arr.toString()


    can eventually be found on:


        Object.prototype



*/





/*

    SAME FUNDAMENTAL MECHANISM:


    String:

        myName
           ↓
        String.prototype
           ↓
        Object.prototype
           ↓
        null



    Array:

        arr
           ↓
        Array.prototype
           ↓
        Object.prototype
           ↓
        null



    Manual object inheritance:

        Teacher
           ↓
          user
           ↓
        Object.prototype
           ↓
        null



    User constructor:

        aryan
           ↓
        User.prototype
           ↓
        Object.prototype
           ↓
        null



    Everything is based around the same idea:


        OBJECT
           ↓
        [[Prototype]]
           ↓
        ANOTHER OBJECT
           ↓
        [[Prototype]]
           ↓
        ...



*/





/*

    FINAL MENTAL MODEL


    .prototype

        ↓

    A property, commonly found on constructor
    functions, containing an object that can be
    used as the prototype for instances.



    [[Prototype]]

        ↓

    Internal link from one object to another object.

    It tells JavaScript where to continue
    property lookup.



    Prototype chain

        ↓

    Repeatedly following [[Prototype]] links
    until the property is found or null is reached.



    Object.setPrototypeOf()

        ↓

    Manually changes an object's [[Prototype]].



    __proto__

        ↓

    Older accessor for interacting with
    an object's [[Prototype]].



    Prototype inheritance

        ↓

    One object can access properties/methods
    from another object through the prototype chain.



*/