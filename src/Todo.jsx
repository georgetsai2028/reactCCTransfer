import { useState } from 'react';
import './Todo'

const COLORS = ["red", "blue", "pink", "purple", "white"]

export function ChangeColor(){
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
    const onButtonClick = (color) => () => {
        setBackgroundColor(color);
    };
    return (
        <div className = "ChangeColor" style ={{backgroundColor}} >
            {COLORS.map((color) => (
                <button type = "button" key ={color} onClick={onButtonClick(color)}
                className={backgroundColor === color ? 'selected' : ''}
            >
                {color}
            </button>
            ))}
        </div>
    )
}


