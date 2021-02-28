import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItems from './ToDoItems';
import './ToDoCreator.css';

class ToDoCreator extends Component {
    constructor(props) {
        super(props);
        this.state={ listItems: [] };
        this.addListItems = this.addListItems.bind(this);
        this.removeItems = this.removeItems.bind(this);
    }

    addListItems(listItem) {
        this.setState(state => (
            { listItems: [...state.listItems, listItem] }
        ));
    }

    removeItems(id) {
        this.setState(state => (
            { listItems: state.listItems.filter(listItem => listItem.id !== id) }
        ));
    }

    renderList() {
        return (this.state.listItems.map(listItem => <ToDoItems key={listItem.id} id={listItem.id} text={listItem.todoInp} removeItem={this.removeItems}/>));
    }

    render() {
        return (<div>
            <h1>Strike Out!</h1>
            {this.renderList()}
            <ToDoForm addListItems={this.addListItems}/>
        </div>);
    }
}

export default ToDoCreator;