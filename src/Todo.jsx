import { useState } from 'react';
import './Todo.css'

const COLORS = ["red", "blue", "pink", "purple", "white"]
const todos = [
    { task: "Mow the backyard", id: crypto.randomUUID },
    { task: "Work on Odin Project", id: crypto.randomUUID },
    { task: "Finish Math Homework", id: crypto.randomUUID }
]

export function Button ({text = "Click Me", color = "purple", fontSize = 12, handleClick }) {

     const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    };
    return <button onClick={handleClick} style={buttonStyle}>
        {text}
    </button>
};

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

export function TodoList() {
    const handleButtonClick = (url) => {
        window.location.href = url;
    };
    return (
        <>
        <Button text = "click me!" color = "blue" fontSize={28}/>
        <Button text = "no click me!" color = "red" fontSize={28}/>
        <Button handleClick={() => handleButtonClick ('www.theodinproject.com')} />
        <ul>
            {todos.map((todo) => (
            <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
        </>
    )
}
