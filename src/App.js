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
  addItem = () => {

  }
  deleteItem = () => {

  }
  toggleItem = () => {

  }
  
  render() {
    return (
      <div>
        <TodoForm />
        <TodoList
        list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
