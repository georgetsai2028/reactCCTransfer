const todos = [
    { task: "Mow the backyard", id: crypto.randomUUID },
    { task: "Work on Odin Project", id: crypto.randomUUID },
    { task: "Finish Math Homework", id: crypto.randomUUID }
]

export function Button ({text = "Click Me", color = "purple", fontSize = 12, handleClick }) {
    const buttonStyle ={
        color: color,
        fontSize: fontSize + 'px'
    };
    return <button onClick={handleClick} style={buttonStyle}>
        {text}
    </button>
};


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
