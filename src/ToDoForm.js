import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ToDoForm.css';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { todoInp: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        // TODO
        this.setState({ todoInp: evt.target.value });
    }

    handleSubmit(evt) {
        // TODO
        const key = uuidv4();
        evt.preventDefault();                                       // Prevent refresh
        this.props.addListItems({...this.state, id: key});          // Invoke method to alter parent's state to pass data
        this.setState({ todoInp: "" });                             // Reset text field
    }

    render() {
        return (<div>
            <h6>New ToDo</h6>
            <form onSubmit={this.handleSubmit}>
                <input 
                    id="todoInp"
                    type="text"
                    value={this.state.todoInp}
                    onChange={this.handleChange}
                />
                <button>Add Item</button>
            </form>
        </div>);
    }
}

export default ToDoForm;