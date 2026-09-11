import { useContext,useState } from "react"
import userContext from "../context/UserContext"
function Login(){
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const {setUser} = useContext(userContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <>
            <input type='text' 
            value={username}
            onChange={(e) => {
                setUsername(e.target.value)
            }}
            placeholder='Username' />
            <input type='text'
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            placeholder='Password' />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Login