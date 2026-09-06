import { useState } from 'react'

import ColorBar from './components/ColorBar'


function App() {
  const [color, setColor] = useState('#313131')
  return (
   <div className="app" style={{backgroundColor: color}}>
     <h1 className="MainHeading">Color Changer</h1>
     <div className="color-bar-container">
     <ColorBar changeColor={setColor}/>
     </div>
   </div>
  )
}

export default App
