import Aryan from './Aryan.jsx'
// keep component name capital also keep file name capital 
// vite mai jsx use but cra mai js works fine
function App() {

  // return (
  //   <h1>Hello REACT project using vite | Aryan Yadav</h1>
  // )

  return(
    <>
    <Aryan />
    <h2>This is from main APP</h2>
    </>
  )
  
}

export default App
// this default is feature of es6 with default also works but during import
// we would have to do import {name} from 'file'
