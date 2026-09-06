
import { useState } from 'react'

import Button from './components/button';

import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  const [counter2, setCount2] = useState(0)
  function addValue(setter,value){
    setter(value + 1)
    setter(value + 1)
    setter(value + 1)
    setter(value + 1)
    // now this will produce a batch but and scheduled in a hook queue with each one having same state to effectively they do not work as imagined
    // there we have function value pass 
    // setter(c => c + 1) 1
    // setter(c => c + 1) 2
    // this is a method react provides -> abstraction internally it has code to implement this
    // let newState = function(state){return state + 1} then passes on to another and so on
  }
  return (
    <>
    <h1 className="text-3xl font-bold italic">
      Hello Tailwind!
    </h1>
    {/* passing prop to child component button from parent component
        ()=> addValue() -> this internally evaluates to a function */}
    <Button addValue={()=> addValue(setCount,counter)} counter={counter}/>
    <Button addValue={()=> addValue(setCount2,counter2)} counter={counter2}/>
    </> 
  )
}

export default App
