import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Home from "./pages/Home"
import Movie from "./pages/Movie"
import Header from "./components/Header"
import ErrorPage from "./pages/ErrorPage"

const Routes = () => {
    return(
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/movie/:id" component={Movie}></Route>
            <Route path="*" component={ErrorPage}></Route>
        </Switch>
    </Router>
    )
}

export default Routes;