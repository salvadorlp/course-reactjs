import React, { Component } from 'react';
import TodoList from './components/todoList';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="container">
        <header className="header">Todo List</header>
        <TodoList/>
      </div>
    );
  }
}

export default App;