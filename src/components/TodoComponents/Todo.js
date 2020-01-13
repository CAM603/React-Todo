import React from 'react';
import './Todo.css';

const Todo = (props) => {

    return (
        <div className={`toDo${props.completed ? ' completed' : ''}`} onClick={() => props.toggle(props.id)}>{props.task}</div>
    )
}

export default Todo;