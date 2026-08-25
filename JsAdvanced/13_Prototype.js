/*

    Prototypal behaviour in JS


    JavaScript is prototype-based.

    Meaning:

    If JavaScript does not find a property/method on an object,
    it follows the object's [[Prototype]] link and searches there.

    It keeps going up the prototype chain until:

        1. It finds the property/method

    OR

        2. It reaches null


*/


/*

    Example:

        object
           |
           ↓
        prototype
           |
           ↓
        prototype
           |
           ↓
          null


    This process of searching through prototypes
    is called the PROTOTYPE CHAIN.



*/


/*

    Everything works through prototypal behaviour


    Important examples:


    Array:

        array
          ↓
        Array.prototype
          ↓
        Object.prototype
          ↓
        null



    String object:

        String object
              ↓
        String.prototype
              ↓
        Object.prototype
              ↓
             null



    User instance:

        user
          ↓
        User.prototype
          ↓
        Object.prototype
          ↓
        null



*/


/*

    Important correction:

    We often say:

        Array → Object → null


    But more precisely:

        array instance
             ↓
        Array.prototype
             ↓
        Object.prototype
             ↓
            null


    Array.prototype is itself an object.

    Therefore Array.prototype can also have a prototype.

    Its [[Prototype]] points to Object.prototype.



*/


/*

    What does "inheritance" mean in JavaScript?


    If an object does not have a property itself,
    JavaScript can look at its prototype.


    Example:


*/


const newHero = ["spiderman","ironman"];

console.log(newHero);


/*

    newHero itself is an Array object.


    Prototype chain:


        newHero
           ↓
        Array.prototype
           ↓
        Object.prototype
           ↓
        null



    Therefore newHero can access:

        push()
        pop()
        map()
        filter()

    because these methods are available on Array.prototype.



    It can also access methods such as:

        toString()
        hasOwnProperty()
        valueOf()

    because JavaScript can continue searching into
    Object.prototype.



*/


/*

    Important:

    JavaScript does NOT copy Object.prototype's methods
    into the array.

    Instead, the array has an internal [[Prototype]]
    reference.


        newHero
           |
           | [[Prototype]]
           ↓
        Array.prototype
           |
           | [[Prototype]]
           ↓
        Object.prototype


    This is why it is called a prototype CHAIN.



*/


/*

    [[Prototype]]


    [[Prototype]] is an internal slot/reference of an object.

    It tells JavaScript:

        "If you cannot find this property on me,
         where should you search next?"



    Example:


        newHero.push


    JavaScript conceptually searches:


        Does newHero have push?
                ↓
               NO
                ↓
        Check newHero's [[Prototype]]
                ↓
        Array.prototype
                ↓
        Does Array.prototype have push?
                ↓
               YES
                ↓
        Return push function



*/


/*

    If JavaScript cannot find it:


        newHero.xyz


    Search:


        newHero
           ↓
        Array.prototype
           ↓
        Object.prototype
           ↓
        null


    Nothing found.

    Therefore JavaScript reports that the property/method
    does not exist.



*/


/*

    Object.prototype is not literally "the parent of everything".

    Better mental model:

        Most ordinary objects ultimately have
        Object.prototype in their prototype chain.


    There are exceptions.

    Example:


        Object.create(null)


    creates an object whose prototype is directly null.


        object
          ↓
         null



*/





/*

    FUNCTIONS ARE OBJECTS


    This is extremely important.


    In JavaScript:

        Functions are objects that can also be called.



    Therefore a function can have properties.


*/


function multiplyBy5(num){

    return num * 5;

}



multiplyBy5.power = 2;


/*

    Will this work?


    YES.


    Why?


    Because multiplyBy5 is a function,
    and functions are also objects.


    Therefore:


        multiplyBy5.power = 2


    adds a property called "power"
    directly to the function object.



    Conceptually:


        multiplyBy5
        ┌─────────────────────┐
        │ function code       │
        │                     │
        │ power: 2            │
        └─────────────────────┘



*/


/*

    Everything in JavaScript is NOT an object.


    JavaScript has:

        Primitive values

        Objects



    Primitive values include:

        string
        number
        boolean
        null
        undefined
        symbol
        bigint



    Objects include:

        object
        array
        function
        date
        map
        set
        etc.



    IMPORTANT:

        Functions are objects.



*/


console.log(multiplyBy5(5));


/*

    Output:

        25


    Calling the function executes its code.



*/


console.log(multiplyBy5.power);


/*

    Output:

        2


    Because we manually added:

        multiplyBy5.power = 2



*/


console.log(multiplyBy5.prototype);


/*

    A normal/constructable function also has
    a special "prototype" property.


    This is DIFFERENT from [[Prototype]].



    VERY IMPORTANT:



        .prototype

            ↓

        A property on a function.


        It is an object that can become the
        [[Prototype]] of instances created using new.



*/


console.log(multiplyBy5);



/*

    Remember:


        multiplyBy5.prototype


    and:


        multiplyBy5.__proto__


    are NOT the same thing.



    multiplyBy5.prototype:

        The prototype object that can be used
        by instances created with:

            new multiplyBy5()



    multiplyBy5.__proto__:

        The prototype of the function object itself.



    Better way to inspect the second one:


        Object.getPrototypeOf(multiplyBy5)



*/


/*

    TWO DIFFERENT PROTOTYPE CONCEPTS


    1. .prototype


        A property found on normal constructable functions.



    2. [[Prototype]]


        Internal link on objects used for property lookup.



    Example:


        function User(){}


        User
         |
         | .prototype
         ↓
        User.prototype


    But User itself is also an object/function:


        User
         |
         | [[Prototype]]
         ↓
        Function.prototype



*/


/*

    This is one of the most important diagrams:


                         User
                        /    \
                       /      \
          [[Prototype]        .prototype
                    ↓            ↓
           Function.prototype  User.prototype
                    ↓            ↓
             Object.prototype  Object.prototype
                    ↓            ↓
                   null        null



    These are TWO DIFFERENT CHAINS.



*/





/*

    CONSTRUCTOR FUNCTION


    A constructor function is not a special type of function.


    It is simply a function that is intended
    to be called using the "new" keyword.



*/


function createuser(username,score){

    this.username = username;

    this.score = score;

}


/*

    This function can be called normally:


        createuser("chai",23);


    In that case it is simply a normal function call.



    But:


        new createuser("chai",23);


    calls it as a constructor.



    Therefore:

        Normal function

            vs

        Constructor function


    is mainly determined by HOW the function is called.



*/


/*

    A constructor function is generally used to
    create multiple similar objects.


    Example:


        const chai = new createuser("chai",23);

        const tea = new createuser("tea",230);



    Both objects have the same structure,
    but different data.



*/





/*

    CLASS


    ES6 introduced class syntax.


    Example:


*/


class createUser {

    constructor(username, score) {

        this.username = username;

        this.score = score;

    }

}


/*

    Classes provide cleaner syntax for creating
    constructor-based object structures.


    JavaScript still uses prototypes underneath.



    So conceptually:

        class
          ↓
        constructor
          ↓
        prototype
          ↓
        instances



*/





/*

    PROTOTYPE METHODS


    We can add methods to the prototype:


*/


createuser.prototype.increment = function (){

    this.score++;

}


createuser.prototype.printScore = function(){

    console.log(`Score: ${this.score}`);

}


/*

    Why do we put methods on prototype?


    Because we want all instances to share
    the SAME method.



    Instead of:


        chai → its own increment()
        tea  → its own increment()


    we have:


                 createuser.prototype
                 ├── increment()
                 └── printScore()
                    ↑          ↑
                    │          │
                  chai        tea



    One shared function can be used
    by many instances.



*/



console.log(createuser.prototype);


/*

    createuser.prototype is an OBJECT.


    It contains the methods we added:


        increment()
        printScore()


    It also normally contains:


        constructor: createuser



*/





const chai = new createuser("chai",23);

const tea = new createuser("tea",230);


/*

    What exactly does "new" do?


    When we write:


        new createuser("chai",23)


    JavaScript conceptually performs several steps.



*/


/*

    STEP 1:

    Create a new empty object.


        {}



*/


/*

    STEP 2:

    Connect the new object's [[Prototype]]
    to createuser.prototype.



        newObject
             |
             | [[Prototype]]
             ↓
        createuser.prototype



*/


/*

    STEP 3:

    Execute the constructor function with
    "this" pointing to the new object.



        createuser("chai",23)


    becomes conceptually:


        this = newObject



    Therefore:


        this.username = username;


    becomes:


        newObject.username = "chai";



    And:


        this.score = score;


    becomes:


        newObject.score = 23;



*/


/*

    STEP 4:

    Return the newly created object.



    Therefore:


        const chai = new createuser("chai",23);


    gives us:


        chai


        {
            username: "chai",
            score: 23
        }



    with:


        chai.[[Prototype]]
                    ↓
        createuser.prototype



*/





/*

    IMPORTANT:


    chai does NOT inherit from:

        createuser


    Instead:


        chai
          ↓
        createuser.prototype



    The constructor function itself is a separate object.



*/


/*

    Therefore this:


        createuser.something


    and this:


        createuser.prototype.something


    are NOT the same.



*/


/*

    createuser.something


    adds a property directly to the
    constructor function object.



    Example:


*/


createuser.description = "User constructor";


/*

    This can be accessed with:


        createuser.description



    But chai cannot find it through its
    prototype chain.



*/


/*

    createuser.prototype.something


    adds something to the shared prototype object.



    Instances can access it through their
    [[Prototype]] chain.



*/


/*

    this.something inside the constructor


    is different again.



    Example:


*/


function Person(name){

    this.name = name;

}


/*

    When:


        const person1 = new Person("Aryan");


    this = person1


    Therefore:


        this.name = name;


    creates:


        person1.name = "Aryan"



    Every instance gets its OWN property.



*/


/*

    Therefore we have THREE different places:


        1. Constructor function itself


            createuser.something


            ↓

            Property belongs to createuser.






        2. Prototype


            createuser.prototype.something


            ↓

            Shared property/method available
            to instances through prototype lookup.






        3. Instance


            this.something


            ↓

            Property belongs directly to
            each newly created object.



*/


/*

    Example:


*/


function Student(name, marks){

    // INSTANCE PROPERTIES

    this.name = name;

    this.marks = marks;

}


// SHARED PROTOTYPE METHOD

Student.prototype.printMarks = function(){

    console.log(this.marks);

};


// PROPERTY ON CONSTRUCTOR FUNCTION

Student.school = "Chitkara";



const student1 = new Student("Aryan",95);

const student2 = new Student("Chai",85);


/*

    Now:


        student1.name

            ↓

        directly found on student1



        student1.printMarks()

            ↓

        not found on student1

            ↓

        search Student.prototype

            ↓

        found printMarks()



        Student.school

            ↓

        directly found on Student



        student1.school

            ↓

        NOT found on student1

            ↓

        NOT found on Student.prototype

            ↓

        NOT found



*/





/*

    Why "this"?


    Suppose:


        const chai = new createuser("chai",23);

        const tea = new createuser("tea",230);



    Both objects use the same prototype method:


        createuser.prototype.increment



    But the method needs to know:

        "Which object's score should I change?"



    When:


        chai.increment();



    "this" refers to chai.


        this.score++


    becomes:


        chai.score++



    When:


        tea.increment();



    "this" refers to tea.


        this.score++


    becomes:


        tea.score++



*/


/*

    Therefore:


        this


    gives the method the context of the
    object on which it was called.



*/


chai.printScore();


tea.printScore();



chai.increment();

tea.increment();



chai.printScore();

tea.printScore();



/*

    Output:


        Score: 23
        Score: 230


    Then after increment:


        Score: 24
        Score: 231



*/





/*

    PROTOTYPE LOOKUP


    When we write:


        chai.printScore();



    JavaScript conceptually searches:


        1. Does chai have printScore?

                ↓

               NO


        2. Follow chai's [[Prototype]]

                ↓

           createuser.prototype


        3. Does createuser.prototype
           have printScore?

                ↓

               YES


        4. Execute it.



*/


/*

    If it wasn't there:


        chai
          ↓
        createuser.prototype
          ↓
        Object.prototype
          ↓
        null



    JavaScript keeps searching.



*/





/*

    FULL INSTANCE RELATIONSHIP


        const chai = new createuser("chai",23);



                        createuser
                       /          \
                      /            \
                     ↓              ↓
           Function.prototype   createuser.prototype
                  ↓                 ↓
           Object.prototype   Object.prototype
                  ↓                 ↓
                 null              null


                                ↑
                                |
                                |
                              chai
                                |
                                |
                        [[Prototype]]
                                |
                                ↓
                       createuser.prototype



    Important:


        createuser


    and:


        createuser.prototype


    are TWO DIFFERENT OBJECTS.



*/


/*

    FINAL MENTAL MODEL


    .prototype


        = a property on a constructor function.


        It points to an object that instances
        created with "new" will be connected to.



    [[Prototype]]


        = internal link on an object.


        It tells JavaScript where to search next
        when a property is not found on the object.



    Prototype Chain


        = repeatedly following [[Prototype]]
          links until the property is found
          or null is reached.



    new


        = creates a new object,
          connects it to Constructor.prototype,
          calls the constructor with "this"
          referring to that object,
          and returns the resulting object
          according to constructor return rules.



    Constructor function


        = a function intended to be called with new.



    Instance


        = the object created by a constructor call.



    Constructor properties


        createuser.something

        → belongs to the constructor function



    Instance properties


        this.something

        → belongs directly to each instance



    Prototype methods


        createuser.prototype.something

        → shared by instances through the prototype chain



*/


/*

    THE THREE LEVELS TO REMEMBER:


                 Constructor Function

                       createuser
                           |
                           |
                    .prototype
                           ↓
                  createuser.prototype
                           ↑
                           |
                     [[Prototype]]
                           |
                         chai


    So:


        createuser.something

            → constructor itself


        createuser.prototype.something

            → shared prototype


        this.something

            → individual instance



*/


/*

    This is the foundation of JavaScript OOP.


    Once this is clear:


        new
        prototypes
        prototype chain
        this
        constructor functions
        classes
        inheritance
        extends
        super


    all become connected concepts instead of
    separate things to memorize.



*/