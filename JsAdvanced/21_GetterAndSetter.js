/*
    GETTERS AND SETTERS
    ====================

    Getter and setter allow us to control what happens when
    someone READS or WRITES a property.

    Normally:

        user.email = "abc@gmail.com";

    simply stores the value.

    But with a setter, JavaScript can intercept that assignment
    and run our own logic.
*/


class User {

    constructor(name, email) {

        this.name = name;


        /*
            IMPORTANT:

                this.email = email;

            looks like a normal property assignment.

            BUT because we have created a setter called "email",
            JavaScript does NOT simply create:

                this.email = email

            Instead, it finds the setter:

                set email(email)

            and calls it.

            So:

                this.email = email;

            effectively causes:

                set email(email) {
                    this._email = email;
                }

        */

        this.email = email;

    }


    display() {

        console.log(`Username: ${this.name}`);

        console.log(`Email: ${this.email}`);


        /*
            Again, this looks like normal property access:

                this.email

            But because "email" has a getter, JavaScript calls:

                get email()

            So this:

                this.email

            effectively becomes:

                this._email.toUpperCase();

        */

    }


    set email(email) {

        /*
            This is the SETTER.

            It runs whenever somebody does:

                object.email = something;


            For example:

                aryan.email = "hello@gmail.com";


            JavaScript sees that "email" has a setter and
            executes this method.

        */


        this._email = email;


        /*
            Why "_email"?

            Because we DON'T want:

                this.email = email;


            inside the setter.

            Why?

            Because "email" itself has a setter.

            So this would happen:

                this.email = email
                      |
                      v
                setter runs
                      |
                      v
                this.email = email
                      |
                      v
                setter runs
                      |
                      v
                this.email = email
                      |
                      v
                    ...

            The setter keeps calling itself.

            Eventually:

                Maximum call stack size exceeded


            So we store the actual value in a DIFFERENT property:

                this._email

            "_" is only a naming convention.

            JavaScript does NOT automatically make "_email"
            private just because it starts with "_".
        */

    }


    get email() {

        /*
            This is the GETTER.

            It runs whenever somebody READS:

                object.email


            So:

                aryan.email

            causes:

                get email()

            to execute.
        */


        return this._email.toUpperCase();


        /*
            Suppose:

                this._email = "meow@gmail.com"

            Then:

                aryan.email

            becomes:

                "MEOW@GMAIL.COM"
        */

    }


    /*
        IMPORTANT:

        Getter and setter are NOT ordinary methods.

        These:

            get email()
            set email()

        allow us to make "email" behave like a property
        while executing code whenever it is read or written.
    */

}


const aryan = new User("aryan", "meow@gmail.com");


/*
    Let's follow exactly what happens here.

    new User(...)
          |
          v
    JavaScript creates a new User object
          |
          v
    constructor() runs
          |
          v
    this.name = "aryan"
          |
          v
    this.email = "meow@gmail.com"
          |
          v
    setter "email" runs
          |
          v
    this._email = "meow@gmail.com"


    So the resulting object contains roughly:

        aryan
          |
          +-- name  -> "aryan"
          |
          +-- _email -> "meow@gmail.com"


    Notice:

        email

    does NOT become a normal data property on the object.

    Instead, "email" is an accessor property defined through
    the class prototype.
*/


aryan.display();


/*
    display() runs:

        this.name
            -> "aryan"


        this.email
            |
            v
        getter runs
            |
            v
        this._email.toUpperCase()
            |
            v
        "MEOW@GMAIL.COM"


    Output:

        Username: aryan
        Email: MEOW@GMAIL.COM
*/


/*
    ============================================================
    THE MOST IMPORTANT IDEA
    ============================================================

    Getter:

        object.email

            ↓

        get email()

            ↓

        return this._email.toUpperCase();


    Setter:

        object.email = "abc@gmail.com"

            ↓

        set email(email)

            ↓

        this._email = email;


    So:

        GETTER = controls reading

        SETTER = controls writing
*/


/*
    ============================================================
    WHY DO WE USE THEM?
    ============================================================

    Suppose we didn't use a getter.

        aryan.email

    would directly expose the stored value.


    With a getter:

        aryan.email

    can return a transformed/calculated value.


    For example:

        return this._email.toUpperCase();


    We can also perform validation:

        set email(email) {

            if (!email.includes("@")) {
                console.log("Invalid email");
                return;
            }

            this._email = email;
        }


    Now the outside world can still write:

        aryan.email = "hello@gmail.com";

    but the class controls HOW that data is stored.
*/


/*
    ============================================================
    VERY IMPORTANT CORRECTION
    ============================================================

    You wrote:

        "If you have created getter setter you cannot do it
         through constructor"

    This is NOT correct.

    You absolutely CAN use the property through the constructor.

        constructor(name, email) {

            this.email = email;

        }


    In fact, this is exactly what our code does.

    The constructor assignment:

        this.email = email;

    calls the setter.

    So the flow is:

        constructor
             |
             v
        this.email = email
             |
             v
        setter
             |
             v
        this._email = email
*/


/*
    ============================================================
    THE ACTUAL STACK OVERFLOW PROBLEM
    ============================================================

    The problem occurs if we write:

        set email(email) {

            this.email = email;

        }


    Watch what happens:

        constructor
            |
            v
        this.email = email
            |
            v
        setter
            |
            v
        this.email = email
            |
            v
        setter
            |
            v
        this.email = email
            |
            v
        setter
            |
            v
           ...


    Every setter call creates another function call.

    The call stack keeps growing:

        stack
        ┌──────────────┐
        │ setter()     │
        ├──────────────┤
        │ setter()     │
        ├──────────────┤
        │ setter()     │
        ├──────────────┤
        │ setter()     │
        ├──────────────┤
        │ setter()     │
        └──────────────┘

            ↓

        Maximum call stack size exceeded


    So "_email" exists to break that recursion.
*/


/*
    ============================================================
    WHAT IS ACTUALLY HAPPENING UNDER THE HOOD?
    ============================================================

    Class:

        class User {

            get email() {}
            set email() {}

        }


    creates the accessor property on:

        User.prototype


    Conceptually:

        User.prototype
              |
              +-- email
                    |
                    +-- get
                    +-- set


    When we do:

        aryan.email

    JavaScript looks for "email".

    It doesn't find a normal own property called "email"
    on aryan.

    It continues through the prototype chain:

        aryan
          |
          v
        User.prototype
          |
          v
        email accessor
          |
          v
        getter runs


    Similarly:

        aryan.email = "abc"

    finds the setter on User.prototype and executes it.
*/


/*
    ============================================================
    DATA PROPERTY vs ACCESSOR PROPERTY
    ============================================================

    Normal property:

        const user = {
            email: "abc@gmail.com"
        };


    This is a DATA PROPERTY.

    It has:

        value
        writable
        enumerable
        configurable


    Getter/setter property:

        get email() {}
        set email() {}


    This is an ACCESSOR PROPERTY.

    Its descriptor conceptually contains:

        get
        set
        enumerable
        configurable


    So there are two different kinds of properties:

        DATA PROPERTY
            |
            +-- value
            +-- writable
            +-- enumerable
            +-- configurable


        ACCESSOR PROPERTY
            |
            +-- get
            +-- set
            +-- enumerable
            +-- configurable
*/


/*
    ============================================================
    YOU CAN SEE THIS YOURSELF
    ============================================================
*/

console.log(
    Object.getOwnPropertyDescriptor(User.prototype, "email")
);


/*
    You should see something conceptually like:

        {
            get: [Function: get email],
            set: [Function: set email],
            enumerable: false,
            configurable: true
        }


    Notice something beautiful here:

        email doesn't have:

            value
            writable

    because "email" is an ACCESSOR PROPERTY.

    Instead it has:

            get
            set


    This connects directly to the PROPERTY DESCRIPTORS
    you just learned.
*/


/*
    ============================================================
    FINAL MENTAL MODEL
    ============================================================


                aryan.email = "abc@gmail.com"
                           |
                           v
                      SETTER
                           |
                           v
                    this._email
                           |
                           v
                    "abc@gmail.com"


                aryan.email
                      |
                      v
                    GETTER
                      |
                      v
               this._email.toUpperCase()
                      |
                      v
                "ABC@GMAIL.COM"


    So the public interface is:

                email
                  |
          +-------+-------+
          |               |
        WRITE             READ
          |               |
       setter            getter
          |               |
       _email          _email
*/
