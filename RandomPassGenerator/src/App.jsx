import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // useRef hook
  const passwordRef = useRef(null)
  /*
    ============================
    useCallback + Closure
    ============================

    passGenerator is a function that depends on:

      - length
      - numberAllowed
      - characterAllowed

    Because passGenerator accesses these variables, the function
    forms a CLOSURE over the values from the render in which it
    was created.

    Important:

    Closure
    → JavaScript feature
    → allows a function to access variables from its
      surrounding lexical environment

    useCallback
    → React hook
    → memoizes the FUNCTION REFERENCE between renders
    → React can reuse the previous function if dependencies
      have not changed

    useCallback DOES NOT:
      - execute the function
      - itself update state
      - create the closure
      - make state automatically update

    Conceptually:

      useCallback(function, dependencies)

      dependencies unchanged
            ↓
      reuse previous function reference

      dependency changed
            ↓
      create/use the function from the new render


    Example:

      const fn = useCallback(() => {
        console.log(length)
      }, [length])


    Render #1:

      length = 8
      fn closes over length = 8


    If some unrelated state changes:

      length = 8
      dependency unchanged
            ↓
      React can reuse the same fn reference


    If length changes:

      length = 10
      dependency changed
            ↓
      React creates a new function for this render
      which closes over length = 10


    IMPORTANT:

    The closure is NOT what changes the state.

    The closure gives passGenerator access to the values
    from its render.

    setPassword() is what requests a React state update.
  */

  const passGenerator = useCallback(() => {

    let pass = ""

    let templateStr =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      templateStr += "1234567890"
    }

    if (characterAllowed) {
      templateStr += "!@#$%^&*~"
    }

    for (let i = 0; i < length; i++) {

      pass += templateStr[
        Math.floor(Math.random() * templateStr.length)
      ]

    }

    /*
      setPassword does NOT directly change the local variable
      password.

      It tells React:

        "Update the state associated with this useState hook
         to this new value and schedule a render."
    */

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  /*
    ============================
    State updater function
    ============================

    Prefer:

      setNumberAllowed(prev => !prev)

    instead of:

      setNumberAllowed(!numberAllowed)

    Why?

    The functional form tells React:

      "Take the latest state and calculate the next state from it."

    This is especially useful when multiple updates may be
    queued/batched or when the update depends on previous state.
  */

  const numAllowed = () => {
    setNumberAllowed(prev => !prev)
  }


  const charAllowed = () => {
    setCharAllowed(prev => !prev)
  }


  /*
    ============================
    useEffect
    ============================

    useCallback DOES NOT execute passGenerator when a dependency
    changes.

    It only gives us the memoized function reference.

    useEffect is what executes passGenerator here.

    Whenever one of these dependencies changes:

      length
      characterAllowed
      numberAllowed

    React runs this effect:

      passGenerator()
  */

  useEffect(() => {

    passGenerator()

  }, [passGenerator])


  /*
    Why [passGenerator] instead of:

      [length, characterAllowed, numberAllowed]

   ?

    Because the effect directly depends on passGenerator.

    passGenerator itself depends on:

      length
      numberAllowed
      characterAllowed

    useCallback creates a new function reference whenever
    one of those dependencies changes.

    Therefore:

      length changes
            ↓
      passGenerator reference changes
            ↓
      useEffect dependency changed
            ↓
      effect runs
            ↓
      passGenerator()
            ↓
      setPassword(...)
            ↓
      React renders again


    This creates the chain:

      STATE
        ↓
      useCallback dependency changes
        ↓
      new passGenerator reference
        ↓
      useEffect dependency changes
        ↓
      passGenerator executes
        ↓
      setPassword()
        ↓
      React schedules render
  */


  return (

    <div className="bg-emerald-900 rounded-lg my-30 w-auto main">

      <h2 className="my-10 text-3xl italic font-bold">
        Password Generator!
      </h2>

      <div className="text-black w-full max-w-xl bg-gray-700 flex shadow rounded-lg overflow-hidden mb-4">

        <input
          type="text"
          value={password}
          className="outline-none flex-1 text-center py-2 px-3 bg-white"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />

        <button 
        onClick={copyPasswordToClipboard} 
        className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
          Copy
        </button>

      </div>


      <div className="flex text-sm gap-x-2">

        {/* Length */}

        <div className="flex items-center gap-x-1">

          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            id="length"
            onChange={(e) => {
              setLength(e.target.value)
            }}
          />

          <label htmlFor="length">
            Length: {length}
          </label>

        </div>


        {/* Numbers */}

        <div className="flex items-center gap-x-1">

          <input
            type="checkbox"
            className="cursor-pointer"
            checked={numberAllowed}
            id="num"
            onChange={numAllowed}
          />

          <label htmlFor="num">
            Number Allowed: {numberAllowed ? "Yes" : "No"}
          </label>

        </div>


        {/* Characters */}

        <div className="flex items-center gap-x-1">

          <input
            type="checkbox"
            className="cursor-pointer"
            checked={characterAllowed}
            id="char"
            onChange={charAllowed}
          />

          <label htmlFor="char">
            Characters Allowed: {characterAllowed ? "Yes" : "No"}
          </label>

        </div>

      </div>

    </div>
  )
}

export default App