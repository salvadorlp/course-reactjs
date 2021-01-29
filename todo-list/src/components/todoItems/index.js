import React, { Component } from 'react'
import '/code/course-reactjs/todo-list/src/style.css';

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            this.props.items.map( (item) => {
                return(
                    <a className="item" onClick={ () => this.props.delete(item.key) } key={item.key}> { item.text } <input type="checkbox"></input></a>
                );
            } )
        );
    }
}

export default index;