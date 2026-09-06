
import { useState } from 'react'

import Button from './components/button';

import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  const [counter2, setCount2] = useState(0)
  function addValue(setter,value){
    setter(value + 1)
  }
  return (
    <>
    <h1 className="text-3xl font-bold italic">
      Hello Tailwind!
    </h1>
    {/* passing prop to child component button from parent component */}
    <Button addValue={()=> addValue(setCount,counter)} counter={counter}/>
    <Button addValue={()=> addValue(setCount2,counter2)} counter={counter2}/>
    </> 
  )
}

export default App
