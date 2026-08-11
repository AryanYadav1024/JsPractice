/* 
    What really is an execution context? 
        Think of it as a workspace JS creates to execute the code
    JavaScript has main thing called - JavaScript Execution Context for running 
    
    Two - phases - memory and execution
    
    In browsers:
    global object -> Window 

    In Node.js:
    global object -> global 
    
    `this` inside the global execution context depends
    on the environment (browser, Node, module, strict mode).

    Execution Context ≠ Global Object.
    The execution context contains references like

    Global Execution Context
    ↓
    Lexical Environment
    Variable Environment
    this binding
    
    1.
    - {} Global EC -> the first execution context created when a js program starts
        this works in threading js is single threaded
    - {} Function EC 
    - in mongoose - EVAL EC this is a property of Global EC

    2.
    how does js code run 
    1. Memory creation phase or creation phase ( Memory creation )
        * Memory Creation phase js scans the entire code
        * Variables allocated memory - Initialized as undefined
        * Funtion Declaration - Entire function stored in memory 
    2. Execution Phase 
        * Code runs Line by Line
        * Variables recieve values
        * functions are called 
        * expressions are evaluated 

    suppose I have example code file 
    let val1 = 10
    let val2 = 65
    function addNum(num1,num2){
        let total = num1+num2
        return total
    }
    let result1 = addNum(val1,val2)
    let result2 = addNum(5,10)

    Now how does execution goes? 
    Step 1: Sbse phele Global execution context <- this (also called global enviornment)
    Step 2: Memory phase - This is our first Cycle
            * phele aya val1 -> undefined jayega 
            * All variables are first valued as undefined.
            * now for addNum -> defination (in case of function defination goes inside)
            * result1 -> undefined 
            * result2 -> undefined 
    Step 3: Execution phase - Values are added expressions are solved
            * val1 -> 10
            * val2 -> 65
            * addNum -> This makes its another execution context 
                * [sandbox] - new variable enviornment + execution thread 
                * so due to a sandbox - memory phase and execution phase happens again 
                * Memory Phase 
                    * val1 -> undefined
                    * val2 -> undefined
                    * total -> undefined 
                * Execution phase 
                    * num1 -> 10
                    * num2 -> 65  
            * result1 -> 75
            * result2 -> same repetition (another execution context) 
                * sandboxing memory phase + execution phase 
    Call Stack ->  |            |
                   |____________|
                   |____________| -> sometimes nested functions on call stack so LIFO (Last In First Out)
                   |____________| -> one() -> executes gets pop() 
                   |____________| -> global execution context
                   LIFO -> Last In First Out -> meaning recent stacked function executes first and removed
                   
    JavaScript first prepares memory for the whole program (Creation Phase)
    then executes the code line by line (Execution Phase).
    Every function call creates a brand-new execution context with its own memory,
    and the Call Stack keeps track of which context is currently running.
 */


    /*
==============================================================================
                    JAVASCRIPT EXECUTION CONTEXT FLOW
==============================================================================

Program Starts
      │
      ▼
1. Global Execution Context (GEC) is Created
      │
      ├── Created ONLY ONCE for the entire program.
      ├── Contains:
      │     • Memory Area
      │     • Execution Thread
      │     • this Binding
      │
      ▼
2. Memory Creation Phase (Inside GEC)
      │
      ├── Scan the entire file.
      ├── Variables       -> undefined
      ├── Function        -> Entire function stored in memory
      └── No code executes yet.
      │
      ▼
3. Execution Phase (Inside GEC)
      │
      ├── Code runs line by line.
      ├── Variables receive values.
      ├── Expressions are evaluated.
      └── Function calls are encountered.
      │
      ▼
4. Function Call?
      │
      ├── NO
      │     └── Continue executing inside GEC.
      │
      └── YES
            │
            ▼
5. Create Function Execution Context (FEC)
            │
            ├── New Memory Area
            ├── New Execution Thread
            └── New this Binding
            │
            ▼
6. Memory Creation Phase (Inside FEC)
            │
            ├── Parameters      -> undefined
            ├── Local Variables -> undefined
            └── Nested Functions stored.
            │
            ▼
7. Execution Phase (Inside FEC)
            │
            ├── Arguments assigned to parameters.
            ├── Local variables receive values.
            ├── Function body executes.
            └── return statement reached.
            │
            ▼
8. Function Finishes
            │
            ├── Function Execution Context destroyed.
            ├── Removed (Pop) from Call Stack.
            └── Memory released.
            │
            ▼
9. Resume Previous Execution Context
            │
            └── Usually the Global Execution Context.
            │
            ▼
10. Program Ends
            │
            ├── Global Execution Context destroyed.
            └── Call Stack becomes empty.



==============================================================================
                           CALL STACK (LIFO)
==============================================================================

Example:

function one(){
    two();
}

function two(){
    three();
}

function three(){
    console.log("Hello");
}

one();


Call Stack while executing:

            ┌───────────────┐
            │   three()     │  ← Executes first, finishes first
            ├───────────────┤
            │    two()      │
            ├───────────────┤
            │    one()      │
            ├───────────────┤
            │      GEC      │
            └───────────────┘


Execution Order:

three() finishes
        ↓
Pop three()

two() finishes
        ↓
Pop two()

one() finishes
        ↓
Pop one()

Only GEC remains.

Program ends
        ↓
Pop GEC


==============================================================================
                        GOLDEN RULE (REVISION)
==============================================================================

1. JavaScript first creates ONE Global Execution Context.
2. Inside GEC:
      • Memory Phase
      • Execution Phase
3. Every function call creates a NEW Function Execution Context.
4. Every Function Execution Context again has:
      • Memory Phase
      • Execution Phase
5. After the function returns, its Execution Context is destroyed.
6. JavaScript resumes the previous Execution Context.
7. When the whole program finishes, the Global Execution Context is destroyed.

Think of it like this:

Program Starts
      ↓
Global Office (GEC)
      ↓
Function Called
      ↓
Temporary Meeting Room (FEC)
      ↓
Meeting Ends
      ↓
Return to Global Office
      ↓
Program Ends
      ↓
Office Closes
*/