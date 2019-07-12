import React from 'react';

function Form({currentValue, addTodo, addTodoClick}) {
    return (<>
            <form className="form">
                <input type="text" value={currentValue} onChange={(e) => addTodo(e.target.value)}/>
                <button className="btn-primary" type="submit" onClick={(e) => addTodoClick(e)}>Add</button>
            </form>
        </>
    );
}

export default Form;
