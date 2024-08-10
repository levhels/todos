
import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'

const initialTodos = [{
  "id":1,
  "title":"learn react",
  "done":false,
},
{
  "id":2,
  "title":"learn figma",
  "done":true,
},
{
  "id":3,
  "title":"learn maths",
  "done":false,
}]

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");

  const addTodo = (text) => {
    console.log("todo added",text);
    const newTodo = {
      "id": new Date().toISOString(),
      "title": text,
      "done":false
    };
    setTodos([...todos, newTodo]);
    setText("");
  }

  const handleInput = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id){
        return {...todo, done: !todo.done};
      } else return todo
    }))
    
  }
  return (
    
    <>
      <div className="wrapper">
        <h1>
          To do list
        </h1>
        <Form addTodo={addTodo} text={text} handleInput={handleInput}/>
        <List todos={todos} user={"Lev"} toggleTodo={toggleTodo}/>
      </div>
    </>
  )
}

export default App
