import { useState } from 'react';
// what is this -> imports a module which is just a reusable piece of code 
import './App.css'

/// VIMP -> Now counter will not update directly it needs hooks which react provides to update state
/* 
  why hooks -> taking counter as a variable onclick changes the value but doesn't tell react to 
  render the update only value is updated secondly we need to remember state.
  So we need hooks to remember the state and we need a function to change state
  The second value returned by useState is the function React gives you to request a state change.
  hooks using way is not same for different hooks 
*/
function App() {
  
  // let counter = 0
  const [counter,setCounter] = useState(0)
  const addValue = ()=>{ 
    // counter = counter + 1
    // this definitely increases the value but that doesn't mean react will render if again if variable is increases
    // so we something to tell react that state of function component(UI component is changed) render it again
    // therefore we have hooks
    setCounter(counter + 1)
    // why does this print old value? 
    // because react doesn't stop the function execution instead it sets or schedules a state change in a queue and doesn't update it immediately
    // the function ends and react takes snapshot of state so if I do setCounter(counter + 1) setCounter(counter + 1) multiple times
    // the counter will be updated by 1 because each render scheduled will have same state
    console.log(`Added ${counter}`);
    
  }
  const removeValue = ()=>{
    if(counter == 0) return;
    
    // counter = counter - 1
    setCounter(counter - 1)
    console.log(`Removed ${counter}`);

  }
  

  return (
    <div class = "meow">
      <h1>meow</h1>
      <h2>counter value: {counter}</h2>
      <button 
      onClick={addValue}
      class="button"> add value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      class="button"> remove value {counter}</button>
      <p>footer: {counter}</p>
    </div>
  )
}


export default App
