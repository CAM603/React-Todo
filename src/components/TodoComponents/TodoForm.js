import React from 'react';

const TodoForm = (props) => {

    return (
        <div>
            <form onSubmit={props.addTodo}>
                <label>Add Todo</label>
                <input
                name="name"
                value={props.currentTodo.task}
                onChange={props.handleInput}
                />
                <button type="submit">Submit</button>
                <button>Clear All</button>
            </form>
        </div>
    )
}

export default TodoForm;