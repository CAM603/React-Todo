import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      toDos : [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      currentTodo: {
        task: '',
        id: Date.now(),
        completed: false}
    };
  }
  addTodo = event => {
    event.preventDefault();
    const newTodo = this.state.currentTodo;
    const todos = [...this.state.toDos, newTodo]
    this.setState({
      toDos: todos, 
      currentTodo: {
        task: '',
        id: Date.now(),
        completed: false
      }
    })
  }
  handleInput = event => {
    const todoText = event.target.value;
    const currentTodo = {task: todoText, id: Date.now(), completed: false}
    this.setState({currentTodo})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
        addTodo={this.addTodo}
        handleInput={this.handleInput}
        currentTodo={this.state.currentTodo}
        />
        <TodoList
        todos={this.state.toDos}
        />
      </div>
    );
  }
}

export default App;
