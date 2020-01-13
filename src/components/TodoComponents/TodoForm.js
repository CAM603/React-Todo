import React from 'react';

const TodoForm = (props) => {

    return (
        <div>
            <form onSubmit={props.addToDo}>
                <label>Add Todo</label>
                <input
                name="name"
                value={props.currentToDo.task}
                onChange={props.handleInput}
                />
                <button type="submit">Add</button>
                <button onClick={() => props.deleteToDo()}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;