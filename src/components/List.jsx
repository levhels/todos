
const List = ({todos, user, toggleTodo}) => {
    console.log("props", todos, user)
    return <div><ul className="todolist">{todos.map((todo)=>{
    return <li className="todoitem" key={todo.id}>
        <input type="checkbox" checked={todo.done} onChange={()=>{toggleTodo(todo.id)}}/>
        <span className="todotitle">{todo.title}</span></li>
    })}</ul></div>
}

export default List