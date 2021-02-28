import React, { Component } from 'react';
import './ToDoItems.css';

class ToDoItems extends Component {
    constructor(props) {
        super(props);
        this.state = { isComplete: false, isEditActive: false, editInp: "" };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleRemove(evt) {
        // Handle Remove button here
        this.props.removeItem(this.props.id);
    }

    handleComplete(evt) {
        // Add class to strike through text if clicked
        this.setState({ isComplete: !this.state.isComplete });
    }

    handleEdit(evt) {
        // Handle Edit button here
        this.setState({ isEditActive: !this.state.isEditActive });
    }

    handleChange(evt) {
        // TODO
        this.setState({ todoInp: evt.target.value });
    }

    handleSubmit(evt) {
        // TODO
        // const key = uuidv4();
        evt.preventDefault();                                       // Prevent refresh
        // this.props.addListItems({...this.state, id: key});          // Invoke method to alter parent's state to pass data
        this.setState({ todoInp: "" });                             // Reset text field
    }

    render() {
        const cssClass = this.state.isComplete ? "strike-through" : "";
        return (<div>
            {!this.state.isEditActive && <ul>
                <li onClick={this.handleComplete} className={cssClass}>
                    {this.props.text}
                    <i className="fas fa-pen" onClick={this.hanndleEdit}></i>
                    <i className="fas fa-trash" onClick={this.handleRemove}></i>
                </li>
            </ul>}
            {this.state.isEditActive && <form onSubmit={this.handleSubmit}>
                <input 
                    id="editInp"
                    type="text"
                    value={this.state.editInp}
                    onChange={this.handleChange}
                />
                <button>Add Item</button>
            </form>}
        </div>); 
    }
}

export default ToDoItems;