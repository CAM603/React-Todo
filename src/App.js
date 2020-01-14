import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { StyledApp } from './styles/StyledApp';

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
  componentDidMount() {
    if (window.localStorage.getItem('toDos')) {
      return this.setState({toDos: [...JSON.parse(window.localStorage.getItem('toDos'))]})
    }
  }
  addToDo = event => {
    if (!this.state.currentToDo.task) {
      event.preventDefault();
      return
    } else if (this.state.toDos.find(item => item.task === this.state.currentToDo.task)) {
      event.preventDefault();
      return
    }
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
    window.localStorage.setItem('toDos', JSON.stringify([...this.state.toDos, newToDo]))
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
    window.localStorage.setItem('toDos', JSON.stringify(newToDos))
  }
  
  deleteToDo = () => {
    const newToDos = this.state.toDos.filter(item => {
      return item.completed === false;
    })
    
    this.setState({toDos: newToDos})
    window.localStorage.setItem('toDos', JSON.stringify(newToDos))
  }

  render() {
    return (
      <StyledApp>
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
        <button className="clear" onClick={() => this.deleteToDo()}>Clear Completed</button>
      </StyledApp>
    );
  }
}

export default App;
