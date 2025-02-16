const todos = [
    { task: "Mow the backyard", id: crypto.randomUUID },
    { task: "Work on Odin Project", id: crypto.randomUUID },
    { task: "Finish Math Homework", id: crypto.randomUUID }
]

function TodoList() {
    return (
        <ul>
            {todos.map((todo) => (
            <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    )
}

export default TodoList;