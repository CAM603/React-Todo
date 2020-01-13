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
      toDos : [],
      currentToDo: {
        task: '',
        id: Date.now(),
        completed: false}
    };
  }
  addToDo = event => {
    event.preventDefault();
    const newToDo = this.state.currentToDo;
    const toDos = [...this.state.toDos, newToDo]
    this.setState({
      toDos: toDos, 
      currentToDo: {
        task: '',
        id: Date.now(),
        completed: false
      }
    })
  }
  handleInput = event => {
    const toDoText = event.target.value;
    const currentToDo = {task: toDoText, id: Date.now(), completed: false}
    this.setState({currentToDo})
  }
  toggle = (id) => {
    const newToDos = this.state.toDos.map(item => {
      return item.id === id ? {...item, completed: !item.completed} : item
    })
    this.setState({toDos: newToDos});
  }
  deleteToDo = () => {
    const newToDos = this.state.toDos.filter(item => {
      return item.completed === false;
    })
    this.setState({toDos: newToDos})
  }

  render() {
    return (
      <div>
        <TodoForm
        addToDo={this.addToDo}
        handleInput={this.handleInput}
        currentToDo={this.state.currentToDo}
        deleteToDo={this.deleteToDo}
        />
        <TodoList
        toDos={this.state.toDos}
        toggle={this.toggle}
        />
      </div>
    );
  }
}

export default App;
