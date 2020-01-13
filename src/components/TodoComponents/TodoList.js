// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

import { StyledToDoList } from '../../styles/StyledToDoList';

const TodoList = (props) => {

    return (
        <StyledToDoList>
            {props.toDos.map(toDo => (
                <Todo
                key={toDo.id}
                task={toDo.task} 
                completed={toDo.completed}
                id={toDo.id}
                toggle={props.toggle}
                />
            ))}
        </StyledToDoList>
    )
}

export default TodoList;