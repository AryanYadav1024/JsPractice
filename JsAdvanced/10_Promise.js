/*
    ============================================================
                    PROMISES + ASYNC JAVASCRIPT
    ============================================================


    WHAT IS A PROMISE?

    A Promise represents the eventual completion or failure
    of an asynchronous operation and its resulting value.

    Simple mental model:

        "I don't have the result right now,
         but I promise to give you the result later."


    Example real life:

        You order food.

        You don't get the food immediately.

        Instead, you get an order token.

        The token represents:
            "Your food will eventually be ready
             OR something will go wrong."

        That is similar to a Promise.


    ============================================================
                    WHY DO WE NEED PROMISES?
    ============================================================

    JavaScript is single-threaded.

    But many operations take time:

        - API / network requests
        - Database operations
        - File operations
        - Timers
        - Cryptography
        - etc.


    We do NOT want JavaScript to stop everything while
    waiting for these operations.

    Example:

        JavaScript
            ↓
        API request
            ↓
        Server
            ↓
        Database
            ↓
        Response

    The response might take:

        10 ms
        500 ms
        2 seconds
        10 seconds
        OR fail completely


    So the runtime allows the asynchronous operation to
    happen outside the normal JavaScript execution flow.

    JavaScript can continue doing other work.


    ============================================================
                    BEFORE PROMISES
    ============================================================

    We commonly used callbacks.

    XMLHttpRequest was one of the important browser APIs
    used for making HTTP requests and implementing AJAX.

    Example idea:

        xhr.onload = function() {
            // run when request finishes
        }

    This callback-based approach works.

    But when many asynchronous operations depend on each other,
    callbacks can become deeply nested.


    Example:

        getUser(function(user) {

            getOrders(user.id, function(orders) {

                getProducts(orders[0].id, function(products) {

                    getReviews(products[0].id, function(reviews) {

                        console.log(reviews);

                    });

                });

            });

        });


    This is commonly called:

        CALLBACK HELL


    Promises give us a cleaner way to represent and
    compose asynchronous operations.


    ============================================================
                    PROMISE STATES
    ============================================================

    A Promise has 3 states:

        1. PENDING
            Initial state.
            Operation has not completed yet.

        2. FULFILLED
            Operation completed successfully.

        3. REJECTED
            Operation failed.


                    PENDING
                      |
              -----------------
              |               |
              ↓               ↓
          FULFILLED        REJECTED


    Once a Promise becomes fulfilled or rejected,
    it is SETTLED.

    It cannot go back to pending.


    ============================================================
                CREATING A PROMISE
    ============================================================

    Promise constructor:

        new Promise(function(resolve, reject) {

        });


    It receives two functions:

        resolve
            → tells Promise the operation succeeded

        reject
            → tells Promise the operation failed


    IMPORTANT:

    resolve() does NOT perform the asynchronous operation.

    Your code performs the operation.

    resolve() simply tells the Promise:

        "The operation succeeded,
         and here is the result."


    reject() tells it:

        "The operation failed,
         and here is the reason."


    ============================================================
                    PROMISE ONE
    ============================================================
*/


const promiseOne = new Promise(function(resolve,reject){

    // async tasks - like do any async task here
    // Db call, cryptography, network call

    setTimeout(() => {

        console.log("Async task is complete");

        resolve(); 
        // resolve() changes Promise from pending → fulfilled
        //
        // .then() is connected to the fulfillment of
        // this Promise.
        //
        // resolve() does NOT perform the async task.
        // setTimeout() represents the async operation here.

    }, 1000);

})


// what does resolve and reject do.
// we can also write without holding in variable
//
// 2 parts:
//     1. Creation of Promise
//     2. Consumption of Promise
//
// .then() is used to consume the fulfilled result.

promiseOne.then(function(){

    console.log("promise consumed");

})



/*
    ============================================================
                    PROMISE TWO
    ============================================================

    We don't necessarily have to store the Promise in a variable.

    We can create and immediately consume it.
*/


new Promise(function(resolve,reject){

    setTimeout(function (){

        console.log("async task 2");

        resolve();

    }, 1000);

}).then(function(){

    console.log("promise 2 resolved");

})


/*
    Flow:

        Promise created
              ↓
           pending
              ↓
        setTimeout finishes
              ↓
          resolve()
              ↓
         fulfilled
              ↓
          .then()
              ↓
        callback runs


    ============================================================
                    PROMISE THREE
    ============================================================

    A Promise can also carry a VALUE when it resolves.

    resolve(value)

    The value passed to resolve() becomes the value received
    by the .then() callback.
*/


const promiseThree = new Promise(function(hogya,nhihua)
{
    setTimeout(function name(params){

        console.log("async task 3");

        hogya({
            username: "chai",
            email: "chai@example.com"
        });

    }, 1000);
})


promiseThree.then(function(data){

    console.log(data.username);
    console.log(data.email);

})


/*
    Here:

        hogya({
            username: "chai",
            email: "chai@example.com"
        });


    is exactly the same concept as:

        resolve(data);


    I used weird names here just to prove that:

        resolve
        reject

    are simply parameter names.

    JavaScript doesn't require those exact names.

    But conventionally ALWAYS use:

        resolve
        reject

    because they communicate intent clearly.


    Flow:

        resolve(data)
              ↓
        Promise fulfilled
              ↓
        .then(data => ...)
              ↓
        data available


    ============================================================
                    PROMISE FOUR
    ============================================================

    This example introduces:

        - resolve()
        - reject()
        - Promise values
        - .then()
        - Promise chaining
        - return from .then()
        - .catch()
        - .finally()
*/


const promiseFour = new Promise(function(resolve,reject) 
{
    setTimeout(() => {

        let error = false;

        if(!error){

            console.log("data retreived successfully");

            resolve({
                username:"aryan",
                email:"aryan@gmail.com"
            });

        }else{

            reject("ERROR: Something Went Wrong");

        }

    }, 2000);    
})


promiseFour.then(({username,email})=>{

    console.log(`username: ${username}, email: ${email}`);

    return username;

})
.then((username)=>{

    console.log(username);

})
.catch((error)=>{

    console.log(error);
    console.log("File Fetch Failed");

})
.finally(()=>{

    console.log("The Promise Is Either Resolved Or Rejected");

})


/*
    ============================================================
                    UNDERSTANDING THE CHAIN
    ============================================================

    The important thing:

        .then() RETURNS A NEW PROMISE.


    Therefore:

        promiseFour
            ↓
          .then()
            ↓
        new Promise
            ↓
          .then()
            ↓
        new Promise
            ↓
         .catch()
            ↓
        finally()


    ============================================================
                    RETURN FROM .then()
    ============================================================

    First .then():

        .then(({username,email})=>{

            return username;

        })


    Suppose:

        username = "aryan"


    Then:

        return username;


    returns:

        "aryan"


    That becomes the fulfillment value of the
    NEXT Promise in the chain.


    Therefore:

        .then((username)=>{

            console.log(username);

        })


    receives:

        "aryan"


    Mental model:

        Promise
           ↓
        .then()
           ↓
        return value
           ↓
        next Promise
           ↓
        next .then(value)


    This is called PROMISE CHAINING.


    ============================================================
                        .catch()
    ============================================================

    If a Promise in the chain is rejected:

        reject(error)


    the error can be handled by:

        .catch((error) => {
            ...
        });


    So:

        resolve()
            ↓
        .then()


    while:

        reject()
            ↓
        .catch()


    .catch() is basically the failure path.


    ============================================================
                        .finally()
    ============================================================

    finally() runs regardless of whether the Promise
    succeeds or fails.


        success
           ↓
          then
           ↓
        finally


        failure
           ↓
         catch
           ↓
        finally


    Common use:

        loading = true;

        request
            .then(...)
            .catch(...)
            .finally(() => {
                loading = false;
            });


    Whether the request succeeds or fails,
    loading should stop.


    ============================================================
                    PROMISE FIVE
    ============================================================

    Now we are going to consume a Promise using:

        async / await


    IMPORTANT:

        async / await DOES NOT REPLACE PROMISES.

    async / await is simply a cleaner way of working
    with Promise-based asynchronous operations.
*/


const promiseFive = new Promise(function(resolve,reject){

    setTimeout(() => {

        let error = false;

        if(!error){

            console.log("data retreived successfully");

            resolve({
                username:"Javascript",
                password:"1234"
            });

        }else{

            reject("ERROR: JS Went Wrong");

        }

    }, 2000);  

});


/*
    ============================================================
                        async
    ============================================================

    When a function is declared:

        async function ...


    that function ALWAYS returns a Promise.


    Example:

        async function hello(){
            return "hello";
        }


    hello() does NOT directly return:

        "hello"


    It returns a Promise that eventually fulfills with:

        "hello"


    ============================================================
                        await
    ============================================================

    await is used to consume a Promise.

    Example:

        const response = await promise;


    Meaning:

        "Wait for this Promise to settle,
         then give me its fulfilled value."


    IMPORTANT:

    await does NOT block the entire JavaScript runtime.

    It pauses the CURRENT async function.

    Other JavaScript/runtime work can continue.


    Conceptually:

        async function
              ↓
            await
              ↓
        function pauses
              ↓
        other work continues
              ↓
        Promise settles
              ↓
        function resumes


    ============================================================
                    CONSUMING PROMISE FIVE
    ============================================================
*/


async function consumePromise5(){

   try {

      const response = await promiseFive;

      console.log(response);

   } catch (error) {

      console.error(error);

   }

}


// IMPORTANT:
// This function is currently defined but NOT called.
//
// To execute it:
//
// consumePromise5();


/*
    ============================================================
                    WHY try / catch?
    ============================================================

    With Promise syntax:

        .then()
        .catch()


    With async/await:

        try
        catch


    Conceptually:

        .then()       ↔ success
        .catch()      ↔ failure

        try           ↔ success path
        catch         ↔ failure path


    ============================================================
                        FETCH()
    ============================================================

    Now we move from manually-created Promises
    to REAL asynchronous network operations.


    fetch() is a modern browser API used to make
    HTTP requests.


    IMPORTANT:

        fetch() RETURNS A PROMISE.


    Example:

        const promise = fetch(url);


    That Promise represents the eventual HTTP response.


    Flow:

        fetch(url)
             ↓
        HTTP request starts
             ↓
        Promise returned
             ↓
        network operation happens
             ↓
        Promise eventually fulfills/rejects


    ============================================================
                    GITHUB API + ASYNC/AWAIT
    ============================================================
*/


async function getUser(){

  try {

    const response = await fetch(
        'https://api.github.com/users/AryanYadav1024'
    );

    const data = await response.json();

    console.log(data);

  } catch (error) {

    console.error(error);

  }

}

getUser();


/*
    ============================================================
                    UNDERSTANDING FETCH
    ============================================================

    This:

        fetch(url)


    returns:

        Promise<Response>


    So:

        const response = await fetch(url);


    means:

        fetch()
            ↓
        Promise
            ↓
        await
            ↓
        Response object
            ↓
        response variable


    IMPORTANT:

    response is NOT yet the actual JSON object.

    response is a Response object containing information
    about the HTTP response and its body.


    ============================================================
                    response.json()
    ============================================================

    This line is extremely important:

        const data = await response.json();


    response.json() ALSO returns a Promise.


    Why?

    The response body has to be read and parsed.

    So:

        response
            ↓
        response.json()
            ↓
        Promise
            ↓
        await
            ↓
        JavaScript object


    Therefore we have TWO asynchronous steps:

        1. Wait for HTTP response

            await fetch(url)


        2. Parse response body as JSON

            await response.json()


    ============================================================
                    FETCH WITH .then()
    ============================================================

    The same operation can be written using
    Promise chaining.
*/


fetch('https://api.github.com/users/AryanYadav1024')

.then((response)=>{

    return response.json();

})

.then((data)=>{

    console.log(data);

})

.catch((error)=>{

    console.log(error);

})


/*
    ============================================================
                UNDERSTANDING THIS CHAIN
    ============================================================

    fetch(url)

        ↓

    Promise<Response>

        ↓

    .then(response => ...)

        ↓

    response.json()

        ↓

    Promise<JSON data>

        ↓

    .then(data => ...)

        ↓

    actual JavaScript object


    So this:

        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data));


    is conceptually similar to:

        const response = await fetch(url);
        const data = await response.json();


    ============================================================
                PROMISE vs ASYNC/AWAIT
    ============================================================

    PROMISE STYLE:

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });


    ASYNC/AWAIT STYLE:

        async function getUser(){

            try {

                const response = await fetch(url);

                const data = await response.json();

                console.log(data);

            } catch(error) {

                console.log(error);

            }

        }


    Both are Promise-based.

    async/await is NOT a replacement for Promises.

    Think:

                PROMISE
                   |
           -----------------
           |               |
        .then()        async/await
        .catch()          try/catch


    ============================================================
                PROMISE + EVENT LOOP
    ============================================================

    Promise callbacks are handled through the
    MICROTASK QUEUE.


    Simplified model:

        Call Stack
            ↑
            |
        Event Loop
            |
            ├── Microtask Queue
            |       └── Promise callbacks
            |
            └── Task/Macrotask Queue
                    └── timers / other tasks


    When:

        resolve()


    happens:

        Promise becomes fulfilled
              ↓
        .then() callback becomes a microtask
              ↓
        Microtask Queue
              ↓
        Call Stack
              ↓
        callback executes


    We will study the Event Loop separately in depth.


    ============================================================
                    COMPLETE BIG PICTURE
    ============================================================


                    JAVASCRIPT
                        |
                        ↓
                       V8
                        |
                   executes JS
                        |
                        ↓
                     fetch()
                        |
                        ↓
                    Promise
                        |
              Browser / Runtime
                        |
                   Networking
                        |
                        ↓
                     HTTP
                        |
                        ↓
                     Server
                        |
                        ↓
                    Database
                        |
                        ↓
                  HTTP Response
                        |
                        ↓
                Promise fulfilled
                        |
                        ↓
                Microtask Queue
                        |
                        ↓
                .then() / await
                        |
                        ↓
                   JavaScript
                        |
                        ↓
                       DOM


    ============================================================
                    IMPORTANT DEFINITIONS
    ============================================================

    XMLHttpRequest

        Older browser API commonly used to make HTTP
        requests and implement AJAX.


    AJAX

        Programming technique for making asynchronous
        requests and updating parts of a webpage without
        requiring a full page reload.


    Promise

        Object representing the eventual completion or
        failure of an asynchronous operation and its result.


    resolve()

        Marks a Promise as fulfilled and optionally provides
        its resulting value.


    reject()

        Marks a Promise as rejected and provides the reason
        for failure.


    .then()

        Registers a callback for a fulfilled Promise.

        Also returns a new Promise.


    .catch()

        Handles Promise rejection.


    .finally()

        Runs after the Promise settles, regardless of
        fulfillment or rejection.


    fetch()

        Modern browser API for making HTTP requests.

        Returns a Promise.


    async

        Makes a function return a Promise.


    await

        Suspends the current async function until a Promise
        settles and gives access to its fulfillment value.


    ============================================================
                    MOST IMPORTANT MENTAL MODEL
    ============================================================

    XMLHttpRequest
          ↓
       callbacks
          ↓
    callback complexity
          ↓
      Promises
          ↓
       fetch()
          ↓
     async/await


    The evolution is not:

        "Old technology was useless."

    It is:

        "How can we manage asynchronous work
         more cleanly?"


    CALLBACK:

        "Run this function when you're done."


    PROMISE:

        "Give me an object representing the result
         that will eventually exist."


    .then():

        "When it succeeds, do this."


    .catch():

        "If it fails, do this."


    async/await:

        "Let me write Promise-based code in a
         sequential-looking way."


    ============================================================
                    FINAL FLOW TO REMEMBER
    ============================================================

        fetch(url)
            ↓
        returns Promise
            ↓
        HTTP request happens asynchronously
            ↓
        server responds
            ↓
        Promise fulfills with Response
            ↓
        response.json()
            ↓
        returns another Promise
            ↓
        JSON is parsed
            ↓
        Promise fulfills with JavaScript object
            ↓
        .then(data)
        OR
        await
            ↓
        use the data


    THIS is the foundation for:

        APIs
        REST
        fetch
        async/await
        Express
        Node.js
        Event Loop
        Database calls
        Backend development


    Next major concept:

        EVENT LOOP
            ↓
        CALL STACK
            ↓
        WEB APIs / RUNTIME
            ↓
        MICROTASK QUEUE
            ↓
        CALLBACK / TASK QUEUE
            ↓
        PROMISES
            ↓
        async / await

*/