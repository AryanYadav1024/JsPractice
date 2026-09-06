import ColorCard from "./ColorCard"

function ColorBar({changeColor}){
    const cards = [{name: 'Red',color: 'red'},
    {name: 'Green',color: 'green'},
    {name: 'Olive',color: 'olive'},
    {name: 'Gray',color: 'gray'},
    {name: 'Blue',color: 'blue'},
    {name: 'Pink',color: 'pink'},
    {name: 'Purple',color: 'purple'},
    ];
    return(
        <div className="color-bar">
            {cards.map((item) => {
                return (
                    <ColorCard 
                        key={item.name}
                        name={item.name}
                        color={item.color}
                        changeColor={changeColor}
                    />
                )
            })}
        </div>
    )
}

export default ColorBar