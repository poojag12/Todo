import React, {useState, useEffect} from 'react';
import Form from "./Form";

export function hello() {
    console.log("Hello World");
}

function Todo(){
    const [todos, setTodo] = useState([]);
    const [currentTodoText, addTodo] = useState("");

    useEffect(() => {
        hello();
    }, []);
    const addTodoClick = (e) => {
       const newTodo = [...todos, currentTodoText];
        e.preventDefault();
        setTodo(newTodo);
        addTodo("")
    };

    return (
        <div className="App">
            <h1>ToDo</h1>
            <div>
                <Form addTodo={addTodo} addTodoClick={addTodoClick}
                      currentValue={currentTodoText}/>
                <ul className="todo-list">{todos.map(todo => <h1 key={todo}>{todo}</h1>)}</ul>
            </div>
        </div>
    );
}

export default Todo;
