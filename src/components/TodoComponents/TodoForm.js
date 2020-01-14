import React from 'react';
import { StyledForm } from '../../styles/StyledForm';

const TodoForm = (props) => {

    return (
        <StyledForm>
            <form onSubmit={props.addToDo}>
                <label>My To Do List</label>
                <input
                name="name"
                value={props.currentToDo.task}
                onChange={props.handleInput}
                />
                <button type="submit">Add</button>
            </form>
        </StyledForm>
    )
}

export default TodoForm;