import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Error extends Component {
    render() {
        return (
            <div>
                <h1>We didn't find what you are looking for...</h1>
                <h2>Maybe you can search more here: </h2>
                <NavLink to="/">Home</NavLink> <br/>
                <NavLink to="/about">About</NavLink>
            </div>
        );
    }
}

export default Error;