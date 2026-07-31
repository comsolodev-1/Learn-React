import React, {useState} from 'react'

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColor(event){
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <p>Select a color: </p>
            <input type="color" value={color} onChange={handleColor}/>
        </div>
    );
}
export default ColorPicker