
import userContext from "./UserContext";
import { useState } from "react";

const userContextProvider = ({children}) => {
    const [user,setUser] = useState(null)
    return(
        <userContext.Provider value={{user,setUser}}>
        {children} 
        {/* how does {children} work here it means whatever is passed in the component
            block in the parent file will display here 
            Two type of passes are possible 
            1. component passing <c1 /> <c2 /> so react internally passes it as 
               {children: [ <c1 />, <c2 /> ]} 
            2. Or explicit prop passing by value={something} 
               now what will be rendered is children: something not the components
        */}
        </userContext.Provider>
    )
}

export default userContextProvider