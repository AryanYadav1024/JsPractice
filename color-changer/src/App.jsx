import { useState } from 'react'

import ColorBar from './components/ColorBar'


function App() {
  const [color, setColor] = useState('#313131')
  return (
   <div className="app" style={{backgroundColor: color}}>
     <a href="/" style={{color: '#c4c4c4', textDecoration: 'none'}}><h1 className="MainHeading">Color Changer</h1></a>
     <div className="color-bar-container">
     <ColorBar changeColor={setColor}/>
     </div>
   </div>
  )
}

export default App
