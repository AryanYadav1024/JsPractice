

function ColorCard({name,color,changeColor}){
    return(
        <button 
            className="color-card"
            style={{backgroundColor: color}}
            onClick={()=> changeColor(color)}
        >
            {name}
        </button>
    )
}

export default ColorCard