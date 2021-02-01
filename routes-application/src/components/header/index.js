import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class index extends Component {
    render() {
        return (
            <header>Header | {<NavLink to='/' >Home</NavLink>} | {<NavLink to='/about' >About</NavLink>} <hr/></header>
        );
    }
}

export default index;