import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import 'C:\code\course-reactjs\movies-project\src\pages\Home\home.css'

class ErrorPage extends Component {

    render() {
        return (
            <div className="container">
                <h1>Sorry, we didn't find what you've looking for...</h1>
                <h2>You might find out here: </h2>
                <NavLink to="/">Home</NavLink>
            </div>
        );
    }
}

export default ErrorPage;