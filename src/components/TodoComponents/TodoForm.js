import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }
    handleChange = e => {
        this.setState({item: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.item)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <lable>To Do</lable>
                    <input
                    type="text"
                    value={this.state.item}
                    onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;