import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './header.css';

class index extends Component {
    render() {
        return (
            <header className="header">
                <NavLink to="/" className="headerText">MyMovies.com</NavLink>
            </header>            
        );
    }
}

export default index;