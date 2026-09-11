import userContext from "../context/UserContext"
import { useContext } from "react"

function Profile(){
    const {user} = useContext(userContext)
    if(!user) return <div>Please LogIN</div>

    return(
        <div>profile: Username: {user.username}, Password: {user.password}</div>
    )
}
export default Profile