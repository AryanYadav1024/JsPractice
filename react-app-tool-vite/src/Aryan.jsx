
const username = "Aryan"
function Aryan(){
    return( // why brackets - expression cannot begin in another line because of ASI(auto semicolon insertion)
        // now you can't do multiple elements you can only return one element inside it can be multiple
        // before people used to return divs but now you can return fragment
        // <> </>
        <>
        <h1>Rendering our own file</h1>
        <p>Returning multiple elements using fragment</p>
        <h2>This is from child aryan which we import to app parent</h2>
        <p>Username {username}</p>
        {/* {final outcome not evaluating expression -> evaluated expression} */}
        </>
    )
}
export default Aryan