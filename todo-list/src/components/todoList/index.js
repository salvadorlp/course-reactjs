import React, { Component } from 'react'
import TodoItems from '../todoItems'
import '/code/course-reactjs/todo-list/src/style.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            list: []
        };

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    addTask(event){
        let state = this.state;
        if (this._taskInput.value !== ''){
            let newItem = {
                text: this._taskInput.value, 
                key: Date.now()
            }
            this.setState({ list: [...state.list, newItem]});
        }

        event.preventDefault();
        this.setState({ task: '' });
    }

    deleteTask(key){
        let state = this.state;
        let filtr = state.list.filter( (item) => {
            return( item.key !== key )
        })
        this.setState({list: filtr});
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.addTask}>
                    <input type="text" className="input-box" placeholder="New task ?" name="task" value={this.state.task} onChange={ (event) => { this.setState({ task: event.target.value }) }} ref={ (event) => this._taskInput = event }></input>
                    <button type="submit">Add +</button>
                </form>
                <div className="list">
                <TodoItems items={this.state.list} delete={this.deleteTask}/>
                </div>
            </div>
        );
    }
}

export default TodoList;