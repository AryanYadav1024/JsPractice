

function ColorCard({name,color,changeColor}){
    return(
        <button 
            className="color-card"
            style={{backgroundColor: color}}
            onClick={()=> changeColor(color)}
            // here we are providing js a function reference and it executes it when the event happens 
        >
            {name}
        </button>
    )
}

export default ColorCard