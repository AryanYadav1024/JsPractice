/*
============================================================
                JAVASCRIPT OOP COMPLETE NOTES
============================================================

OOP = Object-Oriented Programming

Basic idea:

    OOP organizes:

        DATA / STATE
            +
        BEHAVIOR / METHODS

    into objects.

Example:

    User
    ├── name       -> state
    ├── email      -> state
    ├── login()    -> behavior
    └── logout()   -> behavior


The important thing:

    JavaScript is fundamentally OBJECT / PROTOTYPE based.

    Classes are a cleaner syntax built on top of
    JavaScript's prototype system.

============================================================
1. OBJECTS
============================================================

An object can contain:

    properties -> data/state
    methods    -> behavior
*/


const user = {

    name: "Aryan",
    email: "aryan@gmail.com",

    login() {

        console.log(`${this.name} logged in`);

    }

};


/*
    Here:

        name
        email

    are STATE.

        login()

    is BEHAVIOR.


    OOP is basically trying to keep related:

        state + behavior

    together.

============================================================
2. THE PROBLEM WITH CREATING OBJECTS MANUALLY
============================================================

If we need many users:

    user1
    user2
    user3
    ...
    user1000

Creating every object manually is repetitive.

So we need a BLUEPRINT.

This leads us to:

    CONSTRUCTOR FUNCTIONS
*/


function User(name, email) {

    this.name = name;

    this.email = email;

}


const aryan = new User(
    "Aryan",
    "aryan@gmail.com"
);

const rahul = new User(
    "Rahul",
    "rahul@gmail.com"
);


/*
============================================================
3. WHAT DOES "new" DO?
============================================================

When we write:

    new User("Aryan", "aryan@gmail.com")

JavaScript conceptually does:

    1. Create a new empty object.

    2. Connect that object to:
           User.prototype

    3. Call User() with:
           this = new object

    4. Return the new object.


Conceptually:

    new User(...)
          |
          v
    new object
          |
          v
    object.__proto__ -> User.prototype
          |
          v
    User() executes
          |
          v
    this points to new object


Therefore:

    this.name = name;

means:

    newObject.name = name;


============================================================
4. THE PROBLEM WITH METHODS INSIDE CONSTRUCTOR
============================================================

If we do this:
*/


function User2(name, email) {

    this.name = name;

    this.email = email;

    this.login = function() {

        console.log(`${this.name} logged in`);

    };

}


/*
    Every object gets its OWN copy of login().

    Example:

        aryan
          |
          +-- login -> Function A

        rahul
          |
          +-- login -> Function B


    But Function A and Function B contain the same code.

    That wastes memory.

    We want the method to be SHARED.

    This is where PROTOTYPES become important.


============================================================
5. PROTOTYPE
============================================================

Instead of putting the method directly on every object:

    Put it on the prototype.

*/


function User3(name, email) {

    this.name = name;

    this.email = email;

}


User3.prototype.login = function() {

    console.log(`${this.name} logged in`);

};


const user1 = new User3(
    "Aryan",
    "aryan@gmail.com"
);


/*
    Now:

        user1
          |
          v
        User3.prototype
          |
          +-- login()


    The method is shared.

    We don't create a new login function for every user.


============================================================
6. PROTOTYPE CHAIN
============================================================

When JavaScript executes:

    user1.login();

It searches for "login".

First:

    user1

Does user1 have login?

    NO

Then:

    User3.prototype

Does it have login?

    YES

So JavaScript executes it.


The search looks like:

    user1
      |
      v
    User3.prototype
      |
      v
    Object.prototype
      |
      v
    null


This is the PROTOTYPE CHAIN.


Important:

    JavaScript inheritance is fundamentally
    prototype-based.


============================================================
7. CLASSES
============================================================

Classes give us cleaner syntax for creating objects
and working with prototypes.
*/


class User4 {

    constructor(name, email) {

        this.name = name;

        this.email = email;

    }

    login() {

        console.log(`${this.name} logged in`);

    }

    logout() {

        console.log(`${this.name} logged out`);

    }

}


const aryan2 = new User4(
    "Aryan",
    "aryan@gmail.com"
);

aryan2.login();


/*
    Important:

    class User4

    does NOT mean JavaScript stopped using prototypes.

    The methods:

        login()
        logout()

    are placed on:

        User4.prototype


Conceptually:

    User4
      |
      v
    User4.prototype
      |
      +-- login()
      +-- logout()


So:

    CLASS
      ↓
    PROTOTYPE
      ↓
    OBJECT


============================================================
8. "this"
============================================================

"this" represents the object associated with the
current method/function call.

Example:
*/


class User5 {

    constructor(name) {

        this.name = name;

    }

    display() {

        console.log(this.name);

    }

}


const aryan3 = new User5("Aryan");

aryan3.display();


/*
    When:

        aryan3.display();

    runs:

        this -> aryan3

    Therefore:

        this.name

    means:

        aryan3.name


============================================================
9. ENCAPSULATION
============================================================

ENCAPSULATION:

    Combining data and behavior together while controlling
    how internal state is accessed or modified.


Example:
*/


class BankAccount {

    constructor(balance) {

        this.balance = balance;

    }

    deposit(amount) {

        this.balance += amount;

    }

}


/*
    Problem:

        account.balance = -1000000;

    The outside world can directly modify the state.

    We may want to protect the internal data.

    JavaScript gives us PRIVATE FIELDS.


============================================================
10. PRIVATE FIELDS (#)
============================================================

# creates an actually private field.

*/


class BankAccount2 {

    #balance;

    constructor(balance) {

        this.#balance = balance;

    }

    deposit(amount) {

        if (amount <= 0) {

            return;

        }

        this.#balance += amount;

    }

    getBalance() {

        return this.#balance;

    }

}


const account = new BankAccount2(1000);

account.deposit(500);

console.log(account.getBalance());


/*
    This is NOT allowed:

        account.#balance

    because #balance is private to the class.


Important difference:

    this._balance

        -> conventionally private
        -> JavaScript still allows outside access


    this.#balance

        -> actually private
        -> outside code cannot directly access it


============================================================
11. PRIVATE METHODS
============================================================

Methods can also be private.
*/


class User6 {

    #password;

    constructor(password) {

        this.#password = password;

    }

    #hashPassword() {

        return this.#password + "_hashed";

    }

    getStoredPassword() {

        return this.#hashPassword();

    }

}


/*
    Outside:

        user.#hashPassword();

    ❌ Not allowed.


    Inside the class:

        this.#hashPassword();

    ✅ Allowed.


============================================================
12. GETTERS AND SETTERS
============================================================

Getter:

    controls READ access.

Setter:

    controls WRITE access.


Example:
*/


class User7 {

    #email;

    constructor(email) {

        this.email = email;

    }

    get email() {

        return this.#email.toUpperCase();

    }

    set email(value) {

        if (!value.includes("@")) {

            throw new Error("Invalid email");

        }

        this.#email = value;

    }

}


/*
    READ:

        user.email

            ↓

        getter

            ↓

        this.#email.toUpperCase()


    WRITE:

        user.email = "abc@gmail.com"

            ↓

        setter

            ↓

        this.#email = value


============================================================
13. PROPERTY DESCRIPTORS + GETTER/SETTER
============================================================

This connects directly to Object.getOwnPropertyDescriptor().

Normal property:

    DATA PROPERTY

        {
            value,
            writable,
            enumerable,
            configurable
        }


Getter/setter property:

    ACCESSOR PROPERTY

        {
            get,
            set,
            enumerable,
            configurable
        }


So getter/setter are NOT some separate magical system.

They are part of JavaScript's PROPERTY DESCRIPTOR system.


Conceptually:

        PROPERTY
            |
            v
        DESCRIPTOR
            |
        +---+---+
        |       |
      DATA    ACCESSOR
        |       |
      value    get
      writable set
      ...      ...


============================================================
14. Object.defineProperty()
============================================================

We can manually create an accessor property.
*/


function User8(email, password) {

    this._email = email;

    this._password = password;

    Object.defineProperty(this, "email", {

        get: function() {

            return this._email.toUpperCase();

        },

        set: function(value) {

            this._email = value;

        }

    });

}


/*
    IMPORTANT:

    Do NOT do:

        set: function(value) {
            this.email = value;
        }


    because:

        this.email
            ↓
        setter
            ↓
        this.email
            ↓
        setter
            ↓
        ...

    Infinite recursion.

    Eventually:

        Maximum call stack size exceeded


    Instead:

        this._email = value;

    because _email is the actual storage property.


Mental model:

        email
          |
          +-- getter/setter
                  |
                  v
                _email
                  |
                  v
            actual stored data


============================================================
15. INHERITANCE
============================================================

Inheritance allows one class to reuse/extend another
class's behavior.
*/


class User9 {

    login() {

        console.log("User logged in");

    }

}


class Admin extends User9 {

    deleteUser() {

        console.log("User deleted");

    }

}


const admin = new Admin();

admin.login();

admin.deleteUser();


/*
    Admin inherited login() from User9.

Prototype chain:

    admin
      |
      v
    Admin.prototype
      |
      v
    User9.prototype
      |
      v
    Object.prototype
      |
      v
    null


============================================================
16. super
============================================================

super allows a child class to access the parent class.


Example:
*/


class User10 {

    constructor(name) {

        this.name = name;

    }

}


class Admin2 extends User10 {

    constructor(name, permissions) {

        super(name);

        this.permissions = permissions;

    }

}


/*
    super(name)

    calls the parent constructor:

        User10 constructor


So:

    Admin2 constructor
          |
          v
        super(name)
          |
          v
    User10 constructor
          |
          v
    this.name = name


IMPORTANT:

    In a derived class constructor, you must initialize
    the parent part of the object using super()
    before using "this".


============================================================
17. METHOD OVERRIDING
============================================================

A child can provide its own implementation of a method
that already exists in the parent.
*/


class User11 {

    login() {

        console.log("User login");

    }

}


class Admin3 extends User11 {

    login() {

        console.log("Admin login");

    }

}


const admin3 = new Admin3();

admin3.login();


/*
    Output:

        Admin login


Why?

    JavaScript searches:

        admin3
          ↓
        Admin3.prototype
          ↓
        login found
          ↓
        execute it


    It doesn't continue to User11.prototype
    because it already found login.


This is METHOD OVERRIDING.


============================================================
18. POLYMORPHISM
============================================================

POLYMORPHISM:

    Same interface / method call,
    different behavior depending on the object.


Example:
*/


class Animal {

    speak() {

        console.log("Animal sound");

    }

}


class Dog extends Animal {

    speak() {

        console.log("Woof");

    }

}


class Cat extends Animal {

    speak() {

        console.log("Meow");

    }

}


const animals = [

    new Dog(),

    new Cat()

];


for (const animal of animals) {

    animal.speak();

}


/*
    Same call:

        animal.speak();

    But:

        Dog -> Woof

        Cat -> Meow


    This is POLYMORPHISM.


Mental model:

        same interface
             |
        +----+----+
        |         |
       Dog       Cat
        |         |
       Woof      Meow


============================================================
19. ABSTRACTION
============================================================

ABSTRACTION:

    Expose what the user needs,
    hide unnecessary implementation details.


Example:
*/


class Car {

    start() {

        this.#injectFuel();

        this.#igniteEngine();

        console.log("Car started");

    }

    #injectFuel() {

        console.log("Fuel injected");

    }

    #igniteEngine() {

        console.log("Engine ignited");

    }

}


const car = new Car();

car.start();


/*
    Outside code only needs:

        car.start();


    It doesn't need to know:

        how fuel is injected
        how ignition works
        how the engine is controlled


    The complex implementation is hidden.


============================================================
20. ENCAPSULATION vs ABSTRACTION
============================================================

These are often confused.


ENCAPSULATION:

    Controls access to internal state.

    Example:

        #balance


    Main question:

        "Who can access this?"


ABSTRACTION:

    Hides unnecessary implementation complexity.

    Example:

        car.start()


    Main question:

        "What details does the user actually need?"


Simple mental model:

    ENCAPSULATION
        ↓
    protect/control internals


    ABSTRACTION
        ↓
    hide complexity


============================================================
21. STATIC PROPERTIES
============================================================

Normal properties belong to INSTANCES.

Static properties belong to the CLASS itself.


Example:
*/


class User12 {

    static totalUsers = 0;

    constructor(name) {

        this.name = name;

        User12.totalUsers++;

    }

}


const aryan4 = new User12("Aryan");

const rahul2 = new User12("Rahul");

console.log(User12.totalUsers);


/*
    Output:

        2


Structure:

        User12
          |
          +-- totalUsers


        aryan4
          |
          +-- name


        rahul2
          |
          +-- name


    totalUsers belongs to the CLASS.

    name belongs to each INSTANCE.


Therefore:

        User12.totalUsers

    is correct.


============================================================
22. STATIC METHODS
============================================================

Static methods belong to the class.


Example:
*/


class MathUtils {

    static add(a, b) {

        return a + b;

    }

}


console.log(
    MathUtils.add(10, 20)
);


/*
    Call:

        MathUtils.add()


    NOT:

        const math = new MathUtils();

        math.add();


    because add() belongs to MathUtils itself,
    not to instances.


Mental model:

        CLASS
          |
          +-- static method


        INSTANCE
          |
          +-- instance method


============================================================
23. STATIC + PRIVATE
============================================================

Static and private can also be combined.
*/


class Database {

    static #connectionCount = 0;

    constructor() {

        Database.#connectionCount++;

    }

    static getConnectionCount() {

        return Database.#connectionCount;

    }

}


new Database();

new Database();

console.log(
    Database.getConnectionCount()
);


/*
    #connectionCount belongs to the CLASS.

    It is:

        static
        +
        private


    So:

        Database.#connectionCount

    is accessible only from the class itself.


============================================================
24. instanceof
============================================================

instanceof checks whether a value's prototype chain
contains a particular prototype.
*/


class Person {}

const person = new Person();

console.log(
    person instanceof Person
);


/*
    Output:

        true


Conceptually:

    person
      |
      v
    Person.prototype
      |
      v
    Object.prototype
      |
      v
    null


    instanceof asks:

        "Is Person.prototype somewhere in
         person's prototype chain?"


============================================================
25. COMPOSITION
============================================================

Inheritance is NOT always the best solution.

Composition means:

    Build an object using other objects.


Example:

        Car HAS-A Engine


Instead of:

        Car IS-A Engine


Code:
*/


class Engine {

    start() {

        console.log("Engine started");

    }

}


class GPS {

    navigate() {

        console.log("Navigating");

    }

}


class Car2 {

    constructor() {

        this.engine = new Engine();

        this.gps = new GPS();

    }

}


const car2 = new Car2();

car2.engine.start();

car2.gps.navigate();


/*
    Car contains an Engine.

    Car contains a GPS.


This is COMPOSITION.


============================================================
26. INHERITANCE vs COMPOSITION
============================================================

INHERITANCE:

    Dog IS-A Animal

        class Dog extends Animal {}


COMPOSITION:

    Car HAS-A Engine

        this.engine = new Engine();


Rule of thumb:

    Use inheritance when there is a genuine:

        IS-A

    relationship.


    Use composition when you are assembling:

        HAS-A

    capabilities.


In real-world software engineering,
composition is often easier to maintain than
deep inheritance hierarchies.


============================================================
27. THE FOUR OOP PRINCIPLES
============================================================

1. ENCAPSULATION
----------------

    Bundle state + behavior together
    and control access to internal state.

    JavaScript tools:

        #private fields
        getters
        setters


    Mental model:

        "Protect the internals."


------------------------------------------------------------

2. ABSTRACTION
--------------

    Hide unnecessary implementation complexity.

    JavaScript tools:

        classes
        methods
        private implementation


    Mental model:

        "Expose what matters,
         hide how it works."


------------------------------------------------------------

3. INHERITANCE
--------------

    Reuse/extend behavior from another class.

    JavaScript tools:

        extends
        super
        prototypes


    Mental model:

        "Build a new type from an existing type."


------------------------------------------------------------

4. POLYMORPHISM
---------------

    Same interface,
    different implementation.


    Example:

        animal.speak()


        Dog -> Woof

        Cat -> Meow


    Mental model:

        "Same message,
         different response."


============================================================
28. DATA PROPERTY vs ACCESSOR PROPERTY
============================================================

DATA PROPERTY:

    {
        value,
        writable,
        enumerable,
        configurable
    }


ACCESSOR PROPERTY:

    {
        get,
        set,
        enumerable,
        configurable
    }


This connects:

    Object.getOwnPropertyDescriptor()

with:

    Object.defineProperty()

and:

    getters / setters.


============================================================
29. INSTANCE vs CLASS
============================================================

INSTANCE:

    Created using:

        new User()


    Instance-specific data:

        this.name
        this.email


CLASS:

    The blueprint/type itself.

    Static members belong here:

        User.totalUsers
        User.createUser()


Mental model:


        User
         |
         +-- static members
         |
         |
         +----------------+
                          |
                    creates instances
                          |
              +-----------+-----------+
              |                       |
            aryan                   rahul
              |                       |
           instance                instance
           state                   state


============================================================
30. COMPLETE OOP CONNECTION
============================================================

Start from the bottom:

    OBJECT
       ↓
    contains properties
       ↓
    properties have descriptors
       ↓
    descriptors can be:
        data properties
        accessor properties
       ↓
    objects have prototypes
       ↓
    prototypes allow shared behavior
       ↓
    prototype chain provides inheritance
       ↓
    classes provide cleaner syntax
       ↓
    private fields provide encapsulation
       ↓
    getters/setters provide controlled access
       ↓
    extends + super provide inheritance
       ↓
    overriding provides polymorphism
       ↓
    abstraction hides implementation
       ↓
    composition provides another way to build
    complex objects


============================================================
31. THE COMPLETE MENTAL MODEL
============================================================


                    JAVASCRIPT OOP
                         |
          ┌──────────────┴──────────────┐
          |                             |
       OBJECT                       CLASS
          |                             |
       state                         static
       methods                       members
          |
      prototype
          |
     prototype chain
          |
     inheritance


OBJECT PROPERTY
      |
      v
PROPERTY DESCRIPTOR
      |
   +--+--+
   |     |
 DATA  ACCESSOR
   |     |
 value  get
 writable set
   |     |
   +--+--+
      |
 getters/setters


ENCAPSULATION
      |
      +-- #private
      +-- getter/setter


INHERITANCE
      |
      +-- extends
      +-- super
      +-- prototype chain


POLYMORPHISM
      |
      +-- method overriding
      +-- same interface, different behavior


ABSTRACTION
      |
      +-- expose simple interface
      +-- hide implementation


COMPOSITION
      |
      +-- HAS-A relationship
      +-- combine objects


============================================================
32. IMPORTANT JAVASCRIPT OOP VOCABULARY
============================================================

OBJECT
    A collection of state and behavior.


CLASS
    Syntax for defining object structure/behavior.


INSTANCE
    An object created from a class.


CONSTRUCTOR
    Code executed when an instance is created.


this
    Reference determined by how a function is called.


PROTOTYPE
    Object from which another object can inherit behavior.


PROTOTYPE CHAIN
    Chain JavaScript searches when resolving properties.


INHERITANCE
    Reusing/extending behavior through the prototype chain.


ENCAPSULATION
    Controlling access to internal state.


ABSTRACTION
    Hiding unnecessary implementation complexity.


POLYMORPHISM
    Same interface with different implementations.


GETTER
    Controls property reading.


SETTER
    Controls property writing.


PRIVATE FIELD
    Field accessible only inside its class.


STATIC
    Belongs to the class rather than individual instances.


COMPOSITION
    Building objects using other objects.


============================================================
33. THE MOST IMPORTANT THING TO REMEMBER
============================================================

Do NOT reduce JavaScript OOP to:

    class
    constructor
    extends
    super


That is only the surface syntax.


The deeper JavaScript model is:

    OBJECTS
       ↓
    PROPERTIES
       ↓
    PROPERTY DESCRIPTORS
       ↓
    PROTOTYPES
       ↓
    PROTOTYPE CHAIN
       ↓
    CLASSES
       ↓
    INHERITANCE
       ↓
    ENCAPSULATION
       ↓
    POLYMORPHISM
       ↓
    ABSTRACTION
       ↓
    COMPOSITION


Classes are syntax.

The prototype system is the underlying mechanism.


============================================================
34. QUICK REVISION
============================================================

Object:
    State + behavior


Constructor:
    Creates/initializes instances


new:
    Creates object + connects prototype + calls constructor


Prototype:
    Shared behavior


Prototype chain:
    Property/method lookup chain


Class:
    Cleaner syntax for working with objects/prototypes


this:
    Object associated with current call


Getter:
    Controls reading


Setter:
    Controls writing


#private:
    Truly private state


static:
    Belongs to class


extends:
    Inherit from another class


super:
    Access parent constructor/methods


Overriding:
    Child replaces parent's implementation


Polymorphism:
    Same method call, different behavior


Encapsulation:
    Protect/control internal state


Abstraction:
    Hide implementation complexity


Composition:
    Build objects from other objects


============================================================
END
============================================================
*/