import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list : [{
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      }]
    }
  }
  addItem = (item) => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      list: [...this.state.list, newItem]
    })
  }
  toggleItem = (id) => {
    const newList = this.state.list.map(item => {
      return item.id === id ? {...item, completed: !item.completed} : item
    })
    this.setState({list: newList})
  }

  deleteItem = () => {
    const newList = this.state.list.filter(item => {
      return item.completed === false;
    })
    this.setState({list: newList})
  }
  
  render() {
    return (
      <div>
        <TodoForm
        addItem={this.addItem}
        />
        <TodoList
        list={this.state.list}
        toggleItem={this.toggleItem}
        deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
