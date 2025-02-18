const todos = [
    { task: "Mow the backyard", id: crypto.randomUUID },
    { task: "Work on Odin Project", id: crypto.randomUUID },
    { task: "Finish Math Homework", id: crypto.randomUUID }
]

export function Button ({text, color, fontSize}) {
    const buttonStyle ={
        color: color,
        fontSize: fontSize + 'px'
    };
    return <button style = {buttonStyle}>{text}</button>
}

export function TodoList() {
    return (
        <>
        <Button text = "click me!" color = "blue" fontSize={28}/>
        <Button text = "no click me!" color = "red" fontSize={28}/>
        <ul>
            {todos.map((todo) => (
            <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
        </>
    )
}
