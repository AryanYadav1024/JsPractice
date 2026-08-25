/*
    PROPERTY DESCRIPTORS
    =====================

    Every property inside an object has some hidden metadata.

    These properties are not just:

        name -> "aryan"

    Internally, JavaScript also stores information like:

        value
        writable
        enumerable
        configurable

    These are called PROPERTY DESCRIPTORS.
*/


// tells us the hidden properties/attributes of an object's property

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);


/*
    Output will look roughly like:

    {
        value: 3.141592653589793,
        writable: false,
        enumerable: false,
        configurable: false
    }


    Let's understand each one:

    value
    -----
    The actual value stored in the property.

        Math.PI -> 3.14159...


    writable
    --------
    Can we change the property's value?

        writable: false

        means:

            Math.PI = 10

        is NOT allowed.


    enumerable
    ----------
    Should this property appear when we enumerate
    through the object's properties?

    For example:

        Object.keys()
        Object.entries()
        for...in


    configurable
    ------------
    Can the property's descriptor itself be changed?

    For example, can we change:

        writable
        enumerable
        configurable

    later?

    Math.PI has configurable: false.
*/


// console.log(Math.PI);


// Math.PI = 10;


// console.log(Math.PI);


/*
    Math.PI is not writable.

    Therefore:

        Math.PI = 10

    does not change the value.

    In normal non-strict JavaScript, this assignment
    can fail silently.

    In strict mode, JavaScript throws a TypeError.

    So:

        Math.PI
            |
            +---- value = 3.141592653589793
            +---- writable = false
            +---- enumerable = false
            +---- configurable = false

    This is why JavaScript can protect certain properties.
*/


// ============================================================
// OUR OWN OBJECT
// ============================================================

const chai = {

    name: "ginger chai",

    price: 230,

    isAvailable: true,

    type: {

        name: "assamese tea",

        rating: "10th in the world"
    },

    orderChai: function() {

        console.log("no chai");

    }

};


/*
    Important:

    The properties created using an object literal also
    receive property descriptors.

    For example:

        name: "ginger chai"

    internally behaves roughly like:

        name -> {
            value: "ginger chai",
            writable: true,
            enumerable: true,
            configurable: true
        }


    So our normal object properties are generally:

        writable: true
        enumerable: true
        configurable: true
*/


// console.log(Object.getOwnPropertyDescriptor(chai, "type"));


/*
    This would give us the descriptor of "type".

    Something like:

        {
            value: {
                name: "assamese tea",
                rating: "10th in the world"
            },
            writable: true,
            enumerable: true,
            configurable: true
        }


    Notice something important:

    "value" itself is the entire object stored inside "type".

        type
         |
         +---- value -> { name: ..., rating: ... }
         +---- writable
         +---- enumerable
         +---- configurable


    The descriptor describes the PROPERTY "type".

    It does NOT describe the properties inside the nested object.
*/


console.log(Object.getOwnPropertyDescriptor(chai, "name"));


/*
    We should get something like:

        {
            value: "ginger chai",
            writable: true,
            enumerable: true,
            configurable: true
        }


    So currently:

        name = "ginger chai"

    can:

        1. have its value changed
        2. appear during enumeration
        3. have its descriptor changed
*/


// ============================================================
// CHANGING A PROPERTY DESCRIPTOR
// ============================================================

Object.defineProperty(chai, "name", {

    enumerable: false

});


/*
    Object.defineProperty()

    allows us to manually control a property's descriptor.

    Here we are saying:

        name
          |
          +---- enumerable = false


    We are NOT changing:

        value
        writable
        configurable


    because we didn't specify them.

    When modifying an existing property, unspecified
    descriptor attributes remain as they were.

    So effectively:

        name -> {
            value: "ginger chai",
            writable: true,
            enumerable: false,
            configurable: true
        }
*/


console.log(Object.getOwnPropertyDescriptor(chai, "name"));


/*
    Now:

        enumerable: false

    means the "name" property will NOT appear when we
    enumerate through the object.

    For example:

        Object.entries(chai)

    will ignore "name".
*/


// ============================================================
// OBJECT.ENTRIES()
// ============================================================

for (let [key, value] of Object.entries(chai)) {

    /*
        Object.entries(chai) returns an array of:

            [key, value]

        pairs.

        Example before hiding "name":

            [
                ["name", "ginger chai"],
                ["price", 230],
                ["isAvailable", true],
                ["type", {...}],
                ["orderChai", function]
            ]


        But we changed:

            name.enumerable = false

        Therefore "name" disappears from Object.entries().
    */


    if (typeof value === "function") continue;


    /*
        orderChai contains a function.

        We don't want to print functions.

        So:

            typeof value === "function"

        becomes true.

        continue;

        means:

            "skip this iteration and move to the next one."
    */


    console.log(key, " -> ", value);

}


/*
    FINAL OUTPUT:

        price -> 230

        isAvailable -> true

        type -> {
            name: "assamese tea",
            rating: "10th in the world"
        }


    Why?

    name
        -> enumerable = false
        -> skipped by Object.entries()

    price
        -> enumerable = true
        -> included

    isAvailable
        -> enumerable = true
        -> included

    type
        -> enumerable = true
        -> included

    orderChai
        -> enumerable = true
        -> included by Object.entries()
        -> BUT our if statement skips it because it is a function
*/


/*
    ============================================================
    THE BIG PICTURE
    ============================================================

    Think of a JavaScript property as:

        property
           |
           +-----------------------+
           |                       |
        actual data            metadata
           |                       |
        "ginger chai"          descriptors
                                   |
                 +-----------------+------------------+
                 |                 |                  |
              writable         enumerable       configurable


    writable
    --------
    "Can I change the value?"


    enumerable
    ----------
    "Should I see this property when looping/enumerating?"


    configurable
    ------------
    "Can I change/delete this property's descriptor?"


    value
    -----
    "What data does this property currently hold?"
*/


/*
    ============================================================
    IMPORTANT CONNECTION
    ============================================================

    Object.entries(chai)

            |
            v

    Looks at OWN properties
            |
            v

    Only ENUMERABLE properties
            |
            v

    Returns [key, value] pairs
            |
            v

    Our loop processes those pairs
            |
            v

    Function values are skipped manually


    Therefore:

        Object.entries()
              |
              v
        enumerable matters


    This is why changing:

        enumerable: false

    actually changes what your loop can see.
*/


/*
    ============================================================
    ONE VERY IMPORTANT DISTINCTION
    ============================================================

    "Hidden property" does NOT mean:

        "JavaScript secretly hides this property from me."

    It means:

        "JavaScript stores metadata about how this property
         behaves."

    For example:

        enumerable: false

    doesn't necessarily mean the property doesn't exist.

    The property STILL exists:

        chai.name

    still gives:

        "ginger chai"

    But enumeration mechanisms don't include it.

    So:

        chai.name
            |
            v
        "ginger chai"


    while:

        Object.entries(chai)
            |
            v
        does NOT include "name".
*/


/*
    ============================================================
    METHODS YOU SHOULD NOW CONNECT
    ============================================================

    Object.getOwnPropertyDescriptor(obj, property)
        -> READ descriptor of ONE property


    Object.getOwnPropertyDescriptors(obj)
        -> READ descriptors of ALL own properties


    Object.defineProperty(obj, property, descriptor)
        -> CREATE or MODIFY ONE property's descriptor


    Object.defineProperties(obj, descriptors)
        -> CREATE or MODIFY MULTIPLE properties


    Object.keys(obj)
        -> enumerable own string keys


    Object.values(obj)
        -> enumerable own string values


    Object.entries(obj)
        -> enumerable own [key, value] pairs
*/


/*
    ============================================================
    MENTAL MODEL
    ============================================================

    Normal JavaScript thinking:

        object
          |
          +---- name = "ginger chai"


    Better JavaScript thinking:

        object
          |
          +---- name
                |
                +---- value: "ginger chai"
                +---- writable: true
                +---- enumerable: false
                +---- configurable: true


    Once you understand this model, things like:

        Object.freeze()
        Object.seal()
        Object.defineProperty()
        getters/setters
        class properties
        framework internals

    become much easier to understand.

    You're basically learning the control panel behind
    JavaScript objects instead of only learning the dashboard.
*/