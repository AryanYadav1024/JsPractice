// button function component accepts props from App componenet (parent)

function Button({addValue,counter=5}){ 
    return(
    <button onClick={addValue} className="w-32 mb-3 mx-auto bg-blue-500 hover:bg-red-500 text-white px-5 py-3 rounded-lg transition-colors duration-300">
       Click me
       <br/>
       {counter}
    </button>
    )
}

export default Button

