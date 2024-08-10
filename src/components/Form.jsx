const Form = ({addTodo, text, handleInput}) => {
   
    return <div className="formWrapper">
        <input type="text" onChange={handleInput} value={text} placeholder="Please, input your text"/>
        <button onClick={() => addTodo(text)}>Save</button>
    </div>
}

export default Form;