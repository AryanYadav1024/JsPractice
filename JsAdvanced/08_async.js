/*
    So javascript is single threaded and synchronous, meaning that it can only do one thing at a time. 
    However, it can handle asynchronous operations using callbacks, promises, and async/await. 
    This allows JavaScript to perform tasks like fetching data from an API or reading files without blocking the main thread.


    An execution context is an abstract environment created by the JavaScript engine to evaluate and execute code.
    Think of it as a container or a workspace that holds all the variables, functions, and information needed for the
    current code to run. Everything in JavaScript executes inside an execution context.

    line executes one by one 
    two types of code in js - blocking code(blocks the execution or program flow) vs non-blocking code(doesn't block the execution of other code)
    
    JavaScript itself is single-threaded and synchronous, but the environment around JavaScript provides asynchronous capabilities.
    
                JavaScript Engine

                 Call Stack
                    |
                    |
                    v

             Execute synchronous code

                    |
                    |

                Browser APIs
                (setTimeout, fetch, DOM)

                    |
                    |

              Callback Queue

                    |
                    |

              Event Loop checks if the call stack is empty and pushes the callback from the queue to the call stack

                    |
                    |

              Back to Call Stack


            so javascripts work as synchronous but the environment around it provides asynchronous capabilities. 

            console.log('Start'); * js executes this on call stack line by line 
            setTimeout(() => { * sees this sends it to browser api and continues executing the next line
                console.log('Timeout');
            }, 2000);
            console.log('End'); * this executes on call stack line by line again 
            now when the timeout is completed, the callback function is sent to the callback queue(task queue) and waits for the call stack to be empty.
            event loop checks if the call stack is empty and pushes the callback from the queue to the call stack, so it executes the callback
            function and prints 'Timeout' after 2 seconds.
            
            Output:
            Start,End,Timeout 




            some new type of web api - fetch() and a high priority task queue was added 
            -- what it does is - it has something called promise 

*/

console.log("start");
setTimeout(() => {
    console.log("timeout 5s");
}, 5000);
console.log("end");
setTimeout(() => {
    console.log("timeout 2s");
}, 2000);